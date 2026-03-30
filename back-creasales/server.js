import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { tool, Agent, Runner, withTrace } from '@openai/agents';
import { z } from 'zod';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

const allowedOrigins = [
  'https://main.d1oz19b6a7gg7i.amplifyapp.com',
  'https://creasales.com',
  'https://www.creasales.com',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('No permitido por CORS'));
  }
}));

app.use(express.json({ limit: '10kb' }));

// ================= EMAIL =================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.mail.us-west-2.awsapps.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ================= TOOL: SEND CONTACT EMAIL =================
const sendContactEmail = tool({
  name: 'send_contact_email',
  description: 'Envia un email al equipo de Creasales con los datos del usuario cuando quiere ser contactado',
  parameters: z.object({
    name: z.string().describe('Nombre completo del usuario'),
    email: z.string().describe('Email del usuario'),
    phone: z.string().describe('Numero de celular del usuario'),
    contact_reason: z.string().describe('Asunto o motivo de contacto')
  }),
  execute: async ({ name, email, phone, contact_reason }) => {
    try {
      await transporter.sendMail({
        from: `"${name} (Chat IA)" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_TO || 'contacto@creasales.com',
        subject: `Nuevo lead IA Creasales: ${contact_reason}`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:20px;color:#333">
            <h2 style="color:#0066FF">Nuevo lead desde el chatbot de Creasales</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Motivo:</strong> ${contact_reason}</p>
          </div>
        `
      });
      console.log(`Email Creasales enviado: ${name} <${email}>`);
      return 'Email enviado exitosamente';
    } catch (error) {
      console.error('Error enviando email:', error);
      return 'Error al enviar el email';
    }
  }
});

// ================= AGENTE CREASALES =================
const creasalesAgent = new Agent({
  name: 'Creasales',
  model: 'gpt-4o',
  tools: [sendContactEmail],
  modelSettings: { parallelToolCalls: true, store: true }
});

// ================= MEMORIA =================
const conversations = new Map();

setInterval(() => {
  const limite = Date.now() - 30 * 60 * 1000;
  for (const [id, data] of conversations.entries()) {
    if (data.lastActivity < limite) conversations.delete(id);
  }
}, 30 * 60 * 1000);

// ================= CHAT =================
app.post('/api/chat', async (req, res) => {
  try {
    const { message, threadId } = req.body;
    if (!message) return res.status(400).json({ error: 'El campo "message" es obligatorio' });

    const id = threadId || crypto.randomUUID();
    const convo = conversations.get(id) || { history: [], lastActivity: Date.now() };

    convo.history.push({ role: 'user', content: [{ type: 'input_text', text: message }] });

    let finalReply = '';

    await withTrace('Creasales', async () => {
      const runner = new Runner({
        traceMetadata: {
          __trace_source__: 'agent-builder',
          workflow_id: process.env.OPENAI_AGENT_ID
        }
      });
      const result = await runner.run(creasalesAgent, convo.history);
      convo.history.push(...result.newItems.map(item => item.rawItem));

      finalReply = result.finalOutput || '';

      if (!finalReply) {
        const lastText = result.newItems.slice().reverse().find(
          i => i.rawItem?.role === 'assistant' && Array.isArray(i.rawItem?.content)
        );
        if (lastText) {
          const textBlock = lastText.rawItem.content.find(
            c => c.type === 'output_text' || c.type === 'text'
          );
          if (textBlock) finalReply = textBlock.text;
        }
      }

      if (!finalReply) throw new Error('El agente no devolvió respuesta');
    });

    convo.lastActivity = Date.now();
    conversations.set(id, convo);

    res.status(200).json({ reply: finalReply, threadId: id });

  } catch (error) {
    console.error('Error en /api/chat:', error);
    res.status(500).json({ error: 'Error del servidor al procesar el chat.' });
  }
});

// ================= FORMULARIO WEB =================
app.post('/api/contacto', async (req, res) => {
  try {
    const { nombre, celular, email, consulta } = req.body;
    if (!nombre || !celular || !email || !consulta) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    await transporter.sendMail({
      from: `"${nombre} (Web)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || 'contacto@creasales.com',
      subject: `Nuevo contacto web de Creasales: ${nombre}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;color:#333">
          <h2 style="color:#0066FF">Nuevo mensaje desde la Web de Creasales</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Celular:</strong> ${celular}</p>
          <p><strong>Consulta:</strong> ${consulta}</p>
        </div>
      `
    });
    res.status(200).json({ mensaje: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error enviando el correo:', error);
    res.status(500).json({ error: 'Error del servidor al enviar el correo.' });
  }
});

// ================= HEALTH =================
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Creasales API', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Servidor Creasales escuchando en el puerto ${port}`);
});

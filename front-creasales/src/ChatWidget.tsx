import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_URL = import.meta.env.VITE_API_URL || '';
const API_KEY = import.meta.env.VITE_API_KEY || '';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! 👋 Soy el asistente de Creasales. ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  // Ocultar el pulso después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify({ message: trimmed, threadId })
      });

      if (!response.ok) throw new Error('Error del servidor');

      const data = await response.json();
      setThreadId(data.threadId);
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Lo siento, hubo un error al procesar tu consulta. Por favor intentá de nuevo.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .chat-widget-window { animation: slideUp 0.3s ease-out forwards; }
        .chat-message { animation: fadeIn 0.3s ease-out forwards; }
        .ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="chat-widget-window fixed bottom-24 right-6 z-[9999] w-[360px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-gray-200/80 bg-white">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#2A43E8] to-[#0066FF]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-[14px] leading-tight">Asistente Creasales</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block"></span>
                  <span className="text-white/70 text-[11px]">En línea</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#F8F9FC]" style={{ maxHeight: '380px', minHeight: '280px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2A43E8] to-[#0066FF] flex items-center justify-center mr-2 mt-0.5 shrink-0 shadow-sm">
                    <Bot size={13} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-[#2A43E8] to-[#0066FF] text-white rounded-tr-sm'
                      : 'bg-white text-slate-800 rounded-tl-sm border border-gray-100'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message flex justify-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2A43E8] to-[#0066FF] flex items-center justify-center mr-2 shrink-0 shadow-sm">
                  <Bot size={13} className="text-white" />
                </div>
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribí tu consulta..."
              disabled={isLoading}
              className="flex-1 text-[13px] bg-[#F3F4F6] rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0066FF]/30 placeholder:text-slate-400 text-slate-800 transition-all disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2A43E8] to-[#0066FF] flex items-center justify-center text-white hover:opacity-90 transition-all active:scale-95 disabled:opacity-40 shadow-sm shrink-0"
            >
              {isLoading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center">
        {showPulse && !isOpen && (
          <span className="ping-slow absolute inline-flex w-14 h-14 rounded-full bg-[#0066FF]/40"></span>
        )}
        <button
          id="chat-widget-toggle"
          onClick={() => { setIsOpen(o => !o); setShowPulse(false); }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2A43E8] to-[#0066FF] flex items-center justify-center text-white shadow-[0_8px_25px_rgba(0,102,255,0.45)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.55)] hover:scale-110 transition-all active:scale-95"
        >
          {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </button>
      </div>
    </>
  );
}

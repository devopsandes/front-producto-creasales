import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, Zap, ShieldCheck, Globe, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

 export default function ContactPage() {
   const { t } = useLanguage();
   const [formData, setFormData] = useState({
     nombre: '',
     celular: '',
     email: '',
     consulta: ''
   });
   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setStatus('loading');

     try {
       const response = await fetch('http://localhost:5001/api/contacto', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData),
       });

       if (response.ok) {
         setStatus('success');
         setFormData({ nombre: '', celular: '', email: '', consulta: '' });
       } else {
         setStatus('error');
       }
     } catch (error) {
       console.error('Error enviando formulario:', error);
       setStatus('error');
     }
   };
  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden flex flex-col items-center justify-center px-4 py-12 md:py-20">

      {/* Decorative Mesh Gradients (Aesthetics) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#2A43E8]/5 blur-[120px] rounded-full animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#E83A82]/5 blur-[150px] rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#F01A39]/5 blur-[130px] rounded-full animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 animate-fade-up">

        {/* Left Side: Brand Info & Value Props */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10 pr-0 lg:pr-8">
          <div className="space-y-6">
            <h1 className="text-[40px] sm:text-5xl md:text-6xl font-black leading-[1.1] text-slate-900 tracking-tighter">
              {t.contact.title}
            </h1>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Zap className="text-amber-500" />, title: t.contact.benefits[0].title, desc: t.contact.benefits[0].desc },
              { icon: <ShieldCheck className="text-emerald-500" />, title: t.contact.benefits[1].title, desc: t.contact.benefits[1].desc },
              { icon: <Globe className="text-blue-500" />, title: t.contact.benefits[2].title, desc: t.contact.benefits[2].desc }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Premium Contact Form */}
        <div className="lg:col-span-7 relative">
          {/* Main Card */}
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200/60 shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden">

            {/* Top accent gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2A43E8] via-[#E83A82] to-[#F01A39]"></div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">{t.contact.formTitle}</h2>

             <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">{t.contact.name}</label>
                   <div className="relative">
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input 
                       type="text" 
                       name="nombre"
                       value={formData.nombre}
                       onChange={handleChange}
                       required
                       placeholder="Tu nombre completo" 
                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#0066FF]/40 focus:bg-white transition-all shadow-sm" 
                     />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">{t.contact.whatsapp}</label>
                   <div className="relative">
                     <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input 
                       type="tel" 
                       name="celular"
                       value={formData.celular}
                       onChange={handleChange}
                       required
                       placeholder="Número de contacto" 
                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#0066FF]/40 focus:bg-white transition-all shadow-sm" 
                     />
                   </div>
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">{t.contact.email}</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                   <input 
                     type="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     placeholder="tu@empresa.com" 
                     className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#0066FF]/40 focus:bg-white transition-all shadow-sm" 
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">{t.contact.message}</label>
                 <div className="relative">
                   <MessageSquare className="absolute left-4 top-6 text-slate-400" size={18} />
                   <textarea 
                     rows={4} 
                     name="consulta"
                     value={formData.consulta}
                     onChange={handleChange}
                     required
                     placeholder="Cuéntanos un poco sobre tu proyecto..." 
                     className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#0066FF]/40 focus:bg-white transition-all resize-none shadow-sm"
                   ></textarea>
                 </div>
               </div>

               <button 
                 type="submit"
                 disabled={status === 'loading'}
                 className={`w-full group relative py-5 rounded-2xl overflow-hidden transition-all shadow-lg active:scale-[0.98] ${status === 'loading' ? 'bg-slate-800' : status === 'success' ? 'bg-emerald-600' : 'bg-[#0A0A0A]'}`}
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                 <span className="relative flex items-center justify-center gap-3 text-sm font-black tracking-widest uppercase text-white">
                   {status === 'loading' ? (
                     <>Enviando... <Loader2 className="animate-spin" size={18} /></>
                   ) : status === 'success' ? (
                     <>¡Mensaje enviado! <CheckCircle2 size={18} /></>
                   ) : status === 'error' ? (
                     <>Error al enviar <AlertCircle size={18} /></>
                   ) : (
                     <>{t.contact.button} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                   )}
                 </span>
               </button>

               {status === 'success' && (
                 <p className="text-center text-emerald-600 text-sm font-bold animate-fade-up">
                   Recibimos tu consulta. Te contactaremos muy pronto.
                 </p>
               )}
               {status === 'error' && (
                 <p className="text-center text-red-500 text-sm font-bold animate-fade-up">
                   Hubo un problema. Por favor intenta de nuevo.
                 </p>
               )}
             </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite alternate; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

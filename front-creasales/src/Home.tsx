import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Star, ArrowRight, CheckCircle2, MessageSquare, Phone, Mail, Search, Info, Check, Sparkles, X, Download, Instagram, Linkedin, Facebook, Wrench, User, Building, Building2, Ticket, Settings, Tag, Calendar, CreditCard, ChevronRight, ChevronLeft, MoreVertical, Send, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function RespondHome() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('All');
  const [activeChatId, setActiveChatId] = useState('kara');
  const [demoStep, setDemoStep] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(true);
  const [demoActiveChat, setDemoActiveChat] = useState(1);
  const [activeFeature, setActiveFeature] = useState('capture');

  const chats = [
    { id: 'kara', name: t.home.demo.chats.sidebar[0].name, time: t.home.demo.chats.yesterday, message: t.home.demo.chats.sidebar[0].message, isHotLead: true, color: 'bg-[#E83A82]', letter: 'K' },
    { id: 'lee', name: t.home.demo.chats.sidebar[1].name, time: t.home.demo.chats.yesterday, message: t.home.demo.chats.sidebar[1].message, isHotLead: false, color: 'bg-[#0066FF]', letter: 'L' },
    { id: 'shanny', name: t.home.demo.chats.sidebar[2].name, time: t.home.demo.chats.today, message: t.home.demo.chats.sidebar[2].message, isHotLead: false, color: 'bg-[#10B981]', letter: 'S' }
  ];

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  return (
    <div className="w-full bg-white text-slate-900 font-sans relative selection:bg-blue-500 selection:text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
        .animate-delay-400 { animation-delay: 400ms; }
        
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 102, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0); }
        }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 15s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* Background container con gradientes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-50/60 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[-10%] w-[60vw] h-[60vw] bg-red-50/40 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">

         {/* Hero Section */}
         <div className="relative pt-12 md:pt-24 pb-10 px-4 md:px-9 flex flex-col items-center justify-center text-center w-full max-w-[1200px]">
          <div 
            onClick={() => document.getElementById('personalizacion')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md text-xs font-medium text-slate-700 mb-8 shadow-sm cursor-pointer hover:bg-gray-50 hover:shadow transition-all max-w-[90%] md:max-w-max overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <span className="bg-[#1A2633] text-white px-3 py-[3px] rounded-full uppercase text-[10px] font-bold tracking-wider">{t.home.configurableBadge.label}</span>
            <span className="text-blue-500 hidden sm:inline-block">⚙️</span>
            <span className="truncate">{t.home.configurableBadge.text}</span>
            <span className="text-blue-600 font-semibold flex items-center gap-1 ml-1 group shrink-0">{t.home.configurableBadge.link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
          </div>

           <h1 className="animate-fade-up animate-delay-100 opacity-0 text-[32px] sm:text-[42px] md:text-[68px] font-extrabold tracking-tight text-[#111827] max-w-[1050px] leading-[1.1] md:leading-[1.05] w-full px-4">
             {t.home.heroTitle}
           </h1>

          <div className="h-[40px] lg:h-[60px] w-full shrink-0"></div>

          <div className="animate-fade-up animate-delay-200 opacity-0 flex flex-col items-center justify-center w-full">
            <button 
              onClick={() => navigate('/contacto')}
              className="px-8 py-4 text-[17px] font-bold rounded-lg bg-[#0A0A0B] hover:bg-slate-800 text-white transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:-translate-y-1 w-full sm:w-[240px] cursor-pointer"
            >
              {t.home.ctaSecondary}
            </button>
          </div>

          {/* Espaciador forzado bajo el boton */}
          <div className="h-[40px] lg:h-[60px] w-full shrink-0"></div>

          <div className="animate-fade-up animate-delay-300 opacity-0 flex flex-col items-center justify-center">
            <span className="text-[15px] font-extrabold tracking-tight uppercase bg-gradient-to-r from-[#2A43E8] to-[#E83A82] bg-clip-text text-transparent">
              {t.home.exploreBelow}
            </span>
          </div>
        </div>

         {/* Main App Demo Mockup INTEGRADO */}
         <div className="animate-fade-up animate-delay-400 opacity-0 w-full px-2 sm:px-4 md:px-8 flex justify-center z-20">
           <div className="w-full max-w-[1050px] min-h-[500px] lg:h-[650px] relative">

            {/* Tooltip Explicativo Exterior (A la izquierda) */}
            {showTooltip && (
              <div
                className="hidden lg:flex absolute z-50 bg-[#1e293b] text-white px-6 py-5 rounded-xl shadow-2xl w-[320px] border border-slate-700 transition-all duration-300 ease-in-out flex-col gap-2 animate-fade-left"
                style={{
                  left: '-340px',
                  top: demoStep === 1 ? '72px' :
                    demoStep === 2 ? '134px' :
                      demoStep === 3 ? '196px' : '258px'
                }}
              >
                <button onClick={() => setShowTooltip(false)} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors">
                  <X size={16} />
                </button>
                <div className="absolute top-6 -right-2 w-4 h-4 bg-[#1e293b] rotate-45 border-t border-r border-slate-700"></div>
                <h4 className="font-bold text-[14px] flex items-center gap-2 text-blue-400 pr-4">
                  <Info size={16} />
                  {demoStep === 1 && t.home.tooltip.chatsTitle}
                  {demoStep === 2 && t.home.tooltip.companiesTitle}
                  {demoStep === 3 && t.home.tooltip.ticketsTitle}
                  {demoStep === 4 && t.home.tooltip.metaTitle}
                </h4>
                <p className="text-[12.5px] text-slate-300 leading-relaxed mt-1">
                  {demoStep === 1 && t.home.tooltip.chatsDesc}
                  {demoStep === 2 && t.home.tooltip.companiesDesc}
                  {demoStep === 3 && t.home.tooltip.ticketsDesc}
                  {demoStep === 4 && t.home.tooltip.metaDesc}
                </p>
              </div>
            )}

            <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.1)] bg-white flex flex-col relative">
              {showDemoModal && (
                <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/5 backdrop-blur-[2px] rounded-2xl">
                  <div className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center text-center gap-6 max-w-[400px] animate-fade-up">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 p-2 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2A43E8]/5 to-transparent"></div>
                      <img src="/logo-rocket-color.jpg" alt="Logo" className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2">{t.home.demoTitle}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t.home.demoDesc}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setShowDemoModal(false); setShowTooltip(true); }}
                      className="w-full py-3 bg-[#0066FF] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
                    >
                      {t.home.demoButton}
                    </button>
                  </div>
                </div>
              )}

              {/* Top Header of the mock app */}
              <div className="h-14 bg-[#0A0B1A] flex items-center justify-between px-6 shrink-0 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 overflow-hidden flex items-center justify-center rounded-lg relative">
                    <img src="/logo-creasales.png" alt="Creasales" className="w-full h-full object-cover scale-[2.5] absolute" />
                  </div>
                  <span className="font-bold text-white tracking-wide text-[15px]">CreaSales</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white text-[13px] font-semibold">{t.home.demo.chats.companyName}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white text-xs font-bold">ED</div>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden relative">

                {/* Left Navigation Sidebar */}
                <div className="w-[72px] bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-4 shrink-0 shadow-sm z-20 relative">
                  <button
                    onClick={() => { setDemoStep(1); setShowTooltip(true); }}
                    className={`p-3 rounded-xl transition-all ${demoStep === 1 ? 'bg-blue-50 text-blue-600 shadow-inner' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    title={t.home.demo.tabs.chats}
                  >
                    <MessageSquare size={22} strokeWidth={demoStep === 1 ? 2.5 : 2} />
                  </button>
                  <button
                    onClick={() => { setDemoStep(2); setShowTooltip(true); }}
                    className={`p-3 rounded-xl transition-all ${demoStep === 2 ? 'bg-blue-50 text-blue-600 shadow-inner' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    title={t.home.demo.tabs.companies}
                  >
                    <Building size={22} strokeWidth={demoStep === 2 ? 2.5 : 2} />
                  </button>
                  <button
                    onClick={() => { setDemoStep(3); setShowTooltip(true); }}
                    className={`p-3 rounded-xl transition-all ${demoStep === 3 ? 'bg-blue-50 text-blue-600 shadow-inner' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    title={t.home.demo.tabs.tickets}
                  >
                    <Ticket size={22} strokeWidth={demoStep === 3 ? 2.5 : 2} />
                  </button>
                  <button
                    onClick={() => { setDemoStep(4); setShowTooltip(true); }}
                    className={`p-3 rounded-xl transition-all ${demoStep === 4 ? 'bg-blue-50 text-blue-600 shadow-inner' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    title={t.home.demo.tabs.meta}
                  >
                    <Settings size={22} strokeWidth={demoStep === 4 ? 2.5 : 2} />
                  </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col bg-slate-50 relative overflow-hidden">
                  <div className="flex-1 overflow-y-auto w-full flex flex-col pt-10 bg-white relative">
                    {/* STEP 1: CHATS */}
                     {demoStep === 1 && (
                       <div className="flex flex-1 min-h-[500px] lg:h-full animate-fade-up overflow-hidden">
                         {/* Sidebar Chats */}
                         <div className={`w-full lg:w-[300px] border-r border-slate-200 bg-[#f8fafc] flex flex-col shrink-0 ${demoActiveChat ? 'hidden lg:flex' : 'flex'}`}>
                          <div className="h-14 border-b border-slate-200 px-4 flex items-center justify-between bg-white">
                            <span className="font-bold text-sm">{t.home.demo.chats.title}</span>
                            <div className="flex gap-2">
                              <button className="p-1.5 bg-slate-100 rounded text-slate-500"><Search size={14} /></button>
                              <button className="p-1.5 bg-slate-100 rounded text-slate-500"><MoreVertical size={14} /></button>
                            </div>
                          </div>
                          <div className="p-3 space-y-2 overflow-y-auto flex-1">
                            <div onClick={() => setDemoActiveChat(1)} className={`${demoActiveChat === 1 ? 'bg-blue-50 border-blue-600' : 'bg-white border-transparent hover:bg-slate-50 border-slate-100'} border-l-2 p-3 rounded-r-lg cursor-pointer transition-colors shadow-sm`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-[13px] text-slate-900">+54 9 11 1234-5678</span>
                                <span className={`text-[10px] ${demoActiveChat === 1 ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>14:30</span>
                              </div>
                              <p className="text-[11px] text-slate-500 truncate">{t.home.demo.chats.messages[1].user.substring(0, 30)}...</p>
                            </div>

                            <div onClick={() => setDemoActiveChat(2)} className={`${demoActiveChat === 2 ? 'bg-blue-50 border-blue-600' : 'bg-white border-transparent hover:bg-slate-50 border-slate-100'} border-l-2 p-3 rounded-r-lg cursor-pointer transition-colors shadow-sm`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-[13px] text-slate-900">{t.home.demo.chats.user2}</span>
                                <span className={`text-[10px] ${demoActiveChat === 2 ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>13:15</span>
                              </div>
                              <p className="text-[11px] text-slate-500 truncate">{t.home.demo.chats.lastMessage2}</p>
                            </div>

                            <div onClick={() => setDemoActiveChat(3)} className={`${demoActiveChat === 3 ? 'bg-blue-50 border-blue-600' : 'bg-white border-transparent hover:bg-slate-50 border-slate-100'} border-l-2 p-3 rounded-r-lg cursor-pointer transition-colors shadow-sm`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-[13px] text-slate-900">{t.home.demo.chats.user3}</span>
                                <span className={`text-[10px] ${demoActiveChat === 3 ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>11:42</span>
                              </div>
                              <p className="text-[11px] text-slate-500 truncate">{t.home.demo.chats.lastMessage3}</p>
                            </div>

                            <div onClick={() => setDemoActiveChat(4)} className={`${demoActiveChat === 4 ? 'bg-blue-50 border-blue-600' : 'bg-white border-transparent hover:bg-slate-50 border-slate-100'} border-l-2 p-3 rounded-r-lg cursor-pointer transition-colors shadow-sm`}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-[13px] text-slate-900">{t.home.demo.chats.user4}</span>
                                <span className={`text-[10px] ${demoActiveChat === 4 ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>{t.home.demo.chats.yesterday}</span>
                              </div>
                              <p className="text-[11px] text-slate-500 truncate">{t.home.demo.chats.lastMessage4}</p>
                            </div>
                          </div>
                        </div>

                         {/* Main Chat Area */}
                         <div className={`flex-1 flex flex-col bg-white ${!demoActiveChat ? 'hidden lg:flex' : 'flex'}`}>
                          {/* Chat Header */}
                         <div className="h-14 border-b border-slate-200 px-4 md:px-6 flex items-center justify-between bg-white shrink-0">
                           <div className="flex items-center gap-2 md:gap-3">
                             {/* Botón Volver (Móvil) */}
                             <button 
                               onClick={() => setDemoActiveChat(0)} 
                               className="lg:hidden p-1 -ml-1 text-slate-500 hover:bg-slate-100 rounded-full"
                             >
                               <ChevronLeft size={20} />
                             </button>
                             <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 shrink-0"><User size={16} /></div>
                             <div className="min-w-0">
                               <h3 className="font-bold text-sm text-slate-800 truncate">
                                 {demoActiveChat === 1 && t.home.demo.chats.interested}
                                 {demoActiveChat === 2 && t.home.demo.chats.user2}
                                 {demoActiveChat === 3 && t.home.demo.chats.user3}
                                 {demoActiveChat === 4 && t.home.demo.chats.user4}
                               </h3>
                               <p className="text-[10px] md:text-[11px] text-slate-500 truncate">
                                 {demoActiveChat === 1 && "+54 9 11 1234-5678"}
                                 {demoActiveChat === 2 && "+54 9 11 2222-3333"}
                                 {demoActiveChat === 3 && "+54 9 11 4444-5555"}
                                 {demoActiveChat === 4 && "+54 9 11 8888-9999"}
                               </p>
                             </div>
                           </div>
                           <div className="flex gap-2">
                              <button className="hidden sm:block px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-md">{t.home.demo.chats.connectBot}</button>
                              <button className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-md">{t.home.demo.chats.resolve}</button>
                           </div>
                         </div>

                          {/* Chat Messages */}
                          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-[#E5DDD5]/10">
                            <div className="text-xs text-center text-slate-400 my-2">{t.home.demo.chats.messages[0].user.includes('promo') ? 'Hoy' : 'Today'}</div>

                            {demoActiveChat === 1 && (
                              <>
                                <div className="self-end max-w-[70%] bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-slate-800 animate-fade-up">
                                  {t.home.demo.chats.messages[0].user}
                                  <div className="text-[10px] text-right text-slate-500 mt-1">14:25</div>
                                </div>
                                <div className="self-start max-w-[70%] bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-800 animate-fade-up">
                                  {t.home.demo.chats.messages[0].bot}
                                  <div className="text-[10px] text-right text-slate-400 mt-1">14:26</div>
                                </div>
                                <div className="self-end max-w-[70%] bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-slate-800 animate-fade-up">
                                  {t.home.demo.chats.messages[1].user}
                                  <div className="text-[10px] text-right text-slate-500 mt-1">14:29</div>
                                </div>
                                <div className="self-start max-w-[70%] bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-800 animate-fade-up">
                                  {t.home.demo.chats.messages[1].bot}
                                  <div className="text-[10px] text-right text-slate-400 mt-1">14:30</div>
                                </div>
                              </>
                            )}

                             {demoActiveChat === 2 && (
                               <>
                                 <div className="self-end max-w-[70%] bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-slate-800 animate-fade-up">
                                   {t.home.demo.chats.chat2[0].user}
                                   <div className="text-[10px] text-right text-slate-500 mt-1">13:10</div>
                                 </div>
                                 <div className="self-start max-w-[70%] bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-800 animate-fade-up">
                                   {t.home.demo.chats.chat2[0].bot}
                                   <div className="text-[10px] text-right text-slate-400 mt-1">13:15</div>
                                 </div>
                               </>
                             )}

                             {demoActiveChat === 3 && (
                               <>
                                 <div className="self-end max-w-[70%] bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-slate-800 animate-fade-up">
                                   {t.home.demo.chats.chat3[0].user}
                                   <div className="text-[10px] text-right text-slate-500 mt-1">11:40</div>
                                 </div>
                                 <div className="self-start max-w-[70%] bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-800 animate-fade-up">
                                   {t.home.demo.chats.chat3[0].bot}
                                   <div className="text-[10px] text-right text-slate-400 mt-1">11:42</div>
                                 </div>
                               </>
                             )}

                             {demoActiveChat === 4 && (
                               <>
                                 <div className="text-xs text-center text-slate-400 my-2">{t.home.demo.chats.yesterday}</div>
                                 <div className="self-end max-w-[70%] bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-slate-800 animate-fade-up">
                                   {t.home.demo.chats.chat4[0].user}
                                   <div className="text-[10px] text-right text-slate-500 mt-1">18:20</div>
                                 </div>
                                 <div className="self-start max-w-[70%] bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-800 animate-fade-up">
                                   {t.home.demo.chats.chat4[0].bot}
                                   <div className="text-[10px] text-right text-slate-400 mt-1">18:25</div>
                                 </div>
                               </>
                             )}
                          </div>

                          {/* Chat Input */}
                          <div className="h-16 border-t border-slate-200 px-4 flex items-center bg-[#f0f2f5] shrink-0">
                             <div className="flex-1 bg-white rounded-full h-10 px-4 flex items-center text-sm text-slate-400 border border-slate-200">
                               {t.home.demo.chats.writeMessage}
                             </div>
                          </div>
                        </div>

                         {/* Right Sidebar (Info) */}
                         <div className="hidden xl:flex w-[280px] border-l border-slate-200 bg-white flex-col shrink-0 overflow-y-auto">
                          <div className="p-5 border-b border-slate-100">
                            <h4 className="font-bold text-xs text-slate-400 mb-3 tracking-wider">{t.home.demo.chats.labels}</h4>
                            <div className="flex flex-wrap gap-2">
                              {demoActiveChat === 1 && (
                                <>
                                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[11px] font-bold rounded-md">{t.home.demo.chats.tagFiber}</span>
                                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[11px] font-bold rounded-md">{t.home.demo.chats.tagOff}</span>
                                </>
                              )}
                              {demoActiveChat === 2 && (
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-[11px] font-bold rounded-md">{t.home.demo.chats.tagPhones}</span>
                              )}
                              {demoActiveChat === 3 && (
                                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-[11px] font-bold rounded-md">{t.home.demo.chats.tagB2B}</span>
                              )}
                              {demoActiveChat === 4 && (
                                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[11px] font-bold rounded-md">{t.home.demo.chats.tagTV}</span>
                              )}
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[11px] font-bold rounded-md">{t.home.demo.chats.tagHigh}</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h4 className="font-bold text-xs text-slate-400 mb-4 tracking-wider">{t.home.demo.chats.contactData}</h4>
                            <div className="space-y-4 text-sm">
                              <div>
                                <div className="text-[11px] text-slate-500 mb-1">{t.home.demo.chats.email}</div>
                                <div className="font-medium text-slate-800">
                                  {demoActiveChat === 1 && "juan.demo@gmail.com"}
                                  {demoActiveChat === 2 && "maria.g@gmail.com"}
                                  {demoActiveChat === 3 && "compras@techgroup.com"}
                                  {demoActiveChat === 4 && "carlos.r@gmail.com"}
                                </div>
                              </div>
                              <div>
                                <div className="text-[11px] text-slate-500 mb-1">{t.home.demo.chats.phone}</div>
                                <div className="font-medium text-slate-800">
                                  {demoActiveChat === 1 && "+54 9 11 1234-5678"}
                                  {demoActiveChat === 2 && "+54 9 11 2222-3333"}
                                  {demoActiveChat === 3 && "+54 9 11 4444-5555"}
                                  {demoActiveChat === 4 && "+54 9 11 8888-9999"}
                                </div>
                              </div>
                              <div>
                                <div className="text-[11px] text-slate-500 mb-1">{t.home.demo.chats.status}</div>
                                <div className="font-medium text-emerald-600">{t.home.demo.chats.interestedStatus}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: EMPRESAS */}
                    {demoStep === 2 && (
                      <div className="flex flex-col flex-1 h-full overflow-y-auto p-8 bg-[#FAFAFA] items-center animate-fade-up">
                        <div className="text-center mb-8">
                          <h2 className="text-2xl font-bold text-slate-900">{t.home.demo.companies.title}</h2>
                          <p className="text-sm text-slate-500 mt-1">{t.home.demo.companies.subtitle}</p>
                        </div>

                         <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm relative">
                           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                             <h3 className="font-bold text-lg text-slate-800">{t.home.demo.companies.generalInfo}</h3>
                             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full border border-emerald-200">{t.home.demo.companies.active}</span>
                           </div>

                          <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">{t.home.demo.companies.name}</label>
                              <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900">
                                {t.home.demo.chats.companyName}
                              </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">{t.home.demo.companies.cuit}</label>
                              <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900">
                                30-12345678-9
                              </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">{t.home.demo.companies.sector}</label>
                              <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900">
                                {t.home.demo.companies.sectorValue}
                              </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">{t.home.demo.companies.phone}</label>
                              <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900">
                                +54 9 11 9876-5432
                              </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">{t.home.demo.companies.email}</label>
                              <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900">
                                contacto@empresademo.sa
                              </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">{t.home.demo.companies.address}</label>
                              <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900">
                                Av. Corrientes 1234, Piso 5
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: TICKETS */}
                    {demoStep === 3 && (
                      <div className="flex flex-col flex-1 h-full px-8 bg-white animate-fade-up">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                          <div>
                            <h2 className="text-xl font-bold text-slate-900">{t.home.demo.tickets.title}</h2>
                            <p className="text-xs text-slate-500 mt-1">{t.home.demo.tickets.subtitle}</p>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm">{t.home.demo.tickets.new}</button>
                        </div>

                         <div className="flex-1 overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                             <thead className="whitespace-nowrap">
                               <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                                 <th className="p-4 pl-6">{t.home.demo.tickets.id}</th>
                                 <th className="p-4">{t.home.demo.tickets.subject}</th>
                                 <th className="p-4">{t.home.demo.tickets.priority}</th>
                                 <th className="p-4">{t.home.demo.tickets.created}</th>
                                 <th className="p-4">{t.home.demo.tickets.status}</th>
                                 <th className="p-4 text-center">{t.home.demo.tickets.actions}</th>
                               </tr>
                             </thead>
                            <tbody className="text-sm text-slate-800 divide-y divide-slate-100">
                              <tr className="hover:bg-slate-50/50">
                                <td className="p-4 pl-6 font-medium text-slate-500">#317968</td>
                                <td className="p-4 font-bold text-slate-700">{t.home.demo.chats.ticketSubject1}</td>
                                <td className="p-4"><span className="px-2 py-1 bg-red-50 text-red-600 rounded text-xs font-bold">{t.home.demo.tickets.high}</span></td>
                                <td className="p-4 text-slate-500 text-xs">2026-04-23 10:57</td>
                                <td className="p-4"><span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold">{t.home.demo.tickets.closed}</span></td>
                                <td className="p-4 text-center"><button className="text-blue-600 hover:underline text-xs font-bold">{t.home.demo.tickets.view}</button></td>
                              </tr>
                              <tr className="hover:bg-slate-50/50">
                                <td className="p-4 pl-6 font-medium text-slate-500">#317944</td>
                                <td className="p-4 font-bold text-slate-700">{t.home.demo.chats.ticketSubject2}</td>
                                <td className="p-4"><span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-xs font-bold">{t.home.demo.tickets.medium}</span></td>
                                <td className="p-4 text-slate-500 text-xs">2026-04-23 09:58</td>
                                <td className="p-4"><span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[11px] font-bold">{t.home.demo.tickets.open}</span></td>
                                <td className="p-4 text-center"><button className="text-blue-600 hover:underline text-xs font-bold">{t.home.demo.tickets.view}</button></td>
                              </tr>
                               <tr className="hover:bg-slate-50/50">
                                 <td className="p-4 pl-6 font-medium text-slate-500">#297778</td>
                                 <td className="p-4 font-bold text-slate-700 whitespace-nowrap">{t.home.demo.chats.ticketSubject3}</td>
                                 <td className="p-4"><span className="px-2 py-1 bg-red-50 text-red-600 rounded text-xs font-bold">{t.home.demo.tickets.high}</span></td>
                                 <td className="p-4 text-slate-500 text-xs whitespace-nowrap">2026-04-22 19:04</td>
                                 <td className="p-4"><span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[11px] font-bold">{t.home.demo.tickets.open}</span></td>
                                 <td className="p-4 text-center"><button className="text-blue-600 hover:underline text-xs font-bold">{t.home.demo.tickets.view}</button></td>
                               </tr>
                               <tr className="hover:bg-slate-50/50">
                                 <td className="p-4 pl-6 font-medium text-slate-500">#317003</td>
                                 <td className="p-4 font-bold text-slate-700 whitespace-nowrap">{t.home.demo.chats.ticketSubject4}</td>
                                 <td className="p-4"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">{t.home.demo.tickets.low}</span></td>
                                 <td className="p-4 text-slate-500 text-xs whitespace-nowrap">2026-04-22 16:40</td>
                                 <td className="p-4"><span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold">{t.home.demo.tickets.closed}</span></td>
                                 <td className="p-4 text-center"><button className="text-blue-600 hover:underline text-xs font-bold">{t.home.demo.tickets.view}</button></td>
                               </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: META CONFIG */}
                    {demoStep === 4 && (
                      <div className="flex flex-col flex-1 h-full overflow-y-auto p-8 bg-[#FAFAFA] items-center animate-fade-up">
                        <div className="text-center mb-8">
                          <h2 className="text-2xl font-bold text-slate-900">{t.home.demo.meta.title}</h2>
                          <p className="text-sm text-slate-500 mt-1 max-w-xl mx-auto">{t.home.demo.meta.subtitle}</p>
                        </div>

                        <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
                          <h3 className="font-bold text-lg text-slate-800 mb-6 border-b border-slate-100 pb-4 text-center">Credenciales de acceso</h3>

                          <div className="space-y-6">
                            <div className="flex flex-col gap-2 items-start">
                              <label className="block text-xs font-bold text-slate-700 mb-1">{t.home.demo.meta.token}</label>
                              <div className="w-full p-3 bg-blue-50/50 border border-blue-200 rounded-lg text-sm text-slate-500 font-mono overflow-hidden text-ellipsis whitespace-nowrap mb-2">
                                EAALxyz12345ABCDE...
                              </div>
                              <div className="w-full bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                                <strong className="text-slate-800 block mb-1">{t.home.demo.meta.whatIs}</strong>
                                <p className="text-slate-600 mb-3 text-[13px]">{t.home.demo.meta.tokenDesc}</p>
                                <strong className="text-slate-800 block mb-1">{t.home.demo.meta.whereGet}</strong>
                                <p className="text-slate-600 text-[11px]">{t.home.demo.meta.tokenPlace}</p>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                              <label className="block text-xs font-bold text-slate-700 mb-1">{t.home.demo.meta.userToken}</label>
                              <div className="w-full p-3 bg-blue-50/50 border border-blue-200 rounded-lg text-sm text-slate-500 font-mono overflow-hidden text-ellipsis whitespace-nowrap mb-2">
                                EAAQabc98765ZYXWV...
                              </div>
                              <div className="w-full bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                                <strong className="text-slate-800 block mb-1">{t.home.demo.meta.userTokenNeed}</strong>
                                <p className="text-slate-600 mb-3 text-[13px]">{t.home.demo.meta.userTokenDesc}</p>
                                <strong className="text-slate-800 block mb-1">¿Dónde obtenerlo?</strong>
                                <p className="text-slate-600 text-[11px]">{t.home.demo.meta.userTokenPlace}</p>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                              <label className="block text-xs font-bold text-slate-700 mb-1">{t.home.demo.meta.phoneId}</label>
                              <div className="w-full p-3 bg-blue-50/50 border border-blue-200 rounded-lg text-sm text-slate-500 font-mono overflow-hidden text-ellipsis whitespace-nowrap mb-2">
                                102938475610293
                              </div>
                              <div className="w-full bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                                <strong className="text-slate-800 block mb-1">¿Qué es?</strong>
                                <p className="text-slate-600 mb-3 text-[13px]">{t.home.demo.meta.phoneIdDesc}</p>
                                <strong className="text-slate-800 block mb-1">¿Dónde encontrarlo?</strong>
                                <p className="text-slate-600 text-[11px]">{t.home.demo.meta.phoneIdPlace}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* DIVIDER GRADIENTE */}
        <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#2A43E8] via-[#E83A82] to-transparent opacity-40 my-24"></div>

        {/* SECCIÓN 2: MODO CLARO (ESCALA EL CRECIMIENTO Y OMNICHANNEL INBOX CENTRADAS) */}

         {/* Features: Escala el crecimiento (Ahora Blanca y Centrada en su contenedor máximo) */}
         <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-8 relative z-10">

          {/* Columna Izquierda (Textos y Acordeón) */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h2 className="text-[32px] md:text-[40px] leading-[1.15] font-extrabold tracking-tight mb-6 text-slate-900">
              {t.home.opportunity.title}
            </h2>
            <p className="text-slate-600 text-[16px] leading-relaxed mb-10">
              {t.home.opportunity.desc}
            </p>

            <div className="flex flex-col gap-6">
              {/* Accordion Item 1 */}
              <div
                className={`flex flex-col border-l-[3px] pl-6 cursor-pointer transition-all duration-300 ${activeFeature === 'capture' ? 'border-[#0066FF] opacity-100' : 'border-gray-200 opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveFeature('capture')}
              >
                <h3 className="font-bold text-[17px] mb-3 text-slate-900 tracking-tight">{t.home.opportunity.capture}</h3>
                {activeFeature === 'capture' && (
                  <p className="text-slate-600 text-[14px] leading-relaxed animate-fade-up">
                    {t.home.opportunity.captureDesc}
                  </p>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div
                className={`flex flex-col border-l-[3px] pl-6 cursor-pointer transition-all duration-300 ${activeFeature === 'convert' ? 'border-[#0066FF] opacity-100' : 'border-gray-200 opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveFeature('convert')}
              >
                <h3 className="font-bold text-[17px] mb-3 text-slate-900 tracking-tight">{t.home.opportunity.convert}</h3>
                {activeFeature === 'convert' && (
                  <p className="text-slate-600 text-[14px] leading-relaxed animate-fade-up">
                    {t.home.opportunity.convertDesc}
                  </p>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div
                className={`flex flex-col border-l-[3px] pl-6 cursor-pointer transition-all duration-300 ${activeFeature === 'retain' ? 'border-[#0066FF] opacity-100' : 'border-gray-200 opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveFeature('retain')}
              >
                <h3 className="font-bold text-[17px] mb-3 text-slate-900 tracking-tight">{t.home.opportunity.loyalize}</h3>
                {activeFeature === 'retain' && (
                  <p className="text-slate-600 text-[14px] leading-relaxed animate-fade-up">
                    {t.home.opportunity.loyalizeDesc}
                  </p>
                )}
              </div>
            </div>
          </div>

           {/* Columna Derecha (Mockup Blanco y Glass) */}
           <div className="w-full lg:w-[55%] flex justify-center lg:justify-end mt-12 lg:mt-0">
             <div className="relative w-full max-w-[500px] aspect-square sm:aspect-auto sm:min-h-[500px] rounded-[2rem] bg-white border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
              {/* Efecto de Luz Interna (Glow) en Modo Claro */}
              <div className="absolute top-10 right-0 w-3/4 h-3/4 bg-[#0066FF]/10 blur-[80px] rounded-full pointer-events-none"></div>

              {/* Panel de Chat Glassmorphism sobre blanco */}
              <div className="w-full max-w-[420px] bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-xl p-6 relative z-10 border border-white flex flex-col gap-4 mx-auto">

                <div className="flex gap-2 self-start w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-white shadow-sm overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=100&q=80" alt="Customer" className="w-full h-full object-cover" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-[14px] h-[14px] bg-[#E83A82] rounded-full border border-white flex justify-center items-center"><MessageSquare size={7} color="white" /></div>
                  </div>
                  <div className="bg-[#E4E6EB] text-slate-800 text-[13px] p-3 rounded-2xl rounded-tl-sm shadow-sm font-medium leading-snug">
                    {t.home.opportunity.mockup[0]}
                  </div>
                </div>

                <div className="flex gap-2 self-end w-[85%] justify-end">
                  <div className="bg-[#F0F5FF] text-[#0066FF] border border-[#D6E4FF] text-[13px] p-3 rounded-2xl rounded-tr-sm shadow-sm font-medium leading-snug">
                    {t.home.opportunity.mockup[1]}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border border-white shadow-sm overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=100&q=80" alt="Agent" className="w-full h-full object-cover" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-[14px] h-[14px] bg-[#0066FF] rounded-full border border-white flex justify-center items-center"><MessageSquare size={7} color="white" /></div>
                  </div>
                </div>

                <div className="flex gap-2 self-start w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-white shadow-sm overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=100&q=80" alt="Customer" className="w-full h-full object-cover" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-[14px] h-[14px] bg-[#25D366] rounded-full border border-white flex justify-center items-center"><Phone size={7} fill="white" color="white" /></div>
                  </div>
                  <div className="bg-[#E4E6EB] text-slate-800 text-[13px] p-3 rounded-2xl rounded-tl-sm shadow-sm font-medium leading-snug">
                    {t.home.opportunity.mockup[2]}
                  </div>
                </div>

                <div className="flex gap-2 self-end w-[90%] justify-end mb-4">
                  <div className="bg-[#F0F5FF] text-[#0066FF] border border-[#D6E4FF] text-[13px] p-3 rounded-2xl rounded-tr-sm shadow-sm font-medium leading-snug">
                    {t.home.opportunity.mockup[3]}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border border-white shadow-sm overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=100&q=80" alt="Agent" className="w-full h-full object-cover" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-[14px] h-[14px] bg-[#25D366] rounded-full border border-white flex justify-center items-center"><Phone size={7} fill="white" color="white" /></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER GRADIENTE 2 */}
        <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#2A43E8] via-[#E83A82] to-transparent opacity-40 my-24"></div>


        {/* Tarjeta de Omnichannel Inbox (MODO CLARO Y CENTRADA PERFECTAMENTE) */}
        <div id="personalizacion" className="w-full max-w-[1100px] mx-auto px-4 md:px-8 z-10 relative mb-32 scroll-mt-24">
          <div className="bg-white border border-gray-200/80 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,102,255,0.08)] transition-shadow duration-500">
            
            {/* Izquierda (Visuales Light Mode) */}
            <div className="w-full md:w-[45%] lg:w-1/2 relative min-h-[450px] overflow-hidden group border-r border-gray-100 bg-slate-50">
              {/* Background Glow */}
              <div className="absolute -left-10 top-1/2 w-64 h-64 bg-blue-200/50 blur-[80px] rounded-full mix-blend-multiply pointer-events-none z-0"></div>

              <img src="/smartphone-chat.png" alt="Smartphone con conversación" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
            </div>

             {/* Derecha (Textos en modo claro) */}
             <div className="w-full md:w-[55%] lg:w-1/2 p-8 sm:p-10 md:p-16 flex flex-col justify-center bg-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#0066FF]/5 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-fit gap-2 px-3 py-1.5 rounded-lg border border-blue-200 bg-[#F0F5FF] text-[#0066FF] text-[13px] font-bold mb-6 hover:bg-blue-100 transition-colors shadow-sm">
                  <Wrench size={14} /> {t.home.rules.badge}
                </div>
                <h2 className="text-[32px] md:text-[38px] leading-[1.12] font-extrabold text-slate-900 mb-6 tracking-tight">
                  {t.home.rules.title}
                </h2>
                <p className="text-slate-600 text-[16px] mb-5 leading-relaxed">
                  {t.home.rules.desc1}
                </p>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {t.home.rules.desc2}
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="h-12 md:h-16 w-full shrink-0"></div>

      </div>
    </div>
  );
}

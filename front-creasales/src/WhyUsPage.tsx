import { Rocket, Shield, Users, BarChart3, Settings2, Zap, HeartHandshake, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function WhyUsPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="min-h-[calc(100vh-72px)] bg-white text-slate-900 font-sans relative overflow-hidden flex flex-col items-center pt-20 pb-32 px-4">
      
      {/* Mesh Gradients Background (Consistency) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-50/60 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[-10%] w-[60vw] h-[60vw] bg-red-50/40 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] w-full relative z-10 space-y-32">
        
        {/* Hero Section Why Us */}
        <div className="text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-[12px] font-bold uppercase tracking-widest shadow-sm mx-auto">
            <Rocket size={14} /> {t.whyUs.heroBadge}
          </div>
          <h1 className="text-[40px] sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05]">
            {t.whyUs.title}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-[800px] mx-auto leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up animation-delay-200">
          {[
            { icon: <Layers className="text-[#0066FF]" />, title: t.whyUs.pillars[0].title, desc: t.whyUs.pillars[0].desc },
            { icon: <Settings2 className="text-[#E83A82]" />, title: t.whyUs.pillars[1].title, desc: t.whyUs.pillars[1].desc },
            { icon: <Zap className="text-amber-500" />, title: t.whyUs.pillars[2].title, desc: t.whyUs.pillars[2].desc },
            { icon: <BarChart3 className="text-indigo-500" />, title: t.whyUs.pillars[3].title, desc: t.whyUs.pillars[3].desc },
            { icon: <Shield className="text-emerald-500" />, title: t.whyUs.pillars[4].title, desc: t.whyUs.pillars[4].desc },
            { icon: <HeartHandshake className="text-rose-500" />, title: t.whyUs.pillars[5].title, desc: t.whyUs.pillars[5].desc }
          ].map((item, i) => (
            <div key={i} className="group p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-slate-200/60 hover:border-[#0066FF]/30 hover:shadow-[0_20px_50px_rgba(0,102,255,0.05)] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center animate-fade-up animation-delay-400">
          <div className="absolute inset-0 bg-[#0A0A0B] z-0"></div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2A43E8] via-[#E83A82] to-[#F01A39] opacity-50"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              {t.whyUs.cta}
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-[600px] mx-auto">
              {t.home.heroDesc}
            </p>
            <button 
              onClick={() => navigate('/contacto')}
              className="px-10 py-4 bg-white text-[#0A0A0B] rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 hover:scale-105 transition-all shadow-xl"
            >
              {t.whyUs.ctaButton}
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}

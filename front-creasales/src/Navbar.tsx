import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`w-full sticky top-0 z-50 h-[72px] transition-all duration-300 text-slate-900 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#2A43E8] via-[#E83A82] to-[#F01A39]"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:pl-12 lg:pr-8 w-full h-full flex items-center justify-between relative">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="flex items-center cursor-pointer shrink-0 lg:ml-4 xl:ml-10 group">
          <div className="relative h-12 flex items-center">
            <img src="/logo-rocket-color.jpg" alt="Logo" className="h-11 w-auto object-contain group-hover:-rotate-12 transition-all duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="text-[26px] font-black tracking-tighter text-[#111827] select-none group-hover:text-[#0066FF] transition-colors duration-300 -ml-1">creasales</span>
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-slate-600 h-full tracking-tight absolute left-1/2 -translate-x-1/2">
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-[#0066FF] transition-colors h-full focus:outline-none">
              {t.nav.product} <ChevronDown size={14} className="group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-64 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-2 z-50">
              <a href="#" className="block px-4 py-3 hover:bg-gray-50 rounded-lg text-slate-800 text-sm font-semibold transition-colors">{t.nav.omnichannel}</a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-50 rounded-lg text-slate-800 text-sm font-semibold transition-colors">{t.nav.aiAgents}</a>
            </div>
          </div>
          <a onClick={() => navigate('/por-que-nosotros')} className={`hover:text-[#0066FF] transition-colors h-full flex items-center cursor-pointer ${location.pathname === '/por-que-nosotros' ? 'text-[#0066FF]' : ''}`}>{t.nav.whyUs}</a>
          <a onClick={() => navigate('/contacto')} className={`hover:text-[#0066FF] transition-colors h-full flex items-center cursor-pointer ${location.pathname === '/contacto' ? 'text-[#0066FF]' : ''}`}>{t.nav.contact}</a>
        </div>

        {/* Acciones a la derecha */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          <button 
            onClick={() => navigate('/contacto')}
            className="px-6 py-2.5 text-[14px] font-bold rounded bg-gradient-to-r from-blue-100/90 via-indigo-100/70 to-purple-100/90 hover:from-blue-200/80 hover:via-indigo-200/60 hover:to-purple-200/80 border border-slate-200/80 shadow-sm text-slate-800 hover:text-slate-900 transition-all duration-300 tracking-wide"
          >
            {t.nav.talkSales}
          </button>

          <div className="h-5 w-[1px] bg-slate-200 mx-1 hidden xl:block"></div>

          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1.5 p-1 transition-colors group"
            >
              <Globe size={18} className="group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-bold tracking-wider uppercase">{language}</span>
              <ChevronDown size={12} className={`opacity-50 group-hover:opacity-100 transition-all ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 p-1 z-50">
                {(['ES', 'EN', 'PT'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-bold rounded-lg transition-colors ${language === lang ? 'bg-blue-50 text-[#0066FF]' : 'text-slate-600 hover:bg-gray-50'}`}
                  >
                    {lang === 'ES' ? 'ES (Spanish)' : lang === 'EN' ? 'EN (English)' : 'PT (Português)'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botón Menú Móvil */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-[100] animate-fade-in flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.nav.product}</span>
              <a onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-slate-800 py-2 border-b border-slate-50">{t.nav.omnichannel}</a>
              <a onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-slate-800 py-2 border-b border-slate-50">{t.nav.aiAgents}</a>
            </div>
            <a onClick={() => { navigate('/por-que-nosotros'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-slate-800 py-2 border-b border-slate-50">{t.nav.whyUs}</a>
            <a onClick={() => { navigate('/contacto'); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-slate-800 py-2 border-b border-slate-50">{t.nav.contact}</a>
            
            <div className="mt-4 pt-6 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 block">IDIOMA / LANGUAGE</span>
              <div className="grid grid-cols-3 gap-3">
                {(['ES', 'EN', 'PT'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`py-3 rounded-xl border text-sm font-bold transition-all ${language === lang ? 'bg-blue-50 border-blue-200 text-[#0066FF]' : 'bg-slate-50 border-slate-100 text-slate-600'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => { navigate('/contacto'); setIsMobileMenuOpen(false); }}
              className="mt-8 w-full py-4 rounded-xl bg-[#0A0A0B] text-white font-bold shadow-lg"
            >
              {t.nav.talkSales}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full py-6 mt-8 border-t border-slate-200 bg-slate-50 flex justify-center">
      <div className="max-w-[1600px] w-full px-6 lg:px-12 flex flex-row items-center justify-between">
        <p className="text-slate-500 text-[13px] font-semibold tracking-tight">
          {t.footer.rights}
        </p>
        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/profile.php?id=61576965398240&mibextid=wwXIfr&rdid=nGQlqLYv4LJkuvHI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QMRf3o6L6%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/createch.ia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E83A82] transition-all duration-300 hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/createchsoftware" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0066FF] transition-all duration-300 hover:scale-110">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

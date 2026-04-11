import { Link } from "react-router-dom";
import { Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-400 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <p className="font-['Gabriela:Regular',sans-serif] text-white mb-2">Studio Notland</p>
            <p className="text-slate-500">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">{t('footer.navigation')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-white transition-colors">
                {t('footer.home')}
              </Link>
              <Link to="/projects" className="hover:text-white transition-colors">
                {t('footer.projects')}
              </Link>
              <a href="#experience" className="hover:text-white transition-colors">
                {t('footer.experience')}
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                {t('footer.contact')}
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-white mb-4">{t('footer.socialContact')}</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.linkedin.com/in/mari-svennevik-notland" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/marinosve" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p>© {currentYear} Mari Svennevik Notland. {t('footer.copyright')}.</p>
        </div>
      </div>
    </footer>
  );
}

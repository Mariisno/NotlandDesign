import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function Nav({ onSectionClick }: { onSectionClick: (sectionId: string) => void }) {
  const { t } = useLanguage();
  
  const buttonClass = "px-4 py-2 capitalize font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] hover:bg-slate-100 hover:text-black rounded-lg transition-all cursor-pointer";
  
  return (
    <nav className="flex items-center gap-2">
      <Link to="/projects" className={buttonClass}>
        {t('nav.projects')}
      </Link>
      <Link to="/my-story" className={buttonClass}>
        {t('nav.myStory')}
      </Link>
      <button 
        onClick={() => onSectionClick('about')}
        className={buttonClass}
      >
        {t('nav.about')}
      </button>
      <button 
        onClick={() => onSectionClick('experience')}
        className={buttonClass}
      >
        {t('nav.experience')}
      </button>
      <button 
        onClick={() => onSectionClick('contact')}
        className={buttonClass}
      >
        {t('nav.contact')}
      </button>
    </nav>
  );
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-6 md:px-[64px] py-[24px] relative size-full">
          <Link to="/" className="basis-0 flex flex-col font-['Gabriela:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[36px] md:text-[56px] text-black tracking-[-1.68px] hover:opacity-70 transition-opacity">
            <p className="leading-[1.1]">NotlandDesign</p>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Nav onSectionClick={scrollToSection} />
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              <Globe className="size-4 text-slate-600" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'no' : 'en')}
                className="px-3 py-1 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100 rounded-md transition-colors"
              >
                {language === 'en' ? 'NO' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 border-t border-slate-200">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black capitalize hover:opacity-70 transition-opacity"
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/my-story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black capitalize hover:opacity-70 transition-opacity"
            >
              {t('nav.myStory')}
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-black capitalize hover:opacity-70 transition-opacity text-left"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-black capitalize hover:opacity-70 transition-opacity text-left"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-black capitalize hover:opacity-70 transition-opacity text-left"
            >
              {t('nav.contact')}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <Globe className="size-4 text-slate-600" />
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'no' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-1 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100 rounded-md transition-colors"
              >
                {language === 'en' ? 'Norsk' : 'English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

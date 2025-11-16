import { Phone } from "lucide-react";
import profileImage from "figma:asset/cbe470e70a7da06a735a5a727ebf806fe1d20267.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-slate-900 dark:text-slate-100">{t('hero.name')}</h1>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
              >
                {t('hero.viewProjects')}
              </a>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl blur-3xl opacity-20" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl dark:shadow-blue-900/20 dark:ring-1 dark:ring-white/10">
                <img 
                  src={profileImage} 
                  alt="Mari Svennevik Notland"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

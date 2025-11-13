import { Mail, Phone } from "lucide-react";
import profileImage from "figma:asset/cbe470e70a7da06a735a5a727ebf806fe1d20267.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-slate-900">{t('hero.name')}</h1>
              <p className="text-slate-600 max-w-xl">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {t('hero.viewProjects')}
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="size-4" />
                <a href="mailto:marinosve@gmail.com" className="underline hover:text-slate-900">
                  marinosve@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl blur-3xl opacity-20" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={profileImage} 
                  alt="Mari Svennevik Notland"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

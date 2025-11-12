import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-white">{t('contact.title')}</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="mailto:marinosve@gmail.com"
              className="flex flex-col items-center gap-4 p-6 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-slate-700 rounded-full group-hover:bg-slate-600 transition-colors">
                <Mail className="size-6" />
              </div>
              <div>
                <p className="text-slate-400 mb-1">{t('contact.email')}</p>
                <p className="text-white">marinosve@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:47709654"
              className="flex flex-col items-center gap-4 p-6 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-slate-700 rounded-full group-hover:bg-slate-600 transition-colors">
                <Phone className="size-6" />
              </div>
              <div>
                <p className="text-slate-400 mb-1">{t('contact.phone')}</p>
                <p className="text-white">47709654</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { User, Heart, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function AboutMe() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
            <User className="size-4" />
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">{t('projects.aboutMe.title')}</span>
          </div>
          <h2 className="text-slate-900 mb-6">{t('projects.aboutMe.title')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('projects.aboutMe.intro')}
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              {t('projects.aboutMe.background')}
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              {t('projects.aboutMe.approach')}
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl shrink-0">
                  <Lightbulb className="size-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">Research-Driven</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('language') === 'en' 
                      ? 'Deep understanding of user behavior through qualitative research methods'
                      : 'Dyp forståelse av brukeratferd gjennom kvalitative forskningsmetoder'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-xl shrink-0">
                  <Users className="size-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">Collaborative</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('language') === 'en'
                      ? 'Thrive in cross-functional teams, bridging design and development'
                      : 'Trives i tverrfaglige team og bygger broen mellom design og utvikling'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-xl shrink-0">
                  <Heart className="size-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">User Advocate</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('language') === 'en'
                      ? 'Always putting users first while balancing business and technical needs'
                      : 'Setter alltid brukeren først samtidig som jeg balanserer forretnings- og tekniske behov'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
            <div className="flex gap-4 items-start">
              <div className="text-6xl text-blue-600 opacity-30 leading-none">"</div>
              <p className="text-slate-700 text-lg leading-relaxed italic pt-4">
                {t('projects.aboutMe.passion')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { User, Heart, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { InfoBadge } from "./ui/pill-badge";
import { HighlightCard } from "./ui/feature-card";

export function AboutMe() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <InfoBadge icon={<User className="size-4" />} className="mb-4">
            {t('projects.aboutMe.title')}
          </InfoBadge>
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
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {t('projects.aboutMe.intro')}
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('projects.aboutMe.background')}
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
            <HighlightCard
              icon={<Lightbulb className="size-6" />}
              title={t('projects.aboutMe.cards.researchDriven.title')}
              description={t('projects.aboutMe.cards.researchDriven.description')}
              variant="blue"
            />
            
            <HighlightCard
              icon={<Users className="size-6" />}
              title={t('projects.aboutMe.cards.collaborative.title')}
              description={t('projects.aboutMe.cards.collaborative.description')}
              variant="purple"
            />
            
            <HighlightCard
              icon={<Heart className="size-6" />}
              title={t('projects.aboutMe.cards.userAdvocate.title')}
              description={t('projects.aboutMe.cards.userAdvocate.description')}
              variant="green"
            />
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

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { useLanguage } from "./contexts/LanguageContext";
import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap, Briefcase, Heart, Lightbulb, Rocket } from "lucide-react";
import { useRef } from "react";
import { PillBadge, InfoBadge } from "./components/ui/pill-badge";
import { ReadingProgress } from "./components/ReadingProgress";
import { ScrollToTop } from "./components/ScrollToTop";

export default function MyStoryPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const timelineData = [
    {
      id: 'highSchool',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ntnu',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'uio',
      icon: Lightbulb,
      color: 'from-rose-500 to-orange-500'
    },
    {
      id: 'advania',
      icon: Briefcase,
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'aibel',
      icon: Rocket,
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">{t('story.title')}</h1>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('story.subtitle')}
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-slate-400"
            >
              <p>{t('story.scrollPrompt')}</p>
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto mt-4 relative">
                <motion.div
                  className="w-1.5 h-1.5 bg-slate-400 rounded-full absolute left-1/2 -translate-x-1/2 top-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;
            const data = t(`story.timeline.${item.id}`);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-20 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 dark:ring-1 dark:ring-white/10"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                          <Icon className="size-6" />
                        </div>
                        <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                          <span className="text-slate-600 dark:text-slate-400">{data.year}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-slate-900 dark:text-slate-100 mb-3">{data.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{data.description}</p>
                      
                      {data.highlights && (
                        <div className="flex flex-wrap gap-2">
                          {data.highlights.map((highlight: string, i: number) => (
                            <PillBadge key={i} variant="slate">
                              {highlight}
                            </PillBadge>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative hidden md:block">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center`}
                    >
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </motion.div>
                    
                    {/* Connecting line */}
                    {index < timelineData.length - 1 && (
                      <div className={`absolute left-1/2 -translate-x-1/2 top-16 w-1 h-20 bg-gradient-to-b ${item.color}`}></div>
                    )}
                  </div>

                  {/* Empty space for balance */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Fun fact section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-purple-100 dark:border-purple-900 dark:ring-1 dark:ring-white/10"
          >
            <div className="text-center">
              <div className="inline-flex justify-center mb-6">
                <PillBadge variant="purple">
                  {t('story.funFact.badge')}
                </PillBadge>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-4">{t('story.funFact.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t('story.funFact.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ReadingProgress />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

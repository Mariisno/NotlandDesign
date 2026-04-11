import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { IconBox } from "./ui/icon-box";
import { PillBadge } from "./ui/pill-badge";

interface TimelineItem {
  periodKey: string;
  titleKey: string;
  organizationKey: string;
  descriptionKey?: string;
  type: "work" | "education";
}

const timeline: TimelineItem[] = [
  {
    periodKey: "experience.work.aibel.period",
    titleKey: "experience.work.aibel.title",
    organizationKey: "experience.work.aibel.organization",
    descriptionKey: "experience.work.aibel.description",
    type: "work"
  },
  {
    periodKey: "experience.education.uio.period",
    titleKey: "experience.education.uio.title",
    organizationKey: "experience.education.uio.organization",
    type: "education"
  },
  {
    periodKey: "experience.work.advania.period",
    titleKey: "experience.work.advania.title",
    organizationKey: "experience.work.advania.organization",
    descriptionKey: "experience.work.advania.description",
    type: "work"
  },
  {
    periodKey: "experience.education.ntnu.period",
    titleKey: "experience.education.ntnu.title",
    organizationKey: "experience.education.ntnu.organization",
    type: "education"
  }
];

export function Experience() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-slate-900 dark:text-slate-100">{t('experience.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            {t('experience.subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0">
                  <IconBox
                    icon={item.type === 'work' ? <Briefcase className="size-6" /> : <GraduationCap className="size-6" />}
                    variant={item.type === 'work' ? 'blue' : 'green'}
                    size="lg"
                    className="size-16"
                  />
                </div>
                
                {/* Content */}
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg dark:ring-1 dark:ring-white/10">
                  <PillBadge variant={item.type === 'work' ? 'blue' : 'green'} className="mb-3">
                    {t(item.periodKey)}
                  </PillBadge>
                  
                  <h3 className="text-slate-900 dark:text-slate-100 mb-1">{t(item.titleKey)}</h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-2">{t(item.organizationKey)}</p>
                  
                  {item.descriptionKey && (
                    <p className="text-slate-600 dark:text-slate-400 italic">{t(item.descriptionKey)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

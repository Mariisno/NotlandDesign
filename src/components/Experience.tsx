import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

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
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-slate-900">{t('experience.title')}</h2>
          <p className="text-slate-600 max-w-2xl">
            {t('experience.subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                {/* Icon */}
                <div className={`absolute left-0 flex items-center justify-center w-16 h-16 rounded-full ${
                  item.type === 'work' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'bg-green-50 text-green-600'
                }`}>
                  {item.type === 'work' ? (
                    <Briefcase className="size-6" />
                  ) : (
                    <GraduationCap className="size-6" />
                  )}
                </div>
                
                {/* Content */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full mb-3">
                    {t(item.periodKey)}
                  </div>
                  
                  <h3 className="text-slate-900 mb-1">{t(item.titleKey)}</h3>
                  
                  <p className="text-slate-600 mb-2">{t(item.organizationKey)}</p>
                  
                  {item.descriptionKey && (
                    <p className="text-slate-500 italic">{t(item.descriptionKey)}</p>
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

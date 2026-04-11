import { Layers, Users, Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { IconBox } from "./ui/icon-box";
import { type ColorVariant } from "../utils/design-tokens";

interface SkillCategory {
  icon: React.ReactNode;
  titleKey: string;
  skillKeys: string[];
  variant: ColorVariant;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Layers className="size-6" />,
    titleKey: "skills.uxDesign",
    variant: "blue",
    skillKeys: [
      "skills.skills.figma",
      "skills.skills.designSystem",
      "skills.skills.userResearch",
      "skills.skills.contextualInquiry",
      "skills.skills.personas",
      "skills.skills.usabilityTesting",
      "skills.skills.designThinking",
      "skills.skills.universalDesign",
      "skills.skills.thematicAnalysis"
    ]
  },
  {
    icon: <Users className="size-6" />,
    titleKey: "skills.scrumProject",
    variant: "purple",
    skillKeys: [
      "skills.skills.scrumMaster",
      "skills.skills.facilitation",
      "skills.skills.agile",
      "skills.skills.roadmaps",
      "skills.skills.kanban",
      "skills.skills.prioritization",
      "skills.skills.workshopFacilitation",
      "skills.skills.crossFunctional"
    ]
  },
  {
    icon: <Code className="size-6" />,
    titleKey: "skills.development",
    variant: "green",
    skillKeys: [
      "skills.skills.python",
      "skills.skills.webTech",
      "skills.skills.react",
      "skills.skills.github",
      "skills.skills.tools"
    ]
  }
];

export function Skills() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-slate-900 dark:text-slate-100">{t('skills.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md dark:shadow-xl dark:shadow-black/20 dark:ring-1 dark:ring-white/10 transition-all"
            >
              <IconBox 
                icon={category.icon} 
                variant={category.variant}
                className="mb-4"
              />
              
              <h3 className="text-slate-900 dark:text-slate-100 mb-4">{t(category.titleKey)}</h3>
              
              <ul className="space-y-2">
                {category.skillKeys.map((skillKey, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <span className="text-blue-500 dark:text-blue-400">•</span>
                    <span>{t(skillKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

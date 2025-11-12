import { Layers, Users, Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface SkillCategory {
  icon: React.ReactNode;
  titleKey: string;
  skillKeys: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Layers className="size-6" />,
    titleKey: "skills.uxDesign",
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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-slate-900">{t('skills.title')}</h2>
          <p className="text-slate-600 max-w-2xl">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-lg mb-4">
                {category.icon}
              </div>
              
              <h3 className="text-slate-900 mb-4">{t(category.titleKey)}</h3>
              
              <ul className="space-y-2">
                {category.skillKeys.map((skillKey, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center gap-2 text-slate-600"
                  >
                    <span className="text-blue-500">•</span>
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

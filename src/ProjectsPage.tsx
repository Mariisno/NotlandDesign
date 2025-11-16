import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { Code, ArrowLeft, Sparkles, Rocket, Palette, ExternalLink, Brain, Layers, Lightbulb, User } from "lucide-react";
import { Link } from "react-router-dom";
import { KioskPreview } from "./components/KioskPreview";
import { useLanguage } from "./contexts/LanguageContext";
import { InfoBadge, PillBadge } from "./components/ui/pill-badge";
import { IconBox } from "./components/ui/icon-box";
import { type ColorVariant, colorVariants } from "./utils/design-tokens";
import imgSioKiosk from "figma:asset/024822206478c4df82a28efd3fb2b461952a37e6.png";
import imgIn1060 from "figma:asset/b326441372367a663d2dd5671c7f1ee45e27d312.png";
import imgAirFilter from "figma:asset/668be81020f17ae3a4e12b2016a30ff690b5d326.png";
import imgPsychology from "figma:asset/a7debf11eeba432c74d7b091ff84839329c9266c.png";

type Project = {
  id: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  image: string;
  icon: any;
  variant: ColorVariant;
  gradient: string;
  tech?: string[];
  highlightsKey?: string;
  detailLink?: string;
};

const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: "sio-kiosk",
    titleKey: "projects.list.sioKiosk.title",
    categoryKey: "projects.list.sioKiosk.category",
    descriptionKey: "projects.list.sioKiosk.description",
    image: imgSioKiosk,
    icon: Palette,
    variant: "pink",
    gradient: "from-pink-600/20 to-rose-600/20",
    tech: ["Figma", "Prototyping", "UX Design"],
    highlightsKey: "projects.list.sioKiosk.highlights",
    detailLink: "/projects/sio-kiosk"
  },
  {
    id: "in1060-design",
    titleKey: "projects.list.in1060.title",
    categoryKey: "projects.list.in1060.category",
    descriptionKey: "projects.list.in1060.description",
    image: imgIn1060,
    icon: Lightbulb,
    variant: "green",
    gradient: "from-green-600/20 to-emerald-600/20",
    tech: ["Figma", "Miro", "Arduino", "3D Modellering"],
    highlightsKey: "projects.list.in1060.highlights"
  },
  {
    id: "air-filter-design",
    titleKey: "projects.list.airFilter.title",
    categoryKey: "projects.list.airFilter.category",
    descriptionKey: "projects.list.airFilter.description",
    image: imgAirFilter,
    icon: Layers,
    variant: "amber",
    gradient: "from-amber-600/20 to-orange-600/20",
    tech: ["UX Research", "Prototyping", "3D Modellering", "Tematisk Analyse"],
    highlightsKey: "projects.list.airFilter.highlights"
  },
  {
    id: "bachelor-psychology",
    titleKey: "projects.list.psychology.title",
    categoryKey: "projects.list.psychology.category",
    descriptionKey: "projects.list.psychology.description",
    image: imgPsychology,
    icon: Brain,
    variant: "purple",
    gradient: "from-purple-600/20 to-fuchsia-600/20",
    tech: ["Kvalitativ Metode", "Intervjuteknikk", "Tematisk Analyse"],
    highlightsKey: "projects.list.psychology.highlights"
  },
  {
    id: "portfolio",
    titleKey: "projects.list.portfolio.title",
    categoryKey: "projects.list.portfolio.category",
    descriptionKey: "projects.list.portfolio.description",
    image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHdlYnNpdGUlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyNzAwMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Code,
    variant: "indigo",
    gradient: "from-indigo-600/20 to-purple-600/20",
    tech: ["Figma", "Figma Make", "React", "TypeScript", "Tailwind CSS"],
    highlightsKey: "projects.list.portfolio.highlights"
  }
];

export function ProjectsPage() {
  const { t } = useLanguage();
  const projects = getProjects(t);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-[104px] transition-colors duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            <span>{t('projects.backToHome')}</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <InfoBadge icon={<Sparkles className="size-4" />} className="mb-4">
              {t('projects.badge')}
            </InfoBadge>
            <h1 className="font-['Gabriela:Regular',sans-serif] text-slate-900 dark:text-slate-100 mb-4">{t('projects.title')}</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <IconBox icon={<User className="size-6" />} variant="blue" />
                <h2 className="text-slate-900 dark:text-slate-100">{t('projects.aboutMe.title')}</h2>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('projects.aboutMe.intro')}
              </p>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('projects.aboutMe.background')}
              </p>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('projects.aboutMe.approach')}
              </p>
              
              <div className="pt-4 pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  {t('projects.aboutMe.passion')}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI5NjA5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Designer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-16"
        >
          {/* Projects Grid */}
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-black/40 dark:ring-1 dark:ring-white/10 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-80 lg:h-auto overflow-hidden bg-slate-50 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-20 dark:opacity-30`} />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <IconBox 
                      icon={<project.icon className="size-6" />}
                      variant={project.variant}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-slate-900 dark:text-slate-100 mb-1">{t(project.titleKey)}</h3>
                      <p className={colorVariants[project.variant].text}>{t(project.categoryKey)}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(project.descriptionKey)}</p>

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-slate-900 dark:text-slate-100">{t('projects.technologies')}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <PillBadge
                            key={techIndex}
                            variant={project.variant}
                          >
                            {tech}
                          </PillBadge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  {project.highlightsKey && (
                    <div className="space-y-3">
                      <p className="text-slate-900 dark:text-slate-100">{t('projects.highlights')}</p>
                      <ul className="space-y-2.5">
                        {(t(project.highlightsKey) as any).map((highlight: string, highlightIndex: number) => (
                          <li key={highlightIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                            <span className={`${colorVariants[project.variant].text} shrink-0 mt-1.5 size-1.5 rounded-full`} style={{ backgroundColor: 'currentColor' }} />
                            <span className="flex-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  {project.detailLink && (
                    <div className="pt-2">
                      <Link 
                        to={project.detailLink}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl hover:opacity-80 transition-all duration-300 hover:gap-3 ${colorVariants[project.variant].bgDark} ${colorVariants[project.variant].text}`}
                      >
                        <span>{t('projects.viewPrototype')}</span>
                        <ExternalLink className="size-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}

          {/* Work in Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-3xl p-12 lg:p-16 text-center dark:ring-1 dark:ring-white/10"
          >
            <div className="inline-flex items-center justify-center size-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-6 dark:ring-1 dark:ring-white/10">
              <Rocket className="size-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-slate-900 dark:text-slate-100 mb-4">{t('projects.comingSoon')}</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('projects.comingSoonDesc')}
            </p>
          </motion.div>

          {/* Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-6 lg:gap-8"
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl dark:shadow-black/40 dark:ring-1 dark:ring-white/10 transition-all duration-300 text-center group">
              <IconBox 
                icon={<Code className="size-7" />} 
                variant="blue" 
                size="lg"
                className="mb-5 group-hover:scale-110 transition-transform duration-300" 
              />
              <h4 className="text-slate-900 dark:text-slate-100 mb-3">{t('projects.cards.fullstack.title')}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('projects.cards.fullstack.desc')}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl dark:shadow-black/40 dark:ring-1 dark:ring-white/10 transition-all duration-300 text-center group">
              <IconBox 
                icon={<Sparkles className="size-7" />} 
                variant="purple" 
                size="lg"
                className="mb-5 group-hover:scale-110 transition-transform duration-300" 
              />
              <h4 className="text-slate-900 dark:text-slate-100 mb-3">{t('projects.cards.userInsight.title')}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('projects.cards.userInsight.desc')}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl dark:shadow-black/40 dark:ring-1 dark:ring-white/10 transition-all duration-300 text-center group">
              <IconBox 
                icon={<Rocket className="size-7" />} 
                variant="green" 
                size="lg"
                className="mb-5 group-hover:scale-110 transition-transform duration-300" 
              />
              <h4 className="text-slate-900 dark:text-slate-100 mb-3">{t('projects.cards.iterative.title')}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('projects.cards.iterative.desc')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

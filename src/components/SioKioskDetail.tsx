import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Kiosk from "../imports/Kiosk";
import { useLanguage } from "../contexts/LanguageContext";

export function SioKioskDetail() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50/30 to-slate-50 pt-[104px]">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-pink-600 transition-colors mb-4"
          >
            <ArrowLeft className="size-4" />
            <span>{t('projects.list.sioKiosk.detail.backToProjects')}</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-['Gabriela:Regular',sans-serif] mb-3">{t('projects.list.sioKiosk.title')}</h1>
            <p className="text-slate-600 max-w-3xl">
              {t('projects.list.sioKiosk.detail.subtitle')}
            </p>
            
            <a 
              href="https://www.figma.com/proto/zbkfKT1GzyToeiL7B46CWs/Oblig-2-2020?page-id=0%3A1&type=design&node-id=304-3&viewport=696%2C479%2C0.22&t=rvh1pqGNvAcQjBMx-1&scaling=contain&starting-point-node-id=304%3A3&mode=design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <span>{t('projects.list.sioKiosk.detail.openInFigma')}</span>
              <ExternalLink className="size-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Interactive Prototype */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <div className="mb-6">
            <h2 className="font-['Inter:Bold',sans-serif] mb-2">{t('projects.list.sioKiosk.detail.prototypeTitle')}</h2>
            <p className="text-slate-600">
              {t('projects.list.sioKiosk.detail.prototypeDescription')}
            </p>
          </div>

          {/* Prototype Container */}
          <div className="w-full flex justify-center overflow-x-auto">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-inner p-8">
              <div className="w-[1336px] h-[1015px]">
                <Kiosk />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-['Inter:Semi_Bold',sans-serif] mb-3">{t('projects.list.sioKiosk.detail.aboutTitle')}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('projects.list.sioKiosk.detail.aboutDescription')}
              </p>
              <div className="space-y-2">
                <p className="text-slate-600">
                  <span className="font-['Inter:Semi_Bold',sans-serif]">{t('projects.list.sioKiosk.detail.period')}</span> {t('projects.list.sioKiosk.detail.periodValue')}
                </p>
                <p className="text-slate-600">
                  <span className="font-['Inter:Semi_Bold',sans-serif]">{t('projects.list.sioKiosk.detail.role')}</span> {t('projects.list.sioKiosk.detail.roleValue')}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-['Inter:Semi_Bold',sans-serif] mb-3">{t('projects.list.sioKiosk.detail.focusTitle')}</h3>
              <ul className="space-y-2">
                {(t('projects.list.sioKiosk.detail.focusItems') as any).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

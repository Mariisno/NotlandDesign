import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Kiosk from "../imports/Kiosk";

export function SioKioskDetail() {
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
            <span>Tilbake til prosjekter</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-['Gabriela:Regular',sans-serif] mb-3">SIO Selvbetjeningskiosk</h1>
            <p className="text-slate-600 max-w-3xl">
              Interaktiv prototype av en selvbetjeningskiosk for SIO (Studentsamskipnaden i Oslo). Studentprosjekt fra IN2020-kurset ved UiO.
            </p>
            
            <a 
              href="https://www.figma.com/proto/zbkfKT1GzyToeiL7B46CWs/Oblig-2-2020?page-id=0%3A1&type=design&node-id=304-3&viewport=696%2C479%2C0.22&t=rvh1pqGNvAcQjBMx-1&scaling=contain&starting-point-node-id=304%3A3&mode=design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <span>Åpne i Figma</span>
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
            <h2 className="font-['Inter:Bold',sans-serif] mb-2">Interaktiv Prototype</h2>
            <p className="text-slate-600">
              Designet i Figma som en del av et studentprosjekt. Prototypen viser brukerflyt for matbestilling via selvbetjeningskiosk.
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
              <h3 className="font-['Inter:Semi_Bold',sans-serif] mb-3">Om prosjektet</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dette var et universitetsprosjekt hvor målet var å designe en brukervennlig selvbetjeningskiosk for SIO. 
                Fokuset lå på å skape en intuitiv brukeropplevelse som gjør matbestilling rask og enkel.
              </p>
              <div className="space-y-2">
                <p className="text-slate-600">
                  <span className="font-['Inter:Semi_Bold',sans-serif]">Periode:</span> IN2020 (UiO)
                </p>
                <p className="text-slate-600">
                  <span className="font-['Inter:Semi_Bold',sans-serif]">Rolle:</span> UX Designer & Prototyper
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-['Inter:Semi_Bold',sans-serif] mb-3">Fokusområder</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Brukervennlig interface for raskt kjøp</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Tydelig produktvisning med bilder</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Handlekurv-oversikt i sanntid</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Allergeninformasjon godt synlig</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./HomePage";
import { ProjectsPage } from "./ProjectsPage";
import { SioKioskDetail } from "./components/SioKioskDetail";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen bg-white">
          <Navigation />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/sio-kiosk" element={<SioKioskDetail />} />
            {/* Catch-all route redirects to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

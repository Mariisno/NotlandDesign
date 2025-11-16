import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { Toaster } from "sonner@2.0.3";

// Lazy load page components for better performance
const HomePage = lazy(() => import("./HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("./ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const SioKioskDetail = lazy(() => import("./components/SioKioskDetail").then(m => ({ default: m.SioKioskDetail })));
const MyStoryPage = lazy(() => import("./MyStoryPage"));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin" />
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </div>
    </div>
  );
}

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <HashRouter>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
        <Navigation />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/sio-kiosk" element={<SioKioskDetail />} />
            <Route path="/my-story" element={<MyStoryPage />} />
            {/* Catch-all route redirects to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        
        <Footer />
        <Toaster position="bottom-right" theme={theme} />
      </div>
    </HashRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

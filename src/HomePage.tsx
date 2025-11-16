import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { useSection } from "./contexts/SectionContext";

export function HomePage() {
  const { setCurrentSection } = useSection();

  useEffect(() => {
    const sections = [
      { id: 'about', element: document.getElementById('about') },
      { id: 'experience', element: document.getElementById('experience') },
      { id: 'contact', element: document.getElementById('contact') },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '-100px 0px -50% 0px',
      }
    );

    sections.forEach(({ element }) => {
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ element }) => {
        if (element) observer.unobserve(element);
      });
      setCurrentSection(null);
    };
  }, [setCurrentSection]);

  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ScrollToTop />
    </main>
  );
}

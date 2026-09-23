import { useEffect, useRef, useState } from "react";
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import MarqueeSection from "./components/sections/MarqueeSection";
import AboutSection from "./components/sections/AboutSection";
import EducationSection from "./components/sections/EducationSection";
import ProcessSection from "./components/sections/ProcessSection";
import HelpSection from "./components/sections/HelpSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContributionsSection from "./components/sections/ContributionsSection";
import WinsSection from "./components/sections/WinsSection";
import ContactSection from "./components/sections/ContactSection";
import CodingSection from "./components/sections/CodingSection";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("zaid-theme") || "dark");
  const [loading, setLoading] = useState(true);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const themeTransitionTimer = useRef(null);
  const themeTransitionEndTimer = useRef(null);
  const themeTransitionLocked = useRef(false);

  // Persist the selected theme and update the document root without remounting the application.
  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem("zaid-theme", theme);
    root.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  // Clear pending theme timers and restore the document when the application unmounts.
  useEffect(() => () => {
    clearTimeout(themeTransitionTimer.current);
    clearTimeout(themeTransitionEndTimer.current);
    document.documentElement.classList.remove("theme-transition-active");
  }, []);

  // Cover the page, change the theme once, then remove the overlay.
  const toggleTheme = () => {
    if (themeTransitionLocked.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
      return;
    }

    themeTransitionLocked.current = true;
    document.documentElement.classList.add("theme-transition-active");
    themeTransitionTimer.current = setTimeout(() => {
      setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
      themeTransitionTimer.current = null;
      themeTransitionEndTimer.current = setTimeout(() => {
        document.documentElement.classList.remove("theme-transition-active");
        themeTransitionLocked.current = false;
        themeTransitionEndTimer.current = null;
      }, 180);
    }, 120);
  };

  // Keep the loader lifecycle independent from theme changes and page content.
  useEffect(() => {
    const hideTimer = setTimeout(() => setLoaderHidden(true), 2700);
    const removeTimer = setTimeout(() => setLoading(false), 3250);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return <>
    {loading && <Loader isHidden={loaderHidden} />}
    <div className={`noise relative overflow-hidden ${loading ? "page-loading" : ""}`}>
      <div className="theme-transition-overlay" aria-hidden="true" />
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[800px]" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {/* Primary page content. */}
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />

        <ExperienceSection />
        <ProjectsSection />
        <ContributionsSection />
        <WinsSection />
        <EducationSection />
        <CodingSection />
        <HelpSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </>;
}

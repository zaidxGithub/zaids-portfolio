import { useEffect, useState } from "react";
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
import QuickAnswerSection from "./components/sections/QuickAnswersSection"

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("zaid-theme") || "dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("zaid-theme", theme);
    document.documentElement.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1250);
    return () => clearTimeout(timer);
  }, []);

  return <>
    {loading && <Loader />}
    <div className={`noise relative overflow-hidden ${theme === "light" ? "light-mode" : ""}`}>
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[800px]" />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        {/* //1 */}
        <HeroSection />
        {/* //2 */}
        <MarqueeSection />
        {/* //3 */}
        <AboutSection />
        {/* //4 */}
           <SkillsSection/>
            {/* //5 */}
             <ProcessSection />


             <ExperienceSection/>
                {/* //6 */}
              <ProjectsSection />

             {/* //8 */}
           <ContributionsSection/>
           {/* //9 */}
           <WinsSection/>
           {/* //10 */}

        <EducationSection/>
        {/* //11 */}

         <HelpSection />
         {/* //12 */}



           {/* <QuickAnswerSection/> */}
           {/* //13 */}
           <ContactSection/>




      </main>
      <Footer />
    </div>
  </>;
}

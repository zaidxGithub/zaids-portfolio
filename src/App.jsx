import { useEffect, useState } from "react";
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import MarqueeSection from "./components/sections/MarqueeSection";
import AboutSection from "./components/sections/AboutSection";

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
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
       
      </main>
      <Footer />
    </div>
  </>;
}

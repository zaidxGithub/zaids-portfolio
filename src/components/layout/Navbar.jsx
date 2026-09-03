import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../data/portfolioData";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1120px,92%)] -translate-x-1/2">
      <nav className="glass rounded-4xl xl:rounded-full px-4 py-3 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="text-lg font-black tracking-tight">
            Mohammad Zaid<span className="text-red-500">.</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link text-sm transition"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="rounded-full border border-white/10 p-2 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            open
              ? "mt-4 max-h-96 border-t border-white/10 pt-4 opacity-100"
              : "max-h-0 border-t-0 pt-0 opacity-0"
          }`}
        >
          <div
            className={`grid gap-2 transition-transform duration-300 ease-out ${
              open ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            {navItems.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="nav-mobile rounded-xl px-3 py-2 transition"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

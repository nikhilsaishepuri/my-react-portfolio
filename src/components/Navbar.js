import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference on initial load
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = ["home", "about", "projects", "contact"];

  // Handle Dark Mode & Local Storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handle Scroll Progress and Active Section Tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update Scroll Progress Bar
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      // Update Active Link based on position
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50">
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Modern Branding */}
        <div
          className="group flex items-center gap-2 cursor-pointer"
          onClick={() => handleClick("home")}
        >
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
            NS
          </div>
          <span className="text-xl font-black tracking-tighter dark:text-white uppercase">
            Shepuri Nikhil sai
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleClick(sec)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeSection === sec
                  ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {sec}
            </button>
          ))}

          <div className="w-px h-4 bg-slate-300 dark:bg-slate-800 mx-4" />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-yellow-400 hover:shadow-lg transition-all"
          >
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-slate-600 dark:text-yellow-400"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-900 dark:text-white"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg ${
          menuOpen
            ? "max-h-80 border-b border-slate-200 dark:border-slate-800"
            : "max-h-0"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleClick(sec)}
              className={`text-left text-sm font-black uppercase tracking-widest ${
                activeSection === sec ? "text-purple-600" : "text-slate-500"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import useScrollSpy from './useScrollSpy';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["home", "about", "projects", "contact"];
  const activeSection = useScrollSpy(sections, 100); // 100px offset

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    if (menuOpen) toggleMenu();
  };

  return (
    <nav className={`${styles.sidebar} ${darkMode ? styles.dark : ''}`}>
      <h1 className={styles.logo}>NIKHIL</h1>
      
      {/* Hamburger Menu Button */}
      <div className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ''}`}>
        <li>
          <a 
            href="#home" 
            className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`} 
            onClick={() => handleTabClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={() => handleTabClick('about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
            onClick={() => handleTabClick('projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={() => handleTabClick('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
      
      {/* Dark Mode Toggle */}
      <div className={styles.themeToggleContainer} onClick={toggleDarkMode}>
        <div className={`${styles.toggleSwitch} ${darkMode ? styles.dark : ''}`}>
          <FaSun className={styles.sun} />
          <FaMoon className={styles.moon} />
          <div className={styles.toggleCircle}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
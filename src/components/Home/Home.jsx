import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Software Developer", "AI Enthusiast", "Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      setTypedText(isDeleting 
        ? currentRole.substring(0, typedText.length - 1)
        : currentRole.substring(0, typedText.length + 1)
      );

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentRoleIndex, isDeleting, loopNum]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.particlesBackground} id="particles-js"></div>
      
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.greeting}>Hi, I'm <span className={styles.nameHighlight}>Nikhil Sai Shepuri</span></h1>
          <h1 className={styles.role}>
            And I'm <span className={styles.typingText}>{typedText}</span>
            <span className={styles.cursor}>|</span>
          </h1>
          
          <div className={styles.buttonGroup}>
            <a 
              href="Images/SHEPURI NIKHIL SAI (5) (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.resumeButton}
            >
              View Resume
              <span className={styles.buttonIcon}>↓</span>
            </a>
            
            <a 
              href="#contact" 
              className={styles.contactButton}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className={styles.certifications}>
          <div className={styles.certificationBadge}>
            <img 
              src="/Images/aws-cloud-quest-cloud-practitioner (1).png" 
              alt="AWS Cloud Practitioner" 
              className={styles.badgeImage}
            />
          </div>
          <div className={styles.certificationBadge}>
            <img 
              src="Images/aws-re-start-graduate.png" 
              alt="AWS Re-Start Graduate" 
              className={styles.badgeImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
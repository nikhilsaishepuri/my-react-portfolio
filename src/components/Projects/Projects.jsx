import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Feed Your Buds",
      image: "/Images/feed your buds.jpg",
      description: "FeedYourBuds is a website where customers can order freshly baked goods and have them delivered to their doorstep. The bakery offers products like cakes, pastries, bread, and cookies with online ordering and payment.",
      tags: ["E-commerce", "Food Delivery", "React"]
    },
    {
      title: "Vehicle Rental",
      image: "/Images/vehicle.jpg",
      description: "An online platform for booking and renting vehicles with features like vehicle selection, location selection, and pricing information.",
      tags: ["Car Rental", "Booking System", "JavaScript"]
    },
    {
      title: "Bakery Shop",
      image: "/Images/bakery.jpg",
      description: "An e-commerce platform for a bakery offering cakes, pastries, bread, and cookies with online ordering and payment functionality.",
      tags: ["E-commerce", "Food", "React"]
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <h2>My Projects</h2>
        <p className={styles.sectionSubtitle}>Here are some of my recent works</p>
      </div>
      
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.cardImageContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}></div>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <button className={styles.viewButton}>
                View Project
                <span className={styles.buttonIcon}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
import React, { useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <section id="about" className={`${styles.section1} ${styles.about} ${styles.navLink}`}>
      <h2>About Me</h2>
      <div className={styles.container}>
        <div className={styles.col}>
        <div className={styles.aboutRow1}>
          <div className={styles.data}>
            <p>I am a tech-savvy professional with strong skills in design, integration, and problem-solving, proficient in Java, SQL, and Bootstrap. I completed AWS Cloud Practitioner training, gaining a solid understanding of cloud concepts. With three months of freelancing experience, I developed UI pages and an e-commerce project, delivering practical solutions.
              I am eager to begin my career as a software engineer in a technology-driven organization, contributing to innovative projects and continuous growth.
            </p>
          </div>
          <div className={styles.photo}>
            <img 
              src="Images/3.jpg" 
              alt="Nikhil Sai Shepuri" 
              className={styles.profilePhoto}
            />
          </div>
        </div>
          <div className={styles.aboutRow2}>
            <div className={styles.tabTitle}>
              <div className={`${styles.tabLinks} ${activeTab === "skills" ? styles.activeLink : ""}`} onClick={() => handleTabClick("skills")}>Skills</div>
              <div className={`${styles.tabLinks} ${activeTab === "education" ? styles.activeLink : ""}`} onClick={() => handleTabClick("education")}>Education</div>
              <div className={`${styles.tabLinks} ${activeTab === "certification" ? styles.activeLink : ""}`} onClick={() => handleTabClick("certification")}>Certification</div>
            </div>
            <div className={`${styles.tabContents} ${activeTab === "skills" ? styles.activeTab : ""}`} id="skills">
              <div className={styles.skillsContainer}>
                <div className={styles.skillCard}>
                  <h3>Programming languages</h3>
                  <div className={styles.skillLogos}>
                    <img className={styles.skillImg} src="/Images/skills/c-1.svg" alt="C Language" />
                    <img className={styles.skillImg} src="/Images/skills/java-4.svg" alt="Java" />
                  </div>
                </div>
                <div className={styles.skillCard}>
                  <h3>Web technologies</h3>
                  <div className={styles.skillLogos}>
                    <img className={styles.skillImg} src="/Images/skills/html-1.svg" alt="HTML" />
                    <img className={styles.skillImg} src="Images/skills/css-3.svg" alt="CSS" />
                    <img className={styles.skillImg} src="Images/skills/logo-javascript.svg" alt="JavaScript" />
                    <img className={styles.skillImg} src="Images/skills/react-2.svg" alt="React" />
                  </div>
                </div>
                <div className={styles.skillCard}>
                  <h3>Version control</h3>
                  <div className={styles.skillLogos}>
                    <img className={styles.skillImg} src="Images/skills/git-icon.svg" alt="Git" />
                    <img className={styles.skillImg} src="Images/skills/github-icon-1.svg" alt="GitHub" />
                  </div>
                </div>
                <div className={styles.skillCard}>
                  <h3>AWS Services</h3>
                  <div className={styles.skillLogos}>
                    <img className={styles.skillImg} src="Images/skills/aws/EC2.svg" alt="EC2" />
                    <img className={styles.skillImg} src="Images/skills/aws/CloudTrail.svg" alt="CloudTrail" />
                    <img className={styles.skillImg} src="Images/skills/aws/CloudWatch.svg" alt="CloudWatch" />
                    <img className={styles.skillImg} src="Images/skills/aws/EFS.svg" alt="EFS" />
                    <img className={styles.skillImg} src="Images/skills/aws/IAM Identity Center.svg" alt="IAM Identity Center" />
                    <img className={styles.skillImg} src="Images/skills/aws/RDS.svg" alt="RDS" />
                    <img className={styles.skillImg} src="Images/skills/aws/Simple Storage Service.svg" alt="S3" />
                    <img className={styles.skillImg} src="Images/skills/aws/Virtual Private Cloud.svg" alt="VPC" />
                    <img className={styles.skillImg} src="Images/skills/aws/Elastic Block Store.svg" alt="EBS" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.tabContents} ${activeTab === "education" ? styles.activeTab : ""}`} id="education">
              <div className={styles.eduRow}>  {/* Changed from eduContainer to eduRow */}
                <div className={styles.eduCard}>
                  <h3>Keshav Memorial Institute of technology</h3>
                  <div className={styles.eduDetails}>
                    <p>Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)</p>
                    <p className={styles.eduMeta}>Narayanguda, Hyderabad.</p>
                    <p className={styles.eduMeta}>Aug 2019 - Jul 2023</p>
                  </div>
                </div>
                
                <div className={styles.eduCard}>
                  <h3>Sanjay Gandhi Memorial Government Polytechnic College</h3>
                  <div className={styles.eduDetails}>
                    <p>Diploma in Computer Engineering (CME)</p>
                    <p className={styles.eduMeta}>Abdullapurmet, Telangana</p>
                    <p className={styles.eduMeta}>Jun 2016 - Jun 2019</p>
                  </div>
                </div>
                
                <div className={styles.eduCard}>
                  <h3>ZP High School</h3>
                  <div className={styles.eduDetails}>
                    <p>Board of Secondary Education (SSC)</p>
                    <p className={styles.eduMeta}>Veliminedu, Telangana</p>
                    <p className={styles.eduMeta}>Year of Passing: 2016</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.tabContents} ${activeTab === "certification" ? styles.activeTab : ""}`} id="certification">
              <div className={styles.certRow}>
                {/* NPTEL Card */}
                <div className={styles.certCard}>
                  <h3>NPTEL Certifications</h3>
                  <div className={styles.certDetails}>
                    <div className={styles.certItem}>
                      <p>Introduction to Research</p>
                      <a href="Images/NPTEL Introduction to Research.jpeg" className={styles.certLink}>View Certificate</a>
                    </div>
                    <div className={styles.certItem}>
                      <p>Data Science for Engineers</p>
                      <a href="Images/NPTEL Data Science for Engineers.jpeg" className={styles.certLink}>View Certificate</a>
                    </div>
                    <div className={styles.certItem}>
                      <p>Social Networks</p>
                      <a href="Images/NPTEL Social Networks.jpeg" className={styles.certLink}>View Certificate</a>
                    </div>
                  </div>
                </div>

                {/* Android Development Card */}
                <div className={styles.certCard}>
                  <h3>Android Application Development</h3>
                  <div className={styles.certDetails}>
                    <div className={styles.certItem}>
                      <p>Training on Building an Android Application</p>
                      <a href="Images/SP Technologies.jpeg" className={styles.certLink}>View Certificate</a>
                    </div>
                  </div>
                </div>

                {/* AWS Card */}
                <div className={styles.certCard}>
                  <h3>AWS Cloud Practitioner</h3>
                  <div className={styles.certDetails}>
                    <div className={styles.certItem}>
                      <p>Training from EduBridge</p>
                      <a href="Images/EBEON1223854480-1.png" className={styles.certLink}>View Certificate</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

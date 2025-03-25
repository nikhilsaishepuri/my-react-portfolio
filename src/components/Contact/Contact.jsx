import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionHeader}>
        <h2>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>Have a project in mind or want to connect? Feel free to reach out.</p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src="Images/mail.webp" alt="Email" />
              </div>
              <div className={styles.contactDetails}>
                <h3>Email</h3>
                <a href="mailto:nikhilsaishepuri@gmail.com" className={styles.contactLink}>
                  nikhilsaishepuri@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src="Images/call.webp" alt="Phone" />
              </div>
              <div className={styles.contactDetails}>
                <h3>Phone</h3>
                <a href="tel:7659831448" className={styles.contactLink}>
                  +91 7659831448
                </a>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Connect With Me</h3>
              <div className={styles.socialIcons}>
                <a href="https://wa.me/7659831448" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <img src="Images/whatsapp.webp" alt="WhatsApp" />
                </a>
                <a href="https://www.linkedin.com/in/shepuri-nikhil-sai-2b844318b" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <img src="Images/in.png" alt="LinkedIn" />
                </a>
                <a href="https://www.credly.com/users/shepuri-nikhil-sai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <img src="Images/credly.svg" alt="Credly" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="Name" 
                placeholder="Your Name" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="Email" 
                placeholder="Your Email" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="Message" 
                rows="4" 
                placeholder="Your Message" 
                className={styles.formTextarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
              <span className={styles.buttonIcon}>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
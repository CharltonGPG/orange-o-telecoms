// ContactPage.jsx

import ContactFormSection from '@components/sections/ContactForm/ContactFormSection';
import { CONTACT_INFO } from '@constants';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or support</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>📞</div>
              <h3>Phone Support</h3>
              <p>{CONTACT_INFO.phone}</p>
              <p className={styles.methodNote}>Available during business hours</p>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>✉️</div>
              <h3>Email</h3>
              <p>{CONTACT_INFO.email}</p>
              <p className={styles.methodNote}>Response within 24 hours</p>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>🏢</div>
              <h3>Visit Us</h3>
              <p>{CONTACT_INFO.address}</p>
              <p className={styles.methodNote}>By appointment only</p>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>⏰</div>
              <h3>Business Hours</h3>
              <p>{CONTACT_INFO.businessHours}</p>
              <p className={styles.methodNote}>Closed on Sundays</p>
            </div>
          </div>
        </div>
      </div>

      <ContactFormSection />
    </div>
  );
};

export default ContactPage;
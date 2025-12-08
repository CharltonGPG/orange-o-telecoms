// Footer.jsx

import { Link } from 'react-router-dom';
// import { ROUTES } from '../../../routes';
import { ROUTES } from '@/routes';
import { CONTACT_INFO } from '@constants';
import styles from './Footer.module.css';
  
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}> 
            <h3 className={styles.footerLogo}>Orangeo Telecoms</h3>
            <p className={styles.footerDescription}>
              Providing reliable fiber and wireless internet solutions across South Africa since 2022.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link to={ROUTES.HOME}>Home</Link></li>
              <li><Link to={ROUTES.SOLUTIONS}>Solutions</Link></li>
              <li><Link to={ROUTES.COVERAGE}>Coverage Map</Link></li>
              <li><Link to={ROUTES.BUSINESS}>Business Solutions</Link></li>
              <li><Link to={ROUTES.CONTACT}>Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact Info</h4>
            <address className={styles.contactInfo}>
              <p><strong>Phone:</strong> {CONTACT_INFO.phone}</p>
              <p><strong>Email:</strong> {CONTACT_INFO.email}</p>
              <p><strong>Address:</strong> {CONTACT_INFO.address}</p>
              <p><strong>Hours:</strong> {CONTACT_INFO.businessHours}</p>
            </address>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Legal</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
              <li><Link to="/complaints">Complaints Procedure</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Orangeo Telecoms. All rights reserved.</p>
          <p className={styles.disclaimer}>
            ICASA Reg No: 2022/834178/07 | BEE Level: X Contributor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
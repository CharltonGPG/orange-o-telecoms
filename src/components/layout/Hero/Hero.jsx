// Hero.jsx

import { COMPANY_INFO } from '@/constants';
import Button from '@/components/common/Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badges}>
            <span className={styles.badge}>{COMPANY_INFO.ownership}</span>
            <span className={styles.badge}>Est. {COMPANY_INFO.founded}</span>
            <span className={styles.badge}>B-BBEE Compliant</span>
          </div>
          
          <h1 className={styles.title}>
            Building South Africa's
            <span className={styles.highlight}> Digital Future</span>
          </h1>
          
          <p className={styles.subtitle}>
            End-to-end telecom infrastructure, IoT solutions & security systems for 
            businesses, institutions, and forward-thinking communities.
          </p>
          
          <p className={styles.mission}>
            {COMPANY_INFO.mission}
          </p>
          
          <div className={styles.ctaContainer}>
            <Button 
              to="/solutions" 
              variant="outline" 
              size="large"
              className={styles.ctaButton}
            >
              Our Solutions
            </Button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Black-Owned</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>L1-3</span>
              <span className={styles.statLabel}>Connectivity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
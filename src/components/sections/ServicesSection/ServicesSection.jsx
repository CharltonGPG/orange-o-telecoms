// ServicesSection.jsx

import { SERVICES } from '@/constants';
import styles from './ServicesSection.module.css';
import Button from '@/components/common/Button/Button';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Our Comprehensive Solutions</h2>
          <p>End-to-end infrastructure services across the telecommunications value chain</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <ul className={styles.serviceFeatures}>
                {service.items.map((item, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className={styles.serviceActions}>
                <Button 
                  to="/contact" 
                  variant="outline" 
                  size="small"
                  className={styles.serviceButton}
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.fullValueChain}>
          <h3>Full Value Chain Coverage</h3>
          <div className={styles.chainSteps}>
            <div className={styles.chainStep}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepText}>Design & Engineering</span>
            </div>
            <div className={styles.chainArrow}>→</div>
            <div className={styles.chainStep}>
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepText}>Deployment & Installation</span>
            </div>
            <div className={styles.chainArrow}>→</div>
            <div className={styles.chainStep}>
              <span className={styles.stepNumber}>3</span>
              <span className={styles.stepText}>Operations & Maintenance</span>
            </div>
            <div className={styles.chainArrow}>→</div>
            <div className={styles.chainStep}>
              <span className={styles.stepNumber}>4</span>
              <span className={styles.stepText}>Monetization & Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
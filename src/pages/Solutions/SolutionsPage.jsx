// SolutionsPage.jsx

import { SOLUTIONS } from '@/constants';
import styles from './SolutionsPage.module.css';
import Button from '@/components/common/Button/Button';

const SolutionsPage = () => {
  return (
    <div className={styles.solutionsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Our Comprehensive Solutions</h1>
          <p>End-to-end infrastructure services for the 4IR economy</p>
        </div>

        <div className={styles.introSection}>
          <p className={styles.introText}>
            Orangeo Telecoms delivers high-quality connectivity infrastructure across the full value chain. 
            From network design to operations and monetization, we provide complete solutions for 
            businesses, institutions, and student residential communities.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {SOLUTIONS.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <ul className={styles.serviceFeatures}>
                {service.items.map((item, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button 
                to="/contact" 
                variant="outline" 
                className={styles.serviceButton}
              >
                Request Consultation
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.fullChainSection}>
          <h2>Full Value Chain Coverage</h2>
          <div className={styles.chainSteps}>
            <div className={styles.chainStep}>
              <div className={styles.stepNumber}>1</div>
              <h4>Network Design & Engineering</h4>
              <p>Strategic planning and technical design</p>
            </div>
            <div className={styles.chainArrow}>→</div>
            <div className={styles.chainStep}>
              <div className={styles.stepNumber}>2</div>
              <h4>Deployment & Installation</h4>
              <p>Aerial, underground & wireless implementation</p>
            </div>
            <div className={styles.chainArrow}>→</div>
            <div className={styles.chainStep}>
              <div className={styles.stepNumber}>3</div>
              <h4>Operations & Maintenance</h4>
              <p>24/7 monitoring and proactive maintenance</p>
            </div>
            <div className={styles.chainArrow}>→</div>
            <div className={styles.chainStep}>
              <div className={styles.stepNumber}>4</div>
              <h4>Monetization & Support</h4>
              <p>Revenue generation and ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
// PartnershipProposal.jsx

import { PARTNERSHIPS } from '@/constants';
import Button from '@/components/common/Button/Button';
import styles from './PartnershipProposal.module.css';

const PartnershipProposal = () => {
  return (
    <section className={styles.partnershipSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Strategic Partnership Opportunities</h2>
          <p>Collaborate with us to deliver innovative connectivity and security solutions</p>
        </div>
        
        <div className={styles.partnershipsGrid}>
          {PARTNERSHIPS.map((partnership) => (
            <div key={partnership.id} className={styles.partnershipCard}>
              <div className={styles.cardHeader}>
                <h3>{partnership.title}</h3>
                <p className={styles.description}>{partnership.description}</p>
              </div>
              
              <div className={styles.cardBody}>
                <h4>Key Highlights:</h4>
                <ul className={styles.highlights}>
                  {partnership.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                
                {partnership.quote && (
                  <div className={styles.quote}>
                    <p className={styles.quoteText}>"{partnership.quote}"</p>
                  </div>
                )}
              </div>
              
              <div className={styles.cardFooter}>
                <Button 
                  to="/contact" 
                  variant="primary"
                  className={styles.actionButton}
                >
                  Discuss Partnership
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.additionalOpportunities}>
          <h3>Additional Revenue Opportunities</h3>
          <div className={styles.opportunitiesGrid}>
            <div className={styles.opportunity}>
              <h4>WTTH Networks</h4>
              <p>Wireless to the Home solutions for underserved areas</p>
            </div>
            <div className={styles.opportunity}>
              <h4>Public Wi-Fi Hotspots</h4>
              <p>Municipal and community connectivity projects</p>
            </div>
            <div className={styles.opportunity}>
              <h4>Institutional Services</h4>
              <p>Voice & data services for schools and businesses</p>
            </div>
            <div className={styles.opportunity}>
              <h4>Research Collaboration</h4>
              <p>Student incubation and research partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProposal;
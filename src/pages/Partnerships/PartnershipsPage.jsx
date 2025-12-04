// PartnershipsPage.jsx

import { PARTNERSHIPS, COMPANY_INFO } from '@/constants';
import styles from './PartnershipsPage.module.css';
import Button from '@/components/common/Button/Button';

const PartnershipsPage = () => {
  const partnershipOpportunities = [
    {
      title: 'Educational Institutions',
      description: 'Campus connectivity, student residences, and training programs',
      benefits: [
        'Enhanced student experience',
        'Revenue sharing opportunities',
        'Skills development programs',
        'Research collaborations'
      ]
    },
    {
      title: 'Municipalities & Government',
      description: 'Public Wi-Fi, smart city initiatives, and community connectivity',
      benefits: [
        'Digital inclusion programs',
        'Revenue generation',
        'Infrastructure development',
        'Job creation'
      ]
    },
    {
      title: 'Property Developers',
      description: 'Fibre readiness, smart buildings, and infrastructure partnerships',
      benefits: [
        'Increased property value',
        'Future-ready infrastructure',
        'Recurring revenue streams',
        'Competitive advantage'
      ]
    },
    {
      title: 'Corporate & Enterprise',
      description: 'Custom connectivity, IoT solutions, and managed services',
      benefits: [
        'Business continuity',
        'Scalable solutions',
        'Dedicated support',
        'Cost optimization'
      ]
    }
  ];

  return (
    <div className={styles.partnershipsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Partnership Opportunities</h1>
          <p>Collaborate with Orangeo Telecoms to deliver innovative connectivity solutions</p>
        </div>

        <div className={styles.introSection}>
          <h2>Why Partner With Us?</h2>
          <p className={styles.introText}>
            As a {COMPANY_INFO.ownership} company established in {COMPANY_INFO.founded}, 
            we bring expertise, innovation, and a commitment to excellence to every partnership. 
            Our experienced leadership team and proven track record make us the ideal technical 
            partner for your connectivity and security needs.
          </p>
        </div>

        <div className={styles.featuredPartnership}>
          <h2>Featured Partnership: UIGC Connect</h2>
          <div className={styles.partnershipDetails}>
            {PARTNERSHIPS.map((partnership) => (
              <div key={partnership.id} className={styles.partnershipCard}>
                <h3>{partnership.title}</h3>
                <p className={styles.description}>{partnership.description}</p>
                
                <div className={styles.highlights}>
                  <h4>Partnership Highlights:</h4>
                  <ul>
                    {partnership.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                {partnership.quote && (
                  <div className={styles.quote}>
                    <p>"{partnership.quote}"</p>
                  </div>
                )}
                
                <Button 
                  to="/contact" 
                  variant="primary"
                  className={styles.partnershipButton}
                >
                  Discuss Similar Partnership
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.opportunitiesSection}>
          <h2>Additional Partnership Opportunities</h2>
          <div className={styles.opportunitiesGrid}>
            {partnershipOpportunities.map((opportunity, index) => (
              <div key={index} className={styles.opportunityCard}>
                <h3>{opportunity.title}</h3>
                <p className={styles.oppDescription}>{opportunity.description}</p>
                
                <div className={styles.benefits}>
                  <h4>Benefits:</h4>
                  <ul>
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  to="/contact" 
                  variant="outline"
                  className={styles.opportunityButton}
                >
                  Inquire About Partnership
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.revenueSection}>
          <h2>Revenue Generation Opportunities</h2>
          <p className={styles.revenueIntro}>
            Unlock new income streams within your community or institution:
          </p>
          
          <div className={styles.revenueGrid}>
            <div className={styles.revenueItem}>
              <h4>WTTH Networks</h4>
              <p>Wireless to the Home solutions for areas without fibre</p>
            </div>
            <div className={styles.revenueItem}>
              <h4>Public Wi-Fi Hotspots</h4>
              <p>Municipal and community connectivity projects</p>
            </div>
            <div className={styles.revenueItem}>
              <h4>Institutional Services</h4>
              <p>Voice & data services for schools and businesses</p>
            </div>
            <div className={styles.revenueItem}>
              <h4>Infrastructure Monetization</h4>
              <p>Revenue sharing on existing infrastructure</p>
            </div>
            <div className={styles.revenueItem}>
              <h4>Research Projects</h4>
              <p>Collaborative research and student incubation</p>
            </div>
            <div className={styles.revenueItem}>
              <h4>Training Programs</h4>
              <p>Fibre optic certification and skills development</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to Partner With Us?</h2>
          <p>Contact our partnerships team to discuss how we can work together.</p>
          <Button 
            to="/contact" 
            variant="primary" 
            size="large"
            className={styles.ctaButton}
          >
            Contact Partnerships Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;
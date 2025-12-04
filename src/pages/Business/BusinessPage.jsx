import React from 'react';
import styles from './BusinessPage.module.css';
import Button from '@components/common/Button/Button';

const BusinessPage = () => {
  const businessPlans = [
    {
      name: 'Business Fiber Starter',
      speed: 'Up to 100Mbps',
      price: 'R999/month',
      features: ['Static IP', '99.9% Uptime SLA', 'Business Support', 'Basic Router'],
    },
    {
      name: 'Business Fiber Pro',
      speed: 'Up to 500Mbps',
      price: 'R1,999/month',
      features: ['Multiple Static IPs', '99.95% Uptime SLA', 'Priority Support', 'Advanced Router'],
    },
    {
      name: 'Enterprise Fiber',
      speed: 'Up to 10Gbps',
      price: 'Custom Quote',
      features: ['Dedicated Fiber', '99.99% Uptime SLA', '24/7 Engineer Support', 'Custom Solutions'],
    },
  ];

  return (
    <div className={styles.businessPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Business Solutions</h1>
          <p>Reliable connectivity for businesses of all sizes</p>
        </div>

        <div className={styles.businessIntro}>
          <h2>Why Choose Orangeo Telecoms for Business?</h2>
          <p>
            Our business-grade fiber internet ensures your operations run smoothly with minimal downtime, 
            dedicated support, and scalable solutions that grow with your business.
          </p>
        </div>

        <div className={styles.plansGrid}>
          {businessPlans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <div className={styles.planHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.planSpeed}>{plan.speed}</div>
              </div>
              <div className={styles.planPrice}>{plan.price}</div>
              <ul className={styles.planFeatures}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button variant="primary" className={styles.planButton}>
                Get Quote
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.contactCta}>
          <h2>Need a Custom Solution?</h2>
          <p>Contact our business team for tailored enterprise solutions.</p>
          <Button variant="primary" size="large">
            Contact Business Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
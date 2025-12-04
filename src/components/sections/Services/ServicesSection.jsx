import React from 'react';
import { SERVICES } from '@constants';
import styles from './ServicesSection.module.css';
import Button from '@components/common/Button/Button';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Our Internet Services</h2>
          <p>Choose the perfect plan for your needs</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <h3>{service.title}</h3>
                <div className={styles.serviceSpeed}>{service.speed}</div>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.servicePrice}>{service.price}</div>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className={styles.serviceButton}>
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
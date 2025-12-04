import React from 'react';
import Card from '@components/common/Card/Card';
import { SERVICES } from '@constants';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Our Services</h1>
          <p>Choose the perfect internet solution for your needs</p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <Card key={service.id} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceSpeed}>{service.speed}</div>
              <div className={styles.servicePrice}>{service.price}</div>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className={styles.serviceButton}>Learn More</button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
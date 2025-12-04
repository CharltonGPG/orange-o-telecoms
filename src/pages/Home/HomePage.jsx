import React from 'react';
import Hero from '@components/layout/Hero/Hero';
import ServicesSection from '@components/sections/Services/ServicesSection';  // FIXED PATH
import CoverageSection from '@components/sections/Coverage/CoverageSection';
import ContactFormSection from '@components/sections/ContactForm/ContactFormSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <ServicesSection />
      <CoverageSection />
      <ContactFormSection />
    </div>
  );
};

export default HomePage;
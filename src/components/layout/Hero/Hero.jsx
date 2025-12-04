import React from 'react';
import styles from './Hero.module.css';
import Button from '@/components/common/Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Super-Fast Fiber Internet for <span className="text-orange">South Africa</span>
          </h1>
          <p className={styles.subtitle}>
            Experience seamless connectivity with speeds up to 1Gbps. 
            Perfect for streaming, gaming, and working from home.
          </p>
          <div className={styles.ctaContainer}>
            <Button 
              variant="primary" 
              size="large"
              to="/coverage"
            >
              Check Coverage
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              to="/services"
            >
              View Plans
            </Button>
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>No setup fees</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>24/7 Support</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>30-day guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
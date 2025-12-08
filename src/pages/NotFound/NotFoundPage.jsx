import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import { ROUTES } from '@/routes';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className="container">
        <div className={styles.notFoundContent}>
          <div className={styles.errorCode}>
            <span className={styles.errorNumber}>4</span>
            <div className={styles.signalIcon}>
              <div className={styles.signalDot}></div>
              <div className={styles.signalWave}></div>
              <div className={styles.signalWave}></div>
              <div className={styles.signalWave}></div>
            </div>
            <span className={styles.errorNumber}>4</span>
          </div>
          
          <div className={styles.errorMessage}>
            <h1>Connection Lost</h1>
            <p className={styles.errorDescription}>
              The page you're looking for seems to have disconnected from our network. 
              It might have been moved, removed, or never existed.
            </p>
            
            <div className={styles.connectionTips}>
              <h3>Try reconnecting:</h3>
              <ul className={styles.tipsList}>
                <li>Check the URL for any mistakes</li>
                <li>Use the navigation menu above</li>
                <li>Return to our homepage</li>
                <li>Contact our support team if you need assistance</li>
              </ul>
            </div>
            
            <div className={styles.ctaButtons}>
              <Button 
                to={ROUTES.HOME} 
                variant="primary" 
                size="large"
                className={styles.ctaButton}
              >
                Return Home
              </Button>
              <Button 
                to={ROUTES.CONTACT} 
                variant="outline" 
                size="large"
                className={styles.ctaButton}
              >
                Contact Support
              </Button>
            </div>
            
            <div className={styles.statsSection}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Network Uptime</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
import React from 'react';
import { COVERAGE_AREAS } from '@constants';
import styles from './CoverageSection.module.css';
import Button from '@components/common/Button/Button';

const CoverageSection = () => {
  return (
    <section className={styles.coverageSection}>
      <div className="container">
        <div className={styles.coverageContent}>
          <div className={styles.coverageInfo}>
            <h2>Check Our Coverage</h2>
            <p>Enter your address to see if Orangeo Telecoms is available in your area.</p>
            
            <div className={styles.coverageForm}>
              <input 
                type="text" 
                placeholder="Enter your street address"
                className={styles.addressInput}
              />
              <Button variant="primary" size="large">
                Check Availability
              </Button>
            </div>
            
            <div className={styles.areasList}>
              <h3>Currently available in:</h3>
              <div className={styles.areasGrid}>
                {COVERAGE_AREAS.map((area) => (
                  <div key={area} className={styles.areaTag}>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.coverageMap}>
            {/* Map placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <h4>Coverage Map</h4>
                <p>Enter your address to check availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
import React from 'react';
import { COVERAGE_AREAS } from '@constants';
import styles from './CoveragePage.module.css';

const CoveragePage = () => {
  return (
    <div className={styles.coveragePage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Coverage Map</h1>
          <p>Check if Orangeo Telecoms is available in your area</p>
        </div>

        <div className={styles.coverageContent}>
          <div className={styles.coverageMap}>
            <div className={styles.mapPlaceholder}>
              {/* Replace with actual map component */}
              <h3>Interactive Coverage Map</h3>
              <p>Enter your address to check availability</p>
              <input 
                type="text" 
                placeholder="Enter your street address"
                className={styles.addressInput}
              />
              <button className={styles.checkButton}>Check Availability</button>
            </div>
          </div>

          <div className={styles.coverageAreas}>
            <h3>Areas We Cover</h3>
            <div className={styles.areasGrid}>
              {COVERAGE_AREAS.map((area) => (
                <div key={area} className={styles.areaBadge}>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoveragePage;
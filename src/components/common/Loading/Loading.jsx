import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.logoContainer}>
          <div className={styles.logoCircle}>
            <div className={styles.logoInner}>
              <span className={styles.logoText}>O</span>
            </div>
          </div>
          <h1 className={styles.logoTitle}>Orangeo Telecoms</h1>
        </div>
        
        <div className={styles.loadingAnimation}>
          <div className={styles.signalBars}>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
            <div className={`${styles.bar} ${styles.bar4}`}></div>
            <div className={`${styles.bar} ${styles.bar5}`}></div>
          </div>
          
          <p className={styles.loadingText}>Connecting you to the future...</p>
          
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.loadingFooter}>
          <p className={styles.tagline}>Building South Africa's Digital Infrastructure</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
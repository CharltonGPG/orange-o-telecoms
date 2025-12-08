// ProjectsPage.jsx

import { PROJECTS } from '@/constants';
import styles from './ProjectsPage.module.css';
import Button from '@/components/common/Button/Button';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Our Projects & Portfolio</h1>
          <p>Successful infrastructure deployments and partnerships</p>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Network Uptime</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>Multiple</span>
            <span className={styles.statLabel}>Provinces Covered</span>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <span className={`${styles.status} ${styles[project.status.toLowerCase()]}`}>
                  {project.status}
                </span>
                <h3>{project.title}</h3>
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.projectDetails}>
                <div className={styles.detail}>
                  <strong>Location:</strong> {project.location}
                </div>
                
                <div className={styles.highlights}>
                  <strong>Key Highlights:</strong>
                  <ul>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button 
                to="/contact" 
                variant="outline"
                className={styles.projectButton}
              >
                Request Similar Project
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Start Your Infrastructure Project</h2>
          <p>Contact us to discuss your connectivity, security, or IoT project requirements.</p>
          <Button 
            to="/contact" 
            variant="primary"
            size="large"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
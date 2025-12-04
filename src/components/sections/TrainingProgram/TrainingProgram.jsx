// TrainingProgram.jsx

import styles from './TrainingProgram.module.css';
import Button from '@/components/common/Button/Button';

const TrainingProgram = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: 'Fibre Optic Technician Certification',
      level: 'Beginner to Advanced',
      duration: '4-6 Weeks',
      modules: [
        'Fibre optic theory & principles',
        'Splicing & termination techniques',
        'Testing & measurement procedures',
        'Safety protocols & standards',
        'Network design fundamentals'
      ],
      certification: 'SAQA-aligned certification',
      target: 'New entrants, technicians, engineers'
    },
    {
      id: 2,
      title: 'Network Infrastructure Installation',
      level: 'Intermediate',
      duration: '3-4 Weeks',
      modules: [
        'Aerial & underground deployment',
        'Cable pulling & installation',
        'Enclosure & cabinet installation',
        'Quality control & testing',
        'Project documentation'
      ],
      certification: 'Practical skills certification',
      target: 'Installation teams, field technicians'
    },
    {
      id: 3,
      title: 'CCTV & Security Systems',
      level: 'Beginner to Intermediate',
      duration: '2-3 Weeks',
      modules: [
        'Surveillance system design',
        'Camera installation & configuration',
        'Network video recording',
        'Access control systems',
        'Monitoring centre operations'
      ],
      certification: 'Security systems certification',
      target: 'Security personnel, installers'
    }
  ];

  const partnershipBenefits = [
    {
      title: 'For Educational Institutions',
      benefits: [
        'Revenue sharing from training programs',
        'Industry-aligned curriculum',
        'Practical hands-on training facilities',
        'Student placement opportunities',
        'Research collaboration'
      ]
    },
    {
      title: 'For Municipalities & Communities',
      benefits: [
        'Local skills development',
        'Job creation opportunities',
        'Digital inclusion programs',
        'Youth empowerment initiatives',
        'Economic development'
      ]
    },
    {
      title: 'For Corporate Partners',
      benefits: [
        'Customized training solutions',
        'Workforce upskilling',
        'Apprenticeship programs',
        'Industry certification',
        'Talent pipeline development'
      ]
    }
  ];

  return (
    <section className={styles.trainingSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Fibre Optic Training & Skills Development</h2>
          <p>Addressing South Africa's critical fibre skills shortage through certified training programs</p>
        </div>

        <div className={styles.programsIntro}>
          <div className={styles.introContent}>
            <h3>Partnership with UIGC & University of Venda</h3>
            <p>
              We partner with educational institutions to offer certified fibre optic training programs 
              that incubate export-ready skills for the Vhembe district and Limpopo communities. 
              Our programs provide practical mentorship and industry exposure.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Practical Training</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>SAQA</span>
                <span className={styles.statLabel}>Aligned</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>Industry</span>
                <span className={styles.statLabel}>Certified</span>
              </div>
            </div>
          </div>
          <div className={styles.introImage}>
            {/* Placeholder for training image */}
            <div className={styles.imagePlaceholder}>
              <h4>Hands-On Training Facility</h4>
              <p>Practical skills development in real-world scenarios</p>
            </div>
          </div>
        </div>

        <div className={styles.programsGrid}>
          <h3>Available Training Programs</h3>
          <div className={styles.programsContainer}>
            {trainingPrograms.map((program) => (
              <div key={program.id} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <h4>{program.title}</h4>
                  <div className={styles.programMeta}>
                    <span className={styles.level}>{program.level}</span>
                    <span className={styles.duration}>{program.duration}</span>
                  </div>
                </div>
                
                <div className={styles.programBody}>
                  <h5>Course Modules:</h5>
                  <ul className={styles.modules}>
                    {program.modules.map((module, index) => (
                      <li key={index}>{module}</li>
                    ))}
                  </ul>
                  
                  <div className={program.certification}>
                    <strong>Certification:</strong> {program.certification}
                  </div>
                  
                  <div className={styles.target}>
                    <strong>Target Audience:</strong> {program.target}
                  </div>
                </div>
                
                <div className={styles.programFooter}>
                  <Button 
                    to="/contact" 
                    variant="outline"
                    className={styles.enrollButton}
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.partnershipBenefits}>
          <h3>Partnership Benefits</h3>
          <div className={styles.benefitsGrid}>
            {partnershipBenefits.map((partnership, index) => (
              <div key={index} className={styles.benefitCard}>
                <h4>{partnership.title}</h4>
                <ul className={styles.benefitsList}>
                  {partnership.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <Button 
                  to="/contact" 
                  variant="primary"
                  className={styles.partnerButton}
                >
                  Partner With Us
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Start a Training Program in Your Community</h3>
          <p>
            Partner with Orangeo Telecoms to establish fibre optic training labs and 
            skills development programs in your institution or community.
          </p>
          <div className={styles.ctaActions}>
            <Button 
              to="/contact" 
              variant="primary"
              size="large"
              className={styles.ctaButton}
            >
              Request Training Proposal
            </Button>
            <Button 
              to="/partnerships" 
              variant="outline"
              size="large"
              className={styles.ctaButton}
            >
              View Partnership Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;
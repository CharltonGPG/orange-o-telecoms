// LeadershipTeam.jsx

import { LEADERSHIP_TEAM } from "@/constants";
import styles from "./LeadershipTeam.module.css";

import qlImage from "@/data/images/ql.png";
import arImage from "@/data/images/ar.png";

const teamImages = {
  ql: qlImage,
  ar: arImage,
};

const LeadershipTeam = () => {
  return (
    <section className={styles.leadershipSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Experienced Leadership Team</h2>
          <p>Driven by expertise, innovation, and a commitment to excellence</p>
        </div>

        <div className={styles.teamGrid}>
          {LEADERSHIP_TEAM.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.memberHeader}>
                <div className={styles.avatar}>
                  {teamImages[member.pfp] ? (
                    <img
                      src={teamImages[member.pfp]}
                      alt={`Portrait of ${member.name}, ${member.role} at Orangeo Telecoms`}
                      className={styles.avatarImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.avatarFallback}>{member.name.charAt(0)}</div>
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>

              <div className={styles.memberDetails}>
                <div className={styles.detail}>
                  <strong>Qualifications:</strong>
                  <p>{member.qualifications}</p>
                </div>

                <div className={styles.detail}>
                  <strong>Experience:</strong>
                  <p>{member.experience}</p>
                </div>

                <div className={styles.detail}>
                  <strong>Bio:</strong>
                  <p>{member.bio}</p>
                </div>

                <div className={styles.contact}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email:</span>
                    <a href={`mailto:${member.email}`} className={styles.contactLink}>
                      {member.email}
                    </a>
                  </div>
                  {member.phone && (
                    <div className={styles.contactItem}>
                      <span className={styles.contactLabel}>Phone:</span>
                      <a href={`tel:${member.phone}`} className={styles.contactLink}>
                        {member.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

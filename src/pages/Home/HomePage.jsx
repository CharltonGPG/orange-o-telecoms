// HomePage.jsx

import Hero from "@/components/layout/Hero/Hero";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import LeadershipTeam from "@/components/sections/LeadershipTeam/LeadershipTeam";
import PartnershipProposal from "@/components/sections/PartnershipProposal/PartnershipProposal";
import TrainingProgram from "@/components/sections/TrainingProgram/TrainingProgram";
import ContactFormSection from "@/components/sections/ContactForm/ContactFormSection";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <ServicesSection />
      <LeadershipTeam />
      <PartnershipProposal />
      <TrainingProgram />
      <ContactFormSection />
    </div>
  );
};

export default HomePage;

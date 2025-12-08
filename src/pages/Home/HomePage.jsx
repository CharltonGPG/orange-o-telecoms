// HomePage.jsx

import Hero from "@/components/layout/Hero/Hero";
import SolutionsSection from "@/components/sections/SolutionsSection/SolutionsSection";
import LeadershipTeam from "@/components/sections/LeadershipTeam/LeadershipTeam";
import ContactFormSection from "@/components/sections/ContactForm/ContactFormSection";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <SolutionsSection />
      <LeadershipTeam />
      <ContactFormSection />
    </div>
  );
};

export default HomePage;

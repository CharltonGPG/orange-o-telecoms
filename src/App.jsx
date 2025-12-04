// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/Home/HomePage';
import ServicesPage from '@/pages/Services/ServicesPage';
import PartnershipsPage from '@/pages/Partnerships/PartnershipsPage';
import ProjectsPage from '@/pages/Projects/ProjectsPage';
import ContactPage from '@/pages/Contact/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
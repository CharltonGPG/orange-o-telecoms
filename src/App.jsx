import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import HomePage from '@pages/Home/HomePage';
import ServicesPage from '@pages/Services/ServicesPage';
import CoveragePage from '@pages/Coverage/CoveragePage';
import BusinessPage from '@pages/Business/BusinessPage';
import ContactPage from '@pages/Contact/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
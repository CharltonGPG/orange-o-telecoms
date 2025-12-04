// App.jsx

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("@/pages/Home/HomePage"));
const ServicesPage = lazy(() => import("@/pages/Services/ServicesPage"));
const PartnershipsPage = lazy(() => import("@/pages/Partnerships/PartnershipsPage"));
const ProjectsPage = lazy(() => import("@/pages/Projects/ProjectsPage"));
const ContactPage = lazy(() => import("@/pages/Contact/ContactPage"));
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

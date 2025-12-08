import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home/HomePage"));
const SolutionsPage = lazy(() => import("@/pages/Solutions/SolutionsPage"));
const ProjectsPage = lazy(() => import("@/pages/Projects/ProjectsPage"));
const ContactPage = lazy(() => import("@/pages/Contact/ContactPage"));

import Layout from "@components/Layout";
import Loading from '@/components/common/Loading/Loading'; 
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import ScrollToTop from "@/components/common/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router basename="/orange-o-telecoms">
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<Loading />}> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
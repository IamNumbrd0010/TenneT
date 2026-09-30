import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import InteractiveBackdrop from './components/InteractiveBackdrop.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* Ensures page scrolls to top on navigation */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#0a0b0e] text-[#f3f4f6] selection:bg-blue-600 selection:text-white relative bg-grain overflow-x-hidden flex flex-col justify-between">
        {/* Interactive mouse-following ambient blue backdrop glow */}
        <InteractiveBackdrop />

        {/* Global sticky navigation with active page states */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-1 z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:projectId" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global studio footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

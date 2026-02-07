import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-[#00FF88]/20 selection:text-[#00FF88] font-sans relative">
        {/* Scanline overlay - reduced opacity and z-index */}
        <div className="fixed inset-0 pointer-events-none scanline z-0 opacity-5"></div>

        <ScrollToTop />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>);

}
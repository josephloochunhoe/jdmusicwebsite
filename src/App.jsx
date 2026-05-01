import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StudentLife from './pages/StudentLife';
import PricingFaq from './pages/PricingFaq';
import Contact from './pages/Contact';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA when scrolled past 80vh (approximate height of hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-jd-black font-sans selection:bg-jd-burgundy selection:text-white flex flex-col">
        <Navbar />
        
        {/* Main content wrapper */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/pricing-faq" element={<PricingFaq />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating CTA */}
        <a 
          href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`fixed bottom-6 right-6 z-50 px-8 py-4 rounded-full bg-jd-burgundy text-white font-bold shadow-2xl hover:bg-red-900 transition-all duration-300 flex items-center gap-2 ${
            showFloatingCTA ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          Register Now
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;

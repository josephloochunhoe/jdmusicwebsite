import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StudentLife from './pages/StudentLife';
import PricingFaq from './pages/PricingFaq';
import Contact from './pages/Contact';

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;

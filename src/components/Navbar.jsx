import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-jd-burgundy/95 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-2xl font-serif font-bold tracking-tighter text-white" onClick={closeMenu}>
          {/* Replace /logo.png with your actual logo file in the public folder */}
          <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" onError={(e) => e.target.style.display = 'none'} />
          <span>JD. <span className="text-amber-100">Music Academy</span></span>
        </Link>
        <div className="hidden md:flex space-x-2">
          <Link to="/about" className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors">About Us</Link>
          <Link to="/student-life" className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors">Student Life</Link>
          <Link to="/pricing-faq" className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors">Pricing & FAQ</Link>
          <Link to="/contact" className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors">Contact Us</Link>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2 rounded-full bg-white text-jd-burgundy font-semibold text-sm hover:bg-amber-50 transition-colors shadow-sm"
          >
            Register Now
          </a>
          <button className="md:hidden p-2 text-white hover:text-amber-100 transition-colors" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-jd-burgundy border-b border-red-900/30 shadow-lg px-6 py-4 flex flex-col space-y-4">
          <Link to="/about" className="text-lg font-medium text-white/90 hover:text-amber-100 transition-colors" onClick={closeMenu}>About Us</Link>
          <Link to="/student-life" className="text-lg font-medium text-white/90 hover:text-amber-100 transition-colors" onClick={closeMenu}>Student Life</Link>
          <Link to="/pricing-faq" className="text-lg font-medium text-white/90 hover:text-amber-100 transition-colors" onClick={closeMenu}>Pricing & FAQ</Link>
          <Link to="/contact" className="text-lg font-medium text-white/90 hover:text-amber-100 transition-colors" onClick={closeMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

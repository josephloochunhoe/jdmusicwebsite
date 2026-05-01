import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-2xl font-serif font-bold tracking-tighter" onClick={closeMenu}>
          {/* Replace /logo.png with your actual logo file in the public folder */}
          <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" onError={(e) => e.target.style.display = 'none'} />
          <span>JD. <span className="text-jd-burgundy">Music Academy</span></span>
        </Link>
        <div className="hidden md:flex space-x-2">
          <Link to="/" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Home</Link>
          <Link to="/about" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">About Us</Link>
          <Link to="/student-life" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Student Life</Link>
          <Link to="/pricing-faq" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Pricing & FAQ</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/contact" className="hidden lg:block text-sm font-medium hover:text-jd-burgundy transition-colors">
            Contact Us
          </Link>
          <a 
            href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2 rounded-full bg-jd-burgundy text-white font-semibold text-sm hover:bg-red-900 transition-colors"
          >
            Register Now
          </a>
          <button className="md:hidden p-2 text-jd-black hover:text-jd-burgundy transition-colors" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg px-6 py-4 flex flex-col space-y-4">
          <Link to="/" className="text-lg font-medium hover:text-jd-burgundy transition-colors" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="text-lg font-medium hover:text-jd-burgundy transition-colors" onClick={closeMenu}>About Us</Link>
          <Link to="/student-life" className="text-lg font-medium hover:text-jd-burgundy transition-colors" onClick={closeMenu}>Student Life</Link>
          <Link to="/pricing-faq" className="text-lg font-medium hover:text-jd-burgundy transition-colors" onClick={closeMenu}>Pricing & FAQ</Link>
          <Link to="/contact" className="text-lg font-medium hover:text-jd-burgundy transition-colors" onClick={closeMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

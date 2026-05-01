import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-serif font-bold text-jd-black mb-4 md:mb-0">
          JD. <span className="text-jd-burgundy">Music</span>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/privacy" className="hover:text-jd-burgundy transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-jd-burgundy transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-jd-burgundy transition-colors">Contact</Link>
        </div>
        <p>© 2026 JD. Music Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

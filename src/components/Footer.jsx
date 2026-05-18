import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-red-900/30 py-12 bg-jd-burgundy text-center text-sm text-white/70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-serif font-bold text-white mb-4 md:mb-0">
          JD. <span className="text-amber-100">Music</span>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/privacy" className="text-white/70 hover:text-amber-100 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-white/70 hover:text-amber-100 transition-colors">Terms</Link>
          <Link to="/contact" className="text-white/70 hover:text-amber-100 transition-colors">Contact</Link>
        </div>
        <p className="text-white/60">© 2026 JD. Music Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

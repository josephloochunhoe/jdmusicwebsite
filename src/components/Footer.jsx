import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.01.08 1.54.67 2.99 1.76 4.07 1.13 1.07 2.64 1.66 4.19 1.68v3.9c-1.72-.02-3.39-.62-4.73-1.71-.24-.2-.47-.41-.68-.64v6.84c.04 1.58-.37 3.16-1.19 4.49A7.329 7.329 0 0 1 7.42 22.13a7.173 7.173 0 0 1-5.32-2.12c-2.8-2.91-2.8-7.53 0-10.44 1.34-1.39 3.2-2.19 5.15-2.21.05 0 .09 0 .14.01v3.91c-.88-.01-1.74.33-2.37.96-1.19 1.25-1.19 3.23 0 4.48.64.66 1.53 1.02 2.45 1.01 1.06-.02 2.03-.63 2.51-1.57.37-.73.54-1.55.51-2.37l-.02-13.88z" />
  </svg>
);

const Footer = () => {
  const directorPhone = "019-2139210";
  const directorEmail = "jeevanmarcus@gmail.com";
  const whatsappUrl = "https://wa.me/60192139210?text=Hi%20Jeevan!%20I%20was%20browsing%20your%20website%20and%20I'd%20love%20to%20get%20more%20details%20about%20your%20music%20lessons.%20Could%20you%20share%20more%20about%20available%20slots%20and%20programs%3F";

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/jd.musicclass", icon: InstagramIcon },
    { name: "Facebook", url: "https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DTvbVk4Tu%2F%3Fmibextid%3DwwXIfr&sa=D&sntz=1&usg=AOvVaw0iwJuFPo6Fj0UeC9AijXjx", icon: FacebookIcon },
    { name: "TikTok", url: "https://www.google.com/url?q=https%3A%2F%2Fwww.tiktok.com%2F%40jd.musicclass%3F_t%3DZS-8vqn53mOFwW%26_r%3D1&sa=D&sntz=1&usg=AOvVaw3gmrl1lW4s17yi0VS9Mxhl", icon: TikTokIcon }
  ];

  return (
    <footer className="border-t border-gray-100 bg-white text-jd-black">
      {/* Top Footer Widgets Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Brand Widget */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          <Link to="/" className="flex items-center text-2xl font-serif font-bold tracking-tighter self-start">
            <img src={logoImg} alt="JD. Music Academy Logo" className="h-8 w-auto mr-2" />
            <span>JD. <span className="text-jd-burgundy">Music Academy</span></span>
          </Link>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            Fun, performance-driven music lessons tailored to your style and pace. Helping students of all ages fall in love with playing.
          </p>
          {/* Contact Details */}
          <div className="pt-2 space-y-2.5">
            <a 
              href={`tel:${directorPhone.replace(/-/g, '')}`} 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-jd-burgundy transition-colors font-medium self-start"
            >
              <Phone size={16} className="text-jd-burgundy" />
              {directorPhone}
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-jd-burgundy transition-colors font-medium self-start"
            >
              <MessageCircle size={16} className="text-jd-burgundy" />
              {directorPhone}
            </a>
            <a 
              href={`mailto:${directorEmail}`} 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-jd-burgundy transition-colors font-medium self-start"
            >
              <Mail size={16} className="text-jd-burgundy" />
              {directorEmail}
            </a>
          </div>
        </div>

        {/* Quick Links Widget */}
        <div className="md:col-span-3 md:col-start-7 flex flex-col space-y-4">
          <h4 className="font-bold text-sm tracking-wider uppercase text-jd-burgundy">Quick Links</h4>
          <div className="flex flex-col space-y-2.5">
            <Link to="/" className="text-sm text-gray-600 hover:text-jd-burgundy transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-jd-burgundy transition-colors">About Us</Link>
            <Link to="/student-life" className="text-sm text-gray-600 hover:text-jd-burgundy transition-colors">Student Life</Link>
            <Link to="/pricing-faq" className="text-sm text-gray-600 hover:text-jd-burgundy transition-colors">Pricing & FAQ</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-jd-burgundy transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Social Media Widget */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-bold text-sm tracking-wider uppercase text-jd-burgundy">Connect With Us</h4>
          <p className="text-xs text-gray-500 mb-2 leading-relaxed">
            Follow our musical journey and view real classroom spotlights.
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-jd-burgundy hover:border-red-100 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Copyright Area */}
      <div className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} JD. Music Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-jd-burgundy transition-colors">Support</Link>
            <span className="text-gray-300">|</span>
            <a 
              href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-jd-burgundy transition-colors inline-flex items-center gap-1"
            >
              Online Registration <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

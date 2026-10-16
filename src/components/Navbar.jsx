import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { TRIAL_URL, REGISTRATION_URL } from '../lib/contact';

const links = [
  { to: '/about', label: 'About' },
  { to: '/student-life', label: 'Student Life' },
  { to: '/events-competitions', label: 'Events' },
  { to: '/pricing-faq', label: 'Pricing & FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  // Close the menu after navigating, on Escape, and when the layout switches to desktop.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    const wide = window.matchMedia('(min-width: 961px)');
    const onWide = () => setOpen(false);
    document.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      document.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  return (
    <header className="site-header" data-cta="header">
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap header-inner">
        <Link to="/" className="brand" aria-label="JD. Music Academy, home">
          <img src={logoImg} alt="" width="36" height="36" />
          <span>JD. Music Academy</span>
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="navigation" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} className="nav-link">{link.label}</NavLink>
          ))}
          <a className="nav-register" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Online registration</a>
          <a className="nav-cta" href={TRIAL_URL} target="_blank" rel="noopener noreferrer">Book a trial</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

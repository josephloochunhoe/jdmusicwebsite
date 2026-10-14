import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { TRIAL_URL, GENERAL_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, REGISTRATION_URL, SOCIALS } from '../lib/contact';
import { ExternalIcon } from './icons';

const pages = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About & teachers' },
  { to: '/student-life', label: 'Student Life' },
  { to: '/events-competitions', label: 'Events & Competitions' },
  { to: '/pricing-faq', label: 'Pricing & FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="wrap footer-grid">
      <div className="footer-brand">
        <Link to="/" className="brand">
          <img src={logoImg} alt="" width="36" height="36" />
          <span>JD. Music Academy</span>
        </Link>
        <p>Performance-based music lessons for all ages since 2020. Kajang home studio, Sri Hartamas studio and online.</p>
        <a className="btn btn-spot btn-sm" href={TRIAL_URL} target="_blank" rel="noopener noreferrer">Book a trial lesson</a>
      </div>
      <nav className="footer-col" aria-label="Footer">
        <h2>Explore</h2>
        <ul>{pages.map(p => <li key={p.to}><Link to={p.to}>{p.label}</Link></li>)}</ul>
      </nav>
      <div className="footer-col">
        <h2>Talk to us</h2>
        <ul>
          <li><a href={GENERAL_URL} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE_DISPLAY}</a></li>
          <li><a href={PHONE_TEL}>Call {PHONE_DISPLAY}</a></li>
          <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Online registration <ExternalIcon /></a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h2>Follow</h2>
        <ul>{SOCIALS.map(s => <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <span>{s.handle}</span></a></li>)}</ul>
      </div>
    </div>
    <div className="footer-base">
      <div className="wrap footer-base-inner">
        <p>© {new Date().getFullYear()} JD. Music Academy. Music lessons in Kajang, Selangor.</p>
        <a href="#main">Back to top</a>
      </div>
    </div>
  </footer>
);

export default Footer;

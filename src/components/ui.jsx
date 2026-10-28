import { Link } from 'react-router-dom';
import { trialUrl, TRIAL_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, SOCIALS } from '../lib/contact';
import { WhatsAppIcon, ChatIcon, PhoneIcon, MailIcon, InstagramIcon, TikTokIcon, FacebookIcon, ArrowIcon } from './icons';

const socialIcons = { Instagram: InstagramIcon, TikTok: TikTokIcon, Facebook: FacebookIcon };

// Primary action across the site. `watch` lets the floating mobile button hide while this one is on screen.
export function TrialButton({ instrument, label = 'Book a trial lesson', size, tone = 'spot', watch = false, className = '' }) {
  return (
    <a
      className={`btn btn-${tone}${size === 'xl' ? ' btn-xl' : ''} ${className}`}
      href={instrument ? trialUrl(instrument) : TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-inline-cta={watch ? '' : undefined}
    >
      <ChatIcon />
      {label}
    </a>
  );
}

export function TextLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`text-link ${className}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function SectionHead({ id, title, children, className = '' }) {
  return (
    <div className={`head ${className}`} data-reveal>
      <h2 id={id} className="display">{title}</h2>
      {children}
    </div>
  );
}

// Shared hero for supporting pages: big stacked title, one sentence, actions, and a tilted photo pair.
export function PageHero({ kicker, lines, lead, children, photos = [], tag }) {
  const [main, second] = photos;
  return (
    <section className="hero page-hero" aria-labelledby="page-title" data-cta="hero">
      <div className="wrap hero-grid page-hero-grid">
        <div className="hero-copy">
          {kicker && <p className="hero-kicker">{kicker}</p>}
          <h1 id="page-title" className="hero-title page-title">
            {lines.map(line => (
              <span className="line" key={line}><span>{line}</span></span>
            ))}
          </h1>
          {lead && <p className="hero-sub">{lead}</p>}
          {children && <div className="hero-cta">{children}</div>}
        </div>
        {main && (
          <div className={`page-hero-photos${second ? ' has-two' : ''}`}>
            <figure className="shot shot-a">
              <img src={main.src} alt={main.alt} width={main.width} height={main.height} fetchPriority="high" style={main.position ? { objectPosition: main.position } : undefined} />
            </figure>
            {second && (
              <figure className="shot shot-b">
                <img src={second.src} alt={second.alt} width={second.width} height={second.height} decoding="async" style={second.position ? { objectPosition: second.position } : undefined} />
              </figure>
            )}
            {tag && <p className="stack-tag">{tag}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

export function ContactLinks({ compact = false }) {
  const links = [
    { name: 'WhatsApp', detail: PHONE_DISPLAY, href: TRIAL_URL, Icon: WhatsAppIcon, external: true },
    { name: 'Call', detail: PHONE_DISPLAY, href: PHONE_TEL, Icon: PhoneIcon },
    { name: 'Email', detail: EMAIL, href: `mailto:${EMAIL}`, Icon: MailIcon },
    ...SOCIALS.map(s => ({ name: s.name, detail: s.handle, href: s.url, Icon: socialIcons[s.name], external: true })),
  ];
  return (
    <ul className={`contact-row${compact ? ' is-compact' : ''}`} aria-label="Contact JD. Music Academy" data-cta="contact_links">
      {links.map(({ name, detail, href, Icon, external }) => (
        <li key={name}>
          <a className="contact-link" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <span className="contact-icon"><Icon /></span>
            <span className="contact-text"><strong>{name}</strong><span>{detail}</span></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// Closing band used on every page: the three-step trial process and every contact route.
export function ClosingCTA({ lines = ['Your first song', 'starts here.'], children }) {
  return (
    <section className="closing" aria-labelledby="closing-title" data-cta="closing">
      <div className="wrap">
        <h2 id="closing-title" className="closing-title" data-reveal>
          {lines.map(line => <span key={line}>{line}</span>)}
        </h2>
        <ol className="mini-steps" data-reveal>
          <li>Message us on WhatsApp</li>
          <li>Pick a trial slot</li>
          <li>Come and play</li>
        </ol>
        <div className="closing-cta" data-reveal>
          <TrialButton size="xl" watch />
        </div>
        {children}
        <ContactLinks />
      </div>
    </section>
  );
}

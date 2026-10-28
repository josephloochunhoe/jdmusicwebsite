import heroGuitar from '../assets/home/hero-guitar.webp';
import { PageHero, TrialButton } from '../components/ui';
import { ChatIcon, ExternalIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, InstagramIcon, TikTokIcon, FacebookIcon } from '../components/icons';
import { TRIAL_URL, GENERAL_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, SOCIALS, REGISTRATION_URL } from '../lib/contact';
import { founder } from '../data/team';

const socialIcons = { Instagram: InstagramIcon, TikTok: TikTokIcon, Facebook: FacebookIcon };

const places = [
  { name: 'Kajang Home Studio', text: 'Our home base in Kajang, Selangor, for in-person lessons and weekend group guitar classes.' },
  { name: 'Sri Hartamas Studio, KL', text: 'Partner location for students in the Kuala Lumpur area.' },
  { name: 'Online', text: 'Lessons from wherever you are.' },
  { name: 'Your home, school or community space', text: 'Limited home visits and programmes within the Klang Valley. Travel charges may apply.' },
];

const Contact = () => (
  <>
    <PageHero
      kicker="Kajang studio"
      lines={['Talk to', 'Jeevan.']}
      lead="Questions about music classes in Kajang, studios, available slots or a free trial? Message our director on WhatsApp: it’s the quickest way to reach us."
      photos={[
        { src: heroGuitar, alt: 'Guitarists singing on stage at Open Day 2025', width: 1200, height: 800, position: '30% 40%' },
        { src: founder.image, alt: `${founder.name}, director`, width: 452, height: 452, position: '50% 20%' },
      ]}
      tag="Say hi"
    >
      <TrialButton size="xl" watch />
      <a className="btn btn-ghost-light" href={PHONE_TEL}><PhoneIcon /> {PHONE_DISPLAY}</a>
    </PageHero>

    <section className="section on-blush" aria-label="Ways to contact us">
      <div className="wrap contact-grid">
        <div className="contact-main" data-reveal data-cta="contact_page">
          <h2>Book a trial lesson</h2>
          <p>Send a WhatsApp message with a few details and Jeevan will suggest open trial slots.</p>
          <ul className="checklist">
            <li>The student’s age</li>
            <li>The instrument: guitar, piano, drums, vocals, bass or ukulele</li>
            <li>Your preferred studio: Kajang, Sri Hartamas or online</li>
          </ul>
          <div className="actions">
            <a className="btn btn-spot" href={TRIAL_URL} target="_blank" rel="noopener noreferrer"><ChatIcon /> Book on WhatsApp</a>
            <a className="btn btn-ghost-light" href={GENERAL_URL} target="_blank" rel="noopener noreferrer">Ask a general question</a>
          </div>
          <p className="closing-extra">Already had your trial? <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Complete the online registration <ExternalIcon /></a></p>
        </div>

        <div className="contact-side">
          <div className="contact-card" data-reveal style={{ '--i': 1 }}>
            <h2>Reach us</h2>
            <ul className="link-list">
              <li><a href={GENERAL_URL} target="_blank" rel="noopener noreferrer"><span className="contact-icon"><WhatsAppIcon /></span><span>WhatsApp<small>{PHONE_DISPLAY}</small></span></a></li>
              <li><a href={PHONE_TEL}><span className="contact-icon"><PhoneIcon /></span><span>Call<small>{PHONE_DISPLAY}</small></span></a></li>
              <li><a href={`mailto:${EMAIL}`}><span className="contact-icon"><MailIcon /></span><span>Email<small>{EMAIL}</small></span></a></li>
            </ul>
          </div>
          <div className="contact-card" data-reveal style={{ '--i': 2 }}>
            <h2>Follow us</h2>
            <ul className="link-list">
              {SOCIALS.map(s => {
                const Icon = socialIcons[s.name];
                return <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Icon /></span><span>{s.name}<small>{s.handle}</small></span></a></li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="where" className="section" aria-labelledby="where-title">
      <div className="wrap split">
        <div data-reveal>
          <h2 id="where-title" className="display md">Where we teach</h2>
          <p className="lede">One-to-one lessons are once a week, 30 minutes or 1 hour. Instruments and equipment are provided at lessons.</p>
        </div>
        <ul className="place-list" data-reveal>
          {places.map(p => (
            <li key={p.name}><PinIcon /><strong>{p.name}</strong><span>{p.text}</span></li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Contact;

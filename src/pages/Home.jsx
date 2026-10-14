import { Link } from 'react-router-dom';
import heroBand from '../assets/home/hero-band.webp';
import heroDrums from '../assets/home/hero-drums.webp';
import heroGuitar from '../assets/home/hero-guitar.webp';
import stage1 from '../assets/home/stage-1.webp';
import stage2 from '../assets/home/stage-2.webp';
import stage3 from '../assets/home/stage-3.webp';
import stage4 from '../assets/home/stage-4.webp';
import stage5 from '../assets/home/stage-5.webp';
import stage6 from '../assets/home/stage-6.webp';
import stage7 from '../assets/home/stage-7.webp';
import stage8 from '../assets/home/stage-8.webp';
import stage9 from '../assets/home/stage-9.webp';
import stage10 from '../assets/home/stage-10.webp';
import VideoReel from '../components/VideoReel';
import InstrumentPicker from '../components/InstrumentPicker';
import FeeExplorer from '../components/FeeExplorer';
import Faq from '../components/Faq';
import { TrialButton, TextLink, ClosingCTA, SectionHead } from '../components/ui';
import { ArrowIcon, CalendarIcon, PinIcon } from '../components/icons';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/contact';
import { founder } from '../data/team';
import { faqItems } from '../data/faq';
import { nextAce4 } from '../data/nextAce4';

const stageRows = [
  [
    { src: stage1, alt: 'Two guitarists at JD.Music Live Concert 3.0', tag: 'Live Concert 3.0' },
    { src: stage2, alt: 'Singer and guitarist at Open Day 2025', tag: 'Open Day 2025' },
    { src: stage3, alt: 'Drummer at Live Concert 3.0', tag: 'Live Concert 3.0' },
    { src: stage4, alt: 'Keyboard player at Open Day 2025', tag: 'Open Day 2025' },
    { src: stage5, alt: 'Acoustic guitarist singing at Live Concert 3.0', tag: 'Live Concert 3.0' },
  ],
  [
    { src: stage6, alt: 'Band performing at JD.Music Live Concert 3.1', tag: 'Live Concert 3.1' },
    { src: stage7, alt: 'Keyboard player at Open Day 2025', tag: 'Open Day 2025' },
    { src: stage8, alt: 'Full band on stage at Live Concert 3.0', tag: 'Live Concert 3.0' },
    { src: stage9, alt: 'Young drummer at Live Concert 3.0', tag: 'Live Concert 3.0' },
    { src: stage10, alt: 'Guitar, vocals and keys trio at Live Concert 3.0', tag: 'Live Concert 3.0' },
  ],
];

const facts = [
  { label: 'Where', big: 'Kajang · KL · Online', small: 'Kajang home studio, Sri Hartamas studio, online lessons or limited home visits.', to: '/contact#where', go: 'Locations' },
  { label: 'Who', big: 'All ages', small: 'Young children to adults. Complete beginners and returning players welcome.', to: '/about#teachers', go: 'Meet the teachers' },
  { label: 'Fees', big: 'From RM45', small: 'Per 30-min lesson, or RM150 a month with Academy Membership in Kajang.', to: '#fees', go: 'See fees' },
  { label: 'Start', big: 'Trial first', small: 'Message us on WhatsApp, pick a trial slot, come and play. Instruments provided.', to: '#start', go: 'How it works' },
];

const pillars = [
  { title: 'Songs you love, first', text: 'Lessons are hands-on and performance-based: fundamentals learned through the music you actually want to play.' },
  { title: 'Built for beginners', text: 'Personal attention at a pace that feels comfortable, for first-timers, casual learners and people returning after a break. No instrument needed to start.' },
  { title: 'A stage when you’re ready', text: 'Academy concerts, open days and showcases give students something to work towards, without performance stress.' },
];

function Fact({ fact }) {
  const content = (
    <>
      <span className="fact-label">{fact.label}</span>
      <span className="fact-big">{fact.big}</span>
      <span className="fact-small">{fact.small}</span>
      <span className="fact-go">{fact.go} <ArrowIcon /></span>
    </>
  );
  return fact.to.startsWith('#')
    ? <a className="fact" href={fact.to}>{content}</a>
    : <Link className="fact" to={fact.to}>{content}</Link>;
}

const Home = () => (
  <>
    {/* 1. Hero */}
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Music lessons in Kajang since 2020</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line"><span>Play the songs</span></span>
            <span className="line"><span>you’ve always</span></span>
            <span className="line"><span>wanted to.</span></span>
          </h1>
          <p className="hero-sub">Guitar, piano, drum and vocal classes for kids, teens and adults in Kajang, Sri Hartamas and online.</p>
          <div className="hero-cta">
            <TrialButton size="xl" watch />
            <span className="eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
          </div>
          <p className="hero-note">Opens WhatsApp. Or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a></p>
        </div>
        <div className="hero-stack">
          <figure className="shot shot-main"><img src={heroBand} alt="JD. Music Academy band performing on keyboard, drums, vocals and guitar" width="2000" height="1125" fetchPriority="high" /></figure>
          <figure className="shot shot-drums"><img src={heroDrums} alt="Drummer performing at Open Day 2025" width="1200" height="800" /></figure>
          <figure className="shot shot-guitar"><img src={heroGuitar} alt="Guitarists singing on stage at Open Day 2025" width="1200" height="800" /></figure>
          <p className="stack-tag">Open Day 2025</p>
        </div>
      </div>
    </section>

    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map(copy => ['Guitar', 'Piano', 'Drums', 'Vocals', 'Bass', 'Ukulele', 'Since 2020'].map(word => <span key={word + copy}>{word}</span>))}
      </div>
    </div>

    {/* 2. Quick facts: where, who, fees, how to start */}
    <section className="facts" aria-label="Quick facts">
      <div className="wrap facts-grid">
        {facts.map((fact, i) => (
          <div key={fact.label} data-reveal style={{ '--i': i }} className="fact-wrap"><Fact fact={fact} /></div>
        ))}
      </div>
    </section>

    {/* 3. Real student videos */}
    <VideoReel>
      <TextLink to="/student-life">More student stories and photos</TextLink>
    </VideoReel>

    {/* 4. Why JD? */}
    <section className="section why" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <div className="founder-card">
          <figure className="founder-photo" data-reveal>
            <img src={founder.image} alt={`${founder.name}, director and founder of JD. Music Academy`} width="452" height="452" loading="lazy" />
          </figure>
          <figure className="founder-quote" data-reveal style={{ '--i': 2 }}>
            <blockquote>Nurture passion, not pressure.</blockquote>
            <figcaption>{founder.name}, {founder.role}</figcaption>
          </figure>
        </div>
        <div className="why-copy" data-reveal>
          <h2 id="why-title" className="display md">Why JD?</h2>
          <p className="lede">Jeevan started JD. Music Academy in 2020 to offer something different: a personal, performance-based approach that helps students fall in love with music while building solid skills. Our teachers become mentors and friends.</p>
          <ul className="pillars">
            {pillars.map((p, i) => (
              <li key={p.title}><b aria-hidden="true">{i + 1}</b><h3>{p.title}</h3><p>{p.text}</p></li>
            ))}
          </ul>
          <div className="section-foot">
            <TextLink to="/about">Meet Jeevan and the teachers</TextLink>
          </div>
        </div>
      </div>
    </section>

    {/* 5. Instrument selector */}
    <section id="instruments" className="section picker" aria-labelledby="picker-title">
      <div className="wrap">
        <div className="head" data-reveal>
          <h2 id="picker-title" className="display">Pick your instrument</h2>
          <p className="on-dark">One-to-one music lessons in Kajang, Sri Hartamas and online. Tap a teacher to read their profile.</p>
        </div>
        <InstrumentPicker />
        <p className="aside" data-reveal>Ukulele lessons in Kajang too. Just ask when you message.</p>
      </div>
    </section>

    {/* 6. Performance */}
    <section className="section stage" aria-labelledby="stage-title">
      <div className="wrap">
        <SectionHead id="stage-title" title="Then you get a stage">
          <p>Live concerts, open days and showcases, whenever you’re ready for one.</p>
        </SectionHead>
      </div>
      <div className="marquee" data-reveal>
        {stageRows.map((row, r) => (
          <ul key={r} className={`marquee-row${r ? ' reverse' : ''}`}>
            {[...row, ...row].map((photo, i) => (
              <li key={i} className={i >= row.length ? 'dup' : undefined} aria-hidden={i >= row.length || undefined}>
                <img src={photo.src} alt={i >= row.length ? '' : photo.alt} width="900" height="600" loading="lazy" />
                <span>{photo.tag}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="wrap">
        <Link to="/events-competitions" className="feature" data-reveal>
          <figure className="feature-img"><img src={nextAce4.cover.src} alt={nextAce4.cover.alt} width="1800" height="1350" loading="lazy" /></figure>
          <div className="feature-body">
            <span className="tag">Latest showcase</span>
            <h3>{nextAce4.title}</h3>
            <ul className="meta-list">
              <li><CalendarIcon /> {nextAce4.date}</li>
              <li><PinIcon /> {nextAce4.location}</li>
            </ul>
            <p>Students on stage, with trophies and certificates to show for it. See the photos, the highlight video and what’s on next.</p>
            <span className="text-link">Events &amp; competitions <ArrowIcon /></span>
          </div>
        </Link>
        <div className="section-foot">
          <TextLink to="/student-life#gallery">Browse every concert gallery</TextLink>
        </div>
      </div>
    </section>

    {/* 7. Fees */}
    <section id="fees" className="section fees" aria-labelledby="fees-title">
      <div className="wrap">
        <SectionHead id="fees-title" title="Simple pricing">
          <p>One-to-one lessons, once a week. Pick a studio and lesson length.</p>
        </SectionHead>
        <FeeExplorer />
        <div className="section-foot">
          <TextLink to="/pricing-faq">Group lessons, school &amp; church programmes</TextLink>
        </div>
      </div>
    </section>

    {/* 8. FAQ */}
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="head" data-reveal>
          <h2 id="faq-title" className="display">Quick answers</h2>
          <TextLink to="/pricing-faq#faq">All questions</TextLink>
        </div>
        <Faq items={faqItems.filter(item => item.home)} />
      </div>
    </section>

    {/* 9. Close */}
    <div id="start">
      <ClosingCTA />
    </div>
  </>
);

export default Home;

import { useRef, useState } from 'react';
import keysLesson from '../assets/home/inst-piano.webp';
import FeeExplorer from '../components/FeeExplorer';
import Faq from '../components/Faq';
import { PageHero, TrialButton, ClosingCTA, SectionHead } from '../components/ui';
import { ChatIcon, ExternalIcon } from '../components/icons';
import { programmes } from '../data/pricing';
import { faqItems } from '../data/faq';
import { PROGRAMMES_URL, REGISTRATION_URL } from '../lib/contact';

const views = [
  { key: 'individual', label: 'One-to-one lessons' },
  { key: 'groups', label: 'Groups & programmes' },
];

const PricingFaq = () => {
  const [view, setView] = useState(0);
  const [changed, setChanged] = useState(false);
  const tabRefs = useRef([]);
  const select = (i, focus) => {
    setView(i);
    setChanged(true);
    if (focus) tabRefs.current[i]?.focus();
  };
  const onKeyDown = (e, i) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      select((i + (e.key === 'ArrowRight' ? 1 : -1) + views.length) % views.length, true);
    }
  };

  return (
    <>
      <PageHero
        kicker="Pricing & FAQ"
        lines={['Fees and', 'questions,', 'answered.']}
        lead="One-to-one lessons from RM45 a lesson or RM150 a month in Kajang, plus group lessons and programmes for schools, churches and communities."
        photos={[{ src: keysLesson, alt: 'A keyboard student and teacher at Open Day 2025', width: 1400, height: 933 }]}
        tag="Trial first"
      >
        <a className="btn btn-spot btn-xl" href="#rates">See the rates</a>
        <a className="btn btn-ghost-light" href="#faq">Jump to FAQ</a>
      </PageHero>

      <section id="rates" className="section fees" aria-labelledby="rates-title">
        <div className="wrap">
          <SectionHead id="rates-title" title="Tuition & packages">
            <p>Flexible lessons for all ages, in our studios, online, at home, or at your school or community space within the Klang Valley.</p>
          </SectionHead>

          <div className="view-tabs" role="tablist" aria-label="Lesson type" data-reveal>
            {views.map((v, i) => (
              <button
                key={v.key}
                ref={el => { tabRefs.current[i] = el; }}
                role="tab"
                type="button"
                id={`view-${v.key}`}
                aria-controls={`view-panel-${v.key}`}
                aria-selected={i === view}
                tabIndex={i === view ? 0 : -1}
                onClick={() => select(i, false)}
                onKeyDown={e => onKeyDown(e, i)}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div id="view-panel-individual" role="tabpanel" aria-labelledby="view-individual" className={`view-panel${changed && view === 0 ? ' is-active' : ''}`} hidden={view !== 0}>
            <FeeExplorer table="open" />
          </div>

          <div id="view-panel-groups" role="tabpanel" aria-labelledby="view-groups" className={`view-panel${changed && view === 1 ? ' is-active' : ''}`} hidden={view !== 1}>
            <ul className="programme-grid">
              {programmes.map(p => (
                <li key={p.name} className="programme">
                  <h3>{p.name}</h3>
                  <span className="min">{p.minimum}</span>
                  <p className="rate">{p.rate}</p>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
            <div className="panel-foot">
              <p>Additional travel charges apply based on distance from our base studios.</p>
              <a className="btn btn-wine" href={PROGRAMMES_URL} target="_blank" rel="noopener noreferrer"><ChatIcon /> Ask about a programme</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq" aria-labelledby="faq-title" data-cta="faq">
        <div className="wrap faq-grid">
          <div className="head" data-reveal>
            <h2 id="faq-title" className="display">Frequently asked</h2>
            <p>Still unsure? Ask Jeevan on WhatsApp. A trial lesson is the easiest way to find out.</p>
            <TrialButton tone="wine" size="sm" />
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="section on-blush" aria-labelledby="register-title">
        <div className="wrap">
          <div className="register-card" data-reveal>
            <div>
              <h2 id="register-title">Ready to enrol?</h2>
              <p>Done your trial and chosen a plan? Complete the academy’s online student registration form.</p>
            </div>
            <div className="actions">
              <a className="btn btn-spot" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Online registration <ExternalIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
};

export default PricingFaq;

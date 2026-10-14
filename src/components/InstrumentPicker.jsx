import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { instruments } from '../data/lessons';
import { teacherBySlug } from '../data/team';
import { TrialButton } from './ui';

// ARIA tabs: one instrument at a time, arrow keys/Home/End move between tabs.
// Without JavaScript every panel is shown in a stack (see `html:not(.js)` rules).
export default function InstrumentPicker() {
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);
  const tabRefs = useRef([]);

  const select = (index, focus) => {
    setActive(index);
    setAnimated(true);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event, i) => {
    const moves = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key in moves) select((i + moves[event.key] + instruments.length) % instruments.length, true);
    else if (event.key === 'Home') select(0, true);
    else if (event.key === 'End') select(instruments.length - 1, true);
    else return;
    event.preventDefault();
  };

  return (
    <div className="picker-ui">
      <div className="tabs" role="tablist" aria-label="Instruments" data-reveal>
        {instruments.map((inst, i) => (
          <button
            key={inst.key}
            ref={el => { tabRefs.current[i] = el; }}
            role="tab"
            type="button"
            id={`tab-${inst.key}`}
            aria-controls={`panel-${inst.key}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i, false)}
            onKeyDown={e => onKeyDown(e, i)}
          >
            {inst.tab}
          </button>
        ))}
      </div>
      <div className="panels">
        {instruments.map((inst, i) => (
          <article
            key={inst.key}
            className={`panel${animated && i === active ? ' is-active' : ''}`}
            role="tabpanel"
            id={`panel-${inst.key}`}
            aria-labelledby={`tab-${inst.key}`}
            hidden={i !== active}
          >
            <figure className="panel-img">
              <img src={inst.image} alt={inst.alt} width="1400" height="933" loading="lazy" style={inst.position ? { objectPosition: inst.position } : undefined} />
            </figure>
            <div className="panel-body">
              <h3>{inst.title}</h3>
              <p>{inst.text}</p>
              <ul className="chips">{inst.chips.map(c => <li key={c}>{c}</li>)}</ul>
              <ul className="teachers" aria-label={`${inst.tab} teachers`}>
                {inst.teachers.map(slug => {
                  const t = teacherBySlug[slug];
                  return (
                    <li key={slug}>
                      <Link to={`/about#teacher-${slug}`} aria-label={`Meet ${t.name}`}>
                        <img src={t.image} alt="" width="96" height="96" loading="lazy" />
                        {t.name.split(' ')[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <TrialButton instrument={inst.trial} label={`Book a ${inst.tab.toLowerCase()} trial`} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

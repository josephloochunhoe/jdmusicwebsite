import { useState } from 'react';
import { RATES, STUDIOS, MEMBERSHIP, RATE_NOTES } from '../data/pricing';

export function RateTable({ caption = 'All one-to-one lesson rates' }) {
  return (
    <div className="table-scroll">
      <table className="rate-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr><th scope="col">Studio</th><th scope="col">30 min</th><th scope="col">1 hour</th></tr>
        </thead>
        <tbody>
          {STUDIOS.map(studio => (
            <tr key={studio.key}>
              <th scope="row">{studio.label} <span>(per month)</span></th>
              <td>{`RM${RATES[studio.key][30]}`}</td>
              <td>{`RM${RATES[studio.key][60]}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Segmented({ label, options, value, onChange }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map(o => (
        <button key={o.value} type="button" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>{o.label}</button>
      ))}
    </div>
  );
}

// Studio + lesson length toggles that update the membership price.
export default function FeeExplorer({ table = 'details' }) {
  const [studio, setStudio] = useState('kajang');
  const [length, setLength] = useState('30');
  const [changed, setChanged] = useState(false);
  const rate = RATES[studio][length];
  const update = setter => value => { setter(value); setChanged(true); };

  return (
    <div className="fee-explorer">
      <div className="fee-controls" data-reveal>
        <Segmented label="Studio" value={studio} onChange={update(setStudio)} options={STUDIOS.map(s => ({ value: s.key, label: s.label }))} />
        <Segmented label="Lesson length" value={length} onChange={update(setLength)} options={[{ value: '30', label: '30 min' }, { value: '60', label: '1 hour' }]} />
      </div>
      <div className="fee-cards" aria-live="polite">
        <article className="fee-card featured" data-reveal>
          <h3>{MEMBERSHIP.label}</h3>
          <p className="price">
            <span className="cur">RM</span>
            <span key={rate} className={`amt${changed ? ' flip' : ''}`}>{rate}</span>
            <span className="per">{MEMBERSHIP.per}</span>
          </p>
          <ul>{MEMBERSHIP.perks.map(p => <li key={p}>{p}</li>)}</ul>
        </article>
      </div>
      {table === 'details' && (
        <details className="all-rates" data-reveal>
          <summary>See all rates</summary>
          <RateTable />
          <p>Group lessons: RM35 per student per 1-hour session, minimum 3. Online lessons and home visits: ask for rates. Travel charges depend on distance. Up to 1 make-up lesson a month.</p>
        </details>
      )}
      {table === 'open' && (
        <div className="all-rates is-static" data-reveal>
          <h3 className="rates-title">Academy Membership rates</h3>
          <RateTable />
          <ul className="rate-notes">{RATE_NOTES.map(n => <li key={n}>{n}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

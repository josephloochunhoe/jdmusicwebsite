import { useState } from 'react';
import { RATES, STUDIOS, PLANS, RATE_NOTES } from '../data/pricing';

export function RateTable({ caption = 'All one-to-one lesson rates' }) {
  return (
    <div className="table-scroll">
      <table className="rate-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr><th scope="col">Studio and plan</th><th scope="col">30 min</th><th scope="col">1 hour</th></tr>
        </thead>
        <tbody>
          {STUDIOS.flatMap(studio => ['member', 'flex'].map(plan => (
            <tr key={studio.key + plan}>
              <th scope="row">{studio.label}, {PLANS[plan].label} <span>({plan === 'member' ? 'per month' : 'per lesson'})</span></th>
              <td>{`RM${RATES[studio.key][30][plan]}`}</td>
              <td>{`RM${RATES[studio.key][60][plan]}`}</td>
            </tr>
          )))}
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

// Studio + lesson length toggles that update both plan prices.
export default function FeeExplorer({ table = 'details' }) {
  const [studio, setStudio] = useState('kajang');
  const [length, setLength] = useState('30');
  const [changed, setChanged] = useState(false);
  const rates = RATES[studio][length];
  const update = setter => value => { setter(value); setChanged(true); };

  return (
    <div className="fee-explorer">
      <div className="fee-controls" data-reveal>
        <Segmented label="Studio" value={studio} onChange={update(setStudio)} options={STUDIOS.map(s => ({ value: s.key, label: s.label }))} />
        <Segmented label="Lesson length" value={length} onChange={update(setLength)} options={[{ value: '30', label: '30 min' }, { value: '60', label: '1 hour' }]} />
      </div>
      <div className="fee-cards" aria-live="polite">
        {['member', 'flex'].map((plan, i) => (
          <article key={plan} className={`fee-card${plan === 'member' ? ' featured' : ''}`} data-reveal style={{ '--i': i }}>
            <p className="fee-tag">{PLANS[plan].tag}</p>
            <h3>{PLANS[plan].label}</h3>
            <p className="price">
              <span className="cur">RM</span>
              <span key={rates[plan]} className={`amt${changed ? ' flip' : ''}`}>{rates[plan]}</span>
              <span className="per">{PLANS[plan].per}</span>
            </p>
            <ul>{PLANS[plan].perks.map(p => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
      {table === 'details' && (
        <details className="all-rates" data-reveal>
          <summary>See all rates</summary>
          <RateTable />
          <p>Group lessons: RM35 per student per 1-hour session, minimum 3. Online lessons and home visits: ask for rates. Travel charges depend on distance.</p>
        </details>
      )}
      {table === 'open' && (
        <div className="all-rates is-static" data-reveal>
          <h3 className="rates-title">Every one-to-one rate</h3>
          <RateTable />
          <ul className="rate-notes">{RATE_NOTES.map(n => <li key={n}>{n}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

// Native <details> accordions: keyboard accessible and readable without JavaScript.
export default function Faq({ items }) {
  return (
    <div className="faq-list" data-reveal>
      {items.map(item => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="faq-answer">
            <p>{item.a}</p>
            {item.list && <ul>{item.list.map(point => <li key={point}>{point}</li>)}</ul>}
          </div>
        </details>
      ))}
    </div>
  );
}

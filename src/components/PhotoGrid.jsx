import { useCallback, useState } from 'react';
import Lightbox from './Lightbox';
import { PlayIcon } from './icons';

// Masonry grid of web-sized thumbnails; each opens the full photo (or video) in the lightbox.
export default function PhotoGrid({ items, initial = items.length, step = 9, label }) {
  const [visible, setVisible] = useState(initial);
  const [open, setOpen] = useState(null);
  const shown = items.slice(0, visible);
  const close = useCallback(() => setOpen(null), []);
  const navigate = useCallback(dir => setOpen(i => (i + dir + items.length) % items.length), [items.length]);

  return (
    <>
      <ul className="masonry" aria-label={label}>
        {shown.map((item, i) => (
          <li key={item.id ?? item.src}>
            <button type="button" className="tile" onClick={() => setOpen(i)} aria-label={`${item.type === 'video' ? 'Play' : 'Enlarge'}: ${item.alt}`}>
              <img src={item.thumb} alt="" width={item.width} height={item.height} loading="lazy" decoding="async" />
              {item.type === 'video' && <span className="play"><PlayIcon /></span>}
            </button>
          </li>
        ))}
      </ul>
      {visible < items.length && (
        <div className="more-row">
          <button type="button" className="btn btn-ghost" onClick={() => setVisible(v => v + step)}>
            Show more photos <span className="count">{items.length - visible} more</span>
          </button>
        </div>
      )}
      {open !== null && <Lightbox items={items} index={open} onClose={close} onNavigate={navigate} label={label} />}
    </>
  );
}

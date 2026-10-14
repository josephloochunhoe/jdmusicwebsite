import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CloseIcon } from './icons';

// Accessible media viewer: Escape closes, arrows navigate, focus stays inside and returns to the trigger.
export default function Lightbox({ items, index, onClose, onNavigate, label = 'Photo viewer' }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const item = items[index];
  const many = items.length > 1;

  useEffect(() => {
    const opener = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowLeft' && many) onNavigate(-1);
      else if (event.key === 'ArrowRight' && many) onNavigate(1);
      else if (event.key === 'Tab') {
        const focusable = [...dialogRef.current.querySelectorAll('button, video[controls], a[href]')];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [many, onClose, onNavigate]);

  if (!item) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} ref={dialogRef} onClick={onClose}>
      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
      {many && (
        <>
          <button type="button" className="lb-btn lb-prev" onClick={e => { e.stopPropagation(); onNavigate(-1); }} aria-label="Previous"><ChevronLeft /></button>
          <button type="button" className="lb-btn lb-next" onClick={e => { e.stopPropagation(); onNavigate(1); }} aria-label="Next"><ChevronRight /></button>
        </>
      )}
      <figure className="lb-figure" onClick={e => e.stopPropagation()}>
        {item.type === 'video' ? (
          <video key={item.src} controls playsInline preload="metadata" poster={item.poster} aria-label={item.alt}>
            <source src={item.src} type="video/mp4" />
            Your browser does not support video playback. <a href={item.src}>Download the video</a>.
          </video>
        ) : (
          <img key={item.src} src={item.src} alt={item.alt} />
        )}
        <figcaption>
          <span>{item.alt}</span>
          {many && <span aria-live="polite">{index + 1} / {items.length}</span>}
        </figcaption>
      </figure>
    </div>
  );
}

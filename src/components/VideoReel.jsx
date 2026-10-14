import { useEffect, useRef, useState } from 'react';
import { studentVideos } from '../data/lessons';
import { ChevronLeft, ChevronRight, PlayIcon } from './icons';

function VideoCard({ video, index }) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef(null);
  useEffect(() => {
    if (playing) frameRef.current?.focus();
  }, [playing]);

  return (
    <li className="vid" data-reveal style={{ '--i': index }}>
      {playing ? (
        <iframe
          ref={frameRef}
          src={`https://drive.google.com/file/d/${video.id}/preview`}
          title={`${video.name}’s video`}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <button className="vid-btn" type="button" onClick={() => setPlaying(true)} aria-label={`Play ${video.name}’s video, ${video.instrument.toLowerCase()}`}>
          <img src={video.cover} alt="" width="540" height="960" loading="lazy" />
          <span className="play"><PlayIcon /></span>
        </button>
      )}
      <p className="vid-meta"><strong>{video.name}</strong> <span>{video.instrument}</span> <em>{video.tenure}</em></p>
    </li>
  );
}

// Horizontal reel of real student videos. The Drive player loads only when a card is pressed.
export default function VideoReel({ title = 'Watch them play', lead = 'Real JD students, in their own words.', id = 'watch', children }) {
  const reelRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return undefined;
    const update = () => setEdges({
      start: reel.scrollLeft < 8,
      end: reel.scrollLeft + reel.clientWidth >= reel.scrollWidth - 8,
    });
    update();
    reel.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      reel.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scroll = dir => {
    const reel = reelRef.current;
    const card = reel.querySelector('.vid');
    const step = card ? card.getBoundingClientRect().width + 20 : 300;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    reel.scrollBy({ left: dir * step * 2, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id={id} className="section watch" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="head" data-reveal>
          <h2 id={`${id}-title`} className="display">{title}</h2>
          <div className="head-side">
            <p>{lead}</p>
            <div className="reel-nav">
              <button type="button" className="reel-btn" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Previous videos"><ChevronLeft /></button>
              <button type="button" className="reel-btn" onClick={() => scroll(1)} disabled={edges.end} aria-label="More videos"><ChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
      <ul className="reel" ref={reelRef} aria-label="Student videos">
        {studentVideos.map((video, i) => <VideoCard key={video.id} video={video} index={i} />)}
      </ul>
      {children && <div className="wrap section-foot">{children}</div>}
    </section>
  );
}

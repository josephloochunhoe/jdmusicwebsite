import { useCallback, useState } from 'react';
import guitarClasses1 from '../assets/events/guitarclasses1.webp';
import guitarClasses2 from '../assets/events/guitarclasses2.webp';
import PhotoGrid from '../components/PhotoGrid';
import Lightbox from '../components/Lightbox';
import { PageHero, ClosingCTA, SectionHead, TextLink } from '../components/ui';
import { CalendarIcon, ChatIcon, ChevronLeft, ChevronRight, InstagramIcon, PinIcon } from '../components/icons';
import { GROUP_GUITAR_URL, SOCIALS } from '../lib/contact';
import { nextAce4 } from '../data/nextAce4';

const groupGuitar = {
  title: 'Group Guitar Classes',
  date: 'Every Saturday 2–3pm or Sunday 3–4pm',
  location: 'Kajang Home Studio',
  description: 'Learn guitar in a fun group setting. Master chords, basslines and rhythm techniques while jamming your favourite songs alongside other musicians.',
  posters: [
    { src: guitarClasses1, alt: 'Group Guitar Classes poster, page 1' },
    { src: guitarClasses2, alt: 'Group Guitar Classes poster, page 2' },
  ],
};

const instagram = SOCIALS.find(s => s.name === 'Instagram');

function PosterCarousel({ posters }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const go = useCallback(dir => setIndex(i => (i + dir + posters.length) % posters.length), [posters.length]);
  const close = useCallback(() => setZoom(false), []);
  const poster = posters[index];

  return (
    <div className="poster" data-reveal>
      <div className="poster-frame">
        <button type="button" className="zoom" onClick={() => setZoom(true)} aria-label={`Enlarge: ${poster.alt}`}>
          <img key={poster.src} src={poster.src} alt="" width="794" height="1123" />
        </button>
      </div>
      {posters.length > 1 && (
        <div className="poster-nav">
          <button type="button" className="reel-btn" onClick={() => go(-1)} aria-label="Previous poster"><ChevronLeft /></button>
          <span className="poster-dots" aria-live="polite">
            {posters.map((p, i) => <span key={p.src} className={i === index ? 'on' : undefined} />)}
            <span className="sr-only">Poster {index + 1} of {posters.length}</span>
          </span>
          <button type="button" className="reel-btn" onClick={() => go(1)} aria-label="Next poster"><ChevronRight /></button>
        </div>
      )}
      {zoom && <Lightbox items={posters} index={index} onClose={close} onNavigate={go} label="Poster viewer" />}
    </div>
  );
}

const EventsAndCompetitions = () => (
  <>
    <PageHero
      kicker="Events & Competitions"
      lines={['Stages to', 'aim for.']}
      lead="Weekend group classes, concerts and showcases: real performance opportunities for students at every level."
      photos={[
        { ...nextAce4.cover, width: 1800, height: 1350 },
        { src: nextAce4.photos[1].src, alt: nextAce4.photos[1].alt, width: 1350, height: 1800, position: '50% 30%' },
      ]}
      tag="ACE 4.0"
    >
      <a className="btn btn-spot btn-xl" href="#now">What’s on now</a>
      <a className="btn btn-ghost-light" href="#ace">ACE 4.0 highlights</a>
    </PageHero>

    {/* Happening now */}
    <section id="now" className="section on-wine" aria-labelledby="now-title">
      <div className="wrap">
        <SectionHead id="now-title" title="Happening now">
          <p className="on-dark">Registration is open. Message us to save a place.</p>
        </SectionHead>
        <article className="event">
          <PosterCarousel posters={groupGuitar.posters} />
          <div className="event-body" data-reveal>
            <span className="live">Ongoing registration</span>
            <h3>{groupGuitar.title}</h3>
            <ul className="meta-list">
              <li><CalendarIcon /> {groupGuitar.date}</li>
              <li><PinIcon /> {groupGuitar.location}</li>
            </ul>
            <p>{groupGuitar.description}</p>
            <a className="btn btn-spot" href={GROUP_GUITAR_URL} target="_blank" rel="noopener noreferrer"><ChatIcon /> Ask about group guitar</a>
          </div>
        </article>
      </div>
    </section>

    {/* Upcoming */}
    <section className="section" aria-labelledby="upcoming-title">
      <div className="wrap">
        <SectionHead id="upcoming-title" title="Coming up" />
        <div className="empty-state" data-reveal>
          <span className="eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
          <div>
            <h3>The next stage is being built</h3>
            <p>We’re tuning up our next big event. Follow us on Instagram for early announcements, or ask Jeevan when you message.</p>
            <p><a className="text-link" href={instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {instagram.handle}</a></p>
          </div>
        </div>
      </div>
    </section>

    {/* Past highlight: ACE 4.0 */}
    <section id="ace" className="section on-white" aria-labelledby="ace-title">
      <div className="wrap">
        <div className="head" data-reveal>
          <div>
            <p className="eyebrow">Past highlight · completed</p>
            <h2 id="ace-title" className="display md">{nextAce4.title}</h2>
          </div>
          <ul className="meta-list ace-meta">
            <li><CalendarIcon /> {nextAce4.date}</li>
            <li><PinIcon /> {nextAce4.location}</li>
          </ul>
        </div>
        <p className="lede" data-reveal>{nextAce4.description}</p>
        <div className="ace-photos" data-reveal>
          <PhotoGrid items={nextAce4.photos} label="ACE 4.0 photos" />
        </div>
        <div className="ace-video" data-reveal>
          <video controls playsInline preload="none" poster={nextAce4.videoPoster.src} aria-label="Who Is The Next ACE 4.0 video highlight">
            <source src={nextAce4.video} type="video/mp4" />
            Your browser does not support video playback. <a href={nextAce4.video}>Download the video</a>.
          </video>
          <div>
            <h3>A moment from ACE 4.0</h3>
            <p>Press play for the highlight from the day.</p>
            <div className="section-foot">
              <TextLink to="/student-life#gallery">More concerts and competitions in the gallery</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ClosingCTA lines={['Your stage', 'starts here.']} />
  </>
);

export default EventsAndCompetitions;

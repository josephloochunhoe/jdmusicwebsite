import { useState } from 'react';
import openDayBand from '../assets/gallery-web/openday2025/openday25_1.webp';
import openDayKeys from '../assets/gallery-web/openday2025/openday25_9.webp';
import VideoReel from '../components/VideoReel';
import PhotoGrid from '../components/PhotoGrid';
import { PageHero, TrialButton, ClosingCTA, SectionHead, TextLink } from '../components/ui';
import { galleryCategories, galleryItems } from '../data/galleryData';

const byCategory = Object.fromEntries(galleryCategories.map(c => [c, galleryItems.filter(item => item.category === c)]));

const StudentLife = () => {
  const [category, setCategory] = useState(galleryCategories[0]);
  const [changed, setChanged] = useState(false);
  const items = byCategory[category];

  return (
    <>
      <PageHero
        kicker="Student Life"
        lines={['Lessons, then', 'the spotlight.']}
        lead="Classroom moments, concerts, open days and competitions. Here’s what learning at JD. looks like."
        photos={[
          { src: openDayBand, alt: 'Student band performing at Open Day 2025', width: 1800, height: 1200 },
          { src: openDayKeys, alt: 'Smiling keyboard player at Open Day 2025', width: 1800, height: 1200, position: '55% 50%' },
        ]}
        tag="Open Day 2025"
      >
        <a className="btn btn-spot btn-xl" href="#gallery">Browse the gallery</a>
        <TrialButton tone="ghost-light" label="Book a trial lesson" />
      </PageHero>

      <VideoReel title="In their own words" lead="Six students on what lessons at JD. are like." id="videos" />

      <section id="gallery" className="section on-white" aria-labelledby="gallery-title">
        <div className="wrap">
          <SectionHead id="gallery-title" title="Moments on stage">
            <p>Pick an event. Tap any photo to see it full size.</p>
          </SectionHead>
          <ul className="filter-chips" aria-label="Gallery events" data-reveal>
            {galleryCategories.map(c => (
              <li key={c}>
                <button type="button" aria-pressed={c === category} onClick={() => { setCategory(c); setChanged(true); }}>
                  {c}<span className="n">{byCategory[c].length}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className={`gallery-grid${changed ? ' is-active' : ''}`} key={category}>
            <PhotoGrid items={items} initial={9} step={9} label={`${category} photos`} />
          </div>
          <div className="section-foot">
            <TextLink to="/events-competitions">What’s happening now: events &amp; competitions</TextLink>
          </div>
        </div>
      </section>

      <ClosingCTA lines={['Your story', 'starts here.']} />
    </>
  );
};

export default StudentLife;

import teamGroup from '../assets/people/team-group.webp';
import heroGuitar from '../assets/home/hero-guitar.webp';
import { PageHero, TrialButton, ClosingCTA, SectionHead, TextLink } from '../components/ui';
import { founder, teachers, crew } from '../data/team';
import { trialUrl } from '../lib/contact';

const About = () => (
  <>
    <PageHero
      kicker="About JD. Music Academy · since 2020"
      lines={['Teachers who', 'become mentors.']}
      lead="A Kajang music academy built on song-first, performance-based lessons and close student–teacher relationships."
      photos={[
        { src: teamGroup, alt: 'The JD. Music Academy team and students together', width: 2000, height: 1333 },
        { src: heroGuitar, alt: 'Guitarists singing on stage at Open Day 2025', width: 1200, height: 800, position: '30% 40%' },
      ]}
      tag="The JD. family"
    >
      <TrialButton size="xl" watch />
      <a className="btn btn-ghost-light" href="#teachers">Meet the teachers</a>
    </PageHero>

    {/* Story, mission and vision */}
    <section className="section" aria-labelledby="story-title">
      <div className="wrap split">
        <div data-reveal>
          <p className="eyebrow">Our story</p>
          <h2 id="story-title" className="display md">Passion, not pressure.</h2>
        </div>
        <div className="story-copy" data-reveal>
          <p>Founded in 2020, JD. Music Academy teaches through a vibrant, performance-based approach. Hands-on classes make instrument fundamentals enjoyable by teaching students through the songs they love.</p>
          <p>With personal attention from our instructors, we put close relationships first, so every student feels inspired, supported and confident. Lessons should build confidence, not performance stress.</p>
          <div className="cards-2">
            <div className="mini-card">
              <h3>Our mission</h3>
              <p>To deliver engaging, performance-driven music education that fosters strong student–teacher connections, making learning both enjoyable and effective.</p>
            </div>
            <div className="mini-card">
              <h3>Our vision</h3>
              <p>To cultivate a community of skilled, passionate musicians who thrive through supportive mentorship and a love for performing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section id="teacher-jeevan" className="section on-wine" aria-labelledby="founder-title">
      <div className="wrap founder">
        <figure className="founder-photo" data-reveal>
          <img src={founder.image} alt={founder.name} width="452" height="452" loading="lazy" />
        </figure>
        <div data-reveal>
          <p className="role">{founder.role}</p>
          <h2 id="founder-title" className="display md">{founder.name}</h2>
          <p className="founder-bio">“{founder.bio}”</p>
        </div>
      </div>
    </section>

    {/* Teachers */}
    <section id="teachers" className="section on-blush" aria-labelledby="teachers-title">
      <div className="wrap">
        <SectionHead id="teachers-title" title="Meet your teachers">
          <p>Five instructors across guitar, piano and keyboard, drums, vocals and bass.</p>
        </SectionHead>
        <ul className="teacher-grid" data-cta="teacher_profile">
          {teachers.map((t, i) => (
            <li key={t.slug} id={`teacher-${t.slug}`} className="teacher" data-reveal style={{ '--i': i % 3 }}>
              <div className="teacher-top">
                <img src={t.image} alt={t.name} width="96" height="96" loading="lazy" />
                <div>
                  <h3>{t.name}</h3>
                  <ul className="chips" aria-label="Teaches">{t.instruments.map(inst => <li key={inst}>{inst}</li>)}</ul>
                </div>
              </div>
              <div className="teacher-bio"><p>{t.bio}</p></div>
              <div className="teacher-foot">
                <a href={trialUrl(t.trial)} target="_blank" rel="noopener noreferrer">Book a {t.instruments[0].toLowerCase()} trial</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Wider team */}
    <section className="section" aria-labelledby="crew-title">
      <div className="wrap">
        <SectionHead id="crew-title" title="Behind the scenes">
          <p>The people who share our students’ stories online.</p>
        </SectionHead>
        <div className="crew-grid">
          {crew.map(c => (
            <article key={c.slug} className="crew" data-reveal>
              <img src={c.image} alt={c.name} width="88" height="88" loading="lazy" />
              <div>
                <h3>{c.name}</h3>
                <p className="role">{c.role}</p>
                <p>{c.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-foot">
          <TextLink to="/student-life">See our students in action</TextLink>
        </div>
      </div>
    </section>

    <ClosingCTA lines={['Come and', 'meet us.']} />
  </>
);

export default About;

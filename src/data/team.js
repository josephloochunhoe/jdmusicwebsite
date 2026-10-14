import jeevan from '../assets/people/jeevan.webp';
import achsha from '../assets/people/achsha.webp';
import elisha from '../assets/people/elisha.webp';
import adrian from '../assets/people/adrian.webp';
import shireen from '../assets/people/shireen.webp';
import boaz from '../assets/people/boaz.webp';
import angeline from '../assets/people/angeline.webp';
import joshua from '../assets/people/joshua.webp';

// Bios are the team's own words from the original site (light typo fixes only).
export const founder = {
  slug: 'jeevan',
  name: 'Jeevan Devamarcus',
  role: 'Director & Founder',
  image: jeevan,
  quote: 'That’s the heart behind JD.Music: to nurture passion, not pressure.',
  bio: 'So I started JD.Music to offer something different — a more personal, performance-based approach that helps students fall in love with music while still building solid skills. It’s about making music fun, accessible, and meaningful, whether you’re a complete beginner or someone wanting to grow in your gift. That’s the heart behind JD.Music: to nurture passion, not pressure.',
};

export const teachers = [
  {
    slug: 'adrian',
    name: 'Adrian',
    instruments: ['Guitar'],
    trial: 'guitar',
    image: adrian,
    bio: "I'm happy to be part of JD.Music as a music teacher. What drew me in was the opportunity to offer something different, not just the traditional teaching and learning process, but a full, immersive experience. I was especially intrigued by the performance-based teaching approach, which aligns perfectly with my passion for making music come alive. I also value building genuine, friendly relationships with my students, creating an environment where they feel inspired, confident, and connected through music.",
  },
  {
    slug: 'shireen',
    name: 'Shireen Nisha',
    instruments: ['Vocals'],
    trial: 'vocal',
    image: shireen,
    bio: "Whether you're a shy beginner, a curious kid, or someone rediscovering music later in life, I offer vocal coaching that's fun, encouraging, and rooted in solid technique. I work with students of all ages, from little ones just finding their pitch to adults who just want to sing with confidence (and maybe impress at karaoke night). My goal? To make singing feel natural, joyful, and empowering. No pressure, no judgment, just good vibes and steady progress. Ready to warm up those vocal cords? Let’s make some noise — on key, of course.",
  },
  {
    slug: 'boaz',
    name: 'Boaz Ezekiel',
    instruments: ['Drums', 'Guitar'],
    trial: 'drum',
    image: boaz,
    bio: 'Hi! I’m a 20-year-old student who’s super passionate about music, especially drums and guitar. When I’m not studying, you’ll find me jamming, creating beats, or teaching others how to play. I love sharing what I know and helping others enjoy music as much as I do. Teaching has become one of my favorite things. It’s fun, rewarding, and keeps the music alive!',
  },
  {
    slug: 'angeline',
    name: 'Angeline Phoebe',
    instruments: ['Piano', 'Keyboard'],
    trial: 'piano',
    image: angeline,
    bio: 'There’s something special about finding your way around the keys, especially when turning simple notes into music that feels personal and alive. Whether you’re a complete beginner or returning after a break, we’ll move at a pace that feels comfortable and encouraging. With a balance of technique, creativity, and expression, you’ll build real skills while enjoying the process. Each lesson is a step toward making music that truly feels like yours.',
  },
  {
    slug: 'johanan',
    name: 'Johanan Joshua',
    instruments: ['Piano', 'Guitar', 'Bass'],
    trial: 'piano',
    image: joshua,
    bio: "Hello everyone! I'm a Software Engineering graduate who is now carving out a career in IT sales. My true passion, however, lies in music. I began learning the piano at just 5 years old and have now been playing for 19 years. Driven by a thirst for more, I went on to learn other instruments like the drums, guitar, and bass. My deep love for music is matched by my desire to share knowledge and inspire others. Teaching and adding value to people's lives has become my mission. So come along and join me on this exciting musical journey!",
  },
];

export const crew = [
  {
    slug: 'achsha',
    name: 'Achsha Avinia',
    role: 'Social Media Lead',
    image: achsha,
    bio: "As the Social Media Lead at JD.Music, I'm kinda the face behind the posts and stories you see. I’m all about turning vibes into visuals and making sure our page feels just as fun and real as our jam sessions. Whether it's hyping up our students, sharing BTS moments or just spreading the love for music, I’m here to keep it fresh, fun and totally us. I chose to be part of JD.Music because I truly believe in using music and social media to inspire, connect and celebrate every student’s growth.",
  },
  {
    slug: 'elisha',
    name: 'Elisha',
    role: 'Creative Media Design Lead',
    image: elisha,
    bio: "Hey! I'm Elisha, and here at JD.Music I handle all things visual — advertising, content creation, and making sure our media actually feels as good as it looks. I love turning ideas into visuals that grab attention and tell a story. Whether it’s designing, editing, or just finding new ways to be creative, I’m all about making content that connects with people.",
  },
];

export const teacherBySlug = Object.fromEntries(teachers.map(t => [t.slug, t]));

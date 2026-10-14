import instGuitar from '../assets/home/inst-guitar.webp';
import instPiano from '../assets/home/inst-piano.webp';
import instDrums from '../assets/home/inst-drums.webp';
import instVocals from '../assets/home/inst-vocals.webp';
import instBass from '../assets/home/inst-bass.webp';
import sahnjaayz from '../assets/home/videos/sahnjaayz.webp';
import athaliya from '../assets/home/videos/athaliya.webp';
import alyssa from '../assets/home/videos/alyssa.webp';
import kamal from '../assets/home/videos/kamal.webp';
import hareesh from '../assets/home/videos/hareesh.webp';
import andrea from '../assets/home/videos/andrea.webp';

// Student video testimonials, hosted on the academy's Google Drive.
export const studentVideos = [
  { id: '1ORgfANzL_HDM2FNJJe8-kjJGa8Y5bjOR', name: 'Sahnjaayz', instrument: 'Drums', tenure: '4 years with us', cover: sahnjaayz },
  { id: '1bvQYk7DzgKA_xNmo_-6MSYV_OfdxAV1E', name: 'Athaliya', instrument: 'Guitar', tenure: '2 years with us', cover: athaliya },
  { id: '1aJEFAKeUM8KSZU2scc3-IwXH-yYE_n54', name: 'Alyssa', instrument: 'Guitar', tenure: '1 year with us', cover: alyssa },
  { id: '12sIPRYxrMqOELbjJ_b9I6jAQgEmhI-GG', name: 'Kamal', instrument: 'Drums', tenure: '9 months with us', cover: kamal },
  { id: '1d-xArepU9MD-ACsdrgy5-YL83rSRr7la', name: 'Hareesh', instrument: 'Guitar', tenure: '5 months with us', cover: hareesh },
  { id: '1kLiZQxkLiU5O64jjdX-JxPA61qAo7a5W', name: 'Andrea', instrument: 'Piano', tenure: '5 months with us', cover: andrea },
];

// Instrument selector. `teachers` are slugs from team.js.
export const instruments = [
  {
    key: 'guitar', tab: 'Guitar', title: 'Guitar', trial: 'guitar', image: instGuitar,
    alt: 'Two guitarists performing at Open Day 2025',
    text: 'Acoustic or electric guitar lessons: chords, rhythm and the songs you actually want to play.',
    chips: ['Weekly, 30 min or 1 hr', 'Kajang, Sri Hartamas, online', 'Weekend group classes'],
    teachers: ['adrian', 'boaz', 'johanan'],
  },
  {
    key: 'piano', tab: 'Piano', title: 'Piano & keyboard', trial: 'piano', image: instPiano,
    alt: 'A keyboard student and teacher at Open Day 2025',
    text: 'Piano and keyboard lessons from first notes to full songs, at a pace that feels comfortable.',
    chips: ['Weekly, 30 min or 1 hr', 'Kajang, Sri Hartamas, online', 'Beginners and returners'],
    teachers: ['angeline', 'johanan'],
  },
  {
    key: 'drums', tab: 'Drums', title: 'Drums & cajon', trial: 'drum', image: instDrums, position: '65% 50%',
    alt: 'Drummer smiling behind the kit at Open Day 2025',
    text: 'Drum lessons where you get behind the kit and play along to real songs.',
    chips: ['Weekly, 30 min or 1 hr', 'Kajang, Sri Hartamas, online', 'Kit provided'],
    teachers: ['boaz'],
  },
  {
    key: 'vocals', tab: 'Vocals', title: 'Vocals', trial: 'vocal', image: instVocals,
    alt: 'Young singer performing at Open Day 2025',
    text: 'Singing lessons with solid technique and the confidence to sing out, from little ones to adults.',
    chips: ['Weekly, 30 min or 1 hr', 'Kajang, Sri Hartamas, online', 'All ages'],
    teachers: ['shireen'],
  },
  {
    key: 'bass', tab: 'Bass', title: 'Bass', trial: 'bass', image: instBass, position: '68% 50%',
    alt: 'Bass player performing at an academy event',
    text: 'Bass guitar lessons: learn the basslines that hold a band together.',
    chips: ['Weekly, 30 min or 1 hr', 'Kajang, Sri Hartamas, online'],
    teachers: ['johanan'],
  },
];

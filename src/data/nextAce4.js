import ace1 from '../assets/gallery-web/nextace4/ace4-1.webp';
import ace1t from '../assets/gallery-web/nextace4/ace4-1-thumb.webp';
import ace2 from '../assets/gallery-web/nextace4/ace4-2.webp';
import ace2t from '../assets/gallery-web/nextace4/ace4-2-thumb.webp';
import ace3 from '../assets/gallery-web/nextace4/ace4-3.webp';
import ace3t from '../assets/gallery-web/nextace4/ace4-3-thumb.webp';
import ace4 from '../assets/gallery-web/nextace4/ace4-4.webp';
import ace4t from '../assets/gallery-web/nextace4/ace4-4-thumb.webp';
import ace5 from '../assets/gallery-web/nextace4/ace4-5.webp';
import ace5t from '../assets/gallery-web/nextace4/ace4-5-thumb.webp';
import ace6 from '../assets/gallery-web/nextace4/ace4-6.webp';
import ace6t from '../assets/gallery-web/nextace4/ace4-6-thumb.webp';
import ace7 from '../assets/gallery-web/nextace4/ace4-7.webp';
import ace7t from '../assets/gallery-web/nextace4/ace4-7-thumb.webp';

const portrait = { width: 570, height: 760 };
const groupPhoto = { src: ace3, thumb: ace3t, width: 760, height: 570, alt: 'ACE 4.0 participants together at Atria Shopping Gallery' };
const studentsPhoto = { src: ace6, thumb: ace6t, ...portrait, alt: 'Three students celebrating at ACE 4.0' };

export const nextAce4 = {
  title: 'Who Is The Next ACE 4.0',
  date: '20 September 2026',
  location: 'Atria Shopping Gallery, Ground Floor, Centre Court',
  description: 'Celebrating our students on stage, their achievements, and the memories from Who Is The Next ACE 4.0.',
  video: '/videos/next-ace-4-highlights.mp4',
  videoPoster: studentsPhoto,
  cover: groupPhoto,
  photos: [
    groupPhoto,
    { src: ace2, thumb: ace2t, ...portrait, alt: 'Students with trophies and certificates at ACE 4.0' },
    { src: ace1, thumb: ace1t, ...portrait, alt: 'Student receiving a trophy and certificate at ACE 4.0' },
    { src: ace7, thumb: ace7t, ...portrait, alt: 'ACE 4.0 award recipients on stage' },
    studentsPhoto,
    { src: ace4, thumb: ace4t, ...portrait, alt: 'A moment on stage at ACE 4.0' },
    { src: ace5, thumb: ace5t, ...portrait, alt: 'Participants on the ACE 4.0 stage' },
  ],
};

import awardPhoto from '../assets/gallery/nextace4/ace4-1.webp';
import studentAwards from '../assets/gallery/nextace4/ace4-2.webp';
import groupPhoto from '../assets/gallery/nextace4/ace4-3.webp';
import stagePhoto from '../assets/gallery/nextace4/ace4-4.webp';
import stageMoment from '../assets/gallery/nextace4/ace4-5.webp';
import studentsPhoto from '../assets/gallery/nextace4/ace4-6.webp';
import winnersPhoto from '../assets/gallery/nextace4/ace4-7.webp';

export const nextAce4 = {
  title: 'Who Is The Next ACE 4.0',
  date: '20 September 2026',
  location: 'Atria Shopping Gallery, Ground Floor, Centre Court',
  description: 'Celebrating our students on stage, their achievements, and the memories from Who Is The Next ACE 4.0.',
  video: '/videos/next-ace-4-highlights.mp4',
  videoPoster: studentsPhoto,
  photos: [
    { src: groupPhoto, alt: 'ACE 4.0 participants together at Atria Shopping Gallery' },
    { src: studentAwards, alt: 'Students with trophies and certificates at ACE 4.0' },
    { src: awardPhoto, alt: 'Student receiving a trophy and certificate at ACE 4.0' },
    { src: winnersPhoto, alt: 'ACE 4.0 award recipients on stage' },
    { src: studentsPhoto, alt: 'Three students celebrating at ACE 4.0' },
    { src: stagePhoto, alt: 'A moment on stage at ACE 4.0' },
    { src: stageMoment, alt: 'Participants on the ACE 4.0 stage' },
  ],
};

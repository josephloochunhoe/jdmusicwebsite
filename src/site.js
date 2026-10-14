export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.jd-musicacademy.com').replace(/\/$/, '');
export const SITE_NAME = 'JD. Music Academy';
export const SHARE_IMAGE = {
  path: '/images/og-music-lessons-kajang.jpg',
  width: 1200,
  height: 630,
  alt: 'JD. Music Academy band performing on keyboard, drums, vocals and guitar',
};

// Shared by metadata, analytics and the static build.
export const pages = {
  '/': {
    title: 'Music Lessons in Kajang: Guitar, Piano, Drums & Vocals | JD. Music Academy',
    description: 'Music lessons in Kajang for kids, teens and adults. Guitar, piano, drum, vocal and bass classes, plus Sri Hartamas and online lessons. Book a trial on WhatsApp.',
  },
  '/about': {
    title: 'Meet Our Music Teachers in Kajang | JD. Music Academy',
    description: 'Meet founder Jeevan Devamarcus and the teachers behind JD. Music Academy: friendly, performance-based guitar, piano, drum, vocal and bass lessons in Kajang.',
  },
  '/student-life': {
    title: 'Student Performances & Stories | JD. Music Academy',
    description: 'Watch JD. Music Academy students in their own words and browse photos from our live concerts, open days, VDrums and competitions in Kajang.',
  },
  '/events-competitions': {
    title: 'Music Events & Competitions | JD. Music Academy',
    description: 'Weekend group guitar classes in Kajang, upcoming events and highlights from Who Is The Next ACE 4.0. Performance opportunities with JD. Music Academy.',
  },
  '/pricing-faq': {
    title: 'Music Lesson Prices & FAQs | JD. Music Academy',
    description: 'Music lesson fees in Kajang and Sri Hartamas: memberships from RM150/month or RM45 per lesson, plus group and school programmes. Answers to common questions.',
  },
  '/contact': {
    title: 'Contact JD. Music Academy | Music Lessons in Kajang',
    description: 'Contact JD. Music Academy to ask about music lessons, studio locations, available slots or a trial. Reach our team by WhatsApp, phone or email.',
  },
};
export const notFound = {
  title: 'Page Not Found | JD. Music Academy',
  description: 'This page could not be found. Explore our music lessons or contact JD. Music Academy for help.',
};
export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

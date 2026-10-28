export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.jd-musicacademy.com').replace(/\/$/, '');
export const SITE_NAME = 'JD. Music Academy';
// Structured data only. Visible phone and WhatsApp links live in src/lib/contact.js.
export const SCHEMA_TELEPHONE = '+60174370443';
export const SHARE_IMAGE = {
  path: '/images/og-music-lessons-kajang.jpg',
  width: 1200,
  height: 630,
  alt: 'JD. Music Academy band performing on keyboard, drums, vocals and guitar',
};

// Shared by metadata, analytics and the static build.
export const pages = {
  '/': {
    crumb: 'Home',
    title: 'Music Classes in Kajang | Piano, Guitar & Drums | JD. Music Academy',
    description: 'Music classes in Kajang for kids, teens and adults. Piano lessons, guitar classes, drums, vocals, bass and ukulele. Kajang studio, Sri Hartamas and online.',
  },
  '/about': {
    crumb: 'About',
    title: 'Music Teachers in Kajang | Piano & Guitar | JD. Music Academy',
    description: 'Meet Jeevan Devamarcus and the JD. Music Academy teachers. Guitar, piano, drum, vocal and bass lessons in Kajang, with performance-based classes since 2020.',
  },
  '/student-life': {
    crumb: 'Student Life',
    title: 'Student Concerts in Kajang | JD. Music Academy',
    description: 'Watch Kajang music students in their own words, and browse concert, open day and competition photos from guitar, piano, drum and vocal classes.',
  },
  '/events-competitions': {
    crumb: 'Events',
    title: 'Guitar Classes in Kajang | Events | JD. Music Academy',
    description: 'Weekend group guitar classes at the Kajang home studio, Saturdays 2–3pm or Sundays 3–4pm, plus concerts and Who Is The Next ACE highlights.',
  },
  '/pricing-faq': {
    crumb: 'Pricing & FAQ',
    title: 'Music Lesson Fees in Kajang | JD. Music Academy',
    description: 'Kajang music lesson fees from RM45 a lesson or RM150 a month, plus Sri Hartamas rates, group classes and school programmes. Common questions answered.',
  },
  '/contact': {
    crumb: 'Contact',
    title: 'Contact a Music School in Kajang | JD. Music Academy',
    description: 'Contact JD. Music Academy about music classes in Kajang. Ask about piano, guitar, drums, vocals, bass or ukulele, or book a trial on WhatsApp.',
  },
};
export const notFound = {
  title: 'Page Not Found | JD. Music Academy',
  description: 'This page could not be found. Explore our music lessons or contact JD. Music Academy for help.',
};
export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

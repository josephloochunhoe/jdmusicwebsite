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
    title: 'Music Classes in Kajang & Sri Hartamas | JD. Music Academy',
    description: 'Music classes in Kajang and Sri Hartamas for kids, teens and adults. Piano lessons, guitar classes, drums, vocals, bass and ukulele, plus online.',
  },
  '/about': {
    crumb: 'About',
    title: 'Music Teachers in Kajang & Sri Hartamas | JD. Music Academy',
    description: 'Meet Jeevan Devamarcus and the JD. Music Academy teachers. Guitar, piano, drum, vocal and bass lessons in Kajang and Sri Hartamas, since 2020.',
  },
  '/student-life': {
    crumb: 'Student Life',
    title: 'Student Concerts in Kajang & Sri Hartamas | JD. Music Academy',
    description: 'Watch students in their own words, and browse concert, open day and competition photos from classes in Kajang and Sri Hartamas.',
  },
  '/events-competitions': {
    crumb: 'Events',
    title: 'Events in Kajang & Sri Hartamas | JD. Music Academy',
    description: 'Weekend group guitar classes at the Kajang home studio, plus concerts and showcases. Music lessons in Kajang and Sri Hartamas.',
  },
  '/pricing-faq': {
    crumb: 'Pricing & FAQ',
    title: 'Lesson Fees in Kajang & Sri Hartamas | JD. Music Academy',
    description: 'Lesson fees in Kajang and Sri Hartamas. Kajang Academy Membership from RM150 a month, with separate Sri Hartamas rates, plus group and school programmes.',
  },
  '/contact': {
    crumb: 'Contact',
    title: 'Contact Us in Kajang & Sri Hartamas | JD. Music Academy',
    description: 'Contact JD. Music Academy about music classes in Kajang and Sri Hartamas. Ask about piano, guitar, drums, vocals, bass or ukulele, or book a trial.',
  },
};
export const notFound = {
  title: 'Page Not Found | JD. Music Academy',
  description: 'This page could not be found. Explore our music lessons or contact JD. Music Academy for help.',
};
export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

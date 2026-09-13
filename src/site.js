export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.jd-musicacademy.com').replace(/\/$/, '');
export const SITE_NAME = 'JD. Music Academy';

// Shared by metadata, analytics and the static build.
export const pages = {
  '/': {
    title: 'Music Lessons in Kajang | JD. Music Academy',
    description: 'Learn piano, guitar, drums and vocals at JD. Music Academy in Kajang. Friendly lessons for children and adults, with individual and group options.',
  },
  '/about': {
    title: 'Meet Our Music Teachers in Kajang | JD. Music Academy',
    description: 'Meet the teachers behind JD. Music Academy. Discover our friendly, performance-focused approach to piano, guitar, drum and vocal lessons in Kajang.',
  },
  '/student-life': {
    title: 'Student Performances & Stories | JD. Music Academy',
    description: 'See JD. Music Academy students learning, performing and growing through music. Explore concert photos, competitions and student testimonials.',
  },
  '/events-competitions': {
    title: 'Music Events & Competitions | JD. Music Academy',
    description: 'Explore group guitar classes, music events and performance opportunities with JD. Music Academy in Kajang.',
  },
  '/pricing-faq': {
    title: 'Music Lesson Prices & FAQs | JD. Music Academy',
    description: 'Explore individual, group and institutional music lesson options in Kajang, Sri Hartamas and online. Find pricing and answers to common questions.',
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

// One-to-one lesson rates (RM). Used by the fee explorer and the full rate table.
export const RATES = {
  kajang: { 30: { member: 150, flex: 45 }, 60: { member: 200, flex: 60 } },
  hartamas: { 30: { member: 200, flex: 50 }, 60: { member: 400, flex: 100 } },
};

export const STUDIOS = [
  { key: 'kajang', label: 'Kajang', name: 'Kajang Home Studio', note: 'Our home base for immersive, in-person learning.' },
  { key: 'hartamas', label: 'Sri Hartamas', name: 'Sri Hartamas Studio', note: 'Partner studio for students based in the Kuala Lumpur area.' },
];

export const PLANS = {
  member: {
    label: 'Academy Membership',
    tag: 'Recommended',
    per: '/month',
    perks: ['Your own reserved weekly slot', 'Priority scheduling', 'Up to 2 make-up lessons a month'],
  },
  flex: {
    label: 'Flex Pass',
    tag: 'Pay as you go',
    per: '/lesson',
    perks: ['Pay per class', 'Booked around teacher availability'],
  },
};

export const RATE_NOTES = [
  'Lessons are once a week. Membership is priced per month; Flex Pass per lesson.',
  'Online lessons and limited home visits are available: ask for rates.',
  'Additional travel charges apply based on distance from our base studios.',
];

export const programmes = [
  { name: 'Group Lessons', rate: 'RM35 per student per 1-hr session', minimum: 'Min 3 students', text: 'Learn and grow together in a fun, collaborative group, within the Klang Valley.' },
  { name: 'Church Music Lessons', rate: 'From RM150/month (weekly 1-hr session)', minimum: 'Min 3 students', text: 'For worship teams or youth groups looking to elevate their sound and coordination.' },
  { name: 'Schools & Private Institutions', rate: 'From RM200/month (weekly 1-hr session)', minimum: 'Min 5 students', text: 'Co-curricular and enrichment programmes.' },
  { name: 'Preschool Music Programmes', rate: 'From RM120/session', minimum: 'Flexible group size', text: 'Sing-alongs and movement-based play for early development.' },
  { name: 'Community Centres & NGOs', rate: 'From RM250/workshop', minimum: 'Flexible group size', text: 'Flexible outreach packages, donation-based options and sponsor-friendly rates.' },
  { name: 'Specialised Workshops', rate: 'From RM200', minimum: 'Custom', text: 'Themed sessions for schools, churches, events and community programmes.' },
];

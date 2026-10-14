// Answers come from the academy's published FAQ. `home` marks the short list on the homepage.
// `list` answers render as bullet points (and are joined for structured data).
export const faqItems = [
  {
    q: 'Can we try a lesson first?',
    a: 'Yes. Message Jeevan on WhatsApp to book a free trial lesson. Tell us the student’s age, the instrument and your preferred studio.',
    home: true,
  },
  {
    q: 'What ages do you teach?',
    a: 'All ages, from young children to adults, including complete beginners and people returning after a break.',
    home: true,
  },
  {
    q: 'Should I bring my own instrument to lessons?',
    a: 'No. Just come as you are, ready to learn. We have all the essential equipment for your lessons. Having your own instrument for home practice is encouraged, but there’s no need to bring it each week.',
    home: true,
  },
  {
    q: 'How long does each class last? How many sessions do you have?',
    a: 'We have two lesson lengths: 30–40 minutes and 1 hour. Lessons are held once a week, with flexible scheduling for both individual and group sessions.',
    home: true,
  },
  {
    q: 'Where are the classes based?',
    a: 'At our home-based studio in Kajang and our partner location in Sri Hartamas, KL. We also offer online lessons and limited in-home sessions (additional charges may apply depending on location).',
    home: true,
  },
  {
    q: 'How long does it take to learn an instrument?',
    a: 'There is no set answer. With regular practice, a basic level of playing can be reached in a few months. Most of our students take lessons long term because they want to keep improving and they enjoy the lessons.',
  },
  {
    q: 'Will I need to purchase any additional materials?',
    a: 'Most teachers require a book for their students. Students may also want accessories as they progress, such as a capo, tuner, strap or songbooks.',
  },
  {
    q: 'What types of lessons do you provide?',
    a: 'Fun, performance-based lessons tailored to your style and pace, for total beginners or those looking to level up:',
    list: ['Guitar (acoustic & electric)', 'Piano & keyboard', 'Drums & cajon', 'Vocals', 'Bass', 'Ukulele'],
  },
  {
    q: 'What packages do you offer?',
    a: 'We offer tailored paths including:',
    list: [
      'Individual & group lessons (Kajang, Sri Hartamas or online)',
      'School & kindergarten programmes (weekly enrichment)',
      'Church music lessons (worship team setups)',
      'Interactive masterclass workshops',
    ],
  },
  {
    q: 'What other services do you support?',
    a: 'Beyond lessons, JD.Music provides live band performances for special functions, fundraisers and community programmes.',
  },
];

export const faqText = item => (item.list ? `${item.a} ${item.list.join('; ')}.` : item.a);

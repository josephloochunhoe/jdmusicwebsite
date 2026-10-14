// One place for every phone number, message and outbound link on the site.
export const PHONE_DISPLAY = '019-213 9210';
export const PHONE_TEL = 'tel:+60192139210';
export const EMAIL = 'jdmusicacademy0320@gmail.com';
export const REGISTRATION_URL = 'https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration';

export const whatsappUrl = message => `https://wa.me/60192139210?text=${encodeURIComponent(message)}`;

const SIGN_OFF = '(Sent from the JD. Music Academy website)';

// `instrument` is the lesson word, e.g. "guitar", "drum", "vocal".
export function trialUrl(instrument) {
  const lines = [
    "Hi Jeevan! I'm messaging you from the JD. Music Academy website.",
    instrument ? `I'd like to book a trial ${instrument} lesson.` : "I'd like to book a trial lesson.",
    '',
    "Student's age: ",
    ...(instrument ? [] : ['Instrument: ']),
    'Preferred studio (Kajang / Sri Hartamas / online): ',
    '',
    SIGN_OFF,
  ];
  return whatsappUrl(lines.join('\n'));
}

export const TRIAL_URL = trialUrl();
export const GENERAL_URL = whatsappUrl("Hi Jeevan! I was browsing your website and I'd love to get more details about your music lessons. Could you share more about available slots and programs?");
export const GROUP_GUITAR_URL = whatsappUrl('Hi Jeevan! I came from your website and I am interested in your group guitar lessons and I would like to ask more about it!');
export const PROGRAMMES_URL = whatsappUrl(`Hi Jeevan! I'm messaging you from the JD. Music Academy website.\nI'd like to ask about group lessons or a programme for our school / church / organisation.\n\nOrganisation: \nNumber of students: \nLocation: \n\n${SIGN_OFF}`);

export const SOCIALS = [
  { name: 'Instagram', handle: '@jd.musicclass', url: 'https://www.instagram.com/jd.musicclass' },
  { name: 'TikTok', handle: '@jd.musicclass', url: 'https://www.tiktok.com/@jd.musicclass' },
  { name: 'Facebook', handle: 'JD. Music Academy', url: 'https://www.facebook.com/share/1DTvbVk4Tu/' },
];

// Simple line icons shared across the site (decorative: always aria-hidden).
const Svg = ({ children, className = 'icon', ...props }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

export const ChatIcon = props => <Svg {...props}><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" /></Svg>;
export const WhatsAppIcon = props => (
  <Svg {...props}>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2Z" />
  </Svg>
);
export const PhoneIcon = props => <Svg {...props}><path d="M5 3.5h3.2l1.6 4.3-2.2 1.4a11.5 11.5 0 0 0 7.2 7.2l1.4-2.2 4.3 1.6V19a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" /></Svg>;
export const MailIcon = props => <Svg {...props}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></Svg>;
export const InstagramIcon = props => <Svg {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></Svg>;
export const TikTokIcon = props => <Svg {...props}><path d="M14 3.5v11.2a3.6 3.6 0 1 1-3.6-3.6" /><path d="M14 3.5c.4 2.6 2.4 4.6 5 4.9" /></Svg>;
export const FacebookIcon = props => <Svg {...props}><path d="M14.5 21v-7.5h2.7l.4-3.2h-3.1V8.4c0-.9.3-1.6 1.6-1.6h1.6V4a21 21 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.3H8.6v3.2h2.7V21" /></Svg>;
export const ArrowIcon = props => <Svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
export const ExternalIcon = props => <Svg {...props}><path d="M7 17 17 7M9 7h8v8" /></Svg>;
export const ChevronLeft = props => <Svg {...props}><path d="M15 5l-7 7 7 7" /></Svg>;
export const ChevronRight = props => <Svg {...props}><path d="M9 5l7 7-7 7" /></Svg>;
export const CloseIcon = props => <Svg {...props}><path d="M6 6l12 12M18 6 6 18" /></Svg>;
export const PinIcon = props => <Svg {...props}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></Svg>;
export const CalendarIcon = props => <Svg {...props}><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></Svg>;
export const PlayIcon = props => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
);

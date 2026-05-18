import React from 'react';
import { MessageCircle, Mail, Phone, Video, ArrowUpRight } from 'lucide-react';

// Instagram & Facebook are not exported by this version of lucide-react — using inline SVGs
const InstagramIcon = ({ size = 18, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = ({ size = 18, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className="object-contain"
    {...props}
  >
    <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.01.08 1.54.67 2.99 1.76 4.07 1.13 1.07 2.64 1.66 4.19 1.68v3.9c-1.72-.02-3.39-.62-4.73-1.71-.24-.2-.47-.41-.68-.64v6.84c.04 1.58-.37 3.16-1.19 4.49A7.329 7.329 0 0 1 7.42 22.13a7.173 7.173 0 0 1-5.32-2.12c-2.8-2.91-2.8-7.53 0-10.44 1.34-1.39 3.2-2.19 5.15-2.21.05 0 .09 0 .14.01v3.91c-.88-.01-1.74.33-2.37.96-1.19 1.25-1.19 3.23 0 4.48.64.66 1.53 1.02 2.45 1.01 1.06-.02 2.03-.63 2.51-1.57.37-.73.54-1.55.51-2.37l-.02-13.88z" />
  </svg>
);

const Contact = () => {
  const directorName = "Jeevan Devamarcus";
  const directorPhone = "019-2139210";
  const directorEmail = "jeevanmarcus@gmail.com";
  const whatsappUrl = "https://wa.me/60192139210?text=Hi%20Jeevan!%20I%20was%20browsing%20your%20website%20and%20I'd%20love%20to%20get%20more%20details%20about%20your%20music%20lessons.%20Could%20you%20share%20more%20about%20available%20slots%20and%20programs%3F";

  const socialLinks = [
    { name: "Instagram", handle: "@jd.musicacademy", url: "https://www.instagram.com/jd.musicclass", icon: InstagramIcon },
    { name: "Facebook", handle: "JD. Music Academy", url: "https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DTvbVk4Tu%2F%3Fmibextid%3DwwXIfr&sa=D&sntz=1&usg=AOvVaw0iwJuFPo6Fj0UeC9AijXjx", icon: FacebookIcon },
    { name: "TikTok", handle: "@jd.musicacademy", url: "https://www.google.com/url?q=https%3A%2F%2Fwww.tiktok.com%2F%40jd.musicclass%3F_t%3DZS-8vqn53mOFwW%26_r%3D1&sa=D&sntz=1&usg=AOvVaw3gmrl1lW4s17yi0VS9Mxhl", icon: TikTokIcon }
  ];

  return (
    <div className="w-full bg-white text-jd-black">

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-jd-burgundy/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-jd-black leading-tight">
            Get in <span className="text-jd-burgundy italic">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about lesson formats, scheduling, or want to book a free trial? Reach out directly — we're always happy to help.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN GRID (RED BACKGROUND) */}
      <section className="py-24 bg-jd-burgundy text-white border-t border-red-900/30 relative overflow-hidden">
        {/* Premium ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* COLUMN 1: PRIMARY WHATSAPP CTA CARD */}
            <div className="bg-black/20 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-white/5 blur-[60px] rounded-full pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                  <MessageCircle size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Chat with <span className="text-amber-100 italic">Us</span>
                </h2>
                <p className="text-red-100/80 leading-relaxed mb-8">
                  Connect instantly with our director, Jeevan Marcus, to discuss lesson options, studio locations, or current opening schedules.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-jd-burgundy font-bold hover:bg-amber-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group w-full"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={`tel:${directorPhone.replace(/-/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5 group w-full"
                  >
                    <Phone size={18} />
                    Call: {directorPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 2: EMAIL + SOCIAL */}
            <div className="flex flex-col gap-6">

              {/* EMAIL BLOCK */}
              <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-amber-100 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Email Us</h3>
                  <a
                    href={`mailto:${directorEmail}`}
                    className="text-amber-100 hover:text-white transition-colors font-medium text-sm"
                  >
                    {directorEmail}
                  </a>
                </div>
              </div>

              {/* SOCIAL MEDIA CARD */}
              <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex-1">
                <h3 className="font-bold text-white text-lg mb-1">Follow Us</h3>
                <p className="text-sm text-white/70 mb-6">Stay connected for updates, events, and student spotlights.</p>
                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white group-hover:text-amber-100 transition-colors flex-shrink-0">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="font-bold text-white text-sm leading-none mb-1.5">{link.name}</p>
                            <p className="text-amber-100/90 group-hover:text-amber-100 text-xs font-medium group-hover:underline transition-all">
                              {link.handle}
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-amber-100 flex items-center justify-center text-white/80 group-hover:text-jd-burgundy transition-all duration-300 shadow-sm flex-shrink-0">
                          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

import React from 'react';
import { MessageCircle, Mail, Phone, Instagram, Facebook, ArrowRight, ExternalLink } from 'lucide-react';

const director = {
  name: "Jeevan Marcus",
  phone: "019-2139210",
  email: "jeevanmarcus@gmail.com",
  whatsapp: "https://wa.me/60192139210"
};

const socialChannels = [
  {
    platform: "Instagram",
    handle: "@jd.musicacademy",
    url: "https://www.instagram.com/jd.musicacademy",
    icon: Instagram,
    color: "from-purple-500 to-pink-500"
  },
  {
    platform: "Facebook",
    handle: "JD. Music Academy",
    url: "https://www.facebook.com/jd.musicacademy",
    icon: Facebook,
    color: "from-blue-600 to-blue-400"
  },
  {
    platform: "TikTok",
    handle: "@jd.musicacademy",
    url: "https://www.tiktok.com/@jd.musicacademy",
    icon: null,
    color: "from-gray-900 to-gray-700"
  }
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="w-full bg-white text-jd-black">

      {/* HERO HEADER */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-jd-burgundy/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-jd-burgundy/3 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-bold text-jd-burgundy tracking-widest uppercase block mb-4">
            We'd love to hear from you
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-jd-black leading-tight">
            Let's <span className="text-jd-burgundy italic">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about lesson formats, scheduling, or want to book a free trial? Reach out directly — we're happy to help you find the right fit.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 space-y-8">

          {/* PRIMARY WHATSAPP CARD */}
          <div className="bg-jd-burgundy rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-red-200/80 text-xs font-bold uppercase tracking-widest">Fastest Response</p>
                    <p className="text-white font-bold text-lg">WhatsApp</p>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">
                  Chat with <span className="text-amber-100 italic">Jeevan Marcus</span>
                </h2>
                <p className="text-red-100/80 leading-relaxed max-w-lg">
                  Chat directly with our director to book a trial slot, ask about lesson formats, or inquire about custom schedules. We typically respond within the hour.
                </p>
                <p className="text-white/60 text-sm mt-3 flex items-center gap-2">
                  <Phone size={14} />
                  {director.phone}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={director.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-jd-burgundy font-bold text-base hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* EMAIL + SOCIAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* EMAIL CARD */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-jd-burgundy mb-5">
                  <Mail size={22} />
                </div>
                <h3 className="text-xl font-bold text-jd-black mb-1">Email Us</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Prefer email? Drop us a message and we'll get back to you within 24 hours.
                </p>
              </div>
              <a
                href={`mailto:${director.email}`}
                className="inline-flex items-center gap-2 text-jd-burgundy font-bold text-sm hover:underline group"
              >
                {director.email}
                <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* SOCIAL MEDIA CARD */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-jd-black mb-1">Follow Us</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Stay updated with performances, student spotlights, and studio news.
              </p>
              <div className="space-y-4">
                {socialChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.platform}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group hover:bg-gray-50 rounded-xl p-3 -mx-3 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center text-white flex-shrink-0`}>
                          {Icon ? <Icon size={16} /> : <TikTokIcon />}
                        </div>
                        <div>
                          <p className="font-bold text-jd-black text-sm leading-none mb-0.5">{channel.platform}</p>
                          <p className="text-gray-500 text-xs">{channel.handle}</p>
                        </div>
                      </div>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-jd-burgundy transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-jd-black mb-4">
            Ready to make <span className="text-jd-burgundy italic">music?</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you're a complete beginner or a seasoned player, there's a place for you at JD. Music Academy. Book your free trial today.
          </p>
          <a
            href={director.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-jd-burgundy text-white font-bold hover:bg-red-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book a Free Trial <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;


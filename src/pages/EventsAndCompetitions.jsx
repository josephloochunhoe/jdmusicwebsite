import React, { useState } from 'react';
import { Calendar, Music, ArrowRight, Sparkles, MapPin, X } from 'lucide-react';
import guitarbassImage from '../assets/events/guitarbass.png';

const eventsData = [
  {
    id: 1,
    title: "Guitar & Bass Group Lessons",
    type: "current",
    date: "Ongoing - July 2026",
    location: "Studio A, Main Campus",
    description: "Learn guitar or bass in a fun group setting! Master chords, basslines, and rhythm techniques while jamming your favorite songs alongside other musicians.",
    poster: guitarbassImage,
    posterPlaceholder: "bg-neutral-200",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBa7FlBb4pTJKufN-ntDKnF7wVL2-pj84AdVVGY5GBWT4PFA/viewform"
  }
];

const EventsAndCompetitions = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const currentEvents = eventsData.filter(event => event.type === 'current');
  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Soft Burgundy Blur Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-jd-burgundy/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-jd-black mb-6 tracking-tight">
            Events & <span className="text-jd-burgundy italic">Competitions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the thrill of live performance. Discover our ongoing workshops and prepare for upcoming showcases designed to elevate your musical journey.
          </p>
        </div>
      </section>

      {/* SECTION A: Happening Now / Ongoing */}
      <section className="py-24 bg-jd-burgundy text-white relative overflow-hidden">
        {/* Soft White Blur Background on Red */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12 border-b border-amber-100/20 pb-4">
            <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Happening Now</h2>
          </div>

          <div className="space-y-16">
            {currentEvents.length > 0 ? (
              currentEvents.map((event) => (
                <div key={event.id} className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 text-jd-black">
                  {/* Left: Large Visual Poster */}
                  <div 
                    className={`w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md ${event.posterPlaceholder || 'bg-gray-50'} ${event.poster ? 'cursor-pointer' : ''}`}
                    onClick={() => event.poster && setLightboxImage(event.poster)}
                  >
                    {event.poster ? (
                      <img src={event.poster} alt={event.title} className="w-full h-auto block hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full min-h-[300px] flex items-center justify-center bg-gray-100 text-gray-400">
                        <Music size={64} opacity={0.2} />
                      </div>
                    )}
                  </div>

                  {/* Right: Details & CTA */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <span className="inline-block px-4 py-1.5 bg-red-50 text-jd-burgundy rounded-full text-sm font-semibold tracking-wide uppercase">
                      Ongoing Registration
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-jd-black leading-tight">
                      {event.title}
                    </h3>

                    <div className="space-y-3 text-gray-600 font-medium">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-jd-burgundy" size={20} />
                        <span>{event.date}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-3">
                          <MapPin className="text-jd-burgundy" size={20} />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {event.description}
                    </p>

                    <div className="pt-6">
                      <a
                        href={event.regLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-jd-burgundy text-white rounded-full font-medium hover:bg-red-900 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
                      >
                        Register Now <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white/70 italic">No ongoing events at the moment.</p>
            )}
          </div>
        </div>
      </section>

      {/* SECTION B: Upcoming Events & Competitions */}
      <section className="py-24 bg-white text-jd-black relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-jd-burgundy/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-jd-black">Upcoming Events</h2>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group flex flex-col h-full">
                  {/* Poster Area if available */}
                  {event.poster && (
                    <div 
                      className="w-full bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100 flex-shrink-0 cursor-pointer"
                      onClick={() => setLightboxImage(event.poster)}
                    >
                      <img src={event.poster} alt={event.title} className="w-full h-auto block group-hover:scale-102 transition-transform duration-500" />
                    </div>
                  )}
                  {/* Content Area */}
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-3 py-1 bg-red-50 text-jd-burgundy rounded-full text-sm font-semibold uppercase">
                          Coming Soon
                        </span>
                        <Calendar className="text-gray-400 group-hover:text-jd-burgundy transition-colors" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-jd-black mb-3">{event.title}</h3>
                      <p className="text-jd-burgundy font-medium mb-4">{event.date}</p>
                      <p className="text-gray-600 mb-8 line-clamp-3">{event.description}</p>
                    </div>

                    {event.regLink && (
                      <a href={event.regLink} className="inline-flex items-center text-jd-burgundy font-semibold hover:text-red-900 transition-colors self-start mt-auto">
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE FALLBACK */
            <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 text-jd-burgundy">
                <Music size={32} />
              </div>
              <h3 className="text-2xl font-serif text-jd-black mb-4">More stages being built...</h3>
              <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
                Stay tuned! We are currently tuning up our next big stage event. Check back soon or follow our social media channels for early announcements.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* PREMIUM IMAGE LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 p-4"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-md hover:scale-105"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Enlarged poster"
              className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsAndCompetitions;
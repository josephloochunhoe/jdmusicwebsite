import React, { useState } from 'react';
import { Calendar, Music, Image, ArrowRight, ChevronRight, ChevronLeft, X, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import rockfestImage from '../assets/events/rockfest.jpeg';
import vdrumsImage from '../assets/events/vdrums.jpg';
import guitarbassImage from '../assets/events/guitarbass.png';
import { galleryCategories, galleryItems } from '../data/galleryData';

const videoTestimonials = [
  {
    id: 1,
    src: "https://drive.google.com/file/d/1d-xArepU9MD-ACsdrgy5-YL83rSRr7la/preview",
    name: "Hareesh",
    instrument: "Guitar",
    tenure: "⏱ 5 months with us"
  },
  {
    id: 2,
    src: "https://drive.google.com/file/d/1kLiZQxkLiU5O64jjdX-JxPA61qAo7a5W/preview",
    name: "Andrea",
    instrument: "Piano",
    tenure: "⏱ 5 months with us"
  },
  {
    id: 3,
    src: "https://drive.google.com/file/d/1aJEFAKeUM8KSZU2scc3-IwXH-yYE_n54/preview",
    name: "Alyssa",
    instrument: "Guitar",
    tenure: "⏱ 1 year with us"
  },
  {
    id: 4,
    src: "https://drive.google.com/file/d/12sIPRYxrMqOELbjJ_b9I6jAQgEmhI-GG/preview",
    name: "Kamal",
    instrument: "Drums",
    tenure: "⏱ 9 months with us"
  },
  {
    id: 5,
    src: "https://drive.google.com/file/d/1bvQYk7DzgKA_xNmo_-6MSYV_OfdxAV1E/preview",
    name: "Athaliya",
    instrument: "Guitar",
    tenure: "⏱ 2 years with us"
  },
  {
    id: 6,
    src: "https://drive.google.com/file/d/1ORgfANzL_HDM2FNJJe8-kjJGa8Y5bjOR/preview",
    name: "Sahnjaayz",
    instrument: "Drums",
    tenure: "⏱ 4 years with us"
  }
];

const TestimonialVideoCard = ({ src, name, instrument, tenure }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform flex flex-col h-full">
    <div className="relative aspect-video bg-black">
      <iframe
        src={src}
        title="Video Testimonial"
        allow="autoplay"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
    <div className="p-4 border-t border-gray-200 flex-grow">
      <p className="font-bold text-jd-black text-base mb-1">{name}</p>
      <p className="text-jd-burgundy text-xs font-medium uppercase tracking-widest mb-2">{instrument}</p>
      <span className="text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1">{tenure}</span>
    </div>
  </div>
);

// Component structured cleanly for Student Life & Gallery Features
const StudentLife = () => {
  // 1. COMPONENT STATE & SCREEN DYNAMICS
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const isPrevDisabled = currentTestimonial === 0;
  const isNextDisabled = currentTestimonial === videoTestimonials.length - 1;

  const nextTestimonial = () => {
    if (!isNextDisabled) {
      setCurrentTestimonial((prev) => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (!isPrevDisabled) {
      setCurrentTestimonial((prev) => prev - 1);
    }
  };

  // Filtering dynamic grid based on category state
  const filteredGalleryItems = galleryItems.filter(item => item.category === activeCategory);
  const displayedItems = filteredGalleryItems.slice(0, visibleCount);

  // Lightbox loop navigation helpers
  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredGalleryItems.findIndex(item => item.id === lightboxImage.id);
    if (currentIndex > 0) {
      setLightboxImage(filteredGalleryItems[currentIndex - 1]);
    } else {
      setLightboxImage(filteredGalleryItems[filteredGalleryItems.length - 1]);
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredGalleryItems.findIndex(item => item.id === lightboxImage.id);
    if (currentIndex < filteredGalleryItems.length - 1) {
      setLightboxImage(filteredGalleryItems[currentIndex + 1]);
    } else {
      setLightboxImage(filteredGalleryItems[0]);
    }
  };

  // Keyboard navigation listener
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      if (e.key === 'Escape') setLightboxImage(null);
      if (e.key === 'ArrowLeft') handlePrevImage(e);
      if (e.key === 'ArrowRight') handleNextImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, filteredGalleryItems]);

  // Dynamic row-multiple calculator
  const getRowSize = () => {
    if (typeof window === 'undefined') return 6;
    const width = window.innerWidth;
    if (width < 640) return 3;  // Mobile (1 col) -> 3 items initially / load increments
    if (width < 1024) return 4; // Tablet (2 col) -> 2 rows = 4 items
    return 6;                   // Desktop (3 col) -> 2 rows = 6 items
  };

  // Set initial visible count based on active screen size on mount and scroll to top
  React.useEffect(() => {
    setVisibleCount(getRowSize());
    window.scrollTo(0, 0);
  }, []);

  // Handle resize dynamically to preserve exact row grids
  React.useEffect(() => {
    const handleResize = () => {
      const rowSize = getRowSize();
      setVisibleCount((prev) => {
        const currentRows = Math.ceil(prev / rowSize);
        return Math.max(rowSize, currentRows * rowSize);
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Category Change & Reset to dynamic 2-row count
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(getRowSize());
  };

  // 2. CONTENT DATA MODELS
  const events = [
    {
      id: 1,
      title: "Guitar & Bass Group Lessons",
      type: "current",
      date: "Ongoing - July 2026",
      description: "Learn guitar or bass in a fun group setting! Master chords, basslines, and rhythm techniques while jamming your favorite songs alongside other musicians.",
      poster: guitarbassImage,
      regLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBa7FlBb4pTJKufN-ntDKnF7wVL2-pj84AdVVGY5GBWT4PFA/viewform"
    },
    {
      id: 2,
      title: "Rockfest 2026",
      type: "upcoming",
      date: "May - Sept 2026",
      description: "RockFest is an annual music competition where participants can choose to compete digitally (via video submission), physically (via live performance), or both.",
      poster: rockfestImage,
      regLink: "https://linktr.ee/RockFestMalaysia"
    },
    {
      id: 3,
      title: "V-Drums Championship 2026",
      type: "upcoming",
      date: "May - June 2026",
      description: "Unleash your rhythm, claim the spotlight! To Malaysian drummers, the V-Drums Championship has been the awaited contest of the year with great prizes to be won!",
      poster: vdrumsImage,
      regLink: "https://rolandap.com/2026/01/30/v-drums-championship-2026/"
    }
  ];

  return (
    <div className="w-full bg-white text-jd-black">
      {/* HERO HEADER */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-jd-burgundy/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-jd-black leading-tight">
            Student <span className="text-jd-burgundy italic">Life</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what our students are up to! From cool events to fun classroom moments, here's a peek into life at our academy.
          </p>
        </div>
      </section>

      {/* EVENTS BOARD SECTION */}
      <section className="py-24 bg-jd-burgundy text-white border-t border-red-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Concerts & <span className="italic text-white/90">Events</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
              Mark your calendar! Here is what's happening soon. Come hang out, jam, and support our amazing students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-white/10 shadow-sm rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow duration-300 text-jd-black"
              >
                {/* Visual Poster Area */}
                <div className="w-full md:w-2/5 h-80 md:h-auto bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0 relative overflow-hidden">
                  {event.poster ? (
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  ) : (
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-jd-burgundy/10 text-jd-burgundy flex items-center justify-center mx-auto mb-3">
                        {event.type === 'current' ? <Music size={28} className="animate-pulse" /> : <Calendar size={28} />}
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        {event.type === 'current' ? 'Happening Now' : 'Event Poster'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Area */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="mb-3.5">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border inline-block mb-2 ${event.type === 'current'
                        ? 'bg-red-50 text-jd-burgundy border-red-100'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        }`}>
                        {event.type}
                      </span>
                      <span className="text-xs font-bold text-jd-burgundy tracking-wider uppercase block">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-jd-black mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  {/* Conditional Action Button */}
                  <div>
                    <a
                      href={event.regLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-jd-burgundy text-white text-sm font-bold hover:bg-red-900 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      {event.type === 'current' ? 'Join Us Now' : 'Register Now'} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY FILTER BAR & DYNAMIC IMAGE GRID */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-jd-black">
              Moments of <span className="italic text-jd-burgundy">Inspiration</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
              Flip through our favorite moments! Take a look at our classes, stage performances, and the overall vibe at our Kajang studio.
            </p>
          </div>

          {/* DYNAMIC RESPONSIVE FILTER BAR */}
          {/* Mobile dropdown selector */}
          <div className="block md:hidden mb-8">
            <label htmlFor="category-select" className="sr-only">Select Category</label>
            <select
              id="category-select"
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full bg-white border border-gray-200 text-jd-black rounded-2xl px-4 py-3.5 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-jd-burgundy cursor-pointer"
            >
              {galleryCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop/Tablet Horizontal layout */}
          <div
            className="hidden md:flex items-center justify-center flex-wrap gap-2.5 pb-6 mb-12 border-b border-gray-200/60"
          >
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                    ? 'bg-jd-burgundy text-white border border-jd-burgundy shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* DYNAMIC IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => item.src && setLightboxImage(item)}
                className={`group relative bg-white border border-jd-burgundy shadow-sm rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-auto ${item.src ? 'cursor-pointer' : ''
                  }`}
              >
                {/* Visual Area */}
                <div className="relative overflow-hidden w-full h-auto flex-shrink-0">
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-gray-100/50 relative">
                      <div className="w-14 h-14 rounded-full bg-jd-burgundy/5 text-jd-burgundy flex items-center justify-center mb-3">
                        <Image size={28} className="opacity-80" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Moment Capture
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty Grid State (Fallback) */}
          {filteredGalleryItems.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl p-8">
              <div className="w-16 h-16 rounded-full bg-gray-50 text-gray-300 flex items-center justify-center mx-auto mb-4">
                <Image size={32} />
              </div>
              <h3 className="text-lg font-bold text-jd-black mb-1">No Moments Found</h3>
              <p className="text-sm text-gray-500">
                Check back soon! We are actively adding memories to the "{activeCategory}" library.
              </p>
            </div>
          )}

          {/* LAZY LOAD "VIEW MORE" BUTTON */}
          {visibleCount < filteredGalleryItems.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + getRowSize())}
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-white border border-gray-200 text-jd-black text-sm font-bold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                View More Media
              </button>
            </div>
          )}
        </div>
      </section>

      {/* STUDENT TESTIMONIALS SECTION */}
      <section className="py-24 bg-jd-burgundy text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              See Our Students <span className="text-red-200 italic">in Action</span>
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Real video stories from the students who make our studio feel like home.
            </p>
          </div>

          {/* Desktop View: 2 Video Iframes */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((t) => (
              <TestimonialVideoCard
                key={t.id}
                src={t.src}
                name={t.name}
                instrument={t.instrument}
                tenure={t.tenure}
              />
            ))}
          </div>

          {/* Mobile View: Carousel */}
          <div className="block md:hidden">
            <div className="mb-8">
              <TestimonialVideoCard
                key={videoTestimonials[currentTestimonial].id}
                src={videoTestimonials[currentTestimonial].src}
                name={videoTestimonials[currentTestimonial].name}
                instrument={videoTestimonials[currentTestimonial].instrument}
                tenure={videoTestimonials[currentTestimonial].tenure}
              />
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevTestimonial}
                disabled={isPrevDisabled}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isPrevDisabled
                  ? 'bg-white/10 text-white/30 cursor-not-allowed border border-white/10'
                  : 'bg-white border border-transparent text-jd-black hover:bg-gray-100 shadow-sm'
                  }`}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isNextDisabled}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isNextDisabled
                  ? 'bg-white/10 text-white/30 cursor-not-allowed border border-white/10'
                  : 'bg-white border border-transparent text-jd-black hover:bg-gray-100 shadow-sm'
                  }`}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL PAGE ACTION CTA */}
      <section className="py-24 bg-white text-jd-black border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-jd-black mb-6">
            Become Part of <span className="text-jd-burgundy italic">Our Success Stories</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Want to make some music and cool memories with us? Sign up for a class or drop us a message to get started!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-jd-burgundy text-white font-bold hover:bg-red-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Register Now <ArrowRight size={18} />
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-jd-black font-bold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
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

          {/* Left Chevron Navigation */}
          {filteredGalleryItems.length > 1 && (
            <button
              onClick={handlePrevImage}
              className="absolute left-4 md:left-8 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-md hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Right Chevron Navigation */}
          {filteredGalleryItems.length > 1 && (
            <button
              onClick={handleNextImage}
              className="absolute right-4 md:right-8 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-md hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Main Image Container */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentLife;

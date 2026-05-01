import React, { useState } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
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
  }
];

const TestimonialCard = ({ src, name, instrument, tenure }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
    <div className="relative pt-[56.25%] bg-black">
      <iframe
        src={src}
        title="Testimonial"
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


const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const isPrevDisabled = currentTestimonial === 0;
  const isNextDisabled = currentTestimonial === testimonials.length - 1;

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

  return (
    <div className="w-full bg-white text-jd-black">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 text-jd-black">
            BRINGING YOUR <br /> <span className="italic text-jd-burgundy">MUSIC INTO FOCUS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover your true potential at JD. Music Academy. We provide world-class instruction for students of all ages and skill levels.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-jd-burgundy text-white text-lg font-bold hover:bg-red-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Register Now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-jd-burgundy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Amplify your talent, <span className="italic">refine your craft</span></h2>
          <p className="max-w-3xl mx-auto text-lg text-white/90 mb-10 leading-relaxed">
            JD. Music Academy is a premier institution helping aspiring artists, dedicated hobbyists, and creative minds grow through authentic, comprehensive training.
          </p>
          <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-jd-burgundy font-bold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Discover About Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Student Life (Testimonials & Videos) Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-jd-burgundy/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-16">
            <h2 className="text-xs font-bold tracking-widest text-jd-burgundy mb-4 uppercase">Testimonials & Community</h2>
            <h2 className="text-4xl md:text-5xl font-serif text-jd-black">Experience <span className="italic">Student Life</span></h2>
          </div>

          {/* Desktop View: 3 Video Iframes */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                src={t.src}
                name={t.name}
                instrument={t.instrument}
                tenure={t.tenure}
              />
            ))}
          </div>

          {/* Mobile View: Carousel */}
          <div className="block md:hidden mb-12">
            <div className="mb-8">
              <TestimonialCard
                key={testimonials[currentTestimonial].id}
                src={testimonials[currentTestimonial].src}
                name={testimonials[currentTestimonial].name}
                instrument={testimonials[currentTestimonial].instrument}
                tenure={testimonials[currentTestimonial].tenure}
              />
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevTestimonial}
                disabled={isPrevDisabled}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isPrevDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-200 text-jd-black hover:bg-gray-50'
                  }`}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isNextDisabled}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isNextDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-200 text-jd-black hover:bg-gray-50'
                  }`}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <Link to="/student-life" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-jd-burgundy text-white font-bold hover:bg-red-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Explore Full Student Life <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Pricing & FAQ Section */}
      <section className="py-24 bg-jd-burgundy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xs font-bold tracking-widest text-white/70 mb-4 uppercase">Investment</h2>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Tuition & <span className="italic">Common Questions</span></h2>
          <p className="max-w-3xl mx-auto text-lg text-white/90 mb-10 leading-relaxed">
            We offer competitive pricing and flexible packages to suit your goals. Have questions? We have answers.
          </p>
          <Link to="/pricing-faq" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-jd-burgundy font-bold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            View Pricing & FAQ <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic text-jd-black mb-6">Ready to play?</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Get in touch with us today to schedule your first lesson or learn more about our programs.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-jd-burgundy text-white font-bold hover:bg-red-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Contact Us Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, Heart, Music, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import jeevanImage from '../assets/portraits/jeevan.png';
import achshaImage from '../assets/portraits/achsha.jpg';
import elishaImage from '../assets/portraits/elisha.png';
import adrianImage from '../assets/portraits/adrian.png';
import shireenImage from '../assets/portraits/shireen.jpg';
import boazImage from '../assets/portraits/boaz.png';
import angelineImage from '../assets/portraits/angeline.jpg';
import aidilImage from '../assets/portraits/aidil.jpg';
import joshuaImage from '../assets/portraits/joshua.jpg';

// Reusable Sub-Component for Leadership / Core Members
const CoreMemberCard = ({ name, specialization, bio, image }) => (
  <div className="bg-white border border-gray-100 shadow-md rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 items-center h-full hover:-translate-y-1 transition-transform duration-300">
    <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-jd-burgundy/10 text-jd-burgundy">
          <Music size={32} />
        </div>
      )}
    </div>
    <div className="md:col-span-2 flex flex-col justify-center">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-jd-burgundy mb-1">
        {Array.isArray(specialization) ? specialization.join(' & ') : specialization}
      </span>
      <h3 className="text-lg sm:text-2xl font-serif text-jd-black mb-1 sm:mb-4">{name}</h3>
      <p className="text-gray-600 leading-relaxed text-xs sm:text-base">{bio}</p>
    </div>
  </div>
);

// Reusable Sub-Component for Individual Instructors
const TeacherCard = ({ name, specialization, bio, image }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 h-full">
    <div className="aspect-square bg-gray-50 relative overflow-hidden flex-shrink-0">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <Music size={40} />
        </div>
      )}
    </div>
    <div className="p-5 flex-grow flex flex-col">
      <div className="flex flex-wrap gap-2 mb-2">
        {(Array.isArray(specialization) ? specialization : [specialization]).map((spec, index) => (
          <span key={index} className="inline-block self-start text-[10px] font-bold tracking-wider text-jd-burgundy bg-red-50 rounded-full px-2.5 py-1 uppercase">
            {spec}
          </span>
        ))}
      </div>
      <h4 className="text-xl font-bold text-jd-black mb-3">{name}</h4>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">{bio}</p>
    </div>
  </div>
);

const About = () => {
  const [currentCore, setCurrentCore] = useState(0);
  const [currentTeacher, setCurrentTeacher] = useState(0);

  // Placeholder array structure for Core Members / Founders
  const coreMembers = [
    {
      name: "Jeevan Devamarcus",
      specialization: "Director & Founder",
      bio: "So I started JD.Music to offer something different — a more personal, performance-based approach that helps students fall in love with music while still building solid skills. It’s about making music fun, accessible, and meaningful, whether you’re a complete beginner or someone wanting to grow in your gift. That’s the heart behind JD.music: to nurture passion, not pressure.",
      image: jeevanImage
    },
    {
      name: "Achsha Avinia",
      specialization: "SocMed Marketing Lead",
      bio: "As the Social Media Lead at JD.Music, I'm kinda the face behind the posts and stories you see. I’m all about turning vibes into visuals and making sure our page feels just as fun and real as our jam sessions. Whether it's hyping up our students, sharing BTS moments or justt spreading the love for music, I’m here to keep it fresh, fun and totally us. I chose to be part of JD.Music because I truly believe in using music and social media to inspire, connect and celebrate every student’s growth.",
      image: achshaImage
    },
    {
      name: "Elisha",
      specialization: "Creative Media Design Lead",
      bio: "Hey! Im Elisha, and here at JD.Music I handle all things visual — advertising, content creation, and making sure our media actually feels as good as it looks. I love turning ideas into visuals that grab attention and tell a story. Whether it’s designing, editing, or just finding new ways to be creative, I’m all about making content that connects with people.",
      image: elishaImage
    }
  ];

  // Placeholder array structure for Teachers
  const teachers = [
    {
      name: "Adrian",
      specialization: ["Guitar"],
      bio: "I'm happy to be part of JD.Music as a music teacher. What drew me in was the opportunity to offer something different, not just the traditional teaching and learning process, but a full, immersive experience. I was especially intrigued by the performance-based teaching approach, which aligns perfectly with my passion for making music come alive. I also value building genuine, friendly relationships with my students, creating an environment where they feel inspired, confident, and connected through music.",
      image: adrianImage
    },
    {
      name: "Shireen Nisha",
      specialization: ["Vocal"],
      bio: "Whether you're a shy beginner, a curious kid, or someone rediscovering music later in life, I offer vocal coaching that's fun, encouraging, and rooted in solid technique. I work with students of all ages, from little ones just finding their pitch to adults who just want to sing with confidence (and maybe impress at karaoke night). My goal? To make singing feel natural, joyful, and empowering. No pressure, no judgment, just good vibes and steady progress. Ready to warm up those vocal cords? Let’s make some noise on key, of course.",
      image: shireenImage
    },
    {
      name: "Boaz Ezekiel",
      specialization: ["Drums", "Guitar"],
      bio: "Hi! I’m a 20-year-old student who’s super passionate about music, especially drums and guitar. When I’m not studying, you’ll find me jamming, creating beats, or teaching others how to play. I love sharing what I know and helping others enjoy music as much as I do. Teaching has become one of my favorite things. It’s fun, rewarding, and keeps the music alive!",
      image: boazImage
    },
    {
      name: "Angeline Phoebe",
      specialization: ["Piano", "Keyboard"],
      bio: "There’s something special about finding your way around the keys especially when turning simple notes into music that feels personal and alive. Whether you’re a complete beginner or returning after a break, we’ll move at a pace that feels comfortable and encouraging. With a balance of technique, creativity, and expression, you’ll build real skills while enjoying the process. Each lesson is a step toward making music that truly feels like yours.",
      image: angelineImage
    },
    {
      name: "Aidil",
      specialization: ["Guitar", "Bass"],
      bio: "I am a dedicated and versatile music instructor specializing in guitar, bass, and vocals, with a strong performance background and a diverse repertoire spanning multiple genres. My teaching philosophy combines technical foundation with artistic expression, ensuring that each student not only improves their skills but also builds confidence and a genuine love for music. Whether preparing students for performances, auditions, or personal enrichment, I tailor my lessons to meet individual goals and learning styles.",
      image: aidilImage
    },
    {
      name: "Johanan Joshua",
      specialization: ["Piano", "Guitar", "Bass"],
      bio: "Hello everyone! Meet the person in the picture above, a Software Engineering graduate who is now carving out a career in IT sales. My true passion, however, lies in music. I began learning the piano at just 5 years old and has now been playing for 19 years. Driven by a thirst for more, I went on to learn other instruments like the drums, guitar, and bass. My deep love for music is matched by my desire to share knowledge and inspire others. Teaching and adding value to people's lives has become my mission. So come along and join me on this exciting musical journey!",
      image: joshuaImage
    }
  ];

  const nextCore = () => {
    setCurrentCore((prev) => (prev + 1) % coreMembers.length);
  };
  const prevCore = () => {
    setCurrentCore((prev) => (prev - 1 + coreMembers.length) % coreMembers.length);
  };

  const nextTeacher = () => {
    setCurrentTeacher((prev) => (prev + 1) % teachers.length);
  };
  const prevTeacher = () => {
    setCurrentTeacher((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  return (
    <div className="w-full bg-white text-jd-black">
      {/* Page Header (Minimalistic Overview) */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-jd-black leading-tight">
            About <span className="text-jd-burgundy italic">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Vibrant, performance-driven music education that builds lifelong connections and fuels creative growth.
          </p>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-24 bg-jd-burgundy text-white border-t border-red-900/10">
        <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-xs font-bold tracking-widest text-white/80 uppercase mb-3">Our Story</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">How We Make Music <span className="text-amber-100 italic">Different</span></h3>
          <p className="text-base md:text-lg text-white/95 leading-relaxed text-center max-w-3xl mx-auto">
            Founded in 2020, JD.Music Academy is built on a vibrant, performance-based learning approach. Our hands-on classes make mastering instrument fundamentals enjoyable and accessible by teaching students through the songs they love. With personalized attention from skilled instructors, we prioritize close relationships that ensure every student feels inspired, supported, and confident on their musical journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-white text-jd-black border border-white/10 shadow-sm">
              <h3 className="text-2xl font-serif text-jd-burgundy mb-3">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                To deliver an engaging, performance-driven music education that fosters strong student-teacher connections, making learning both enjoyable and effective.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white text-jd-black border border-white/10 shadow-sm">
              <h3 className="text-2xl font-serif text-jd-burgundy mb-3">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                To cultivate a community of skilled, passionate musicians who thrive through supportive mentorship and a love for performing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Leadership Section */}
      <section className="py-24 bg-white text-jd-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-xs font-bold tracking-widest text-jd-burgundy uppercase mb-2">Leadership</h2>
            <h2 className="text-3xl md:text-4xl font-serif text-jd-black">Our Core Team</h2>
          </div>

          {/* Desktop View: Vertical Stack */}
          <div className="hidden md:flex md:flex-col gap-8">
            {coreMembers.map((member, i) => (
              <CoreMemberCard key={i} {...member} />
            ))}
          </div>

          {/* Mobile View: Infinite Carousel */}
          <div className="block md:hidden">
            <div className="mb-6 grid grid-cols-1">
              {coreMembers.map((member, i) => (
                <div
                  key={i}
                  className={`col-start-1 row-start-1 transition-opacity duration-300 ${i === currentCore ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                    } h-full`}
                >
                  <CoreMemberCard {...member} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevCore}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-jd-black hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Previous Team Member"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextCore}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-jd-black hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Next Team Member"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid Section */}
      <section className="py-24 bg-jd-burgundy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-xs font-bold tracking-widest text-white/80 uppercase mb-2">Meet the Team</h2>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Our <span className="text-amber-100 italic">Passionate</span> Instructors</h2>
          </div>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, i) => (
              <TeacherCard key={i} {...teacher} />
            ))}
          </div>

          {/* Mobile View: Infinite Carousel */}
          <div className="block md:hidden">
            <div className="mb-6 grid grid-cols-1">
              {teachers.map((teacher, i) => (
                <div
                  key={i}
                  className={`col-start-1 row-start-1 transition-opacity duration-300 ${i === currentTeacher ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                    } h-full`}
                >
                  <TeacherCard {...teacher} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevTeacher}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous Instructor"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTeacher}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Next Instructor"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Play CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-jd-black mb-6">
            Ready to <span className="text-jd-burgundy italic">Start Your Journey?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you want to master guitar, piano, drums, or vocals, we have a spot waiting for you. Get in touch with us today or secure your lessons!
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
    </div>
  );
};

export default About;

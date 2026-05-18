import React, { useState } from 'react';
import { MapPin, Home, Users, Building, GraduationCap, Baby, HeartHandshake, Mic2, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    id: 1,
    question: "How long does it take to learn an instrument?",
    answer: "There is no set answer of how long it takes to learn an instrument. With regular practice a basic level of playing can be accomplished in a few months. Most of our students take lessons on a long term basis because they want to be constantly improving and they find the lessons enjoyable."
  },
  {
    id: 2,
    question: "Should I bring my own instrument to lessons?",
    answer: "No, just come as you are, but come ready to learn! At JD.Music Academy, we've got you covered with all the essential equipment for your lessons. While having your own instrument for home practice is encouraged, there's no need to bring it with you each week. Simply show up with an open mind and a passion for music, we'll take care of the rest."
  },
  {
    id: 3,
    question: "Will I need to purchase any additional materials?",
    answer: "Most teachers require a book for their students to use. In addition, there may be other accessories the student will want in order to progress within his/her studies (e.g., capo, tuner, strap, songbooks)."
  },
  {
    id: 4,
    question: "How long does each class last? How many sessions do you have?",
    answer: "We have two time slots available: 30–40 minutes and 1 hour classes. Lessons are held once a week, with flexible scheduling options for both individual and group sessions."
  },
  {
    id: 5,
    question: "Where are the classes based?",
    answer: "Our classes are held at our home-based studio in Kajang and also at a partner location in Sri Hartamas, KL. We also offer online lessons and limited in-house sessions (additional charges may apply depending on location)."
  },
  {
    id: 6,
    question: "What types of lessons do you provide?",
    intro: "We offer fun, performance-based lessons tailored to your style and pace. Perfect for total beginners or those looking to level up:",
    answer: [
      "Guitar (Acoustic & Electric)",
      "Drums & Cajon",
      "Vocals",
      "Bass",
      "Ukulele"
    ]
  },
  {
    id: 7,
    question: "What packages do you offer?",
    intro: "We offer tailored paths including:",
    answer: [
      "Individual & Group Lessons (Kajang, Sri Hartamas, or Online)",
      "School & Kindergarten Programs (weekly enrichment)",
      "Church Music Lessons (worship team setups)",
      "Interactive Masterclass Workshops"
    ]
  },
  {
    id: 8,
    question: "What other services do you support?",
    answer: "Beyond education, JD.Music supports Live Band Events, providing heart-led performances for special functions, fundraisers, and community programs."
  }
];

const PricingFaq = () => {
  const [activeView, setActiveView] = useState('individual');
  const [openId, setOpenId] = useState(1);

  const individualPlans = [
    {
      location: "Kajang Studio & Online",
      icon: MapPin,
      rates: [
        "RM 35 per session (30 mins)",
        "RM 50 per session (1 hr)"
      ],
      note: "Our primary base for immersive in-person learning, plus flexible online options."
    },
    {
      location: "Sri Hartamas, KL",
      icon: MapPin,
      rates: [
        "RM 50 per session (30 mins)",
        "RM 100 per session (1 hr)"
      ],
      note: "Conveniently located lessons for students based in the Kuala Lumpur area."
    },
    {
      location: "In-House Lessons",
      icon: Home,
      rates: [
        "RM 35 per session (30 mins)",
        "RM 50 per session (1 hr)"
      ],
      note: "Learn comfortably in your own home. Within Klang Valley."
    }
  ];

  const institutionalPlans = [
    {
      programName: "Group Lessons",
      baselineRate: "RM 35/student per session (1 hr)",
      minimumStudents: "Min 3 students",
      icon: Users,
      description: "Learn and grow together in a fun, collaborative group environment. Within Klang Valley"
    },
    {
      programName: "Church Music Lessons",
      baselineRate: "From RM 150/month (Weekly 1-hr session)",
      minimumStudents: "Min 3 students",
      icon: Building,
      description: "Perfect for worship teams or youth groups looking to elevate their sound and coordination."
    },
    {
      programName: "Schools & Private Institutions",
      baselineRate: "From RM 200/month (Weekly 1-hr session)",
      minimumStudents: "Min 5 students",
      icon: GraduationCap,
      description: "Ideal for co-curricular and enrichment programs."
    },
    {
      programName: "Preschool Music Programs",
      baselineRate: "From RM 120/session",
      minimumStudents: "Flexible",
      icon: Baby,
      description: "Includes sing-alongs & movement-based play for early development."
    },
    {
      programName: "Community Centers & NGOs",
      baselineRate: "From RM 250/workshop",
      minimumStudents: "Flexible",
      icon: HeartHandshake,
      description: "Flexible outreach packages, donation-based options & sponsor-friendly rates."
    },
    {
      programName: "Specialized Workshops",
      baselineRate: "From RM 200 onwards",
      minimumStudents: "Custom",
      icon: Mic2,
      description: "Perfect for themed events, schools, churches, and community programs."
    }
  ];

  return (
    <div className="w-full bg-white text-jd-black">
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-jd-burgundy/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-jd-black leading-tight">
            Pricing & <span className="text-jd-burgundy italic">FAQ</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find the right plan for your musical journey and get answers to common questions about our academy.
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 bg-jd-burgundy border-t border-jd-burgundy relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-xs font-bold tracking-widest text-red-200/90 uppercase mb-3">Tuition & Packages</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Transparent, Flexible Rates
            </h3>
            <p className="text-red-100/80 max-w-2xl mx-auto leading-relaxed">
              At JD.Music, we offer flexible, engaging music lessons for everyone of all ages! Available within Klang Valley, whether at home, online, in preschools, schools, or community spaces.
            </p>
          </div>

          {/* TOGGLE BAR */}
          <div className="flex justify-center mb-16 relative z-10">
            <div className="inline-flex bg-white/10 border border-white/20 rounded-full p-1.5 shadow-sm backdrop-blur-sm">
              <button
                onClick={() => setActiveView('individual')}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeView === 'individual'
                  ? 'bg-white text-jd-burgundy shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                Individual Lessons
              </button>
              <button
                onClick={() => setActiveView('institutional')}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeView === 'institutional'
                  ? 'bg-white text-jd-burgundy shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                Group & Programs
              </button>
            </div>
          </div>

          {/* VIEW RENDERER */}
          <div className="min-h-[400px] relative z-10">
            {activeView === 'individual' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {individualPlans.map((plan, idx) => {
                  const Icon = plan.icon;
                  return (
                    <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-jd-burgundy mb-6">
                        <Icon size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-jd-black mb-2">{plan.location}</h4>
                      <p className="text-sm text-gray-500 mb-8 flex-grow">{plan.note}</p>
                      <div className="space-y-4 mb-4">
                        {plan.rates.map((rate, rIdx) => (
                          <div key={rIdx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-jd-burgundy mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-bold text-jd-black">{rate}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {institutionalPlans.map((plan, idx) => {
                  const Icon = plan.icon;
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-jd-burgundy flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-jd-black mb-1">{plan.programName}</h4>
                        {plan.minimumStudents && plan.minimumStudents !== "Flexible" && plan.minimumStudents !== "Custom" && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-jd-burgundy bg-red-50 border border-red-100 px-2.5 py-1 rounded-full mb-2">
                            {plan.minimumStudents}
                          </span>
                        )}
                        <p className="text-jd-burgundy font-bold text-sm mb-2">{plan.baselineRate}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{plan.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-12 text-center relative z-10">
            <p className="text-sm text-red-200/70 italic mb-8">
              *Additional travel charges apply based on distance from base studio locations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-jd-burgundy font-bold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us to Inquire <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-jd-burgundy uppercase mb-3">Have Questions?</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-jd-black">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-bold text-base md:text-lg transition-colors duration-200 ${openId === item.id ? 'text-jd-burgundy' : 'text-jd-black'}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-jd-burgundy transition-transform duration-300 ${
                      openId === item.id ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      {Array.isArray(item.answer) ? (
                        <div>
                          {item.intro && (
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3">{item.intro}</p>
                          )}
                          <ul className="space-y-2">
                            {item.answer.map((point, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-jd-burgundy mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm md:text-base">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.answer}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-24 bg-jd-burgundy text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Start Your <span className="text-amber-100 italic">Musical Journey?</span>
          </h2>
          <p className="text-base md:text-lg text-red-100/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're a beginner picking up your first instrument or looking to level up your skills, we have a plan tailored just for you. Let's make music together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-jd-burgundy font-bold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight size={18} />
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Inquire About Rates <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingFaq;

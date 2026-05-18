import React, { useState } from 'react';
import { MapPin, Home, Users, Building, GraduationCap, Baby, HeartHandshake, Mic2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingFaq = () => {
  const [activeView, setActiveView] = useState('individual');

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
              Transparent, Flexible <span className="italic text-amber-100">Rates</span>
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
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-jd-burgundy uppercase mb-3">Got Questions?</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-jd-black">Frequently Asked <span className="italic text-jd-burgundy">Questions</span></h3>
          </div>
          <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
            <p className="text-gray-600">Common questions about enrollment, scheduling, and policies will go here.</p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-24 bg-jd-burgundy text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-red-200/90 tracking-widest uppercase block mb-3">
            Get Started Today
          </span>
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

import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Analytics from './components/Analytics';
import NotFound from './pages/NotFound';

const lazyPages = {
  Home: lazy(() => import('./pages/Home')),
  About: lazy(() => import('./pages/About')),
  StudentLife: lazy(() => import('./pages/StudentLife')),
  EventsAndCompetitions: lazy(() => import('./pages/EventsAndCompetitions')),
  PricingFaq: lazy(() => import('./pages/PricingFaq')),
  Contact: lazy(() => import('./pages/Contact')),
};

// Shown briefly while a page's code loads on a fresh/direct visit.
// Kept minimal and on a white background so there is no flash of an
// unstyled or mismatched-color screen while the chunk downloads.
function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-4 border-jd-burgundy/20 border-t-jd-burgundy rounded-full animate-spin" />
    </div>
  );
}

// Helper component to restore scroll position to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App({ routeComponents = lazyPages }) {
  const { Home, About, StudentLife, EventsAndCompetitions, PricingFaq, Contact } = routeComponents;
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA when scrolled past 80vh (approximate height of hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO />
      <Analytics />
      <ScrollToTop />
      <div className="min-h-screen bg-white text-jd-black font-sans selection:bg-jd-burgundy selection:text-white flex flex-col">
        <Navbar />
        
        {/* Main content wrapper */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/events-competitions" element={<EventsAndCompetitions />} />
              <Route path="/pricing-faq" element={<PricingFaq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* Floating CTA */}
        <a 
          href="https://app.aoneschools.com/public/school/U2FsdGVkX199XQhZvkiBsMOriWUIFAJsDxv0wNjtOi1dpgzrFQSLN%252FnTCm9fokJr/online-student-registration" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`fixed bottom-6 md:fixed md:bottom-24 right-6 z-50 px-8 py-4 rounded-full bg-jd-black text-white font-bold shadow-2xl border-2 border-white/20 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 ${
            showFloatingCTA ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          Register Now
        </a>
      </div>
    </>
  );
}

export default App;

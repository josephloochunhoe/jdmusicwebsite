import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Analytics from './components/Analytics';
import Motion from './components/Motion';
import NotFound from './pages/NotFound';
import { TRIAL_URL } from './lib/contact';
import { ChatIcon } from './components/icons';

const lazyPages = {
  Home: lazy(() => import('./pages/Home')),
  About: lazy(() => import('./pages/About')),
  StudentLife: lazy(() => import('./pages/StudentLife')),
  EventsAndCompetitions: lazy(() => import('./pages/EventsAndCompetitions')),
  PricingFaq: lazy(() => import('./pages/PricingFaq')),
  Contact: lazy(() => import('./pages/Contact')),
};

// Shown briefly while a page's code loads on client-side navigation.
function PageLoader() {
  return (
    <div className="page-loader" role="status">
      <span className="eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
      <span className="sr-only">Loading</span>
    </div>
  );
}

// Scroll to the top on a new page, or to the #section named in the link
// (waiting briefly for a lazily loaded page to render it).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Instant jumps: the page-wide smooth scrolling is for in-page links only.
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }
    let frame;
    let tries = 0;
    const find = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
        if (target.tabIndex < 0 && !target.matches('a, button, input, textarea, select')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      } else if (tries++ < 120) frame = requestAnimationFrame(find);
    };
    find();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

// Floating "Book a trial" bar on phones. It hides while a large inline trial button is on screen.
function MobileTrialBar() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const visible = new Set();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setHidden(visible.size > 0);
    });
    const observeAll = () => document.querySelectorAll('[data-inline-cta]').forEach(el => io.observe(el));
    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);
  return (
    <a className={`mobile-cta${hidden ? ' is-hidden' : ''}`} href={TRIAL_URL} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined} aria-hidden={hidden || undefined}>
      <ChatIcon /> Book a trial lesson
    </a>
  );
}

function App({ routeComponents = lazyPages }) {
  const { Home, About, StudentLife, EventsAndCompetitions, PricingFaq, Contact } = routeComponents;

  return (
    <>
      <SEO />
      <Analytics />
      <ScrollManager />
      <Motion />
      <div className="site">
        <Navbar />
        <main id="main" tabIndex="-1">
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
        <MobileTrialBar />
      </div>
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createAnalytics, trialClick } from '../lib/analytics';
import { SITE_URL, pages, notFound, normalizePath } from '../site';

// One tracker also prevents StrictMode effect replays from counting twice.
const analytics = createAnalytics({
  browser: typeof window === 'undefined' ? null : window,
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-3SHJQNBENP',
  siteUrl: SITE_URL,
  enabled: import.meta.env.PROD,
});
export default function Analytics() {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);
  useEffect(() => {
    analytics.pageView(path, (pages[path] || notFound).title);
  }, [path]);

  // Count clicks on any "book a trial" WhatsApp link, wherever it sits on the site.
  // `cta_location` comes from the nearest [data-cta] wrapper; the page is recorded by GA itself.
  useEffect(() => {
    const onClick = event => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      const trial = link && trialClick(link.href);
      if (!trial) return;
      analytics.event('book_trial_click', {
        cta_location: link.closest('[data-cta]')?.dataset.cta || 'other',
        instrument: trial.instrument,
      });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}

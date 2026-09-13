import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createAnalytics } from '../lib/analytics';
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
  return null;
}

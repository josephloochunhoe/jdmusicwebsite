import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import StudentLife from './pages/StudentLife';
import EventsAndCompetitions from './pages/EventsAndCompetitions';
import PricingFaq from './pages/PricingFaq';
import Contact from './pages/Contact';
export { SITE_URL, pages } from './site';

// Resolve pages eagerly only in the build process. The browser keeps its
// lazy chunks, while static HTML never depends on streaming replacement scripts.
const routeComponents = { Home, About, StudentLife, EventsAndCompetitions, PricingFaq, Contact };
export function render(url) {
  let html = renderToString(
    <StaticRouter location={url}><App routeComponents={routeComponents} /></StaticRouter>,
  );
  const head = [];
  // React 19 emits hoistable metadata in a fragment render. Move these native
  // tags into the document head; hydration recognizes them there.
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*>/g, tag => {
    head.push(tag);
    return '';
  });
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, tag => {
    head.push(tag);
    return '';
  });
  const lcp = html.match(/<img\b[^>]*\bfetchpriority="high"[^>]*>/i);
  const lcpSrc = lcp?.[0].match(/\bsrc="([^"]+)"/);
  if (lcpSrc) head.unshift(`<link rel="preload" as="image" href="${lcpSrc[1]}" fetchpriority="high">`);
  return { html, head: head.join('\n') };
}

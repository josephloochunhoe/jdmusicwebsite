import { useEffect } from 'react';

// Staggered scroll reveals for every [data-reveal] element, including ones added by later route changes.
// Content is fully visible in the static HTML; this only runs after hydration and never with reduced motion.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const appRoot = document.getElementById('root');
    if (!appRoot || !('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const show = el => el.setAttribute('data-shown', '');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { show(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    const seen = new WeakSet();
    const scan = initial => {
      appRoot.querySelectorAll('[data-reveal]').forEach(el => {
        if (seen.has(el)) return;
        seen.add(el);
        // Elements already on screen at first load stay put; everything else reveals as it arrives.
        const box = initial && el.getBoundingClientRect();
        if (box && box.top < window.innerHeight && box.bottom > 0) show(el);
        else io.observe(el);
      });
    };
    scan(true);
    root.classList.add('motion');

    const mo = new MutationObserver(() => scan(false));
    mo.observe(appRoot, { childList: true, subtree: true });

    // Safety net: anything already scrolled past (fast scrolling, anchor jumps, throttled observers)
    // is shown on the next scroll, so content can never stay hidden.
    const onScroll = () => {
      appRoot.querySelectorAll('[data-reveal]:not([data-shown])').forEach(el => {
        const box = el.getBoundingClientRect();
        if (box.height && box.top < window.innerHeight) { show(el); io.unobserve(el); }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      mo.disconnect();
      io.disconnect();
      root.classList.remove('motion');
    };
  }, []);
  return null;
}

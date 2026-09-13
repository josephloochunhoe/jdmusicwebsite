const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'];

// Avoid sending arbitrary query parameters or fragments to analytics.
export function analyticsUrl(value, base, includeCampaign = false) {
  try {
    const url = new URL(value, base);
    if (!['https:', 'http:'].includes(url.protocol)) return '';
    const query = new URLSearchParams();
    if (includeCampaign) {
      for (const key of campaignKeys) {
        if (url.searchParams.has(key)) query.set(key, url.searchParams.get(key));
      }
    }
    return `${url.origin}${url.pathname}${query.size ? `?${query}` : ''}`;
  } catch {
    return '';
  }
}

export function createAnalytics({ browser, measurementId, siteUrl, enabled }) {
  let previousPath;
  let previousUrl;
  let initialized = false;
  return {
    pageView(path, title) {
      if (!enabled || !browser || !/^G-[A-Z0-9]+$/.test(measurementId || '')) return;
      const siteHost = new URL(siteUrl).hostname.replace(/^www\./, '');
      if (browser.location.hostname.replace(/^www\./, '') !== siteHost) return;
      if (path === previousPath) return;
      const location = analyticsUrl(browser.location.href, siteUrl, true);
      const referrer = previousUrl || (browser.document.referrer
        ? analyticsUrl(browser.document.referrer, siteUrl) : '');
      if (!initialized) {
        browser.dataLayer = browser.dataLayer || [];
        browser.gtag = browser.gtag || function () { browser.dataLayer.push(arguments); };
        browser.gtag('js', new Date());
        browser.gtag('config', measurementId, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          page_location: location,
          page_referrer: referrer,
        });
        const script = browser.document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        browser.document.head.appendChild(script);
        initialized = true;
      }
      const parameters = { page_location: location, page_referrer: referrer, page_title: title };
      browser.gtag('set', parameters);
      browser.gtag('event', 'page_view', { ...parameters, send_to: measurementId });
      previousPath = path;
      previousUrl = location;
    },
  };
}

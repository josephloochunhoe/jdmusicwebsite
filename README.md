# JD. Music Academy

React + Vite website with static HTML for search engines and Google Analytics 4 integration.

## Development and build

```sh
npm ci
npm run dev
npm run build
npm test
```

The build renders all six public routes into full HTML, including titles, descriptions, canonical URLs and social metadata. React hydrates the pages for interactivity, retaining lazy route loading. `dist/sitemap.xml`, `dist/robots.txt` and a noindex `dist/404.html` are generated automatically. Vercel serves clean URLs directly; unknown routes return a real 404 instead of the homepage. Deploy only `dist`, never the temporary server bundle.

Page metadata and the list of public URLs live in `src/site.js`. When adding a page, add both its React route and metadata entry. The build fails if a listed route does not render its content. Set `VITE_SITE_URL` to the actual public HTTPS domain before building if it differs from `https://www.jd-musicacademy.com`. Submit `/sitemap.xml` in Google Search Console after deployment. If replacing an older site, map its existing indexed URLs to the appropriate new pages with permanent redirects before switching the domain.

## Design system and content

The 2026 redesign carries the stage identity of the new landing page across every route: burgundy `#6D001A` with stage-light amber `#FFB938`, Big Shoulders Display headlines over DM Sans, real performance photography and coordinated motion.

| What | Where |
| --- | --- |
| Colours, type, spacing, every component style and all animation | `src/styles/site.css` (tokens in `:root`; motion only inside the `prefers-reduced-motion: no-preference` block) |
| Fonts (self-hosted, SIL OFL licences alongside) | `public/fonts` |
| WhatsApp number and prefilled messages, phone, email, socials, registration link | `src/lib/contact.js` |
| Teachers and bios | `src/data/team.js` |
| Instrument selector, student videos (Google Drive IDs) | `src/data/lessons.js` |
| Lesson rates, plan conditions, group and programme prices | `src/data/pricing.js` |
| FAQ (also feeds the FAQ structured data on `/pricing-faq`) | `src/data/faq.js` |
| Gallery and ACE 4.0 photos | `src/data/galleryData.js`, `src/data/nextAce4.js` |
| Shared header, footer, hero, closing call to action | `src/components/` |

Gallery photos are served from `src/assets/gallery-web` (a grid thumbnail and a lightbox-size WebP for each original in `src/assets/gallery`). When adding photos, export a ~760 px `-thumb.webp` and an ~1800 px `.webp`, then add an entry with the thumbnail's width and height. Scroll reveals are added by `src/components/Motion.jsx` after hydration only, so the static HTML is always fully visible; without JavaScript every instrument panel, rate and programme is shown.

## Google Analytics

The production site uses the existing JD.Music GA4 web stream (`G-3SHJQNBENP`). `VITE_GA_MEASUREMENT_ID` can override it if the property changes later.

1. In the GA4 Web data stream, open **Enhanced measurement → Page views → Show advanced settings** and turn off **Page changes based on browser history events**. This site sends those page views itself; leaving that option on, adding a second Google tag, or adding another GTM page-view tag would duplicate counts. Other enhanced-measurement events can stay enabled.
2. Deploy the production build.
3. Open the public site and navigate between pages. Verify a single page-view event per page in GA Realtime/DebugView (use Google Tag Assistant to enable debugging). Regular reports may take 24–48 hours to populate.

Tracking runs only in production builds on the configured domain (with or without `www`). Preview domains and development builds do not count. No Google script is loaded when the ID is missing. Advertising personalization and Google signals are disabled. Arbitrary query parameters and URL fragments are excluded; standard UTM campaign parameters are retained. The site does not send names, emails or form values as events; do not put personal information into campaign names or URL paths.

## Where to see the numbers

Open your property in Google Analytics and select a date range:

| What you want | Report / metric |
| --- | --- |
| Visitors | Total users (available in reports and Explorations); GA's standard Users metric can mean active users |
| Page views | Views in Pages and screens |
| Which pages people visit | Pages and screens, using Page path and screen class |
| Google, social media, an article or another website | Traffic acquisition, using Session source / medium |
| Referring URLs when provided by the browser | An Exploration using Page referrer; filter to external sources |
| Visitors currently browsing | Realtime |
| "Book a trial" button clicks | Engagement → Events, event `book_trial_click` (see below) |

### "Book a trial" clicks

Every button that opens WhatsApp with the trial-lesson message sends a `book_trial_click` event (header, hero, instrument selector, teacher profiles, closing section, contact tiles, footer, mobile bar, FAQ and Contact page). General-question, group-guitar and programme WhatsApp links are not counted. The event carries two details:

- `cta_location`: which button, e.g. `hero`, `header`, `instrument_selector`, `teacher_profile`, `closing`, `contact_links`, `footer`, `mobile_bar`, `faq`, `contact_page`
- `instrument`: `guitar`, `piano`, `drum`, `vocal`, `bass`, or `not_chosen` for the general trial button

The page it happened on is recorded automatically. Click totals appear under **Reports → Engagement → Events** without any setup (allow 24–48 hours; use Realtime to check sooner). Two optional one-time settings in GA4 Admin make it more useful:

1. **Data display → Custom definitions → Create custom dimension**: add event-scoped dimensions with the event parameters `cta_location` and `instrument`, so the breakdowns appear in reports and Explorations. They apply only from the day they are created.
2. **Data display → Events**: mark `book_trial_click` as a **key event** to see it alongside traffic sources (which channels lead to trial clicks).

A click means someone opened WhatsApp with the trial message, not that they sent it. Clicks are tracked under the same rules as page views (production domain only, no personal data).

For example, `google / organic` is unpaid Google search, `example.com / referral` is traffic referred by another site, and `(direct) / (none)` means no source was available. On internal navigation, page referrer becomes the previous page; Traffic acquisition is the right place to see where the visit originated.

Browsers frequently provide only a referring domain, not an article's full URL. For links you control, add campaign tags to distinguish placements:

```
https://www.jd-musicacademy.com/?utm_source=partner_blog&utm_medium=referral&utm_campaign=music_lessons&utm_content=article_name
```

Visitor numbers estimate browsers/users, not verified individual people. Blocking software, missing referrers and cookie settings can affect counts. Data starts after activation; previous Vercel history is not imported. Google Analytics uses cookies; review the site's privacy notice and applicable consent requirements before activating collection.

## Monthly analytics email

The Google Apps Script in `automation/monthly-analytics` emails a report on the
last day of every month. It includes visitors, sessions, page views, top pages,
traffic sources, and external referring pages. The recipient and GA4 Property
ID are configured through private Apps Script properties. It must be authorized
once by a Google account with access to the property; follow the activation
steps in that folder.

Reference: https://developers.google.com/analytics/devguides/collection/ga4/views

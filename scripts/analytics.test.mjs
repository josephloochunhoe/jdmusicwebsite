import test from 'node:test';
import assert from 'node:assert/strict';
import { createAnalytics, analyticsUrl, trialClick } from '../src/lib/analytics.js';

const siteUrl = 'https://www.jd-musicacademy.com';
function setup(overrides = {}) {
  const scripts = [];
  const browser = {
    location: new URL(`${siteUrl}/?utm_source=newsletter&utm_medium=email&email=private@example.com#private`),
    document: {
      referrer: 'https://article.example/music?private=secret',
      createElement: () => ({}),
      head: { appendChild: script => scripts.push(script) },
    },
  };
  const tracker = createAnalytics({ browser, measurementId: 'G-TEST12345', siteUrl, enabled: true, ...overrides });
  const events = () => (browser.dataLayer || []).map(item => Array.from(item)).filter(item => item[0] === 'event');
  return { browser, tracker, scripts, events };
}

test('one initial view, route navigation and return visits, preserving referrer and campaign', () => {
  const { browser, tracker, scripts, events } = setup();
  tracker.pageView('/', 'Home');
  tracker.pageView('/', 'Home'); // Effect replay must not double-count.
  assert.equal(events().length, 1);
  assert.equal(events()[0][2].page_location, `${siteUrl}/?utm_source=newsletter&utm_medium=email`);
  assert.equal(events()[0][2].page_referrer, 'https://article.example/music');
  browser.location = new URL(`${siteUrl}/contact`);
  tracker.pageView('/contact', 'Contact');
  assert.equal(events()[1][2].page_referrer, `${siteUrl}/?utm_source=newsletter&utm_medium=email`);
  assert.equal(events()[1][2].page_title, 'Contact');
  browser.location = new URL(`${siteUrl}/`);
  tracker.pageView('/', 'Home');
  assert.equal(events().length, 3);
  assert.equal(events()[2][2].page_referrer, `${siteUrl}/contact`);
  assert.equal(scripts.length, 1);
  const config = browser.dataLayer.map(item => Array.from(item)).find(item => item[0] === 'config');
  assert.equal(config[2].send_page_view, false);
  assert.equal(config[2].allow_google_signals, false);
});

test('no collection without an ID, in development, on previews or on the server', () => {
  for (const options of [{ measurementId: '' }, { measurementId: 'invalid' }, { enabled: false }, { browser: null }]) {
    const { tracker, scripts, events } = setup(options);
    tracker.pageView('/', 'Home');
    assert.equal(scripts.length, 0);
    assert.equal(events().length, 0);
  }
  const { browser, tracker, scripts } = setup();
  browser.location = new URL('https://jdmusic-preview.vercel.app/');
  tracker.pageView('/', 'Home');
  assert.equal(scripts.length, 0);
});

test('direct arrivals have an empty referrer; non-web URLs are not collected', () => {
  const { browser, tracker, events } = setup();
  browser.document.referrer = '';
  tracker.pageView('/', 'Home');
  assert.equal(events()[0][2].page_referrer, '');
  assert.equal(analyticsUrl('javascript:alert(1)', siteUrl), '');
});

test('trial clicks are counted only after a tracked page view, with location and instrument', () => {
  const { browser, tracker, events } = setup();
  tracker.event('book_trial_click', { cta_location: 'hero', instrument: 'not_chosen' });
  assert.equal(events().length, 0, 'nothing before the page view decides tracking is allowed');
  tracker.pageView('/', 'Home');
  tracker.event('book_trial_click', { cta_location: 'instrument_selector', instrument: 'guitar' });
  const click = events().find(item => item[1] === 'book_trial_click');
  assert.deepEqual(click[2], { cta_location: 'instrument_selector', instrument: 'guitar', send_to: 'G-TEST12345' });
  const preview = setup();
  preview.browser.location = new URL('https://jdmusic-preview.vercel.app/');
  preview.tracker.pageView('/', 'Home');
  preview.tracker.event('book_trial_click', {});
  assert.equal(preview.events().length, 0);
  assert.ok(browser.dataLayer.length > 0);
});

test('recognises trial WhatsApp links and their instrument, ignoring other links', async () => {
  const { trialUrl, TRIAL_URL, GENERAL_URL, GROUP_GUITAR_URL, PROGRAMMES_URL } = await import('../src/lib/contact.js');
  assert.deepEqual(trialClick(TRIAL_URL), { instrument: 'not_chosen' });
  for (const instrument of ['guitar', 'piano', 'drum', 'vocal', 'bass']) {
    assert.deepEqual(trialClick(trialUrl(instrument)), { instrument });
  }
  for (const href of [GENERAL_URL, GROUP_GUITAR_URL, PROGRAMMES_URL, 'tel:+60174370443', 'https://example.com/?text=book%20a%20trial%20lesson', 'not a url']) {
    assert.equal(trialClick(href), null, href);
  }
});

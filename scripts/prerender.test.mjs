import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const paths = ['/', '/about', '/student-life', '/events-competitions', '/pricing-faq', '/contact'];
test('built pages contain unique metadata, real content and valid local assets without JavaScript', async () => {
  const titles = new Set();
  for (const path of paths) {
    const html = await readFile(`dist/${path === '/' ? 'index' : path.slice(1)}.html`, 'utf8');
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
    assert.equal((head.match(/<title\b/g) || []).length, 1, path);
    assert.equal((head.match(/name="description"/g) || []).length, 1, path);
    assert.equal((head.match(/rel="canonical"/g) || []).length, 1, path);
    const canonical = head.match(/<link rel="canonical" href="([^"]+)"/)[1];
    assert.equal(new URL(canonical).pathname, path);
    assert.match(head, /property="og:title"/);
    assert.match(head, /name="twitter:card"/);
    assert.match(head, /rel="manifest"/);
    assert.match(html, /lang="en-MY"/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    assert.match(head, /<script type="application\/ld\+json">/);
    const ld = JSON.parse(head.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const types = ld['@graph'].map(node => node['@type']).flat();
    assert.ok(types.includes('MusicSchool') && types.includes('LocalBusiness'), path);
    assert.equal(ld['@graph'].find(node => node['@id']?.endsWith('#organization')).telephone, '+60174370443');
    assert.equal(JSON.stringify(ld).includes('streetAddress'), false, path);
    assert.equal(JSON.stringify(ld).includes('openingHours'), false, path);
    assert.equal(JSON.stringify(ld).includes('aggregateRating'), false, path);
    titles.add(head.match(/<title>(.*?)<\/title>/)[1]);
    assert.match(html, /<h1\b/);
    assert.doesNotMatch(html, /<!--app-head-->|<div id="root"><\/div>|animate-spin/);
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
      await access(`dist${asset}`);
    }
  }
  assert.equal(titles.size, paths.length);
});

test('sitemap includes exactly the public pages, while missing pages are noindex', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
  assert.deepEqual(locations.map(url => url.pathname), paths);
  const robots = await readFile('dist/robots.txt', 'utf8');
  assert.ok(robots.includes(`Sitemap: ${locations[0].origin}/sitemap.xml`));
  const missing = await readFile('dist/404.html', 'utf8');
    assert.match(missing, /name="robots" content="noindex, follow"/);
    assert.doesNotMatch(missing, /rel="canonical"/);
    assert.doesNotMatch(missing, /application\/ld\+json/);
    const home = await readFile('dist/index.html', 'utf8');
    assert.match(home, /rel="preload" as="image"/);
    assert.match(home, /Music lessons in Kajang/);
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert.equal(config.cleanUrls, true);
  assert.equal(config.rewrites, undefined, 'No catch-all that turns missing pages into HTTP 200');
});

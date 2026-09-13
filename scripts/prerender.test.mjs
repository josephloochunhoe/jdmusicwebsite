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
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert.equal(config.cleanUrls, true);
  assert.equal(config.rewrites, undefined, 'No catch-all that turns missing pages into HTTP 200');
});

import { readFile, writeFile, rm } from 'node:fs/promises';
import { render, pages, SITE_URL } from '../dist-ssr/entry-server.js';

const origin = new URL(SITE_URL);
if (origin.protocol !== 'https:' || origin.pathname !== '/' || origin.search || origin.hash) {
  throw new Error('VITE_SITE_URL must be an HTTPS origin without a path, query or fragment.');
}
const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('Static rendering placeholders are missing from index.html.');
}
for (const route of [...Object.keys(pages), '/404']) {
  const { html, head } = await render(route);
  if (!html.includes('<h1') || !head.includes('<title') || /<!--\$(?:\?|!)-->/.test(html)) throw new Error(`Incomplete render: ${route}`);
  const page = template.replace('<!--app-head-->', () => head)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  await writeFile(`dist/${route === '/' ? 'index' : route.slice(1)}.html`, page);
  console.log(`Pre-rendered ${route}`);
}
const escapeXml = value => value.replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]);
const urls = Object.keys(pages).map(path => `${SITE_URL}${path === '/' ? '/' : path}`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
await rm('dist-ssr', { recursive: true, force: true });

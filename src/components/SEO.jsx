import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, SHARE_IMAGE, pages, notFound, normalizePath } from '../site';
import { faqItems, faqText } from '../data/faq';

const organization = {
  '@type': 'MusicSchool',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'JD.Music Academy',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}${SHARE_IMAGE.path}`,
  description: pages['/'].description,
  foundingDate: '2020',
  founder: { '@type': 'Person', name: 'Jeevan Devamarcus' },
  telephone: '+60174370443',
  email: 'jdmusicacademy0320@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Kajang', addressRegion: 'Selangor', addressCountry: 'MY' },
  areaServed: ['Kajang', 'Sri Hartamas, Kuala Lumpur', 'Klang Valley'],
  sameAs: ['https://www.instagram.com/jd.musicclass', 'https://www.tiktok.com/@jd.musicclass', 'https://www.facebook.com/share/1DTvbVk4Tu/'],
};

// FAQ structured data mirrors the questions shown on /pricing-faq.
const faqPage = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/pricing-faq#faq`,
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: faqText(item) },
  })),
};

const jsonLd = data => JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c');

export default function SEO() {
  const path = normalizePath(useLocation().pathname);
  const page = pages[path] || notFound;
  const url = SITE_URL + (path === '/' ? '/' : path);
  const image = SITE_URL + SHARE_IMAGE.path;
  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content={pages[path] ? 'index, follow, max-image-preview:large' : 'noindex, follow'} />
      {pages[path] && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_MY" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
      <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
      <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />
      {path === '/' && <script type="application/ld+json">{jsonLd(organization)}</script>}
      {path === '/pricing-faq' && <script type="application/ld+json">{jsonLd(faqPage)}</script>}
    </>
  );
}

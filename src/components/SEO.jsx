import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, SCHEMA_TELEPHONE, SHARE_IMAGE, pages, notFound, normalizePath } from '../site';
import { faqItems, faqText } from '../data/faq';
import { instruments } from '../data/lessons';
import { EMAIL, SOCIALS } from '../lib/contact';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const course = (name, description) => ({
  '@type': 'Offer',
  itemOffered: {
    '@type': 'Course',
    name,
    description,
    provider: { '@id': ORG_ID },
  },
});

// Every field below is already stated on the site. Street address, opening hours,
// geo coordinates, reviews and a single price are not published, so they are omitted.
const organization = {
  '@type': ['MusicSchool', 'LocalBusiness'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: 'JD.Music Academy',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}${SHARE_IMAGE.path}`,
  description: pages['/'].description,
  foundingDate: '2020',
  founder: { '@type': 'Person', name: 'Jeevan Devamarcus' },
  telephone: SCHEMA_TELEPHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kajang',
    addressRegion: 'Selangor',
    addressCountry: 'MY',
  },
  areaServed: [
    { '@type': 'City', name: 'Kajang', containedInPlace: { '@type': 'AdministrativeArea', name: 'Selangor' } },
    { '@type': 'Place', name: 'Sri Hartamas, Kuala Lumpur' },
    { '@type': 'Place', name: 'Klang Valley' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SCHEMA_TELEPHONE,
    email: EMAIL,
    contactType: 'customer service',
    areaServed: 'MY',
  },
  sameAs: SOCIALS.map(social => social.url),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Music lessons',
    itemListElement: [
      ...instruments.map(inst => course(inst.key === 'vocals' ? 'Vocal lessons' : `${inst.title} lessons`, inst.text)),
      course('Ukulele lessons', 'Ukulele lessons in Kajang. Ask when you message.'),
      course('Weekend group guitar classes', 'Group guitar classes at the Kajang Home Studio, every Saturday 2–3pm or Sunday 3–4pm.'),
    ],
  },
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: pages['/'].description,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-MY',
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/pricing-faq#faq`,
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: faqText(item) },
  })),
};

const jsonLd = data => JSON.stringify(data).replace(/</g, '\\u003c');

function graphFor(path, page, url) {
  const graph = [
    organization,
    website,
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      inLanguage: 'en-MY',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${SHARE_IMAGE.path}`,
        width: SHARE_IMAGE.width,
        height: SHARE_IMAGE.height,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: path === '/'
        ? [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }]
        : [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: page.crumb, item: url },
        ],
    },
  ];
  if (path === '/pricing-faq') graph.push(faqPage);
  return { '@context': 'https://schema.org', '@graph': graph };
}

export default function SEO() {
  const path = normalizePath(useLocation().pathname);
  const page = pages[path] || notFound;
  const indexed = Boolean(pages[path]);
  const url = SITE_URL + (path === '/' ? '/' : path);
  const image = SITE_URL + SHARE_IMAGE.path;
  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content={indexed ? 'index, follow, max-image-preview:large' : 'noindex, follow'} />
      {indexed && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_MY" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
      <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
      <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={SHARE_IMAGE.alt} />
      {indexed && <script type="application/ld+json">{jsonLd(graphFor(path, page, url))}</script>}
    </>
  );
}

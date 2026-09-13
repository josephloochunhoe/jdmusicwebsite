import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, pages, notFound, normalizePath } from '../site';

export default function SEO() {
  const path = normalizePath(useLocation().pathname);
  const page = pages[path] || notFound;
  const url = SITE_URL + (path === '/' ? '/' : path);
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/logo.png`,
    telephone: '+60192139210',
    email: 'jdmusicacademy0320@gmail.com',
    description: pages['/'].description,
    sameAs: ['https://www.instagram.com/jd.musicclass', 'https://www.tiktok.com/@jd.musicclass'],
  };
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
      <meta property="og:image" content={`${SITE_URL}/images/logo.png`} />
      <meta property="og:image:alt" content={`${SITE_NAME} logo`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={`${SITE_URL}/images/logo.png`} />
      {path === '/' && <script type="application/ld+json">{JSON.stringify(organization).replace(/</g, '\\u003c')}</script>}
    </>
  );
}

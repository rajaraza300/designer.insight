import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://designerinsight.online';
const OG_IMAGE = `${BASE_URL}/uploads/abstract-texture-from-mixed-water-and-oil-bubbles-2024-11-18-10-40-26-utc-1.jpg`;
const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.warn('[seo] dist/index.html was not found; skipping static SEO route generation.');
  process.exit(0);
}

const routes = [
  {
    path: '/',
    title: 'Designer Insight | Creative Design, Web & Digital Marketing Agency',
    description: 'Designer Insight is a creative design and advertising agency for branding, web design, Shopify and WordPress development, pitch decks, social media, UGC and digital marketing.',
  },
  {
    path: '/about',
    title: 'About Designer Insight | Creative Design & Advertising Agency',
    description: 'Meet Designer Insight, a multidisciplinary creative agency helping ambitious brands with strategy, brand identity, web design, presentation design and digital marketing.',
  },
  {
    path: '/services',
    title: 'Creative Agency Services | Branding, Web, Social & Pitch Decks',
    description: 'Explore Designer Insight services including brand identity, WordPress and Shopify web design, pitch deck design, social media management, UGC content and PPC advertising.',
  },
  {
    path: '/portfolio',
    title: 'Design Portfolio & Selected Works | Designer Insight Agency',
    description: 'Explore Designer Insight projects across brand identity, web design, UI/UX, social media, print, packaging and investor presentation design.',
  },
  {
    path: '/pricing',
    title: 'Creative Agency Pricing & Packages | Designer Insight',
    description: 'View flexible Designer Insight pricing for social media, design and creative services with monthly and annual options, transparent deliverables and custom project plans.',
  },
  {
    path: '/blogs',
    title: 'Design, Branding & Digital Strategy Blog | Designer Insight',
    description: 'Read practical insights from Designer Insight on branding, creative technology, UI/UX, presentation design, digital strategy and modern marketing.',
  },
  {
    path: '/contact',
    title: 'Contact Designer Insight | Start Your Creative Project',
    description: 'Contact Designer Insight to discuss branding, web design, presentation design, social media, UGC or digital advertising projects. Our creative team responds within 24 business hours.',
  },
];

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

for (const route of routes) {
  const canonical = `${BASE_URL}${route.path}`;
  let html = baseTemplate
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/s, `<meta name="description" content="${escapeHtml(route.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/s, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/s, `<meta property="og:title" content="${escapeHtml(route.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/s, `<meta property="og:description" content="${escapeHtml(route.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/s, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/s, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/s, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${BASE_URL}/#organization`,
        name: 'Designer Insight',
        url: BASE_URL,
        logo: `${BASE_URL}/Designer-Insight-Logo-White-1.png`,
        image: OG_IMAGE,
        email: 'Info@designerinsight.online',
        telephone: '+92 3145338340',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Wahdat Colony Street No 08, House No E-360',
          addressLocality: 'Taxila',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        sameAs: [
          'https://www.facebook.com/designerinsight53/',
          'https://www.instagram.com/designerinsight_/',
          'https://www.linkedin.com/company/designerinsight',
          'https://www.pinterest.com/designerinsight',
          'https://www.youtube.com/designerinsight',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Designer Insight',
        publisher: { '@id': `${BASE_URL}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: route.title,
        description: route.description,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        inLanguage: 'en',
      },
    ],
  };

  html = html.replace(
    '</head>',
    `    <script id="static-page-schema-jsonld" type="application/ld+json">${JSON.stringify(schema)}</script>\n  </head>`,
  );

  if (route.path === '/') {
    fs.writeFileSync(templatePath, html);
  } else {
    const outputDir = path.join(distDir, route.path.slice(1));
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
  }
}

console.log(`[seo] Generated static metadata shells for ${routes.length} routes.`);

import { useEffect } from 'react';
import { PageId } from '../types';
import { SITE_CONFIG } from '../data/siteData';
import { applySEO, removeStructuredData } from '../utils/seo';

const BASE_URL = 'https://designerinsight.online';
const DEFAULT_IMAGE = '/uploads/abstract-texture-from-mixed-water-and-oil-bubbles-2024-11-18-10-40-26-utc-1.jpg';

const PAGE_SEO: Record<Exclude<PageId, 'testimonials' | 'faqs'>, {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}> = {
  home: {
    title: 'Designer Insight | Creative Design, Web & Digital Marketing Agency',
    description: 'Designer Insight is a creative design and advertising agency for branding, web design, Shopify and WordPress development, pitch decks, social media, UGC and digital marketing.',
    path: '/',
    keywords: ['creative agency', 'design agency', 'graphic design agency', 'web design agency', 'branding agency', 'digital marketing agency', 'Designer Insight'],
  },
  about: {
    title: 'About Designer Insight | Creative Design & Advertising Agency',
    description: 'Meet Designer Insight, a multidisciplinary creative agency helping ambitious brands with strategy, brand identity, web design, presentation design and digital marketing.',
    path: '/about',
    keywords: ['about Designer Insight', 'creative agency Pakistan', 'design team', 'branding agency', 'digital agency'],
  },
  services: {
    title: 'Creative Agency Services | Branding, Web, Social & Pitch Decks',
    description: 'Explore Designer Insight services including brand identity, WordPress and Shopify web design, pitch deck design, social media management, UGC content and PPC advertising.',
    path: '/services',
    keywords: ['branding services', 'web design services', 'Shopify development', 'WordPress design', 'pitch deck design', 'social media management', 'PPC agency'],
  },
  portfolio: {
    title: 'Design Portfolio & Selected Works | Designer Insight Agency',
    description: 'Explore Designer Insight projects across brand identity, web design, UI/UX, social media, print, packaging and investor presentation design.',
    path: '/portfolio',
    keywords: ['design portfolio', 'graphic design portfolio', 'branding portfolio', 'web design portfolio', 'social media design', 'pitch deck portfolio'],
  },
  pricing: {
    title: 'Creative Agency Pricing & Packages | Designer Insight',
    description: 'View flexible Designer Insight pricing for social media, design and creative services with monthly and annual options, transparent deliverables and custom project plans.',
    path: '/pricing',
    keywords: ['design agency pricing', 'social media packages', 'graphic design pricing', 'creative agency packages', 'digital marketing pricing'],
  },
  blogs: {
    title: 'Design, Branding & Digital Strategy Blog | Designer Insight',
    description: 'Read practical insights from Designer Insight on branding, creative technology, UI/UX, presentation design, digital strategy and modern marketing.',
    path: '/blogs',
    keywords: ['design blog', 'branding insights', 'UI UX blog', 'creative technology', 'digital strategy', 'presentation design'],
  },
  contact: {
    title: 'Contact Designer Insight | Start Your Creative Project',
    description: 'Contact Designer Insight to discuss branding, web design, presentation design, social media, UGC or digital advertising projects. Our creative team responds within 24 business hours.',
    path: '/contact',
    keywords: ['contact Designer Insight', 'hire graphic designer', 'hire web design agency', 'creative agency contact', 'design consultation'],
  },
};

export function usePageSEO(activePage: PageId) {
  useEffect(() => {
    const normalizedPage = activePage === 'testimonials' || activePage === 'faqs' ? 'home' : activePage;
    const config = PAGE_SEO[normalizedPage];

    const organization = {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${BASE_URL}/#organization`,
      name: SITE_CONFIG.name,
      url: BASE_URL,
      logo: `${BASE_URL}${SITE_CONFIG.logoMain}`,
      image: `${BASE_URL}${DEFAULT_IMAGE}`,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phones[0],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wahdat Colony Street No 08, House No E-360',
        addressLocality: 'Taxila',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      sameAs: Object.values(SITE_CONFIG.socials),
    };

    const webSite = {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: SITE_CONFIG.name,
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'en',
    };

    const webPage = {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${config.path}#webpage`,
      url: `${BASE_URL}${config.path}`,
      name: config.title,
      description: config.description,
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'en',
    };

    applySEO({
      title: config.title,
      description: config.description,
      canonicalUrl: `${BASE_URL}${config.path}`,
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      twitterCard: 'summary_large_image',
      keywords: config.keywords,
      schemaJson: {
        '@context': 'https://schema.org',
        '@graph': [organization, webSite, webPage],
      },
    });

    return () => removeStructuredData('page-schema-jsonld');
  }, [activePage]);
}

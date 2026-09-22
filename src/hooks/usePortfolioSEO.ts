import { useEffect } from 'react';
import { PortfolioProject } from '../types';
import { applySEO, removeStructuredData } from '../utils/seo';

interface PortfolioSEOProps {
  selectedCategory: string;
  projects: PortfolioProject[];
  activeProject?: PortfolioProject | null;
}

export function usePortfolioSEO({ selectedCategory, projects, activeProject }: PortfolioSEOProps) {
  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://designerinsight.online';

    // 1. If an Individual Project is actively being viewed
    if (activeProject) {
      const projectTitle = `${activeProject.title} – ${activeProject.categoryLabel} Case Study | Designer Insight`;
      const projectDesc = activeProject.overview
        ? `${activeProject.overview.slice(0, 150)}... Client: ${activeProject.client || 'Creative Showcase'}.`
        : `Explore ${activeProject.title}, a premier ${activeProject.categoryLabel} project crafted by Designer Insight Design Agency.`;

      const projectImageUrl = activeProject.image.startsWith('http')
        ? activeProject.image
        : `${origin}${activeProject.image}`;

      const projectUrl = `${origin}/portfolio?project=${encodeURIComponent(activeProject.id)}`;

      // Detailed Schema.org CreativeWork / VisualArtwork for the Individual Project
      const projectSchema = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': projectUrl,
        name: activeProject.title,
        headline: `${activeProject.title} - ${activeProject.categoryLabel}`,
        description: activeProject.overview || projectDesc,
        image: projectImageUrl,
        url: projectUrl,
        genre: activeProject.category,
        dateCreated: activeProject.year || '2024',
        inLanguage: 'en',
        creator: {
          '@type': 'Organization',
          name: 'Designer Insight',
          url: origin,
          logo: `${origin}/Designer-Insight-Logo-White-1.png`,
          sameAs: [
            'https://www.facebook.com/designerinsight53/',
            'https://www.instagram.com/designerinsight_/',
            'https://www.linkedin.com/company/designerinsight',
          ],
        },
        publisher: {
          '@type': 'Organization',
          name: 'Designer Insight',
          url: origin,
        },
        sponsor: activeProject.client
          ? {
              '@type': 'Organization',
              name: activeProject.client,
            }
          : undefined,
        keywords: [
          activeProject.category,
          activeProject.categoryLabel,
          'Graphic Design',
          'Creative Agency',
          ...(activeProject.deliverables || []),
        ].join(', '),
        sameAs: activeProject.behanceUrl || undefined,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': projectUrl,
        },
      };

      applySEO({
        title: projectTitle,
        description: projectDesc,
        canonicalUrl: projectUrl,
        ogType: 'article',
        ogImage: projectImageUrl,
        twitterCard: 'summary_large_image',
        keywords: [
          activeProject.title,
          activeProject.category,
          'Designer Insight',
          'Case Study',
          'Portfolio',
          ...(activeProject.deliverables || []),
        ],
        schemaJson: projectSchema,
      });

      return () => {
        removeStructuredData('page-schema-jsonld');
      };
    }

    // 2. Portfolio Collection View (Filtered or All)
    const categoryTitleMap: Record<string, string> = {
      All: 'Design Portfolio & Selected Works | Designer Insight Agency',
      'Brand Identity': 'Brand Identity & Logo Design Portfolio | Designer Insight',
      'UI/UX Design': 'UI/UX & Product Design Portfolio | Designer Insight',
      'Web Design': 'WordPress & Shopify Web Design Portfolio | Designer Insight',
      Presentation: 'Pitch Deck & Presentation Design Showcase | Designer Insight',
      'Presentation Design': 'Pitch Deck & Presentation Design Showcase | Designer Insight',
      Printing: 'Print & Packaging Design Portfolio | Designer Insight',
      'Print & Packaging': 'Print & Packaging Design Portfolio | Designer Insight',
      'Social Media': 'Social Media Marketing & Ad Creatives Showcase | Designer Insight',
    };

    const categoryDescMap: Record<string, string> = {
      All: 'Explore our curated portfolio of bold brand identities, high-converting websites, investor pitch decks, and digital experiences by Designer Insight.',
      'Brand Identity': 'Browse bespoke logo systems, visual brand guidelines, and typography identity projects designed for fast-growing global brands.',
      'UI/UX Design': 'Discover modern, accessible UI/UX app interfaces, digital prototypes, and user experiences crafted with precision.',
      'Web Design': 'Explore custom responsive websites, WordPress architectures, and high-converting Shopify digital storefronts.',
      Presentation: 'View investor-ready pitch decks, keynote presentations, and high-stakes corporate slide decks that win deals.',
      'Presentation Design': 'View investor-ready pitch decks, keynote presentations, and high-stakes corporate slide decks that win deals.',
      Printing: 'Premium product packaging, box designs, label mockups, and corporate stationery with pristine print finishes.',
      'Print & Packaging': 'Premium product packaging, box designs, label mockups, and corporate stationery with pristine print finishes.',
      'Social Media': 'High-impact social media creatives, ad campaigns, and visual marketing assets crafted to boost organic engagement.',
    };

    const pageTitle = categoryTitleMap[selectedCategory] || `${selectedCategory} Portfolio | Designer Insight`;
    const pageDescription = categoryDescMap[selectedCategory] || `Curated ${selectedCategory} design projects and client case studies by Designer Insight.`;
    const pageUrl = `${origin}/portfolio${selectedCategory !== 'All' ? `?category=${encodeURIComponent(selectedCategory)}` : ''}`;
    const featureImage = projects[0]?.image || '/uploads/abstract-texture-from-mixed-water-and-oil-bubbles-2024-11-18-10-40-26-utc-1.jpg';

    // Rich Schema.org CollectionPage and ItemList
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': pageUrl,
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Designer Insight',
            url: origin,
          },
          about: {
            '@type': 'ProfessionalService',
            name: 'Designer Insight',
            url: origin,
            telephone: '+92 3145338340',
            email: 'Info@designerinsight.online',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Wahdat Colony Street No 08, House No E-360',
              addressLocality: 'Taxila',
              addressCountry: 'PK',
            },
          },
        },
        {
          '@type': 'ItemList',
          name: `${selectedCategory === 'All' ? 'Curated Design Projects' : `${selectedCategory} Projects`} by Designer Insight`,
          numberOfItems: projects.length,
          itemListElement: projects.map((p, index) => {
            const itemImg = p.image.startsWith('http') ? p.image : `${origin}${p.image}`;
            return {
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                '@id': `${origin}/portfolio#project-${p.id}`,
                name: p.title,
                headline: p.title,
                description: p.overview || `${p.title} - ${p.categoryLabel} design work by Designer Insight.`,
                image: itemImg,
                genre: p.category,
                dateCreated: p.year || '2024',
                creator: {
                  '@type': 'Organization',
                  name: 'Designer Insight',
                  url: origin,
                },
                sponsor: p.client ? { '@type': 'Organization', name: p.client } : undefined,
                sameAs: p.behanceUrl || undefined,
              },
            };
          }),
        },
      ],
    };

    applySEO({
      title: pageTitle,
      description: pageDescription,
      canonicalUrl: pageUrl,
      ogType: 'website',
      ogImage: featureImage,
      twitterCard: 'summary_large_image',
      keywords: [
        'Designer Insight',
        'Design Portfolio',
        'Creative Agency',
        selectedCategory,
        'Brand Identity',
        'Pitch Deck Design',
        'Web Design',
        'UI UX Design',
      ],
      schemaJson: collectionSchema,
    });

    return () => {
      removeStructuredData('page-schema-jsonld');
    };
  }, [selectedCategory, projects, activeProject]);
}

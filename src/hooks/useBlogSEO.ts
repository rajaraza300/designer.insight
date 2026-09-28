import { useEffect } from 'react';
import { BlogPost } from '../types';
import { applySEO, removeStructuredData } from '../utils/seo';

const BASE_URL = 'https://designerinsight.online';
const DEFAULT_IMAGE = '/uploads/abstract-texture-from-mixed-water-and-oil-bubbles-2024-11-18-10-40-26-utc-1.jpg';

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export function useBlogSEO(post: BlogPost | null) {
  useEffect(() => {
    if (!post) return;

    const canonicalUrl = `${BASE_URL}/blogs?post=${encodeURIComponent(post.id)}`;
    const image = post.image || DEFAULT_IMAGE;

    applySEO({
      title: `${post.title} | Designer Insight`,
      description: post.excerpt,
      canonicalUrl,
      ogType: 'article',
      ogImage: image,
      twitterCard: 'summary_large_image',
      keywords: [post.category, 'Designer Insight', 'design', 'branding', 'digital strategy'],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': canonicalUrl,
        headline: post.title,
        description: post.excerpt,
        image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
        datePublished: toIsoDate(post.date),
        dateModified: toIsoDate(post.date),
        author: {
          '@type': 'Person',
          name: post.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Designer Insight',
          url: BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/Designer-Insight-Logo-White-1.png`,
          },
        },
        mainEntityOfPage: canonicalUrl,
        articleSection: post.category,
        inLanguage: 'en',
      },
    });

    return () => removeStructuredData('page-schema-jsonld');
  }, [post]);
}

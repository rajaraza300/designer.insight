/**
 * SEO & Social Sharing Metadata Utility
 * Provides dynamic meta tags, OpenGraph cards, Twitter cards, and Schema.org JSON-LD structured data.
 */

export interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string[];
  schemaJson?: object | object[];
}

export function setMetaTag(key: string, content: string, isProperty = false) {
  if (typeof document === 'undefined') return;

  const selector = isProperty
    ? `meta[property="${key}"]`
    : `meta[name="${key}"]`;

  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    if (isProperty) {
      element.setAttribute('property', key);
    } else {
      element.setAttribute('name', key);
    }
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function setCanonicalUrl(url: string) {
  if (typeof document === 'undefined') return;

  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export function setStructuredData(id: string, data: object | object[]) {
  if (typeof document === 'undefined') return;

  let scriptElement = document.getElementById(id) as HTMLScriptElement | null;
  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.id = id;
    scriptElement.type = 'application/ld+json';
    document.head.appendChild(scriptElement);
  }
  scriptElement.textContent = JSON.stringify(data, null, 2);
}

export function removeStructuredData(id: string) {
  if (typeof document === 'undefined') return;
  const scriptElement = document.getElementById(id);
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement);
  }
}

/**
 * Apply full SEO suite for a page or modal
 */
export function applySEO(config: SEOConfig) {
  if (typeof document === 'undefined') return;

  // Title
  document.title = config.title;

  // Standard Meta Tags
  setMetaTag('description', config.description);
  if (config.keywords && config.keywords.length > 0) {
    setMetaTag('keywords', config.keywords.join(', '));
  }

  // Canonical
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://designerinsight.online';
  const canonical = config.canonicalUrl || (typeof window !== 'undefined' ? `${origin}${window.location.pathname}` : 'https://designerinsight.online/');
  setCanonicalUrl(canonical);

  // OpenGraph
  setMetaTag('og:title', config.title, true);
  setMetaTag('og:description', config.description, true);
  setMetaTag('og:url', canonical, true);
  setMetaTag('og:type', config.ogType || 'website', true);
  setMetaTag('og:site_name', 'Designer Insight', true);
  if (config.ogImage) {
    const fullImg = config.ogImage.startsWith('http') ? config.ogImage : `${origin}${config.ogImage}`;
    setMetaTag('og:image', fullImg, true);
    setMetaTag('og:image:alt', config.title, true);
  }

  // Twitter / X
  setMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
  setMetaTag('twitter:title', config.title);
  setMetaTag('twitter:description', config.description);
  if (config.ogImage) {
    const fullImg = config.ogImage.startsWith('http') ? config.ogImage : `${origin}${config.ogImage}`;
    setMetaTag('twitter:image', fullImg);
  }

  // Schema.org Structured Data
  if (config.schemaJson) {
    setStructuredData('page-schema-jsonld', config.schemaJson);
  }
}

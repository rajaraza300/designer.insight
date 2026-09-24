import { PageId } from '../types';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  portfolio: '/portfolio',
  testimonials: '/testimonials',
  pricing: '/pricing',
  blogs: '/blogs',
  faqs: '/faqs',
  contact: '/contact',
};

const PATH_PAGES = Object.entries(PAGE_PATHS).reduce<Record<string, PageId>>(
  (pages, [page, path]) => {
    pages[path] = page as PageId;
    return pages;
  },
  {},
);

export function getPagePath(page: PageId): string {
  return PAGE_PATHS[page];
}

export function getPageFromPathname(pathname: string): PageId {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return PATH_PAGES[normalizedPath] ?? 'home';
}

import { PortfolioProject } from '../types';

const asset = (slug: string, kind: 'cover' | 'identity') =>
  `/portfolio/brand-work/${slug}-${kind}.webp`;

const logoProject = (
  id: string,
  title: string,
  client: string,
  behanceUrl: string,
): PortfolioProject => ({
  id: `${id}-logo-design`,
  title,
  category: 'Logo Design',
  categoryLabel: '/ Logo Design & Presentation',
  image: asset(id, 'cover'),
  gallery: [asset(id, 'cover'), asset(id, 'identity')],
  client,
  year: '2025',
  overview: `A focused logo and visual mark presentation created for ${client}, balancing clear geometry, memorable typography, and versatile real-world use.`,
  deliverables: ['Logo Concept', 'Primary Brand Mark', 'Typography Direction', 'Logo Presentation'],
  behanceUrl,
});

const identityProject = (
  id: string,
  title: string,
  client: string,
  behanceUrl: string,
): PortfolioProject => ({
  id: `${id}-brand-identity-system`,
  title,
  category: 'Brand Identity',
  categoryLabel: '/ Stationery & Brand Identity',
  image: asset(id, 'identity'),
  gallery: [asset(id, 'identity'), asset(id, 'cover')],
  client,
  year: '2025',
  overview: `A complete visual identity application for ${client}, bringing the logo, colors, typography, and corporate stationery together as one consistent brand system.`,
  deliverables: ['Corporate Stationery', 'Business Cards', 'Letterhead System', 'Brand Application Mockups'],
  behanceUrl,
});

export const LOGO_DESIGN_PROJECTS: PortfolioProject[] = [
  logoProject('digital-aura', 'Digital Aura Logo Design', 'Digital Aura', 'https://www.behance.net/gallery/242869579/Minimal-Logo-Design-for-Digital-Aura-Client'),
  logoProject('arena-marketing', 'Arena Marketing Logo Design', 'Arena Marketing', 'https://www.behance.net/gallery/222093123/Modern-Brand-Identity-Design-for-Real-Estate-Client'),
  logoProject('am-marketing', 'AM Marketing Logo Design', 'AM Marketing', 'https://www.behance.net/gallery/222091917/Professional-Brand-Identity-Design-for-AM-Marketing'),
  logoProject('aaa-square', 'AAA Square Logo Design', 'AAA Square', 'https://www.behance.net/gallery/222087643/Minimal-Brand-Identity-Design-for-Real-Estate-Client'),
  logoProject('altura-builders', 'Altura Builders Logo Design', 'Altura Builders', 'https://www.behance.net/gallery/221428659/Professional-Brand-Identity-design-for-Altura-Builders'),
  logoProject('property-bank', 'Property Bank Logo Design', 'Property Bank Real Estate', 'https://www.behance.net/gallery/189115051/Visual-Identity-Design-for-Property-Bank-Real-Estate'),
];

export const BRAND_IDENTITY_STATIONERY_PROJECTS: PortfolioProject[] = [
  identityProject('technical-aluminium', 'Technical Aluminium Brand Identity', 'Technical Aluminium', 'https://www.behance.net/gallery/222098985/Minimal-Brand-Identity-Design-for-Aluminium'),
  identityProject('empiric-marketing', 'Empiric Marketing Stationery System', 'Empiric Marketing', 'https://www.behance.net/gallery/222093711/Modern-Brand-identity-Design-for-Empiric-Marketing'),
  identityProject('arena-marketing', 'Arena Marketing Brand Identity', 'Arena Marketing', 'https://www.behance.net/gallery/222093123/Modern-Brand-Identity-Design-for-Real-Estate-Client'),
  identityProject('am-marketing', 'AM Marketing Brand Identity', 'AM Marketing', 'https://www.behance.net/gallery/222091917/Professional-Brand-Identity-Design-for-AM-Marketing'),
  identityProject('aaa-square', 'AAA Square Corporate Identity', 'AAA Square', 'https://www.behance.net/gallery/222087643/Minimal-Brand-Identity-Design-for-Real-Estate-Client'),
  identityProject('altura-builders', 'Altura Builders Brand Identity', 'Altura Builders', 'https://www.behance.net/gallery/221428659/Professional-Brand-Identity-design-for-Altura-Builders'),
  {
    ...identityProject('round-cube', 'Round Cube Corporate Identity', 'Round Cube Pvt. Ltd', 'https://www.behance.net/gallery/222086261/Minimal-Logo-Design-for-Round-Cube-Client'),
    category: 'Logo Design',
    categoryLabel: '/ Logo Design & Brand Guidelines',
  },
];

import {
  ServiceItem,
  PortfolioProject,
  TeamMember,
  PricingPlan,
  FAQItem,
  BlogPost,
  Award,
  ProcessStep,
  TestimonialItem,
} from '../types';
import { SOCIAL_MEDIA_PROJECTS } from './socialMediaProjects';
import { PRESENTATION_PROJECTS } from './presentationProjects';

// Official Designer Insight Logo & Favicon Assets
export const SITE_CONFIG = {
  name: 'Designer Insight',
  tagline: 'Design & Advertising Agency',
  logoWhite: '/Designer-Insight-Logo-White-1.png',
  logoMain: '/Designer-Insight-Logo-White-1.png',
  logoIcon: '/Designer-Insight-Logo-White.png',
  favicon: '/favicon.svg',
  heroAbstract: '/uploads/abstract-texture-from-mixed-water-and-oil-bubbles-2024-11-18-10-40-26-utc-1.jpg',
  waterBubbleImage: '/uploads/abstract-texture-from-mixed-water-and-oil-bubbles-2024-11-18-10-40-26-utc-1.jpg',
  greenSilkImage: '/uploads/abstract-design-of-green-silk-waves-creating-a-me-2025-02-08-00-45-23-utc-1.jpg',
  glitterImage: '/uploads/abstract-shine-shimmer-glitter-colorful-smear-back-2024-05-30-21-55-13-utc-1.jpg',
  redWaveImage: '/uploads/nice-red-wave-background-or-texture-2024-10-23-00-21-29-utc-1.jpg',
  teamGroupImage: '/uploads/group-of-young-successful-ai-designers-2025-03-13-21-43-31-utc-1.jpg',
  location: 'Wahdat Colony Taxila, Street No 08, House No E-360.',
  phones: ['+92 3145338340', '+92 3487585784'],
  email: 'Info@designerinsight.online',
  socials: {
    facebook: 'https://www.facebook.com/designerinsight53/',
    instagram: 'https://www.instagram.com/designerinsight_/',
    linkedin: 'https://www.linkedin.com/company/designerinsight',
    pinterest: 'https://www.pinterest.com/designerinsight',
    youtube: 'https://www.youtube.com/designerinsight',
  },
  stats: [
    { value: '120+', label: 'Awesome Clients' },
    { value: '350+', label: 'Created Projects' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Awards Won' },
  ],
};

export const MARQUEE_ITEMS = [
  'web design',
  'Digital Marketing',
  'Branding',
  'social media marketing',
  'Graphic design',
  'logo design',
  'Presentation design',
  'web developing',
  'AI & UGC Content',
  'Brand Identity',
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity & Personal Branding',
    description: 'We build strong, memorable brand identities that connect with your audience and leave an indelible impression.',
    icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="10" stroke="%23f84900" stroke-width="2.5"/><circle cx="20" cy="20" r="5" fill="%23f84900"/><path d="M14 34L22 26L30 32L34 28" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    tags: ['Logos', 'Brand Guidelines', 'Typography', 'Color Systems'],
    features: ['Logo Design & Variation', 'Visual Identity Systems', 'Brand Voice & Messaging', 'Packaging Design Guidelines'],
  },
  {
    id: 'web-design-dev',
    number: '02',
    title: 'WordPress & Shopify Web Design & Development',
    description: 'Modern, responsive websites built for performance, impact, seamless interactions, and high-converting user experience.',
    icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="26" rx="6" stroke="%23f84900" stroke-width="2.5"/><path d="M6 18H42" stroke="%23f84900" stroke-width="1.5"/><circle cx="12" cy="14" r="1.5" fill="%23f84900"/><circle cx="17" cy="14" r="1.5" fill="white"/><path d="M18 36H30" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    tags: ['WordPress', 'Shopify', 'UI/UX', 'Custom Code'],
    features: ['E-commerce Store Architecture', 'Custom Theme Engineering', 'Mobile-First Responsiveness', 'Speed & SEO Optimization'],
  },
  {
    id: 'presentation-design',
    number: '03',
    title: 'Presentation Design & Pitch Deck Designs',
    description: 'We design clean, intuitive, and visually compelling pitch decks and keynote slides that win investors and close deals.',
    icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="24" rx="5" stroke="%23f84900" stroke-width="2.5"/><path d="M16 24L22 18L27 22L32 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M24 32V40M16 40H32" stroke="%23f84900" stroke-width="2" stroke-linecap="round"/></svg>`,
    tags: ['Pitch Decks', 'Investor Keynotes', 'Infographics', 'Sales Presentations'],
    features: ['Investor Pitch Decks', 'Conference Keynotes', 'Corporate Slide Systems', 'Custom Data Visualization'],
  },
  {
    id: 'social-media-management',
    number: '04',
    title: 'Social Media Management & Marketing',
    description: 'From concept to execution, we shape bold ideas into striking visual campaigns that build loyal communities and drive growth.',
    icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="%23f84900" stroke-width="2.5"/><path d="M16 24C16 19.5 32 19.5 32 24C32 28.5 16 28.5 16 24Z" stroke="white" stroke-width="2"/><circle cx="24" cy="24" r="3" fill="%23f84900"/></svg>`,
    tags: ['Content Strategy', 'Community Management', 'Reels & Stories', 'Hashtag Systems'],
    features: ['Monthly Content Calendars', 'High-Engagement Reels & Motion', 'Social Profile Audits', 'Active Engagement & Growth'],
  },
  {
    id: 'ugc-content-creation',
    number: '05',
    title: 'AI & Human UGC Content Creation',
    description: 'We create high-quality visuals, videos, and authentic user stories that bring your brand narrative to life dynamically.',
    icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="22" height="24" rx="5" stroke="%23f84900" stroke-width="2.5"/><path d="M30 20L40 14V34L30 28" stroke="white" stroke-width="2.5" stroke-linejoin="round"/><circle cx="19" cy="24" r="4" fill="%23f84900"/></svg>`,
    tags: ['Video Production', 'UGC Ads', 'TikTok & Reels', 'AI Enhanced'],
    features: ['Authentic Creator Videos', 'Viral TikTok / Reels Formats', 'Short-form Ad Creatives', 'Visual Product Demonstrations'],
  },
  {
    id: 'ppc-marketing',
    number: '06',
    title: 'PPC Marketing & Meta Ad Campaigns',
    description: 'Smart, data-driven digital advertising strategies that scale customer acquisition across Meta, Google, and beyond.',
    icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="%23f84900" stroke-width="2.5"/><circle cx="24" cy="24" r="9" stroke="white" stroke-width="2"/><circle cx="24" cy="24" r="3" fill="%23f84900"/><path d="M34 14L42 6" stroke="%23f84900" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    tags: ['Meta Ads', 'Google Ads', 'Funnel Tracking', 'ROAS Optimization'],
    features: ['High-Conversion Ad Copies', 'A/B Creative Testing', 'Pixel & CAPI Setup', 'Weekly ROAS & Analytics Reports'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your brand, goals, and audience through deep collaborative discussion and market research.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'We shape a clear strategy with creative direction, design focus, and user intent at the core of all decisions.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our team crafts bold, functional, and visually striking concepts tailored precisely to your brand identity.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'We build clean, high-performance digital experiences optimized for performance, responsiveness, and real-world results.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'We launch your project with precision — ready to make impact, with ongoing support and guidance you can count on.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // --- 13 NEW & VERIFIED DESIGNER INSIGHT PORTFOLIO WORKS ---
  {
    id: 'paperpals-brand-guidelines',
    title: 'PaperPals Brand Guidelines & Packaging',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/paperpals-brand-guidelines.jpg',
    client: 'PaperPals Eco Products',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/251811149',
    overview: 'Complete sustainable brand identity manual and eco-packaging design guidelines created by Designer Insight for PaperPals ("Sustainable by Nature. Gentle by Choice"). Defines natural botanical color harmonies, eco-seal typography, and embossed paper roll packaging standards.',
    deliverables: [
      'Brand Identity Manual',
      'Sustainable Packaging Guidelines',
      'Eco-Symbol & Iconography System',
      'Color Palette & Typography Specs',
      'Print Production Standards',
    ],
  },
  {
    id: 'amore-homes-brand-guidelines',
    title: 'Amore Homes Brand Guidelines & Architectural Identity',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/amore-homes-brand-guidelines.jpg',
    gallery: [
      '/portfolio/amore-homes-brand-guidelines.jpg',
      '/portfolio/f1-amore-homes-panaflex-design.jpeg',
      '/portfolio/643dcc252142517.Y3JvcCwxNDE3LDExMDksMCww.jpg',
    ],
    client: 'Amore Homes Real Estate & Builders',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/252156415',
    overview: 'Comprehensive luxury real estate brand manual and visual guidelines designed by Designer Insight for Amore Homes ("Luxury homes. Built with trust."). Features executive gold-foil stationery, architectural blueprint integration, 3D villa presentation boxes, and on-site hardhat merchandising.',
    deliverables: [
      'Architectural Brand Identity Manual',
      'Gold-Foil Executive Stationery',
      'On-Site Hardhat & Merchandising',
      'VIP Client Presentation Box',
      'Architectural Blueprint Layouts',
    ],
  },
  {
    id: 'health-care-brand-guidelines',
    title: 'Health Care Brand Identity & Clinical Guidelines',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/health-care-brand-guidelines.png',
    gallery: [
      '/portfolio/health-care-brand-guidelines.png',
      '/portfolio/health-care-stationery-collateral.png',
      '/portfolio/bdb409179925777.Y3JvcCwxNDEyLDExMDQsMCwz.png',
    ],
    client: 'Health Care Medical Center',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/179925777',
    overview: 'Clinical healthcare visual identity manual created by Designer Insight ("Compassion in Every Action. Care in Every Detail."). Establishes medical cross iconography, physician ID lanyards, executive consultation notebooks, clinic signage systems, and trusted patient communication standards.',
    deliverables: [
      'Medical Brand Identity System',
      'Physician ID Badges & Lanyards',
      'Executive Consultation Notebooks',
      'Clinical Signage & Interior System',
      'Corporate Typography & Color Palette',
    ],
  },
  {
    id: 'amiras-furniture-brand-manual',
    title: "Amira's Furniture Brand Identity Manual",
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/amiras-furniture-brand-manual.png',
    gallery: [
      '/portfolio/amiras-furniture-brand-manual.png',
      "/portfolio/026_Social-Media-Post-Design-for-Amira's-Furniture.webp",
      '/portfolio/amiras-furniture-social.jpg',
      '/portfolio/a9624d251809779.Y3JvcCwxNDAwLDEwOTUsMCww.png',
    ],
    client: "Amira's Furniture",
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/251809779',
    overview: 'High-end luxury furniture brand identity manual designed by Designer Insight ("Crafting Comfort, Defining Spaces."). Features illuminated monolithic geometrical brand sculpture, dark minimalist architectural styling, premium catalog specs, and spatial identity standards.',
    deliverables: [
      'Brand Identity Manual',
      '3D Monolithic Sculpture Design',
      'Showroom Spatial Branding',
      'Editorial Material Specifications',
      'Luxury Customer Collateral',
    ],
  },
  {
    id: 'nano-wrap-brand-guidelines',
    title: 'Nano Wrap Paint Protection Film Brand Guidelines',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/nano-wrap-brand-guidelines.png',
    gallery: [
      '/portfolio/nano-wrap-brand-guidelines.png',
      '/portfolio/404b82251811591.Y3JvcCwxMzk5LDEwOTUsMCww.png',
      '/portfolio/5df811251811149.6a3fa6ff298d7.jpg',
    ],
    client: 'Nano Wrap Automotive',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/251811591',
    overview: 'High-performance automotive PPF (Paint Protection Film) brand identity manual engineered by Designer Insight ("Protection That Lasts. Finish That Speaks."). Highlights supercar aerodynamics, neon orange and carbon fiber styling, and dealer presentation kit packaging.',
    deliverables: [
      'Automotive Brand Identity Manual',
      'Matte-Black Packaging Box Suite',
      'Supercar Livery & Decal Guidelines',
      'Technical Spec Sheet Layouts',
      'Authorized Dealer Presentation Kit',
    ],
  },
  {
    id: 'round-cube-brand-guidelines',
    title: 'Round Cube Pvt. Ltd Brand Identity Manual',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/round-cube-brand-guidelines.png',
    gallery: [
      '/portfolio/round-cube-brand-guidelines.png',
      '/portfolio/434061222086261.Y3JvcCwxMzg4LDEwODYsNTQsMA.png',
    ],
    client: 'Round Cube Pvt. Ltd',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/222086261',
    overview: 'Sophisticated enterprise technology brand manual designed by Designer Insight ("Smart Solutions. Endless Possibilities."). Features hexagonal geometric mark, backlit 3D corporate reception sign, debossed hardcover guidelines, and corporate identity tokens.',
    deliverables: [
      'Enterprise Brand Identity Manual',
      '3D Corporate Reception Signage',
      'Debossed Hardcover Manuals',
      'Corporate Metal Badges & Pins',
      'Digital System Architecture Icons',
    ],
  },
  {
    id: 'a-executive-chauffeur-brand-guidelines',
    title: 'A Executive Chauffeur Service Brand Guidelines',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/a-executive-chauffeur-brand-guidelines.png',
    gallery: [
      '/portfolio/a-executive-chauffeur-brand-guidelines.png',
      '/portfolio/efddd1190039593.Y3JvcCwxMzk3LDEwOTMsMjAsMA.png',
    ],
    client: 'A Executive Chauffeur Service',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/190039593',
    overview: 'VIP executive chauffeur brand identity manual designed by Designer Insight. Spotlights gold-stamped royal navy executive journals, ceramic mugs, gold-trimmed luxury pens, genuine leather key fobs, and fleet vehicle livery guidelines.',
    deliverables: [
      'Luxury Brand Identity Manual',
      'Gold-Stamped Executive Notebooks',
      'Corporate Merchandise & Apparel',
      'Vehicle Fleet Livery Specifications',
      'VIP Client Welcome Kits',
    ],
  },
  {
    id: 'mega-drive-destructions-brand-guidelines',
    title: 'Mega Drive Destructions Brand Guidelines',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity Manual',
    image: '/portfolio/mega-drive-destructions-brand-guidelines.png',
    gallery: [
      '/portfolio/mega-drive-destructions-brand-guidelines.png',
      '/portfolio/2966e3184355369.Y3JvcCwxNDAxLDEwOTYsMTcsMA.png',
    ],
    client: 'Mega Drive Destructions',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/184355369',
    overview: 'High-octane motorsport and sports entertainment brand identity manual created by Designer Insight ("Defining Speed. Building Impact."). Incorporates dynamic racing car mascot, checkered flag typography, trackside vertical banners, and stadium event collateral.',
    deliverables: [
      'Motorsport Mascot & Brand Identity',
      'Event Trackside Vertical Banners',
      'Racetrack Perimeter Signage',
      'Apparel & Merchandise Standards',
      'High-Speed Advertising Guidelines',
    ],
  },
  {
    id: 'health-care-stationery-collateral',
    title: 'Health Care Corporate Stationery Suite',
    category: 'Print & Packaging',
    categoryLabel: '/ Corporate Identity Kit',
    image: '/portfolio/health-care-stationery-collateral.png',
    gallery: [
      '/portfolio/health-care-stationery-collateral.png',
      '/portfolio/health-care-brand-guidelines.png',
      '/portfolio/c63168222094995.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png',
    ],
    client: 'Health Care Medical Center',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/222094995',
    overview: 'Complete corporate stationery package designed by Designer Insight for Health Care. Features fluid cyan and emerald medical waves across official letterheads, dual-sided business cards, document presentation folders, branded mailing tubes, and consultation supplies.',
    deliverables: [
      'Official Corporate Letterhead',
      'Executive Business Cards',
      'Presentation Folders & Sleeves',
      'Branded Envelopes & Mailing Tubes',
      'Custom Pens & Medical Notepad Set',
    ],
  },
  {
    id: 'f1-amore-homes-panaflex-design',
    title: 'Professional Panaflex Design for Real Estate & Marketing',
    category: 'Print & Packaging',
    categoryLabel: '/ Outdoor & Panaflex Signage',
    image: '/portfolio/f1-amore-homes-panaflex-design.jpeg',
    gallery: [
      '/portfolio/f1-amore-homes-panaflex-design.jpeg',
      '/portfolio/f1-marketing-flyer-ramadan-calendar.jpg',
      '/portfolio/280a32252434561.Y3JvcCwxNDE2LDExMDgsMCww.jpeg',
    ],
    client: 'F1 Marketing & Amore Homes',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/252434561',
    overview: 'Large-format outdoor panaflex billboard and booking office signage designed by Designer Insight ("Clean. Modern. Impactful."). Designed for F1 Marketing (Authorized Sales Partner of New City Paradise) and Amore Homes Real Estate & Builders.',
    deliverables: [
      'Outdoor Panaflex Billboards',
      'Booking Office Signage',
      'Architectural Site Hoardings',
      'Vector Print-Ready Artwork',
      'Commercial Real Estate Banners',
    ],
  },
  {
    id: 'f1-marketing-flyer-ramadan-calendar',
    title: 'Professional Flyer & Ramadan Calendar Design',
    category: 'Print & Packaging',
    categoryLabel: '/ Print Collateral & Flyer',
    image: '/portfolio/f1-marketing-flyer-ramadan-calendar.jpg',
    client: 'F1 Marketing (New City Paradise)',
    year: '2025',
    behanceUrl: 'https://www.behance.net/gallery/252142517',
    overview: 'High-impact Islamic calendar and corporate marketing flyer designed by Designer Insight ("Clean. Modern. Impactful."). Features midnight navy & gold illuminated lanterns, dual Hanafi & Jafri Sehr/Iftar schedule tables, and promotional partner highlights.',
    deliverables: [
      'Corporate Ramadan Calendars',
      'Dual-Fiqh Prayer Timetables',
      'Marketing Flyer Collateral',
      'High-Res Print Production Files',
      'Digital Social Share Graphics',
    ],
  },
  // --- SOCIAL MEDIA & MARKETING CAMPAIGNS (VERIFIED PORTFOLIO WORK) ---
  ...SOCIAL_MEDIA_PROJECTS,
  // --- ADDITIONAL VERIFIED AGENCY WORK ---
  {
    id: 'empiric-brand-identity',
    title: 'Empiric Brand Identity',
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity',
    image: '/uploads/Empiric-Brand-Identity-Designed-by-Designer-Insight-scaled.png',
    client: 'Empiric Ventures',
    year: '2024',
    overview: 'Clean, authoritative visual positioning for a scientific venture capital fund, blending precision gridlines with elegant modern typography.',
    deliverables: ['Corporate Identity', 'Pitch Deck Template', 'Executive Stationery', 'Website Concept'],
  },
  // --- PRESENTATION DESIGN & PITCH DECKS ---
  ...PRESENTATION_PROJECTS,
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'raja-raza',
    name: 'Raja Raza',
    role: 'Co-Founder & Creative Lead',
    image: '/uploads/Raja-Raza.webp',
    isLeadership: true,
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'aqsa-kamran',
    name: 'Aqsa Kamran',
    role: 'Graphic Designer',
    image: '/uploads/Aqsa-Kamran-scaled.webp',
    isLeadership: true,
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'sajjal-mughal',
    name: 'Sajjal Mughal',
    role: 'Business Development Manager',
    image: '/uploads/Sajjal-Mughal-scaled.webp',
    isLeadership: true,
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'qaiser-raiz-khan',
    name: 'Qaiser Raiz Khan',
    role: 'UX/UI Graphic Designer',
    image: '/uploads/Qaiser-Raiz-Khan-scaled.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'hamza-bin-zia',
    name: 'Hamza Bin Zia',
    role: 'Website Designer / Developer',
    image: '/uploads/Hamza-Graphic-Designer.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'abdul-rehman',
    name: 'Abdul Rehman',
    role: 'Business Development Manager',
    image: '/uploads/Abdul-Rehman-scaled.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'naseem-mai',
    name: 'Naseem Mai',
    role: 'Graphic Designer',
    image: '/uploads/Naseem-Mai-2-scaled.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'noor-mughal',
    name: 'Noor Mughal',
    role: 'Performance & Ecommerce Marketer',
    image: '/uploads/Noor-Mughal-scaled.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'shehzad-manzoor',
    name: 'Shehzad Manzoor',
    role: 'Logo Designer / Graphic Designer',
    image: '/uploads/Shehzad-Manzoor-Graphic-Designer.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'eiza-batool',
    name: 'Eiza Batool',
    role: 'Graphic Designer',
    image: '/uploads/Untitled-design.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/company/designerinsight',
      instagram: 'https://www.instagram.com/designerinsight_',
    },
  },
  {
    id: 'nayab-ismail',
    name: 'Nayab Ismail',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'emaan-qamar',
    name: 'Emaan Qamar',
    role: 'Graphic Designer - Internee',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'raed-hayat',
    name: 'Raed Hayat',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'dyas-kardinal',
    name: 'Dyas Kardinal',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'elsa-verina',
    name: 'Elsa Verina',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'kumto-warming',
    name: 'Kumto Warming',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'harumi',
    name: 'Harumi',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: '$124.48',
    annualPrice: '$99.50',
    period: 'month',
    description: 'Perfect for small businesses or personal projects looking to establish a consistent, polished digital presence.',
    features: [
      '20 Graphic Posts Monthly',
      'Content Calendar Monthly',
      'Facebook / Instagram / LinkedIn',
      'Hashtags Optimizations',
      'Page Handling & Socials Branding',
      '10 Stories GIF & Motion',
      '1 Ad Campaign Setup',
      '1 Advanced High-Quality Reel',
    ],
    ctaText: 'Get Started with Starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: '$213.39',
    annualPrice: '$170.70',
    period: 'month',
    isPopular: true,
    description: 'Best for growing brands, ambitious ventures, and scaling businesses wanting high traction and engagement.',
    features: [
      '30 Graphic Posts Monthly',
      'Content Calendar & Strategy Monthly',
      'Facebook / Instagram / LinkedIn / Pinterest',
      'Analytic Reports & Hashtags Optimization',
      '20 Stories & Highlights Sets',
      'Profile Creation & Social Branding',
      '1 Full Meta/Google Ad Campaign',
      '2 Advanced High-Quality Reels',
    ],
    ctaText: 'Choose Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: '$444.56',
    annualPrice: '$355.60',
    period: 'month',
    description: 'Engineered for larger teams, enterprise brands, and high-impact digital multi-channel leadership.',
    features: [
      '30 Graphic Posts Monthly',
      'Advanced Branding & Strategy Monthly',
      'Facebook / Instagram / LinkedIn / Pinterest / TikTok',
      'In-Depth Analytic Reports & Competitor Audits',
      'Page Handling & Complete Social Branding',
      '2 Dedicated Ad Campaigns',
      '6 Advanced Production Reels & UGC',
      'Google My Business (GMB) Management',
    ],
    ctaText: 'Select Enterprise',
  },
  {
    id: 'custom',
    name: 'CUSTOM Offer',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: 'project',
    description: 'Tailored for clients who wish to discuss a custom rate, specialized deliverables, or select a customized scope.',
    features: [
      'Complete Brand & Digital Asset Audit',
      'Free 1-on-1 Consultation & Pricing Strategy',
      'Tailored Milestone Deliverables',
      'Custom SLA & Direct Slack/WhatsApp Access',
      'Frequently Asked Questions & Strategy Guidance',
    ],
    ctaText: 'Request Custom Proposal',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Payment & Billing',
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including major credit and debit cards, PayPal, and secure bank transfers. For international clients, we also support Stripe and Wise to ensure smooth and reliable transactions no matter where you’re located.',
  },
  {
    id: 'faq-2',
    category: 'Onboarding & Deposit',
    question: 'Do you require a deposit before starting a project?',
    answer:
      'Yes, we typically request a 50% upfront deposit to confirm your project and secure your spot in our schedule. This allows us to begin the initial planning and design phase with full commitment. The remaining balance is paid upon project completion or based on an agreed timeline.',
  },
  {
    id: 'faq-3',
    category: 'Payment Plans',
    question: 'Can I pay in installments?',
    answer:
      'Absolutely. We offer flexible installment plans for larger or long-term projects to help fit your budget. Payment schedules can be arranged monthly or by project milestone, depending on the scope and timeline of your project.',
  },
  {
    id: 'faq-4',
    category: 'Policies',
    question: 'Is there a refund policy?',
    answer:
      'Due to the custom nature of our work, we do not offer full refunds once a project has started. However, if there is a valid reason for cancellation, we’ll assess the work completed and may offer a partial refund or credit toward future services.',
  },
  {
    id: 'faq-5',
    category: 'Revisions & Scope',
    question: 'Do you charge extra for revisions?',
    answer:
      'Each of our packages includes a defined number of revision rounds to ensure your satisfaction. If you need additional revisions beyond what’s included, we’ll clearly communicate any extra charges before moving forward — no surprises.',
  },
  {
    id: 'faq-6',
    category: 'Turnaround',
    question: 'What is your typical turnaround time for projects?',
    answer:
      'Turnaround times depend on project scope: brand identity usually takes 1–2 weeks, web development 2–4 weeks, and pitch decks 3–7 business days. We outline exact milestone dates during our initial discovery call.',
  },
  {
    id: 'faq-7',
    category: 'Ownership',
    question: 'Do I own the copyright and source files upon completion?',
    answer:
      'Yes! Once final payment has cleared, you receive 100% intellectual property ownership and full production source files (Figma, AI, PSD, vector formats, or code repositories).',
  },
];

export const AWARDS_DATA: Award[] = [
  {
    year: '2025',
    title: '2025 MOST INNOVATIVE CREATIVE AGENCY',
    organization: 'International Design Honors',
    description: 'Recognized for pioneering AI-augmented design workflows and bold brand identity systems.',
  },
  {
    year: '2024',
    title: 'EXCELLENCE IN DIGITAL STRATEGY 2024',
    organization: 'Digital Impact Alliance',
    description: 'Awarded for multi-channel conversion campaigns and impactful digital transformation.',
  },
  {
    year: '2023',
    title: 'LEADING BRAND EXPERIENCE AGENCY 2023',
    organization: 'Global Branding Awards',
    description: 'Honoring exceptional spatial and brand identity craftsmanship for emerging consumer brands.',
  },
  {
    year: '2022',
    title: 'VISIONARY DESIGN AGENCY OF THE YEAR',
    organization: 'Creative Innovation Summit',
    description: 'Celebrated for boundary-pushing UI/UX and presentation storytelling.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'creative-tech',
    title: 'Creative Tech: How AI and Generative Systems Elevate Agency Craft',
    category: 'Creative Tech',
    date: 'Dec 18, 2025',
    readTime: '4 min read',
    author: 'Raja Raza',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Exploring how modern studios fuse computational generative tools with artisanal human graphic sensibilities to craft memorable brand experiences.',
    content: `Creative technology is not here to replace human ingenuity; it is an accelerant for visionary craft. At Designer Insight, we leverage generative systems as a rapid conceptual playground.

By shifting tedious mechanical iterations into hyper-responsive loops, our art directors spend more time on what matters most: emotional resonance, typographic subtlety, and cultural context.

Key Takeaways:
1. Augmentation over automation: Keep the human spark at the epicenter of art direction.
2. Speed without compromise: Deliver client iterations in days rather than months.
3. Multimodal cohesion: Unify typography, audio textures, and kinetic motion smoothly across touchpoints.`,
  },
  {
    id: 'digital-vision',
    title: 'Digital Vision: Building Brands That Cut Through the Noise in 2026',
    category: 'Digital Vision',
    date: 'Dec 14, 2025',
    readTime: '6 min read',
    author: 'Aqsa Kamran',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Why safe, cookie-cutter branding is the fastest route to irrelevance, and why bold typographic identity is your ultimate competitive moat.',
    content: `Every day, consumers are bombarded with thousands of algorithmic impressions. The only brands that survive are those willing to declare a definitive aesthetic stance.

A distinct color system, bespoke font pairings, and uncompromising design consistency build instant cognitive recognition.

When clients partner with us, we push past generic templates. We build visual identities with soul, purpose, and unmistakable attitude.`,
  },
  {
    id: 'future-thinking',
    title: 'Future Thinking: The Death of Boring Presentation Pitch Decks',
    category: 'Future Thinking',
    date: 'Nov 29, 2025',
    readTime: '5 min read',
    author: 'Sajjal Mughal',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'How to transform dense spreadsheets and technical roadmaps into cinematic investor narratives that win funding rounds.',
    content: `Investors review hundreds of decks every month. If your slide looks like a spreadsheet pasted onto a white canvas, your pitch has already lost momentum.

Storytelling in presentation design requires rhythm:
- Tension and Release: Highlight the pain point with bold contrast before unveiling the resolution.
- Data as Visual Poetry: Strip away gridlines, focus on one key metric per slide, and let high-contrast typography communicate magnitude.
- Cinematic Pacing: Every slide must naturally propel the viewer toward the next conclusion.`,
  },
  {
    id: 'neural-design',
    title: 'Neural Design: The Evolution of High-Converting UI/UX Interfaces',
    category: 'Neural Design',
    date: 'Nov 12, 2025',
    readTime: '5 min read',
    author: 'Qaiser Raiz Khan',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Designing intuitive digital products that cater to modern cognitive attention spans through micro-interactions and tactile feedback.',
    content: `User experience in 2026 is tactile, responsive, and immediate. Users no longer tolerate clunky menus or laggy state transitions.

By engineering micro-animations, clear typographic hierarchies, and streamlined checkout or onboarding flows, we reduce cognitive friction to near zero.

Discover how our recent e-commerce and mobile app builds achieved an average 38% increase in task completion rates through deliberate interaction design.`,
  },
];

// ==========================================
// 8. CLIENT TESTIMONIALS & FEEDBACK DATA
// ==========================================
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'f1-marketing-testimonial',
    clientName: 'Malik Usman',
    clientRole: 'Head of Marketing & Sales',
    company: 'F1 Marketing (New City Paradise)',
    projectType: 'Outdoor Panaflex & Marketing Collateral',
    quote:
      'Designer Insight exceeded every expectation. The massive outdoor panaflex billboards and booking office signage captured immediate attention across the highway. Booking inquiries surged by over 45% within the first four weeks of installation. Their attention to print production tolerances and color accuracy is unmatched.',
    rating: 5,
    highlightMetric: '+45% Booking Inquiries',
    date: 'January 2026',
    verified: true,
  },
  {
    id: 'mega-drive-testimonial',
    clientName: 'Jordan Vance',
    clientRole: 'Racing Operations Director',
    company: 'Mega Drive Destructions',
    projectType: 'Motorsport Brand Identity & Event Collateral',
    quote:
      'Finding an agency that truly understands the adrenaline and mechanical precision of motorsport is rare. Designer Insight delivered a ferocious mascot, racing typography, and trackside vertical banners that electrify our fans on race days. Our merchandise sales doubled right after the brand reveal.',
    rating: 5,
    highlightMetric: '2x Merch Sales Growth',
    date: 'December 2025',
    verified: true,
  },
  {
    id: 'nano-wrap-testimonial',
    clientName: 'Tariq Al-Mansoor',
    clientRole: 'Managing Director',
    company: 'Nano Wrap Automotive PPF',
    projectType: 'Automotive Brand Guidelines & Packaging',
    quote:
      'We operate in the luxury supercar protection industry where mediocrity is not an option. The comprehensive brand identity manual, matte packaging suites, and supercar decal guidelines crafted by Designer Insight have positioned us as a gold standard among authorized dealerships across the GCC and Europe.',
    rating: 5,
    highlightMetric: '100% Dealer Adoption',
    date: 'January 2026',
    verified: true,
  },
  {
    id: 'round-cube-testimonial',
    clientName: 'Sarah Jenkins',
    clientRole: 'VP of Brand Experience',
    company: 'Round Cube Pvt. Ltd',
    projectType: 'Enterprise Tech Identity & Spatial Signage',
    quote:
      'The 3D geometric corporate mark, reception architectural signage, and debossed hardcover identity manuals created by Designer Insight gave our enterprise software company an unmistakably premium posture. In high-stakes B2B sales meetings, our brand authority now leads the conversation.',
    rating: 5,
    highlightMetric: 'Enterprise Rebrand Success',
    date: 'November 2025',
    verified: true,
  },
  {
    id: 'health-care-testimonial',
    clientName: 'Dr. Hamza Farooq',
    clientRole: 'Medical Director',
    company: 'Health Care Medical Center',
    projectType: 'Corporate Stationery & Patient Experience',
    quote:
      'Pristine execution across official letterheads, executive business cards, and patient consultation folders. Designer Insight balanced clinical authority with calming fluid aesthetics. Feedback from both our medical board and visiting patients has been overwhelmingly positive.',
    rating: 5,
    highlightMetric: 'Complete Hospital Suite',
    date: 'February 2026',
    verified: true,
  },
  {
    id: 'empiric-ventures-testimonial',
    clientName: 'Elena Rostova',
    clientRole: 'Founding Partner',
    company: 'Empiric Ventures',
    projectType: 'Scientific VC Identity & Pitch Deck',
    quote:
      'Designer Insight transformed complex deep-tech concepts and mathematical models into a breathtaking 45-slide keynote deck. The visual hierarchy and custom iconography were critical in closing our $3.2M seed round. Their design sensibility is sharp, disciplined, and world-class.',
    rating: 5,
    highlightMetric: '$3.2M Capital Secured',
    date: 'October 2025',
    verified: true,
  },
  {
    id: 'finflow-testimonial',
    clientName: 'Marcus Sterling',
    clientRole: 'Chief Product Officer',
    company: 'FinFlow Inc.',
    projectType: 'Mobile App UI/UX & Design System',
    quote:
      'Intuitive micro-interactions, silky smooth dark-mode ergonomics, and zero cognitive friction. Daily active user engagement jumped 38% after we shipped the redesign. Working with Designer Insight felt like having an elite Silicon Valley product design team on speed dial.',
    rating: 5,
    highlightMetric: '+38% DAU Engagement',
    date: 'September 2025',
    verified: true,
  },
  {
    id: 'urbanwear-testimonial',
    clientName: 'Chloe Dubois',
    clientRole: 'Creative Director',
    company: 'UrbanWear Apparel',
    projectType: 'E-Commerce Experience & Digital Flagship',
    quote:
      'From wireframes to production-ready design tokens, they crafted a modern shopping experience that feels lightning-fast and effortless. Checkout bounce rates plummeted and our customer conversion rate rose 27% in Q1. An exceptional agency with genuine artistic taste.',
    rating: 5,
    highlightMetric: '+27% Conversion Lift',
    date: 'August 2025',
    verified: true,
  },
];

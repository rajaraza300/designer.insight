import {
  ServiceItem,
  PortfolioProject,
  TeamMember,
  PricingPlan,
  FAQItem,
  BlogPost,
  Award,
  ProcessStep,
} from '../types';

// Fast SVG Data URIs for Official Designer Insight Logo (from uploaded Designer-Insight-Logo-White-1.png)
const logoWhiteSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 56" fill="none"><g transform="translate(2, 3) scale(0.5)"><path d="M 50,6 A 44 44 0 0 1 50,94 L 50,82 A 32 32 0 0 0 50,18 Z" fill="%23f84900"/><path d="M 50,25 A 25 25 0 0 0 50,75 L 50,65 A 15 15 0 0 1 50,35 Z" fill="%23f84900"/><path d="M 50,25 A 25 25 0 0 1 50,75 L 50,65 A 15 15 0 0 0 50,35 Z" fill="%23f84900"/><path d="M 50,41 A 9 9 0 0 0 50,59 Z" fill="%23f84900"/></g><text x="64" y="25" fill="white" font-family="system-ui,sans-serif" font-weight="900" font-size="17" letter-spacing="2.8">DESIGNER</text><text x="65" y="44" fill="white" font-family="system-ui,sans-serif" font-weight="800" font-size="14" letter-spacing="5.6">INSIGHT</text><circle cx="202" cy="39" r="2.8" fill="%23f84900"/></svg>`;

const logoMainSvg = logoWhiteSvg;

export const SITE_CONFIG = {
  name: 'Designer Insight',
  tagline: 'Design & Advertising Agency',
  logoWhite: logoWhiteSvg,
  logoMain: logoMainSvg,
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

export const CLIENT_LOGOS = [
  {
    name: 'Apex Labs',
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" fill="none"><path d="M12 28L22 10L32 28H12Z" stroke="%23f84900" stroke-width="2.5"/><text x="42" y="25" fill="%23d4d4d8" font-family="system-ui,sans-serif" font-weight="800" font-size="14" letter-spacing="1.5">APEX LABS</text></svg>`,
  },
  {
    name: 'Nova Global',
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" fill="none"><circle cx="20" cy="20" r="9" stroke="%23f84900" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="white"/><text x="38" y="25" fill="%23d4d4d8" font-family="system-ui,sans-serif" font-weight="800" font-size="14" letter-spacing="1.5">NOVA TECH</text></svg>`,
  },
  {
    name: 'Vanguard Group',
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" fill="none"><path d="M12 12L21 28L30 12" stroke="%23f84900" stroke-width="2.5" stroke-linecap="round"/><text x="38" y="25" fill="%23d4d4d8" font-family="system-ui,sans-serif" font-weight="800" font-size="13" letter-spacing="1.5">VANGUARD</text></svg>`,
  },
  {
    name: 'Lumina Creative',
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" fill="none"><rect x="13" y="13" width="14" height="14" transform="rotate(45 20 20)" stroke="%23f84900" stroke-width="2.2"/><text x="38" y="25" fill="%23d4d4d8" font-family="system-ui,sans-serif" font-weight="800" font-size="14" letter-spacing="1.5">LUMINA</text></svg>`,
  },
  {
    name: 'Kinesis Motion',
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" fill="none"><path d="M11 20H29M20 11V29" stroke="%23f84900" stroke-width="2.5" stroke-linecap="round"/><text x="38" y="25" fill="%23d4d4d8" font-family="system-ui,sans-serif" font-weight="800" font-size="13.5" letter-spacing="1.5">KINESIS</text></svg>`,
  },
  {
    name: 'Sphere Dynamics',
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" fill="none"><circle cx="20" cy="20" r="10" stroke="%23f84900" stroke-width="2"/><path d="M14 20C14 16 26 16 26 20C26 24 14 24 14 20Z" stroke="white" stroke-width="1.5"/><text x="38" y="25" fill="%23d4d4d8" font-family="system-ui,sans-serif" font-weight="800" font-size="13.5" letter-spacing="1.5">SPHERE</text></svg>`,
  },
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
  {
    id: 'amiras-furniture',
    title: "Amira's Furniture Care Brand Identity",
    category: 'Brand Identity',
    categoryLabel: '/ Brand Identity',
    image: '/uploads/Amiras-Furniture-Care-Brand-Identity-scaled.png',
    client: "Amira's Furniture",
    year: '2025',
    overview: 'Crafted an artisanal, premium visual identity for high-end luxury furniture restoration and bespoke interior preservation.',
    deliverables: ['Custom Monogram Logo', 'Packaging Seals', 'Catalogue Layouts', 'Stationery Suite'],
  },
  {
    id: 'rok-website',
    title: 'ROK Website Design & Development',
    category: 'Web Design',
    categoryLabel: '/ Web Design & UI',
    image: '/uploads/ROK-Website-Design-scaled.png',
    client: 'ROK Modern Living',
    year: '2025',
    overview: 'A sleek, minimalist e-commerce digital flagship built on WordPress & WooCommerce with instant product customizer and swift checkout flow.',
    deliverables: ['UX Wireframes', 'Responsive Web App', 'Interactive Cart', 'Performance Optimization'],
  },
  {
    id: 'minimal-social-amira',
    title: 'Minimal Social Media Branding & Designs',
    category: 'Social Media',
    categoryLabel: '/ Social Media Marketing',
    image: '/uploads/Social-Media-Amira-Furnitures-Behance-1-scaled.png',
    client: "Amira's Furnitures",
    year: '2025',
    overview: 'A monthly cohesive visual campaign that grew Instagram engagement by over 240% in 60 days through editorial product stories.',
    deliverables: ['30 Post Grid Concept', 'Story Motion Templates', 'Engagement Strategy', 'Hashtag Architecture'],
  },
  {
    id: 'social-media-rok',
    title: 'ROK Social Media Content & Campaigns',
    category: 'Social Media',
    categoryLabel: '/ Social Media Marketing',
    image: '/uploads/Social-Media-ROK-Behance-scaled.png',
    client: 'ROK Worldwide',
    year: '2025',
    overview: 'Strategic product showcase reels and carousel cards spotlighting architecture, materials, and Scandinavian lifestyle aesthetics.',
    deliverables: ['Reels Creative Direction', 'Carousel Ad Assets', 'Community Management', 'Monthly Analytics'],
  },
  {
    id: 'finance-tracker-app',
    title: 'Mobile App for Daily Finance Tracker',
    category: 'UI/UX Design',
    categoryLabel: '/ UI/UX Design',
    image: '/uploads/Phone-Mockup_2-1.jpg',
    client: 'FinFlow Inc.',
    year: '2025',
    overview: 'Intuitive micro-interactions and dark-mode data visualization enabling users to budget, track investments, and manage cash flow with zero friction.',
    deliverables: ['Design System & UI Kit', 'Interactive Figma Prototype', 'User Journey Mapping', 'Iconography System'],
  },
  {
    id: 'nova-tech-launch',
    title: 'Bold Launch for Nova Tech Products',
    category: 'Presentation Design',
    categoryLabel: '/ Presentation & Pitch Deck',
    image: '/uploads/Uikit-1.jpg',
    client: 'Nova Technologies',
    year: '2025',
    overview: 'A 45-slide keynote presentation deck engineered for a high-stakes Silicon Valley seed funding round, resulting in $3.2M secured capital.',
    deliverables: ['Investor Pitch Deck', '3D Device Renders', 'Custom Infographics', 'Presenter Coaching Notes'],
  },
  {
    id: 'urbanwear-ecommerce',
    title: 'Minimal E-Commerce for UrbanWear',
    category: 'Web Design',
    categoryLabel: '/ Web & E-Commerce',
    image: '/uploads/Laptop-1.jpg',
    client: 'UrbanWear Apparel',
    year: '2025',
    overview: 'High-speed headless Shopify storefront built with fluid filter animations, quick-add bag functionality, and dynamic lookbook editorial integration.',
    deliverables: ['Custom Shopify Store', 'Lookbook Interactive CMS', 'Global Currency Switcher', 'Cart Optimization'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'raja-raza',
    name: 'Raja Raza',
    role: 'Co-Founder & Creative Lead',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    isLeadership: true,
  },
  {
    id: 'eiza-batool',
    name: 'Eiza Batool',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'sajjal-mughal',
    name: 'Sajjal Mughal',
    role: 'Business Development Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    isLeadership: true,
  },
  {
    id: 'qaiser-raiz-khan',
    name: 'Qaiser Raiz Khan',
    role: 'UX/UI Graphic Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'hamza-bin-zia',
    name: 'Hamza Bin Zia',
    role: 'Website Designer / Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'abdul-rehman',
    name: 'Abdul Rehman',
    role: 'Business Development Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
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
    id: 'noor-mughal',
    name: 'Noor Mughal',
    role: 'Performance & Ecommerce Marketer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'raed-hayat',
    name: 'Raed Hayat',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'shehzad-manzoor',
    name: 'Shehzad Manzoor',
    role: 'Logo Designer / Graphic Designer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
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

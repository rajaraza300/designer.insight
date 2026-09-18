export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'pricing'
  | 'blogs'
  | 'faqs'
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  tags?: string[];
  features?: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Brand Identity' | 'UI/UX Design' | 'Social Media' | 'Presentation Design' | 'Web Design' | 'Print & Packaging';
  categoryLabel: string;
  image: string;
  client?: string;
  year?: string;
  overview?: string;
  deliverables?: string[];
  behanceUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  isLeadership?: boolean;
  socials?: {
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image?: string;
  author: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

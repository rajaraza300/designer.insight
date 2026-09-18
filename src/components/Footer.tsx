import React from 'react';
import { PageId } from '../types';
import { SITE_CONFIG, SERVICES_DATA } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Share2,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-neutral-300 border-t border-neutral-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting matching logo */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#f84900]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#f84900]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Section: "DESIGNED TO INSPIRE THE FUTURE OF CREATIVITY" */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0d0d12] via-[#141216] to-[#120b0b] border border-[#f84900]/30 p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl shadow-black/80">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#f84900]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#f84900]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f84900]/15 text-[#f84900] border border-[#f84900]/30 text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to collaborate?</span>
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                DESIGNED TO INSPIRE THE FUTURE OF CREATIVITY
              </h3>
              <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                Transform your brand with bold ideas, strategic direction, and memorable digital experiences that deliver real, measurable results.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-[#f84900]/30 hover:shadow-[#f84900]/50 whitespace-nowrap cursor-pointer"
            >
              <span>Let's Talk With Us</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/60">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button onClick={() => handleNav('home')} className="block text-left cursor-pointer group" aria-label="Designer Insight Home">
              <BrandLogo variant="white" />
            </button>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              We are a bold creative agency dealing with unique brands, digital experiences, and strategies that make an impact worldwide. Do you need some magic? Let's get started.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href={SITE_CONFIG.socials.pinterest}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Pinterest"
              >
                <Share2 className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f84900]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  Portfolios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  Pricing Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blogs')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs')}
                  className="text-neutral-400 hover:text-[#f84900] transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f84900]" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-left text-neutral-400 hover:text-[#f84900] transition-colors truncate block max-w-xs cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact details (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f84900]" />
              <span>Contact Us</span>
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f84900] shrink-0 mt-1" />
                <span className="leading-snug">{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f84900] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#f84900] transition-colors underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#f84900] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {SITE_CONFIG.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#f84900] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Designer Insight - Design & Advertising Agency. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('faqs')} className="hover:text-neutral-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('faqs')} className="hover:text-neutral-300 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-[#f84900] transition-colors cursor-pointer">
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


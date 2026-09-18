import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { SITE_CONFIG } from '../data/siteData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'services', label: 'Service' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing Plan' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleItemClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-[#f84900]/20 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - 0ms vector component */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          aria-label="Designer Insight Home"
        >
          <BrandLogo variant="white" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#f84900] font-semibold bg-[#f84900]/10 shadow-[0_0_15px_rgba(248,73,0,0.15)]'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#f84900] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenQuote}
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] p-[1px] font-semibold text-sm transition-all shadow-md shadow-[#f84900]/25 hover:shadow-[#f84900]/50 cursor-pointer"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0d] group-hover:bg-opacity-90 transition-all text-white">
              <Sparkles className="w-4 h-4 text-[#f84900]" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#f84900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenQuote}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-xs shadow-sm cursor-pointer"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0a0a0d] border-b border-[#f84900]/20 px-4 pt-3 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              <div className="px-3 py-2 pb-3 mb-1 border-b border-neutral-800/80 flex items-center justify-between">
                <img src="/Designer-Insight-Logo-White-1.png" alt="Designer Insight" className="h-8 w-auto object-contain" />
                <span className="text-[11px] font-mono tracking-widest text-[#f84900] uppercase font-bold">Agency Menu</span>
              </div>
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#f84900]/10 text-[#f84900] font-semibold border-l-2 border-[#f84900]'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-850'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-neutral-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-sm shadow-lg shadow-[#f84900]/25 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Start a Project with Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};


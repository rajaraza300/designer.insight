import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { SITE_CONFIG } from '../data/siteData';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';
import { getPagePath } from '../utils/routes';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, isDark, toggleTheme } = useTheme();

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
    { id: 'testimonials', label: 'Testimonials' },
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
          ? isDark
            ? 'bg-[#070709]/95 backdrop-blur-md border-b border-[#f84900]/20 py-3 shadow-2xl shadow-black/60'
            : 'bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 shadow-md shadow-neutral-900/5'
          : isDark
            ? 'bg-[#070709]/75 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-white/85 backdrop-blur-md py-4 border-b border-neutral-200/80 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href={getPagePath('home')}
          onClick={(event) => {
            event.preventDefault();
            handleItemClick('home');
          }}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          aria-label="Designer Insight Home"
        >
          <BrandLogo variant="auto" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <a
                key={item.id}
                href={getPagePath(item.id)}
                onClick={(event) => {
                  event.preventDefault();
                  handleItemClick(item.id);
                }}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#f84900] font-semibold bg-[#f84900]/10 shadow-[0_0_15px_rgba(248,73,0,0.15)]'
                    : isDark
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 font-semibold'
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
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Controls (Theme Toggle & CTA Button) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={toggleTheme}
            id="desktop-theme-toggle"
            aria-label={isDark ? 'Switch to light theme for accessibility' : 'Switch to dark theme'}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center relative focus:outline-none focus:ring-2 focus:ring-[#f84900] ${
              isDark
                ? 'bg-neutral-900/90 border-neutral-800 text-amber-400 hover:border-amber-400/50 hover:bg-neutral-800 shadow-sm'
                : 'bg-white border-neutral-200 text-neutral-800 hover:border-neutral-400 hover:bg-neutral-100 shadow-sm'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun-icon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-icon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-neutral-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenQuote}
            id="navbar-lets-talk-btn"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-sm transition-all shadow-md shadow-[#f84900]/30 hover:shadow-[#f84900]/55 cursor-pointer group select-none"
          >
            <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold tracking-wide">Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            id="mobile-theme-toggle"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center justify-center ${
              isDark
                ? 'bg-neutral-900 border-neutral-800 text-amber-400 hover:bg-neutral-800'
                : 'bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-100'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
          </button>

          <button
            onClick={onOpenQuote}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-xs shadow-sm cursor-pointer"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border transition-colors focus:outline-none cursor-pointer ${
              isDark
                ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                : 'bg-white border-neutral-200 text-neutral-700 hover:text-black'
            }`}
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
            className={`lg:hidden border-b px-4 pt-3 pb-6 overflow-hidden ${
              isDark
                ? 'bg-[#0a0a0d] border-[#f84900]/20'
                : 'bg-white border-neutral-200 shadow-xl'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              <div className="px-3 py-2 pb-3 mb-1 border-b border-neutral-800/80 flex items-center justify-between">
                <BrandLogo variant="auto" size="sm" />
                <span className="text-[11px] font-mono tracking-widest text-[#f84900] uppercase font-bold">Agency Menu</span>
              </div>

              {/* Theme Switch Row in Mobile Drawer */}
              <div className={`flex items-center justify-between px-4 py-2.5 rounded-xl my-1 border ${
                isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
              }`}>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  {isDark ? <Moon className="w-3.5 h-3.5 text-[#f84900]" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
                  Theme Mode: <span className={isDark ? 'text-white font-bold' : 'text-neutral-900 font-bold'}>{isDark ? 'Dark (Default)' : 'Light (Daylight)'}</span>
                </span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#f84900] text-white flex items-center gap-1 shadow-sm"
                >
                  {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
                  <span>Switch</span>
                </button>
              </div>

              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <a
                    key={item.id}
                    href={getPagePath(item.id)}
                    onClick={(event) => {
                      event.preventDefault();
                      handleItemClick(item.id);
                    }}
                    className={`text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#f84900]/10 text-[#f84900] font-semibold border-l-2 border-[#f84900]'
                        : isDark
                        ? 'text-neutral-300 hover:text-white hover:bg-neutral-850'
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-neutral-800/80">
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

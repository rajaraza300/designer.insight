import React, { useState } from 'react';
import { PageId, PortfolioProject } from '../types';
import {
  SITE_CONFIG,
  SERVICES_DATA,
  PORTFOLIO_PROJECTS,
  AWARDS_DATA,
  PROCESS_STEPS,
  BLOG_POSTS,
} from '../data/siteData';
import { MarqueeTicker } from './MarqueeTicker';
import {
  ArrowUpRight,
  Sparkles,
  Eye,
  CheckCircle2,
  Award,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Share2,
  Layers,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';
import { HeroStatueShowcase } from './HeroStatueShowcase';
import { HomeFaqsSection, HomeTestimonialsSection } from './HomeTrustSections';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: PortfolioProject) => void;
  onOpenQuote: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProject,
  onOpenQuote,
}) => {
  const [portfolioFilter, setPortfolioFilter] = useState<string>('All');

  // Curate a balanced mix across all categories for the "All" view on Home
  const allMixedProjects = React.useMemo(() => {
    const categoryOrder: Array<PortfolioProject['category']> = [
      'Brand Identity',
      'Social Media',
      'Presentation Design',
      'Print & Packaging',
      'Web Design',
      'UI/UX Design',
    ];

    const byCat: Record<string, PortfolioProject[]> = {};
    categoryOrder.forEach((cat) => {
      byCat[cat] = PORTFOLIO_PROJECTS.filter((p) => p.category === cat);
    });

    const result: PortfolioProject[] = [];
    const maxLen = Math.max(...categoryOrder.map((cat) => byCat[cat]?.length || 0));

    for (let i = 0; i < maxLen; i++) {
      for (const cat of categoryOrder) {
        if (byCat[cat] && byCat[cat][i]) {
          result.push(byCat[cat][i]);
        }
      }
    }
    return result.slice(0, 9);
  }, []);

  const filteredProjects =
    portfolioFilter === 'All'
      ? allMixedProjects
      : PORTFOLIO_PROJECTS.filter((p) => p.category === portfolioFilter).slice(0, 9);

  const categories = [
    'All',
    'Brand Identity',
    'Print & Packaging',
    'Social Media',
    'UI/UX Design',
    'Web Design',
    'Presentation Design',
  ].filter(
    (category) =>
      category === 'All' ||
      PORTFOLIO_PROJECTS.some((project) => project.category === category),
  );

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 border-b border-neutral-900 overflow-hidden">
        {/* Ambient background lighting matching #f84900 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#f84900]/14 via-[#ff6a1a]/8 to-transparent blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#f84900]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff6a1a]/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              {/* Badge: Who We Are */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(248,73,0,0.2)]"
              >
                <Sparkles className="w-4 h-4 text-[#f84900] animate-pulse" />
                <span>Who We Are ?</span>
              </motion.div>

              {/* Main Display Headline with #f84900 Gradient */}
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]"
                >
                  Designer
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] uppercase leading-[0.95]"
                >
                  INSIGHT
                </motion.h1>
              </div>

              {/* Agency Intro Copy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-neutral-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
              >
                We are a bold creative agency dealing with unique brands, digital experiences, and strategies that make an impact. Do you need some Magic?{' '}
                <strong className="text-white font-semibold">— Let's get started.</strong>
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-base transition-all duration-300 shadow-xl shadow-[#f84900]/30 hover:shadow-[#f84900]/50 cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 hover:border-[#f84900]/50 font-semibold text-base transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#f84900]" />
                  <span>Explore Work</span>
                </motion.button>
              </motion.div>

              {/* Social Channels Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-neutral-400"
              >
                <span className="text-neutral-500">Follow:</span>
                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white transition-all"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={SITE_CONFIG.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white transition-all"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={SITE_CONFIG.socials.pinterest}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#f84900] hover:bg-[#f84900] hover:text-white transition-all"
                    title="Pinterest"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Hero Visual Showcase (5 cols) - Classical Marble Statue Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]"
            >
              <div className="relative w-full max-w-md lg:max-w-[480px] flex items-center justify-center">
                {/* Classical Marble Statue Showcase */}
                <HeroStatueShowcase />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE TICKER */}
      <MarqueeTicker />

      {/* 3. WHAT WE OFFER */}
      <section className="py-20 sm:py-28 bg-[#09090c] border-b border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3 block flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              We help brands stand out through bold design, strategic thinking, and impactful digital experiences.
            </h2>
          </motion.div>

          {/* 3 Core Highlight Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.id}
                id={`home-service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -7, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-[#f84900]/60 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 hover:shadow-[0_20px_45px_-12px_rgba(248,73,0,0.28),0_0_25px_rgba(248,73,0,0.12)] cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black text-neutral-600 group-hover:text-[#f84900] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#121216] border border-neutral-800 group-hover:border-[#f84900]/50 flex items-center justify-center p-2.5 transition-all">
                      <img
                        src={service.icon}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain filter group-hover:brightness-125"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f84900] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-[#f84900]">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-[#f84900] text-white font-medium text-sm transition-all cursor-pointer"
            >
              <span>Explore All 6 Specialized Solutions</span>
              <ArrowUpRight className="w-4 h-4 text-[#f84900]" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* 4. ABOUT DESIGNER INSIGHT */}
      <section className="py-20 sm:py-28 bg-[#070709] border-b border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#f84900]/30 bg-neutral-950 p-2 shadow-2xl">
                <ImageWithFallback
                  src={SITE_CONFIG.teamGroupImage}
                  fallbackSrc={SITE_CONFIG.greenSilkImage}
                  alt="Designer Insight Team"
                  fallbackTitle="Designer Insight Creative Studio"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl"
                  containerClassName="rounded-2xl"
                />
              </div>
              {/* Floating Stat card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0d0d12]/95 backdrop-blur-md border border-[#f84900]/40 p-5 rounded-2xl shadow-2xl"
              >
                <div className="text-3xl font-black text-[#f84900]">350+</div>
                <div className="text-xs text-neutral-300 uppercase tracking-wider font-semibold mt-0.5">
                  Created Projects Delivered
                </div>
              </motion.div>
            </motion.div>

            {/* Right Story Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] block flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
                About Designer Insight
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Creative Minds. One Vision.
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Designer insight is a creative agency driven by bold ideas and purposeful design. For over 5 years, we’ve helped brands craft unique identities, build engaging digital experiences, and deliver impactful visuals that resonate. Our team blends strategy, creativity, and passion in everything we do.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#f84900]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#f84900] font-bold text-sm mb-1.5">
                    <Zap className="w-4 h-4 text-[#f84900]" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    To be a leading creative agency that transforms bold ideas into impactful digital experiences, inspiring brands worldwide.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#f84900]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#f84900] font-bold text-sm mb-1.5">
                    <Layers className="w-4 h-4 text-[#f84900]" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    We create bold, strategic, and meaningful design solutions that help brands connect, grow, and leave a lasting impact.
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-800">
                {SITE_CONFIG.stats.map((st, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] to-[#ff7a38]">
                      {st.value}
                    </div>
                    <div className="text-xs text-neutral-400 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#f84900] hover:text-[#ff7a38] transition-colors cursor-pointer"
                >
                  <span>Read more about our studio &amp; meet our team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. OUR PORTFOLIO */}
      <section className="py-20 sm:py-28 bg-[#08090E] border-b border-neutral-900 [content-visibility:auto] [contain-intrinsic-size:1200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3 block flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Bold Ideas Brought to Life Through Design and Strategy
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#f84900] text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#f84900]" />
            </button>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  portfolioFilter === cat
                    ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold shadow-md shadow-[#f84900]/30'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`home-project-card-${project.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.025 }}
                onClick={() => onOpenProject(project)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-[#f84900]/70 transition-all duration-300 flex flex-col shadow-xl shadow-black/40 hover:shadow-[0_22px_50px_-10px_rgba(248,73,0,0.3),0_0_30px_rgba(248,73,0,0.15)] will-change-transform"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  {project.behanceUrl && (
                    <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#0057ff]/50 text-[#3b82f6] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff] animate-pulse" />
                      <span>Behance</span>
                    </div>
                  )}
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    fallbackTitle={project.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 group-hover:scale-105 transition-all duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    {project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0057ff]/90 hover:bg-[#0057ff] text-white font-semibold text-[11px] shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        <span>Open on Behance</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#f84900] tracking-wide uppercase">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#f84900] transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                    <span>{project.year || '2025'}</span>
                    <span className="text-[#f84900] font-medium flex items-center gap-1 group-hover:text-[#ff7a38] transition-colors">
                      Inspect Details <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS & ACCOLADES */}
      <section className="py-20 sm:py-28 bg-[#070709] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3 block flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
              Awards We Achieve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Achievements &amp; Accolades
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
              We take pride in the recognition we’ve earned from industry leaders — celebrating creativity, strategy, and impact through award-winning work that pushes boundaries and sets new standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AWARDS_DATA.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-[#f84900]/40 transition-all flex flex-col justify-between hover:shadow-[0_0_25px_rgba(248,73,0,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#f84900]">{award.year}</span>
                    <Award className="w-5 h-5 text-neutral-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-3 font-medium">
                    {award.organization}
                  </p>
                </div>
                {award.description && (
                  <p className="text-xs text-neutral-500 border-t border-neutral-900 pt-3">
                    {award.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 5-STEP PROCESS: BUILT WITH PURPOSE */}
      <section className="py-20 sm:py-28 bg-[#09090c] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3 block">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Built with Purpose, Delivered with Style
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              A structured five-phase roadmap that transforms abstract goals into high-impact digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800/80 relative flex flex-col justify-between hover:border-[#f84900]/40 transition-all"
              >
                <div>
                  <span className="text-3xl font-black text-[#f84900] mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center gap-1.5 text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f84900]" />
                  <span>Phase complete</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLIENT TESTIMONIALS */}
      <div className="[content-visibility:auto] [contain-intrinsic-size:700px]">
        <HomeTestimonialsSection />
      </div>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <div className="[content-visibility:auto] [contain-intrinsic-size:700px]">
        <HomeFaqsSection />
      </div>

      {/* 11. BLOG INSIGHTS PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#070709] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3 block flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
                Editorial &amp; Insights
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                The Blog That Thinks in Bold
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blogs')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#f84900] hover:text-[#ff7a38] transition-colors cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => onNavigate('blogs')}
                className="group cursor-pointer p-6 rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-[#f84900]/40 transition-all flex flex-col justify-between hover:shadow-[0_0_20px_rgba(248,73,0,0.15)]"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[11px] font-semibold text-[#f84900] mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#f84900] transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                  <span>{post.readTime}</span>
                  <span className="group-hover:text-[#f84900] font-medium flex items-center gap-1">
                    Read <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CALL TO ACTION */}
      <section className="py-20 sm:py-28 dark:bg-gradient-to-b dark:from-[#070709] dark:to-[#040406] bg-gradient-to-b from-[#f8f9fa] to-white border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#f84900]/15 to-[#ff6a1a]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] block">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Bring your vision to life with bold creativity.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a full brand overhaul, an investor-ready pitch deck, or high-performing web and ad creatives, our team is ready.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-base transition-all duration-300 shadow-xl shadow-[#f84900]/30 hover:shadow-[#f84900]/50 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-base transition-colors cursor-pointer shadow-sm"
            >
              <span>Contact Directly</span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

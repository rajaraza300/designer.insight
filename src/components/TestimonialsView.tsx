import React, { useState } from 'react';
import { PageId, TestimonialItem } from '../types';
import { TESTIMONIALS_DATA } from '../data/siteData';
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Award,
  MessageSquareQuote,
  Layers,
  Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = [
    { id: 'All', label: 'All Reviews' },
    { id: 'Brand', label: 'Brand Identity' },
    { id: 'Print', label: 'Print & Outdoor' },
    { id: 'Digital', label: 'UI/UX & Digital' },
    { id: 'Presentation', label: 'Presentation Design' },
  ];

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Brand') {
      return (
        item.projectType.includes('Brand') ||
        item.projectType.includes('Identity')
      );
    }
    if (selectedFilter === 'Print') {
      return (
        item.projectType.includes('Panaflex') ||
        item.projectType.includes('Print') ||
        item.projectType.includes('Stationery') ||
        item.projectType.includes('Packaging')
      );
    }
    if (selectedFilter === 'Digital') {
      return (
        item.projectType.includes('UI/UX') ||
        item.projectType.includes('E-Commerce') ||
        item.projectType.includes('App')
      );
    }
    if (selectedFilter === 'Presentation') {
      return (
        item.projectType.includes('Presentation') ||
        item.projectType.includes('Pitch Deck')
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Ambient background glow matching #f84900 */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#f84900]/12 via-[#ff6a1a]/6 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-[#f84900]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#ff6a1a]/8 blur-[140px] pointer-events-none" />

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(248,73,0,0.15)]">
            <MessageSquareQuote className="w-4 h-4 text-[#f84900]" />
            <span>Client Stories & Endorsements</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            Proven Results.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42]">
              Real Client Trust.
            </span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Discover why forward-thinking founders, enterprise directors, and
            marketing heads choose Designer Insight for their highest-stakes
            brand identities, marketing collateral, and digital experiences.
          </p>
        </motion.div>

        {/* Agency Trust & Performance Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12"
        >
          <div
            id="testimonial-stat-satisfaction"
            className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-center relative overflow-hidden group hover:border-[#f84900]/50 transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f84900] to-transparent opacity-60" />
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#f84900] transition-colors">
              99.4%
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
              Client Satisfaction
            </div>
            <div className="mt-2 text-[11px] text-[#f84900] font-semibold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Reviews</span>
            </div>
          </div>

          <div
            id="testimonial-stat-projects"
            className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-center relative overflow-hidden group hover:border-[#f84900]/50 transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f84900] to-transparent opacity-60" />
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#f84900] transition-colors">
              250+
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
              Projects Completed
            </div>
            <div className="mt-2 text-[11px] text-[#f84900] font-semibold flex items-center justify-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Across 12+ Countries</span>
            </div>
          </div>

          <div
            id="testimonial-stat-rating"
            className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-center relative overflow-hidden group hover:border-[#f84900]/50 transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f84900] to-transparent opacity-60" />
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#f84900] transition-colors flex items-center justify-center gap-1.5">
              <span>5.0</span>
              <div className="flex text-[#f84900]">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
              Average Rating
            </div>
            <div className="mt-2 text-[11px] text-[#f84900] font-semibold flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>Top Creative Partner</span>
            </div>
          </div>

          <div
            id="testimonial-stat-turnaround"
            className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-center relative overflow-hidden group hover:border-[#f84900]/50 transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f84900] to-transparent opacity-60" />
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#f84900] transition-colors">
              48h
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
              Initial Concept Pitch
            </div>
            <div className="mt-2 text-[11px] text-[#f84900] font-semibold flex items-center justify-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Fast-Track Delivery</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 font-medium mr-2">
            <Filter className="w-3.5 h-3.5 text-[#f84900]" />
            <span>Filter by Sector:</span>
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`testimonial-filter-${tab.id.toLowerCase()}`}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white shadow-lg shadow-[#f84900]/30'
                  : 'bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonial Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                id={`testimonial-card-${item.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -7, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-neutral-950 border border-neutral-800/90 hover:border-[#f84900]/60 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 hover:shadow-[0_20px_45px_-12px_rgba(248,73,0,0.28),0_0_25px_rgba(248,73,0,0.12)] relative overflow-hidden"
              >
                {/* Subtle top corner ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f84900]/5 rounded-full blur-2xl group-hover:bg-[#f84900]/15 transition-all pointer-events-none" />

                <div>
                  {/* Card Header: Rating & Project Scope Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
                    <div className="flex items-center gap-1 text-[#f84900]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(248,73,0,0.4)]"
                        />
                      ))}
                    </div>

                    {item.highlightMetric && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs font-bold tracking-wide">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{item.highlightMetric}</span>
                      </span>
                    )}
                  </div>

                  {/* Quote Icon & Body */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#f84900]/25 mb-3 rotate-180" />
                    <p className="text-neutral-200 text-sm sm:text-base leading-relaxed italic font-normal">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Card Footer: Client Info & Verification */}
                <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Monogram Avatar */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f84900]/20 to-neutral-900 border border-[#f84900]/30 flex items-center justify-center text-[#f84900] font-black text-base shadow-md shrink-0 group-hover:border-[#f84900] transition-colors">
                      {item.clientName
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                          {item.clientName}
                        </h4>
                        {item.verified && (
                          <span
                            title="Verified Client Review"
                            className="text-[#f84900]"
                          >
                            <CheckCircle2 className="w-4 h-4 fill-[#f84900]/20" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-neutral-400 font-medium">
                        {item.clientRole} ·{' '}
                        <span className="text-neutral-300 font-semibold">
                          {item.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] text-neutral-400 font-medium block">
                      {item.projectType}
                    </span>
                    {item.date && (
                      <span className="text-[10px] text-neutral-400 block mt-0.5">
                        {item.date}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Featured Spotlight Quote Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0e0d14] via-[#120f18] to-[#0a0910] border border-[#f84900]/35 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/80"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f84900]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f84900]/15 text-[#f84900] border border-[#f84900]/30 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client Excellence Spotlight</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                "Designer Insight turned our high-stakes outdoor and print
                presence into a lead-generation machine."
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Whether creating monumental real estate outdoor billboards, VIP
                motorsport identity manuals, or high-conversion enterprise digital
                interfaces, our team works tirelessly to engineer visual power that
                multiplies your commercial returns.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-neutral-400">
                <span className="font-semibold text-white">Malik Usman</span>
                <span>·</span>
                <span>F1 Marketing Authorized Partner</span>
                <span>·</span>
                <span className="text-[#f84900] font-semibold">
                  +45% Conversion Lift
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch lg:items-end">
              <motion.button
                id="testimonial-spotlight-quote-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#f84900]/30 hover:shadow-[#f84900]/50 cursor-pointer transition-all"
              >
                <span>Start Your Success Story</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                id="testimonial-spotlight-portfolio-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 hover:border-[#f84900]/50 font-semibold text-sm sm:text-base cursor-pointer transition-all"
              >
                <span>View Real Client Case Studies</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-neutral-950 border border-neutral-800/80 p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#f84900]" />
            <span>Join 250+ Satisfied Clients</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Experience the Designer Insight Difference?
          </h2>

          <p className="text-neutral-300 text-base max-w-xl mx-auto leading-relaxed">
            Let's discuss your brand goals, project timelines, and custom
            deliverables. Get a tailored project estimate within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.button
              id="testimonial-bottom-cta-quote"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-base shadow-xl shadow-[#f84900]/30 hover:shadow-[#f84900]/50 cursor-pointer transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              id="testimonial-bottom-cta-pricing"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 hover:border-[#f84900]/50 font-semibold text-base cursor-pointer transition-all"
            >
              <span>View Pricing Plans</span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

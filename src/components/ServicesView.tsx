import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, PROCESS_STEPS } from '../data/siteData';
import { ArrowUpRight, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#f84900]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-80 right-10 w-96 h-96 bg-[#f84900]/8 blur-[140px] pointer-events-none" />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(248,73,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f84900]" />
            <span>Our Core Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Creative Solutions That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              Deliver Impact
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            We craft smart, impactful design and strategy that solve real problems, elevate brands, and drive measurable results across every touchpoint.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all shadow-lg shadow-[#f84900]/25 cursor-pointer"
            >
              <span>Let's Talk With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* The 6 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(248,73,0,0.15)]"
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-neutral-600 group-hover:text-[#f84900] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#121216] border border-neutral-800 group-hover:border-[#f84900]/50 flex items-center justify-center p-3 transition-colors">
                    <img
                      src={service.icon}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain filter group-hover:brightness-125"
                    />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#f84900] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Checklist */}
                {service.features && (
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f84900] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-900">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-[#f84900] hover:text-white text-neutral-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Proposal for {service.title.split('&')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5-Step Process Section: Built with Purpose, Delivered with Style */}
      <section className="bg-[#050508] py-20 border-y border-neutral-900 mb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-2 block flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
                The Designer Insight Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Built with Purpose, Delivered with Style
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#f84900] text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#f84900]" />
              <span>Contact Our Team</span>
            </motion.button>
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
                <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f84900]" />
                  <span>Phase Milestone</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#120d0b] to-[#0c0909] border border-[#f84900]/30 space-y-5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f84900]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            Ready to elevate your digital presence?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Tell us about your brand needs and get a customized proposal within 24 hours.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all shadow-lg shadow-[#f84900]/30 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

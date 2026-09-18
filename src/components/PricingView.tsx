import React, { useState } from 'react';
import { PageId } from '../types';
import { PRICING_PLANS, FAQS_DATA } from '../data/siteData';
import { Check, ArrowUpRight, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#f84900]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-[#f84900]/8 blur-[140px] pointer-events-none" />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(248,73,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f84900]" />
            <span>Transparent Investment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Flexible Pricing for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              Every Stage
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Choose the package designed for your growth stage. Transparent deliverables, guaranteed timelines, and zero hidden fees.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-neutral-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-neutral-800 border border-neutral-700 p-1 transition-colors focus:outline-none cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#f84900] transition-transform ${
                  isAnnual ? 'translate-x-7 bg-[#ff7a38]' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-neutral-400'}`}>
                Annual
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#f84900]/20 text-[#f84900] text-[11px] font-bold">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-[#120d0b] border-2 border-[#f84900] shadow-2xl shadow-[#f84900]/20'
                    : 'bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/40'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-neutral-800/80 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">{price}</span>
                      {price !== 'Custom' && (
                        <span className="text-xs text-neutral-400 font-medium">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                    {isAnnual && price !== 'Custom' && (
                      <span className="text-[11px] text-[#f84900] mt-1 block font-medium">
                        Billed annually (discount applied)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block">
                      Included in Plan:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-[#f84900]/20 text-[#f84900] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenQuote}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white shadow-md shadow-[#f84900]/30'
                      : 'bg-neutral-900 hover:bg-[#f84900] hover:text-white text-white border border-neutral-800 hover:border-[#f84900]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Payment & FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-2 block">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Pricing &amp; Billing Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS_DATA.slice(0, 5).map((faq) => {
            const isExpanded = expandedFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#f84900] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#f84900] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-900"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('faqs')}
            className="text-xs font-semibold text-[#f84900] hover:text-[#ff7a38] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Agency Frequently Asked Questions</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#120d0b] to-[#0c0909] border border-[#f84900]/30 space-y-5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f84900]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            Need a tailored scope or custom milestone plan?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            We happily formulate custom deliverables, multi-month retainer agreements, and rapid turnaround schedules.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all shadow-lg shadow-[#f84900]/30 cursor-pointer"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

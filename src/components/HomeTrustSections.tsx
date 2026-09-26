import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS_DATA, TESTIMONIALS_DATA } from '../data/siteData';

export const HomeTestimonialsSection: React.FC = () => {
  const featured = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28 bg-[#070709] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3 block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Real Trust. Real Results.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            What clients say after working with Designer Insight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-1 text-[#f84900] mb-5" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Quote className="w-7 h-7 text-[#f84900]/30 rotate-180 mb-3" />
              <p className="text-neutral-200 text-sm leading-relaxed italic mb-7">“{item.quote}”</p>
              <div className="pt-5 border-t border-neutral-800">
                <h3 className="font-bold text-white">{item.clientName}</h3>
                <p className="text-xs text-neutral-400 mt-1">{item.clientRole} · {item.company}</p>
                <p className="text-xs font-semibold text-[#f84900] mt-2">{item.projectType}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeFaqsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(FAQS_DATA[0]?.id ?? null);
  const featured = FAQS_DATA.slice(0, 6);

  return (
    <section id="faqs" className="scroll-mt-24 py-20 sm:py-28 bg-[#09090c] border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f84900] mb-3">
            <Sparkles className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Your Questions, Answered.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Clear answers about payments, timelines, revisions and ownership.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {featured.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div key={faq.id} className="rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/40 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#f84900] shrink-0" />
                    {faq.question}
                  </span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-[#f84900] shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pt-4 text-sm text-neutral-300 leading-relaxed border-t border-neutral-900">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS_DATA } from '../data/siteData';
import { Sparkles, HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const FaqsView: React.FC<FaqsViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['All', 'Payment & Billing', 'Onboarding & Deposit', 'Policies', 'Scope & Revisions', 'Ownership'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

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
            <span>Help &amp; Clarity</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Your Questions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              Answered
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our design methodology, payment terms, turnaround times, and ownership.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. deposit, refund, revisions)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f84900] transition-colors shadow-inner"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white shadow-md shadow-[#f84900]/20'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-neutral-950 border border-neutral-800">
            <p className="text-neutral-400 text-sm">No questions found matching your search query.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#f84900] to-[#ff7a38] text-white font-semibold text-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/40 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#f84900] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <div className="p-1.5 rounded-full bg-neutral-900 text-neutral-400 shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#f84900]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-900"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#120d0b] to-[#0c0909] border border-[#f84900]/30 space-y-5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f84900]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-[#f84900]/20 text-[#f84900] flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Still have questions or need specific project guidance?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Our team is always happy to answer questions, assess technical feasibility, or discuss custom scopes.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all shadow-lg shadow-[#f84900]/30 cursor-pointer"
            >
              <span>Contact Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

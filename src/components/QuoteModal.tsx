import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, MessageSquare, PhoneCall, Check } from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '../data/siteData';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Brand Identity & Personal Branding']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#120d0b] border border-[#f84900]/35 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Subtle Success Toast Floating Pill */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -25, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: 'spring', damping: 22, stiffness: 350 }}
                className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-emerald-500/95 text-white text-xs font-semibold shadow-lg shadow-emerald-500/30 backdrop-blur-md flex items-center gap-2 border border-emerald-300/40"
              >
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Inquiry Dispatched Successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
            <div className="flex items-center gap-3">
              <BrandLogo variant="auto" size="sm" className="hidden sm:inline-flex" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Let's Talk With Us</h3>
                <p className="text-xs text-neutral-400">Tell us about your brand vision or upcoming launch.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-800 hover:bg-[#f84900] text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="py-10 text-center space-y-5"
              >
                {/* Checkmark Animation with Glow Rings */}
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  {/* Outer Pulsing Halo */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md"
                  />
                  {/* Secondary Ring */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center"
                  >
                    {/* Inner Core with Animated SVG Checkmark */}
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 260, delay: 0.2 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-600/40"
                    >
                      <motion.svg
                        className="w-7 h-7 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M20 6L9 17L4 12"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
                        />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="space-y-2"
                >
                  <h4 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    Message Received!
                  </h4>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting <strong className="text-[#f84900]">Designer Insight</strong>, {name || 'Partner'}. Our creative leads review every submission and will get back to you within 24 hours.
                  </p>
                </motion.div>

                {/* Submitted Summary Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className="inline-flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 max-w-lg mx-auto"
                >
                  <span className="text-neutral-400">Selected Services:</span>
                  {selectedServices.slice(0, 2).map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-[#f84900]/20 text-[#f84900] font-medium text-[11px]">
                      {s}
                    </span>
                  ))}
                  {selectedServices.length > 2 && (
                    <span className="text-neutral-400 text-[11px]">+{selectedServices.length - 2} more</span>
                  )}
                  <span className="text-neutral-500">•</span>
                  <span className="text-emerald-400 font-medium">Budget: {budget}</span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                  className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                  <a
                    href="https://wa.me/923145338340?text=Hello%20Designer%20Insight,%20I%20just%20submitted%20a%20project%20inquiry!"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-emerald-600/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2.5">
                    What services do you need?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedServices.includes(srv.title);
                      return (
                        <button
                          type="button"
                          key={srv.id}
                          onClick={() => toggleService(srv.title)}
                          className={`text-left p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#f84900]/15 border-[#f84900] text-[#f84900] font-semibold'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                          }`}
                        >
                          {srv.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Estimated Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {['< $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`py-2 px-3 rounded-lg border font-medium text-center transition-all cursor-pointer ${
                          budget === b
                            ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold border-[#f84900]'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Johnathan Doe"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Phone / WhatsApp (Optional)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000 or WhatsApp number"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                  />
                </div>

                {/* Project brief */}
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Project Brief &amp; Goals</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about what you want to achieve, timeline, and any inspiration..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#f84900]/30 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Creative Proposal</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Quick Contact Footer */}
          <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#f84900]" />
              <span>Direct Call / WhatsApp: {SITE_CONFIG.phones[0]}</span>
            </div>
            <span>Taxila, PK</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

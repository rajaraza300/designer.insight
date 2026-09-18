import React, { useState } from 'react';
import { SITE_CONFIG, SERVICES_DATA } from '../data/siteData';
import {
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Brand Identity & Personal Branding');
  const [message, setMessage] = useState('');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#f84900]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-[#f84900]/8 blur-[140px] pointer-events-none" />

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
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            We’re Just One{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              Message Away
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Have questions about an upcoming launch or want to reimagine your company’s digital identity? Our creative directors respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Main Grid: Info Cards (5 cols) & Contact Form (7 cols) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Studios */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(248,73,0,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f84900]/15 border border-[#f84900]/30 text-[#f84900] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Our Studio Location</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {SITE_CONFIG.location}
                  </p>
                  <span className="text-xs text-neutral-500 mt-2 block">
                    Taxila / Islamabad Capital Region, Pakistan
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(248,73,0,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f84900]/15 border border-[#f84900]/30 text-[#f84900] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Email Directly</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-[#f84900] hover:text-[#ff7a38] transition-colors block font-medium underline-offset-4 hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <span className="text-xs text-neutral-500 mt-1 block">
                    Expect a detailed response within 24 business hours.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Phone & WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(248,73,0,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f84900]/15 border border-[#f84900]/30 text-[#f84900] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Call / WhatsApp Support</h3>
                  <div className="space-y-1 mt-1">
                    {SITE_CONFIG.phones.map((pNum, idx) => (
                      <a
                        key={idx}
                        href={`tel:${pNum.replace(/\s+/g, '')}`}
                        className="text-sm text-neutral-200 hover:text-[#f84900] transition-colors block font-medium"
                      >
                        {pNum}
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center gap-2">
                    <a
                      href="https://wa.me/923145338340?text=Hello%20Designer%20Insight,%20I%20would%20like%20to%20discuss%20a%20project"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-3xl bg-[#120d0b] border border-neutral-800/80"
            >
              <div className="flex items-center gap-3 mb-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#f84900]" />
                <span>Operating Hours</span>
              </div>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold text-white">9:00 AM – 7:00 PM (PKT / GMT+5)</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-white">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Sunday:</span>
                  <span>Closed for Creative Recharging</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl relative">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Send Us a Message</h2>
                <p className="text-sm text-neutral-400 mt-1">
                  Fill in your details below and tell us about your brand goals.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#f84900]">{name || 'Friend'}</strong>. Your message has been routed to our Co-Founder Raja Raza and creative leadership. We look forward to connecting with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Johnathan Doe"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+92 314 5338340"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {['< $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`py-2 px-3 rounded-xl border text-center font-medium transition-all cursor-pointer ${
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

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                      Your Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please share details about your company, current pain points, and target launch timeframe..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f84900] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#f84900]/25 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Creative Leads</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map / Studio Headquarters Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 p-8 sm:p-12 relative flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#f84900]/40 transition-colors"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-1 block">
              Headquarters
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Designer Insight Creative Studio
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Wahdat Colony Taxila, Street No 08, House No E-360.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Taxila,Pakistan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-[#f84900] text-neutral-200 text-sm font-semibold transition-colors"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#f84900]" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { PageId } from '../types';
import {
  SITE_CONFIG,
  AWARDS_DATA,
  TEAM_MEMBERS,
} from '../data/siteData';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Layers,
  Award,
  CheckCircle2,
  Users,
  Linkedin,
  Twitter,
  Globe,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [teamFilter, setTeamFilter] = useState<'all' | 'leadership' | 'design' | 'dev'>('all');

  const filteredTeam = TEAM_MEMBERS.filter((member) => {
    if (teamFilter === 'all') return true;
    if (teamFilter === 'leadership') return member.isLeadership;
    if (teamFilter === 'design') {
      const lower = member.role.toLowerCase();
      return lower.includes('design') || lower.includes('art') || lower.includes('brand') || lower.includes('creative');
    }
    if (teamFilter === 'dev') {
      const lower = member.role.toLowerCase();
      return lower.includes('developer') || lower.includes('tech') || lower.includes('full stack') || lower.includes('media');
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f84900]/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#f84900]/10 blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(248,73,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f84900]" />
            <span>About Designer Insight</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            More Than an Agency —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              A Creative Partner
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            We are a creative agency driven by bold ideas and purposeful design. For over 5 years, we’ve helped brands craft unique identities, build engaging digital experiences, and deliver impactful visuals that resonate worldwide.
          </p>
        </motion.div>
      </section>

      {/* Main Narrative & Visual Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Images Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-[#f84900]/30 bg-neutral-950 p-2 shadow-2xl">
              <ImageWithFallback
                src={SITE_CONFIG.teamGroupImage}
                fallbackSrc={SITE_CONFIG.greenSilkImage}
                alt="Designer Insight Team"
                fallbackTitle="Designer Insight Creative Studio"
                className="w-full h-[440px] object-cover rounded-2xl transition-transform duration-700 hover:scale-102"
                containerClassName="rounded-2xl"
              />
            </div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0f0d12]/95 backdrop-blur-md border border-[#f84900]/40 p-5 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-black text-[#f84900]">120+</div>
              <div className="text-xs text-neutral-300 uppercase tracking-wider font-semibold">
                Global Awesome Clients
              </div>
            </motion.div>
          </motion.div>

          {/* Narrative & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Bridging Strategic Intent with Uncompromising Visual Craft
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              At Designer Insight, we believe that design isn't just about how something looks — it's about how effectively it communicates, converts, and endures. Founded by Raja Raza and an international team of art directors, engineers, and brand strategists, we approach every engagement as a long-term alliance.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              From our headquarters in Taxila to client partners across North America, Europe, the Middle East, and Asia, we take pride in translating complex business propositions into elegant, high-converting visual systems.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#110e13] border border-[#f84900]/30 hover:border-[#f84900] transition-all">
                <div className="flex items-center gap-2 text-[#f84900] font-bold text-sm mb-2">
                  <Zap className="w-4 h-4 text-[#f84900]" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  To be a leading creative agency that transforms bold ideas into impactful digital experiences, inspiring brands worldwide.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#140e0b] border border-[#f84900]/30 hover:border-[#f84900] transition-all">
                <div className="flex items-center gap-2 text-[#f84900] font-bold text-sm mb-2">
                  <Layers className="w-4 h-4 text-[#f84900]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  We create bold, strategic, and meaningful design solutions that help brands connect, grow, and leave a lasting impact.
                </p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-800">
              {SITE_CONFIG.stats.map((st, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-black text-[#f84900]">{st.value}</div>
                  <div className="text-xs text-neutral-400 font-medium">{st.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accolades Section */}
      <section className="bg-[#050508] py-20 border-y border-neutral-900 mb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-2 block flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f84900]" />
              Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Achievements &amp; Accolades
            </h2>
            <p className="text-neutral-400 text-sm mt-2">
              Honoring creative bravery, strategic execution, and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AWARDS_DATA.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all flex flex-col justify-between hover:shadow-[0_0_20px_rgba(248,73,0,0.15)]"
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
                  <p className="text-xs text-neutral-500 border-t border-neutral-800/80 pt-3">
                    {award.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE TEAM SHOWCASE (Directly integrated in About Us) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f84900] mb-2 block flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#f84900]" />
              Our Entire Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              We Are the Team You’ll Work With
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              From our executive leadership to our specialist visual craftsmen and engineers, meet the full multidisciplinary team behind Designer Insight.
            </p>
          </div>

          {/* Team Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setTeamFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                teamFilter === 'all'
                  ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white shadow-md shadow-[#f84900]/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              All Members ({TEAM_MEMBERS.length})
            </button>
            <button
              onClick={() => setTeamFilter('leadership')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                teamFilter === 'leadership'
                  ? 'bg-[#f84900] text-white shadow-md shadow-[#f84900]/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setTeamFilter('design')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                teamFilter === 'design'
                  ? 'bg-[#f84900] text-white shadow-md shadow-[#f84900]/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Design &amp; Creative
            </button>
            <button
              onClick={() => setTeamFilter('dev')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                teamFilter === 'dev'
                  ? 'bg-[#f84900] text-white shadow-md shadow-[#f84900]/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Engineering &amp; Growth
            </button>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredTeam.map((member, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              key={member.id}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all p-3 flex flex-col shadow-lg hover:shadow-[0_0_25px_rgba(248,73,0,0.15)]"
            >
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 relative">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  fallbackTitle={member.name}
                  width={600}
                  height={800}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.socials?.linkedin || SITE_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#f84900] text-white flex items-center justify-center hover:scale-110 transition-transform"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials?.instagram || SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#ff7a38] text-white flex items-center justify-center hover:scale-110 transition-transform"
                      title="Instagram"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#f84900] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{member.role}</p>
                </div>
                {member.isLeadership ? (
                  <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center gap-1.5 text-[11px] text-[#f84900] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f84900]" />
                    <span>Executive Leadership</span>
                  </div>
                ) : (
                  <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center gap-1.5 text-[11px] text-[#f84900] font-medium">
                    <Sparkles className="w-3 h-3 text-[#f84900]" />
                    <span>Creative Talent</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#120d0b] to-[#0d0909] border border-[#f84900]/30 space-y-5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f84900]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            Have a project in mind? Let's build something unforgettable.
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a complimentary 30-minute creative strategy discussion with our design leads.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all shadow-xl shadow-[#f84900]/25 cursor-pointer"
            >
              <span>Get in Touch with Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

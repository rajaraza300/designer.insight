import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/siteData';
import { Sparkles, Calendar, Clock, User, ArrowUpRight, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface BlogsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const BlogsView: React.FC<BlogsViewProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Creative Tech',
    'Digital Vision',
    'Future Thinking',
    'Neural Design',
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-[#f84900]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-80 right-10 w-80 h-80 bg-[#f84900]/8 blur-[130px] pointer-events-none" />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(248,73,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f84900]" />
            <span>DESIGNED TO INSPIRE THE FUTURE OF CREATIVITY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The Blog That Thinks in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              Bold Insights
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Thought leadership, design philosophy, and digital strategy insights from our creative directors and technologist teams.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 pt-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white shadow-md shadow-[#f84900]/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredPosts.map((post, idx) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setReadingPost(post)}
              className="group cursor-pointer rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-[#f84900]/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(248,73,0,0.15)] overflow-hidden"
            >
              {post.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    fallbackTitle={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-xs font-semibold text-[#f84900]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#f84900]" />
                        <span>{post.readTime}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#ff7a38]" />
                        <span>{post.date}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#f84900] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <User className="w-3.5 h-3.5 text-[#f84900]" />
                    <span className="font-medium text-neutral-200">{post.author}</span>
                  </div>
                  <span className="text-[#f84900] font-semibold group-hover:text-[#ff7a38] group-hover:translate-x-1 transition-all flex items-center gap-1">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Reading Article Modal */}
      <AnimatePresence>
        {readingPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-[#120d0b] border border-[#f84900]/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#f84900]" />
                  <span className="text-xs font-semibold text-[#f84900] uppercase tracking-wider">
                    {readingPost.category}
                  </span>
                </div>
                <button
                  onClick={() => setReadingPost(null)}
                  className="p-2 rounded-full bg-neutral-800 hover:bg-[#f84900] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Article Content */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                {readingPost.image && (
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full bg-neutral-900">
                    <ImageWithFallback
                      src={readingPost.image}
                      alt={readingPost.title}
                      fallbackTitle={readingPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                    {readingPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span>By {readingPost.author}</span>
                    <span>•</span>
                    <span>{readingPost.date}</span>
                    <span>•</span>
                    <span>{readingPost.readTime}</span>
                  </div>
                </div>

                <div className="text-neutral-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4 border-t border-neutral-800 pt-6">
                  {readingPost.content}
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-400">
                    Written by the <strong>Designer Insight Editorial Board</strong>
                  </div>
                  <button
                    onClick={() => {
                      setReadingPost(null);
                      onOpenQuote();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f84900] to-[#ff7a38] text-white font-bold text-xs cursor-pointer shadow-lg"
                  >
                    Discuss With Our Team
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#120d0b] to-[#0c0909] border border-[#f84900]/30 space-y-5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f84900]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            Have a bold design challenge? Let’s solve it together.
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Our multidisciplinary team helps brands shape the future of their industry.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff8c42] text-white font-bold text-sm transition-all shadow-lg shadow-[#f84900]/30 cursor-pointer"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

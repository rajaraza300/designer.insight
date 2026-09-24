import React, { useState, useEffect } from 'react';
import { PageId, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/siteData';
import { ArrowUpRight, Sparkles, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';
import { usePortfolioSEO } from '../hooks/usePortfolioSEO';

interface PortfolioViewProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: PortfolioProject) => void;
  onOpenQuote: () => void;
  activeProject?: PortfolioProject | null;
}

interface FilterTab {
  id: string;
  label: string;
  matchCategories: string[];
}

const CATEGORY_TABS: FilterTab[] = [
  { id: 'All', label: 'All', matchCategories: [] },
  { id: 'Brand Identity', label: 'Brand Identity', matchCategories: ['Brand Identity'] },
  { id: 'Web Design', label: 'Web Design', matchCategories: ['Web Design', 'UI/UX Design'] },
  { id: 'Presentation', label: 'Presentation', matchCategories: ['Presentation Design', 'Presentation'] },
  { id: 'Printing', label: 'Printing', matchCategories: ['Print & Packaging', 'Printing'] },
  { id: 'Social Media', label: 'Social Media', matchCategories: ['Social Media'] },
];

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onOpenProject,
  onOpenQuote,
  activeProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Check URL search parameters on mount for deep-linked project or category
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      const projectParam = params.get('project');

      if (categoryParam) {
        const matchedTab = CATEGORY_TABS.find(
          (t) => t.id.toLowerCase() === categoryParam.toLowerCase() || t.label.toLowerCase() === categoryParam.toLowerCase()
        );
        if (matchedTab) {
          setSelectedCategory(matchedTab.id);
        }
      }

      if (projectParam) {
        const found = PORTFOLIO_PROJECTS.find(
          (p) => p.id === projectParam || p.title.toLowerCase().replace(/\s+/g, '-') === projectParam
        );
        if (found) {
          onOpenProject(found);
        }
      }
    }
  }, []);

  // Curate a balanced mix across all categories for the "All" view in Portfolio
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
    return result;
  }, []);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === 'All') {
      return allMixedProjects;
    }
    const tab = CATEGORY_TABS.find((t) => t.id === selectedCategory);
    if (!tab) {
      return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
    }
    return PORTFOLIO_PROJECTS.filter((p) => tab.matchCategories.includes(p.category));
  }, [selectedCategory, allMixedProjects]);

  // Apply dynamic meta tags and Schema.org JSON-LD structured data for search engine indexing
  usePortfolioSEO({
    selectedCategory,
    projects: filteredProjects,
    activeProject,
  });

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (typeof window !== 'undefined' && window.history) {
      const url = new URL(window.location.href);
      if (catId === 'All') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', catId);
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleOpenProject = (project: PortfolioProject) => {
    if (typeof window !== 'undefined' && window.history) {
      const url = new URL(window.location.href);
      url.searchParams.set('project', project.id);
      window.history.replaceState({}, '', url.toString());
    }
    onOpenProject(project);
  };

  const getCount = (tab: FilterTab) => {
    if (tab.id === 'All') return PORTFOLIO_PROJECTS.length;
    return PORTFOLIO_PROJECTS.filter((p) => tab.matchCategories.includes(p.category)).length;
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#f84900]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-80 h-80 bg-[#f84900]/8 blur-[130px] pointer-events-none" />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/30 text-[#f84900] text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(248,73,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f84900]" />
            <span>Selected Works</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Bold Ideas Brought to Life Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff944d]">
              Design and Strategy
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Explore our curated showcase of bespoke brand identities, high-converting digital storefronts, and investor-grade presentations.
          </p>
        </motion.div>

        {/* Category Filter System */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 space-y-4"
        >
          {/* Scrollable pill filter bar */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar py-1">
            {CATEGORY_TABS.filter(
              (tab) => tab.id === 'All' || getCount(tab) > 0,
            ).map((tab) => {
              const isActive = selectedCategory === tab.id;
              const count = getCount(tab);
              return (
                <button
                  key={tab.id}
                  id={`portfolio-filter-${tab.id.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleSelectCategory(tab.id)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white shadow-lg shadow-[#f84900]/30 scale-[1.02]'
                      : 'bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-700'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-black/25 text-white'
                        : 'bg-neutral-800 text-neutral-400 group-hover:text-neutral-200'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Status & Quick Reset */}
          <div className="flex items-center justify-between text-xs text-neutral-400 pt-1 border-t border-neutral-900">
            <span>
              Showing <strong className="text-white">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'} in <strong className="text-[#f84900]">{selectedCategory}</strong>
            </span>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => handleSelectCategory('All')}
                className="text-xs text-[#f84900] hover:text-[#ff6a1a] font-medium cursor-pointer underline underline-offset-4"
              >
                Reset to All
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              id={`portfolio-project-card-${project.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.025 }}
              onClick={() => handleOpenProject(project)}
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
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f84900] to-[#ff6a1a] text-white font-bold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 group-hover:scale-105 transition-all duration-300">
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
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#f84900] transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.overview && (
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.overview}
                    </p>
                  )}
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                  <span>Client: {project.client || 'Confidential'}</span>
                  <span className="text-[#f84900] font-medium flex items-center gap-1 group-hover:text-[#ff7a38] transition-colors">
                    Details <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
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
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#120d0b] to-[#0c0909] border border-[#f84900]/30 space-y-5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f84900]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            Want your brand featured among our success stories?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Let's discuss your vision, goals, and build an exceptional creative identity.
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

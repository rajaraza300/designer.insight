import React from 'react';
import { PortfolioProject } from '../types';
import { X, ArrowUpRight, CheckCircle2, Calendar, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#120d0b] border border-[#f84900]/35 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/70">
            <div>
              <span className="text-xs font-semibold text-[#f84900] uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-800 hover:bg-[#f84900] text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Main Visual Image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                fallbackTitle={project.title}
                className="w-full h-auto max-h-[460px] object-cover mx-auto"
                containerClassName="rounded-2xl"
              />
            </div>

            {/* Meta Info Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/60 text-sm">
              {project.client && (
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-[#f84900]" />
                  <div>
                    <div className="text-xs text-neutral-400">Client</div>
                    <div className="font-medium text-white">{project.client}</div>
                  </div>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#ff7a38]" />
                  <div>
                    <div className="text-xs text-neutral-400">Year</div>
                    <div className="font-medium text-white">{project.year}</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#f84900]" />
                <div>
                  <div className="text-xs text-neutral-400">Category</div>
                  <div className="font-medium text-white">{project.category}</div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-base font-semibold text-white mb-2">Project Overview</h4>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {project.overview ||
                  'Engineered with bold aesthetic principles, custom typography, and strategic visual positioning to maximize brand prestige and audience connection.'}
              </p>
            </div>

            {/* Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div>
                <h4 className="text-base font-semibold text-white mb-3">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-neutral-300 bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f84900] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
              Inspired by this project? Let's engineer something iconic together.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#f84900] to-[#ff7a38] text-white text-sm font-bold transition-all shadow-lg shadow-[#f84900]/30 cursor-pointer"
              >
                <span>Start Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

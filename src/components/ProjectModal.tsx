import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PortfolioProject } from '../types';
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  User,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Images,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Swipe handling refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Collect all available images for this project
  const images: string[] = React.useMemo(() => {
    if (!project) return [];
    const list: string[] = [];
    if (project.gallery && project.gallery.length > 0) {
      list.push(...project.gallery);
    } else if (project.images && project.images.length > 0) {
      list.push(...project.images);
    } else if (project.image) {
      list.push(project.image);
    }
    // Remove duplicates while preserving order
    return Array.from(new Set(list.filter(Boolean)));
  }, [project]);

  const totalImages = images.length;

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(1);
    setIsLightboxOpen(false);
  }, [project?.id]);

  const goToPrev = useCallback(() => {
    if (totalImages <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const goToNext = useCallback(() => {
    if (totalImages <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const goToIndex = useCallback(
    (idx: number) => {
      if (idx === currentIndex || idx < 0 || idx >= totalImages) return;
      setDirection(idx > currentIndex ? 1 : -1);
      setCurrentIndex(idx);
    },
    [currentIndex, totalImages]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, isLightboxOpen, goToPrev, goToNext, onClose]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!project) return null;

  const currentImage = images[currentIndex] || project.image;

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
              aria-label="Close modal"
              className="p-2 rounded-full bg-neutral-800 hover:bg-[#f84900] text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Interactive Image Carousel */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 group select-none">
              {/* Main Image Stage */}
              <div
                className="relative w-full min-h-[260px] sm:min-h-[380px] max-h-[500px] flex items-center justify-center overflow-hidden bg-neutral-950"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -80 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <ImageWithFallback
                      src={currentImage}
                      alt={`${project.title} - Screenshot ${currentIndex + 1}`}
                      fallbackTitle={`${project.title} (${currentIndex + 1}/${totalImages})`}
                      className="w-full h-auto max-h-[460px] object-contain mx-auto"
                      containerClassName="w-full h-full flex items-center justify-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Counter Pill & Fullscreen Trigger (Top Right & Left) */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-semibold text-white/90 shadow-lg">
                    <Images className="w-3.5 h-3.5 text-[#f84900]" />
                    <span>
                      {currentIndex + 1} / {totalImages}
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    title="Fullscreen zoom view"
                    className="p-2 rounded-full bg-black/75 hover:bg-[#f84900] text-white/90 hover:text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer shadow-lg hover:scale-105"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Left / Right Nav Arrows (When multiple images exist) */}
                {totalImages > 1 && (
                  <>
                    <button
                      onClick={goToPrev}
                      aria-label="Previous screenshot"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#f84900] text-white backdrop-blur-md border border-white/10 transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-110 shadow-xl cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      onClick={goToNext}
                      aria-label="Next screenshot"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#f84900] text-white backdrop-blur-md border border-white/10 transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-110 shadow-xl cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}

                {/* Bottom Dot Indicators */}
                {totalImages > 1 && (
                  <div className="absolute bottom-3 inset-x-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 pointer-events-auto">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            currentIndex === idx
                              ? 'w-6 bg-gradient-to-r from-[#f84900] to-[#ff7a38] shadow-sm'
                              : 'w-2 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Thumbnail Strip (When multiple images exist) */}
              {totalImages > 1 && (
                <div className="p-3 bg-neutral-950/90 border-t border-neutral-800/80 flex items-center gap-2.5 overflow-x-auto scrollbar-thin">
                  <div className="flex items-center gap-2.5 mx-auto">
                    {images.map((imgSrc, idx) => {
                      const isActive = currentIndex === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => goToIndex(idx)}
                          className={`relative shrink-0 w-16 sm:w-20 h-12 sm:h-14 rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer ${
                            isActive
                              ? 'border-[#f84900] ring-2 ring-[#f84900]/40 scale-105 shadow-md shadow-[#f84900]/20'
                              : 'border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600'
                          }`}
                        >
                          <ImageWithFallback
                            src={imgSrc}
                            alt={`Thumbnail ${idx + 1}`}
                            fallbackTitle={`${idx + 1}`}
                            className="w-full h-full object-cover"
                            containerClassName="w-full h-full"
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-[#f84900]/10 pointer-events-none" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Meta Info Bar */}
            <div
              className={`grid grid-cols-2 ${
                project.behanceUrl ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
              } gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/60 text-sm`}
            >
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
              {project.behanceUrl && (
                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <ExternalLink className="w-4 h-4 text-[#0057ff]" />
                  <div>
                    <div className="text-xs text-neutral-400">Behance</div>
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0057ff] hover:text-[#3880ff] transition-colors flex items-center gap-1"
                    >
                      View Live <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
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
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0057ff]/15 hover:bg-[#0057ff]/25 text-[#3b82f6] hover:text-white border border-[#0057ff]/40 text-sm font-semibold transition-all cursor-pointer"
                >
                  <span>View on Behance</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
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

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Lightbox Header */}
              <div className="w-full flex items-center justify-between text-white max-w-6xl">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-neutral-800/80 text-xs font-semibold text-[#f84900]">
                    {currentIndex + 1} / {totalImages}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
                    {project.title}
                  </h4>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2.5 rounded-full bg-neutral-800 hover:bg-[#f84900] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Main Viewport */}
              <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-4 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <ImageWithFallback
                      src={currentImage}
                      alt={`${project.title} - Large view ${currentIndex + 1}`}
                      fallbackTitle={`${project.title} (${currentIndex + 1}/${totalImages})`}
                      className="max-h-[78vh] max-w-full object-contain mx-auto rounded-xl shadow-2xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {totalImages > 1 && (
                  <>
                    <button
                      onClick={goToPrev}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-[#f84900] text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer shadow-xl"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-[#f84900] text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer shadow-xl"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Lightbox Bottom Thumbnail Bar */}
              {totalImages > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto p-2 bg-neutral-900/80 rounded-2xl border border-neutral-800 backdrop-blur-md max-w-xl">
                  {images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToIndex(idx)}
                      className={`w-14 h-10 rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 ${
                        currentIndex === idx
                          ? 'border-[#f84900] ring-2 ring-[#f84900]/50 scale-105'
                          : 'border-neutral-700 opacity-50 hover:opacity-90'
                      }`}
                    >
                      <ImageWithFallback
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        fallbackTitle={`${idx + 1}`}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};

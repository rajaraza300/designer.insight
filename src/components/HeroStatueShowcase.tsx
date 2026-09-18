import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Palette } from 'lucide-react';

export const HeroStatueShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] lg:max-w-[520px] min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center select-none mx-auto py-2"
    >
      {/* Classical Statue Free-Standing (Zero background shapes, zero orange outline rings) */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y + (isHovered ? -6 : 0),
          rotateY: mousePos.x * 0.45,
          rotateX: -mousePos.y * 0.45,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 110, mass: 0.5 }}
        className="relative z-10 w-full flex items-center justify-center"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative group cursor-pointer flex items-center justify-center"
        >
          {/* Free-standing Statue without any background shape or outlines */}
          <div className="relative flex items-center justify-center">
            <img
              src="/statue-transparent.png"
              alt="Designer Insight Classical Marble Sculpture"
              className="w-[280px] sm:w-[350px] lg:w-[390px] h-auto max-h-[460px] sm:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-105 pointer-events-auto filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
              }}
              loading="eager"
            />

            {/* Subtle light glint spark on the shoulder */}
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.85, 1.15, 0.85] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 right-8 w-2 h-2 rounded-full bg-white blur-[1px] pointer-events-none"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Floating Badge 1 - Top Right: Available for Projects */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          x: mousePos.x * 0.5,
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          x: { type: 'spring', damping: 25 },
        }}
        className="absolute top-4 -right-1 sm:top-6 sm:right-2 z-20"
      >
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d0d12]/95 backdrop-blur-md border border-[#f84900]/40 shadow-xl text-xs font-semibold text-neutral-200">
          <span className="w-2 h-2 rounded-full bg-[#f84900] animate-ping" />
          <span>Available for Projects</span>
        </div>
      </motion.div>

      {/* 5. Floating Badge 2 - Bottom Left: 5+ Years Excellence */}
      <motion.div
        animate={{
          y: [0, 6, 0],
          x: -mousePos.x * 0.4,
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          x: { type: 'spring', damping: 25 },
        }}
        className="absolute bottom-2 left-0 sm:bottom-4 sm:left-2 z-20"
      >
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0d0d12]/95 backdrop-blur-md border border-[#f84900]/35 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-[#f84900]/15 border border-[#f84900]/30 flex items-center justify-center text-[#f84900] shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-black text-white leading-tight flex items-center gap-1">
              5+ <span className="text-[#f84900]">Years</span>
            </div>
            <div className="text-[10px] text-neutral-300 font-medium whitespace-nowrap">
              Bespoke Design Excellence
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. Floating Tag - Top Left: Art Direction */}
      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="hidden sm:flex absolute top-12 left-0 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0a0910]/90 backdrop-blur-md border border-[#f84900]/25 text-[11px] font-medium text-neutral-300 shadow-lg"
      >
        <Palette className="w-3.5 h-3.5 text-[#f84900]" />
        <span>Art Direction & UI</span>
      </motion.div>
    </div>
  );
};

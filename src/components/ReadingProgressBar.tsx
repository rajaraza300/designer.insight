import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for fluid progress tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
      {/* Background track (subtle) */}
      <div className="w-full h-[3px] bg-transparent" />
      {/* Active Brand-gradient Reading Bar */}
      <motion.div
        id="reading-progress-bar"
        className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-[#f84900] via-[#ff6a1a] to-[#ff9955] shadow-[0_0_12px_rgba(248,73,0,0.8),0_0_4px_rgba(255,106,26,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};

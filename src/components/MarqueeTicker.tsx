import React from 'react';
import { MARQUEE_ITEMS } from '../data/siteData';
import { Sparkles } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  // Duplicate for seamless infinite loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full overflow-hidden bg-[#08080a] py-5 border-y border-[#f84900]/20 shadow-inner">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {displayItems.map((item, idx) => {
          const isAccent = idx % 2 === 1;
          return (
            <div key={idx} className="flex items-center space-x-6 text-neutral-400 select-none">
              <span className="text-sm sm:text-base font-semibold tracking-wider uppercase whitespace-nowrap text-neutral-200 hover:text-[#f84900] transition-colors cursor-default">
                {item}
              </span>
              <Sparkles
                className={`w-3.5 h-3.5 ${
                  isAccent ? 'text-[#ff6a1a]' : 'text-[#f84900]'
                }`}
              />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};


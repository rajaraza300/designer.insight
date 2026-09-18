import React from 'react';

interface BrandLogoProps {
  variant?: 'white' | 'dark' | 'color';
  className?: string;
  iconOnly?: boolean;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'white',
  className = '',
  iconOnly = false,
  showTagline = false,
}) => {
  const isDarkText = variant === 'dark';
  const textColor = isDarkText ? 'text-neutral-950' : 'text-white';
  const taglineColor = isDarkText ? 'text-neutral-600' : 'text-neutral-400';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Official Designer Insight Emblem (from uploaded Designer-Insight-Logo-White-1.png) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(248,73,0,0.35)]"
          aria-hidden="true"
        >
          {/* Outer Arc (Right side) in Brand Orange #f84900 */}
          <path
            d="M 50,6 A 44 44 0 0 1 50,94 L 50,82 A 32 32 0 0 0 50,18 Z"
            fill="#f84900"
          />
          {/* Middle Ring (Left half) */}
          <path
            d="M 50,25 A 25 25 0 0 0 50,75 L 50,65 A 15 15 0 0 1 50,35 Z"
            fill="#f84900"
          />
          {/* Middle Ring (Right half) */}
          <path
            d="M 50,25 A 25 25 0 0 1 50,75 L 50,65 A 15 15 0 0 0 50,35 Z"
            fill="#f84900"
          />
          {/* Center Pupil (Left half solid semicircle) */}
          <path
            d="M 50,41 A 9 9 0 0 0 50,59 Z"
            fill="#f84900"
          />
        </svg>
      </div>

      {/* Wordmark (DESIGNER INSIGHT) matching uploaded logo */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline">
            <span
              className={`font-extrabold text-[15px] tracking-[0.16em] uppercase font-['Space_Grotesk'] ${textColor} transition-colors group-hover:text-white`}
            >
              DESIGNER
            </span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span
              className={`font-bold text-[12px] tracking-[0.32em] uppercase font-['Space_Grotesk'] ${textColor} opacity-90`}
            >
              INSIGHT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f84900] inline-block ml-1 shadow-[0_0_6px_#f84900]" />
          </div>
          {showTagline && (
            <span
              className={`text-[9px] uppercase tracking-wider mt-0.5 ${taglineColor}`}
            >
              Design &amp; Advertising
            </span>
          )}
        </div>
      )}
    </div>
  );
};

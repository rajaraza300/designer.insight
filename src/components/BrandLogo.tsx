import React from 'react';

interface BrandLogoProps {
  variant?: 'white' | 'dark' | 'color';
  className?: string;
  iconOnly?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'white',
  className = '',
  iconOnly = false,
  showTagline = false,
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-14 md:h-16',
  }[size];

  const iconHeightClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }[size];

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center shrink-0 select-none group ${className}`}>
        <img
          src="/Designer-Insight-Logo-White.png"
          alt="Designer Insight Icon"
          className={`${iconHeightClasses} object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(248,73,0,0.35)]`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none group ${className}`}>
      <img
        src="/Designer-Insight-Logo-White-1.png"
        alt="Designer Insight"
        className={`${heightClasses} w-auto max-w-[240px] sm:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          variant === 'dark' ? 'invert brightness-0' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};


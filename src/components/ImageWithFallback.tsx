import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  fallbackTitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  // Build a candidate list of URLs to try in order
  const buildCandidates = (initialSrc: string, fallback?: string): string[] => {
    const list: string[] = [];
    if (initialSrc) {
      list.push(initialSrc);
      
      // If it's a local /uploads/ or /team/ path, queue local variants and live domain paths as backup
      if (initialSrc.startsWith('/uploads/') || initialSrc.startsWith('/team/') || initialSrc.startsWith('/')) {
        const filename = initialSrc.split('/').pop() || '';
        if (filename) {
          const localVariants = [`/uploads/${filename}`, `/team/${filename}`, `/${filename}`];
          localVariants.forEach((v) => {
            if (!list.includes(v)) list.push(v);
          });
          
          const remoteVariants = [
            `https://designerinsight.online/wp-content/uploads/2025/12/${filename}`,
            `https://designerinsight.online/wp-content/uploads/2025/01/${filename}`,
            `https://designerinsight.online/wp-content/uploads/2024/12/${filename}`,
            `https://designerinsight.online/wp-content/uploads/${filename}`,
          ];
          remoteVariants.forEach((v) => {
            if (!list.includes(v)) list.push(v);
          });
        }
      }

      // If it's a local /portfolio/ path, also support encoded URI and all extension variants (.png, .jpeg, .jpg, .webp)
      if (initialSrc.startsWith('/portfolio/')) {
        const encoded = encodeURI(initialSrc);
        if (encoded !== initialSrc && !list.includes(encoded)) {
          list.push(encoded);
        }
        
        const baseWithoutExt = initialSrc.replace(/\.(webp|png|jpg|jpeg)$/i, '');
        const extensions = ['.png', '.webp', '.jpeg', '.jpg'];
        for (const ext of extensions) {
          const variant = `${baseWithoutExt}${ext}`;
          if (!list.includes(variant)) {
            list.push(variant);
          }
          const encodedVariant = encodeURI(variant);
          if (!list.includes(encodedVariant)) {
            list.push(encodedVariant);
          }
        }
      }
    }
    if (fallback && !list.includes(fallback)) {
      list.push(fallback);
    }
    return list;
  };

  const [candidates, setCandidates] = useState<string[]>(() => buildCandidates(src, fallbackSrc));
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [hasFailedAll, setHasFailedAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const newCandidates = buildCandidates(src, fallbackSrc);
    setCandidates(newCandidates);
    setCandidateIndex(0);
    setHasFailedAll(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
      setIsLoading(true);
    } else {
      setHasFailedAll(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const currentSrc = candidates[candidateIndex] || src;

  if (hasFailedAll) {
    return (
      <div
        className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-neutral-900 via-[#141216] to-neutral-950 border border-[#f84900]/20 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group ${containerClassName}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(248,73,0,0.12),transparent_70%)] pointer-events-none" />
        <div className="w-12 h-12 rounded-2xl bg-[#f84900]/15 border border-[#f84900]/30 flex items-center justify-center text-[#f84900] mb-3 group-hover:scale-110 transition-transform">
          <Sparkles className="w-6 h-6" />
        </div>
        <p className="text-sm font-bold text-white max-w-[260px] truncate tracking-wide">
          {fallbackTitle || alt || 'Designer Insight Case Study'}
        </p>
        <span className="text-[11px] text-[#f84900] font-semibold uppercase tracking-wider mt-1.5 px-3 py-0.5 rounded-full bg-[#f84900]/10 border border-[#f84900]/20">
          Designer Insight Project
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-900/80 animate-pulse flex items-center justify-center z-10">
          <div className="w-6 h-6 rounded-full border-2 border-[#f84900]/40 border-t-[#f84900] animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        {...props}
      />
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLazyLoad } from '../../hooks/useLazyLoad';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  onLoad?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23FFF7ED" width="800" height="600"/%3E%3C/svg%3E'
  );
  const imgRef = useRef<HTMLDivElement>(null);
  const isVisible = useLazyLoad(imgRef, { threshold: 0.1, rootMargin: '200px' });

  useEffect(() => {
    if (!isVisible) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      // Fallback to placeholder on error
      console.error(`Failed to load image: ${src}`);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, isVisible, onLoad]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="placeholder"
            className="absolute inset-0 bg-gradient-to-br from-cream/50 to-orange/10 animate-pulse"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      <motion.img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;

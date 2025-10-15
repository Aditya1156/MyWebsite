import { useState, useEffect, RefObject } from 'react';

interface UseImageLoadProps {
  src: string;
  placeholder?: string;
}

export const useImageLoad = ({ src, placeholder }: UseImageLoadProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23FFF7ED" width="800" height="600"/%3E%3C/svg%3E');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return { imageSrc, imageLoaded };
};

interface UseLazyLoadProps {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyLoad = (ref: RefObject<Element>, { threshold = 0.1, rootMargin = '100px' }: UseLazyLoadProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return isVisible;
};

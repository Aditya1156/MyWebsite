import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

interface UseSmoothScrollOptions {
  onScroll?: (scroll: number) => void;
  disabled?: boolean;
}

/**
 * Custom hook to integrate with Lenis smooth scrolling
 * Provides scroll position updates and utilities
 */
export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const { onScroll, disabled = false } = options;
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || disabled) return;

    const handleScroll = (e: any) => {
      if (onScroll) {
        onScroll(e.scroll);
      }
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, onScroll, disabled]);

  return {
    lenis,
    scrollTo: (target: string | number, options?: any) => {
      lenis?.scrollTo(target, options);
    },
    start: () => lenis?.start(),
    stop: () => lenis?.stop(),
  };
};

export default useSmoothScroll;

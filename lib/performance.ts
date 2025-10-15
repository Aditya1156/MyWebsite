// Performance optimization utilities
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (urls: string[]): Promise<void[]> => {
  const promises = urls.map(preloadImage);
  return Promise.allSettled(promises).then(() => []);
};

// Resource hints for better loading
export const addResourceHint = (url: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Intersection Observer with performance optimization
export const createOptimizedObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const throttledCallback = throttle(callback, 100); // Throttle to 10fps max
  
  return new IntersectionObserver(throttledCallback, {
    rootMargin: '50px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
    ...options
  });
};

// Web Vitals optimization
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Log Core Web Vitals
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Performance Metrics:', {
          FCP: navigation.responseEnd - navigation.fetchStart,
          LCP: navigation.loadEventEnd - navigation.fetchStart,
          TTFB: navigation.responseStart - navigation.requestStart,
        });
      }
    }, 1000);
  }
};

// Memory cleanup utility
export const cleanupAnimations = (refs: React.RefObject<any>[]) => {
  refs.forEach(ref => {
    if (ref.current) {
      // Cancel any running animations
      if (ref.current.style) {
        ref.current.style.transform = '';
        ref.current.style.opacity = '';
      }
    }
  });
};

// Reduce motion for accessibility
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};
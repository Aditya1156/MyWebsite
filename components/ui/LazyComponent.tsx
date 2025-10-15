import React, { Suspense, lazy, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

const LoadingSpinner: React.FC = () => (
  <motion.div
    className="flex items-center justify-center p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="w-8 h-8 border-2 border-orange/30 border-t-orange rounded-full animate-spin" />
  </motion.div>
);

const LoadingSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`bg-gradient-to-r from-cream/50 via-orange/10 to-cream/50 animate-pulse rounded-xl ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="h-64 w-full" />
  </motion.div>
);

export const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback = <LoadingSpinner />,
  className = '',
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return React.forwardRef<any, P>((props, ref) => (
    <LazyComponent fallback={fallback}>
      <Component {...props} ref={ref} />
    </LazyComponent>
  ));
};

// Pre-built lazy components for common sections
export const LazyVideoSection = lazy(() => import('../VideoSection'));
export const LazyAreaCoverage = lazy(() => import('../AreaCoverage'));
export const LazyPricing = lazy(() => import('../Pricing'));
export const LazyGallery = lazy(() => import('../Gallery'));
export const LazyMemories = lazy(() => import('../Memories'));

export { LoadingSkeleton };
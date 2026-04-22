import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    className={`bg-surface-container-low animate-pulse rounded-xl ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="h-64 w-full" />
  </motion.div>
);
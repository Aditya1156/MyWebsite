import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { ArrowUpIcon } from './icons';

interface GoToTopButtonProps {
  isVisible: boolean;
}

const GoToTopButton: React.FC<GoToTopButtonProps> = ({ isVisible }) => {
  const lenis = useLenis();
  const scrollToTop = () => {
    lenis?.scrollTo('#hero');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange text-cream shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-light focus:ring-offset-2 focus:ring-offset-cream"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTopButton;
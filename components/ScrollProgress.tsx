import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.01);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange origin-left z-[100]"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Circular Progress Indicator - Mobile Friendly */}
      <motion.div
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-12 h-12 md:w-14 md:h-14">
          {/* Background Circle */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-charcoal/10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className="text-orange"
              style={{
                pathLength: scrollYProgress,
                strokeDasharray: "283",
                strokeDashoffset: 0,
              }}
            />
          </svg>
          
          {/* Center Percentage */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-xs md:text-sm font-bold text-charcoal"
              style={{
                opacity: useSpring(scrollYProgress, {
                  stiffness: 100,
                  damping: 30,
                })
              }}
            >
              <motion.span>
                {scrollYProgress.get().toFixed(0)}
              </motion.span>
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;

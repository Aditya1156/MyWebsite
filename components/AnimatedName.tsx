import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster stagger for quicker appearance
      delayChildren: 0.2, // Reduced delay
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
};

const AnimatedName: React.FC = () => {
  const firstName = "Aditya".split("");
  const lastName = "Kumar".split("");

  return (
    <motion.div
      className="text-center font-display text-5xl md:text-7xl font-bold text-charcoal tracking-tighter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Aditya Kumar"
    >
      <div className="flex justify-center items-center gap-3">
        <span>
          {firstName.map((letter, index) => (
            <motion.span key={`first-${index}`} variants={letterVariants} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
        <span className="text-orange">
          {lastName.map((letter, index) => (
            <motion.span key={`last-${index}`} variants={letterVariants} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      </div>
    </motion.div>
  );
};

export default AnimatedName;

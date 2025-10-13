import React from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, Variants } from 'framer-motion';

const svgVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

// FIX: Removed the invalid `duration` property from the `spring` transition, as it's not a valid property for `type: 'spring'`.
// Spring animation duration is determined by physics properties like stiffness and damping. Also explicitly typed with `Variants`.
const pathVariants: Variants = {
  hidden: (isTriangle: boolean) => ({
    opacity: 0,
    y: isTriangle ? -30 : 30,
    scale: 0.8,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

const AnimatedLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M12 36L24 12L36 36"
        stroke="#FFF7ED"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        custom={true}
      />
      <motion.path
        d="M18 27H30"
        stroke="#FF6B00"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        custom={false}
      />
    </motion.svg>
  );
};

export default AnimatedLogo;

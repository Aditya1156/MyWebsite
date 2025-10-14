import React, { useRef } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, useScroll, useTransform, MotionValue, Variants } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { ArrowRightIcon, ReactIcon, AIIcon, DevIcon } from './icons';

interface FloatingIconProps {
  icon: React.ReactNode;
  position: string;
  animationDelay: string;
  y: MotionValue<string>;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, position, animationDelay, y }) => (
  <motion.div
    className={`absolute ${position} text-charcoal/20 animate-float`}
    style={{ animationDelay, y }}
    aria-hidden="true"
  >
    {icon}
  </motion.div>
);

// FIX: Explicitly type headlineContainerVariants with Variants for consistency.
const headlineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// FIX: Explicitly type lineVariants with Variants to fix type inference issues with the 'ease' property.
const lineVariants: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // easeOutQuint for a smooth, cinematic effect
    },
  },
};


const Hero: React.FC = () => {
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && lenis) {
      lenis.scrollTo(href, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        offset: 0,
      });
    }
  };
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // Creates a subtle parallax effect for the background gradient.
  // As the user scrolls through the hero section, the background moves up at 40% of the scroll speed, creating depth.
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  // Individual parallax speeds for icons to create a multi-layered depth effect
  const icon1Y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']); // Faster, appears closer
  const icon2Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // Slower, appears further
  const icon3Y = useTransform(scrollYProgress, [0, 1], ['0%', '65%']);
  const icon4Y = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);

  return (
    <section id="hero" ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-orange/20 via-cream to-cream"
        style={{ y: backgroundY }}
        aria-hidden="true"
      />
      
      {/* Icons layer - icons are now outside the main background div to move independently */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Mobile: smaller icons and adjusted positions */}
        <FloatingIcon icon={<ReactIcon className="w-10 h-10 md:w-16 md:h-16" />} position="top-16 left-4 md:top-20 md:left-10" animationDelay="0s" y={icon1Y} />
        <FloatingIcon icon={<AIIcon className="w-12 h-12 md:w-20 md:h-20" />} position="top-1/2 right-8 md:right-16" animationDelay="-2s" y={icon2Y} />
        <FloatingIcon icon={<DevIcon className="w-8 h-8 md:w-12 md:h-12" />} position="bottom-20 left-8 md:bottom-24 md:left-1/4" animationDelay="-4s" y={icon3Y} />
        <FloatingIcon icon={<ReactIcon className="w-6 h-6 md:w-8 md:h-8" />} position="bottom-12 right-12 md:bottom-10 md:right-1/4" animationDelay="-1s" y={icon4Y} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.h1 
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-4 md:mb-6 tracking-tighter leading-tight"
          variants={headlineContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Wrapper spans with overflow-hidden create a clean reveal effect for the text animating upwards */}
          <span className="block overflow-hidden">
            <motion.span className="block" variants={lineVariants}>
              Building ideas into
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block text-orange" variants={lineVariants}>
              intelligent experiences.
            </motion.span>
          </span>
        </motion.h1>
        <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal/80 mb-8 md:mb-10 px-4">
          MERN Stack Developer | Full-Stack Engineer | AI Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <a 
            href="#hire-me" 
            onClick={handleScrollTo} 
            className="bg-orange text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group w-full sm:w-auto min-h-[48px] touch-manipulation"
          >
            Hire Me
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a 
            href="#projects" 
            onClick={handleScrollTo} 
            className="bg-charcoal text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-charcoal/80 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-h-[48px] touch-manipulation text-center"
          >
            Show My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
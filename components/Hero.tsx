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
      lenis.scrollTo(href);
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
        <FloatingIcon icon={<ReactIcon className="w-16 h-16" />} position="top-20 left-10" animationDelay="0s" y={icon1Y} />
        <FloatingIcon icon={<AIIcon className="w-20 h-20" />} position="top-1/2 right-16" animationDelay="-2s" y={icon2Y} />
        <FloatingIcon icon={<DevIcon className="w-12 h-12" />} position="bottom-24 left-1/4" animationDelay="-4s" y={icon3Y} />
        <FloatingIcon icon={<ReactIcon className="w-8 h-8" />} position="bottom-10 right-1/4" animationDelay="-1s" y={icon4Y} />
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-4 tracking-tighter"
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
        <p className="font-sans text-lg md:text-xl text-charcoal/80 mb-10">
          Engineer | Creator | Dream Builder
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#hire-me" onClick={handleScrollTo} className="bg-orange text-cream px-8 py-4 rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 inline-flex items-center group">
            Hire Me
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#projects" onClick={handleScrollTo} className="bg-charcoal text-cream px-8 py-4 rounded-full font-semibold hover:bg-charcoal/80 transition-all duration-300 transform hover:scale-105">
            Show My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
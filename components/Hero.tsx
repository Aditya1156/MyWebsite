import React, { useRef } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { ArrowRightIcon } from './icons';
import { IconCloud } from './ui/interactive-icon-cloud';

// Tech stack icon slugs for the icon cloud
const iconSlugs = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "mongodb",
  "html5",
  "css3",
  "tailwindcss",
  "git",
  "github",
  "vite",
  "npm",
  "visualstudiocode",
  "figma",
  "postman",
  "python",
  "framer",
];

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

  return (
    <section id="hero" ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-orange/20 via-cream to-cream"
        style={{ y: backgroundY }}
        aria-hidden="true"
      />
      
      {/* Interactive Icon Cloud - Desktop only */}
      <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-end pr-20" aria-hidden="true">
        <motion.div 
          className="w-[500px] h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <IconCloud iconSlugs={iconSlugs} />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        {/* Content Grid: Text on left, Icon cloud on right (mobile stacked) */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
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
            <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal/80 mb-8 md:mb-10">
              MERN Stack Developer | Full-Stack Engineer | AI Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
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

          {/* Mobile Icon Cloud */}
          <div className="lg:hidden flex justify-center">
            <motion.div 
              className="w-full max-w-md h-[300px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <IconCloud iconSlugs={iconSlugs} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
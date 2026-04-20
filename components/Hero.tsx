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
    <section id="hero" ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* Tonal layering: soft primary wash on surface base (no borders) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(106,28,246,0.18), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(172,142,255,0.22), transparent 65%), linear-gradient(180deg, #fdf3ff 0%, #f9edff 100%)',
        }}
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            {/* Editorial eyebrow — numbered, refined */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.24em] uppercase font-semibold text-on-surface/60 mb-8"
            >
              <span className="font-mono text-primary">00</span>
              <span className="w-8 h-px bg-on-surface/20" aria-hidden="true" />
              <span>Portfolio &mdash; 2026</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extrabold text-on-surface mb-6 md:mb-8 tracking-[-0.03em] leading-[0.98]"
              variants={headlineContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="block overflow-hidden">
                <motion.span className="block" variants={lineVariants}>
                  Engineering
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" variants={lineVariants}>
                  durable <span className="kp-gradient-primary-text">software</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" variants={lineVariants}>
                  for modern teams.
                </motion.span>
              </span>
            </motion.h1>

            <p className="font-sans text-base sm:text-lg text-on-surface/65 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm Aditya &mdash; a full-stack engineer building production-grade web applications with React, TypeScript, Node.js and AI-driven workflows.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                onClick={handleScrollTo}
                className="kp-gradient-primary text-white px-8 py-3.5 rounded-full font-semibold hover:brightness-110 transition-all duration-300 inline-flex items-center justify-center group w-full sm:w-auto kp-shadow-ambient"
              >
                View selected work
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                onClick={handleScrollTo}
                className="text-on-surface hover:text-primary font-semibold px-4 py-3.5 transition-colors duration-300 inline-flex items-center justify-center group w-full sm:w-auto"
              >
                Get in touch
                <span className="w-4 h-px bg-current ml-2 transition-all duration-300 group-hover:w-6" aria-hidden="true" />
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

      {/* Credential strip — subtle, refined */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase font-semibold text-on-surface/55"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          Available for work
        </span>
        <span className="w-8 h-px bg-on-surface/15" aria-hidden="true" />
        <span>React &middot; TypeScript &middot; Node</span>
        <span className="w-8 h-px bg-on-surface/15" aria-hidden="true" />
        <span>Shivamogga, IN</span>
      </motion.div>
    </section>
  );
};

export default Hero;
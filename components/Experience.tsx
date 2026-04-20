import React, { useRef } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE_DATA } from '../constants';
import { DevIcon } from './icons';
import { ExperienceColumn } from './ui/experience-columns';

const Experience: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  // Split experiences into columns for scrolling effect
  const firstColumn = [EXPERIENCE_DATA[0]];
  const secondColumn = [EXPERIENCE_DATA[1]];
  const thirdColumn = [EXPERIENCE_DATA[2]];

  return (
    <AnimatedSection id="experience" className="min-h-screen sticky top-0 z-20 flex flex-col justify-center bg-surface py-24 relative overflow-hidden">
      {/* Animated gradient orbs in background */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-charcoal/5 pointer-events-none"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <DevIcon className="w-[800px] h-[800px]" />
      </motion.div>

      <div ref={targetRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 font-sans text-xs tracking-[0.24em] uppercase font-semibold text-primary mb-6">
            <span className="font-mono text-on-surface/40">02</span>
            <span className="w-8 h-px bg-on-surface/20" aria-hidden="true" />
            <span>Experience</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface mb-5 tracking-[-0.02em] leading-[1.05]">
            Timeline of craft &amp; contribution.
          </h2>
          <p className="text-on-surface/65 text-base md:text-lg leading-relaxed max-w-2xl">
            Roles, internships, and projects that shaped how I approach engineering today &mdash; from first React component to AI-driven platforms.
          </p>
        </motion.div>
        
        {/* Scrolling Columns Layout with Mask Gradient */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <ExperienceColumn experiences={firstColumn} duration={15} />
          <ExperienceColumn experiences={secondColumn} className="hidden md:block" duration={19} />
          <ExperienceColumn experiences={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
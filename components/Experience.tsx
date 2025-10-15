import React, { useRef } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE_DATA } from '../constants';
import { DevIcon } from './icons';
import { ExperienceColumn } from './ui/experience-columns';
import BlurText from './BlurText';

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
    <AnimatedSection id="experience" className="min-h-screen sticky top-0 z-20 flex flex-col justify-center bg-gradient-to-br from-cream via-cream to-orange/5 py-24 relative overflow-hidden">
      {/* Animated gradient orbs in background */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-orange/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlurText
            text="Journey & Growth"
            className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 text-center tracking-tighter"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <p className="text-center text-charcoal/60 mb-16 max-w-2xl mx-auto">
            From passionate student to full-stack developer, exploring the world of AI and modern web technologies
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
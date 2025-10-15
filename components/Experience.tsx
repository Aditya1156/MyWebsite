import React, { useRef } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE_DATA } from '../constants';
import { DevIcon } from './icons';

// FIX: Explicitly type cardVariants with Variants to fix type inference issues with the 'transition.type' property.
const cardVariants: Variants = {
  offscreen: (isRight: boolean) => ({
    x: isRight ? 100 : -100,
    opacity: 0,
    rotateY: isRight ? 15 : -15,
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const dotVariants: Variants = {
  initial: { scale: 0, rotate: 0 },
  animate: { 
    scale: [0, 1.2, 1], 
    rotate: [0, 180, 360],
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 20, 
      delay: 0.2 
    }
  }
};

const Experience: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
  const lineProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 text-center tracking-tighter">
            Journey & Growth
          </h2>
          <p className="text-center text-charcoal/60 mb-16 max-w-2xl mx-auto">
            From passionate student to full-stack developer, exploring the world of AI and modern web technologies
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-0">
          {/* Vertical line with animated progress - responsive positioning */}
          <div className="absolute border-opacity-20 border-charcoal/10 h-full border-2 left-4 md:left-1/2 -translate-x-1/2" style={{ borderStyle: 'solid' }}></div>
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute bg-gradient-to-b from-orange via-purple-400 to-green-500 w-0.5 left-4 md:left-1/2 -translate-x-1/2 origin-top"
            style={{ 
              scaleY: lineProgress,
              height: '100%'
            }}
          ></motion.div>
          
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className={`mb-12 w-full relative flex md:justify-between items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-[45%] flex-shrink-0"></div>
              
              {/* Animated Dot with ripple effect */}
              <motion.div 
                className="z-20 flex items-center justify-center bg-gradient-to-br from-orange to-orange/70 shadow-xl w-10 h-10 rounded-full absolute left-4 md:relative md:left-auto -translate-x-[calc(50%-1px)] md:translate-x-0 flex-shrink-0 border-4 border-cream"
                variants={dotVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}
                whileHover={{ scale: 1.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-orange/40"
                  animate={{
                    scale: [1, 2.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <div className="w-3 h-3 bg-white rounded-full z-10"></div>
              </motion.div>
              
              {/* Enhanced Card with gradient and glassmorphism */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl w-full ml-12 md:ml-0 md:w-[45%] px-6 py-5 flex-shrink-0 border border-charcoal/5 relative overflow-visible group"
                custom={index % 2 !== 0}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Color accent bar */}
                <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${
                  index === 0 ? 'from-orange to-orange/70' : 
                  index === 1 ? 'from-purple-400 to-purple-300' : 
                  'from-green-500 to-green-400'
                }`}></div>
                
                <div className="relative z-10">
                  <motion.h3 
                    className="mb-3 font-bold text-charcoal text-lg sm:text-xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {item.role}
                  </motion.h3>
                  <p className="text-xs sm:text-sm font-medium leading-snug tracking-wide text-charcoal/70 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange"></span>
                    {item.organization}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-charcoal/60 mt-1 flex items-center gap-2">
                    <span className="inline-block">📅</span>
                    {item.duration}
                  </p>
                  <p className="text-xs sm:text-sm mt-4 text-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        className="text-xs font-mono bg-gradient-to-br from-cream to-cream/80 text-charcoal/80 px-3 py-1.5 rounded-full border border-charcoal/10 hover:border-orange/40 transition-colors cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
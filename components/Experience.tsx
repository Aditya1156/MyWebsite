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
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Experience: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <AnimatedSection id="experience" className="min-h-screen sticky top-0 z-20 flex flex-col justify-center bg-cream py-24 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-charcoal/5"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <DevIcon className="w-[800px] h-[800px]" />
      </motion.div>

      <div ref={targetRef} className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-16 text-center tracking-tighter">Journey & Growth</h2>
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* Vertical line - responsive positioning */}
          <div className="absolute border-opacity-20 border-charcoal/20 h-full border-2 left-4 md:left-1/2 -translate-x-1/2" style={{ borderStyle: 'solid' }}></div>
          
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className={`mb-10 w-full relative flex md:justify-between items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Dot */}
              <motion.div 
                className="z-20 flex items-center bg-orange shadow-xl w-8 h-8 rounded-full absolute left-4 md:relative md:left-auto -translate-x-[calc(50%-1px)] md:translate-x-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.2 }}
              >
              </motion.div>
              
              {/* Card */}
              <motion.div 
                className="bg-white rounded-lg shadow-xl w-full ml-12 md:ml-0 md:w-5/12 px-6 py-4"
                custom={index % 2 !== 0}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <h3 className="mb-3 font-bold text-charcoal text-xl">{item.role}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-charcoal/80">{item.organization} | {item.duration}</p>
                <p className="text-sm mt-3 text-charcoal/70">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono bg-cream text-charcoal/80 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedName from './AnimatedName';
import { SKILLS_ROW_1, SKILLS_ROW_2, SKILLS_ROW_3 } from '../constants';

const ALL_SKILLS = [...SKILLS_ROW_1, ...SKILLS_ROW_2, ...SKILLS_ROW_3];

interface LoaderProps {
  onComplete: () => void;
}

const loadingTexts = [
  "// Initializing creative matrix...",
  "// Compiling awesomeness...",
  "// Bootstrapping digital experience...",
  "// Rendering final pixels...",
];

const FloatingIcon: React.FC<{ skill: typeof ALL_SKILLS[0], index: number }> = ({ skill, index }) => {
    const size = useMemo(() => Math.random() * 40 + 30, []); // 30px to 70px
    const duration = useMemo(() => Math.random() * 6 + 6, []); // 6s to 12s (faster)
    const initialTop = useMemo(() => `${Math.random() * 100}%`, []);
    const initialLeft = useMemo(() => `${Math.random() * 100}%`, []);
    const blurAmount = useMemo(() => Math.random() * 3 + 1, []); // 1px to 4px blur

    return (
        <motion.div
            className="absolute text-charcoal/15"
            initial={{ top: initialTop, left: initialLeft, opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.03, ease: 'easeOut' }}
            style={{ 
                willChange: 'transform', 
                width: size, 
                height: size,
                filter: `blur(${blurAmount}px)` 
            }}
        >
            <motion.div
                className="w-full h-full"
                animate={{
                    y: ['-20px', '20px', '-20px'],
                    x: ['-15px', '15px', '-15px'],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <skill.icon className="w-full h-full" aria-hidden="true" />
            </motion.div>
        </motion.div>
    );
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const backgroundSkills = useMemo(() => ALL_SKILLS.sort(() => 0.5 - Math.random()).slice(0, 20), []); // Increased to 20 icons

  useEffect(() => {
    const totalDuration = 2500; // Reduced from 4000ms to 2500ms (faster loading)
    const textChangeInterval = totalDuration / loadingTexts.length;

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, textChangeInterval);

    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / totalDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        clearInterval(textInterval);
        setTimeout(() => setIsVisible(false), 300); // Faster fade out
        setTimeout(() => onComplete(), 600); // Faster completion
      }
    }, 30); // More frequent updates for smoother progress

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream text-charcoal overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Floating Icons Background */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {backgroundSkills.map((skill, index) => (
              <FloatingIcon key={skill.name + index} skill={skill} index={index} />
            ))}
          </div>

          {/* Gradient Overlay for better text contrast */}
          <div 
            className="absolute inset-0 z-[1] pointer-events-none" 
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 247, 237, 0.3) 0%, rgba(255, 247, 237, 0.7) 50%, rgba(255, 247, 237, 0.9) 100%)'
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center">
            <AnimatedName />
            <motion.p
              className="font-mono text-sm md:text-base text-charcoal/60 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              MERN Stack Developer
            </motion.p>
            <div className="h-6 mt-6">
                 <AnimatePresence mode="wait">
                     <motion.p
                        key={textIndex}
                        className="font-mono text-sm text-charcoal/70"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {loadingTexts[textIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 md:w-80">
            <div className="h-1 bg-charcoal/10 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-orange to-orange-light shadow-lg"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
            <motion.p 
              className="text-center mt-2 font-mono text-xs text-charcoal/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

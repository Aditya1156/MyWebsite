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
    const size = useMemo(() => Math.random() * 40 + 20, []); // 20px to 60px
    const duration = useMemo(() => Math.random() * 8 + 8, []); // 8s to 16s
    const initialTop = useMemo(() => `${Math.random() * 100}%`, []);
    const initialLeft = useMemo(() => `${Math.random() * 100}%`, []);

    return (
        <motion.div
            className="absolute text-charcoal/10"
            initial={{ top: initialTop, left: initialLeft, opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
            style={{ willChange: 'transform', width: size, height: size }}
        >
            <motion.div
                className="w-full h-full"
                animate={{
                    y: ['-15px', '15px', '-15px'],
                    x: ['-10px', '10px', '-10px'],
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

  const backgroundSkills = useMemo(() => ALL_SKILLS.sort(() => 0.5 - Math.random()).slice(0, 15), []);

  useEffect(() => {
    const totalDuration = 4000;
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
        setTimeout(() => setIsVisible(false), 500);
        setTimeout(() => onComplete(), 1000);
      }
    }, 50);

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
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {backgroundSkills.map((skill, index) => (
              <FloatingIcon key={skill.name + index} skill={skill} index={index} />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <AnimatedName />
            <div className="h-6 mt-8">
                 <AnimatePresence mode="wait">
                     <motion.p
                        key={textIndex}
                        className="font-mono text-charcoal/70"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {loadingTexts[textIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-1 bg-charcoal/10 w-48 rounded-full overflow-hidden">
            <motion.div
              className="h-1 bg-orange"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

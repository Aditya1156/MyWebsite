import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const NUM_DOTS = 15;
const STIFFNESS = 500;
const DAMPING = 40;

const CursorTrail: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the primary input mechanism allows for fine pointing (i.e., a mouse).
    setIsDesktop(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Create an array of motion values for each dot in the trail
  const trail = Array.from({ length: NUM_DOTS }, (_, i) => {
    // Each dot has a slightly different spring configuration for the trail effect
    const springConfig = { 
        stiffness: STIFFNESS + i * 50, 
        damping: DAMPING + i * 2 
    };
    return {
      x: useSpring(mouseX, springConfig),
      y: useSpring(mouseY, springConfig),
    };
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    if (isDesktop) {
        window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
        if (isDesktop) {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    };
  }, [mouseX, mouseY, isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {trail.map((dot, index) => {
        const scale = (NUM_DOTS - index) / NUM_DOTS;
        const size = index === 0 ? 12 : 10 * scale;
        return (
          <motion.div
            key={index}
            className="fixed top-0 left-0 rounded-full bg-orange pointer-events-none"
            style={{
              x: dot.x,
              y: dot.y,
              width: size,
              height: size,
              translateX: '-50%',
              translateY: '-50%',
              opacity: index === 0 ? 1 : 0.6 * scale,
              zIndex: 9999,
              boxShadow: index === 0 ? '0 0 10px rgba(255, 107, 0, 0.7)' : 'none',
            }}
          />
        );
      })}
    </>
  );
};

export default CursorTrail;

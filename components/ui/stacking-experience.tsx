import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, type FC } from 'react';
import { ExperienceItem } from '../../types';

interface CardProps {
  i: number;
  experience: ExperienceItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const dotVariants = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
      delay: 0.2
    }
  }
};

export const Card: FC<CardProps> = ({
  i,
  experience,
  progress,
  range,
  targetScale
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  const getGradient = (index: number) => {
    const gradients = [
      'from-orange to-orange/70',
      'from-purple-400 to-purple-300',
      'from-green-500 to-green-400'
    ];
    return gradients[index % gradients.length];
  };

  const getAccentColor = (index: number) => {
    const colors = ['bg-orange', 'bg-purple-400', 'bg-green-500'];
    return colors[index % colors.length];
  };

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 overflow-visible py-8'
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`relative w-[92vw] sm:w-[85vw] max-w-4xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-8 sm:px-8 sm:py-10 border border-charcoal/5 overflow-hidden group`}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Color accent bar */}
        <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${getGradient(i)}`}></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          {/* Timeline dot */}
          <motion.div 
            className={`flex-shrink-0 flex items-center justify-center ${getAccentColor(i)} shadow-xl w-12 h-12 rounded-full border-4 border-white`}
            variants={dotVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className={`absolute inset-0 rounded-full ${getAccentColor(i)}/40`}
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
            <div className="w-4 h-4 bg-white rounded-full z-10"></div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.h3 
              className="mb-3 font-bold text-charcoal text-xl sm:text-2xl md:text-3xl font-display"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {experience.role}
            </motion.h3>
            
            <p className="text-sm sm:text-base font-medium leading-snug tracking-wide text-charcoal/70 flex items-center gap-2 mb-2">
              <span className={`inline-block w-2 h-2 rounded-full ${getAccentColor(i)}`}></span>
              {experience.organization}
            </p>
            
            <p className="text-xs sm:text-sm font-medium text-charcoal/60 mb-4 flex items-center gap-2">
              <span className="inline-block">📅</span>
              {experience.duration}
            </p>
            
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-5">
              {experience.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, i) => (
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
        </div>

        {/* Corner accent */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      </motion.div>
    </div>
  );
};

interface StackingExperienceProps {
  experiences: ExperienceItem[];
}

const StackingExperience: FC<StackingExperienceProps> = ({ experiences }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  
  const animationDuration = 0.5; 
  const stagger = experiences.length > 1 ? (1 - animationDuration) / (experiences.length - 1) : 0;

  return (
    <div ref={container} className="relative z-10">
        {experiences.map((experience, i) => {
            const targetScale = 1 - (experiences.length - i) * 0.05;
            const start = i * stagger;
            const end = start + animationDuration;
            const range: [number, number] = [start, end];
            
            return (
                <Card
                    key={`experience_${i}_${experience.role}`}
                    i={i}
                    experience={experience}
                    progress={scrollYProgress}
                    range={range}
                    targetScale={targetScale}
                />
            );
        })}
    </div>
  );
};

export default StackingExperience;

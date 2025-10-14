import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Project } from '../../types';
import { ArrowRightIcon } from '../icons';

interface CardProps {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onCardClick: (project: Project) => void;
}

export const Card = ({
  i,
  project,
  progress,
  range,
  targetScale,
  onCardClick
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 overflow-visible'
    >
      <motion.div
        style={{
          backgroundColor: project.color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative h-[500px] w-[90vw] max-w-[1000px] rounded-2xl p-6 md:p-10 origin-top text-charcoal overflow-visible`}
      >
        <h2 className='text-2xl md:text-3xl text-center font-display font-bold'>{project.title}</h2>
        <div className={`flex flex-col md:flex-row h-full mt-5 gap-6 md:gap-10`}>
          <div className={`w-full md:w-[40%] relative md:top-[10%]`}>
            <p className='text-sm text-charcoal/80 leading-relaxed'>{project.description}</p>
             <div className="flex flex-wrap gap-2 my-4">
                {project.tools.map(tool => (
                  <span key={tool} className="text-xs font-mono bg-white/50 text-charcoal/80 px-3 py-1 rounded-full">{tool}</span>
                ))}
              </div>
            <button onClick={() => onCardClick(project)} className="inline-flex items-center text-orange font-semibold hover:text-orange-light transition-colors duration-300 group mt-2">
                View Case Study
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div
            className={`relative w-full md:w-[60%] h-48 md:h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={project.imageUrl} alt={project.title} className='absolute inset-0 w-full h-full object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  projects: Project[];
  onCardClick: (project: Project) => void;
}

const StackingCards = ({ projects, onCardClick }: StackingCardsProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  
  // Each card animates over 50% of the total scroll range for a smooth effect.
  const animationDuration = 0.5; 
  // Stagger subsequent card animations to fill the remaining scroll range.
  const stagger = projects.length > 1 ? (1 - animationDuration) / (projects.length - 1) : 0;

  return (
    <div ref={container} className="relative z-10">
        {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            const start = i * stagger;
            const end = start + animationDuration;
            const range: [number, number] = [start, end];
            
            return (
                // @ts-ignore - key is a valid React prop
                <Card
                    key={`project_${i}_${project.title}`}
                    i={i}
                    project={project}
                    progress={scrollYProgress}
                    range={range}
                    targetScale={targetScale}
                    onCardClick={onCardClick}
                />
            );
        })}
    </div>
  );
};

export default StackingCards;
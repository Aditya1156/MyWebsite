import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS_ROW_1, SKILLS_ROW_2, SKILLS_ROW_3 } from '../constants';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: React.FC<{ className?: string }>;
}

const SkillMarquee: React.FC<{ skills: Skill[], reverse?: boolean }> = ({ skills, reverse = false }) => (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-4 [&_img]:max-w-none animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}>
            {skills.concat(skills).map((skill, index) => (
                <li key={`${skill.name}-${index}`} className="flex-shrink-0">
                    <motion.div 
                        className="flex items-center justify-center bg-white border border-cream rounded-xl sm:rounded-2xl shadow-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 transition-shadow duration-300"
                        whileHover={{ 
                            scale: 1.08, 
                            boxShadow: '0 0 25px rgba(255, 107, 0, 0.3)',
                            y: -5
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-orange flex-shrink-0" />
                        <span className="ml-2 sm:ml-3 md:ml-4 font-mono text-charcoal font-semibold text-xs sm:text-sm md:text-base truncate">{skill.name}</span>
                    </motion.div>
                </li>
            ))}
        </ul>
    </div>
);


const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="py-16 sm:py-20 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6 tracking-tighter">
          My Skills & Expertise
        </h2>
        <p className="text-center text-charcoal/70 max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base px-4">
          The tools and technologies I use to bring ideas to life. From frontend to backend and AI, I love working with the modern web.
        </p>
        <div className="space-y-6 sm:space-y-8">
            <SkillMarquee skills={SKILLS_ROW_1} />
            <SkillMarquee skills={SKILLS_ROW_2} reverse={true} />
            <SkillMarquee skills={SKILLS_ROW_3} />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
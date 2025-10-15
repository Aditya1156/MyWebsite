import React from 'react';
import AnimatedSection from './AnimatedSection';
import OrbitingSkills from './ui/orbiting-skills';
import BlurText from './BlurText';

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="py-16 sm:py-20 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <BlurText
          text="My Skills & Expertise"
          delay={100}
          animateBy="words"
          direction="top"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6 tracking-tighter"
        />
        <p className="text-center text-charcoal/70 max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base px-4">
          The tools and technologies I use to bring ideas to life. Hover to pause and explore each skill.
        </p>
        <OrbitingSkills />
      </div>
    </AnimatedSection>
  );
};

export default Skills;
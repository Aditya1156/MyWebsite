import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import AnimatedSection from './AnimatedSection';
import { DownloadIcon } from './icons';
import { TECH_STACK_ICONS } from '../constants';
import ProfileCard from './ProfileCard';

const About: React.FC = () => {
  const lenis = useLenis();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  return (
    <AnimatedSection id="about" className="min-h-screen sticky top-0 z-10 flex items-center bg-white py-16 md:py-24">
      <div ref={targetRef} className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          <div className="lg:w-[420px] flex-shrink-0 flex justify-center items-center h-[480px] md:h-[540px]">
             <ProfileCard
              name="Aditya Kumar"
              title=""
              handle="adicodes"
              status="Available for Projects"
              contactText="Hire Me"
              avatarUrl="/images/aditya.jpeg"
              enableTilt={true}
              onContactClick={() => {
                lenis?.scrollTo('#hire-me');
              }}
            />
          </div>
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tighter">My Story, My Purpose</h2>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              I'm Aditya, a passionate engineer and creator driven by curiosity and a desire to build things that matter. My journey in technology is fueled by a fascination with turning complex problems into elegant, user-centric solutions. From architecting intelligent AI systems to crafting pixel-perfect web experiences, I thrive at the intersection of innovation and precision.
            </p>
            <p className="text-charcoal/80 mb-8 leading-relaxed">
              I believe in the power of technology to not just solve problems, but to build dreams. Let's create something extraordinary together.
            </p>
            <button
              type="button"
              onClick={() => alert('Resume download is not available in this portfolio demo.')}
              className="bg-charcoal text-cream px-8 py-3 rounded-full font-semibold hover:bg-orange transition-all duration-300 transform hover:scale-105 inline-flex items-center group cursor-pointer"
            >
              Download Resume
              <DownloadIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>
        
        <div className="mt-20 overflow-hidden">
            <h3 className="text-center font-display text-2xl text-charcoal/80 mb-8">My Tech Arsenal</h3>
            <div className="relative w-full">
                 <div className="flex animate-marquee whitespace-nowrap">
                    {TECH_STACK_ICONS.concat(TECH_STACK_ICONS).map((tech, index) => (
                        <span key={index} className="mx-4 text-lg font-mono text-charcoal/60">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
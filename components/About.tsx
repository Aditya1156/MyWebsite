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
    <AnimatedSection id="about" className="min-h-screen sticky top-0 z-10 flex items-center bg-white py-12 sm:py-16 md:py-24">
      <div ref={targetRef} className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center justify-center">
          {/* Mobile: smaller card height */}
          <div className="lg:w-[420px] flex-shrink-0 flex justify-center items-center h-[400px] sm:h-[480px] md:h-[540px] w-full max-w-[380px] lg:max-w-none">
             <ProfileCard
              name="Aditya Kumar"
              title=""
              handle="adicodes"
              status="Available for Projects"
              contactText="Hire Me"
              avatarUrl="/images/aditya.jpeg"
              enableTilt={true}
              onContactClick={() => {
                lenis?.scrollTo('#hire-me', {
                  duration: 1.5,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              }}
            />
          </div>
          <div className="lg:max-w-xl text-left px-2 sm:px-0">
            <div className="flex items-center gap-3 font-sans text-xs tracking-[0.24em] uppercase font-semibold text-primary mb-6">
              <span className="font-mono text-on-surface/40">01</span>
              <span className="w-8 h-px bg-on-surface/20" aria-hidden="true" />
              <span>About</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface mb-6 tracking-[-0.02em] leading-[1.05]">
              Third-year CS student building for production.
            </h2>
            <p className="text-on-surface/70 mb-5 leading-relaxed text-base">
              I'm Aditya Kumar, studying Computer Science at PESITM, Shivamogga. I focus on shipping full-stack web applications &mdash; React and TypeScript on the front, Node.js and MongoDB on the back, with AI integrations where they add real value.
            </p>
            <p className="text-on-surface/70 mb-8 leading-relaxed text-base">
              Recent work includes <strong className="text-on-surface">TypingPath</strong>, an AI-adaptive typing platform powered by Google Gemini, and an Airline Management System built in Java. I care about performance, clean architecture, and interfaces that respect the user's attention.
            </p>
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="kp-gradient-primary text-white px-8 py-3.5 rounded-full font-semibold hover:brightness-110 transition-all duration-300 inline-flex items-center group cursor-pointer no-underline min-h-[48px] touch-manipulation kp-shadow-ambient"
            >
              Download resume
              <DownloadIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-20 md:mt-24 overflow-hidden">
            <div className="font-sans text-[11px] tracking-[0.28em] uppercase font-semibold text-on-surface/45 mb-6 text-center">
              Stack
            </div>
            <div className="relative w-full">
                 <div className="flex animate-marquee whitespace-nowrap">
                    {TECH_STACK_ICONS.concat(TECH_STACK_ICONS).map((tech, index) => (
                        <span key={index} className="mx-4 sm:mx-6 text-sm sm:text-base font-mono text-on-surface/50">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
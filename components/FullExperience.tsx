import React, { useRef, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import HireMe from './HireMe';
import Memories from './Memories';
import Footer from './Footer';
import Contact from './Contact';
import CursorTrail from './CursorTrail';
import Process from './Process';
import BlurText from './BlurText';
import { NAV_LINKS } from '../constants';
import ScrollIndicator from './ScrollIndicator';
import Gallery from './Gallery';
import SocialConnect from './SocialConnect';
import CardNav from './CardNav';
import { CardNavItem } from '../types';
import GoToTopButton from './GoToTopButton';
import useOnScreen from '../hooks/useOnScreen';

const logoText = "Aditya Kumar";

const FullExperience: React.FC = () => {
  const heroEndRef = useRef<HTMLDivElement>(null);
  const isHeroOnScreen = useOnScreen(heroEndRef, 0);
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollIndicatorSections = NAV_LINKS.map(link => ({
    id: link.href.substring(1),
    name: link.name
  }));

  const cardNavItems: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#f0eade",
      textColor: "#1E1E1E",
      links: [
        { label: "My Story", href: "#about", ariaLabel: "Learn more about me" },
        { label: "Experience", href: "#experience", ariaLabel: "View my work experience" },
        { label: "My Process", href: "#process", ariaLabel: "Learn about my creative process" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#e9dac8",
      textColor: "#1E1E1E",
      links: [
        { label: "Featured Work", href: "#projects", ariaLabel: "View my featured projects" },
        { label: "Skills", href: "#skills", ariaLabel: "See my technical skills" },
        { label: "Gallery", href: "#gallery", ariaLabel: "See my photo gallery" },
      ],
    },
    {
      label: "Connect",
      bgColor: "#e1c9b2",
      textColor: "#1E1E1E",
      links: [
        { label: "Memories", href: "#memories", ariaLabel: "Explore my memories" },
        { label: "Hire Me", href: "#hire-me", ariaLabel: "Get in touch to hire me" },
        { label: "Contact", href: "#contact", ariaLabel: "Contact me" },
      ],
    },
  ];

  return (
    <>
      <ReactLenis 
        root 
        options={{ 
          autoRaf: false,
          lerp: 0.1,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        }} 
        ref={lenisRef} 
      />
      <CursorTrail />
       <ScrollIndicator sections={scrollIndicatorSections} />
       <CardNav
        logo={logoText}
        items={cardNavItems}
        baseColor="rgba(255, 247, 237, 0.8)"
        menuColor="#1E1E1E"
        buttonBgColor="#FF6B00"
        buttonTextColor="#FFF7ED"
       />
      <main>
        <Hero />
        <div ref={heroEndRef} aria-hidden="true" />
        
        {/* Sticky sections for cinematic stacking effect */}
        <About />
        <Experience />

        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
                <BlurText
                    text="From Pixels to Pipelines."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="font-display text-5xl md:text-7xl font-bold text-charcoal tracking-tighter"
                />
            </div>
        </section>

        {/* This wrapper ensures the normal scrolling content appears ON TOP of the last sticky section */}
        <div className="relative z-40 bg-white">
          <Process />
          <Projects />
          
          <section className="py-24 bg-cream text-center">
            <div className="container mx-auto px-6">
              <BlurText
                text="Good design is obvious. Great design is transparent."
                delay={150}
                animateBy="words"
                direction="top"
                className="font-display text-6xl md:text-8xl font-bold text-charcoal tracking-tighter"
              />
            </div>
          </section>

          <Skills />
          
          <Gallery />

          <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
               <BlurText
                text="Always Learning."
                delay={200}
                animateBy="words"
                direction="bottom"
                className="font-display text-6xl md:text-8xl font-bold text-charcoal tracking-tighter"
              />
            </div>
          </section>

          <HireMe />
          <Memories />

          <section className="py-24 bg-cream text-center">
            <div className="container mx-auto px-6">
               <BlurText
                text="Ready to build the future?"
                delay={150}
                animateBy="words"
                direction="top"
                className="font-display text-5xl md:text-7xl font-bold text-charcoal tracking-tighter"
              />
            </div>
          </section>

          <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
               <BlurText
                text="Creativity is intelligence having fun."
                delay={150}
                animateBy="words"
                direction="bottom"
                className="font-display text-6xl md:text-8xl font-bold text-charcoal tracking-tighter"
              />
            </div>
          </section>

          <Contact />

          <SocialConnect />

          <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
               <BlurText
                text="Let's build tomorrow, today."
                delay={150}
                animateBy="words"
                direction="top"
                className="font-display text-5xl md:text-7xl font-bold text-charcoal tracking-tighter"
              />
            </div>
          </section>
        </div>

      </main>
      <GoToTopButton isVisible={!isHeroOnScreen} />
      <Footer />
    </>
  );
};

export default FullExperience;
import React, { useRef, useEffect, lazy, Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { motion } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import { LazyComponent, LoadingSkeleton } from './ui/LazyComponent';
import { PerformanceProvider } from './PerformanceProvider';
import CardNav from './CardNav';
import { CardNavItem } from '../types';
import GoToTopButton from './GoToTopButton';
import useOnScreen from '../hooks/useOnScreen';

// Lazy load heavy components
const Projects = lazy(() => import('./Projects'));
const HireMe = lazy(() => import('./HireMe'));
const Memories = lazy(() => import('./Memories'));
const Footer = lazy(() => import('./Footer'));
const Contact = lazy(() => import('./Contact'));
const Gallery = lazy(() => import('./Gallery'));
const SocialConnect = lazy(() => import('./SocialConnect'));

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

  const cardNavItems: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#f9edff",
      textColor: "#38274c",
      links: [
        { label: "My Story", href: "#about", ariaLabel: "Learn more about me" },
        { label: "Experience", href: "#experience", ariaLabel: "View my work experience" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#f2e3ff",
      textColor: "#38274c",
      links: [
        { label: "Featured Work", href: "#projects", ariaLabel: "View my featured projects" },
        { label: "Gallery", href: "#gallery", ariaLabel: "See my photo gallery" },
      ],
    },
    {
      label: "Connect",
      bgColor: "#ebd4ff",
      textColor: "#38274c",
      links: [
        { label: "Memories", href: "#memories", ariaLabel: "Explore my memories" },
        { label: "Hire Me", href: "#hire-me", ariaLabel: "Get in touch to hire me" },
        { label: "Contact", href: "#contact", ariaLabel: "Contact me" },
      ],
    },
  ];

  return (
    <PerformanceProvider>
  <ReactLenis 
        root 
        options={{ 
          autoRaf: false,
          lerp: 0.05, // Smoother interpolation
          duration: 1.8, // Longer duration for smoother feel
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false, // Disable on touch for better performance
          wheelMultiplier: 0.8, // Reduce wheel sensitivity for smoother scroll
          touchMultiplier: 2,
          infinite: false,
          syncTouch: true, // Better touch responsiveness
        }} 
        ref={lenisRef} 
      >
       <CardNav
        logo={logoText}
        items={cardNavItems}
        baseColor="rgba(253, 243, 255, 0.72)"
        menuColor="#38274c"
        buttonBgColor="#6a1cf6"
        buttonTextColor="#ffffff"
       />
      <main>
        <Hero />
        <div ref={heroEndRef} aria-hidden="true" />

        {/* Sticky sections for cinematic stacking effect */}
        <About />
        <Experience />

        {/* Main content flow — editorial rhythm, no poster quotes */}
        <div className="relative z-40 bg-surface">
          <Suspense fallback={<LoadingSkeleton className="h-screen mx-4" />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingSkeleton className="h-96 mx-4" />}>
            <Gallery />
          </Suspense>

          <Suspense fallback={<LoadingSkeleton className="h-96 mx-4" />}>
            <HireMe />
          </Suspense>

          <Suspense fallback={<LoadingSkeleton className="h-64 mx-4" />}>
            <Memories />
          </Suspense>

          <Suspense fallback={<LoadingSkeleton className="h-96 mx-4" />}>
            <Contact />
          </Suspense>

          <Suspense fallback={<LoadingSkeleton className="h-64 mx-4" />}>
            <SocialConnect />
          </Suspense>
        </div>
      </main>
      <GoToTopButton isVisible={!isHeroOnScreen} />
      <Suspense fallback={<LoadingSkeleton className="h-32 mx-4" />}>
        <Footer />
      </Suspense>
      </ReactLenis>
    </PerformanceProvider>
  );
};

export default FullExperience;
import React, { useRef, useEffect, lazy, Suspense } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import { LoadingSkeleton } from './ui/LazyComponent';
import { PerformanceProvider } from './PerformanceProvider';
import StudioNav from './StudioNav';
import SocialRail from './SocialRail';
import GoToTopButton from './GoToTopButton';
import useOnScreen from '../hooks/useOnScreen';

const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

const FullExperience: React.FC = () => {
  const heroEndRef = useRef<HTMLDivElement>(null);
  const isHeroOnScreen = useOnScreen(heroEndRef, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PerformanceProvider>
      <StudioNav />
      <SocialRail />

      <main>
        <Hero />
        <div ref={heroEndRef} aria-hidden="true" />

        <About />
        <Experience />

        <Suspense fallback={<LoadingSkeleton className="h-screen mx-4" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton className="h-96 mx-4" />}>
          <Contact />
        </Suspense>
      </main>

      <GoToTopButton isVisible={!isHeroOnScreen} />

      <Suspense fallback={<LoadingSkeleton className="h-64 mx-4" />}>
        <Footer />
      </Suspense>
    </PerformanceProvider>
  );
};

export default FullExperience;

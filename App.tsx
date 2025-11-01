import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Selection from './components/Selection';
import FullExperience from './components/FullExperience';
import VCard from './components/VCard';
import SEO from './components/SEO';

declare global {
  interface Window {
    emailjs: {
      init: (config: { publicKey: string }) => void;
      send: (serviceID: string, templateID: string, templateParams: Record<string, unknown>) => Promise<{ status: number; text: string }>;
    };
  }
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<'loading' | 'selection' | 'full' | 'minimal'>('loading');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const publicKey = '9Ujk8D1C01AiXeRhJ';
    if (typeof window.emailjs !== 'undefined') {
      window.emailjs.init({ publicKey });
    } else {
      console.warn("EmailJS script not loaded. Email functionality will be disabled.");
    }
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setIsTransitioning(true);
        setTimeout(() => {
          setAppState(event.state.page);
          setIsTransitioning(false);
        }, 100);
      } else {
        setAppState('selection');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  const handleSelectExperience = (experience: 'full' | 'minimal') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setAppState(experience);
      setIsTransitioning(false);
      // Push state to history so back button works
      window.history.pushState({ page: experience }, '', `#${experience}`);
    }, 100);
  };

  const handleBackToSelection = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setAppState('selection');
      setIsTransitioning(false);
      // Push state to history
      window.history.pushState({ page: 'selection' }, '', '#selection');
    }, 100);
  };

  const renderContent = () => {
    const pageVariants = {
      initial: { 
        opacity: 0,
        scale: 0.95,
        y: 20
      },
      animate: { 
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1] // Custom easing for smooth feel
        }
      },
      exit: { 
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    };

    switch (appState) {
      case 'loading':
        return (
          <motion.div
            key="loading"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Loader onComplete={() => setAppState('selection')} />
          </motion.div>
        );
      case 'selection':
        return (
          <motion.div
            key="selection"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Selection onSelect={handleSelectExperience} />
          </motion.div>
        );
      case 'full':
        return (
          <motion.div
            key="full"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <FullExperience onBackToSelection={handleBackToSelection} />
          </motion.div>
        );
      case 'minimal':
        return (
          <motion.div
            key="minimal"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <VCard onSwitchToFull={() => setAppState('full')} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO />
      <div className="bg-cream text-charcoal font-sans min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
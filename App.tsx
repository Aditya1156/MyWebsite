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
  const [isPageReady, setIsPageReady] = useState(false);

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
        setIsPageReady(false);
        setTimeout(() => {
          setAppState(event.state.page);
          requestAnimationFrame(() => {
            setIsPageReady(true);
          });
        }, 50);
      } else {
        setAppState('selection');
        setIsPageReady(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Set page ready when state changes
  useEffect(() => {
    if (appState !== 'loading') {
      requestAnimationFrame(() => {
        setIsPageReady(true);
      });
    }
  }, [appState]);
  
  const handleSelectExperience = (experience: 'full' | 'minimal') => {
    setIsPageReady(false);
    // Small delay for exit animation
    setTimeout(() => {
      setAppState(experience);
      // Push state to history so back button works
      window.history.pushState({ page: experience }, '', `#${experience}`);
    }, 200);
  };

  const handleBackToSelection = () => {
    setIsPageReady(false);
    setTimeout(() => {
      setAppState('selection');
      // Push state to history
      window.history.pushState({ page: 'selection' }, '', '#selection');
    }, 200);
  };

  const renderContent = () => {
    const pageVariants = {
      initial: { 
        opacity: 0,
      },
      animate: { 
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      },
      exit: { 
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "easeIn"
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
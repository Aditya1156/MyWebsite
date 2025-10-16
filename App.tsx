import React, { useEffect, useState, lazy, Suspense } from 'react';
import Loader from './components/Loader';
import Selection from './components/Selection';
import SEO from './components/SEO';
import LenisProvider from './components/LenisProvider';
import TransitionWrapper from './components/TransitionWrapper';

// Lazy load heavy components for better performance
const FullExperience = lazy(() => import('./components/FullExperience'));
const VCard = lazy(() => import('./components/VCard'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-orange border-t-transparent rounded-full animate-spin" />
      <p className="text-charcoal/60 font-medium">Loading...</p>
    </div>
  </div>
);

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

  useEffect(() => {
    const publicKey = '9Ujk8D1C01AiXeRhJ';
    if (typeof window.emailjs !== 'undefined') {
      window.emailjs.init({ publicKey });
    } else {
      console.warn("EmailJS script not loaded. Email functionality will be disabled.");
    }
  }, []);
  
  const handleSelectExperience = (experience: 'full' | 'minimal') => {
    setAppState(experience);
  };

  const handleBackToSelection = () => {
    setAppState('selection');
  };

  const renderContent = () => {
    switch (appState) {
      case 'loading':
        return (
          <TransitionWrapper transitionKey="loading">
            <Loader onComplete={() => setAppState('selection')} />
          </TransitionWrapper>
        );
      case 'selection':
        return (
          <TransitionWrapper transitionKey="selection">
            <Selection onSelect={handleSelectExperience} />
          </TransitionWrapper>
        );
      case 'full':
        return (
          <TransitionWrapper transitionKey="full">
            <Suspense fallback={<PageLoader />}>
              <LenisProvider>
                <FullExperience onBackToSelection={handleBackToSelection} />
              </LenisProvider>
            </Suspense>
          </TransitionWrapper>
        );
      case 'minimal':
        return (
          <TransitionWrapper transitionKey="minimal">
            <Suspense fallback={<PageLoader />}>
              <VCard onSwitchToFull={() => setAppState('full')} />
            </Suspense>
          </TransitionWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO />
      <div className="bg-cream text-charcoal font-sans">
        {renderContent()}
      </div>
    </>
  );
};

export default App;
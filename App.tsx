import React, { useEffect, useState } from 'react';
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

  const renderContent = () => {
    switch (appState) {
      case 'loading':
        return <Loader onComplete={() => setAppState('selection')} />;
      case 'selection':
        return <Selection onSelect={handleSelectExperience} />;
      case 'full':
        return <FullExperience />;
      case 'minimal':
        return <VCard onSwitchToFull={() => setAppState('full')} />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO />
      <div className="bg-cream text-charcoal font-sans min-h-screen">
        {renderContent()}
      </div>
    </>
  );
};

export default App;
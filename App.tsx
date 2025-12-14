import React, { useEffect } from 'react';
import FullExperience from './components/FullExperience';
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
  useEffect(() => {
    const publicKey = '9Ujk8D1C01AiXeRhJ';
    if (typeof window.emailjs !== 'undefined') {
      window.emailjs.init({ publicKey });
    }
  }, []);

  return (
    <>
      <SEO />
      <div className="bg-cream text-charcoal font-sans min-h-screen">
        <FullExperience />
      </div>
    </>
  );
};

export default App;
import React from 'react';
import FullExperience from './components/FullExperience';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <>
      <SEO />
      <div className="bg-surface text-on-surface font-sans min-h-screen">
        <FullExperience />
      </div>
    </>
  );
};

export default App;
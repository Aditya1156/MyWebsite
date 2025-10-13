import React from 'react';
import AnimatedSection from './AnimatedSection';
import DomeGallery from './DomeGallery';
import { MEMORY_IMAGES } from '../constants';
import BlurText from './BlurText';

const Memories: React.FC = () => {
  return (
    <AnimatedSection id="memories" className="py-24 bg-white text-charcoal">
      <div className="container mx-auto px-6 text-center">
        <BlurText
          text="A Walk Through My Memories"
          delay={150}
          animateBy="words"
          direction="top"
          className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-4 tracking-tighter"
        />
        <p className="text-charcoal/70 text-lg max-w-2xl mx-auto mb-16">
          An interactive dome of moments, projects, and experiences that have shaped my journey. Drag to explore.
        </p>
      </div>
      <div className="relative w-full h-[80vh] min-h-[600px] max-h-[900px]">
        <DomeGallery
          images={MEMORY_IMAGES}
          overlayBlurColor="#FFFFFF"
          grayscale={false}
          fitBasis="min"
          fit={0.65}
          imageBorderRadius="12px"
          openedImageBorderRadius="16px"
        />
      </div>
    </AnimatedSection>
  );
};

export default Memories;
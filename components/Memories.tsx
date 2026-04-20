import React from 'react';
import AnimatedSection from './AnimatedSection';
import DomeGallery from './DomeGallery';
import { MEMORY_IMAGES } from '../constants';

const Memories: React.FC = () => {
  return (
    <AnimatedSection id="memories" className="py-24 bg-surface text-on-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 font-sans text-xs tracking-[0.24em] uppercase font-semibold text-primary mb-6">
            <span className="font-mono text-on-surface/40">06</span>
            <span className="w-8 h-px bg-on-surface/20" aria-hidden="true" />
            <span>Archive</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface mb-5 tracking-[-0.02em] leading-[1.05]">
            An interactive archive.
          </h2>
          <p className="text-on-surface/65 text-base md:text-lg leading-relaxed max-w-2xl">
            Drag the dome to explore moments that shaped the work &mdash; projects, collaborations, and milestones.
          </p>
        </div>
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
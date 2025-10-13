import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useActiveSection } from '../hooks/useActiveSection';

interface Section {
  id: string;
  name: string;
}

interface ScrollIndicatorProps {
  sections: Section[];
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ sections }) => {
  const sectionIds = sections.map(s => s.id);
  const activeSection = useActiveSection(sectionIds);
  const lenis = useLenis();

  const handleDotClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    lenis?.scrollTo(`#${id}`);
  };

  return (
    <nav className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col items-center gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id} className="group relative">
              <a 
                href={`#${section.id}`} 
                onClick={(e) => handleDotClick(e, section.id)}
                aria-label={`Go to ${section.name} section`}
                className="block"
              >
                <motion.div
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    isActive ? 'bg-orange' : 'bg-charcoal/30 group-hover:bg-charcoal/50'
                  }`}
                  animate={{ 
                    scale: isActive ? 1.5 : 1,
                    boxShadow: isActive 
                        ? [
                            '0 0 0px rgba(255, 107, 0, 0.4)', 
                            '0 0 10px rgba(255, 107, 0, 0.8)', 
                            '0 0 0px rgba(255, 107, 0, 0.4)'
                          ] 
                        : 'none'
                  }}
                  transition={{
                    scale: { type: 'spring', stiffness: 300, damping: 20 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                />
              </a>
              <div 
                className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-charcoal text-cream text-xs font-semibold rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                {section.name}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ScrollIndicator;
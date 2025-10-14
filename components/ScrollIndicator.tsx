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
    lenis?.scrollTo(`#${id}`, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      offset: 0,
    });
  };

  return (
    <nav className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col items-center gap-3">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id} className="group relative">
              <a 
                href={`#${section.id}`} 
                onClick={(e) => handleDotClick(e, section.id)}
                aria-label={`Go to ${section.name} section`}
                className="block p-1"
              >
                <motion.div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-orange' : 'bg-charcoal/20 group-hover:bg-charcoal/40'
                  }`}
                  animate={{ 
                    scale: isActive ? 1.3 : 1,
                    boxShadow: isActive 
                        ? '0 0 5px rgba(255, 107, 0, 0.6)' 
                        : 'none'
                  }}
                  transition={{
                    scale: { type: 'spring', stiffness: 300, damping: 20 },
                    boxShadow: { duration: 0.3 }
                  }}
                />
              </a>
              <div 
                className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2.5 py-1 bg-charcoal/90 text-cream text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
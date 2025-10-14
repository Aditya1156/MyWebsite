import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { ArrowRightIcon, CloseIcon, GithubIcon, GoArrowUpRightIcon } from './icons';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import StackingCards from './ui/stacking-card';
import ShareButtons from './ShareButtons';
import './Projects.css';

// FIX: Explicitly type backdropVariants with Variants for consistency.
const backdropVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

// FIX: Explicitly type modalVariants with Variants to fix type inference issues.
const modalVariants: Variants = {
    hidden: {
      y: "50px",
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: "0px",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint
      },
    },
    exit: {
        y: "50px",
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.2,
            ease: "easeIn"
        }
    }
};

const DetailSection: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div>
    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-charcoal mb-2 border-l-4 border-orange pl-3">{title}</h3>
    <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">{content}</p>
  </div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Effect to lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
        // Store original overflow values
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        
        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '0px';
        
        // Cleanup function
        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }
  }, [selectedProject]);


  return (
    <section id="projects" className="bg-charcoal">
      <AnimatedSection className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 sm:mb-6 tracking-tighter">Things I've Built</h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              A selection of projects that showcase my passion for creating meaningful technology. Scroll down to see them in action.
          </p>
        </div>
      </AnimatedSection>
      
      <StackingCards projects={PROJECTS_DATA} onCardClick={setSelectedProject} />

       {/* --- Project Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              key="modal-content"
              variants={modalVariants}
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden relative"
              style={{ cursor: 'default', maxHeight: '90vh' }}
            >
              {/* Scrollable content wrapper */}
              <div 
                className="modal-scroll overflow-y-auto p-5 sm:p-6 md:p-8 lg:p-12"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#ff6b00 #f5f5f5',
                  maxHeight: '90vh'
                }}
              >
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="sticky top-0 right-0 float-right text-charcoal/50 hover:text-orange transition-colors z-20 bg-white rounded-full p-2 shadow-lg mb-3 sm:mb-4 min-h-[44px] min-w-[44px] touch-manipulation"
                  aria-label="Close project details"
                >
                  <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto max-h-60 sm:max-h-80 object-cover rounded-lg sm:rounded-xl shadow-lg mb-6 sm:mb-8" />

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    <div className="md:col-span-2">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tighter mb-2">{selectedProject.title}</h2>
                        <p className="font-mono text-xs sm:text-sm text-charcoal/60 mb-5 sm:mb-6">{selectedProject.category} Project</p>
                        
                        <div className="space-y-6 sm:space-y-8">
                            <DetailSection title="About" content={selectedProject.description} />
                            <DetailSection title="The Challenge" content={selectedProject.challenge} />
                            <DetailSection title="The Solution" content={selectedProject.solution} />
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="bg-cream p-5 sm:p-6 rounded-xl space-y-5 sm:space-y-6">
                            <div>
                                <h4 className="font-display text-lg sm:text-xl font-bold text-charcoal mb-3 sm:mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {selectedProject.tools.map(tool => (
                                        <span key={tool} className="text-xs sm:text-sm font-mono bg-white text-charcoal/80 px-2 sm:px-3 py-1 rounded-full">{tool}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-display text-xl font-bold text-charcoal mb-4">Key Results</h4>
                                <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-sm font-sans">
                                    {selectedProject.results.map((result, i) => <li key={i}>{result}</li>)}
                                </ul>
                            </div>

                             <div>
                                <h4 className="font-display text-xl font-bold text-charcoal mb-4">Links</h4>
                                <div className="space-y-3">
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-charcoal text-cream font-semibold py-3 px-4 rounded-lg hover:bg-orange transition-all duration-300 transform hover:scale-105 group">
                                        Live Demo <GoArrowUpRightIcon className="w-5 h-5 ml-2" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-charcoal/10 text-charcoal font-semibold py-3 px-4 rounded-lg hover:bg-charcoal/20 transition-all duration-300 transform hover:scale-105 group">
                                        GitHub Repo <GithubIcon className="w-5 h-5 ml-2" />
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-charcoal/10 pt-4">
                                <h4 className="font-display text-xl font-bold text-charcoal mb-4">Share Project</h4>
                                <ShareButtons 
                                    url={window.location.href} 
                                    title={`Check out this project by Aditya Kumar: ${selectedProject.title}`} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { ArrowRightIcon, CloseIcon, GithubIcon, GoArrowUpRightIcon } from './icons';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import StackingCards from './ui/stacking-card';
import ShareButtons from './ShareButtons';

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
    <h3 className="font-display text-2xl font-bold text-charcoal mb-2 border-l-4 border-orange pl-3">{title}</h3>
    <p className="text-charcoal/80 leading-relaxed">{content}</p>
  </div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Effect to lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);


  return (
    <section id="projects" className="bg-charcoal">
      <AnimatedSection className="pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 tracking-tighter">Things I've Built</h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
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
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              key="modal-content"
              variants={modalVariants}
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 lg:p-12 relative cursor-default"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 text-charcoal/50 hover:text-orange transition-colors z-10"
                aria-label="Close project details"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
              
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto max-h-80 object-cover rounded-xl shadow-lg mb-8" />

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal tracking-tighter mb-2">{selectedProject.title}</h2>
                        <p className="font-mono text-sm text-charcoal/60 mb-6">{selectedProject.category} Project</p>
                        
                        <div className="space-y-8">
                            <DetailSection title="About" content={selectedProject.description} />
                            <DetailSection title="The Challenge" content={selectedProject.challenge} />
                            <DetailSection title="The Solution" content={selectedProject.solution} />
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="bg-cream p-6 rounded-xl space-y-6">
                            <div>
                                <h4 className="font-display text-xl font-bold text-charcoal mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tools.map(tool => (
                                        <span key={tool} className="text-sm font-mono bg-white text-charcoal/80 px-3 py-1 rounded-full">{tool}</span>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
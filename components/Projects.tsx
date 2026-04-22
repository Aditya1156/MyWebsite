import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { CloseIcon, GithubIcon, GoArrowUpRightIcon } from './icons';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ShareButtons from './ShareButtons';
import './Projects.css';

const backdropVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants: Variants = {
  hidden: { y: '40px', opacity: 0, scale: 0.97 },
  visible: {
    y: '0px',
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: '30px',
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

interface ProjectRowProps {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index, onOpen }) => {
  const paddedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
      className="group"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left py-8 sm:py-12 md:py-14 transition-colors duration-300"
      >
        <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3.5rem_1fr_auto] gap-x-5 sm:gap-x-10 gap-y-4 items-baseline">
          <span className="font-display text-base sm:text-lg italic text-primary tracking-wide pt-1">
            {paddedIndex}
          </span>

          <div className="min-w-0">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface group-hover:text-primary transition-colors tracking-[-0.015em] leading-tight mb-3">
              {project.title}
            </h3>
            <p className="font-sans text-on-surface-variant text-base leading-relaxed max-w-xl mb-5">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tools.slice(0, 5).map((tool) => (
                <li
                  key={tool}
                  className="font-sans text-[11px] text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <span
            className="font-display italic text-on-surface/40 group-hover:text-primary transition-all duration-300 text-base pt-1 group-hover:translate-x-1"
            aria-hidden="true"
          >
            view &rarr;
          </span>
        </div>
      </button>
    </motion.li>
  );
};

const DetailBlock: React.FC<{ heading: string; body: string }> = ({ heading, body }) => (
  <div>
    <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-on-surface/55 mb-3">
      {heading}
    </div>
    <p className="text-on-surface/80 leading-relaxed text-base">{body}</p>
  </div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-surface-low">
      <AnimatedSection className="py-20 sm:py-28 md:py-32 lg:py-40 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              Selected work
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface leading-[1.08] tracking-[-0.02em] mb-6">
              Recent <span className="italic text-primary-container font-semibold">case studies.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              A short list of projects shipped over the last two years &mdash; real products with users, constraints, and outcomes.
            </p>
          </motion.div>

          <ol>
            {PROJECTS_DATA.map((project, i) => (
              <React.Fragment key={project.title}>
                <ProjectRow project={project} index={i} onOpen={setSelectedProject} />
                {i < PROJECTS_DATA.length - 1 && (
                  <li aria-hidden="true" className="h-px bg-on-surface/8" />
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </AnimatedSection>

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
            className="fixed inset-0 bg-on-surface/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              key="modal-content"
              variants={modalVariants}
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden relative"
              style={{ cursor: 'default', maxHeight: '90vh' }}
            >
              <div
                className="modal-scroll overflow-y-auto p-5 sm:p-7 md:p-10"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#874d2f #f0dfda',
                  maxHeight: '90vh',
                }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-on-surface/50 hover:text-primary transition-colors z-20 w-11 h-11 rounded-full flex items-center justify-center hover:bg-surface-low"
                  aria-label="Close project details"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>

                <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-on-surface/55 mb-4">
                  {selectedProject.category} &middot; case study
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-[-0.02em] leading-tight mb-6">
                  {selectedProject.title}
                </h2>

                <ul className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tools.map((tool) => (
                    <li
                      key={tool}
                      className="font-sans text-[11px] text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <div className="space-y-8 mb-10">
                  <DetailBlock heading="Overview" body={selectedProject.description} />
                  <DetailBlock heading="Challenge" body={selectedProject.challenge} />
                  <DetailBlock heading="Solution" body={selectedProject.solution} />
                </div>

                <div className="bg-surface-container-low rounded-2xl p-6 sm:p-7 mb-10">
                  <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-on-surface/55 mb-4">
                    Outcomes
                  </div>
                  <ul className="space-y-2 text-sm text-on-surface/80">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="leading-relaxed flex items-start gap-3">
                        <span className="font-mono text-primary mt-0.5" aria-hidden="true">&mdash;</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-on-surface hover:text-primary transition-colors"
                    >
                      <span className="border-b border-on-surface/40 group-hover:border-primary pb-1 transition-colors">
                        Live site
                      </span>
                      <GoArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  <a
                    href="https://github.com/Aditya1156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-on-surface/60 hover:text-primary transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span className="border-b border-transparent group-hover:border-primary/40 pb-1 transition-colors">
                      GitHub
                    </span>
                  </a>
                  <div className="ml-auto">
                    <ShareButtons
                      url={window.location.href}
                      title={`Check out this project by Aditya Kumar: ${selectedProject.title}`}
                    />
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

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MailIcon } from './icons';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-surface px-5 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative organic blobs — hidden on mobile to prevent overflow */}
      <div
        className="hidden md:block absolute top-0 right-0 -z-10 w-1/2 h-[800px] organic-blob bg-primary-fixed/30 blur-3xl opacity-60 transform translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute top-[30%] left-0 -z-10 w-72 h-72 organic-blob-alt bg-secondary-container/40 blur-2xl opacity-50 transform -translate-x-1/3"
        aria-hidden="true"
      />
      {/* Mobile-only soft radial glow */}
      <div
        className="md:hidden absolute top-0 right-0 -z-10 w-full h-[500px] bg-primary-fixed/20 blur-3xl opacity-50"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full pt-28 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-on-surface leading-[1.05] tracking-[-0.02em] mb-8"
            >
              <span className="sm:whitespace-nowrap">
                Owning the{' '}
                <span className="italic text-primary-container font-semibold">technical</span>
              </span>
              <br className="hidden sm:inline" />
              {' '}
              <span className="whitespace-nowrap">end-to-end.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10"
            >
              I'm Aditya Kumar &mdash;{' '}
              <strong className="font-bold text-on-surface">CEO and founder</strong>
              {' '}at{' '}
              <a
                href="https://thenexturl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-container transition-colors border-b border-primary/40 hover:border-primary-container"
              >
                TheNextUrl
              </a>
              . I own the technology, product architecture, frontend and backend engineering, hosting, QA, and every client handover. B.Tech, based in Shivamogga.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                onClick={handleScrollTo}
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-primary-container transition-all duration-300 inline-flex items-center justify-center group kp-shadow-ambient"
              >
                View selected work
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#contact"
                onClick={handleScrollTo}
                className="border border-outline-variant text-on-surface px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-surface-low transition-all duration-300 inline-flex items-center justify-center"
              >
                Start a conversation
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-10 gap-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MailIcon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-1">
                    Email me
                  </div>
                  <a
                    href="mailto:aditya@thenexturl.in"
                    className="font-display text-base sm:text-lg text-on-surface hover:text-primary transition-colors"
                  >
                    aditya@thenexturl.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-1">
                    Studio location
                  </div>
                  <div className="font-display text-base sm:text-lg text-on-surface">
                    Shivamogga, Karnataka
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Portrait in fluid blob mask */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px]">
              <div className="absolute inset-0 organic-blob bg-primary-fixed-dim/30 blur-2xl" aria-hidden="true" />
              <div className="organic-blob w-full h-full bg-surface-container relative overflow-hidden kp-shadow-ambient-lg">
                <img
                  src="/images/adityafinal.jpeg"
                  alt="Aditya Kumar portrait"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

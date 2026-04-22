import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface Chapter {
  version: string;
  era: string;
  title: string;
  body: string;
  shipped: string;
  stack: string[];
}

const CHAPTERS: Chapter[] = [
  {
    version: 'v0.1.0',
    era: '2023 — first commit',
    title: 'Crooked divs &amp; a curious kid.',
    body: 'Wrote my first <code>&lt;div&gt;</code> in a classroom and someone said it looked crooked. Everything since has been about making things less crooked. Learned HTML, CSS, and JavaScript the long way &mdash; by breaking things until they worked.',
    shipped: 'Curiosity',
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    version: 'v0.2.0',
    era: '2024 — finding a stack',
    title: 'Shipping to real users.',
    body: 'Started B.Tech. Picked React in the first semester and never put it down. Built TypingPath end-to-end &mdash; an AI-adaptive typing platform powered by Google Gemini. Real users, real bugs, real lessons in shipping vs. demoing.',
    shipped: 'TypingPath, ArenaQuest',
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini AI'],
  },
  {
    version: 'v1.0.0',
    era: '2026 — founding chapter',
    title: 'Founded TheNextUrl.',
    body: 'Went from solo coder to founder. Built the studio around a single idea: clients deserve the same engineering rigour a product team gets. Took the CEO seat because someone had to own the vision, the stack, and the late-night fixes.',
    shipped: 'The studio &amp; first clients',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    version: 'v1.1.0',
    era: '2026 — Hack for Hire',
    title: 'Four losses. One win. One offer.',
    body: 'Walked into Hack for Hire 2026 (Anvesana &amp; Karnataka IT-BT Dept) expecting loss number five. 36 sleepless hours with Team MeltDown, ~50 teams, 7 startup problem statements. Built a solution for Vulcan Learning Collective&rsquo;s platform and walked out with <strong class="text-on-surface">1st Prize</strong> &mdash; plus an internship offer. Proof that losing four hackathons in a row was the most useful thing I did.',
    shipped: '1st Prize &middot; Team MeltDown',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', '0h sleep'],
  },
  {
    version: 'v1.2.0',
    era: 'Present — Vulcan internship',
    title: 'Software Engineer at Vulcan.',
    body: 'The hackathon offer turned into a role. Joined <strong class="text-on-surface">Vulcan Learning Collective</strong> as a Software Engineer on full-stack development &mdash; building and extending their educational platform, writing code that ships to students, and learning how a real engineering team moves in production.',
    shipped: 'Full-stack features for Vulcan',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
];

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-surface py-20 sm:py-28 md:py-32 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient blobs — hidden on mobile to prevent overflow */}
      <div
        className="hidden md:block absolute top-20 right-0 -z-10 w-96 h-96 organic-blob bg-primary-fixed/25 blur-3xl opacity-70 transform translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute bottom-40 left-0 -z-10 w-72 h-72 organic-blob-alt bg-secondary-container/40 blur-3xl opacity-60 transform -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20 sm:mb-28"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
              ## CHANGELOG
            </span>
            <span className="w-8 h-px bg-outline-variant" aria-hidden="true" />
            <span className="font-mono text-[11px] text-on-surface-variant">v0.1 &rarr; v1.2</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface leading-[1.08] tracking-[-0.02em] mb-5">
            Not a r&eacute;sum&eacute;. A{' '}
            <span className="italic text-primary-container font-semibold">changelog</span>.
          </h2>
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
            I think in releases, not roles. Here are the five versions of me that mattered so far &mdash; each one breaking something the last version couldn&rsquo;t ship.
          </p>
        </motion.div>

        {/* Chapters */}
        <ol className="space-y-4 sm:space-y-6">
          {CHAPTERS.map((chapter, i) => {
            const isLatest = i === CHAPTERS.length - 1;
            return (
              <motion.li
                key={chapter.version}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="group relative"
              >
                <div className={`rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 transition-colors duration-500 ${
                  isLatest
                    ? 'bg-surface-container-lowest kp-shadow-ambient-lg border border-primary/20'
                    : 'bg-surface-container-low hover:bg-surface-container'
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12">
                    {/* Left rail — version stamp */}
                    <div className="md:w-48 md:pr-6 md:border-r md:border-outline-variant/30">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-primary tracking-wide">
                          {chapter.version}
                        </span>
                        {isLatest && (
                          <span className="inline-flex items-center gap-1 bg-secondary-container/60 px-2 py-0.5 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
                            <span className="font-mono text-[9px] font-semibold tracking-widest uppercase text-secondary">
                              Live
                            </span>
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-[11px] tracking-wide text-on-surface-variant mb-6 md:mb-0">
                        {chapter.era}
                      </p>
                    </div>

                    {/* Right — story */}
                    <div>
                      <h3
                        className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface leading-[1.15] tracking-[-0.015em] mb-5"
                        dangerouslySetInnerHTML={{ __html: chapter.title }}
                      />
                      <p
                        className="font-sans text-base text-on-surface-variant leading-relaxed mb-7 max-w-xl"
                        dangerouslySetInnerHTML={{ __html: chapter.body }}
                      />

                      {/* Shipped + stack row */}
                      <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10 pt-6 border-t border-outline-variant/30">
                        <div>
                          <div className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-2">
                            Shipped
                          </div>
                          <div
                            className="font-display italic text-base text-primary-container"
                            dangerouslySetInnerHTML={{ __html: chapter.shipped }}
                          />
                        </div>
                        <div className="sm:ml-auto">
                          <div className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-2 text-left sm:text-right">
                            Stack
                          </div>
                          <ul className="flex flex-wrap gap-x-3 gap-y-1 sm:justify-end font-mono text-xs text-on-surface-variant">
                            {chapter.stack.map((tech, idx) => (
                              <li key={tech} className="inline-flex items-center gap-3">
                                {idx > 0 && <span className="text-outline-variant" aria-hidden="true">&middot;</span>}
                                <span>{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 font-mono text-xs text-on-surface-variant text-center"
        >
          v1.3.0 loading<span className="inline-block animate-pulse">_</span>
        </motion.p>
      </div>
    </AnimatedSection>
  );
};

export default Experience;

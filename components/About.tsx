import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { DownloadIcon } from './icons';

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 21h18M6 21V9l6-5 6 5v12M10 21v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Architecture',
    body: 'Product architecture, technology stack, and the final call on what we build, how it scales, and where it lives.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M8 3L4 7l4 4M16 3l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Engineering',
    body: 'Frontend and backend delivered in Next.js, Node.js, and PostgreSQL &mdash; implemented, tested, and handed over with documentation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M4 17l6-6 4 4 6-6M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Operations',
    body: 'Hosting, cloud infrastructure, DNS, SSL, deployments, QA, and maintenance &mdash; everything between code and the client’s hands.',
  },
];

const OWNERSHIP = [
  'Product architecture &amp; code quality',
  'Wireframes, UI &amp; visual direction',
  'Frontend &amp; backend (Next.js, Node.js, PostgreSQL)',
  'Hosting, cloud, DNS, SSL &amp; deployments',
  'Testing &amp; QA before every client handover',
  'Technical documentation &amp; handover guides',
  'Framework maintenance &amp; new modules',
  'Technical client communication on escalation',
];

const AUTHORITY = [
  'Technology stack',
  'Project delivery timelines',
  'Feature feasibility in scope',
  'Architecture decisions',
];

const STACK = [
  'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'React',
  'TailwindCSS', 'Vercel', 'Cloud infrastructure', 'CI/CD', 'Git',
];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-surface-low py-20 sm:py-28 md:py-32 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-6">
              CEO &amp; Founder &middot; B.Tech
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface leading-[1.08] tracking-[-0.02em] mb-8">
              I own everything{' '}
              <span className="italic text-primary-container font-semibold">technical</span>
              {' '}at TheNextUrl.
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-5">
              From the first architectural decision to the last line of handover documentation &mdash; I run the engineering side of the studio. If it runs on a server, sits in a repo, or touches a pipeline, it&apos;s on me.
            </p>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              Based in Shivamogga, India. My day looks like wireframes in the morning, PRs at noon, and deployments in the evening.
            </p>
          </motion.div>

          <motion.aside
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative blob */}
            <div
              className="absolute -top-10 -right-10 w-60 h-60 organic-blob bg-primary-fixed/40 blur-2xl opacity-60"
              aria-hidden="true"
            />

            <div className="relative bg-surface-container-lowest rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 kp-shadow-ambient-lg border border-outline-variant/30">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container kp-shadow-ambient flex-shrink-0 ring-2 ring-primary/20">
                    <img
                      src="/images/adityafinal.jpeg"
                      alt="Aditya Kumar"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-on-surface">Aditya Kumar</div>
                    <div className="font-sans text-[11px] tracking-[0.18em] uppercase text-on-surface-variant mt-0.5">
                      CEO &amp; Founder
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-secondary-container/60 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
                  <span className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-secondary">Live</span>
                </div>
              </div>

              {/* Fact list */}
              <dl className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant pt-0.5">
                    Role
                  </dt>
                  <dd className="font-display text-sm font-semibold text-on-surface text-right">
                    CEO &amp; Founder, TheNextUrl
                  </dd>
                </div>
                <div className="h-px bg-outline-variant/40" aria-hidden="true" />

                <div className="flex items-start justify-between gap-4">
                  <dt className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant pt-0.5">
                    Education
                  </dt>
                  <dd className="font-display text-sm font-semibold text-on-surface text-right">B.Tech</dd>
                </div>
                <div className="h-px bg-outline-variant/40" aria-hidden="true" />

                <div className="flex items-start justify-between gap-4">
                  <dt className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant pt-0.5">
                    Based in
                  </dt>
                  <dd className="font-display text-sm font-semibold text-on-surface text-right">
                    Shivamogga, India
                  </dd>
                </div>
                <div className="h-px bg-outline-variant/40" aria-hidden="true" />

                <div className="flex items-start justify-between gap-4">
                  <dt className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant pt-0.5">
                    Stack
                  </dt>
                  <dd className="font-mono text-xs text-on-surface-variant text-right leading-relaxed">
                    Next.js &middot; Node.js<br />PostgreSQL &middot; TS
                  </dd>
                </div>
                <div className="h-px bg-outline-variant/40" aria-hidden="true" />

                <div className="flex items-start justify-between gap-4">
                  <dt className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant pt-0.5">
                    Currently
                  </dt>
                  <dd className="font-display italic text-sm text-primary-container text-right">
                    Shipping client work
                  </dd>
                </div>
              </dl>

              {/* Email CTA */}
              <a
                href="mailto:aditya@thenexturl.in"
                className="mt-8 flex items-center justify-between gap-3 bg-on-surface text-surface rounded-full px-5 py-3 hover:bg-primary transition-colors group"
              >
                <span className="font-mono text-xs">aditya@thenexturl.in</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.aside>
        </div>

        {/* Philosophy pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-32"
        >
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="space-y-4">
              <div className="text-primary">{pillar.icon}</div>
              <h3 className="font-display text-2xl font-bold text-on-surface">{pillar.title}</h3>
              <p
                className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed"
                dangerouslySetInnerHTML={{ __html: pillar.body }}
              />
            </div>
          ))}
        </motion.div>

        {/* Ownership + Decision authority */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32"
        >
          <div className="lg:col-span-7">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              What I own
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-surface mb-8">
              End-to-end technical <span className="italic text-primary-container">responsibility</span>.
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {OWNERSHIP.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-on-surface-variant leading-relaxed">
                  <span className="font-mono text-primary mt-1.5 text-[9px]" aria-hidden="true">&#9679;</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-surface-container rounded-[2rem] p-8 sm:p-10 h-full flex flex-col justify-between kp-shadow-ambient">
              <div>
                <div className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
                  Decision authority
                </div>
                <p className="font-display italic text-xl sm:text-2xl text-on-surface leading-snug mb-8">
                  &ldquo;Final say on what we ship, how we ship it, and when it ships.&rdquo;
                </p>
              </div>
              <ul className="space-y-3">
                {AUTHORITY.map((item, idx) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-on-surface">
                    <span className="font-mono text-[10px] text-primary tracking-widest w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Stack + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
        >
          <div className="lg:col-span-7">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              Stack &amp; tooling
            </div>
            <ul className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="font-sans text-sm text-on-surface-variant bg-surface-container px-4 py-2 rounded-full border border-outline-variant/40"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <a
              href="/Fullstack_Resume.pdf"
              download="Aditya_Kumar_Fullstack_Resume.pdf"
              className="inline-flex items-center gap-2 bg-on-surface text-surface px-7 py-3 rounded-full font-semibold text-sm hover:bg-primary transition-all duration-300 group"
            >
              Download r&eacute;sum&eacute;
              <DownloadIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;

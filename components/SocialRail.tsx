import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './icons';

interface RailItem {
  label: string;
  handle: string;
  href: string;
  Icon: React.FC<{ className?: string }>;
}

const ITEMS: RailItem[] = [
  {
    label: 'GitHub',
    handle: '@Aditya1156',
    href: 'https://github.com/Aditya1156',
    Icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    handle: 'aditya-kumar',
    href: 'https://linkedin.com/in/aditya-kumar-165911339',
    Icon: LinkedInIcon,
  },
  {
    label: 'Twitter',
    handle: '@adicodes_',
    href: 'https://twitter.com/adicodes_',
    Icon: TwitterIcon,
  },
  {
    label: 'Email',
    handle: 'aditya@thenexturl.in',
    href: 'mailto:aditya@thenexturl.in',
    Icon: MailIcon,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const SocialRail: React.FC = () => {
  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-4 lg:left-7 top-0 h-screen z-40 hidden md:flex flex-col items-center justify-center"
      aria-label="Social links"
    >
      <ul className="flex flex-col items-center gap-3">
        {ITEMS.map(({ label, handle, href, Icon }, i) => (
          <motion.li key={label} variants={itemVariants} className="relative group">
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="relative block w-12 h-12 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-on-surface-variant overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_24px_rgba(135,77,47,0.18)]"
            >
              {/* Hover fill that slides up */}
              <span
                className="absolute inset-0 kp-gradient-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                aria-hidden="true"
              />
              {/* Icon */}
              <Icon className="relative w-[18px] h-[18px] transition-colors duration-300 group-hover:text-white" />
            </a>

            {/* Tooltip flyout */}
            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-4 opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="relative bg-on-surface text-surface rounded-xl px-4 py-2 whitespace-nowrap kp-shadow-ambient-lg">
                <div className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-surface/60 mb-0.5">
                  {label}
                </div>
                <div className="font-mono text-xs text-surface">{handle}</div>
                {/* Arrow */}
                <span className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 rotate-45 bg-on-surface" aria-hidden="true" />
              </div>
            </div>

            {/* Index ticker on the far left (mono numeral) */}
            <span
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 font-mono text-[9px] tracking-[0.22em] text-on-surface-variant/60 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default SocialRail;

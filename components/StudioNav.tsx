import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const StudioNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const handleHireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-md border-b border-outline-variant/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="font-display text-lg sm:text-xl font-bold text-on-surface hover:text-primary transition-colors tracking-tight"
          >
            Aditya <span className="italic text-primary-container">Kumar</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative font-sans text-sm font-medium tracking-tight transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hire CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={handleHireClick}
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-sans text-sm font-semibold hover:bg-primary-container transition-colors"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-on-surface hover:text-primary transition-colors -mr-2"
            >
              <span
                className={`w-5 h-px bg-current transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`w-5 h-px bg-current transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] md:hidden bg-surface"
          >
            <div className="absolute inset-0 flex flex-col pt-24 px-6">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                className="flex flex-col gap-2"
              >
                {NAV_LINKS.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeId === id;
                  return (
                    <motion.li
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleScrollTo(e, link.href)}
                        className={`flex items-baseline gap-4 py-3 font-display text-3xl font-bold tracking-tight transition-colors ${
                          isActive ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        <span className="font-mono text-xs text-on-surface-variant tabular-nums w-6">
                          {String(NAV_LINKS.indexOf(link) + 1).padStart(2, '0')}
                        </span>
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                href="#contact"
                onClick={handleHireClick}
                className="mt-10 bg-primary text-white px-6 py-4 rounded-full font-sans text-base font-semibold text-center kp-shadow-ambient"
              >
                Hire Me
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-auto mb-10 pt-10 font-mono text-[11px] tracking-[0.22em] uppercase text-on-surface-variant"
              >
                aditya@thenexturl.in &middot; Shivamogga, IN
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StudioNav;

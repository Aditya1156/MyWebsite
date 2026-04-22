import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!target.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-high relative">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col items-center text-center gap-8">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="font-display text-2xl sm:text-3xl font-bold text-on-surface hover:text-primary transition-colors"
          >
            Aditya Kumar
          </a>

          <p className="font-display text-base sm:text-lg italic text-on-surface-variant max-w-xl leading-relaxed">
            "Software should bow to the user, not the other way around."
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-2">
            {[
              { label: 'About', href: '#about' },
              { label: 'Experience', href: '#experience' },
              { label: 'Selected work', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="flex items-center gap-4 mt-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display italic text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-display text-sm italic text-on-surface-variant/70 mt-6">
            &copy; {currentYear} Aditya Kumar. Crafted with intention.
          </p>
        </div>
      </div>

      {/* Designer credit strip */}
      <div className="bg-on-surface/[0.04] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-2 text-center text-xs">
          <p className="font-sans text-on-surface-variant tracking-wide">
            Designed &amp; developed by{' '}
            <a
              href="https://thenexturl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors"
              style={{ color: '#2563eb' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1d4ed8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2563eb')}
            >
              TheNextUrl
            </a>
          </p>
          <p className="font-sans text-on-surface-variant/60 tracking-[0.22em] uppercase text-[10px]">
            v2.1 &middot; 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

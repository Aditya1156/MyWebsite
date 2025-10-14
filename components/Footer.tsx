import React from 'react';
import { useLenis } from 'lenis/react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { TwitterIcon, LinkedInIcon, GithubIcon, ArrowUpIcon, MailIcon } from './icons';

const ICON_MAP: { [key: string]: React.FC<any> } = {
    Twitter: TwitterIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GithubIcon,
    Medium: TwitterIcon, // Using Twitter icon for Medium
};

const Footer: React.FC = () => {
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-6 py-16">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-12 border-b border-cream/20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter">Let's build something amazing together.</h2>
            <p className="text-cream/70 mt-2 max-w-lg">Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.</p>
          </div>
          <a
            href="#hire-me"
            onClick={(e) => handleScrollTo(e, '#hire-me')}
            className="bg-orange text-cream px-8 py-4 rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 shrink-0 shadow-lg hover:shadow-orange/50"
          >
            Start a Project
          </a>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="font-display text-2xl font-bold tracking-tighter hover:text-orange transition-colors">
              Aditya Kumar
            </a>
            <p className="mt-3 text-cream/70 text-sm leading-relaxed">
              Full-Stack Developer & MERN Stack Specialist crafting modern web experiences with React, TypeScript, and AI integration.
            </p>
            <div className="mt-4">
              <p className="text-xs text-cream/50">Based in Shivamogga, Karnataka</p>
              <p className="text-xs text-cream/50">Available for freelance projects</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-cream tracking-widest uppercase text-sm">Explore</h3>
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScrollTo(e, link.href)} 
                  className="text-cream/70 hover:text-orange transition-colors text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Projects & Work */}
          <div>
            <h3 className="font-semibold mb-4 text-cream tracking-widest uppercase text-sm">Projects</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://typingpath.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream/70 hover:text-orange transition-colors text-sm group flex items-center"
              >
                <span className="group-hover:translate-x-1 transition-transform">TypingPath</span>
                <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="https://github.com/Aditya1156" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream/70 hover:text-orange transition-colors text-sm group flex items-center"
              >
                <span className="group-hover:translate-x-1 transition-transform">View All Projects</span>
                <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="#experience" 
                onClick={(e) => handleScrollTo(e, '#experience')} 
                className="text-cream/70 hover:text-orange transition-colors text-sm group flex items-center"
              >
                <span className="group-hover:translate-x-1 transition-transform">Experience</span>
              </a>
              <a 
                href="#skills" 
                onClick={(e) => handleScrollTo(e, '#skills')} 
                className="text-cream/70 hover:text-orange transition-colors text-sm group flex items-center"
              >
                <span className="group-hover:translate-x-1 transition-transform">Tech Stack</span>
              </a>
            </div>
          </div>
          
          {/* Column 4: Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-cream tracking-widest uppercase text-sm">Connect</h3>
            <div className="flex flex-col space-y-3 mb-6">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.label];
                return (
                  <a 
                    key={link.label} 
                    href={link.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label} 
                    className="flex items-center gap-3 text-cream/70 hover:text-orange transition-colors text-sm group"
                  >
                    {Icon && <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                )
              })}
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-cream/80 text-xs tracking-widest uppercase">Email</h4>
              <a 
                href="mailto:adicodes@outlook.com" 
                className="flex items-center gap-2 text-cream/70 hover:text-orange transition-colors text-sm group"
              >
                <MailIcon className="w-4 h-4" />
                <span className="group-hover:translate-x-1 transition-transform">adicodes@outlook.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="mt-8 pt-8 border-t border-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-cream/60">
                &copy; {currentYear} Aditya Kumar. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-cream/50">
                <span className="hidden sm:inline">•</span>
                <span>Built with React, TypeScript & ❤️</span>
              </div>
            </div>
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="group flex items-center gap-2 text-sm text-cream/70 hover:text-orange transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUpIcon className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-cream/10 text-center">
            <p className="text-xs text-cream/40">
              This website uses smooth scrolling powered by Lenis, animations by Framer Motion, and is deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

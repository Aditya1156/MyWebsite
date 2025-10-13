import React from 'react';
import { useLenis } from 'lenis/react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { TwitterIcon, LinkedInIcon, GithubIcon, ArrowUpIcon } from './icons';

const ICON_MAP: { [key: string]: React.FC<any> } = {
    Twitter: TwitterIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GithubIcon,
};

const Footer: React.FC = () => {
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target);
    }
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-6 py-16">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-12 border-b border-cream/20">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tighter">Let's build something great.</h2>
            <p className="text-cream/70 mt-2 max-w-lg">Ready to start a project or just want to connect? I'd love to hear from you.</p>
          </div>
          <a
            href="#hire-me"
            onClick={(e) => handleScrollTo(e, '#hire-me')}
            className="bg-orange text-cream px-8 py-4 rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 shrink-0"
          >
            Start a Project
          </a>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="font-display text-2xl font-bold tracking-tighter">
              Aditya Kumar
            </a>
            <p className="mt-2 text-cream/70 text-sm">Engineer, Creator, Dream Builder.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cream/80 tracking-widest uppercase text-sm">Menu</h3>
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.slice(1, 5).map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-cream/80 hover:text-orange transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="font-semibold mb-4 text-cream/80 tracking-widest uppercase text-sm">Social</h3>
            <div className="flex flex-col space-y-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.label];
                return (
                    <a key={link.label} href={link.link} aria-label={link.label} className="flex items-center gap-3 text-cream/80 hover:text-orange transition-colors">
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{link.label}</span>
                    </a>
                )
              })}
            </div>
          </div>
          
          {/* Column 4: Contact */}
           <div>
            <h3 className="font-semibold mb-4 text-cream/80 tracking-widest uppercase text-sm">Get in Touch</h3>
             <a href="mailto:hello@adicodes.in" className="text-cream/80 hover:text-orange transition-colors">
                hello@adicodes.in
              </a>
          </div>

        </div>

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-cream/20 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/60">&copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.</p>
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="group flex items-center gap-2 text-sm text-cream/80 hover:text-orange transition-colors"
          >
            Back to Top
            <ArrowUpIcon className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

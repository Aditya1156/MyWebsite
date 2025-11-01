import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, EXPERIENCE_DATA, PROJECTS_DATA } from '../constants';
import { TwitterIcon, LinkedInIcon, GithubIcon, MailIcon, UserIcon } from './icons';

interface VCardProps {
    onSwitchToFull: () => void;
}

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ title, icon, children, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-charcoal/5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-charcoal">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ICON_MAP: { [key: string]: React.FC<any> } = {
    Twitter: TwitterIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GithubIcon,
};

const VCard: React.FC<VCardProps> = ({ onSwitchToFull }) => {
  const topProjects = PROJECTS_DATA.slice(0, 3);
  const latestExperience = EXPERIENCE_DATA[0];

  return (
    <div className="min-h-screen w-full bg-cream py-12 px-4">
      {/* Header */}
      <motion.div 
        className="max-w-6xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-32 h-32 rounded-full bg-gradient-to-br from-orange to-orange-light mx-auto mb-6 overflow-hidden ring-4 ring-orange/20"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/images/aditya.jpeg" 
            alt="Aditya Kumar" 
            className="w-full h-full object-cover"
            width="128"
            height="128"
            loading="eager"
            decoding="async"
          />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-2">Aditya Kumar</h1>
        <p className="text-xl text-charcoal/60 mb-4">MERN Stack Developer</p>
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for Projects
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* About Card */}
        <Card title="About Me" icon={<UserIcon className="w-5 h-5" />} delay={0.1}>
          <p className="text-charcoal/70 text-sm leading-relaxed">
            Passionate MERN Stack Developer focused on building exceptional digital experiences. 
            I specialize in creating responsive, user-friendly web applications with modern technologies.
          </p>
        </Card>

        {/* Contact Card */}
        <Card title="Contact" icon={<MailIcon className="w-5 h-5" />} delay={0.2}>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MailIcon className="w-4 h-4 text-orange" />
              <a href="mailto:adicodes@example.com" className="text-charcoal/70 hover:text-orange transition-colors">
                adicodes@example.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GithubIcon className="w-4 h-4 text-orange" />
              <span className="text-charcoal/70">@adicodes</span>
            </div>
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.label];
                return Icon ? (
                  <a
                    key={link.label}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-orange hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </Card>

        {/* Experience Card */}
        <Card title="Experience" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} delay={0.3}>
          {latestExperience && (
            <div>
              <h4 className="font-semibold text-charcoal text-sm mb-1">{latestExperience.role}</h4>
              <p className="text-xs text-charcoal/50 mb-2">{latestExperience.organization}</p>
              <p className="text-xs text-charcoal/60 mb-3">{latestExperience.duration}</p>
              <div className="flex flex-wrap gap-1">
                {latestExperience.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs bg-orange/10 text-orange px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Skills Card */}
        <Card title="Skills" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>} delay={0.4}>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'TailwindCSS', 'Firebase', 'Vite', 'Git'].map((skill) => (
              <span key={skill} className="text-xs bg-charcoal/5 text-charcoal/70 px-3 py-1.5 rounded-full hover:bg-orange/10 hover:text-orange transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Projects Card */}
        <Card title="Featured Projects" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>} delay={0.5}>
          <div className="space-y-3">
            {topProjects.map((project, idx) => (
              <div key={idx} className="group">
                <h4 className="font-medium text-charcoal text-sm group-hover:text-orange transition-colors">{project.title}</h4>
                <p className="text-xs text-charcoal/50 line-clamp-2 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Card */}
        <Card title="Let's Work Together" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} delay={0.6}>
          <p className="text-sm text-charcoal/70 mb-4">
            Interested in collaborating? Let's create something amazing together!
          </p>
          <button
            onClick={onSwitchToFull}
            className="w-full bg-orange hover:bg-orange/90 text-white font-medium py-3 rounded-lg transition-colors"
          >
            View Full Portfolio
          </button>
        </Card>

      </div>

      {/* Footer */}
      <motion.div 
        className="max-w-6xl mx-auto mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <button
          onClick={onSwitchToFull}
          className="text-sm text-charcoal/50 hover:text-orange underline transition-colors"
        >
          Explore Full Experience →
        </button>
      </motion.div>
    </div>
  );
};

export default VCard;
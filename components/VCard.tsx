import React from 'react';
import ProfileCard from './ProfileCard';
import { SOCIAL_LINKS } from '../constants';
import { TwitterIcon, LinkedInIcon, GithubIcon } from './icons';
import { motion } from 'framer-motion';

interface VCardProps {
    onSwitchToFull: () => void;
}

const ICON_MAP: { [key: string]: React.FC<any> } = {
    Twitter: TwitterIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GithubIcon,
};

const VCard: React.FC<VCardProps> = ({ onSwitchToFull }) => {
  return (
    <motion.div 
        className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-cream"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="lg:w-[420px] w-full max-w-md flex-shrink-0 flex justify-center items-center h-[480px] md:h-[540px]">
        <ProfileCard
          name="Aditya Kumar"
          title="Engineer & Creator"
          handle="adicodes"
          status="Available for Projects"
          contactText="Hire Me"
          avatarUrl="https://picsum.photos/seed/aditya-avatar/800/1000"
          enableTilt={true}
          onContactClick={onSwitchToFull}
        />
      </div>
      <div className="mt-8 text-center">
        <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.label];
                return (
                    <motion.a 
                        key={link.label} 
                        href={link.link} 
                        aria-label={link.label} 
                        className="text-charcoal/50 hover:text-orange transition-colors"
                        whileHover={{ scale: 1.2, y: -5 }}
                    >
                        {Icon && <Icon className="w-8 h-8" />}
                    </motion.a>
                )
            })}
        </div>
        <button 
            onClick={onSwitchToFull}
            className="mt-12 font-mono text-sm text-charcoal/60 hover:text-orange underline transition-colors"
        >
            View Full Portfolio
        </button>
      </div>
    </motion.div>
  );
};

export default VCard;
import React from 'react';
// FIX: Import Variants type from framer-motion to resolve typing issues.
import { motion, Variants } from 'framer-motion';
import { ArrowRightIcon, GridIcon, VCardIcon, DevIcon } from './icons';

interface SelectionProps {
  onSelect: (experience: 'full' | 'minimal') => void;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

// FIX: Explicitly type cardVariants with Variants to fix type inference issues with the 'ease' property.
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Selection: React.FC<SelectionProps> = ({ onSelect }) => {
  return (
    <motion.div 
        className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-charcoal tracking-tighter">Choose Your Experience</h1>
        <p className="text-charcoal/70 mt-4 text-lg max-w-3xl mx-auto">Select how you'd like to explore my digital space. Each path is tailored for a different audience, from a deep dive to a quick overview.</p>
      </div>

      <motion.div 
        className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SelectionCard
          title="Full Experience"
          description="For everyone. An immersive, cinematic journey through my portfolio, projects, and process."
          icon={<GridIcon className="w-12 h-12 text-orange" />}
          onClick={() => onSelect('full')}
        />
        <SelectionCard
          title="Terminal Mode"
          description="For the curious & creative. A terminal-style portfolio for a developer-focused overview."
          icon={<DevIcon className="w-12 h-12 text-orange" />}
          onClick={() => window.open('https://adicodes2.vercel.app', '_blank', 'noopener,noreferrer')}
        />
        <SelectionCard
          title="Interviewer Mode"
          description="For recruiters & interviewers. A clean, minimal vCard with just the essentials. Straight to the point."
          icon={<VCardIcon className="w-12 h-12 text-orange" />}
          onClick={() => onSelect('minimal')}
        />
      </motion.div>
    </motion.div>
  );
};

interface SelectionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ title, description, icon, onClick }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 cursor-pointer shadow-lg border border-transparent hover:border-orange/50 transition-all duration-300 group"
            onClick={onClick}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
        >
            <div className="flex items-center justify-center w-20 h-20 bg-cream rounded-full mb-6">
                {icon}
            </div>
            <h2 className="font-display text-3xl font-bold text-charcoal tracking-tight mb-4">{title}</h2>
            <p className="text-charcoal/70 mb-8">{description}</p>
            <div className="flex items-center text-orange font-bold">
                Enter
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
        </motion.div>
    );
};


export default Selection;
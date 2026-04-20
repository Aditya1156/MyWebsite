import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}) => {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignCls} ${className}`}
    >
      <div className="flex items-center gap-3 font-sans text-xs tracking-[0.22em] uppercase font-semibold text-primary">
        <span className="font-mono text-on-surface/40">{index}</span>
        <span className="w-8 h-px bg-on-surface/20" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface tracking-[-0.02em] leading-[1.05]">
        {title}
      </h2>
      {lead && (
        <p className="font-sans text-base md:text-lg text-on-surface/65 leading-relaxed max-w-2xl">
          {lead}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

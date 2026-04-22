import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/8.jpeg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
];

const ImageMarquee: React.FC = () => {
  // Duplicate images for seamless loop
  const track = [...IMAGES, ...IMAGES];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20 sm:mb-24"
      aria-label="Studio moments"
    >
      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-12">
        <div className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
          Behind the work
        </div>
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface leading-[1.08] tracking-[-0.02em]">
          Moments from the{' '}
          <span className="italic text-primary-container font-semibold">studio floor</span>.
        </h3>
      </div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden -mx-5 sm:-mx-6 lg:-mx-8"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
        }}
      >
        <motion.ul
          className="flex gap-4 sm:gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 45,
              ease: 'linear',
            },
          }}
        >
          {track.map((src, i) => (
            <li
              key={`${src}-${i}`}
              className="relative flex-shrink-0 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] aspect-[4/5] rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden bg-surface-container kp-shadow-ambient"
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Subtle warm overlay to stay on-palette */}
              <div
                className="absolute inset-0 mix-blend-multiply pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,219,204,0) 60%, rgba(135,77,47,0.12) 100%)',
                }}
                aria-hidden="true"
              />
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Caption */}
      <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-on-surface-variant">
        <span>
          <span className="text-primary">11</span> / studio frames
        </span>
      </div>
    </motion.section>
  );
};

export default ImageMarquee;

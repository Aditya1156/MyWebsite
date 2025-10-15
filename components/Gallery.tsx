import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { GALLERY_DATA } from '../constants';
import { CloseIcon, ArrowRightIcon } from './icons';
import { soundManager } from '../lib/sounds';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const ArrowLeftIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);
  

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedId === null) return;
      if (event.key === 'Escape') {
        setSelectedId(null);
      } else if (event.key === 'ArrowRight') {
        const currentIndex = GALLERY_DATA.findIndex(item => item.id === selectedId);
        const nextIndex = (currentIndex + 1) % GALLERY_DATA.length;
        setSelectedId(GALLERY_DATA[nextIndex].id);
      } else if (event.key === 'ArrowLeft') {
        const currentIndex = GALLERY_DATA.findIndex(item => item.id === selectedId);
        const prevIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
        setSelectedId(GALLERY_DATA[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedId]);
  
   useEffect(() => {
    if (selectedId !== null) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [selectedId]);


  const selectedItem = selectedId !== null ? GALLERY_DATA.find(item => item.id === selectedId) : null;

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedId === null) return;
    const currentIndex = GALLERY_DATA.findIndex(item => item.id === selectedId);
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % GALLERY_DATA.length;
    } else {
        newIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
    }
    setSelectedId(GALLERY_DATA[newIndex].id);
  };

  return (
    <AnimatedSection id="gallery" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter">
            Snapshots of My Journey
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
            A collection of moments from hackathons, conferences, and collaborative projects.
          </p>
        </div>

        <div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8"
          style={{ columnFill: 'balance' }}
        >
          {GALLERY_DATA.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => {
                setSelectedId(item.id);
                soundManager.playWhoosh();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="mb-4 sm:mb-6 lg:mb-8 break-inside-avoid cursor-pointer relative rounded-xl sm:rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, y: -3, boxShadow: '0 25px 40px -15px rgba(0, 0, 0, 0.3)' }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-auto object-cover vintage-photo"
                style={{
                  filter: 'sepia(0.5) contrast(1.2) brightness(0.95) saturate(0.8)',
                }}
              />
              {/* Vintage film grain overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px',
                }}
              />
              {/* Vignette effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.3) 100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-cream font-display text-2xl font-bold">{item.title}</h3>
                  <p className="text-cream/80 font-mono text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-[1000] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedId(null);
              soundManager.playWhoosh();
            }}
          >
            <motion.div 
              className="w-full h-full max-w-5xl max-h-[90vh] relative"
              layoutId={`card-${selectedItem.id}`}
              onClick={(e) => e.stopPropagation()}
            >
               <motion.div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
               </motion.div>

               <motion.div 
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cream/90 backdrop-blur-sm text-charcoal p-4 rounded-xl text-center shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
               >
                   <h3 className="font-display font-bold text-xl">{selectedItem.title}</h3>
                   <p className="font-mono text-sm text-charcoal/70">{selectedItem.category}</p>
               </motion.div>
            </motion.div>
            
            <motion.button
              onClick={() => {
                setSelectedId(null);
                soundManager.playClick();
              }}
              className="absolute top-6 right-6 text-cream/70 hover:text-orange transition-colors"
              aria-label="Close image view"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 0.3 } }}
            >
              <CloseIcon className="w-10 h-10" />
            </motion.button>

            <motion.button
                onClick={() => {
                  navigate('prev');
                  soundManager.playClick();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-orange bg-charcoal/50 rounded-full p-3 transition-colors"
                aria-label="Previous image"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            >
                <ArrowLeftIcon className="w-8 h-8" />
            </motion.button>
            <motion.button
                onClick={() => {
                  navigate('next');
                  soundManager.playClick();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-orange bg-charcoal/50 rounded-full p-3 transition-colors"
                aria-label="Next image"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            >
                <ArrowRightIcon className="w-8 h-8" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default Gallery;
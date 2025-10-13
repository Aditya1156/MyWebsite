import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardNavItem } from '../types';
import { GoArrowUpRightIcon, UserIcon, GridIcon, MailIcon, CloseIcon } from './icons';
import './Dock.css';

interface DockProps {
  items: CardNavItem[];
}

const ICON_MAP: { [key: string]: React.FC<{className?: string}> } = {
  About: UserIcon,
  Projects: GridIcon,
  Connect: MailIcon,
};

const Dock: React.FC<DockProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CardNavItem | null>(null);

  const toggleDock = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
        setSelectedCategory(null);
    }
  };

  const handleCategoryClick = (item: CardNavItem) => {
    if (selectedCategory?.label === item.label) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(item);
    }
  };
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setSelectedCategory(null);
    setIsOpen(false);
  };

  const categoryItems = useMemo(() => items.map(item => {
    const Icon = ICON_MAP[item.label];
    return { ...item, Icon };
  }), [items]);

  const activeLinks = selectedCategory?.links || [];

  return (
    <>
      <AnimatePresence>
        {selectedCategory && (
            <motion.div
                className="fixed inset-0 bg-charcoal/50 z-[98]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
            />
        )}
      </AnimatePresence>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99]">
        <div className="relative flex justify-center items-center">
          <AnimatePresence>
            {selectedCategory && activeLinks.map((link, i) => {
              const totalLinks = activeLinks.length;
              const isEven = totalLinks % 2 === 0;
              const middleIndex = Math.floor(totalLinks / 2);
              const angleStep = 25;
              const baseRotation = isEven ? - (middleIndex - 0.5) * angleStep : -middleIndex * angleStep;
              const rotation = baseRotation + i * angleStep;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="dock-link-card"
                  style={{
                    backgroundColor: selectedCategory.bgColor,
                    color: selectedCategory.textColor,
                  }}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, y: -80, rotate: rotation }}
                  exit={{ opacity: 0, y: 20, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20, delay: i * 0.05 }}
                  whileHover={{ y: -90, scale: 1.05 }}
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </AnimatePresence>
          
          <motion.div
            className="flex items-center justify-center bg-charcoal/80 backdrop-blur-md rounded-full shadow-2xl"
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <AnimatePresence mode="popLayout">
                {isOpen ? (
                    <motion.div
                        key="categories"
                        className="flex p-2 gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                    {categoryItems.map((item) => (
                        item.Icon && <button
                            key={item.label}
                            onClick={() => handleCategoryClick(item)}
                            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 transform-gpu ${
                                selectedCategory?.label === item.label ? 'bg-orange scale-110' : 'bg-cream/10 hover:bg-cream/20'
                            }`}
                            aria-label={`Open ${item.label} links`}
                        >
                            <item.Icon className="w-7 h-7 text-cream" />
                        </button>
                    ))}
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <motion.button
                onClick={toggleDock}
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-transparent"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                    key={isOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? (
                        <CloseIcon className="w-8 h-8 text-cream" />
                    ) : (
                        <GoArrowUpRightIcon className="w-8 h-8 text-cream" />
                    )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Dock;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButtons from './ShareButtons';
import { ShareIcon, CloseIcon } from './icons';

interface ShareWidgetProps {
    url: string;
    title: string;
}

const ShareWidget: React.FC<ShareWidgetProps> = ({ url, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (node.current && !node.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={node} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-cream/80 backdrop-blur-sm text-charcoal flex items-center justify-center shadow-lg hover:bg-orange hover:text-cream transition-all duration-300"
                aria-label="Share this memory"
            >
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isOpen ? 'close' : 'share'}
                        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <CloseIcon className="w-6 h-6" /> : <ShareIcon className="w-6 h-6" />}
                    </motion.div>
                </AnimatePresence>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute bottom-full right-0 mb-3 p-3 bg-cream/90 backdrop-blur-md rounded-xl shadow-xl"
                    >
                        <ShareButtons url={url} title={title} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ShareWidget;
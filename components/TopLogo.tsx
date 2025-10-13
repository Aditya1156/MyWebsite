import React, { useState, useEffect, useRef } from 'react';

const TopLogo: React.FC<{ logo: string, logoAlt: string }> = ({ logo, logoAlt }) => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) { // Hides on scroll down
                setIsVisible(false);
            } else { // Shows on scroll up
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <a 
            href="#hero" 
            aria-label="Go to homepage" 
            className={`fixed top-4 left-4 md:top-6 md:left-6 z-[60] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-20'}`}
            onClick={handleLogoClick}
        >
            <img src={logo} alt={logoAlt} className="h-8 md:h-10" />
        </a>
    );
};

export default TopLogo;

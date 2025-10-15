import React, { createContext, useContext, useEffect, useState } from 'react';
import { measurePerformance, prefersReducedMotion } from '../lib/performance';

interface PerformanceContextType {
  isReducedMotion: boolean;
  isSlowConnection: boolean;
  isLowEndDevice: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({
  isReducedMotion: false,
  isSlowConnection: false,
  isLowEndDevice: false,
});

export const usePerformance = () => useContext(PerformanceContext);

interface PerformanceProviderProps {
  children: React.ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    setIsReducedMotion(prefersReducedMotion());

    // Check connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const isSlowConn = connection.effectiveType === 'slow-2g' || 
                          connection.effectiveType === '2g' ||
                          connection.saveData;
        setIsSlowConnection(isSlowConn);
      }
    }

    // Check device performance (simplified)
    if ('hardwareConcurrency' in navigator) {
      const cores = navigator.hardwareConcurrency || 2;
      setIsLowEndDevice(cores <= 2);
    }

    // Measure performance
    measurePerformance();

    // Listen for motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const value = {
    isReducedMotion,
    isSlowConnection,
    isLowEndDevice,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};
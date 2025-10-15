"use client"
import React, { useEffect, useState, memo } from 'react';
import { soundManager } from '../../lib/sounds';

// --- Type Definitions ---
type IconType = 'html' | 'css' | 'javascript' | 'react' | 'typescript' | 'tailwind' | 'java' | 'nodejs' | 'springboot' | 'mongodb';

type GlowColor = 'orange' | 'charcoal' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components (Using your brand colors) ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
      </svg>
    ),
    color: '#FF6B00'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6"/>
      </svg>
    ),
    color: '#FF6B00'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    ),
    color: '#F7DF1E'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#3178C6" rx="5"/>
        <path d="M13.57 13.88v3.96c.41.2.85.36 1.31.47.46.11.94.17 1.44.17.5 0 .99-.06 1.47-.17.48-.12.9-.31 1.28-.57.38-.26.68-.6.9-1.02.22-.42.33-.94.33-1.56 0-.48-.08-.89-.23-1.23-.15-.34-.36-.63-.63-.87-.27-.24-.58-.44-.94-.6-.36-.16-.74-.3-1.14-.42-.34-.11-.65-.22-.93-.33-.28-.11-.52-.23-.72-.37-.2-.14-.36-.3-.47-.49-.11-.19-.17-.41-.17-.67 0-.22.05-.42.14-.59.09-.17.22-.32.38-.44.16-.12.35-.21.57-.27.22-.06.46-.09.72-.09.41 0 .84.07 1.28.22.44.15.87.37 1.29.67v-3.66c-.38-.17-.78-.3-1.2-.38-.42-.08-.85-.12-1.29-.12-.51 0-1.01.07-1.49.2-.48.13-.91.34-1.28.62-.37.28-.67.63-.89 1.05-.22.42-.33.93-.33 1.53 0 .97.28 1.75.85 2.35.57.6 1.38 1.08 2.43 1.45.34.12.66.24.95.35.29.11.55.24.77.38.22.14.39.31.52.5.13.19.19.42.19.68 0 .52-.18.91-.54 1.17-.36.26-.85.39-1.47.39-.53 0-1.04-.11-1.53-.32-.49-.21-.96-.52-1.4-.92zM9 9.5V22H6V9.5H2v-3h11v3H9z" fill="#fff"/>
      </svg>
    ),
    color: '#3178C6'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    ),
    color: '#06B6D4'
  },
  java: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" fill="#5382A1"/>
      </svg>
    ),
    color: '#5382A1'
  },
  nodejs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#83CD29"/>
      </svg>
    ),
    color: '#83CD29'
  },
  springboot: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.492 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596" fill="#6DB33F"/>
      </svg>
    ),
    color: '#6DB33F'
  },
  mongodb: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248"/>
      </svg>
    ),
    color: '#47A248'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills (Customized to your portfolio) ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  { 
    id: 'html',
    orbitRadius: 100, 
    size: 40, 
    speed: 1, 
    iconType: 'html', 
    phaseShift: 0, 
    glowColor: 'orange',
    label: 'HTML5'
  },
  { 
    id: 'css',
    orbitRadius: 100, 
    size: 45, 
    speed: 1, 
    iconType: 'css', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'orange',
    label: 'CSS3'
  },
  { 
    id: 'javascript',
    orbitRadius: 100, 
    size: 40, 
    speed: 1, 
    iconType: 'javascript', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'orange',
    label: 'JavaScript'
  },
  // Outer Orbit
  { 
    id: 'react',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.6, 
    iconType: 'react', 
    phaseShift: 0, 
    glowColor: 'charcoal',
    label: 'React'
  },
  { 
    id: 'typescript',
    orbitRadius: 180, 
    size: 45, 
    speed: -0.6, 
    iconType: 'typescript', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'charcoal',
    label: 'TypeScript'
  },
  { 
    id: 'tailwind',
    orbitRadius: 180, 
    size: 40, 
    speed: -0.6, 
    iconType: 'tailwind', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'charcoal',
    label: 'Tailwind CSS'
  },
  // Third Orbit - Backend/Server Technologies
  { 
    id: 'java',
    orbitRadius: 260, 
    size: 48, 
    speed: 0.5, 
    iconType: 'java', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'Java'
  },
  { 
    id: 'nodejs',
    orbitRadius: 260, 
    size: 50, 
    speed: 0.5, 
    iconType: 'nodejs', 
    phaseShift: Math.PI / 2, 
    glowColor: 'purple',
    label: 'Node.js'
  },
  { 
    id: 'springboot',
    orbitRadius: 260, 
    size: 45, 
    speed: 0.5, 
    iconType: 'springboot', 
    phaseShift: Math.PI, 
    glowColor: 'purple',
    label: 'Spring Boot'
  },
  { 
    id: 'mongodb',
    orbitRadius: 260, 
    size: 48, 
    speed: 0.5, 
    iconType: 'mongodb', 
    phaseShift: Math.PI * 3 / 2, 
    glowColor: 'purple',
    label: 'MongoDB'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        soundManager.playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-charcoal/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-charcoal/95 backdrop-blur-sm rounded text-xs text-cream whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'orange', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    orange: {
      primary: 'rgba(255, 107, 0, 0.4)',
      secondary: 'rgba(255, 107, 0, 0.2)',
      border: 'rgba(255, 107, 0, 0.3)'
    },
    charcoal: {
      primary: 'rgba(30, 30, 30, 0.4)',
      secondary: 'rgba(30, 30, 30, 0.2)',
      border: 'rgba(30, 30, 30, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.orange;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Orbiting Skills Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'orange', delay: 0 },
    { radius: 180, glowColor: 'charcoal', delay: 1.5 },
    { radius: 260, glowColor: 'purple', delay: 3 }
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF6B00 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #1E1E1E 0%, transparent 50%)`,
          }}
        />
      </div>

      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[600px] md:h-[600px] flex items-center justify-center"
        onMouseEnter={() => {
          setIsPaused(true);
          soundManager.playPause();
        }}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with green gradient */}
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#greenGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ee840aff" />
                  <stop offset="50%" stopColor="#f55e66ff" />
                  <stop offset="100%" stopColor="#c9387bff" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}

// FIX: Define and export CardNavLink and CardNavItem to be used by CardNav and Dock components.
export interface CardNavLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  category: 'Web' | 'AI' | 'Design' | 'Apps';
  imageUrl: string;
  images?: string[]; // Multiple images for carousel
  link: string;
  color: string;
}
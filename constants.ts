import { ExperienceItem, Project } from './types';
import { 
    ReactIcon,
    TypeScriptIcon,
    NodeJSIcon,
    PythonIcon,
    TensorFlowIcon,
    DockerIcon,
    FigmaIcon,
    NextJSIcon,
    GraphQLIcon,
    AIIcon,
    JavaScriptIcon,
    HtmlIcon,
    CssIcon,
    JavaIcon,
    DjangoIcon,
    PostgresqlIcon,
    MongoDbIcon,
    AwsIcon,
    GitIcon,
    KubernetesIcon
} from './components/icons';


export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Project', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Memories', href: '#memories' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', link: 'https://github.com/Aditya1156' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/aditya-kumar-165911339' },
  { label: 'Twitter', link: 'https://twitter.com/adicodes_' },
  { label: 'Medium', link: 'https://medium.com/@refactorslife' },
];

const SKILLS_LIST = [
    { name: 'React.js', icon: ReactIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'HTML5', icon: HtmlIcon },
    { name: 'CSS3', icon: CssIcon },
    { name: 'TailwindCSS', icon: CssIcon },
    { name: 'Firebase', icon: MongoDbIcon },
    { name: 'Vite', icon: NextJSIcon },
    { name: 'Google Gemini AI', icon: AIIcon },
    { name: 'RESTful APIs', icon: GraphQLIcon },
    { name: 'Git & GitHub', icon: GitIcon },
    { name: 'Netlify', icon: AwsIcon },
    { name: 'Vercel', icon: AwsIcon },
    { name: 'Framer Motion', icon: ReactIcon },
    { name: 'OOP Design', icon: JavaIcon },
    { name: 'Responsive Design', icon: CssIcon },
    { name: 'Performance Optimization', icon: ReactIcon },
];

// Distribute skills into rows for the marquee effect
export const SKILLS_ROW_1 = SKILLS_LIST.slice(0, 6);
export const SKILLS_ROW_2 = SKILLS_LIST.slice(6, 12);
export const SKILLS_ROW_3 = SKILLS_LIST.slice(12);


export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Computer Science Student',
    organization: 'PES Institute of Technology & Management',
    duration: '2023 - 2027 (Expected)',
    description: 'Pursuing Bachelor of Engineering in Computer Science at PESITM, Shivamogga, Karnataka. Focused on MERN stack development, full-stack engineering, and AI integration. Building real-world projects including TypingPath, Airline Management System, and AI chatbots.',
    tags: ['MERN Stack', 'Full-Stack', 'AI/ML', 'Web Development'],
  },
  {
    role: 'Google Gen AI Exchange Program',
    organization: 'Google',
    duration: 'June 2025',
    description: 'Completed Google\'s Generative AI Exchange program, gaining hands-on experience with Google Gemini AI, prompt engineering, and AI integration in web applications. Applied learnings to build AI-powered features in TypingPath and logistics chatbot.',
    tags: ['Google Gemini AI', 'Gen AI', 'AI Integration', 'Machine Learning'],
  },
  {
    role: 'Senior Secondary Education',
    organization: 'St. Joseph School, Begusarai',
    duration: 'Completed 2023',
    description: 'Completed senior secondary education in Science stream from St. Joseph School, Begusarai, Bihar. Built strong foundation in mathematics, physics, and computer science that fueled passion for software development.',
    tags: ['Science Stream', 'Academic Excellence', 'Foundation'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'TypingPath - AI Typing Platform',
    description: 'A modern AI-powered typing education platform that revolutionizes how people learn to type. Built with React 19, TypeScript, and integrated with Google Gemini AI for adaptive learning experiences.',
    challenge: 'Traditional typing tutors are monotonous and fail to adapt to individual learning pace. Users needed a platform that provides personalized lessons, real-time feedback, and engaging practice sessions that evolve with their skill level.',
    solution: "I architected and developed a full-stack web application using React 19 and TypeScript for the frontend, Firebase for authentication and real-time database, and integrated Google Gemini AI API to provide intelligent, adaptive learning experiences. The platform analyzes user performance in real-time and adjusts lesson difficulty dynamically. Vite and TailwindCSS ensure lightning-fast performance and a beautiful, responsive UI.",
    results: ["Deployed and live at typingpath.com serving users globally", "Real-time user analytics and personalized progress tracking", "AI-driven adaptive lessons that adjust to each user's learning pace", "Responsive design works seamlessly across all devices"],
    tools: ['React 19', 'TypeScript', 'Firebase', 'Google Gemini AI', 'Vite', 'TailwindCSS'],
    category: 'AI',
    imageUrl: 'https://picsum.photos/seed/typingpath/600/400',
    link: 'https://typingpath.com',
    color: '#D1E8E2',
  },
  {
    title: 'Airline Management System',
    description: 'A comprehensive desktop application for airline operations, handling booking, flight scheduling, and passenger management with an intuitive Java-based interface.',
    challenge: 'Airlines need efficient systems to manage complex operations including ticket booking, flight scheduling, passenger data, and real-time flight status tracking. The system needed to be robust, reliable, and easy to use for airline staff.',
    solution: "I designed and developed a full-featured desktop application using Java with a focus on clean architecture and user experience. The system includes modules for ticket booking, passenger management, flight scheduling, and real-time status updates. Built with Object-Oriented Programming principles ensuring maintainability and scalability.",
    results: ["Complete flight booking and reservation system", "Real-time flight status tracking and updates", "Passenger management with detailed record keeping", "Modular architecture for easy feature additions"],
    tools: ['Java', 'OOP Design Patterns', 'Desktop GUI'],
    category: 'Apps',
    imageUrl: 'https://picsum.photos/seed/airline/600/400',
    link: 'https://github.com/Aditya1156/FlightManagementSys',
    color: '#F4C7C4',
  },
  {
    title: 'GODOX - AI Logistics Chatbot',
    description: 'An intelligent chatbot designed to streamline logistics operations by providing instant support, tracking information, and automated responses using Google Gemini AI.',
    challenge: 'Logistics companies handle thousands of customer queries daily about shipment tracking, delivery status, and general support. Manual handling is time-consuming and error-prone. An automated, intelligent solution was needed.',
    solution: 'I built a React-based chatbot integrated with Google Gemini API for intelligent, context-aware response generation. The chatbot understands natural language queries and provides accurate, helpful responses. Deployed on Netlify for reliable, global accessibility with zero downtime.',
    results: ["Live at godox.netlify.app serving logistics queries 24/7", "AI-powered natural language understanding", "Instant responses to common logistics questions", "Reduced manual support workload significantly"],
    tools: ['React', 'Google Gemini API', 'JavaScript', 'Netlify'],
    category: 'AI',
    imageUrl: 'https://picsum.photos/seed/godox/600/400',
    link: 'https://godox.netlify.app/',
    color: '#FFD3B6',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, interactive personal portfolio showcasing projects, skills, and professional journey. Built with cutting-edge web technologies and smooth animations.',
    challenge: 'Create a standout portfolio that not only displays work but also demonstrates technical prowess through its implementation. The site needed to be fast, beautiful, and provide an engaging user experience.',
    solution: 'Developed using React with TypeScript for type safety, Framer Motion for smooth animations, and TailwindCSS for modern styling. Implemented advanced features like 3D dome gallery, interactive profile cards, smooth scrolling with Lenis, and responsive design patterns. Deployed on Vercel for optimal performance.',
    results: ["Lightning-fast load times with optimized assets", "Engaging 3D gallery and interactive components", "Fully responsive across all devices", "Smooth animations and transitions throughout"],
    tools: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite', 'Vercel'],
    category: 'Web',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    link: 'https://adicodes.in',
    color: '#C3E2DD',
  },
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Journey Snapshot 1",
    category: "My Memories",
    imageUrl: "/images/1.jpeg",
  },
  {
    id: 2,
    title: "Journey Snapshot 2",
    category: "My Memories",
    imageUrl: "/images/2.jpeg",
  },
  {
    id: 3,
    title: "Journey Snapshot 3",
    category: "My Memories",
    imageUrl: "/images/3.jpeg",
  },
  {
    id: 4,
    title: "Journey Snapshot 4",
    category: "My Memories",
    imageUrl: "/images/4.jpeg",
  },
  {
    id: 5,
    title: "Journey Snapshot 5",
    category: "My Memories",
    imageUrl: "/images/5.jpeg",
  },
  {
    id: 6,
    title: "Journey Snapshot 6",
    category: "My Memories",
    imageUrl: "/images/6.jpeg",
  },
  {
    id: 7,
    title: "Journey Snapshot 7",
    category: "My Memories",
    imageUrl: "/images/7.jpeg",
  },
  {
    id: 8,
    title: "Journey Snapshot 8",
    category: "My Memories",
    imageUrl: "/images/8.jpeg",
  }
];

export const MEMORY_IMAGES = [
  {
    src: '/images/1.jpeg',
    alt: 'A memorable moment from my journey'
  },
  {
    src: '/images/2.jpeg',
    alt: 'Special memory from my experiences'
  },
  {
    src: '/images/3.jpeg',
    alt: 'Captured moment in time'
  },
  {
    src: '/images/4.jpeg',
    alt: 'Journey through tech and learning'
  },
  {
    src: '/images/5.jpeg',
    alt: 'Memorable experience'
  },
  {
    src: '/images/6.jpeg',
    alt: 'Special occasion'
  },
  {
    src: '/images/7.jpeg',
    alt: 'Cherished memory'
  },
  {
    src: '/images/8.jpeg',
    alt: 'Unforgettable moment'
  }
];


export const TECH_STACK_ICONS = ['React', 'TypeScript', 'JavaScript', 'Firebase', 'Vite', 'TailwindCSS', 'Java', 'HTML', 'CSS', 'Google Gemini AI', 'Netlify', 'Vercel', 'GitHub', 'RESTful APIs'];
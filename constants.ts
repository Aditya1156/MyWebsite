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
  { label: 'Twitter', link: '#' },
  { label: 'GitHub', link: '#' },
  { label: 'LinkedIn', link: '#' },
];

const SKILLS_LIST = [
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Next.js', icon: NextJSIcon },
    { name: 'Node.js', icon: NodeJSIcon },
    { name: 'HTML5', icon: HtmlIcon },
    { name: 'CSS3', icon: CssIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Django', icon: DjangoIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'GraphQL', icon: GraphQLIcon },
    { name: 'PostgreSQL', icon: PostgresqlIcon },
    { name: 'MongoDB', icon: MongoDbIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Kubernetes', icon: KubernetesIcon },
    { name: 'AWS', icon: AwsIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'TensorFlow', icon: TensorFlowIcon },
    { name: 'AI/ML', icon: AIIcon },
];

// Distribute skills into rows for the marquee effect
export const SKILLS_ROW_1 = SKILLS_LIST.slice(0, 7);
export const SKILLS_ROW_2 = SKILLS_LIST.slice(7, 14);
export const SKILLS_ROW_3 = SKILLS_LIST.slice(14);


export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Lead AI Engineer',
    organization: 'Innovate AI',
    duration: '2022 - Present',
    description: 'Leading the development of a cutting-edge machine learning platform. Responsible for model architecture, data pipelines, and team mentorship.',
    tags: ['Python', 'TensorFlow', 'Kubernetes', 'Team Lead'],
  },
  {
    role: 'Senior Frontend Developer',
    organization: 'Creative Solutions Inc.',
    duration: '2019 - 2022',
    description: 'Architected and built highly interactive and performant web applications for enterprise clients using React and TypeScript.',
    tags: ['React', 'TypeScript', 'Next.js', 'UI/UX'],
  },
  {
    role: 'Software Engineer',
    organization: 'Tech StartUp Co.',
    duration: '2017 - 2019',
    description: 'Developed and maintained core features for a rapidly growing SaaS product. Worked across the full stack with a focus on backend services.',
    tags: ['Node.js', 'React', 'MongoDB'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Project Zenith',
    description: 'An AI-powered data visualization tool that turns complex datasets into interactive, understandable narratives.',
    challenge: 'Users were drowning in spreadsheets and raw data, unable to extract meaningful insights quickly. The goal was to create a tool that could automate data analysis and present it in an intuitive, story-driven format.',
    solution: "I architected a React-based frontend that uses D3.js for dynamic, interactive visualizations. The backend, powered by a Python Flask API, processes user-uploaded data through a custom machine learning model to identify trends, anomalies, and key data points, which are then fed to the frontend to construct a visual narrative.",
    results: ["Reduced data analysis time by 90% for pilot users.", "Increased user engagement with data reports by 300%.", "Received 'Innovation of the Year' award at the company's annual tech summit."],
    tools: ['React', 'D3.js', 'Python', 'Flask'],
    category: 'AI',
    imageUrl: 'https://picsum.photos/seed/zenith/600/400',
    link: '#',
    color: '#D1E8E2',
  },
  {
    title: 'Aura E-Commerce',
    description: 'A headless e-commerce platform with a focus on minimalist design and exceptional user experience.',
    challenge: 'Existing e-commerce platforms were bloated and slow, leading to high bounce rates. The client needed a lightning-fast, visually stunning, and highly customizable shopping experience to elevate their premium brand.',
    solution: "I built a headless e-commerce store using Next.js for server-side rendering and static generation, ensuring optimal performance. GraphQL was used for efficient data fetching from the backend, and Stripe was integrated for a seamless and secure payment flow. The entire UI was crafted with Tailwind CSS for a bespoke, minimalist aesthetic.",
    results: ["Achieved a Lighthouse performance score of 98.", "Decreased page load time by 60%, leading to a 25% increase in conversions.", "The flexible architecture allows for new product launches in minutes, not hours."],
    tools: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Stripe'],
    category: 'Web',
    imageUrl: 'https://picsum.photos/seed/aura/600/400',
    link: '#',
    color: '#F4C7C4',
  },
  {
    title: 'DesignSystem Pro',
    description: 'A comprehensive design system built to streamline development and ensure brand consistency across all products.',
    challenge: "The company's digital products lacked visual and functional consistency, leading to a fragmented user experience and slower development cycles. A centralized, scalable design system was needed.",
    solution: 'I led the development of a React component library, documented thoroughly in Storybook. Working closely with designers, we established a set of design tokens (colors, typography, spacing) and created a suite of reusable, accessible components. This system is now consumed by multiple development teams across the organization.',
    results: ["Reduced time-to-market for new features by 40%.", "Ensured 100% brand consistency across 5 major products.", "Onboarding for new developers is now twice as fast."],
    tools: ['Figma', 'Storybook', 'React', 'TypeScript'],
    category: 'Design',
    imageUrl: 'https://picsum.photos/seed/design/600/400',
    link: '#',
    color: '#FFD3B6',
  },
  {
    title: 'ConnectApp',
    description: 'A mobile application for professionals to network and collaborate on projects in real-time.',
    challenge: 'Professionals needed a dedicated, project-focused platform for real-time collaboration, away from the noise of traditional social networks. The app needed to be fast, reliable, and intuitive.',
    solution: 'Using React Native, I developed a cross-platform mobile app that works seamlessly on both iOS and Android. Firebase was utilized for the backend, providing real-time database, authentication, and cloud messaging capabilities to keep users in sync.',
    results: ["Acquired 10,000+ users in the first 3 months post-launch.", "Facilitated over 2,000 successful project collaborations.", "Maintained a 4.8-star rating on both the App Store and Google Play."],
    tools: ['React Native', 'Firebase', 'TypeScript'],
    category: 'Apps',
    imageUrl: 'https://picsum.photos/seed/connect/600/400',
    link: '#',
    color: '#C3E2DD',
  },
    {
    title: 'Web Weaver',
    description: 'A no-code website builder with AI-assisted content generation for small businesses.',
    challenge: 'Small business owners lacked the technical skills and budget to create professional websites. They needed an affordable, easy-to-use tool that could also help them with content creation.',
    solution: 'I developed a drag-and-drop website builder using Vue.js. The standout feature is its integration with the Gemini API, which allows users to generate high-quality text and image content based on simple prompts, significantly lowering the barrier to creating a polished web presence.',
    results: ["Empowered over 500 small businesses to get online.", "AI content generation feature has an 85% user satisfaction rate.", "Reduced average website creation time from days to just a couple of hours."],
    tools: ['Vue.js', 'Gemini API', 'Node.js'],
    category: 'Web',
    imageUrl: 'https://picsum.photos/seed/weaver/600/400',
    link: '#',
    color: '#F9E6C5',
  },
    {
    title: 'Insight Engine',
    description: 'A search engine for internal company documents, powered by natural language processing.',
    challenge: "Valuable information was locked away in thousands of internal documents (PDFs, Word docs, etc.), making it nearly impossible for employees to find what they needed. A traditional keyword search was insufficient.",
    solution: "I built a powerful search application using Elasticsearch for indexing and retrieval. A Python backend service uses NLP libraries to understand the context and intent of user queries, providing much more relevant results than simple keyword matching. The frontend is a clean, responsive interface built with React.",
    results: ["Cut down internal information retrieval time by an average of 75%.", "Improved cross-departmental knowledge sharing.", "The system successfully indexed over 50,000 documents."],
    tools: ['Elasticsearch', 'Python', 'React', 'NLP'],
    category: 'AI',
    imageUrl: 'https://picsum.photos/seed/insight/600/400',
    link: '#',
    color: '#D4D4D4',
  },
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Hackathon Finals",
    category: "AI for Good Hackathon 2023",
    imageUrl: "https://picsum.photos/seed/hackathon1/800/1200",
  },
  {
    id: 2,
    title: "Winning Moment",
    category: "DevFest Conference",
    imageUrl: "https://picsum.photos/seed/event1/800/600",
  },
  {
    id: 3,
    title: "Team Collaboration",
    category: "Internal Tech Summit",
    imageUrl: "https://picsum.photos/seed/teamwork/1200/800",
  },
  {
    id: 4,
    title: "Presenting My Project",
    category: "WebDev Conference 2022",
    imageUrl: "https://picsum.photos/seed/presenting/800/1000",
  },
  {
    id: 5,
    title: "Late Night Coding",
    category: "Project Zenith Launch",
    imageUrl: "https://picsum.photos/seed/coding/1200/800",
  },
  {
    id: 6,
    title: "Networking Event",
    category: "Founder's Meetup",
    imageUrl: "https://picsum.photos/seed/networking/800/600",
  },
  {
    id: 7,
    title: "Brainstorming Session",
    category: "Design Sprint Week",
    imageUrl: "https://picsum.photos/seed/brainstorm/1200/800",
  }
];

export const MEMORY_IMAGES = [
  {
    src: 'https://picsum.photos/seed/hackathon-memory/800/600',
    alt: 'A team working late at a hackathon'
  },
  {
    src: 'https://picsum.photos/seed/conference-memory/800/600',
    alt: 'Speaker on stage at a tech conference'
  },
  {
    src: 'https://picsum.photos/seed/coding-memory/800/600',
    alt: 'Close-up of code on a curved monitor'
  },
  {
    src: 'https://picsum.photos/seed/team-memory/800/600',
    alt: 'A diverse development team collaborating around a table'
  },
  {
    src: 'https://picsum.photos/seed/presentation-memory/800/600',
    alt: 'Presenting a project demo to an audience'
  },
  {
    src: 'https://picsum.photos/seed/whiteboard-memory/800/600',
    alt: 'Complex architecture diagram on a whiteboard'
  },
  {
    src: 'https://picsum.photos/seed/office-memory/800/600',
    alt: 'A modern and creative office space'
  },
  {
    src: 'https://picsum.photos/seed/celebration-memory/800/600',
    alt: 'Team celebrating a successful project launch'
  }
];


export const TECH_STACK_ICONS = ['React', 'TypeScript', 'Python', 'Node.js', 'TensorFlow', 'Docker', 'Figma', 'Next.js', 'GraphQL'];
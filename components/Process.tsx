import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { CpuArchitecture } from './ui/cpu-architecture';
import DatabaseWithRestApi from './ui/database-with-rest-api';
import RadialOrbitalTimeline from './ui/radial-orbital-timeline';
import { Calendar, Code, FileText, User, Clock } from 'lucide-react';
import BlurText from './BlurText';

// Timeline data for Radial Orbital component
const timelineData = [
  {
    id: 1,
    title: "Discover",
    date: "Phase 1",
    content: "Understanding your vision, goals, and audience through research and strategic planning.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Phase 2",
    content: "Crafting intuitive and beautiful user experiences through wireframing and visual design.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Develop",
    date: "Phase 3",
    content: "Building robust, scalable solutions with modern technologies and clean code.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Test",
    date: "Phase 4",
    content: "Rigorous testing and quality assurance to ensure flawless performance.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Deploy",
    date: "Phase 5",
    content: "Final deployment, optimization, and ongoing support for your project.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 60,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "I start by understanding your vision, goals, and audience. Through workshops and research, we define the problem and map out the strategic path forward.",
    imageUrl: 'https://picsum.photos/seed/process-discover/800/600',
  },
  {
    number: "02",
    title: "Design",
    description: "Next, I craft intuitive and beautiful user experiences. This phase involves wireframing, prototyping, and visual design to create a blueprint for success.",
    imageUrl: 'https://picsum.photos/seed/process-design/800/600',
  },
  {
    number: "03",
    title: "Develop",
    description: "With a solid design, I build robust, scalable, and performant solutions using modern technologies, ensuring clean code and a seamless final product.",
    imageUrl: 'https://picsum.photos/seed/process-develop/800/600',
  }
];

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description, imageUrl }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <div ref={ref} className="relative h-96 rounded-2xl overflow-hidden group shadow-lg">
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y,
                }}
            />
            <div className="absolute inset-0 bg-charcoal opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
            <div className="relative z-20 p-8 flex flex-col justify-between h-full text-cream">
                <div>
                    <span className="font-mono text-5xl font-bold text-orange opacity-40">{number}</span>
                    <h3 className="font-display text-3xl font-bold mt-2">{title}</h3>
                </div>
                <p className="text-cream/80 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};


const Process: React.FC = () => {
    return (
        <AnimatedSection id="process" className="py-24 bg-gradient-to-br from-cream via-white to-cream/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <BlurText
                        text="My Creative Process"
                        className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter"
                        delay={100}
                        animateBy="words"
                        direction="top"
                    />
                    <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                        A structured approach combining cutting-edge technology with creative innovation
                    </p>
                </div>

                {/* Animated Components Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* CPU Architecture - Discover Phase */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange/10 hover:shadow-2xl hover:border-orange/30 transition-all duration-300 group"
                    >
                        <h3 className="font-display text-2xl font-bold text-charcoal mb-4 group-hover:text-orange transition-colors">01. Discover</h3>
                        <p className="text-charcoal/70 mb-6 text-sm">
                            Understanding requirements and mapping data flows
                        </p>
                        <div className="flex justify-center items-center h-[250px] bg-gradient-to-br from-cream/50 to-orange/10 rounded-xl border border-orange/20">
                            <CpuArchitecture
                                className="text-orange"
                                text="IDEA"
                                width="100%"
                                height="250px"
                            />
                        </div>
                    </motion.div>

                    {/* Database REST API - Design Phase */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange/10 hover:shadow-2xl hover:border-orange/30 transition-all duration-300 group"
                    >
                        <h3 className="font-display text-2xl font-bold text-charcoal mb-4 group-hover:text-orange transition-colors">02. Design</h3>
                        <p className="text-charcoal/70 mb-6 text-sm">
                            Architecting scalable systems and API structures
                        </p>
                        <div className="flex justify-center items-center">
                            <DatabaseWithRestApi
                                className="w-full"
                                circleText="API"
                                title="Designing seamless data architecture"
                                badgeTexts={{
                                    first: "PLAN",
                                    second: "WIRE",
                                    third: "PROTO",
                                    fourth: "DESIGN",
                                  }}
                                buttonTexts={{
                                    first: "Design",
                                    second: "Architecture",
                                }}
                                lightColor="#FF6B00"
                            />
                        </div>
                    </motion.div>

                    {/* Radial Orbital Timeline - Full Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-orange via-orange-light to-cream rounded-2xl overflow-hidden shadow-xl border border-orange/20 hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1"
                    >
                        <div className="h-[400px] relative">
                            <RadialOrbitalTimeline timelineData={timelineData} />
                            <div className="absolute top-4 left-4 z-50">
                                <h3 className="font-display text-xl font-bold text-cream mb-1">03. Full Cycle</h3>
                                <p className="text-cream/80 text-xs">Click nodes to explore</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Process;

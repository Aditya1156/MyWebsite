import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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
        <AnimatedSection id="process" className="py-24 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter">
                        My Creative Process
                    </h2>
                    <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                        A structured approach to turn great ideas into impactful realities.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <ProcessCard {...step} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Process;

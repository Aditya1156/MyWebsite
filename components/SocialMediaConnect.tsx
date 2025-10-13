import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SocialPostProps {
  platform: 'Twitter' | 'Instagram' | 'Facebook';
  user: string;
  handle: string;
  content: string;
  image?: string | null;
}

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 }
};

const SocialPost: React.FC<SocialPostProps> = ({ platform, user, handle, content, image }) => (
  <motion.div 
    className="bg-cream/50 p-4 rounded-lg shadow-sm cursor-pointer relative overflow-hidden h-full flex flex-col"
    initial="rest"
    whileHover="hover"
    animate="rest"
    variants={{
        rest: { y: 0 },
        hover: { y: -8, boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.15)' }
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center mr-3 flex-shrink-0">
        <span className="font-bold text-orange text-lg">{platform.slice(0, 1)}</span>
      </div>
      <div>
        <p className="font-bold text-charcoal leading-tight">{user}</p>
        <p className="text-sm text-charcoal/60">{handle}</p>
      </div>
    </div>
    <p className="text-charcoal/80 text-sm mb-4 flex-grow">{content}</p>
    {image && (
        <div 
            className="h-40 bg-gray-300 rounded-lg bg-cover bg-center mt-auto" 
            style={{ backgroundImage: `url(${image})` }}
        ></div>
    )}
    
    <motion.div 
      className="absolute inset-0 bg-charcoal/80 flex items-center justify-center"
      variants={overlayVariants}
      transition={{ duration: 0.3 }}
    >
        <span className="text-white font-bold text-lg tracking-wider">View Post</span>
    </motion.div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SocialMediaConnect: React.FC = () => {
  return (
    <AnimatedSection id="connect" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter relative inline-block">
                Let's Stay Connected
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-orange/30 rounded-full"></span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-orange rounded-full animate-pulse"></span>
            </h2>
             <p className="text-charcoal/70 max-w-2xl mx-auto mt-6 text-lg">
                Follow my journey, thoughts, and latest creations across my social channels.
            </p>
        </div>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Column 1: Twitter */}
          <motion.div variants={columnVariants} className="flex flex-col space-y-6">
            <h3 className="font-display text-3xl font-bold text-orange text-center">Twitter Feed</h3>
            <SocialPost 
              platform="Twitter"
              user="Aditya Kumar"
              handle="@adicodes"
              content="Just launched Project Zenith! Turning complex data into beautiful, interactive stories. The power of AI + D3.js is just incredible. #AI #DataViz #React"
              image="https://picsum.photos/seed/twitter1/400/200"
            />
             <SocialPost 
              platform="Twitter"
              user="Aditya Kumar"
              handle="@adicodes"
              content="Deep diving into the new Gemini 2.5 Flash model. The speed and quality are game-changers for creative AI applications. What are you building with it?"
              image={null}
            />
          </motion.div>
          
          {/* Column 2: Instagram */}
          <motion.div variants={columnVariants} className="flex flex-col space-y-6">
             <h3 className="font-display text-3xl font-bold text-orange text-center">Instagram Feed</h3>
             <SocialPost 
              platform="Instagram"
              user="aditya.creates"
              handle="@aditya.creates"
              content="Workspace vibes. A clean setup for clear thoughts and creative code. ✨ #DeveloperLife #Code #Setup"
              image="https://picsum.photos/seed/insta1/400/400"
            />
            <SocialPost 
              platform="Instagram"
              user="aditya.creates"
              handle="@aditya.creates"
              content="Behind the scenes of the Aura E-Commerce design system. Consistency is key! 🎨"
              image="https://picsum.photos/seed/insta2/400/400"
            />
          </motion.div>
          
          {/* Column 3: Facebook */}
          <motion.div variants={columnVariants} className="flex flex-col space-y-6">
             <h3 className="font-display text-3xl font-bold text-orange text-center">Facebook Feed</h3>
             <SocialPost 
              platform="Facebook"
              user="Aditya Kumar"
              handle="fb.com/adityakumar"
              content="Thrilled to share that I'll be speaking at the upcoming WebDev Conference on 'The Future of Frontend'. Hope to see some of you there!"
              image={null}
            />
             <SocialPost 
              platform="Facebook"
              user="Aditya Kumar"
              handle="fb.com/adityakumar"
              content="Reflecting on my journey from a junior dev to leading an AI team. It's all about constant learning and embracing challenges. Grateful for the amazing people I've worked with along the way."
              image="https://picsum.photos/seed/fb1/400/250"
            />
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default SocialMediaConnect;
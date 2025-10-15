import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Aditya1156',
    icon: GithubIcon,
    color: '#333',
    description: 'Check out my latest repositories and contributions'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adicodes',
    icon: LinkedInIcon,
    color: '#0077B5',
    description: 'Connect with me professionally and see my career updates'
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/Aditya1156',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    color: '#FFA116',
    description: 'View my coding challenges and problem-solving skills'
  },
  {
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com/adicodes',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.104.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .154.113.258.255.258h.704v4.574c0 .383.311.693.693.693h4.072v3.002h-.699c-.143 0-.256.104-.256.258 0 .092.053.177.125.217l1.574 1.514c.045.061.141.108.227.108.084 0 .16-.047.207-.11l1.678-1.511c.072-.047.119-.129.119-.221 0-.154-.112-.258-.255-.258h-.703V11.51c0-.383-.309-.693-.693-.693h-4.07V7.056h4.064c.139 0 .252-.115.252-.258 0-.094-.049-.176-.123-.221L14.75 5.065c-.049-.062-.141-.108-.226-.108-.084 0-.16.046-.207.108l-1.674 1.511c-.072.045-.119.127-.119.219z"/>
      </svg>
    ),
    color: '#00EA64',
    description: 'See my algorithm solutions and certifications'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@adicodes',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: '#FF0000',
    description: 'Watch my coding tutorials and tech content'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/adicodes',
    icon: TwitterIcon,
    color: '#1DA1F2',
    description: 'Follow my tech thoughts and quick updates'
  }
];

const SocialConnect: React.FC = () => {
  return (
    <AnimatedSection id="social-connect" className="py-20 sm:py-24 md:py-28 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-4 tracking-tighter">
            Let's Connect
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg">
            Follow my journey across platforms. From code repositories to tutorials, stay updated with my latest work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-cream"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Background gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${social.color}, transparent)`
                }}
              />

              {/* Icon */}
              <div className="relative">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${social.color}15`,
                    border: `2px solid ${social.color}30`
                  }}
                >
                  <social.icon 
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:rotate-12"
                    style={{ color: social.color }}
                  />
                </div>

                {/* Platform name */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  {social.platform}
                </h3>

                {/* Description */}
                <p className="text-charcoal/60 text-sm sm:text-base mb-4">
                  {social.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-orange font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Visit Profile</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-charcoal/60 text-sm sm:text-base mb-6">
            Don't see your preferred platform? Drop me an email!
          </p>
          <a
            href="mailto:adicodes@outlook.com"
            className="inline-flex items-center gap-2 bg-orange text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-orange-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send Email</span>
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default SocialConnect;

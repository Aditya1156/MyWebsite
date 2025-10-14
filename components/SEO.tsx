import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO = {
  title: 'Aditya Kumar - Full Stack Developer | MERN Stack Specialist | React & TypeScript Expert',
  description: 'Full-Stack Developer specializing in MERN Stack, React 19, TypeScript, and AI integration. Building modern web applications with cutting-edge technologies. Available for freelance projects.',
  keywords: 'Aditya Kumar, Full Stack Developer, MERN Stack, React Developer, TypeScript, JavaScript, Web Development, Frontend Developer, Backend Developer, AI Integration, Shivamogga, Karnataka, India, Freelance Developer, TypingPath, Google Gemini AI',
  image: 'https://adityakumar.dev/images/og-image.jpg',
  url: 'https://adityakumar.dev/',
  type: 'website',
};

/**
 * SEO Component for dynamic meta tag management
 * Updates document meta tags for better search engine optimization
 */
const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;

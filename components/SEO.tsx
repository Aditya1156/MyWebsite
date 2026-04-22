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
  title: 'Aditya Kumar — CEO & Founder at TheNextUrl | Next.js, Node.js, PostgreSQL',
  description: 'CEO & Founder at TheNextUrl. Owning product architecture, engineering, hosting, and delivery — built with Next.js, Node.js, and PostgreSQL.',
  keywords: 'Aditya Kumar, TheNextUrl, CEO, Founder, Next.js Developer, Node.js, PostgreSQL, TypeScript, React, Full-Stack Engineer, Product Architecture, Shivamogga, Karnataka, India',
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

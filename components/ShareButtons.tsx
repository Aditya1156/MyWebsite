import React, { useState } from 'react';
import { TwitterIcon, LinkedInIcon, FacebookIcon, LinkIcon } from './icons';

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socialLinks = [
    { label: 'Twitter', href: twitterUrl, Icon: TwitterIcon },
    { label: 'LinkedIn', href: linkedInUrl, Icon: LinkedInIcon },
    { label: 'Facebook', href: facebookUrl, Icon: FacebookIcon },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="flex items-center justify-center w-10 h-10 bg-charcoal/10 rounded-full text-charcoal/70 hover:bg-orange hover:text-cream transition-all duration-300 transform hover:scale-110"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex items-center justify-center w-10 h-10 bg-charcoal/10 rounded-full text-charcoal/70 hover:bg-orange hover:text-cream transition-all duration-300 transform hover:scale-110"
      >
        {copied ? (
          <span className="text-xs font-bold">✓</span>
        ) : (
          <LinkIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default ShareButtons;
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { soundManager } from '../lib/sounds';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const HireMe: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_qp7skz8';
    const templateID = 'template_9deeb9x';

    if (typeof window.emailjs === 'undefined') {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
        return;
    }

    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const originalMessage = formData.get('message') as string;

    const fullMessage = `
Project Type: ${projectType}
Phone: ${phone}

--- Message ---
${originalMessage}
    `;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: fullMessage,
    };

    window.emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
         setStatus('success');
         form.reset();
         setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
         setStatus('error');
         setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <AnimatedSection id="hire-me" className="py-16 sm:py-20 md:py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 font-sans text-xs tracking-[0.24em] uppercase font-semibold text-primary-container mb-6">
              <span className="font-mono text-cream/45">05</span>
              <span className="w-8 h-px bg-cream/20" aria-hidden="true" />
              <span>Engage</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-[-0.02em] leading-[1.05] text-cream">
              Start a project.
            </h2>
            <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-lg">
              Share scope, timeline, and budget &mdash; I'll respond within 24 hours with a proposed approach.
            </p>
          </div>
          <motion.form 
            onSubmit={handleSubmit} 
            className="w-full space-y-5 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <InputField label="Full Name" name="name" type="text" placeholder="Aditya Kumar" />
              <InputField label="Email" name="email" type="email" placeholder="hello@adicodes.in" />
            </div>
            <InputField label="Phone Number" name="phone" type="tel" placeholder="(123) 456-7890" />
            <SelectField label="Project Type" name="projectType">
              <option>Collaboration</option>
              <option>Internship</option>
              <option>Full-Time</option>
              <option>Freelance</option>
            </SelectField>
            <TextareaField label="Message / Project Idea" name="message" placeholder="Tell me about your project..." />
            
            <motion.button 
              type="submit"
              disabled={status === 'sending'}
              onClick={() => soundManager.playClick()}
              className="w-full kp-gradient-primary text-white font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:brightness-110 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] touch-manipulation text-sm sm:text-base kp-shadow-ambient-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {status === 'sending' ? 'Sending...' : 'Start a Project'}
            </motion.button>
            {status === 'success' && <p className="text-center text-green-400 text-xs sm:text-sm">✅ Message sent successfully! I'll be in touch soon.</p>}
            {status === 'error' && <p className="text-center text-red-400 text-xs sm:text-sm">❌ Something went wrong. Please try again later.</p>}
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
};

const InputField: React.FC<{ label: string, name: string, type: string, placeholder: string }> = ({ label, name, type, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <motion.div variants={fieldVariants} className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
      <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-cream/80 mb-1.5 sm:mb-2">{label}</label>
      <motion.input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        required
        className="w-full bg-white/10 rounded-2xl py-3 sm:py-3.5 px-4 sm:px-5 focus:outline-none transition-all text-sm sm:text-base min-h-[44px] touch-manipulation text-cream placeholder:text-cream/40"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={{ boxShadow: isFocused ? "0 0 0 4px rgba(106, 28, 246, 0.2)" : "0 0 0 0px rgba(106, 28, 246, 0)" }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

const SelectField: React.FC<{ label: string, name: string, children: React.ReactNode }> = ({ label, name, children }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <motion.div variants={fieldVariants} className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
      <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-cream/80 mb-1.5 sm:mb-2">{label}</label>
      <motion.select
        name={name}
        id={name}
        required
        className="w-full bg-white/10 rounded-2xl py-3 sm:py-3.5 px-4 sm:px-5 focus:outline-none transition-all appearance-none text-sm sm:text-base min-h-[44px] touch-manipulation text-cream"
        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={{ boxShadow: isFocused ? "0 0 0 4px rgba(106, 28, 246, 0.2)" : "0 0 0 0px rgba(106, 28, 246, 0)" }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {children}
      </motion.select>
    </motion.div>
  );
};

const TextareaField: React.FC<{ label: string, name: string, placeholder: string }> = ({ label, name, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <motion.div variants={fieldVariants} className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
      <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-cream/80 mb-1.5 sm:mb-2">{label}</label>
      <motion.textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={4}
        required
        className="w-full bg-white/10 rounded-2xl py-3 sm:py-3.5 px-4 sm:px-5 focus:outline-none transition-all resize-none text-sm sm:text-base min-h-[100px] touch-manipulation text-cream placeholder:text-cream/40"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={{ boxShadow: isFocused ? "0 0 0 4px rgba(106, 28, 246, 0.2)" : "0 0 0 0px rgba(106, 28, 246, 0)" }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};


export default HireMe;
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRightIcon } from './icons';
import { motion } from 'framer-motion';

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

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_qp7skz8';
    const templateID = 'template_9deeb9x';

    if (typeof window.emailjs === 'undefined') {
        console.error("EmailJS is not loaded. Cannot send email.");
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
        return;
    }

    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
        from_name: formData.get('name') as string,
        from_email: formData.get('email') as string,
        message: formData.get('message') as string,
    };

    window.emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setStatus('success');
         form.reset();
         setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
         console.error('FAILED...', err);
         setStatus('error');
         setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <AnimatedSection id="contact" className="py-16 sm:py-20 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tighter">
              Say Hello
            </h2>
            <p className="text-charcoal/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Whether you have a question, a project idea, or just want to connect, feel free to drop me a line. I'm always excited to hear about new ideas and opportunities.
            </p>
            <div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Contact Details</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">
                    <a href="mailto:hello@adicodes.in" className="hover:text-orange transition-colors">hello@adicodes.in</a>
                </p>
            </div>
          </div>
          <motion.form 
            onSubmit={handleSubmit} 
            className="w-full space-y-5 sm:space-y-6 bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <InputField label="Full Name" name="name" type="text" placeholder="Your Name" />
            <InputField label="Email" name="email" type="email" placeholder="your@email.com" />
            <TextareaField label="Your Message" name="message" placeholder="What's on your mind?" />
            
            <motion.button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-charcoal text-cream font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 hover:bg-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:bg-charcoal/50 disabled:cursor-not-allowed inline-flex items-center justify-center group min-h-[48px] touch-manipulation text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
               {status !== 'sending' && <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
            </motion.button>
            {status === 'success' && <p className="text-center text-green-600 text-xs sm:text-sm">✅ Message sent! Thanks for reaching out.</p>}
            {status === 'error' && <p className="text-center text-red-600 text-xs sm:text-sm">❌ Oops! Something went wrong. Please try again.</p>}
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
      <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-charcoal/80 mb-1.5 sm:mb-2">{label}</label>
      <motion.input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        required
        className="w-full bg-cream/50 border border-cream rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-orange transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={{ boxShadow: isFocused ? "0 0 0 4px rgba(255, 107, 0, 0.2)" : "0 0 0 0px rgba(255, 107, 0, 0)" }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

const TextareaField: React.FC<{ label: string, name: string, placeholder: string }> = ({ label, name, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <motion.div variants={fieldVariants} className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
      <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-charcoal/80 mb-1.5 sm:mb-2">{label}</label>
      <motion.textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={4}
        required
        className="w-full bg-cream/50 border border-cream rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-orange transition-all resize-none text-sm sm:text-base min-h-[100px] touch-manipulation"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={{ boxShadow: isFocused ? "0 0 0 4px rgba(255, 107, 0, 0.2)" : "0 0 0 0px rgba(255, 107, 0, 0)" }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

export default Contact;
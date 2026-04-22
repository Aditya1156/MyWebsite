import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MailIcon } from './icons';
import ImageMarquee from './ImageMarquee';

// EmailJS — public key is safe to expose client-side.
// Lock down "Allowed Origins" in the EmailJS dashboard for security.
const EMAILJS_PUBLIC_KEY = '9Ujk8D1C01AiXeRhJ';
const EMAILJS_SERVICE_ID = 'service_bcm0rsx';
const EMAILJS_TEMPLATE_ID = 'template_ylzgcyi';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Please fill in every field.');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // Cover both common EmailJS template variable naming conventions
    // so the email isn't blank if the template was authored either way.
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      name,
      email,
      reply_to: email,
      title: `New message from ${name}`,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      if (response.status !== 200) {
        throw new Error(`Unexpected status ${response.status}: ${response.text}`);
      }
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      // Log full details so we can see in the browser console why it failed.
      console.error('[Contact] EmailJS send failed:', err);
      const detail =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text: unknown }).text)
          : err instanceof Error
          ? err.message
          : 'Unknown error';
      setErrorMessage(detail);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <AnimatedSection id="contact" className="bg-surface py-20 sm:py-28 md:py-32 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient blobs — hidden on mobile */}
      <div
        className="hidden md:block absolute top-[10%] left-0 -z-10 w-80 h-80 organic-blob-alt bg-secondary-container/30 blur-3xl opacity-60 transform -translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute bottom-[10%] right-0 -z-10 w-96 h-96 organic-blob bg-primary-fixed/20 blur-3xl opacity-50 transform translate-x-1/3"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Sliding image gallery */}
        <ImageMarquee />

        {/* Inquiry form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-low rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-14 mb-10 relative overflow-hidden"
        >
          <div
            className="absolute -top-16 -right-16 w-56 h-56 organic-blob bg-primary-fixed/30 blur-2xl opacity-70"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Lead */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight mb-4">
                Start a conversation.
              </h3>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8">
                Share scope, timeline, and anything else that helps. I reply within 24 hours on weekdays.
              </p>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:aditya@thenexturl.in"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-0.5">
                      Direct
                    </div>
                    <div className="font-display text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      aditya@thenexturl.in
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-0.5">
                      Based
                    </div>
                    <div className="font-display text-sm sm:text-base text-on-surface">
                      Shivamogga &middot; remote worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:col-span-7 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div variants={fieldVariants}>
                  <label htmlFor="name" className="block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-2.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Tell me who you are"
                    required
                    className="w-full bg-surface-container-lowest rounded-full px-5 py-3 text-sm font-sans text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label htmlFor="email" className="block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-2.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Where can I reach you?"
                    required
                    className="w-full bg-surface-container-lowest rounded-full px-5 py-3 text-sm font-sans text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div variants={fieldVariants}>
                <label htmlFor="message" className="block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-on-surface-variant mb-2.5">
                  Project brief
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Scope, timeline, budget &mdash; anything that helps me respond with specifics."
                  rows={5}
                  required
                  className="w-full bg-surface-container-lowest rounded-2xl px-5 py-4 text-sm font-sans text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold hover:bg-primary-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                  {status !== 'sending' && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                  )}
                </button>
                {status === 'success' && (
                  <span className="font-sans text-sm text-secondary font-medium">Message sent &mdash; talk soon.</span>
                )}
                {status === 'error' && (
                  <span className="font-sans text-sm text-red-600 font-medium">
                    {errorMessage || 'Something went wrong. Try again.'}
                  </span>
                )}
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;

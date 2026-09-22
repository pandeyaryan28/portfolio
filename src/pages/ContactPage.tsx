import React, { useState } from 'react';
import { useToast } from '../components/ui/Toast';
import { Mail, Copy, Check, ArrowUpRight, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { sendContactMessage, openMailtoFallback, ContactSubmission } from '../lib/contactService';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailAddress = SITE_LINKS.profile.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactMessage(formData);

      if (result.usedFallback) {
        setSubmissionStatus('fallback');
        showToast('Opening email client with prepared message...');
        openMailtoFallback(formData);
      } else {
        setSubmissionStatus('success');
        showToast('Message sent! I will respond within 24 to 48 hours.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmissionStatus('fallback');
      openMailtoFallback(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmissionStatus('idle');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-14">
      {/* Header with Smooth Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider inline-flex items-center gap-2">
          <span>Contact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Let's connect.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          Whether you have an ambitious product problem to solve, want to discuss technical innovation, or explore venture collaboration, feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Direct Contact Cards */}
        <div className="md:col-span-5 space-y-4">
          <ScrollReveal direction="left" distance={36} duration={0.6}>
            <motion.div
              whileHover={{
                y: -4,
                borderColor: '#9CA3AF',
                boxShadow: '0 12px 25px -8px rgba(0,0,0,0.08)',
              }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl border border-gray-200 bg-white space-y-4 shadow-xs"
            >
              <h2 className="text-sm font-semibold text-gray-900 uppercase font-mono tracking-wider">
                Direct Email
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                For direct inquiries, venture discussions, or technical collaboration.
              </p>

              <div className="space-y-2 pt-2">
                <motion.a
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  href={`mailto:${emailAddress}`}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-mono transition-colors flex items-center justify-between"
                >
                  <span className="truncate mr-2">{emailAddress}</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Social Profiles */}
          <ScrollReveal direction="left" distance={36} delay={0.1} duration={0.6}>
            <motion.div
              whileHover={{
                y: -4,
                borderColor: '#9CA3AF',
                boxShadow: '0 12px 25px -8px rgba(0,0,0,0.08)',
              }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl border border-gray-200 bg-white space-y-3 shadow-xs"
            >
              <h2 className="text-sm font-semibold text-gray-900 uppercase font-mono tracking-wider">
                Profiles & Code
              </h2>

              <div className="space-y-2 pt-1 text-xs">
                <motion.a
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  href={SITE_LINKS.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="font-medium">GitHub (pandeyaryan28)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  href={SITE_LINKS.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="font-medium">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <ScrollReveal direction="right" distance={36} duration={0.6}>
            <motion.div
              whileHover={{
                y: -4,
                borderColor: '#9CA3AF',
                boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.03)',
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-6 shadow-xs"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">Send a direct message</h2>
                <p className="text-xs text-gray-500 font-normal">
                  Leave a message and your contact details, and I will respond within 24 to 48 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submissionStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 space-y-3"
                  >
                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <Check className="w-4 h-4 text-neutral-900" />
                      <span>Message Sent Successfully</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Thank you for reaching out, {formData.name}. Your message has been routed to Aryan at{' '}
                      <span className="font-mono font-medium text-neutral-900">{emailAddress}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="mt-2 text-xs font-medium text-neutral-900 underline hover:text-black"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : submissionStatus === 'fallback' ? (
                  <motion.div
                    key="fallback"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 space-y-3"
                  >
                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>Email Client Ready</span>
                    </div>
                    <p className="text-xs text-blue-700 leading-relaxed">
                      Your message has been prepared for direct email. If your email app did not open automatically, click the button below to send:
                    </p>
                    <div className="pt-1 flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => openMailtoFallback(formData)}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Launch Email App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.button>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="text-xs text-blue-700 underline hover:text-blue-900"
                      >
                        Edit Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-4 text-xs sm:text-sm"
                  >
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="font-medium text-gray-700 block">
                        Your Name <span className="text-neutral-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="font-medium text-gray-700 block">
                        Your Email <span className="text-neutral-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="font-medium text-gray-700 block">
                        Subject / Topic
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject || ''}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Venture collaboration, product inquiry, or hello"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="font-medium text-gray-700 block">
                        Message <span className="text-neutral-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about what you're working on or want to build together..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-xs hover:shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

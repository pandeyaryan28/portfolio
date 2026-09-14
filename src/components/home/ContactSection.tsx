import React, { useState } from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { ArrowUpRight, Copy, Check, Mail, Globe, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "aryanpandey.build@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${emailAddress}`,
      label: 'Direct Correspondence',
      icon: Mail,
      highlight: true,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      label: 'Professional Network',
      icon: Globe,
      highlight: false,
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      label: 'Code Repositories',
      icon: Code2,
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-6 sm:px-10 max-w-5xl mx-auto border-t border-ink-border/50">
      <div className="mb-10">
        <SectionBadge label="CONTACT" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-br from-white/90 via-white/80 to-[#F5F4EE]/90 backdrop-blur-lg rounded-3xl p-8 sm:p-14 border border-ink-border shadow-glass-lg relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-stone-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-ink-primary leading-[1.08] text-balance">
            Have something interesting to build?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-ink-secondary font-light leading-relaxed text-balance">
            I'm always interested in interesting problems, ambitious ideas and people building something from scratch.
          </p>

          {/* Quick Copy Email Action Bar */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 text-[#FAF9F5] text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-all shadow-glass-sm group"
            >
              <Mail className="w-4 h-4" />
              <span>Send an email</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/80 hover:bg-white text-ink-secondary hover:text-ink-primary text-xs sm:text-sm font-mono border border-ink-border transition-all shadow-xs"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-sans font-medium">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-ink-tertiary" />
                  <span>{emailAddress}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mt-12 pt-8 border-t border-ink-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className="p-4 rounded-xl bg-white/60 hover:bg-white border border-ink-border/60 hover:border-ink-border transition-all duration-300 flex items-center justify-between group shadow-xs hover:shadow-glass-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-ink-secondary group-hover:text-ink-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs text-ink-primary block">{link.name}</span>
                    <span className="text-[10px] text-ink-tertiary font-mono">{link.label}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

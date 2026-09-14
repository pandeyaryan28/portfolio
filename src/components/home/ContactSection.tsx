import React, { useState } from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { useSound } from '../../context/SoundContext';
import { useToast } from '../ui/Toast';
import { ArrowUpRight, Copy, Check, Mail, Globe, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { playPop, playClick } = useSound();
  const { showToast } = useToast();
  const emailAddress = 'aryanpandey.build@gmail.com';

  const handleCopyEmail = () => {
    playPop();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${emailAddress}`,
      label: 'Direct Correspondence',
      icon: Mail,
      desc: 'Quick responses for technical strategy & 0→1 initiatives',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/aryanpandey28',
      label: 'Code Repositories',
      icon: Code2,
      desc: 'Open-source experiments, systems code & prototypes',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      label: 'Professional Graph',
      icon: Globe,
      desc: 'Industry network, updates & essays',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto border-t border-ink-border/60 dark:border-white/10">
      <div className="mb-10">
        <SectionBadge label="CORRESPONDENCE" index="06" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-br from-white/95 via-white/80 to-[#F5F4EE] dark:from-[#131318] dark:via-[#101015] dark:to-[#0A0A0E] backdrop-blur-xl rounded-3xl p-8 sm:p-14 border border-ink-border dark:border-white/10 shadow-glass-xl relative overflow-hidden"
      >
        {/* Ambient background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPEN FOR AMBITIOUS VENTURES & SYSTEMS WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.06] text-balance">
            Have an ambitious problem to solve or system to build?
          </h2>

          <p className="text-base sm:text-xl text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed text-balance">
            I'm always interested in structural problems, ambitious zero-to-one ventures, and people building something tangible from scratch.
          </p>

          {/* Quick Copy Email Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${emailAddress}`}
              onClick={() => playClick()}
              data-cursor-text="EMAIL"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-neutral-900 text-xs sm:text-sm font-medium transition-all shadow-glass-md group"
            >
              <Mail className="w-4 h-4" />
              <span>Send an email</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              data-cursor-text="COPY"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/80 dark:bg-stone-900/80 hover:bg-white dark:hover:bg-stone-800 text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary text-xs sm:text-sm font-mono border border-ink-border dark:border-white/10 transition-all shadow-xs"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                    Copied to clipboard!
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-ink-tertiary dark:text-ink-dark-tertiary" />
                  <span>{emailAddress}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mt-12 pt-8 border-t border-ink-border/60 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                onClick={() => playClick()}
                data-cursor-text="OPEN"
                className="p-4 rounded-2xl bg-white/70 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-800/80 border border-ink-border/60 dark:border-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-glass-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-ink-secondary dark:text-ink-dark-secondary group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-tertiary dark:text-ink-dark-tertiary group-hover:text-ink-primary dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="font-semibold text-xs text-ink-primary dark:text-ink-dark-primary block">
                    {link.name}
                  </span>
                  <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary font-mono block mt-0.5">
                    {link.desc}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

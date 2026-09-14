import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useSound } from '../../context/SoundContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const { playClick } = useSound();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ink-border/60 dark:border-white/10 py-12 sm:py-16 px-4 sm:px-8 bg-[#FAF9F5] dark:bg-[#07070A] text-xs font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Tier: Colophon & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-ink-border/50 dark:border-white/5">
          {/* Brand & Slogan */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <button
                onClick={() => navigate('/')}
                className="text-sm font-bold tracking-wider text-ink-primary dark:text-ink-dark-primary uppercase text-left"
              >
                Aryan Pandey
              </button>
            </div>
            <p className="text-xs text-ink-tertiary dark:text-ink-dark-tertiary font-sans font-light">
              Systems Architect & Operator · Architecting from 0 to 1
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-5 text-ink-secondary dark:text-ink-dark-secondary">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-primary dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aryanpandey28"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-primary dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:aryanpandey.build@gmail.com"
              className="hover:text-ink-primary dark:hover:text-white transition-colors"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-ink-primary dark:text-ink-dark-primary transition-all flex items-center gap-1.5 border border-ink-border dark:border-white/10"
              title="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Architectural Specification Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] text-ink-tertiary dark:text-ink-dark-tertiary">
          <div>
            <span className="text-[10px] uppercase tracking-wider block text-ink-primary dark:text-ink-dark-primary font-semibold mb-0.5">
              Specification Colophon
            </span>
            <p className="font-light">
              React 19 · Three.js WebGL · Web Audio API · Tailwind CSS
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider block text-ink-primary dark:text-ink-dark-primary font-semibold mb-0.5">
              Station Coordinates
            </span>
            <p className="font-light">
              28.6139° N, 77.2090° E · New Delhi, India
            </p>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] uppercase tracking-wider block text-ink-primary dark:text-ink-dark-primary font-semibold mb-0.5">
              System License
            </span>
            <p className="font-light">
              © {currentYear} Aryan Pandey · All Invariants Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

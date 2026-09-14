import React from 'react';
import { useRouter } from '../../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border/60 py-12 sm:py-16 px-6 sm:px-10 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Brand & Slogan */}
        <div className="space-y-1">
          <button
            onClick={() => navigate('/')}
            className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-ink-primary hover:text-neutral-600 transition-colors uppercase text-left"
          >
            Aryan Pandey
          </button>
          <p className="text-xs text-ink-tertiary font-light">
            Building things worth building.
          </p>
        </div>

        {/* Links & Year */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-ink-secondary">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:aryanpandey.build@gmail.com"
            className="hover:text-ink-primary transition-colors"
          >
            Email
          </a>
          <span className="font-mono text-[11px] text-ink-tertiary">
            © {currentYear}
          </span>
        </div>
      </div>
    </footer>
  );
};

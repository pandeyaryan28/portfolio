import React from 'react';
import { Sparkles } from 'lucide-react';

export const BookMockupTheSystem: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-4 sm:p-8 bg-[#F5F4EE] dark:bg-[#15151A] rounded-2xl border border-ink-border dark:border-white/10 relative overflow-hidden group">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Book Cover */}
      <div className="relative w-full max-w-[290px] sm:max-w-[340px] aspect-[1/1.45] bg-[#FBFBFA] dark:bg-[#1C1C22] text-[#121212] dark:text-white rounded-r-xl rounded-l-sm p-6 sm:p-8 shadow-glass-xl border-l-4 border-l-[#E4E2D8] dark:border-l-[#2E2E38] border-y border-r border-ink-border dark:border-white/10 flex flex-col justify-between transform group-hover:-translate-y-1.5 transition-transform duration-500">
        
        {/* Subtle grid line accent */}
        <div className="absolute top-0 right-0 bottom-0 left-12 border-l border-ink-border/40 dark:border-white/5 pointer-events-none" />

        {/* Header Tag */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest uppercase text-ink-tertiary dark:text-ink-dark-tertiary">
              VOL. I · 2026 EDITION
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded border border-ink-border dark:border-white/10 text-ink-secondary dark:text-ink-dark-secondary">
              <Sparkles className="w-2.5 h-2.5 text-amber-500" /> 100+ PAGES
            </span>
          </div>

          <h3 className="mt-8 text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.18]">
            The System <br />
            <span className="italic font-light text-stone-500 dark:text-stone-400">Is Being</span> <br />
            Rewritten
          </h3>

          <p className="mt-3 text-xs text-ink-secondary dark:text-ink-dark-secondary font-sans leading-relaxed">
            Understanding the Forces Shaping the Next Global Order
          </p>
        </div>

        {/* Bottom Details */}
        <div className="relative z-10 pt-6 border-t border-ink-border/80 dark:border-white/10 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-ink-tertiary dark:text-ink-dark-tertiary tracking-wider">Author</span>
            <p className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary font-mono">Aryan Pandey</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
              PUBLISHED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

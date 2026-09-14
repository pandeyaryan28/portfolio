import React from 'react';

interface SectionBadgeProps {
  label: string;
  className?: string;
  index?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label, className = '', index }) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-stone-100/90 dark:bg-stone-900/90 border border-ink-border dark:border-white/10 font-mono text-[11px] font-medium tracking-editorial uppercase text-ink-secondary dark:text-ink-dark-secondary select-none shadow-glass-sm backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
      </span>
      {index && <span className="text-ink-tertiary dark:text-ink-dark-tertiary">{index} //</span>}
      <span className="tracking-widest">{label}</span>
    </div>
  );
};

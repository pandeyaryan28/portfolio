import React from 'react';

export type StatusType = 'live' | 'development' | 'writing' | 'published';

interface StatusPillProps {
  status: string;
  type?: StatusType;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({ status, type = 'live', className = '' }) => {
  const getStyles = () => {
    switch (type) {
      case 'live':
        return {
          bg: 'bg-emerald-50/80 text-emerald-800 border-emerald-300/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60',
          dot: 'bg-emerald-500 animate-pulse',
        };
      case 'development':
        return {
          bg: 'bg-amber-50/80 text-amber-800 border-amber-300/60 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60',
          dot: 'bg-amber-500 animate-pulse',
        };
      case 'writing':
        return {
          bg: 'bg-stone-100/80 text-stone-800 border-stone-300/60 dark:bg-stone-900/60 dark:text-stone-300 dark:border-stone-700/60',
          dot: 'bg-stone-400',
        };
      case 'published':
        return {
          bg: 'bg-neutral-100/90 text-neutral-800 border-neutral-300/70 dark:bg-neutral-900/80 dark:text-neutral-200 dark:border-neutral-700/70',
          dot: 'bg-neutral-500',
        };
      default:
        return {
          bg: 'bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800',
          dot: 'bg-neutral-400',
        };
    }
  };

  const { bg, dot } = getStyles();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium uppercase tracking-wider border backdrop-blur-xs ${bg} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
};

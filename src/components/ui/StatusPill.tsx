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
          bg: 'bg-emerald-50/80 text-emerald-800 border-emerald-200/60',
          dot: 'bg-emerald-500 animate-pulse',
        };
      case 'development':
        return {
          bg: 'bg-amber-50/80 text-amber-800 border-amber-200/60',
          dot: 'bg-amber-500',
        };
      case 'writing':
        return {
          bg: 'bg-stone-100/80 text-stone-800 border-stone-300/60',
          dot: 'bg-stone-500',
        };
      case 'published':
        return {
          bg: 'bg-neutral-100/90 text-neutral-800 border-neutral-300/70',
          dot: 'bg-neutral-700',
        };
      default:
        return {
          bg: 'bg-neutral-50 text-neutral-700 border-neutral-200',
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

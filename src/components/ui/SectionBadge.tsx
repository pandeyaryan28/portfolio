import React from 'react';

interface SectionBadgeProps {
  label: string;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-editorial uppercase text-ink-tertiary select-none ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-ink-tertiary/40"></span>
      <span>{label}</span>
    </div>
  );
};

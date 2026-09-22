import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface ReadingSection {
  id: string;
  label: string;
}

export interface CaseStudyReadingRailProps {
  sections: ReadingSection[];
  title?: string;
}

export const CaseStudyReadingRail: React.FC<CaseStudyReadingRailProps> = ({
  sections,
}) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      // Threshold below navbar and sticky reading rail
      const threshold = 180;
      let currentActive = sections[0]?.id || '';

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = sections[i].id;
          } else {
            break;
          }
        }
      }

      // If scrolled close to the bottom of the page, activate the last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        currentActive = sections[sections.length - 1]?.id || currentActive;
      }

      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -140;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Case study section progress"
      className="sticky top-20 z-30 w-full mb-8"
    >
      <div className="p-1.5 sm:p-2 rounded-xl bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm">
        <div className="flex items-center justify-between gap-1 overflow-x-auto">
          {sections.map((sec, idx) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`relative px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-neutral-950 dark:text-white font-semibold bg-neutral-100 dark:bg-neutral-800 shadow-xs'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                }`}
              >
                <span className="text-[10px] opacity-60">0{idx + 1}</span>
                <span>{sec.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="reading-rail-indicator"
                    className="absolute inset-0 rounded-lg border border-neutral-300 dark:border-neutral-700 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

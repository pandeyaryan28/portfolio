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
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          return;
        }
      }
      if (sections.length > 0) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -85;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Case study section progress"
      className="hidden lg:block sticky top-24 z-20 w-full mb-8"
    >
      <div className="p-2 rounded-xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-2xs">
        <div className="flex items-center justify-between gap-1 overflow-x-auto">
          {sections.map((sec, idx) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'text-neutral-950 font-semibold bg-neutral-100 shadow-2xs'
                    : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                <span className="text-[10px] opacity-60">0{idx + 1}</span>
                <span>{sec.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="reading-rail-indicator"
                    className="absolute inset-0 rounded-lg border border-neutral-300 pointer-events-none"
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

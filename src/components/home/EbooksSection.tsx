import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { EbookCard } from './EbookCard';

export const EbooksSection: React.FC = () => {
  return (
    <section id="ebooks" className="py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto border-t border-ink-border/50">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 max-w-2xl">
        <SectionBadge label="03 / EBOOKS" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-ink-primary leading-tight text-balance">
          Long-form writing on technology, systems and the forces shaping the world.
        </h2>
      </div>

      {/* Main Ebook Card */}
      <EbookCard />
    </section>
  );
};

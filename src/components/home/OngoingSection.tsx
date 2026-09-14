import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { NullWaveCard } from './NullWaveCard';
import { BuildingDistributionCard } from './BuildingDistributionCard';

export const OngoingSection: React.FC = () => {
  return (
    <section id="ongoing" className="py-20 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto border-t border-ink-border/60 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 max-w-2xl">
        <SectionBadge label="ACTIVE LAB & PROTOTYPES" index="02" />
        <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.1] text-balance">
          Active hardware prototypes, system mechanics, and ongoing research.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
          Active engineering developments at the intersection of ergonomic wearable acoustics, system mechanics, and sovereign distribution architectures.
        </p>
      </div>

      {/* Ongoing Project Cards */}
      <div className="space-y-12 sm:space-y-16">
        <NullWaveCard />
        <BuildingDistributionCard />
      </div>
    </section>
  );
};

import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { NullWaveCard } from './NullWaveCard';
import { BuildingDistributionCard } from './BuildingDistributionCard';

export const OngoingSection: React.FC = () => {
  return (
    <section id="ongoing" className="py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto border-t border-ink-border/50">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 max-w-2xl">
        <SectionBadge label="02 / ONGOING" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-ink-primary leading-tight text-balance">
          Things I'm currently building, exploring or writing.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-ink-secondary font-light">
          Active developments at the intersection of ergonomic hardware, system mechanics, and distribution architecture.
        </p>
      </div>

      {/* Ongoing Project Cards */}
      <div className="space-y-10 sm:space-y-14">
        <NullWaveCard />
        <BuildingDistributionCard />
      </div>
    </section>
  );
};

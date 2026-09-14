import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { UniCareCard } from './UniCareCard';
import { GuildOrbitCard } from './GuildOrbitCard';

export const LiveSection: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto border-t border-ink-border/60 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 max-w-2xl">
        <SectionBadge label="LIVE SYSTEMS" index="01" />
        <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.1] text-balance">
          Products and systems engineered from initial problem to tangible reality.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
          Production systems deployed into active user workflows, handling sensitive clinical telemetry and cross-functional team execution.
        </p>
      </div>

      {/* Main Project Cards */}
      <div className="space-y-12 sm:space-y-16">
        <UniCareCard />
        <GuildOrbitCard />
      </div>
    </section>
  );
};

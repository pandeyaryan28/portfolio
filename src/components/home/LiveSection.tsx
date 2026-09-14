import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { UniCareCard } from './UniCareCard';
import { GuildOrbitCard } from './GuildOrbitCard';

export const LiveSection: React.FC = () => {
  return (
    <section id="work" className="py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto border-t border-ink-border/50">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 max-w-2xl">
        <SectionBadge label="01 / LIVE" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-ink-primary leading-tight text-balance">
          Projects, startups and initiatives I've taken from idea to reality.
        </h2>
      </div>

      {/* Main Project Cards */}
      <div className="space-y-10 sm:space-y-14">
        <UniCareCard />
        <GuildOrbitCard />
      </div>
    </section>
  );
};

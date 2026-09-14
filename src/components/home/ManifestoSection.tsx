import React, { useState } from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { useSound } from '../../context/SoundContext';
import { motion } from 'framer-motion';
import { Layers, Shield, Cpu, Repeat, Sparkles } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);
  const { playTick } = useSound();

  const principles = [
    {
      id: '01',
      title: 'Invariant Simplicity',
      tagline: 'Eliminate unearned complexity before touching code.',
      icon: Layers,
      statement:
        'Most engineering failures are not technical bottlenecks; they are premature architectural sprawl. True zero-to-one systems isolate the essential state invariant and strip away every vanity dependency until the core is undeniable.',
      application:
        'In UniCare, reduced fragmented multi-hospital record lookups to a single sovereign Patient UID with instant cryptographic authorization under 10 seconds.',
    },
    {
      id: '02',
      title: 'Sovereign State Ownership',
      tagline: 'Users must own their primitives, not rent them from closed gardens.',
      icon: Shield,
      statement:
        'Whether in healthcare records or enterprise knowledge graphs, systems that lock user data behind proprietary silos face inevitable organizational decay. Protocol-level sovereignty builds compounding trust.',
      application:
        'UniCare ensures patients own longitudinal health wallets (UC-XXXXXXXX) with verifiable consent delegation rather than hospital database vendor lock-in.',
    },
    {
      id: '03',
      title: 'Embedded Distribution Gravity',
      tagline: 'Distribution is an engineering loop, not a post-launch marketing veneer.',
      icon: Repeat,
      statement:
        'Having an audience is not having distribution. Compounding leverage occurs when the product mechanics themselves naturally propagate value across network nodes on every interaction.',
      application:
        'Explored extensively in the book "Building Distribution" — establishing self-reinforcing network loops that outlive algorithmic platform volatility.',
    },
    {
      id: '04',
      title: 'Physical & Digital Convergence',
      tagline: 'The next frontier lives where ergonomic atoms meet ambient silicon.',
      icon: Cpu,
      statement:
        'Software cannot solve physical intimacy and acoustic privacy through software toggles alone. When wearable ergonomics, acoustics, and cloud intelligence converge, entirely new categories emerge.',
      application:
        'NullWave isolates speech audio at the mouth through titanium micro-chambers and silent airflow, unlocking private voice computing in public transit.',
    },
  ];

  const current = principles[activePrinciple];

  return (
    <section id="manifesto" className="py-20 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto border-t border-ink-border/60 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <SectionBadge label="FIRST PRINCIPLES" index="00" />
        <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.1] text-balance">
          Architectural philosophy for zero-to-one execution.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
          The non-negotiable mental models and engineering invariants that govern how I design products, systems, and ventures.
        </p>
      </div>

      {/* Interactive Manifesto Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Principle Tabs */}
        <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
          {principles.map((p, idx) => {
            const isSelected = idx === activePrinciple;
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => {
                  playTick();
                  setActivePrinciple(idx);
                }}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border flex items-start gap-4 ${
                  isSelected
                    ? 'bg-white dark:bg-stone-900 border-amber-500/50 shadow-glass-md ring-1 ring-amber-500/30'
                    : 'bg-stone-50/70 dark:bg-stone-950/40 border-ink-border/50 dark:border-white/5 hover:bg-white/80 dark:hover:bg-stone-900/60'
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-colors ${
                  isSelected
                    ? 'bg-amber-500 text-white dark:bg-amber-400 dark:text-neutral-900'
                    : 'bg-stone-200/60 dark:bg-stone-800 text-ink-tertiary dark:text-ink-dark-tertiary'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">
                      {p.id}
                    </span>
                    <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary truncate">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-light mt-0.5 truncate">
                    {p.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Card */}
        <div className="lg:col-span-7">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-full p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#121217] border border-ink-border dark:border-white/10 shadow-glass-lg flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-ink-border/50 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                    PRINCIPLE // {current.id}
                  </span>
                  <span className="text-ink-tertiary dark:text-ink-dark-tertiary">·</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-secondary dark:text-ink-dark-secondary">
                    {current.title}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-serif font-normal text-ink-primary dark:text-ink-dark-primary leading-snug">
                “{current.tagline}”
              </h3>

              <p className="mt-4 text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                {current.statement}
              </p>
            </div>

            {/* Real Concrete Application */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] dark:bg-[#181820] border border-ink-border/70 dark:border-white/10">
              <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3 h-3" /> Concrete Invariant in Action
              </span>
              <p className="text-xs sm:text-sm text-ink-primary dark:text-ink-dark-primary font-medium leading-relaxed">
                {current.application}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

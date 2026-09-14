import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useSound } from '../../context/SoundContext';
import { SectionBadge } from '../ui/SectionBadge';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const { navigate } = useRouter();
  const { playClick } = useSound();

  const handleLinkClick = (path: string) => {
    playClick();
    navigate(path);
  };

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto border-t border-ink-border/60 dark:border-white/10">
      <div className="mb-10">
        <SectionBadge label="ABOUT & LEDGER" index="05" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.1]">
            A little about me, systems architecture, and 0→1 execution.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
            <p>
              I'm <strong className="font-medium text-ink-primary dark:text-ink-dark-primary">Aryan Pandey</strong>. I design and build systems at the intersection of products, infrastructure technology, and business economics.
            </p>
            <p>
              Most of my work begins with a first-principles inquiry:{' '}
              <span className="font-serif italic font-normal text-ink-primary dark:text-ink-dark-primary">
                what would this look like if we engineered it from the fundamental ground up?
              </span>
            </p>
            <p>
              I take ambiguous, structurally broken problems—whether that’s fragmented healthcare records across clinical silos, unsearchable organizational chat decisions, or acoustic privacy in public spaces—dissect the systemic forces around them, and turn the essential invariants into tangible, high-conviction prototypes and products.
            </p>
            <p>
              I don't treat software, hardware, and distribution as isolated disciplines. Coherent systems win when code architecture, physical human ergonomics, and network distribution incentives reinforce each other seamlessly.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Living Ledger & Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="bg-white/85 dark:bg-[#101015] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-ink-border dark:border-white/10 shadow-glass-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-ink-border/60 dark:border-white/10">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-primary dark:text-ink-dark-primary">
                Now / Living Ledger
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE SPRINT
              </span>
            </div>

            {/* Currently Active */}
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
                  Active Engineering
                </span>
                <div className="space-y-2">
                  <button
                    onClick={() => handleLinkClick('/work/unicare')}
                    data-cursor-text="VIEW"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-medium text-ink-primary dark:text-ink-dark-primary transition-all text-left group border border-ink-border/40 dark:border-white/5"
                  >
                    <div>
                      <span className="font-semibold block">UniCare</span>
                      <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
                        Clinical OS · Telemetry & FEFO Engine
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-ink-primary dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/ongoing/nullwave')}
                    data-cursor-text="VIEW"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-medium text-ink-primary dark:text-ink-dark-primary transition-all text-left group border border-ink-border/40 dark:border-white/5"
                  >
                    <div>
                      <span className="font-semibold block">NullWave</span>
                      <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
                        Hardware Prototype · Acoustic Containment
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-ink-primary dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
                  Writing
                </span>
                <button
                  onClick={() => handleLinkClick('/ongoing/building-distribution')}
                  data-cursor-text="VIEW"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-medium text-ink-primary dark:text-ink-dark-primary transition-all text-left group border border-ink-border/40 dark:border-white/5"
                >
                  <div>
                    <span className="font-semibold block">Building Distribution</span>
                    <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
                      Essay Collection · Sovereign Network Pipes
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-ink-primary dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
            </div>

            {/* Previously Built / Written */}
            <div className="pt-4 border-t border-ink-border/60 dark:border-white/10 space-y-3">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase tracking-widest block mb-2">
                  Previously Built & Published
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleLinkClick('/work/guild-orbit')}
                    className="p-2.5 rounded-xl bg-stone-50/70 dark:bg-stone-900/40 hover:bg-stone-100 dark:hover:bg-stone-800 text-left transition-all border border-ink-border/40 dark:border-white/5"
                  >
                    <span className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary block">Guild Orbit</span>
                    <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">Workspace OS</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/ebooks/the-system-is-being-rewritten')}
                    className="p-2.5 rounded-xl bg-stone-50/70 dark:bg-stone-900/40 hover:bg-stone-100 dark:hover:bg-stone-800 text-left transition-all border border-ink-border/40 dark:border-white/5"
                  >
                    <span className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary block">The System</span>
                    <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">Book (100+ pgs)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

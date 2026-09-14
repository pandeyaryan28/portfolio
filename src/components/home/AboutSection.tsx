import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionBadge } from '../ui/SectionBadge';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto border-t border-ink-border/50">
      <div className="mb-8">
        <SectionBadge label="ABOUT" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Editorial Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-ink-primary leading-tight">
            A little about me.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-light">
            <p>
              I'm Aryan Pandey. I like working at the intersection of products, technology and business.
            </p>
            <p>
              Most of my work starts with a question: <span className="text-ink-primary font-normal">what would this look like if we built it differently?</span>
            </p>
            <p>
              I enjoy taking ambiguous problems, breaking them down, understanding the system around them and turning the interesting parts into something tangible.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Compact "Now" & Living Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-ink-border shadow-glass-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-ink-border/60">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-primary">
                Now / Ledger
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE
              </span>
            </div>

            {/* Currently Active */}
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-widest block mb-2">
                  Building
                </span>
                <div className="space-y-1.5">
                  <button
                    onClick={() => navigate('/work/unicare')}
                    className="w-full flex items-center justify-between p-2 rounded-lg bg-stone-50/80 hover:bg-stone-100/90 text-xs font-medium text-ink-primary transition-all text-left group"
                  >
                    <span>UniCare</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>
                  <button
                    onClick={() => navigate('/ongoing/nullwave')}
                    className="w-full flex items-center justify-between p-2 rounded-lg bg-stone-50/80 hover:bg-stone-100/90 text-xs font-medium text-ink-primary transition-all text-left group"
                  >
                    <span>NullWave</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-widest block mb-2">
                  Writing
                </span>
                <button
                  onClick={() => navigate('/ongoing/building-distribution')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-stone-50/80 hover:bg-stone-100/90 text-xs font-medium text-ink-primary transition-all text-left group"
                >
                  <span>Building Distribution</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
            </div>

            {/* Previously Built / Written */}
            <div className="pt-4 border-t border-ink-border/60 space-y-4">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-widest block mb-2">
                  Previously Built
                </span>
                <button
                  onClick={() => navigate('/work/guild-orbit')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-stone-50/80 hover:bg-stone-100/90 text-xs font-medium text-ink-primary transition-all text-left group"
                >
                  <span>Guild Orbit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>

              <div>
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-widest block mb-2">
                  Written
                </span>
                <button
                  onClick={() => navigate('/ebooks/the-system-is-being-rewritten')}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-stone-50/80 hover:bg-stone-100/90 text-xs font-medium text-ink-primary transition-all text-left group"
                >
                  <span>The System Is Being Rewritten</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

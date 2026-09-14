import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { HardwareRenderNullWave } from '../visual/HardwareRenderNullWave';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { NullWaveDetail } from '../../pages/NullWaveDetail';
import { useSound } from '../../context/SoundContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const NullWaveCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { playClick } = useSound();

  return (
    <>
      <ParallaxTiltCard maxTilt={3}>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/85 dark:bg-[#101015] backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-ink-border dark:border-white/10 shadow-glass-md hover:shadow-glass-lg transition-all duration-300"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">03</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase tracking-wider">
                Wearable Hardware / Industrial Ergonomics
              </span>
            </div>
            <StatusPill status="IN DEVELOPMENT" type="development" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-lg border border-amber-500/20 mb-2">
                  <Sparkles className="w-3 h-3 text-amber-500" /> Acoustic Isolation Hardware
                </div>
                <h3 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink-primary dark:text-ink-dark-primary">
                  NullWave
                </h3>
                <p className="mt-2 text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  Exploring the physical frontier of private voice computing through an ergonomic acoustic wearable mask engineered for public transit and open spaces.
                </p>
              </div>

              {/* Core Mission & Invariant */}
              <div className="p-4 rounded-2xl bg-canvas-soft dark:bg-stone-900/50 border border-ink-border/60 dark:border-white/5 text-xs text-ink-secondary dark:text-ink-dark-secondary space-y-2">
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold block">
                  Core Mission
                </span>
                <p className="font-serif italic text-ink-primary dark:text-ink-dark-primary text-xs">
                  “The future of voice interaction is not possible without acoustic privacy.”
                </p>
                <p className="leading-relaxed font-light pt-1 text-[11px]">
                  Enabling operators, executives, and researchers to speak with voice AI models and conduct confidential conversations anywhere in public without ambient noise bleed or eavesdropping.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase">
                  Titanium Chassis · Bladeless Micro-Airflow
                </span>
                <button
                  onClick={() => {
                    playClick();
                    setModalOpen(true);
                  }}
                  data-cursor-text="DEEP DIVE"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-neutral-900 text-xs font-medium transition-all shadow-glass-sm"
                >
                  <span>Explore NullWave</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Stage */}
            <div className="lg:col-span-7">
              <HardwareRenderNullWave interactive={true} />
            </div>
          </div>
        </motion.article>
      </ParallaxTiltCard>

      {/* Deep-Dive Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="NullWave"
        category="Wearable Hardware / Industrial Ergonomics"
      >
        <NullWaveDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};

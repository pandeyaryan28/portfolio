import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { HardwareRenderNullWave } from '../visual/HardwareRenderNullWave';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { NullWaveDetail } from '../../pages/NullWaveDetail';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const NullWaveCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ParallaxTiltCard maxTilt={4}>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF9F5]/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-ink-border shadow-glass-sm hover:shadow-glass-md transition-all duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-tertiary">03</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary uppercase tracking-wider">
                Hardware / Product
              </span>
            </div>
            <StatusPill status="IN DEVELOPMENT" type="development" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-800 bg-amber-50/90 px-2.5 py-0.5 rounded-md border border-amber-200/60 mb-2">
                  <Sparkles className="w-3 h-3 text-amber-600" /> Building the Future of Voice
                </div>
                <h3 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink-primary">
                  NullWave
                </h3>
                <p className="mt-2.5 text-base text-ink-secondary leading-relaxed font-light">
                  Exploring the intersection of function, form and identity through a new generation of ergonomic wearable hardware.
                </p>
              </div>

              {/* Core Thesis & Problem */}
              <div className="p-3.5 rounded-xl bg-white/70 border border-ink-border/60 text-xs text-ink-secondary space-y-2">
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block">
                  Core Mission
                </span>
                <p className="font-serif italic text-ink-primary text-xs">
                  “The future of voice interaction is not possible without privacy.”
                </p>
                <p className="leading-relaxed font-light pt-1 text-[11px]">
                  Enabling professionals, travelers, and operators to communicate freely, take confidential calls, and speak with voice AI anywhere in public without ambient noise or eavesdropping.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[10px] text-ink-tertiary uppercase">
                  Acoustic Containment · Bladeless Airflow
                </span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-all shadow-glass-sm"
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
        category="Hardware / Product"
      >
        <NullWaveDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};

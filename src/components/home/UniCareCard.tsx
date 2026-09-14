import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { ProductMockupUniCare } from '../visual/ProductMockupUniCare';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { UniCareDetail } from '../../pages/UniCareDetail';
import { useSound } from '../../context/SoundContext';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const UniCareCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { playClick } = useSound();

  const builtHighlights = [
    'Patient-owned health wallet (UC-XXXXXXXX)',
    'Doctor EMR platform & clinical charting',
    'Real-time triage vitals sync & live telemetry',
    'Stock-aware generic molecule swap (-90% cost)',
    '<10s QR clinic intake verification',
    'FEFO medicine batch inventory engine',
    'Fullscreen waiting room TV kiosk with audio chime',
  ];

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
              <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">01</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase tracking-wider">
                Healthcare Operating System
              </span>
            </div>
            <StatusPill status="MVP LIVE" type="live" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink-primary dark:text-ink-dark-primary">
                  UniCare
                </h3>
                <p className="mt-2 text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  A patient-owned health wallet and doctor platform designed to unify fragmented medical records, triage consultations, and clinic workflows into one connected operating system.
                </p>
              </div>

              {/* The Problem Invariant */}
              <div className="p-4 rounded-2xl bg-canvas-soft dark:bg-stone-900/50 border border-ink-border/60 dark:border-white/5">
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold block mb-1">
                  The Problem
                </span>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                  Healthcare records are locked across disparate hospital silos and paper files. Patients cannot access or share their longitudinal history at point-of-care, while doctors suffer from fragmented charting and stock blind spots.
                </p>
              </div>

              {/* What I Built Highlights */}
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase tracking-wider block mb-2 font-medium">
                  What I Engineered & Built
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {builtHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100/90 dark:bg-stone-900/80 text-ink-primary dark:text-ink-dark-primary text-xs font-medium border border-ink-border/50 dark:border-white/5"
                    >
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Role & Deep-Dive CTA */}
              <div className="pt-3 border-t border-ink-border/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase tracking-wider block">
                    My Role
                  </span>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-medium mt-0.5">
                    Product strategy, system architecture, MVP engineering.
                  </p>
                </div>

                <button
                  onClick={() => {
                    playClick();
                    setModalOpen(true);
                  }}
                  data-cursor-text="DEEP DIVE"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-neutral-900 text-xs font-medium transition-all shadow-glass-sm"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Stage */}
            <div className="lg:col-span-7">
              <ProductMockupUniCare interactive={true} />
            </div>
          </div>
        </motion.article>
      </ParallaxTiltCard>

      {/* Deep-Dive Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="UniCare"
        category="Healthcare Operating System"
      >
        <UniCareDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};

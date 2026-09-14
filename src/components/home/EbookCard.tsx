import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { BookMockupTheSystem } from '../visual/BookMockupTheSystem';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { TheSystemDetail } from '../../pages/TheSystemDetail';
import { useSound } from '../../context/SoundContext';
import { ArrowRight, BookOpen, Feather } from 'lucide-react';
import { motion } from 'framer-motion';

export const EbookCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { playClick } = useSound();

  const chaptersOverview = [
    { num: '01', title: 'Macro Infrastructure & Compute Shifts', desc: 'Geopolitics of energy density, power grids, and silicon fabrication nodes' },
    { num: '02', title: 'Decentralized Institutional Trust', desc: 'Cryptographic state verification replacing legacy bureaucratic paper drag' },
    { num: '03', title: 'The Mechanics of Systemic Rewrites', desc: 'Why legacy institutional debt forces complete architectural redesigns' },
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
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">05</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase tracking-wider">
                Long-Form Systems Publication
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-900 text-ink-secondary dark:text-ink-dark-secondary border border-ink-border dark:border-white/10">
                100+ PAGES
              </span>
              <StatusPill status="PUBLISHED" type="published" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary uppercase tracking-wider mb-2">
                  <Feather className="w-3.5 h-3.5 text-amber-500" /> Author · Aryan Pandey
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-ink-primary dark:text-ink-dark-primary leading-snug">
                  The System Is Being Rewritten
                </h3>
                <p className="mt-2 text-sm sm:text-base font-sans font-medium text-ink-secondary dark:text-ink-dark-secondary">
                  Understanding the Forces Shaping the Next Global Order
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                An extensive, 100+ page exploration of the technological, economic, thermodynamic, and geopolitical forces transforming modern society, examining how compute, energy, and decentralized trust are rewiring foundational human institutions.
              </p>

              {/* Chapters Sample Preview */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase tracking-wider block font-medium">
                  Key Chapters Covered
                </span>
                <div className="space-y-2">
                  {chaptersOverview.map((item) => (
                    <div
                      key={item.num}
                      className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-ink-border/50 dark:border-white/5 text-xs text-ink-primary dark:text-ink-dark-primary flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <p className="font-medium text-ink-primary dark:text-ink-dark-primary">{item.title}</p>
                        <p className="text-[11px] text-ink-tertiary dark:text-ink-dark-tertiary font-light mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-ink-border/60 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    playClick();
                    setModalOpen(true);
                  }}
                  data-cursor-text="READ"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-neutral-900 text-xs sm:text-sm font-medium transition-all shadow-glass-sm"
                >
                  <BookOpen className="w-4 h-4 text-stone-300 dark:text-stone-700" />
                  <span>Read Book & Chapters</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Stage */}
            <div className="lg:col-span-6">
              <BookMockupTheSystem />
            </div>
          </div>
        </motion.article>
      </ParallaxTiltCard>

      {/* Deep-Dive Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="The System Is Being Rewritten"
        category="Publication / Published"
      >
        <TheSystemDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};

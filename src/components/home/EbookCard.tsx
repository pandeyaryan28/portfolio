import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { BookMockupTheSystem } from '../visual/BookMockupTheSystem';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { TheSystemDetail } from '../../pages/TheSystemDetail';
import { ArrowRight, BookOpen, Feather } from 'lucide-react';
import { motion } from 'framer-motion';

export const EbookCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const chaptersOverview = [
    { num: '01', title: 'Macro Infrastructure & Compute Shifts', desc: 'Geopolitics of energy and silicon fabrication' },
    { num: '02', title: 'Decentralized Institutional Trust', desc: 'Cryptographic invariants replacing bureaucratic drift' },
    { num: '03', title: 'The Mechanics of Systemic Rewrites', desc: 'How legacy physical constraints force architectural revisions' },
  ];

  return (
    <>
      <ParallaxTiltCard maxTilt={4}>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-ink-border shadow-glass-sm hover:shadow-glass-md transition-all duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-tertiary">01</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary uppercase tracking-wider">
                Long-Form Publication
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-stone-100 text-ink-secondary border border-ink-border">
                100+ PAGES
              </span>
              <StatusPill status="PUBLISHED" type="published" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-tertiary uppercase tracking-wider mb-2">
                  <Feather className="w-3 h-3 text-ink-secondary" /> Author · Aryan Pandey
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-ink-primary leading-snug">
                  The System Is Being Rewritten
                </h3>
                <p className="mt-2 text-sm sm:text-base font-sans font-medium text-ink-secondary">
                  Understanding the Forces Shaping the Next Global Order
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-light">
                An exploration of the technological, economic, geopolitical and societal forces reshaping the world, and how these forces are changing the systems we rely on.
              </p>

              {/* Chapters Sample Preview */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block">
                  Key Chapters Covered
                </span>
                <div className="space-y-1.5">
                  {chaptersOverview.map((item) => (
                    <div
                      key={item.num}
                      className="p-2.5 rounded-xl bg-stone-50/80 border border-ink-border/40 text-xs text-ink-primary flex items-start gap-2.5"
                    >
                      <span className="font-mono text-[10px] text-ink-tertiary mt-0.5">{item.num}</span>
                      <div>
                        <p className="font-medium text-ink-primary">{item.title}</p>
                        <p className="text-[11px] text-ink-tertiary font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-ink-border/60 flex items-center justify-between">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-all shadow-glass-sm"
                >
                  <BookOpen className="w-4 h-4 text-stone-300" />
                  <span>Read the book</span>
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
        category="eBook / Published"
      >
        <TheSystemDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};

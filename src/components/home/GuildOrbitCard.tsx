import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { ProductMockupGuildOrbit } from '../visual/ProductMockupGuildOrbit';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { GuildOrbitDetail } from '../../pages/GuildOrbitDetail';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const GuildOrbitCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const builtHighlights = [
    'Context-threaded team channels',
    'Kanban task management & sprints',
    'Multi-tier operational approvals',
    'Real-time velocity & status reporting',
    'Admin console & policy governance',
    'Automated cross-team workflows',
  ];

  return (
    <>
      <ParallaxTiltCard maxTilt={4}>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-ink-border shadow-glass-sm hover:shadow-glass-md transition-all duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-tertiary">02</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary uppercase tracking-wider">
                Execution Operating System
              </span>
            </div>
            <StatusPill status="MVP LIVE" type="live" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink-primary">
                  Guild Orbit
                </h3>
                <p className="mt-2.5 text-base text-ink-secondary leading-relaxed font-light">
                  A workspace that brings communication, tasks, approvals and reporting into one unified execution system.
                </p>
              </div>

              {/* Thesis Statement */}
              <div className="p-3.5 rounded-xl bg-canvas-soft border-l-2 border-l-neutral-900 border-y border-r border-ink-border/60">
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block mb-1">
                  Core Thesis
                </span>
                <p className="text-xs font-serif italic text-ink-primary">
                  “Communication and execution shouldn't have to live in completely different tools.”
                </p>
              </div>

              {/* What I Built Highlights */}
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block mb-2">
                  What I Built & Engineered
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {builtHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100/90 text-ink-primary text-xs font-medium border border-ink-border/50"
                    >
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Role & CTA */}
              <div className="pt-3 border-t border-ink-border/60 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block">
                    My Role
                  </span>
                  <p className="text-xs text-ink-secondary font-medium mt-0.5">
                    Product strategy, product architecture and end-to-end execution.
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-all shadow-glass-sm"
                >
                  <span>Explore Guild Orbit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Stage */}
            <div className="lg:col-span-7">
              <ProductMockupGuildOrbit interactive={true} />
            </div>
          </div>
        </motion.article>
      </ParallaxTiltCard>

      {/* Deep-Dive Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Guild Orbit"
        category="Execution Operating System"
      >
        <GuildOrbitDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { StatusPill } from '../components/ui/StatusPill';
import { SectionBadge } from '../components/ui/SectionBadge';
import { ProductMockupGuildOrbit } from '../components/visual/ProductMockupGuildOrbit';
import { useSound } from '../context/SoundContext';
import { ArrowLeft, MessageSquare, CheckSquare, ShieldCheck, BarChart3, Workflow, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface GuildOrbitDetailProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const GuildOrbitDetail: React.FC<GuildOrbitDetailProps> = ({ isModal = false, onClose }) => {
  const { navigate } = useRouter();
  const { playClick } = useSound();

  const builtPillars = [
    {
      title: 'Context-Threaded Team Communication',
      icon: MessageSquare,
      desc: 'Channel messages anchored directly to executable work items, preventing decisions from getting buried in unsearchable chat history.',
    },
    {
      title: 'Task Management & Sprint Kanban',
      icon: CheckSquare,
      desc: 'Fluid state tracking with automated milestone checkpoints, squad task assignment, and blocked-item escalation.',
    },
    {
      title: 'Multi-Tier Operational Approvals',
      icon: ShieldCheck,
      desc: 'Structured authorization gates with role-based sign-offs, automated notifications, and compliance audit trails.',
    },
    {
      title: 'Automated Status & Velocity Reporting',
      icon: BarChart3,
      desc: 'Real-time operational dashboards eliminating manual weekly status report writing for team leads.',
    },
    {
      title: 'Admin Governance & Role Guardrails',
      icon: Settings,
      desc: 'Granular workspace policies, member onboarding links with join PINs, and department isolation.',
    },
    {
      title: 'Cross-Team Orchestration Workflows',
      icon: Workflow,
      desc: 'Trigger-based workflow automation interconnecting communication threads with system actions.',
    },
  ];

  const handleBack = () => {
    playClick();
    if (isModal && onClose) {
      onClose();
    } else {
      navigate('/#work');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`max-w-4xl mx-auto ${isModal ? 'py-4' : 'min-h-screen pt-28 pb-24 px-4 sm:px-8'}`}
    >
      {/* Back Button */}
      {!isModal && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ARCHIVE</span>
        </button>
      )}

      {/* Header Info */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <SectionBadge label="SYSTEM 02" index="LIVE" />
          <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">/</span>
          <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase">Execution Operating System</span>
          <StatusPill status="MVP LIVE" type="live" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary">
          Guild Orbit
        </h1>

        <p className="text-lg sm:text-xl text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
          A workspace that brings communication, tasks, approvals and reporting into one unified execution system.
        </p>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-ink-border/60 dark:border-white/10 py-4 text-xs font-mono">
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">My Role</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Product Strategy & Architecture</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Current Status</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">MVP Live</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Category</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Enterprise Workspace OS</span>
          </div>
        </div>
      </div>

      {/* Primary Visual Showcase */}
      <div className="my-10 sm:my-14">
        <ProductMockupGuildOrbit interactive={true} />
      </div>

      {/* Narrative Sections */}
      <div className="space-y-14 max-w-3xl">
        {/* The Thesis */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            The Core Thesis
          </h2>
          <div className="p-6 rounded-2xl bg-canvas-soft dark:bg-stone-900/60 border-l-2 border-l-neutral-900 dark:border-l-white border-y border-r border-ink-border/80 dark:border-white/10">
            <p className="text-lg sm:text-xl font-serif italic text-ink-primary dark:text-ink-dark-primary">
              “Communication and execution shouldn't have to live in completely different tools.”
            </p>
            <p className="mt-3 text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
              Modern high-velocity teams lose hours daily context-switching between chat apps, ticketing systems, document drives, and spreadsheets. Guild Orbit collapses this disconnect by making every conversation an executable object.
            </p>
          </div>
        </section>

        {/* What I Built */}
        <section className="space-y-6">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Core Modules Built
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {builtPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white/90 dark:bg-stone-900/80 border border-ink-border/60 dark:border-white/10 hover:border-ink-border dark:hover:border-white/20 transition-all space-y-2 shadow-xs"
                >
                  <div className="flex items-center gap-2 text-ink-primary dark:text-ink-dark-primary">
                    <Icon className="w-4 h-4 text-amber-500" />
                    <h3 className="text-sm font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Status */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Current Status
          </h2>
          <p className="text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
            <strong className="font-medium text-ink-primary dark:text-ink-dark-primary">MVP LIVE:</strong> Complete workspace initialization, role-based guardrails, threaded communication channels, Kanban task tracking, and multi-tier approval chains are running end-to-end.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

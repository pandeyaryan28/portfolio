import React, { useState } from 'react';
import { MessageSquare, CheckSquare, ShieldCheck, Settings, Check, X } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const ProductMockupGuildOrbit: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'chat' | 'approvals' | 'tracking' | 'admin'>('hero');
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const { playClick, playPop, playTick } = useSound();

  const screenshots = {
    hero: {
      src: '/assets/guild/guild_hero_mockup.png',
      caption: 'Guild Orbit Unified Workspace — Contextual alignment of discussion, execution, and sign-offs',
      tag: 'Workspace Core',
      spec: 'React 19 · Real-time WebSocket Mesh · Multi-tenant Org Partitioning',
    },
    chat: {
      src: '/assets/guild/team_chat.png',
      caption: 'Context-Threaded Team Channels — Eliminates fragmented decision trees across external apps',
      tag: 'Team Chat',
      spec: 'Anchored Task Linkage · Markdown & Snippets · Instant Thread Elevate',
    },
    approvals: {
      src: '/assets/guild/approvals.png',
      caption: 'Multi-Tier Operational Approvals — Structured authorization gates with cryptographic audit log',
      tag: 'Approvals Gate',
      spec: 'Role Sign-off Gates · Dynamic Multi-Tier Escalations · Immutable Trails',
    },
    tracking: {
      src: '/assets/guild/work_tracking.png',
      caption: 'Execution Kanban & Sprint Velocity — Live state synchronization across cross-functional squads',
      tag: 'Work Tracking',
      spec: 'Drag & Drop Fluid Kanban · Milestone Roadmapping · Blocker Triaging',
    },
    admin: {
      src: '/assets/guild/admin_console.png',
      caption: 'Admin Governance & Role Boundaries — Granular department isolation and security guardrails',
      tag: 'Admin Console',
      spec: 'Role-Based Access Control (RBAC) · Join PIN Auth · Domain Isolation',
    },
  };

  const handleTabChange = (tab: 'hero' | 'chat' | 'approvals' | 'tracking' | 'admin') => {
    playTick();
    setActiveTab(tab);
  };

  const current = screenshots[activeTab];

  return (
    <div className="w-full bg-[#F5F4EE] dark:bg-[#121217] rounded-3xl p-4 sm:p-7 border border-ink-border dark:border-white/10 shadow-glass-md overflow-hidden transition-all duration-300 relative group">
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ink-border/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-ink-primary dark:text-ink-dark-primary font-semibold uppercase tracking-wider">
            Guild Orbit // Workspace
          </span>
        </div>

        {interactive && (
          <div className="flex items-center flex-wrap gap-1 bg-white/80 dark:bg-black/60 backdrop-blur-md p-1 rounded-xl border border-ink-border dark:border-white/10 text-xs">
            <button
              onClick={() => handleTabChange('hero')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeTab === 'hero'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabChange('chat')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'chat'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <MessageSquare className="w-3 h-3" />
              Chat
            </button>
            <button
              onClick={() => handleTabChange('approvals')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'approvals'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              Approvals
            </button>
            <button
              onClick={() => handleTabChange('tracking')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'tracking'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <CheckSquare className="w-3 h-3" />
              Kanban
            </button>
            <button
              onClick={() => handleTabChange('admin')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'admin'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <Settings className="w-3 h-3" />
              Admin
            </button>
          </div>
        )}
      </div>

      {/* Main Screenshot Stage */}
      <div className="relative z-10 my-4 sm:my-5 rounded-2xl overflow-hidden bg-stone-900 aspect-[16/10] max-h-[360px] border border-ink-border dark:border-white/10 shadow-inner flex items-center justify-center">
        <img
          key={activeTab}
          src={current.src}
          alt={current.caption}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Floating Screenshot Badge */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-neutral-900/90 dark:bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-stone-200 flex items-center justify-between gap-3 shadow-lg">
          <span className="truncate">{current.caption}</span>
          <span className="bg-stone-800 px-2 py-0.5 rounded text-[9px] text-amber-300 uppercase shrink-0 font-semibold">
            {current.tag}
          </span>
        </div>
      </div>

      {/* Interactive Operational Approvals Trigger Bar */}
      {activeTab === 'approvals' && (
        <div className="relative z-10 mb-3 p-3 rounded-xl bg-white dark:bg-stone-900 border border-ink-border dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-ink-secondary dark:text-ink-dark-secondary">
              Simulation: PR #892 Security Sign-off
            </span>
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
              approvalStatus === 'approved'
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                : approvalStatus === 'rejected'
                ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300'
                : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
            }`}>
              {approvalStatus}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                playPop();
                setApprovalStatus('approved');
              }}
              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[11px] flex items-center gap-1"
            >
              <Check className="w-3 h-3" /> Approve
            </button>
            <button
              onClick={() => {
                playClick();
                setApprovalStatus('rejected');
              }}
              className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono text-[11px] flex items-center gap-1"
            >
              <X className="w-3 h-3" /> Reject
            </button>
          </div>
        </div>
      )}

      {/* Feature Pillar Highlights */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">01 / CHANNELS</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">Actionable Chat</span>
        </div>
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">02 / GATES</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">Multi-Tier Approvals</span>
        </div>
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">03 / VELOCITY</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">Live Sprint Sync</span>
        </div>
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">04 / RBAC</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">Org Guardrails</span>
        </div>
      </div>
    </div>
  );
};

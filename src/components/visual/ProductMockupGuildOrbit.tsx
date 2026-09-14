import React, { useState } from 'react';
import { MessageSquare, CheckSquare, ShieldCheck, Settings } from 'lucide-react';

export const ProductMockupGuildOrbit: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'chat' | 'approvals' | 'tracking' | 'admin'>('hero');

  const screenshots = {
    hero: {
      src: '/assets/guild/guild_hero_mockup.png',
      caption: 'Guild Orbit Unified Workspace — Direct integration of tasks, discussions, and approvals',
      tag: 'Workspace Core',
    },
    chat: {
      src: '/assets/guild/team_chat.png',
      caption: 'Context-Threaded Team Channels — Turning conversations directly into actionable task nodes',
      tag: 'Team Chat',
    },
    approvals: {
      src: '/assets/guild/approvals.png',
      caption: 'Multi-Tier Operational Approvals — Structured authorization gates and audit transparency',
      tag: 'Approvals Gate',
    },
    tracking: {
      src: '/assets/guild/work_tracking.png',
      caption: 'Execution Kanban & Sprint Velocity — Real-time progress synchronization across squads',
      tag: 'Work Tracking',
    },
    admin: {
      src: '/assets/guild/admin_console.png',
      caption: 'Admin Governance & Role Boundaries — Granular team permissions and compliance controls',
      tag: 'Admin Console',
    },
  };

  const current = screenshots[activeTab];

  return (
    <div className="w-full bg-[#F5F4EE] rounded-3xl p-4 sm:p-7 border border-ink-border shadow-glass-md overflow-hidden transition-all duration-300 relative group">
      {/* Background noise */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ink-border/60">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs text-ink-primary font-semibold uppercase tracking-wider">
            Guild Orbit // Operating System
          </span>
        </div>

        {interactive && (
          <div className="flex items-center flex-wrap gap-1 bg-white/80 backdrop-blur-md p-1 rounded-xl border border-ink-border text-xs">
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeTab === 'hero'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'chat'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <MessageSquare className="w-3 h-3" />
              Chat
            </button>
            <button
              onClick={() => setActiveTab('approvals')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'approvals'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              Approvals
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'tracking'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <CheckSquare className="w-3 h-3" />
              Tracking
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] flex items-center gap-1 ${
                activeTab === 'admin'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <Settings className="w-3 h-3" />
              Admin
            </button>
          </div>
        )}
      </div>

      {/* Main Screenshot Stage with Window Bezel */}
      <div className="relative z-10 my-4 sm:my-6 rounded-2xl overflow-hidden bg-white aspect-[16/10] max-h-[380px] border border-ink-border shadow-inner flex items-center justify-center">
        <img
          key={activeTab}
          src={current.src}
          alt={current.caption}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Floating Screenshot Badge */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-neutral-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-stone-200 flex items-center justify-between gap-3">
          <span className="truncate">{current.caption}</span>
          <span className="bg-stone-800 px-2 py-0.5 rounded text-[9px] text-amber-300 uppercase shrink-0">
            {current.tag}
          </span>
        </div>
      </div>

      {/* Feature Pillar Highlights */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">01 / CHANNELS</span>
          <span className="font-semibold text-ink-primary text-xs">Actionable Chat</span>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">02 / GATES</span>
          <span className="font-semibold text-ink-primary text-xs">Multi-Tier Approvals</span>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">03 / VELOCITY</span>
          <span className="font-semibold text-ink-primary text-xs">Live Sprint Sync</span>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">04 / GOVERNANCE</span>
          <span className="font-semibold text-ink-primary text-xs">Role Guardrails</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

export const ProductMockupGuildOrbit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'chat' | 'approvals' | 'tracking' | 'admin'>('hero');

  const screenshots = {
    hero: {
      src: '/assets/guild/guild_hero_mockup.png',
      caption: 'Unified workspace showing team navigation, active channels, and connected projects.',
      tag: 'Overview',
    },
    chat: {
      src: '/assets/guild/team_chat.png',
      caption: 'Threaded team discussions linked directly to tasks and decisions.',
      tag: 'Team Chat',
    },
    approvals: {
      src: '/assets/guild/approvals.png',
      caption: 'Multi-tier approval gates for design, code, and operational sign-offs.',
      tag: 'Approvals',
    },
    tracking: {
      src: '/assets/guild/work_tracking.png',
      caption: 'Kanban boards and sprint tracking with real-time status synchronization.',
      tag: 'Kanban',
    },
    admin: {
      src: '/assets/guild/admin_console.png',
      caption: 'Organization settings, role-based access control, and workspace security.',
      tag: 'Admin Console',
    },
  };

  const tabs: Array<{ id: 'hero' | 'chat' | 'approvals' | 'tracking' | 'admin'; label: string }> = [
    { id: 'hero', label: 'Overview' },
    { id: 'chat', label: 'Chat' },
    { id: 'approvals', label: 'Approvals' },
    { id: 'tracking', label: 'Tasks' },
    { id: 'admin', label: 'Admin' },
  ];

  const current = screenshots[activeTab];

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/50">
        <span className="text-xs font-mono font-medium text-gray-700">
          Guild Orbit Interface
        </span>

        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Screenshot Frame */}
      <div className="relative aspect-[16/10] max-h-[380px] bg-gray-100 overflow-hidden">
        <img
          src={current.src}
          alt={current.caption}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Caption Bar */}
      <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
        <p className="truncate mr-4">{current.caption}</p>
        <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wide shrink-0">
          {current.tag}
        </span>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from '../context/RouterContext';
import { ProductMockupGuildOrbit } from '../components/visual/ProductMockupGuildOrbit';
import { ArrowLeft, MessageSquare, CheckSquare, ShieldCheck, BarChart3, Settings, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const GuildOrbitDetail: React.FC = () => {
  const features = [
    {
      title: 'Contextual Chat Channels',
      icon: MessageSquare,
      desc: 'Discussions stay tied to specific tasks and deliverables, preventing important decisions from getting buried in endless chat logs.',
    },
    {
      title: 'Sprint Kanban Boards',
      icon: CheckSquare,
      desc: 'Interactive task boards with milestone assignments, blocked-item flags, and drag-and-drop state transitions.',
    },
    {
      title: 'Multi-Tier Approvals',
      icon: ShieldCheck,
      desc: 'Clear sign-off gates for design reviews, code merges, and releases before items transition to completed.',
    },
    {
      title: 'Velocity & Progress Tracking',
      icon: BarChart3,
      desc: 'Automated sprint reports and velocity tracking, reducing the need for manual status meetings.',
    },
    {
      title: 'Admin Console & Role Permissions',
      icon: Settings,
      desc: 'Granular workspace access control, team member invites, and organization security settings.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back Button */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>BACK TO PROJECTS</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
          <span>Operational Workspace</span>
          <span>·</span>
          <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">Live MVP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Guild Orbit
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          An execution workspace that brings team chat, task boards, and operational sign-offs into one cohesive system.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={SITE_LINKS.projects.guildOrbit.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-2 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Visit Live Website</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={SITE_LINKS.projects.guildOrbit.repo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-medium transition-all inline-flex items-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>View Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Role</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Product Architect & Builder</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">MVP Live in Production</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Core Tech</span>
            <span className="font-medium text-gray-900 mt-0.5 block">React 19, TypeScript, WebSockets</span>
          </div>
        </div>
      </div>

      {/* Primary Visual Showcase */}
      <div className="py-2">
        <ProductMockupGuildOrbit />
      </div>

      {/* Core Thesis & Problem */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Why I Built This</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-medium text-gray-900">
            Communication and execution shouldn't live in completely separate tools.
          </p>
          <p>
            When teams discuss an issue in chat, create a ticket in a project tracker, and approve work over email, context gets fragmented. People waste hours asking for status updates or tracking down past decisions. Guild Orbit makes discussions an integrated part of tasks and sprint milestones.
          </p>
        </div>
      </div>

      {/* Key Modules Built */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Core Features Built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 shadow-xs hover:border-gray-300"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <Icon className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

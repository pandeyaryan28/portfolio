import React from 'react';
import { Link } from '../context/RouterContext';
import { ProductMockupGuildOrbit } from '../components/visual/ProductMockupGuildOrbit';
import { ArrowLeft, MessageSquare, CheckSquare, ShieldCheck, BarChart3, Settings, Globe, ExternalLink, Clock, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const GuildOrbitDetail: React.FC = () => {
  const bottlenecksSolved = [
    {
      problem: 'Decisions and task agreements get buried in chaotic chat streams',
      solution: 'Contextual Discussion Channels',
      icon: MessageSquare,
      desc: 'Discussions stay attached directly to specific tasks and deliverables. Decisions remain visible to anyone working on that item instead of vanishing into message history.',
      outcome: 'Zero lost decisions or repeated explanations.',
    },
    {
      problem: 'Team members lack clarity on who owns what or what is currently blocked',
      solution: 'Visual Sprint Execution Boards',
      icon: CheckSquare,
      desc: 'Interactive task boards with clear owner assignments, blocked item tags, and drag and drop state transitions that update immediately across the whole team.',
      outcome: 'Instant operational clarity on every milestone.',
    },
    {
      problem: 'Deliverables ship without proper review or get stuck in inbox backlogs',
      solution: 'Multi Stage Sign Off Gates',
      icon: ShieldCheck,
      desc: 'Structured sign off gates for design review, engineering testing, and release authorization before any milestone transitions to finished.',
      outcome: 'Eliminates unauthorized releases and missed reviews.',
    },
    {
      problem: 'Leaders waste hours every week conducting manual status update calls',
      solution: 'Live Velocity and Progress Tracking',
      icon: BarChart3,
      desc: 'Automatic progress tracking and sprint summaries that show real time delivery pace without requiring team members to write manual status reports.',
      outcome: 'Cuts recurring status check meetings in half.',
    },
    {
      problem: 'Uncontrolled access permissions create security risks and messy settings',
      solution: 'Central Admin and Role Controls',
      icon: Settings,
      desc: 'Clear organization permissions, simple workspace invitations, and team security settings managed from one intuitive panel.',
      outcome: 'Maintains security while giving team members autonomy.',
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
          <span>Team Execution Workspace</span>
          <span>·</span>
          <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">Live MVP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Guild Orbit
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          An execution workspace that brings team conversations, task boards, and formal approval gates into one clear system.
        </p>

        {/* Action Buttons - Source code link removed */}
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
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Role</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Product Builder and Systems Architect</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">MVP Live in Production</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Core Focus</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Execution Speed, Context Retention, Accountability</span>
          </div>
        </div>
      </div>

      {/* Primary Visual Showcase */}
      <div className="py-2">
        <ProductMockupGuildOrbit />
      </div>

      {/* Problem & Motivation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">The Problem Being Solved</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-medium text-gray-900">
            Team conversations and actual project execution should never live in disconnected tools.
          </p>
          <p>
            When teams debate an issue in a messaging app, track tasks in a separate project board, and request sign offs over email, context fractures immediately. Team members waste hours hunting down past agreements or asking for status updates. Critical deliverables stall simply because nobody is certain who owns the final approval.
          </p>
          <p>
            Guild Orbit solves this by making communication an integrated part of tasks and sprint milestones. Every discussion has a clear home, every task has an owner, and every milestone has unambiguous approval gates.
          </p>
        </div>
      </div>

      {/* Operational Bottlenecks Solved */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Operational Bottlenecks Solved</h2>
        <div className="space-y-3">
          {bottlenecksSolved.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.solution}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 hover:border-gray-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-700">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{item.solution}</h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.outcome}
                  </span>
                </div>
                <p className="text-xs text-red-700 font-medium pl-8">
                  Friction: {item.problem}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 pl-8 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Measurable Operational Impact */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Measurable Operational Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Clock className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Faster Decision Speed</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Linking conversations directly to tasks removes back and forth confusion and speeds up project momentum.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Users className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Fewer Status Meetings</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Visual boards and live progress metrics give leadership total visibility without manual check in calls.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <CheckCircle2 className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Risk Free Releases</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Sign off gates ensure design, technical, and executive stakeholders review deliverables before launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

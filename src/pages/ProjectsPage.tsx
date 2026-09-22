import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'digital' | 'hardware'>('all');

  const projects = [
    {
      id: 'unicare',
      title: 'UniCare',
      category: 'digital' as const,
      categoryLabel: 'Healthcare Operations',
      status: 'Live MVP',
      statusColor: 'text-emerald-800 bg-emerald-50',
      tagline: 'A unified clinic management system connecting patient intake, doctor consultations, and pharmacy inventory in real time.',
      problemSolved: 'Solves clinic congestion, 45 minute registration delays, lost paper medical charts, and expensive expired medicine waste.',
      highlights: [
        'Cuts patient check in time from 15 minutes to under 10 seconds via digital QR pass',
        'Matches prescribed brand medicines with in stock generic alternatives to save patients up to 90 percent',
        'Tracks pharmacy batches with First Expired First Out rotation to stop medicine expiration losses',
      ],
      previewImg: '/assets/guild/guild_hero_mockup.png',
      isMockupUI: true,
      focusAreas: ['Clinical Workflow Optimization', 'Waste Reduction', 'Instant Patient Intake'],
      path: '/work/unicare',
      liveUrl: SITE_LINKS.projects.unicare.url,
    },
    {
      id: 'guild-orbit',
      title: 'Guild Orbit',
      category: 'digital' as const,
      categoryLabel: 'Team Workspace',
      status: 'Live MVP',
      statusColor: 'text-emerald-800 bg-emerald-50',
      tagline: 'An integrated execution workspace combining team conversations, visual task boards, and formal approval gates.',
      problemSolved: 'Solves scattered context across separate chat and tracking apps, lost project decisions, and slow sign off handoffs.',
      highlights: [
        'Attaches every discussion directly to a sprint deliverable so decisions are never lost',
        'Visual Kanban boards provide instant status without requiring long update meetings',
        'Structured approval gates ensure key stakeholders review items before final release',
      ],
      previewImg: '/assets/guild/guild_hero_mockup.png',
      focusAreas: ['Operational Velocity', 'Cross Functional Alignment', 'Decision Visibility'],
      path: '/work/guild-orbit',
      liveUrl: SITE_LINKS.projects.guildOrbit.url,
    },
    {
      id: 'nullwave',
      title: 'Null Wave',
      category: 'hardware' as const,
      categoryLabel: 'Hardware Prototype',
      status: 'Prototype',
      statusColor: 'text-amber-800 bg-amber-50',
      tagline: 'An ergonomic titanium wearable mask designed to contain voice sound for private conversations in public spaces.',
      problemSolved: 'Solves the privacy risk of taking confidential work calls or dictating thoughts to AI in busy airports, trains, and cafes.',
      highlights: [
        'Internal acoustic chamber absorbs speech volume by over 40 decibels at the mouth',
        'Silent micro ducting circulates fresh air continuously for natural breathing comfort',
        'Grade 5 titanium outer structure paired with soft skin safe silicone for daily travel',
      ],
      previewImg: '/assets/nullwave/mask-studio.png',
      focusAreas: ['Voice Privacy', 'Acoustic Containment', 'Ergonomic Wearable Design'],
      path: '/work/nullwave',
      liveUrl: SITE_LINKS.projects.nullwave.url,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider inline-flex items-center gap-2">
          <span>Ventures and Inventions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Projects and Systems
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal">
          Working platforms, clinical operating tools, and physical hardware prototypes built to solve real operational problems.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 pt-2 border-b border-gray-200 pb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === 'all'
                ? 'bg-neutral-900 text-white'
                : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter('digital')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === 'digital'
                ? 'bg-neutral-900 text-white'
                : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100'
            }`}
          >
            Digital Platforms
          </button>
          <button
            onClick={() => setFilter('hardware')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === 'hardware'
                ? 'bg-neutral-900 text-white'
                : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100'
            }`}
          >
            Hardware Systems
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 hover:border-gray-400 hover:shadow-md transition-all"
          >
            {/* Top metadata */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-gray-500 uppercase">
                  {project.categoryLabel}
                </span>
                <span className="text-gray-300">·</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Website</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}
            </div>

            {/* Content & Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Text Info */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {project.tagline}
                </p>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-1">
                  <span className="font-mono text-[11px] font-medium text-red-700 uppercase block">The Problem Being Solved</span>
                  <p className="leading-relaxed font-normal text-gray-600">{project.problemSolved}</p>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-medium text-gray-500 uppercase">
                    Measurable Outcomes
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span className="font-normal">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.focusAreas.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Thumbnail */}
              <div className="lg:col-span-5">
                <Link
                  to={project.path}
                  className="block rounded-xl overflow-hidden border border-gray-200 bg-gray-50 hover:border-gray-400 transition-all aspect-[16/10] relative group shadow-2xs"
                >
                  {project.id === 'unicare' ? (
                    <div className="w-full h-full p-4 bg-slate-50/70 flex flex-col justify-between text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                        <span className="font-mono text-[11px] font-medium text-gray-700">UniCare Clinical OS</span>
                        <span className="font-mono text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Live Queue</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-gray-500">Patient Check in</span>
                          <span className="text-xs font-semibold text-gray-900 font-mono">Token #A14</span>
                        </div>
                        <p className="text-[11px] text-gray-600">Room 204 · Dr. Mehta (Cardiology)</p>
                        <p className="text-[10px] text-emerald-700 font-mono">FEFO Batch Allocated: Atorvastatin 20mg</p>
                      </div>
                      <div className="text-[10px] font-mono text-gray-500 flex items-center justify-between">
                        <span>Intake: Under 10s QR Protocol</span>
                        <span className="text-gray-900 font-medium">Interactive Demo →</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.previewImg}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors" />
                    </>
                  )}
                </Link>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium transition-all inline-flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5 text-gray-600" />
                    <span>Open Live Product</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </div>

              <Link
                to={project.path}
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

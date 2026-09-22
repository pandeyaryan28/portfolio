import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { springSmooth } from '../components/ui/motionVariants';
import { ScrollReveal, ScrollStagger, ScrollItem, ScrollParallax } from '../components/ui/ScrollReveal';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'digital' | 'hardware'>('all');

  const projects = [
    {
      id: 'unicare',
      title: 'UniCare',
      category: 'digital' as const,
      categoryLabel: 'Healthcare Operations',
      status: 'Live Production',
      visitLabel: 'Visit UniCare',
      tagline: 'A unified clinic management platform connecting patient intake, doctor consultations, and pharmacy inventory in real time.',
      problemSolved: 'Outpatient clinics lose hours daily to 45-minute manual intake queues, fragmented paper charts, high drug costs, and pharmacy batch expiration losses.',
      highlights: [
        'Cuts patient intake duration from 12+ minutes to under 10 seconds via digital QR token protocol',
        'Matches prescribed brand medicines with in-stock generic bioequivalents to save patients up to 90%',
        'Automates dispensary batch routing with First-Expired, First-Out (FEFO) allocation to stop medicine waste',
      ],
      focusAreas: ['Clinical Workflow Optimization', 'FEFO Inventory Rotation', 'Contactless Intake'],
      path: '/work/unicare',
      liveUrl: SITE_LINKS.projects.unicare.url,
      cardArchitecture: [
        { label: 'Intake Velocity', val: '<10s QR Check-In' },
        { label: 'Patient Savings', val: 'Up to 90% via Generics' },
        { label: 'Dispensary Waste', val: '0% Expiration Write-Offs' },
      ],
    },
    {
      id: 'guild-orbit',
      title: 'Guild Orbit',
      category: 'digital' as const,
      categoryLabel: 'Team Execution Platform',
      status: 'Live Production',
      visitLabel: 'Visit Guild Orbit',
      tagline: 'An integrated execution platform combining sprint deliverables, contextual discussion threads, and formal approval gates.',
      problemSolved: 'Fast-moving product teams lose execution momentum when conversations scatter across chat channels, tasks sit in disconnected boards, and approvals stall in email inboxes.',
      highlights: [
        'Anchors every discussion thread directly to a sprint deliverable so strategic decisions are never lost',
        'Visual execution boards provide live milestone velocity without requiring recurring status meetings',
        'Multi-stage governance gates ensure design, QA, and security sign-offs are completed before release',
      ],
      focusAreas: ['Operational Velocity', 'Cross-Functional Alignment', 'Decision Visibility'],
      path: '/work/guild-orbit',
      liveUrl: SITE_LINKS.projects.guildOrbit.url,
      cardArchitecture: [
        { label: 'Context Model', val: 'Deliverable-Tied Threads' },
        { label: 'Meeting Reduction', val: '50% Fewer Status Calls' },
        { label: 'Governance', val: 'Multi-Stage Sign-Off Gates' },
      ],
    },
    {
      id: 'nullwave',
      title: 'Null Wave',
      category: 'hardware' as const,
      categoryLabel: 'Hardware Prototype',
      status: 'Working Prototype',
      visitLabel: 'Visit NullWave',
      tagline: 'An ergonomic titanium acoustic wearable mask designed to contain speech audio for private conversations in public spaces.',
      problemSolved: 'Remote leaders and knowledge workers taking confidential calls or dictating to AI in airports, trains, or cafes leak sensitive information to bystanders.',
      highlights: [
        'Internal multi-chamber acoustic labyrinth attenuates speech audio by over 40 decibels at the mouth',
        'Silent perimeter micro-channel ducting circulates fresh air continuously without microphone turbulence',
        'Grade 5 titanium outer exoskeleton paired with dynamic articulating hypoallergenic silicone seal',
      ],
      previewImg: '/assets/nullwave/mask-studio.png',
      focusAreas: ['Voice Privacy', 'Acoustic Containment', 'Ergonomic Wearable Design'],
      path: '/work/nullwave',
      liveUrl: SITE_LINKS.projects.nullwave.url,
      cardArchitecture: [
        { label: 'Sound Isolation', val: '40+ dB Attenuation' },
        { label: 'Airflow Design', val: 'Passive Venturi Micro-Ducts' },
        { label: 'Form Factor', val: 'Grade 5 Titanium (<300g)' },
      ],
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'digital', label: 'Digital Platforms' },
    { id: 'hardware', label: 'Hardware Systems' },
  ] as const;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-12">
      {/* Page Header with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider inline-flex items-center gap-2">
          <span>Ventures & Systems</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-sans font-semibold text-neutral-950 tracking-tight">
          Projects & Systems
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed font-normal">
          Operating platforms, clinical management tools, and physical hardware prototypes built to resolve real operational friction.
        </p>

        {/* Filter Tabs with Fluid Animated Indicator */}
        <div className="flex items-center gap-2 pt-2 border-b border-neutral-200 pb-4 relative">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFilter(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-filter-indicator"
                    className="absolute inset-0 bg-neutral-900 rounded-md -z-10"
                    transition={springSmooth}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects List with Smooth Layout and Noticeable Scroll Entrance */}
      <motion.div layout className="space-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ScrollReveal
              key={project.id}
              direction="scale"
              distance={40}
              duration={0.65}
              className="w-full"
            >
              <motion.article
                layout
                whileHover={{
                  y: -6,
                  borderColor: '#9CA3AF',
                  boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.09), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs"
              >
                {/* Top metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      {project.status}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{project.visitLabel}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </motion.a>
                  )}
                </div>

                {/* Content & Visual Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Text Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-base text-neutral-600 leading-relaxed font-normal">
                      {project.tagline}
                    </p>

                    <motion.div
                      whileHover={{ y: -2, backgroundColor: '#FFFFFF', borderColor: '#D1D5DB' }}
                      transition={{ duration: 0.15 }}
                      className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 space-y-1"
                    >
                      <span className="font-mono text-xs font-medium text-neutral-600 uppercase tracking-wider block">
                        The Problem Space
                      </span>
                      <p className="leading-relaxed font-normal text-neutral-600">{project.problemSolved}</p>
                    </motion.div>

                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                        Measurable Outcomes
                      </div>
                      <ScrollStagger staggerDelay={0.08} className="space-y-2 text-sm text-neutral-700">
                        {project.highlights.map((h) => (
                          <ScrollItem key={h} direction="up" distance={16} duration={0.4}>
                            <div className="flex items-start gap-2.5">
                              <span className="text-neutral-400 mt-1">•</span>
                              <span className="font-normal leading-relaxed">{h}</span>
                            </div>
                          </ScrollItem>
                        ))}
                      </ScrollStagger>
                    </div>

                    <ScrollStagger staggerDelay={0.05} className="flex flex-wrap gap-1.5 pt-2">
                      {project.focusAreas.map((t) => (
                        <ScrollItem key={t} direction="scale" duration={0.3}>
                          <motion.span
                            whileHover={{ scale: 1.05, y: -1 }}
                            transition={{ duration: 0.15 }}
                            className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-xs font-mono cursor-default inline-block"
                          >
                            {t}
                          </motion.span>
                        </ScrollItem>
                      ))}
                    </ScrollStagger>
                  </div>

                  {/* Case Study Summary Card */}
                  <div className="lg:col-span-5">
                    <Link
                      to={project.path}
                      className="block rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 hover:border-neutral-400 transition-all p-5 space-y-4 group shadow-2xs hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                        <span className="font-mono text-xs font-medium text-neutral-700 uppercase tracking-wider">
                          Case Study Architecture
                        </span>
                        <span className="text-xs font-medium text-neutral-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read Details →
                        </span>
                      </div>

                      {project.id === 'nullwave' && project.previewImg ? (
                        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-neutral-900 flex items-center justify-center">
                          <ScrollParallax offset={18} direction="up">
                            <img
                              src={project.previewImg}
                              alt="NullWave Prototype"
                              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            />
                          </ScrollParallax>
                        </div>
                      ) : null}

                      <ScrollStagger staggerDelay={0.06} className="space-y-2.5">
                        {project.cardArchitecture.map((item) => (
                          <ScrollItem key={item.label} direction="up" distance={14} duration={0.35}>
                            <motion.div
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.15 }}
                              className="p-3 bg-white rounded-lg border border-neutral-200 text-xs flex items-center justify-between"
                            >
                              <span className="font-mono text-neutral-500">{item.label}</span>
                              <span className="font-semibold text-neutral-900">{item.val}</span>
                            </motion.div>
                          </ScrollItem>
                        ))}
                      </ScrollStagger>

                      <div className="text-xs text-neutral-500 text-right pt-1 font-mono">
                        Deep Case Study & Operational Data →
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium transition-all inline-flex items-center gap-1.5 border border-neutral-200"
                      >
                        <Globe className="w-3.5 h-3.5 text-neutral-600" />
                        <span>{project.visitLabel}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </motion.a>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to={project.path}
                      className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

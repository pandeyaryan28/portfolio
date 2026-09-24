import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowLeft, Clock, ShieldCheck, Globe, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { ScrollReveal, ScrollStagger, ScrollItem, ScrollParallax } from '../components/ui/ScrollReveal';
import { CaseStudyReadingRail } from '../components/ui/CaseStudyReadingRail';

export const GuildOrbitDetail: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-16">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO PROJECTS</span>
        </Link>
      </motion.div>

      {/* Case Study Header with Staggered Entrance */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 border-b border-neutral-200 pb-10"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider">
          <span>Team Execution Platform</span>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-800 bg-neutral-100 px-3 py-1 rounded border border-neutral-200 font-medium text-xs sm:text-sm">
            Live Production Case Study
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-neutral-950 tracking-tight leading-[1.12]">
          Guild Orbit: Fixing Team Momentum by Uniting Tasks, Chat, and Approvals
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-normal max-w-3xl">
          An operational case study on bringing sprint tasks, discussion threads, and sign-off gates into a single workspace, cutting status meetings by 50% and stopping lost decisions.
        </p>

        {/* Primary Call to Action */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={SITE_LINKS.projects.guildOrbit.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2.5 shadow-xs hover:shadow-md"
          >
            <Globe className="w-4 h-4 text-neutral-300" />
            <span>Visit Guild Orbit</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </motion.a>
        </div>

        {/* Executive Meta Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-100 text-sm sm:text-base">
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Role</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Systems Architect & Product Lead</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Status</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Live in Production</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Scope</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Task Management & Team Communication</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Core Objective</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Clear Context & Fewer Meetings</span>
          </div>
        </div>
      </motion.header>

      {/* Interactive Case Study Reading Progress Rail */}
      <CaseStudyReadingRail
        title="Guild Orbit"
        sections={[
          { id: 'context', label: 'Context' },
          { id: 'bottlenecks', label: 'Key Bottlenecks' },
          { id: 'architecture', label: 'What I Built' },
          { id: 'outcomes', label: 'Results' },
        ]}
      />

      {/* Case Study Section 1: Executive Context & Industry Background */}
      <ScrollReveal direction="up" distance={36} duration={0.6}>
        <section id="context" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            1. The Real Problem in Product Teams
          </h2>
          <div className="space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            <p>
              When fast growing teams start to scale, communication breaks down in predictable ways. People talk about features in messy group chats, track deliverables in separate task boards, and ask for approvals over email or direct messages.
            </p>
            <p>
              Because conversations happen in one app and the work lives in another, context fractures constantly. Important design decisions and scope changes get buried under hundreds of unrelated chat messages. Team members waste hours asking each other where links are, what was decided, and who is currently blocked.
            </p>
            <p>
              Guild Orbit was built to eliminate this chaos. Instead of treating communication as something that happens outside the work, Guild Orbit puts discussions directly inside the task cards so decisions, feedback, and approvals remain permanently attached to the deliverable.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study Section 2: Root Cause Analysis */}
      <section id="bottlenecks" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            2. The Key Bottlenecks
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 01</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Discussions Lost in Chat</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Critical project choices occur in group chats where they get buried within hours. Weeks later, people build against outdated notes because nobody can find the original conversation.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 02</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Disconnected Task Boards</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Standard task boards isolate deliverables into dry cards without the background context. Without quick access to the user feedback and conversations that shaped the task, builders lack clarity on what matters.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 03</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Unclear Approvals</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                When a task needs review from design or testing leads, requests sent through chat get forgotten. Features either ship without proper checks or sit stalled waiting for approvals.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 04</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">The Status Meeting Tax</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Because leaders cannot see real progress across different apps, they set up daily standups and weekly check-in calls. Builders spend hours every week repeating what is already done.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 3: What I Built */}
      <section id="architecture" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            3. What I Built: The Unified Workspace
          </h2>
          <div className="space-y-4 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal mt-2">
            <p>
              I designed and built Guild Orbit to unite communication, task tracking, and approvals into one focused workflow:
            </p>
          </div>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.08} className="space-y-4">
          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  01
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Discussions Tied to Tasks
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Every task card has its own dedicated comment stream. Instead of conversations vanishing in chat channels, all discussions and reasoning stay permanently attached to the work item itself.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Clear Visual Progress Board
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                A clean execution board displays what everyone is working on in real time. If someone is stuck or blocked, they flag it directly on the card, notifying teammates without needing an extra message.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Built-In Sign-Off Checkpoints
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Tasks cannot be marked as complete until designated leads (Design, Security, Testing) approve them. Everyone can see who has reviewed the work, preventing unverified changes from launching.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  04
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Automatic Delivery Tracking
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Project pace is calculated automatically from actual card completions and approvals. Leaders get honest visibility into timelines at a glance, removing the need for daily progress check-in calls.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 4: Measurable Operational Impact */}
      <section id="outcomes" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            4. The Measurable Results
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ScrollItem direction="scale" duration={0.5} className="h-full">
            <ScrollParallax offset={12} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Clock className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">50% Fewer Status Meetings</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Live visual boards and automatic milestone tracking cut recurring update meetings in half.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>

          <ScrollItem direction="scale" duration={0.5} className="h-full">
            <ScrollParallax offset={24} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <MessageSquare className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">100% Decision History</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  All discussions stay attached to the deliverables so past decisions are never lost or forgotten.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>

          <ScrollItem direction="scale" duration={0.5} className="h-full">
            <ScrollParallax offset={12} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <ShieldCheck className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">Zero Unreviewed Releases</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Mandatory sign-offs from lead reviewers ensure every release is verified before going live.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 5: Key Lessons */}
      <ScrollReveal direction="scale" distance={36} duration={0.65}>
        <section className="space-y-6 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            5. Key Takeaways
          </h2>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal shadow-2xs"
          >
            <p className="text-xl sm:text-2xl font-semibold text-neutral-950 leading-snug">
              "Execution speed is not about sending more messages. It is about keeping the conversation right next to the work."
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              When teams rely on endless chat channels, message volume explodes while real clarity shrinks. People spend half their energy asking basic questions about where links are and who approved what.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Guild Orbit proves that anchoring discussions directly to task deliverables removes constant interruptions. Builders have the freedom to focus on shipping, while leaders maintain honest, effortless visibility.
            </p>
          </motion.div>

          <div className="pt-4 flex items-center justify-between">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-base font-medium text-neutral-600 hover:text-neutral-950 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={SITE_LINKS.projects.guildOrbit.url}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2 shadow-xs"
            >
              <Globe className="w-4 h-4 text-neutral-300" />
              <span>Visit Guild Orbit</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </motion.a>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

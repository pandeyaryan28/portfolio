import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowLeft, Clock, ShieldCheck, Globe, ExternalLink, MessageSquare } from 'lucide-react';
import { SITE_LINKS } from '../data/links';

export const GuildOrbitDetail: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-16">
      {/* Back Navigation */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>BACK TO PROJECTS</span>
      </Link>

      {/* Case Study Header */}
      <header className="space-y-6 border-b border-neutral-200 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider">
          <span>Team Execution Platform</span>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-800 bg-neutral-100 px-3 py-1 rounded border border-neutral-200 font-medium text-xs sm:text-sm">
            Live Production Case Study
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-neutral-950 tracking-tight leading-[1.12]">
          Guild Orbit: Solving Context Fragmentation in High-Velocity Teams
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-normal max-w-3xl">
          An operational case study on unifying sprint deliverables, contextual discussion threads, and formal approval gates into a single workspace — cutting status meetings by 50% and eliminating lost decisions.
        </p>

        {/* Primary Call to Action */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={SITE_LINKS.projects.guildOrbit.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2.5 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
          >
            <Globe className="w-4 h-4 text-neutral-300" />
            <span>Visit Guild Orbit</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Executive Meta Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-100 text-sm sm:text-base">
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Role</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Systems Architect & Product Lead</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Status</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Live MVP in Production</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Scope</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Cross-Functional Execution Engine</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Core Objective</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Context Retention & Meeting Reduction</span>
          </div>
        </div>
      </header>

      {/* Case Study Section 1: Executive Context & Industry Background */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          1. Context & The Fragmented Toolchain Trap
        </h2>
        <div className="space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
          <p>
            Modern product and engineering teams operate under intense pressure to ship rapidly. Yet as organizations scale, execution speed reliably deteriorates. The root cause is rarely engineering talent or poor motivation — it is the systemic fragmentation of the team's software stack.
          </p>
          <p>
            In typical organizations, strategy is debated in transient chat channels (Slack, Teams), tasks are logged in disconnected ticket trackers (Jira, Linear), designs live in Figma, and sign-offs are requested over fragmented email threads or direct messages. Context fractures at every transition. Team members spend hours hunting down past agreements, deciphering the rationale behind specifications, or asking colleagues for routine status updates.
          </p>
          <p>
            Guild Orbit was conceived to eliminate this friction by bridging the divide between conversation and execution. Instead of treating communication as a separate stream that happens outside the work, Guild Orbit embeds discussions directly inside deliverable items, establishing total operational visibility.
          </p>
        </div>
      </section>

      {/* Case Study Section 2: Root Cause Analysis */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          2. Root Cause Analysis: Four Structural Points of Failure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 01</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">The Ephemeral Chat Trap</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Crucial architectural trade-offs and product scope decisions occur in continuous chat channels. Within hours, these agreements get buried under hundreds of unrelated messages. Weeks later, engineers build against obsolete requirements because nobody can locate the original discussion.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 02</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Decontextualized Task Trackers</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Standard Kanban and sprint boards isolate tasks into dry, transactional cards. Without immediate access to the conversation, customer feedback, and user research that shaped the task, builders lack intuitive empathy for what they are shipping.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 03</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Ambiguous Review & Sign-Off Ownership</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              When deliverables require cross-functional sign-off (design fidelity, security review, legal clearance), requests sent via direct message stall in recipient inboxes. Work either ships prematurely without proper vetting or gets blocked indefinitely while waiting for unassigned approvals.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Bottleneck 04</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">The Status Meeting Tax</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Because leadership cannot clearly see real-time milestone health across fragmented tools, they institute recurring daily standups and weekly status meetings. Engineering and design leads spend up to a quarter of their working week explaining what is already done.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section 3: Architecture & System Design */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          3. System Architecture: The Unified Execution Model
        </h2>
        <div className="space-y-4 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
          <p>
            Guild Orbit replaces the disconnected patchwork with an integrated execution architecture structured around four core components:
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                01
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                Deliverable-Anchored Discussion Streams
              </h3>
            </div>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
              Every deliverable, milestone, and pull request contains its own dedicated discussion container. Context is permanently pinned to the work item itself. When a new contributor joins a project or a reviewer audits a completed sprint, the entire history of decisions and rationale is right there.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                02
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                Single-Pane Execution Kanban & Blocker Telemetry
              </h3>
            </div>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
              A high-density sprint execution board tracks work progress across engineering, design, and product tracks in real-time. Team members explicitly flag dependency blockers, immediately notifying upstream owners without requiring ad-hoc messaging.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                03
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                Multi-Stage Governance & Structured Sign-Off Gates
              </h3>
            </div>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
              Milestones cannot transition to 'Complete' until designated reviewers explicitly approve their respective gates (Design Quality, Test Verification, Executive Authorization). Approval states are transparent to the entire organization, eliminating unreviewed deployments.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                04
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                Automated Milestone Velocity & Delivery Analytics
              </h3>
            </div>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
              Progress telemetry is computed automatically from actual state changes and sign-off completion rather than subjective manual status entries. Leadership receives accurate delivery pace visibility at a glance, removing the need for interruptive progress check-in calls.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section 4: Measurable Operational Impact */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          4. Measurable Operational Outcomes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3">
            <Clock className="w-7 h-7 text-neutral-700" />
            <h3 className="text-2xl font-semibold text-neutral-900">50% Fewer Status Meetings</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Ambient milestone telemetry and visible blocker tracking give leadership total visibility, eliminating repetitive sync meetings.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3">
            <MessageSquare className="w-7 h-7 text-neutral-700" />
            <h3 className="text-2xl font-semibold text-neutral-900">100% Decision Auditability</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Anchor threads directly to deliverables, guaranteeing past architectural and scope decisions are never lost or forgotten.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3">
            <ShieldCheck className="w-7 h-7 text-neutral-700" />
            <h3 className="text-2xl font-semibold text-neutral-900">Zero Unreviewed Releases</h3>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Formal sign-off gates enforce peer, security, and design approvals prior to launch, preventing unvetted code regressions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section 5: Operator Reflections & Lessons */}
      <section className="space-y-6 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          5. Operator Reflections: Context Density Over Communication Volume
        </h2>
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-semibold text-neutral-950 leading-snug">
            "Execution velocity is not about sending more messages. It is about maximizing context density per interaction."
          </p>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            When teams adopt modern chat apps, they confuse message volume with productivity. High channel chatter often masks severe operational confusion. Team members spend half their energy asking basic questions: Where is the design link? Who approved this copy? Is this blocked by backend?
          </p>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            Building Guild Orbit taught us that when you structure information architecture around deliverables rather than open chat channels, you drastically reduce cognitive load. Autonomy increases because every builder has immediate, unambiguous clarity on what needs to be delivered, why it matters, and who owns the sign-off.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-base font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>

          <a
            href={SITE_LINKS.projects.guildOrbit.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2 shadow-xs"
          >
            <Globe className="w-4 h-4 text-neutral-300" />
            <span>Visit Guild Orbit</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </section>
    </div>
  );
};

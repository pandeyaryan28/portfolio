import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowLeft, Clock, DollarSign, ShieldCheck, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { ScrollReveal, ScrollStagger, ScrollItem, ScrollParallax } from '../components/ui/ScrollReveal';
import { CaseStudyReadingRail } from '../components/ui/CaseStudyReadingRail';

export const UniCareDetail: React.FC = () => {
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
          <span>Healthcare Operations Infrastructure</span>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-800 bg-neutral-100 px-3 py-1 rounded border border-neutral-200 font-medium text-xs sm:text-sm">
            Live Production Case Study
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-neutral-950 tracking-tight leading-[1.12]">
          UniCare: Re-engineering Outpatient Healthcare Operations
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-normal max-w-3xl">
          An operational case study on designing and deploying a unified clinic management platform that eliminates intake queues, ends pharmacy inventory expiration, and cuts patient medicine costs by up to 90%.
        </p>

        {/* Primary Call to Action */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={SITE_LINKS.projects.unicare.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2.5 shadow-xs hover:shadow-md"
          >
            <Globe className="w-4 h-4 text-neutral-300" />
            <span>Visit UniCare</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </motion.a>
        </div>

        {/* Executive Meta Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-100 text-sm sm:text-base">
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Role</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Product Architect & Systems Operator</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Status</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Live MVP in Production</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Scope</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Full-Stack Clinical & Pharmacy Flow</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Core Objective</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Zero Waste, High-Velocity Intake</span>
          </div>
        </div>
      </motion.header>

      {/* Interactive Case Study Reading Progress Rail */}
      <CaseStudyReadingRail
        title="UniCare"
        sections={[
          { id: 'context', label: 'Context' },
          { id: 'bottlenecks', label: 'Root Bottlenecks' },
          { id: 'architecture', label: 'Architecture' },
          { id: 'outcomes', label: 'Outcomes' },
        ]}
      />

      {/* Case Study Section 1: Executive Context & Problem Space */}
      <ScrollReveal direction="up" distance={36} duration={0.6}>
        <section id="context" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            1. Context & The Outpatient Operational Crisis
          </h2>
          <div className="space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            <p>
              Outpatient clinics and independent healthcare centers operate in high-friction environments. During peak morning and evening consultation windows, reception areas get overwhelmed with dozens of simultaneous patient arrivals. Front-desk staff juggle ringing telephones, handwriting physical paper logbooks, and manually searching through physical filing cabinets for returning patient files.
            </p>
            <p>
              The consequences of this operational friction ripple through the entire clinical value chain: patients face 45-minute lobby waits before ever seeing a doctor; physicians conduct consultations under extreme time stress with fragmented historical context; and clinic dispensaries silently hemorrhage revenue through expired medicine write-offs.
            </p>
            <p>
              Existing hospital enterprise resource planning (ERP) suites are bloated, prohibitively expensive, and require weeks of staff training. Small-to-mid clinics abandon them because they slow down consultations rather than accelerating them. UniCare was built from first principles to solve this operational breakdown through lean, low-latency workflow automation.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study Section 2: Root Bottlenecks */}
      <section id="bottlenecks" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            2. Root Cause Analysis: Four Systemic Failures
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
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Manual Front-Desk Intake Congestion</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Manual clipboard sign-ins and identity re-verification take 10 to 15 minutes per patient. Clerical handwriting errors result in duplicate patient IDs, misplaced allergy notes, and crowded waiting lobbies that distress patients before consultations begin.
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
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Clinical Context Fragmentation</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Doctors lack quick visibility into past visit history, chronic diagnostics, and allergy flags. When past charts are filed away in paper folders or incompatible portals, doctors waste valuable minutes re-asking basic history or ordering redundant tests.
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
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Prescription Cost Inflation & Non-Adherence</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Physicians naturally recall heavily marketed brand names when writing prescriptions. Without real-time formulary visibility, patients receive scripts for branded drugs costing up to 10x more than bioequivalent generics, causing prescription abandonment at the pharmacy counter.
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
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Dispensary Expiration & Margin Erosion</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Without automated batch rotation, dispensary staff stock new deliveries on front shelves while older batches sit in the back. Clinics write off 4% to 8% of pharmacy stock annually due to expired medicines, eroding pharmacy operating margins.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 3: Architecture & Engineering Workflow */}
      <section id="architecture" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            3. System Architecture & The Unified Operational Flow
          </h2>
          <div className="space-y-4 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal mt-2">
            <p>
              UniCare eliminates these bottlenecks by integrating every step of the patient journey into a single synchronized state machine. Each touchpoint directly feeds the next without redundant data entry:
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
                  Contactless Intake & Instant Token Allocation
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Returning patients scan a personal digital QR pass upon arrival at the clinic. The system immediately retrieves their encrypted profile, generates a sequential consultation token, alerts the nursing desk, and dispatches their position to lobby display screens. Front-desk intake time drops from 12+ minutes to under 10 seconds.
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
                  Single-Pane Clinical Consultation & Longitudinal History
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                When a doctor calls the next token, the patient's vitals, past diagnoses, chronic conditions, and previous prescriptions load instantaneously on a low-latency consultation desk. Physicians capture observations in structured notes designed to minimize keystrokes, ensuring medical context is preserved without disrupting patient dialogue.
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
                  Real-Time Therapeutic Substitution Engine
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                As a physician types a medication name, the prescribing engine parses the active molecule and interrogates current in-stock dispensary inventory. It displays verified generic bioequivalents alongside their wholesale and retail prices. Clinicians can substitute costly brand-name drugs with high-quality generic equivalents in a single click, saving patients up to 90% on their bill.
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
                  First-Expired, First-Out (FEFO) Dispensary Automation
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Prescriptions stream directly to the pharmacy dispensary screen the moment the doctor confirms them. The inventory system algorithmically selects the exact batch number with the nearest valid expiry date (FEFO). Pharmacists simply scan the pre-assigned batch barcode to dispense, eliminating expired stock write-offs and safeguarding clinic margins.
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
                  05
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Lobby Queue Orchestration & Digital Signage
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                A dedicated lightweight display route runs on lobby TV monitors. Tokens transition automatically between 'Waiting', 'In Consultation', and 'Pharmacy Ready', providing ambient visibility that calms patient anxiety and eliminates repetitive staff announcements.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 4: Measurable Operational Impact */}
      <section id="outcomes" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            4. Measurable Operational Outcomes
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
                <h3 className="text-2xl font-semibold text-neutral-900">Under 10s Intake</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Replaces 12-minute clipboard intake queues with instant QR token scan, completely eliminating morning lobby bottlenecks.
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
                <DollarSign className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">Up to 90% Drug Savings</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Real-time generic drug matching allows doctors to prescribe bioequivalent alternatives, dramatically improving patient treatment adherence.
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
                <h3 className="text-2xl font-semibold text-neutral-900">Zero Expiration Loss</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  FEFO-driven automated inventory batch allocation routes near-expiry inventory first, eliminating 4% to 8% clinic inventory write-offs.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 5: Operator Reflections & Lessons */}
      <ScrollReveal direction="scale" distance={36} duration={0.65}>
        <section className="space-y-6 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            5. Operator Reflections: Engineering for Real Clinical Reality
          </h2>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal shadow-2xs"
          >
            <p className="text-xl sm:text-2xl font-semibold text-neutral-950 leading-snug">
              "Clinical software does not fail on technical capability; it fails on cognitive friction."
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              When designing systems for busy clinical environments, every additional form field or modal window is an invitation for user abandonment. Doctors who see 40 to 60 patients a day cannot spend 3 minutes typing detailed ICD-10 administrative codes into dense interfaces. If the software takes more than 15 seconds to prescribe a treatment, clinicians will revert to paper pads immediately.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              The success of UniCare stems from ruthless workflow compression. By treating clinic operations as an integrated physical-digital system — intake, consult, dispense — we removed clerical friction at each juncture. The result is a platform that healthcare workers actually want to use, proving that modern software can drive clinical efficiency while directly lowering healthcare costs for patients.
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
              href={SITE_LINKS.projects.unicare.url}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2 shadow-xs"
            >
              <Globe className="w-4 h-4 text-neutral-300" />
              <span>Visit UniCare</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </motion.a>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

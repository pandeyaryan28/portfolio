import React from 'react';
import { useRouter } from '../context/RouterContext';
import { StatusPill } from '../components/ui/StatusPill';
import { SectionBadge } from '../components/ui/SectionBadge';
import { ProductMockupUniCare } from '../components/visual/ProductMockupUniCare';
import { useSound } from '../context/SoundContext';
import { ArrowLeft, Shield, Network, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface UniCareDetailProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const UniCareDetail: React.FC<UniCareDetailProps> = ({ isModal = false, onClose }) => {
  const { navigate } = useRouter();
  const { playClick } = useSound();

  const builtComponents = [
    {
      title: 'Patient-Owned Health Wallet',
      code: 'UC-XXXXXXXX',
      desc: 'Self-sovereign health vault with cryptographic document provenance, verifiable consent delegations, and instant QR pass.',
    },
    {
      title: 'Doctor Consultation & Clinical Charting',
      code: 'apps/doctors-unicare',
      desc: 'High-speed clinical console featuring instant longitudinal chart lookup, vitals trendlines, and streamlined diagnosis capture.',
    },
    {
      title: 'Stock-Aware Rx & Generic Molecule Swap',
      code: 'R5 Protocol',
      desc: 'Live clinic pharmacy stock cross-reference; automatically detects out-of-stock brands and suggests bioequivalent molecule replacements in 1 click.',
    },
    {
      title: 'Reception Fast Intake (<10s)',
      code: 'html5-qrcode',
      desc: 'Fast QR barcode check-in at triage, generating OPD tokens and routing patients to target specialist rooms in under 10 seconds.',
    },
    {
      title: 'Real-Time Triage Vitals Sync',
      code: 'Live Telemetry',
      desc: 'Direct streaming of blood pressure, pulse, SpO2, temp, weight, and BMI from triage station into the consulting physician’s workspace.',
    },
    {
      title: 'FEFO Medicine Inventory Engine',
      code: 'apps/clinics-unicare',
      desc: 'Dual-layer batch tracking with First-Expired-First-Out automated deduction on prescription dispense and 30/60/90-day expiry warning cascades.',
    },
    {
      title: 'Fullscreen TV Waiting Room Kiosk',
      code: '/display Kiosk',
      desc: 'Dedicated display route with calling token banner and Web Audio synthesized hospital chime.',
    },
  ];

  const handleBack = () => {
    playClick();
    if (isModal && onClose) {
      onClose();
    } else {
      navigate('/#work');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`max-w-4xl mx-auto ${isModal ? 'py-4' : 'min-h-screen pt-28 pb-24 px-4 sm:px-8'}`}
    >
      {/* Back Button */}
      {!isModal && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ARCHIVE</span>
        </button>
      )}

      {/* Header Info */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <SectionBadge label="SYSTEM 01" index="LIVE" />
          <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">/</span>
          <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase">Healthcare Infrastructure</span>
          <StatusPill status="MVP LIVE" type="live" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary">
          UniCare
        </h1>

        <p className="text-lg sm:text-xl text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
          A patient-owned health wallet and doctor platform designed to bring medical records, consultations and clinic workflows into one connected system.
        </p>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-ink-border/60 dark:border-white/10 py-4 text-xs font-mono">
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">My Role</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Strategy, Architecture & Execution</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Current Status</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">MVP Live in Production Staging</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Category</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Clinical Operating System</span>
          </div>
        </div>
      </div>

      {/* Primary Visual Showcase */}
      <div className="my-10 sm:my-14">
        <ProductMockupUniCare interactive={true} />
      </div>

      {/* Deep-dive Narrative Content */}
      <div className="space-y-14 max-w-3xl">
        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Overview
          </h2>
          <p className="text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
            UniCare was conceptualized and engineered to address the critical friction at the point of care: patients do not truly own their longitudinal medical history, and doctors spend disproportionate energy navigating disconnected software systems.
          </p>
        </section>

        {/* Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            The Problem Invariant
          </h2>
          <div className="p-6 rounded-2xl bg-canvas-soft dark:bg-stone-900/60 border border-ink-border/80 dark:border-white/10 space-y-3">
            <p className="text-base text-ink-primary dark:text-ink-dark-primary leading-relaxed font-medium">
              Healthcare information is fragmented across hospitals, clinics, labs and patients, making it difficult to access and share medical information when it is needed.
            </p>
            <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
              When patients transition between care providers or specialty clinics, diagnostic history is routinely lost, duplicated, or delayed by manual paperwork. This creates diagnostic blindspots and administrative overhead.
            </p>
          </div>
        </section>

        {/* Solution & What I Built */}
        <section className="space-y-6">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            What I Built & Engineered
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {builtComponents.map((item, idx) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white/90 dark:bg-stone-900/80 border border-ink-border/60 dark:border-white/10 hover:border-ink-border dark:hover:border-white/20 transition-all flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-6 h-6 rounded-md bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-ink-secondary dark:text-ink-dark-secondary font-mono text-[11px] shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">{item.title}</h3>
                    <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">{item.code}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            System Architecture
          </h2>
          <div className="bg-[#FAF9F5] dark:bg-black/40 p-6 rounded-2xl border border-ink-border dark:border-white/10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-ink-border dark:border-white/10 shadow-xs">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h4 className="font-semibold text-ink-primary dark:text-ink-dark-primary">Consent Layer</h4>
                <p className="text-ink-secondary dark:text-ink-dark-secondary mt-1 text-[11px]">Time-limited cryptographic access tokens for doctors and labs.</p>
              </div>
              <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-ink-border dark:border-white/10 shadow-xs">
                <Database className="w-4 h-4 text-blue-600 dark:text-cyan-400 mb-2" />
                <h4 className="font-semibold text-ink-primary dark:text-ink-dark-primary">Document Vault</h4>
                <p className="text-ink-secondary dark:text-ink-dark-secondary mt-1 text-[11px]">Encrypted medical record storage with automated format normalization.</p>
              </div>
              <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-ink-border dark:border-white/10 shadow-xs">
                <Network className="w-4 h-4 text-purple-600 dark:text-purple-400 mb-2" />
                <h4 className="font-semibold text-ink-primary dark:text-ink-dark-primary">Inter-Clinic Mesh</h4>
                <p className="text-ink-secondary dark:text-ink-dark-secondary mt-1 text-[11px]">Sub-second QR lookup protocol for rapid emergency and triage check-in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Status & Future Direction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Current Status & Future Direction
          </h2>
          <div className="space-y-3 text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
            <p>
              <strong className="font-medium text-ink-primary dark:text-ink-dark-primary">Status: MVP Live.</strong> The core end-to-end loop—from patient record generation to doctor verification, stock-aware Rx composition, FEFO pharmacy dispense, and TV waiting room chime—is fully functional.
            </p>
            <p>
              <strong className="font-medium text-ink-primary dark:text-ink-dark-primary">Future Direction:</strong> Deepening integration with laboratory API standards (HL7/FHIR compatibility) and refining the patient identity interface for zero-friction cross-border travel health verification.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { StatusPill } from '../components/ui/StatusPill';
import { SectionBadge } from '../components/ui/SectionBadge';
import { HardwareRenderNullWave } from '../components/visual/HardwareRenderNullWave';
import { ArrowLeft, Sparkles, MicOff, Wind, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface NullWaveDetailProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const NullWaveDetail: React.FC<NullWaveDetailProps> = ({ isModal = false, onClose }) => {
  const { navigate } = useRouter();

  const corePillars = [
    {
      title: 'Acoustic Voice Containment',
      icon: MicOff,
      desc: 'Internal acoustic absorption chamber that captures speech sound waves, allowing users to speak at normal conversational volume in crowded cafes or transit without any sound escaping.',
    },
    {
      title: 'Whisper-Quiet Bladeless Micro-Airflow',
      icon: Wind,
      desc: 'Continuous non-turbulent air circulation system ensuring hours of thermal comfort without microphone turbulence or annoying motor hum.',
    },
    {
      title: 'Real-Time Bidirectional Speech Translation',
      icon: Volume2,
      desc: 'Direct integration with translation engines providing near-zero latency multilingual audio sync directly to the user’s ear canal.',
    },
    {
      title: 'AI Automated Meeting Transcription',
      icon: Sparkles,
      desc: 'Continuous background transcription and structured action-item extraction for confidential executive calls and discussions.',
    },
  ];

  const iterationStudies = [
    {
      phase: 'Iteration 01 — Volume & Silhouette Contours',
      focus: 'Balancing ergonomic facial contours and jaw articulation with internal sound-damping cavity volume.',
    },
    {
      phase: 'Iteration 02 — Material & CMF Selection',
      focus: 'Pairing grade-5 matte titanium outer shield with hypoallergenic medical-grade silicone contact seals.',
    },
    {
      phase: 'Iteration 03 — Acoustic Absorption Matrix',
      focus: 'Fine-tuning multi-frequency porous chamber baffles to neutralize high-frequency sibilance and vocal resonance.',
    },
    {
      phase: 'Iteration 04 — Micro-Airflow Integration',
      focus: 'Integrating whisper-quiet bladeless micro-ducting along the perimeter for optimal thermal regulation.',
    },
  ];

  const handleBack = () => {
    if (isModal && onClose) {
      onClose();
    } else {
      navigate('/#ongoing');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`max-w-4xl mx-auto ${isModal ? 'py-4' : 'min-h-screen pt-28 pb-24 px-6 sm:px-10'}`}
    >
      {/* Back Button */}
      {!isModal && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ARCHIVE</span>
        </button>
      )}

      {/* Header Info */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <SectionBadge label="PROJECT 03" />
          <span className="font-mono text-xs text-ink-tertiary">/</span>
          <span className="font-mono text-xs text-ink-secondary uppercase">Hardware / Product</span>
          <StatusPill status="IN DEVELOPMENT" type="development" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-sans font-medium tracking-tight text-ink-primary">
          NullWave
        </h1>

        <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-light">
          Exploring the intersection of function, form and identity through a new generation of ergonomic wearable hardware.
        </p>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-ink-border/60 py-4 text-xs font-mono">
          <div>
            <span className="text-ink-tertiary block text-[10px] uppercase">Core Mission</span>
            <span className="text-ink-primary font-medium">Building the Future of Voice</span>
          </div>
          <div>
            <span className="text-ink-tertiary block text-[10px] uppercase">Current Phase</span>
            <span className="text-ink-primary font-medium">Prototyping & Form Studies</span>
          </div>
          <div>
            <span className="text-ink-tertiary block text-[10px] uppercase">Category</span>
            <span className="text-ink-primary font-medium">Wearable Voice Privacy</span>
          </div>
        </div>
      </div>

      {/* Primary Hardware Visual Stage */}
      <div className="my-10 sm:my-14">
        <HardwareRenderNullWave interactive={true} />
      </div>

      {/* Narrative & Visual Exploration */}
      <div className="space-y-14 max-w-3xl">
        {/* Core Thesis */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary tracking-tight">
            Design Thesis & Identity
          </h2>
          <div className="p-6 rounded-2xl bg-canvas-soft border-l-2 border-l-neutral-900 border-y border-r border-ink-border/80">
            <p className="text-lg sm:text-xl font-serif italic text-ink-primary">
              “The future of voice interaction is not possible without privacy.”
            </p>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed font-light">
              As AI models become voice-first and remote collaboration dominates, speaking aloud in shared or public environments remains a major friction point. NullWave solves acoustic leakage while crafting an understated, premium fashion statement.
            </p>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary tracking-tight">
            Hardware & Acoustic Subsystems
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/90 border border-ink-border/60 hover:border-ink-border transition-all space-y-2"
                >
                  <div className="flex items-center gap-2 text-ink-primary">
                    <Icon className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design Iterations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sans font-semibold text-ink-primary tracking-tight">
              Design Iterations & Physical Studies
            </h2>
            <span className="font-mono text-xs text-ink-tertiary">04 CYCLES</span>
          </div>

          <div className="space-y-3">
            {iterationStudies.map((study) => (
              <div
                key={study.phase}
                className="p-5 rounded-2xl bg-white/80 border border-ink-border/60 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <h3 className="text-sm font-semibold text-ink-primary font-mono">{study.phase}</h3>
                </div>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-light pl-3.5">
                  {study.focus}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

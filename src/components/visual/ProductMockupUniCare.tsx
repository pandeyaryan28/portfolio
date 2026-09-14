import React, { useState, useEffect } from 'react';
import { QrCode, Tv, RefreshCw, Pill, Activity, CheckCircle2, Clock, Volume2 } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const ProductMockupUniCare: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeWorkflow, setActiveWorkflow] = useState<'reception' | 'triage' | 'doctor' | 'pharmacy' | 'kiosk'>('doctor');
  const [genericSubstituted, setGenericSubstituted] = useState(false);
  const [ecgOffset, setEcgOffset] = useState(0);
  const { playClick, playPop, playChime } = useSound();

  // Animate ECG pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setEcgOffset((prev) => (prev + 4) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleWorkflowChange = (wf: 'reception' | 'triage' | 'doctor' | 'pharmacy' | 'kiosk') => {
    playClick();
    setActiveWorkflow(wf);
    if (wf === 'kiosk') {
      playChime();
    }
  };

  const handleSwap = () => {
    playPop();
    setGenericSubstituted((prev) => !prev);
  };

  return (
    <div className="w-full bg-[#F6F5F0] dark:bg-[#121217] rounded-3xl p-4 sm:p-7 border border-ink-border dark:border-white/10 shadow-glass-md overflow-hidden transition-all duration-300 relative group">
      {/* Background noise */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ink-border/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-ink-primary dark:text-ink-dark-primary font-semibold uppercase tracking-wider">
            UniCare // Clinical OS
          </span>
        </div>

        {interactive && (
          <div className="flex items-center flex-wrap gap-1 bg-white/80 dark:bg-black/60 backdrop-blur-md p-1 rounded-xl border border-ink-border dark:border-white/10 text-xs">
            <button
              onClick={() => handleWorkflowChange('reception')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'reception'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              01 Reception QR
            </button>
            <button
              onClick={() => handleWorkflowChange('triage')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'triage'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              02 Vitals Sync
            </button>
            <button
              onClick={() => handleWorkflowChange('doctor')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'doctor'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              03 Doctor EMR
            </button>
            <button
              onClick={() => handleWorkflowChange('pharmacy')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'pharmacy'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              04 FEFO Pharmacy
            </button>
            <button
              onClick={() => handleWorkflowChange('kiosk')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'kiosk'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              05 TV Kiosk
            </button>
          </div>
        )}
      </div>

      {/* Main Stage */}
      <div className="relative z-10 my-4 sm:my-5 rounded-2xl bg-white dark:bg-[#181820] p-4 sm:p-6 border border-ink-border dark:border-white/10 shadow-inner min-h-[290px] flex flex-col justify-between">
        {/* Reception Module */}
        {activeWorkflow === 'reception' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50 dark:border-white/10">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase">
                  Telemetry Module 01
                </span>
                <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                  &lt;10s Rapid QR Intake Check-in
                </h4>
              </div>
              <span className="font-mono text-xs bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                TOKEN #A-14 ALLOCATED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-ink-border/60 dark:border-white/5 flex items-center gap-3.5">
                <div className="p-2.5 bg-white dark:bg-black rounded-xl border border-ink-border dark:border-white/10 shadow-xs">
                  <QrCode className="w-10 h-10 text-neutral-900 dark:text-white" />
                </div>
                <div className="text-xs">
                  <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">
                    Sovereign Patient Pass
                  </span>
                  <p className="font-semibold text-ink-primary dark:text-ink-dark-primary font-mono text-sm">
                    UID: UC-8942-019X
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Zero-Knowledge Auth Verified
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-ink-border/60 dark:border-white/5 text-xs space-y-2">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary uppercase">
                  Automated Routing Gateway
                </span>
                <p className="font-medium text-ink-primary dark:text-ink-dark-primary">
                  Room 204 · Dr. Sarah Mehta (Cardiology Specialist)
                </p>
                <div className="flex items-center gap-2 text-ink-secondary dark:text-ink-dark-secondary text-[11px] font-mono">
                  <Clock className="w-3 h-3 text-amber-500" />
                  <span>Estimated Wait: 4 minutes</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Triage Vitals Sync */}
        {activeWorkflow === 'triage' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50 dark:border-white/10">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">
                  Telemetry Module 02
                </span>
                <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                  Real-Time Biometric Vitals Stream
                </h4>
              </div>
              <span className="font-mono text-xs text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-cyan-800 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 animate-pulse text-blue-600 dark:text-cyan-400" />
                <span>LIVE STREAMING TO EMR</span>
              </span>
            </div>

            {/* Live ECG Waveform Animation */}
            <div className="h-12 bg-neutral-900 rounded-xl px-4 flex items-center overflow-hidden relative">
              <svg className="w-full h-8" viewBox="0 0 360 40">
                <path
                  d={`M0 20 L40 20 L50 5 L60 35 L70 12 L80 24 L90 20 L160 20 L170 5 L180 35 L190 12 L200 24 L210 20 L280 20 L290 5 L300 35 L310 12 L320 24 L330 20 L360 20`}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="360"
                  strokeDashoffset={-ecgOffset}
                />
              </svg>
              <span className="absolute right-3 top-2 text-[9px] font-mono text-emerald-400">
                LEAD II · SINUS RHYTHM
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-ink-border/60 dark:border-white/5 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">BP (SYS/DIA)</span>
                <span className="text-base font-bold text-ink-primary dark:text-ink-dark-primary font-mono">120 / 78</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block">Normotensive</span>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-ink-border/60 dark:border-white/5 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">PULSE RATE</span>
                <span className="text-base font-bold text-ink-primary dark:text-ink-dark-primary font-mono">72 bpm</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block">Normal Sinus</span>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-ink-border/60 dark:border-white/5 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">SpO2 (OXYGEN)</span>
                <span className="text-base font-bold text-ink-primary dark:text-ink-dark-primary font-mono">99 %</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block">Atmospheric</span>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-ink-border/60 dark:border-white/5 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">CORE TEMP</span>
                <span className="text-base font-bold text-ink-primary dark:text-ink-dark-primary font-mono">98.4 °F</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block">Afebrile</span>
              </div>
            </div>
          </div>
        )}

        {/* Doctor EMR Consultation & Molecule Swap */}
        {activeWorkflow === 'doctor' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50 dark:border-white/10">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">
                  Telemetry Module 03
                </span>
                <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                  Stock-Aware Molecule Swap Engine
                </h4>
              </div>
              <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">
                ACTIVE CONSULTATION
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-ink-border/60 dark:border-white/5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-ink-primary dark:text-ink-dark-primary block text-sm">
                      {genericSubstituted ? 'Atorvastatin Calcium 20mg (Direct Generic)' : 'Lipitor 20mg (Brand Name)'}
                    </span>
                    <span className="text-[11px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
                      {genericSubstituted ? 'Bioequivalent Molecule Swap Applied' : 'Prescribed by Brand Name'}
                    </span>
                  </div>
                </div>

                <span className={`font-mono text-[11px] px-2.5 py-1 rounded-lg border font-semibold ${
                  genericSubstituted
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                    : 'bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800'
                }`}>
                  {genericSubstituted ? '✓ IN CLINIC STOCK (140 UNITS)' : '✕ BRAND OUT OF STOCK'}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-black/40 border border-ink-border/50 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[11px] text-ink-secondary dark:text-ink-dark-secondary block">
                    Patient Cost Impact:
                  </span>
                  <span className="font-mono font-bold text-ink-primary dark:text-ink-dark-primary text-sm">
                    {genericSubstituted ? '$14.00 (90.5% Cost Reduction)' : '$148.00 (Standard Retail)'}
                  </span>
                </div>

                <button
                  onClick={handleSwap}
                  className="px-3.5 py-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-mono text-xs hover:bg-neutral-800 dark:hover:bg-stone-200 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{genericSubstituted ? 'Revert to Brand' : '1-Click Molecule Swap'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pharmacy Module */}
        {activeWorkflow === 'pharmacy' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50 dark:border-white/10">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">
                  Telemetry Module 04
                </span>
                <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                  FEFO (First-Expired-First-Out) Auto-Deduction
                </h4>
              </div>
              <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                DISPENSE PIPELINE
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-ink-border/50 dark:border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink-primary dark:text-ink-dark-primary">
                    Batch #ATV-2026-08 (Expires: Oct 2026)
                  </p>
                  <p className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary font-mono">
                    Earliest expiration date · Priority Dispense Queue
                  </p>
                </div>
                <span className="font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30 text-xs">
                  Auto-Allocated
                </span>
              </div>

              <div className="p-3 rounded-xl bg-stone-50/50 dark:bg-stone-900/30 border border-ink-border/30 dark:border-white/5 flex items-center justify-between opacity-50">
                <div>
                  <p className="font-medium text-ink-primary dark:text-ink-dark-primary">
                    Batch #ATV-2027-02 (Expires: Feb 2027)
                  </p>
                  <p className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary font-mono">
                    Secondary inventory vault
                  </p>
                </div>
                <span className="font-mono text-ink-tertiary dark:text-ink-dark-tertiary text-xs">
                  Reserved
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TV Waiting Kiosk Module */}
        {activeWorkflow === 'kiosk' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50 dark:border-white/10">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">
                  Telemetry Module 05
                </span>
                <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                  Fullscreen TV Queue Kiosk + Acoustic Chime
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary">
                <Tv className="w-3.5 h-3.5 text-amber-500" />
                <span>/display ROUTE</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 text-white text-center space-y-3 shadow-glass-lg border border-white/10">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">
                NOW CALLING
              </span>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-amber-400 font-mono animate-pulse">
                TOKEN #A-14
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Please proceed to Room 204 (Cardiology)
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => playChime()}
                  className="text-[11px] font-mono bg-stone-800 hover:bg-stone-700 text-stone-200 px-3.5 py-1.5 rounded-full border border-stone-700 flex items-center gap-1.5 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Play Hospital Audio Chime</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feature Pillar Highlights */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs font-mono">
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">01 / INTAKE</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">&lt;10s QR Flow</span>
        </div>
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">02 / TELEMETRY</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">Molecule Swap</span>
        </div>
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">03 / INVENTORY</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">FEFO Batches</span>
        </div>
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary block">04 / KIOSK</span>
          <span className="font-semibold text-ink-primary dark:text-ink-dark-primary text-xs">Audio Chimes</span>
        </div>
      </div>
    </div>
  );
};

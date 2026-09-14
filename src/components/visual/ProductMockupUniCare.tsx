import React, { useState } from 'react';
import { QrCode, Tv, RefreshCw, Pill } from 'lucide-react';

export const ProductMockupUniCare: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeWorkflow, setActiveWorkflow] = useState<'reception' | 'triage' | 'doctor' | 'pharmacy' | 'kiosk'>('doctor');
  const [genericSubstituted, setGenericSubstituted] = useState(false);

  return (
    <div className="w-full bg-[#F6F5F0] rounded-3xl p-4 sm:p-7 border border-ink-border shadow-glass-md overflow-hidden transition-all duration-300 relative group">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ink-border/60">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs text-ink-primary font-semibold uppercase tracking-wider">
            UniCare // Clinical Operating System
          </span>
        </div>

        {interactive && (
          <div className="flex items-center flex-wrap gap-1 bg-white/80 backdrop-blur-md p-1 rounded-xl border border-ink-border text-xs">
            <button
              onClick={() => setActiveWorkflow('reception')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'reception'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Reception QR
            </button>
            <button
              onClick={() => setActiveWorkflow('triage')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'triage'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Triage Vitals
            </button>
            <button
              onClick={() => setActiveWorkflow('doctor')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'doctor'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Doctor EMR
            </button>
            <button
              onClick={() => setActiveWorkflow('pharmacy')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'pharmacy'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Pharmacy FEFO
            </button>
            <button
              onClick={() => setActiveWorkflow('kiosk')}
              className={`px-2.5 py-1 rounded-lg transition-all font-mono text-[11px] ${
                activeWorkflow === 'kiosk'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              TV Kiosk
            </button>
          </div>
        )}
      </div>

      {/* Main Workflow Visualization Stage */}
      <div className="relative z-10 my-4 sm:my-6 rounded-2xl bg-white p-4 sm:p-6 border border-ink-border shadow-inner min-h-[300px] flex flex-col justify-between">
        {activeWorkflow === 'reception' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary uppercase">Module 01</span>
                <h4 className="text-sm font-semibold text-ink-primary">&lt;10s Rapid QR Intake Check-in</h4>
              </div>
              <span className="font-mono text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                TOKEN #A-14 DISPATCHED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-ink-border/60 flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-ink-border">
                  <QrCode className="w-10 h-10 text-neutral-800" />
                </div>
                <div className="text-xs">
                  <span className="font-mono text-[10px] text-ink-tertiary">Patient Identifier</span>
                  <p className="font-semibold text-ink-primary">UID: UC-8942-019X</p>
                  <p className="text-[11px] text-emerald-700 font-mono mt-0.5">✓ Self-Sovereign Auth Passed</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-ink-border/60 text-xs space-y-1.5">
                <span className="font-mono text-[10px] text-ink-tertiary">Triage Dispatch Destination</span>
                <p className="font-medium text-ink-primary">Room 204 · Dr. Sarah Mehta (Cardiology)</p>
                <p className="text-ink-secondary text-[11px]">Auto-queued to TV Waiting Kiosk & Triage Desk</p>
              </div>
            </div>
          </div>
        )}

        {activeWorkflow === 'triage' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary">Module 02</span>
                <h4 className="text-sm font-semibold text-ink-primary">Real-Time Vitals Telemetry Sync</h4>
              </div>
              <span className="font-mono text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                LIVE STREAMING TO EMR
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-stone-50 rounded-xl border border-ink-border/60 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary block">BP (SYS/DIA)</span>
                <span className="text-base font-bold text-ink-primary">120 / 78</span>
                <span className="text-[10px] font-mono text-emerald-700 block">Optimal</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-ink-border/60 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary block">PULSE RATE</span>
                <span className="text-base font-bold text-ink-primary">72 bpm</span>
                <span className="text-[10px] font-mono text-emerald-700 block">Normal Sinus</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-ink-border/60 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary block">OXYGEN (SpO2)</span>
                <span className="text-base font-bold text-ink-primary">99 %</span>
                <span className="text-[10px] font-mono text-emerald-700 block">Atmospheric</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-ink-border/60 text-center">
                <span className="font-mono text-[10px] text-ink-tertiary block">BODY TEMP</span>
                <span className="text-base font-bold text-ink-primary">98.4 °F</span>
                <span className="text-[10px] font-mono text-emerald-700 block">Afebrile</span>
              </div>
            </div>
          </div>
        )}

        {activeWorkflow === 'doctor' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary">Module 03</span>
                <h4 className="text-sm font-semibold text-ink-primary">Stock-Aware Prescription & Molecule Swap</h4>
              </div>
              <span className="font-mono text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                ACTIVE CONSULTATION
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-ink-border/60 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-ink-secondary" />
                  <span className="font-medium text-ink-primary">
                    {genericSubstituted ? 'Atorvastatin Calcium 20mg (Generic Direct)' : 'Lipitor 20mg (Brand Name)'}
                  </span>
                </div>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                  genericSubstituted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}>
                  {genericSubstituted ? 'IN CLINIC STOCK (140 UNITS)' : 'OUT OF STOCK IN CLINIC'}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-ink-border/40 text-xs">
                <p className="text-[11px] text-ink-tertiary">
                  {genericSubstituted
                    ? '✓ 1-Click generic substitution applied. Molecule bioequivalent verified.'
                    : 'Clinic inventory empty. 1-Click generic equivalent available.'}
                </p>
                <button
                  onClick={() => setGenericSubstituted(!genericSubstituted)}
                  className="px-3 py-1 rounded-lg bg-neutral-900 text-white font-mono text-[11px] hover:bg-neutral-800 transition-colors flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  {genericSubstituted ? 'Revert to Brand' : '1-Click Molecule Swap'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeWorkflow === 'pharmacy' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary">Module 04</span>
                <h4 className="text-sm font-semibold text-ink-primary">FEFO (First-Expired-First-Out) Auto-Deduction</h4>
              </div>
              <span className="font-mono text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                DISPENSE PIPELINE
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-stone-50 border border-ink-border/50 flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink-primary">Batch #ATV-2026-08 (Expires: Oct 2026)</p>
                  <p className="text-[10px] text-ink-tertiary font-mono">Earliest expiration date · Priority Dispense</p>
                </div>
                <span className="font-mono text-emerald-700 bg-white px-2 py-0.5 rounded border border-ink-border">
                  Auto-Allocated
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-stone-50/60 border border-ink-border/40 flex items-center justify-between opacity-60">
                <div>
                  <p className="font-medium text-ink-primary">Batch #ATV-2027-02 (Expires: Feb 2027)</p>
                  <p className="text-[10px] text-ink-tertiary font-mono">Secondary queue</p>
                </div>
                <span className="font-mono text-ink-tertiary">Reserved</span>
              </div>
            </div>
          </div>
        )}

        {activeWorkflow === 'kiosk' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-ink-border/50">
              <div>
                <span className="font-mono text-[10px] text-ink-tertiary">Module 05</span>
                <h4 className="text-sm font-semibold text-ink-primary">Fullscreen TV Queue Kiosk + Synthesized Chime</h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-ink-secondary">
                <Tv className="w-3.5 h-3.5" />
                <span>/display ROUTE</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900 text-white text-center space-y-2 shadow-md">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">NOW CALLING</span>
              <div className="text-4xl font-bold tracking-tight text-amber-400 font-mono">TOKEN #A-14</div>
              <p className="text-xs text-stone-300 font-medium">Please proceed to Room 204 (Cardiology)</p>
              <div className="pt-2 flex justify-center">
                <span className="text-[10px] font-mono bg-stone-800 text-stone-300 px-3 py-1 rounded-full border border-stone-700">
                  Web Audio Synthesized Hospital Chime Triggered
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feature Pillar Highlights */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">01 / INTAKE</span>
          <span className="font-semibold text-ink-primary text-xs">&lt;10s QR Walk-in</span>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">02 / EMR</span>
          <span className="font-semibold text-ink-primary text-xs">Molecule Swap</span>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">03 / INVENTORY</span>
          <span className="font-semibold text-ink-primary text-xs">FEFO Batches</span>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <span className="font-mono text-[10px] text-ink-tertiary block">04 / DISPLAY</span>
          <span className="font-semibold text-ink-primary text-xs">TV Kiosk Chime</span>
        </div>
      </div>
    </div>
  );
};

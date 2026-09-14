import React, { useState } from 'react';
import { TrendingDown, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

export const DistributionInteractiveMatrix: React.FC = () => {
  const [model, setModel] = useState<'audience' | 'distribution'>('distribution');
  const [stepMonths, setStepMonths] = useState<number>(12);

  return (
    <div className="w-full bg-[#FAF9F5] rounded-3xl p-5 sm:p-8 border border-ink-border shadow-glass-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-ink-border/60">
        <div>
          <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block">
            Interactive Theoretical Framework
          </span>
          <h4 className="text-base font-semibold text-ink-primary">
            Audience Vanity vs. Distribution Pipelines
          </h4>
        </div>

        {/* Model Toggle */}
        <div className="flex items-center bg-white p-1 rounded-xl border border-ink-border text-xs">
          <button
            onClick={() => setModel('audience')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all flex items-center gap-1.5 ${
              model === 'audience'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-ink-secondary hover:text-ink-primary'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5 text-amber-400" />
            Audience Model
          </button>
          <button
            onClick={() => setModel('distribution')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all flex items-center gap-1.5 ${
              model === 'distribution'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-ink-secondary hover:text-ink-primary'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            Distribution System
          </button>
        </div>
      </div>

      {/* Comparative Simulation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Column: Dynamics */}
        <div className="space-y-4 text-xs">
          {model === 'audience' ? (
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-semibold">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>The Algorithmic Treadmill</span>
              </div>
              <p className="text-amber-800 leading-relaxed font-light">
                Follower counts create the illusion of reach, but reach is taxed by platform algorithm decay (~2-5% organic delivery). When posting stops, flow halts completely.
              </p>
              <div className="pt-2 font-mono text-[11px] text-amber-900 space-y-1">
                <div>• Asset Ownership: Rented from third-party networks</div>
                <div>• Transfer Cost: Escalating per cycle</div>
                <div>• Compounding Rate: Near 0 (Ephemeral)</div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Embedded Structural Pipes</span>
              </div>
              <p className="text-emerald-800 leading-relaxed font-light">
                Distribution is built into workflow loops, integrations, direct protocols, and sovereign incentives. The system delivers value automatically without perpetual broadcasting.
              </p>
              <div className="pt-2 font-mono text-[11px] text-emerald-900 space-y-1">
                <div>• Asset Ownership: Sovereign & self-hosted</div>
                <div>• Transfer Cost: Marginal cost approaches zero</div>
                <div>• Compounding Rate: Non-linear network gravity</div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Velocity Comparison */}
        <div className="bg-white p-5 rounded-2xl border border-ink-border space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-ink-tertiary uppercase">Time Horizon</span>
            <span className="font-semibold text-ink-primary">{stepMonths} Months Projection</span>
          </div>

          <input
            type="range"
            min="3"
            max="36"
            step="3"
            value={stepMonths}
            onChange={(e) => setStepMonths(Number(e.target.value))}
            className="w-full accent-neutral-900 cursor-pointer"
          />

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-ink-secondary">Effective Value Transferred</span>
                <span className="font-mono font-semibold text-ink-primary">
                  {model === 'distribution'
                    ? `${Math.round(Math.pow(stepMonths, 1.4) * 8)} Units (Compounding)`
                    : `${Math.round(stepMonths * 12 + Math.random() * 5)} Units (Plateauing)`}
                </span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 rounded-full ${
                    model === 'distribution' ? 'bg-emerald-600' : 'bg-amber-500'
                  }`}
                  style={{
                    width: `${Math.min(
                      model === 'distribution'
                        ? (Math.pow(stepMonths, 1.4) * 8) / 12
                        : (stepMonths * 12) / 6,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

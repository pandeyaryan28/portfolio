import React, { useState } from 'react';
import { TrendingDown, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const DistributionInteractiveMatrix: React.FC = () => {
  const [model, setModel] = useState<'audience' | 'distribution'>('distribution');
  const [stepMonths, setStepMonths] = useState<number>(18);
  const { playTick, playClick } = useSound();

  const audienceValue = Math.round(stepMonths * 14 + (stepMonths > 12 ? -15 : 10));
  const distributionValue = Math.round(Math.pow(stepMonths, 1.45) * 6.5);

  return (
    <div className="w-full bg-[#FAF9F5] dark:bg-[#121217] rounded-3xl p-5 sm:p-8 border border-ink-border dark:border-white/10 shadow-glass-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-ink-border/60 dark:border-white/10">
        <div>
          <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-semibold">
            Interactive Theoretical Simulator
          </span>
          <h4 className="text-base font-semibold text-ink-primary dark:text-ink-dark-primary">
            Vanity Impressions vs. Embedded Distribution Pipes
          </h4>
        </div>

        {/* Model Toggle */}
        <div className="flex items-center bg-white dark:bg-black/60 p-1 rounded-xl border border-ink-border dark:border-white/10 text-xs">
          <button
            onClick={() => {
              playClick();
              setModel('audience');
            }}
            className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all flex items-center gap-1.5 ${
              model === 'audience'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5 text-amber-500" />
            Audience Model
          </button>
          <button
            onClick={() => {
              playClick();
              setModel('distribution');
            }}
            className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all flex items-center gap-1.5 ${
              model === 'distribution'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            Distribution System
          </button>
        </div>
      </div>

      {/* Comparative Simulation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Column: Dynamics */}
        <div className="space-y-4 text-xs">
          {model === 'audience' ? (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-semibold">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>The Algorithmic Rented Treadmill</span>
              </div>
              <p className="text-amber-800 dark:text-amber-200 leading-relaxed font-light">
                Follower counts give the illusion of leverage, but reach is continuously taxed by third-party platform algorithm decay (~2-4% organic reach). When broadcasting pauses, value flow plummets immediately.
              </p>
              <div className="pt-2 font-mono text-[11px] text-amber-900 dark:text-amber-300 space-y-1">
                <div>• Asset Ownership: Rented from walled platforms</div>
                <div>• Marginal Cost of Retargeting: Escalating linearly</div>
                <div>• Compounding Gravity: Approaches 0 (Ephemeral)</div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Embedded Structural Distribution Pipes</span>
              </div>
              <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed font-light">
                Distribution is engineered into product workflow loops, programmatic integrations, direct protocols, and sovereign incentives. Value delivers automatically without continuous broadcast panic.
              </p>
              <div className="pt-2 font-mono text-[11px] text-emerald-900 dark:text-emerald-300 space-y-1">
                <div>• Asset Ownership: Sovereign & self-hosted</div>
                <div>• Marginal Cost of Delivery: Approaches zero</div>
                <div>• Compounding Gravity: Non-linear network flywheel</div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Velocity Comparison */}
        <div className="bg-white dark:bg-stone-900/70 p-5 rounded-2xl border border-ink-border dark:border-white/10 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary uppercase">Time Horizon</span>
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">{stepMonths} Months Projection</span>
          </div>

          <input
            type="range"
            min="3"
            max="36"
            step="3"
            value={stepMonths}
            onChange={(e) => {
              playTick();
              setStepMonths(Number(e.target.value));
            }}
            className="w-full accent-amber-500 cursor-pointer"
          />

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs mb-1 font-mono">
                <span className="text-ink-secondary dark:text-ink-dark-secondary">Effective Value Transferred</span>
                <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">
                  {model === 'distribution'
                    ? `${distributionValue} Units (Exponential Pipe)`
                    : `${audienceValue} Units (Algorithm Plateau)`}
                </span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 rounded-full ${
                    model === 'distribution' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{
                    width: `${Math.min(
                      model === 'distribution' ? (distributionValue / 720) * 100 : (audienceValue / 400) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            <div className="pt-2 flex justify-between text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
              <span>M0: Setup</span>
              <span>M18: Inflection</span>
              <span>M36: Moat Established</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

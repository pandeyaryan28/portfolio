import React, { useState } from 'react';
import { QrCode, Pill, Check, Clock } from 'lucide-react';

export const ProductMockupUniCare: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'reception' | 'triage' | 'doctor' | 'pharmacy' | 'kiosk'>('doctor');

  const workflows: Array<{ id: 'reception' | 'triage' | 'doctor' | 'pharmacy' | 'kiosk'; label: string }> = [
    { id: 'reception', label: '1. QR Check In' },
    { id: 'triage', label: '2. Vitals' },
    { id: 'doctor', label: '3. Doctor EMR' },
    { id: 'pharmacy', label: '4. Pharmacy' },
    { id: 'kiosk', label: '5. TV Kiosk' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Controls Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/50">
        <span className="text-xs font-mono font-medium text-gray-700">
          UniCare Clinical OS
        </span>

        <div className="flex items-center gap-1">
          {workflows.map((wf) => (
            <button
              key={wf.id}
              onClick={() => setActiveWorkflow(wf.id)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeWorkflow === wf.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {wf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 bg-white min-h-[300px] flex flex-col justify-center">
        {/* 1. Reception QR Intake */}
        {activeWorkflow === 'reception' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Rapid Patient Check In</h4>
                <p className="text-xs text-gray-500">Scan digital QR pass to retrieve medical record and assign OPD token</p>
              </div>
              <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2.5 py-1 rounded">
                Token #A14
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center gap-4">
                <div className="p-3 bg-white rounded-lg border border-gray-200 shrink-0">
                  <QrCode className="w-8 h-8 text-gray-800" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-500">Patient Identifier</span>
                  <p className="font-mono text-sm font-semibold text-gray-900">UC8942 019X</p>
                  <span className="text-xs text-emerald-700 flex items-center gap-1 mt-0.5">
                    <Check className="w-3 h-3" /> Record Verified
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-gray-500">Department Routing</span>
                  <p className="text-xs font-medium text-gray-900 mt-0.5">Room 204 · Dr. Sarah Mehta (Cardiology)</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated wait: 4 mins</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Triage Vitals */}
        {activeWorkflow === 'triage' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Patient Biometrics & Vitals</h4>
                <p className="text-xs text-gray-500">Recorded at triage station and linked to consulting physician's screen</p>
              </div>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Synced with EMR
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 text-center">
                <span className="text-[11px] font-mono text-gray-500 block">Blood Pressure</span>
                <span className="text-lg font-semibold text-gray-900 font-mono">120 / 78</span>
                <span className="text-[11px] text-gray-500 block">Normal</span>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 text-center">
                <span className="text-[11px] font-mono text-gray-500 block">Pulse</span>
                <span className="text-lg font-semibold text-gray-900 font-mono">72 bpm</span>
                <span className="text-[11px] text-gray-500 block">Resting</span>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 text-center">
                <span className="text-[11px] font-mono text-gray-500 block">SpO2</span>
                <span className="text-lg font-semibold text-gray-900 font-mono">99%</span>
                <span className="text-[11px] text-gray-500 block">Optimal</span>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 text-center">
                <span className="text-[11px] font-mono text-gray-500 block">Temperature</span>
                <span className="text-lg font-semibold text-gray-900 font-mono">98.4 °F</span>
                <span className="text-[11px] text-gray-500 block">Normal</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. Doctor EMR */}
        {activeWorkflow === 'doctor' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Doctor Consultation & Prescriptions</h4>
                <p className="text-xs text-gray-500">Live inventory check suggests available generic alternatives</p>
              </div>
              <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2.5 py-1 rounded">
                Active Visit
              </span>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-200 text-gray-700">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Atorvastatin Calcium 20mg</p>
                    <p className="text-[11px] text-gray-500">Generic substitute for brand Lipitor</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  In Stock (140 units)
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-xs">
                <span className="text-gray-500">Patient Cost: $14.00 (vs $148.00 Brand)</span>
                <span className="text-emerald-700 font-medium">90% Cost Savings</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Pharmacy */}
        {activeWorkflow === 'pharmacy' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-900">FEFO Inventory Management</h4>
                <p className="text-xs text-gray-500">First Expired First Out dispensing ensures medicines closest to expiry are cleared first</p>
              </div>
              <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2.5 py-1 rounded">
                Dispense Queue
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium text-gray-900">Batch #ATV 2026 08 (Exp: Oct 2026)</p>
                  <p className="text-[11px] text-gray-500">Selected automatically for current prescription</p>
                </div>
                <span className="text-emerald-700 font-mono text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Auto Allocated
                </span>
              </div>

              <div className="p-3 rounded-xl border border-gray-200 bg-white flex items-center justify-between text-xs opacity-60">
                <div>
                  <p className="font-medium text-gray-900">Batch #ATV 2027 02 (Exp: Feb 2027)</p>
                  <p className="text-[11px] text-gray-500">Secondary stock in reserve</p>
                </div>
                <span className="text-gray-500 font-mono text-[11px]">
                  Reserved
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 5. TV Waiting Kiosk */}
        {activeWorkflow === 'kiosk' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Waiting Room TV Display</h4>
                <p className="text-xs text-gray-500">Dedicated screen route for clinic waiting room showing currently called patients</p>
              </div>
              <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2.5 py-1 rounded">
                /display
              </span>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-neutral-900 text-white text-center space-y-2">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                Now Calling
              </span>
              <div className="text-3xl font-bold font-mono text-amber-400">
                TOKEN #A14
              </div>
              <p className="text-xs text-gray-300">
                Please proceed to Room 204: Dr. Sarah Mehta (Cardiology)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Feature Footnote */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50/50 flex flex-wrap items-center justify-between text-xs text-gray-600">
        <span>Complete clinical workflow connecting intake, consultation, and pharmacy.</span>
        <span className="font-mono text-[11px] text-gray-500">Production Ready System</span>
      </div>
    </div>
  );
};

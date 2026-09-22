import React from 'react';
import { Link } from '../context/RouterContext';
import { ProductMockupUniCare } from '../components/visual/ProductMockupUniCare';
import { ArrowLeft, Clock, DollarSign, Users, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const UniCareDetail: React.FC = () => {
  const problemsSolved = [
    {
      problem: 'Clinic reception bottlenecks and long check in lines',
      solution: 'Rapid QR Check In (Under 10 Seconds)',
      desc: 'Patients scan their personal QR code upon arrival. The system immediately pulls their medical profile, assigns a queue token, and routes them to the right doctor without paperwork.',
      outcome: 'Cuts front desk intake time by 90 percent.',
    },
    {
      problem: 'Physicians lack quick context on previous medical history',
      solution: 'Unified Doctor Consultation Desk',
      desc: 'Doctors view past visits, existing vitals, allergy alerts, and previous diagnoses on one screen, making it effortless to record observations and prescribe treatment.',
      outcome: 'Eliminates lost patient histories and repeated manual tests.',
    },
    {
      problem: 'High prescription drug bills and unexpected pharmacy stockouts',
      solution: 'Smart Generic Medicine Matching',
      desc: 'When a prescribed branded medicine is out of stock or expensive, the system automatically suggests in stock generic equivalents with identical therapeutic effects.',
      outcome: 'Saves patients up to 90 percent on prescription medication costs.',
    },
    {
      problem: 'Unnoticed drug expiration leading to thousands in wasted medicine',
      solution: 'First Expired First Out Inventory Rotation',
      desc: 'The dispensary system automatically selects older batches approaching expiry before newer stock is touched, ensuring stock is cleared smoothly.',
      outcome: 'Prevents expired medicine waste and protects pharmacy revenue.',
    },
    {
      problem: 'Crowded waiting rooms and patients missing doctor calls',
      solution: 'Live Waiting Room TV Display',
      desc: 'A dedicated screen route for clinic lobbies clearly broadcasts active patient token numbers and assigned consulting rooms in real time.',
      outcome: 'Removes lobby confusion and reduces staff callout stress.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back Button */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>BACK TO PROJECTS</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
          <span>Healthcare Operations</span>
          <span>·</span>
          <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">Live MVP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          UniCare
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          A clinical operating system designed to connect reception check in, doctor consultations, patient medical records, and pharmacy inventory into one smooth workflow.
        </p>

        {/* Action Buttons - Source code link removed */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={SITE_LINKS.projects.unicare.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-2 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Visit Live Website</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Role</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Product Builder and Systems Designer</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">MVP Live in Production</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Core Focus</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Clinical Flow, Cost Savings, Zero Waste</span>
          </div>
        </div>
      </div>

      {/* Primary Visual Showcase */}
      <div className="py-2">
        <ProductMockupUniCare />
      </div>

      {/* Problem & Motivation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">The Problem Being Solved</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-medium text-gray-900">
            Outpatient clinics lose valuable hours every day to fragmented software and manual paper charts.
          </p>
          <p>
            When a patient arrives, reception staff spend several minutes asking for the same personal details. Doctors struggle to review past treatments because records are scattered across binders or incompatible portals. Meanwhile, clinic pharmacies write off thousands of dollars in medicines simply because expiring stock is buried behind newer deliveries.
          </p>
          <p>
            UniCare eliminates this operational friction. By connecting patient check in, clinical consultations, and pharmacy stock into a single coordinated flow, clinics save time, reduce patient bills, and prevent costly medicine waste.
          </p>
        </div>
      </div>

      {/* Problems Solved in the Workflow */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Operational Bottlenecks Solved</h2>
        <div className="space-y-3">
          {problemsSolved.map((item, idx) => (
            <motion.div
              key={item.solution}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 hover:border-gray-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-[11px] font-mono text-gray-700 font-medium">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900">{item.solution}</h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {item.outcome}
                </span>
              </div>
              <p className="text-xs text-red-700 font-medium pl-7">
                Friction: {item.problem}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 pl-7 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Operational Impact & Outcomes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Measurable Operational Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Clock className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Under 10s Intake</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Digital QR scanning cuts front desk check in time by over 90 percent, preventing crowded waiting lobbies.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <DollarSign className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Up to 90% Cost Cut</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Real time generic drug substitution enables doctors to recommend affordable alternatives directly during consultation.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Users className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Zero Medicine Waste</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              First Expired First Out batch allocation clears older pharmacy stock automatically before expiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from '../context/RouterContext';
import { ProductMockupUniCare } from '../components/visual/ProductMockupUniCare';
import { ArrowLeft, Shield, Database, Activity, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const UniCareDetail: React.FC = () => {
  const features = [
    {
      title: 'Rapid QR Reception Check-in (<10s)',
      desc: 'Patients scan a personal QR code on arrival. It retrieves their medical record, creates a queue token, and routes them to the right doctor.',
    },
    {
      title: 'Doctor Consultation Workspace',
      desc: 'A unified view for physicians showing past visits, vitals, and diagnoses, making it fast to chart visits and issue prescriptions.',
    },
    {
      title: 'Stock-Aware Generic Substitution',
      desc: 'When a prescribed branded medicine is unavailable, the system automatically suggests in-stock generic alternatives to save costs and avoid delays.',
    },
    {
      title: 'FEFO Pharmacy Inventory',
      desc: 'First-Expired-First-Out dispensing ensures older batches are dispensed before expiration, minimizing medical waste.',
    },
    {
      title: 'Waiting Room TV Kiosk Display',
      desc: 'A dedicated screen route for clinic waiting rooms that displays calling tokens and doctor room numbers in real time.',
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
          <span>Healthcare Operating System</span>
          <span>·</span>
          <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">Live MVP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          UniCare
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          A clinical operating system designed to connect reception check-in, doctor consultations, patient medical records, and pharmacy inventory in real time.
        </p>

        {/* Action Buttons */}
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

          <a
            href={SITE_LINKS.projects.unicare.repo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-medium transition-all inline-flex items-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>View Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Role</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Product Architect & Builder</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">MVP Live in Production</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Core Tech</span>
            <span className="font-medium text-gray-900 mt-0.5 block">React 19, TypeScript, WebSockets</span>
          </div>
        </div>
      </div>

      {/* Primary Visual Showcase */}
      <div className="py-2">
        <ProductMockupUniCare />
      </div>

      {/* Problem & Motivation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Why I Built This</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-medium text-gray-900">
            Outpatient clinics frequently rely on disconnected software tools or physical paper charts.
          </p>
          <p>
            When a patient visits a doctor, their past medical records often aren't immediately available. Reception staff spend minutes re-entering basic details, and pharmacies struggle to track expiring medicine batches. UniCare was built to connect these disconnected steps into a single fast, clean workflow.
          </p>
        </div>
      </div>

      {/* Key Features Built */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">What I Built</h2>
        <div className="space-y-3">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl border border-gray-200 bg-white space-y-1 hover:border-gray-300"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-[11px] font-mono text-gray-600">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 pl-7 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Technical Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5">
            <Shield className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900">Patient Data Privacy</h4>
            <p className="text-gray-600 leading-relaxed">Role-based access permissions for receptionists, doctors, and pharmacists.</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5">
            <Activity className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900">Real-Time Sync</h4>
            <p className="text-gray-600 leading-relaxed">WebSockets maintain live status updates between triage and consulting rooms.</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5">
            <Database className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900">FEFO Engine</h4>
            <p className="text-gray-600 leading-relaxed">Automated inventory tracking prioritizing older stock before expiration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

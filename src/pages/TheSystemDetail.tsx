import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { ArrowLeft, BookOpen, Quote, ExternalLink } from 'lucide-react';
import { SITE_LINKS } from '../data/links';

export const TheSystemDetail: React.FC = () => {
  const [selectedExcerpt, setSelectedExcerpt] = useState<number>(0);

  const excerpts = [
    {
      title: 'Hidden Fragility in Modern Systems',
      chapter: 'Chapter 2 · Systemic Dependencies',
      content:
        'When systems become complex, the people operating inside them often stop understanding the fundamental layers their routines depend on. We stack layers of software and abstractions until true risk is obscured. Realignment with physical reality is unavoidable.',
    },
    {
      title: 'Institutional Drift and Trust',
      chapter: 'Chapter 5 · Trust & Verification',
      content:
        'Institutions breakdown not because their original goals were flawed, but because the daily cost of upholding standards exceeds the short-term incentives of participants. Algorithmic verification simply shrinks the surface where blind trust is required.',
    },
    {
      title: 'The Physical Limits of Computing',
      chapter: 'Chapter 6 · Energy & Silicon',
      content:
        'Compute over the coming decade will not be decided solely by algorithms or venture funding. It will be governed by access to electrical power, thermal dissipation, and semiconductor fabrication. Physics sets the real boundaries.',
    },
  ];

  const chapters = [
    { num: '01', title: 'The Inertia of Modern Institutions', pages: 'pp. 12–34' },
    { num: '02', title: 'Layered Abstractions & Hidden Fragility', pages: 'pp. 35–62' },
    { num: '03', title: 'The Economics of Continuous Bandwidth', pages: 'pp. 63–88' },
    { num: '04', title: 'Data Gravity and Global Infrastructure', pages: 'pp. 89–114' },
    { num: '05', title: 'Trust Substrates & Verification', pages: 'pp. 115–142' },
    { num: '06', title: 'Energy, Compute, and Physical Realism', pages: 'pp. 143–178' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back Button */}
      <Link
        to="/writing"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>BACK TO WRITING</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
          <BookOpen className="w-3.5 h-3.5 text-gray-700" />
          <span>Published Book</span>
          <span>·</span>
          <span>100+ Pages</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-gray-950 tracking-tight leading-[1.15]">
          The System Is Being Rewritten
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          An examination of the technological, economic, and geopolitical forces reshaping computing and modern institutions.
        </p>

        {/* Action Buttons */}
        <div className="pt-2">
          <a
            href={SITE_LINKS.writing.theSystem.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-2 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Get Amazon Kindle Edition</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Author</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Aryan Pandey</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Length</span>
            <span className="font-medium text-gray-900 mt-0.5 block">100+ Pages</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Published</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Format</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Kindle & Archive</span>
          </div>
        </div>
      </div>

      {/* Book Mockup */}
      <div className="py-4 max-w-xs mx-auto">
        <BookMockupTheSystem />
      </div>

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
        <div className="text-base text-gray-600 space-y-4 leading-relaxed font-normal">
          <p>
            For decades, digital technology evolved under assumptions of endless energy, predictable chip scaling, and uninterrupted supply chains. Today, those foundational assumptions are being tested simultaneously.
          </p>
          <p>
            This book breaks down what these structural shifts mean for developers, engineers, and founders building next-generation technology.
          </p>
        </div>
      </div>

      {/* Excerpts Reader */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold text-gray-900">Selected Excerpts</h2>
          <span className="text-xs font-mono text-gray-500">3 Passages</span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {excerpts.map((excerpt, idx) => (
            <button
              key={excerpt.title}
              onClick={() => setSelectedExcerpt(idx)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedExcerpt === idx
                  ? 'bg-neutral-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Excerpt 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Excerpt Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Quote className="w-4 h-4 text-gray-400" />
            <span>{excerpts[selectedExcerpt].chapter}</span>
          </div>

          <h3 className="text-lg font-serif text-gray-900 font-medium">
            {excerpts[selectedExcerpt].title}
          </h3>

          <p className="font-serif italic text-base sm:text-lg text-gray-700 leading-relaxed">
            "{excerpts[selectedExcerpt].content}"
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Table of Contents</h2>
        <div className="space-y-2">
          {chapters.map((chap) => (
            <div
              key={chap.num}
              className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-white text-sm"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">{chap.num}</span>
                <span className="font-medium text-gray-800">{chap.title}</span>
              </div>
              <span className="font-mono text-xs text-gray-400">{chap.pages}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

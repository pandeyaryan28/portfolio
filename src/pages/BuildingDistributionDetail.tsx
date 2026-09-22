import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
import { useToast } from '../components/ui/Toast';
import { ArrowLeft, BookOpen, Quote, Check } from 'lucide-react';

export const BuildingDistributionDetail: React.FC = () => {
  const { showToast } = useToast();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleFollow = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      showToast('Subscribed to book updates!');
    }
  };

  const tableOfContents = [
    {
      part: 'Part I',
      title: 'The Illusion of Audience',
      desc: 'Why follower counts and social media impressions often fail to translate into durable business leverage.',
    },
    {
      part: 'Part II',
      title: 'Mechanisms of Transfer',
      desc: 'How information, trust, and adoption actually move between peer networks and decision makers.',
    },
    {
      part: 'Part III',
      title: 'Distribution Built into the Product',
      desc: 'Designing product mechanics where everyday usage naturally brings new users into the system.',
    },
    {
      part: 'Part IV',
      title: 'Durable Network Compounding',
      desc: 'Building direct distribution pipes that survive changing search algorithms and platform fee hikes.',
    },
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
          <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">In Progress</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-gray-950 tracking-tight leading-[1.15]">
          Building Distribution
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          A practical guide on how modern products build lasting distribution channels without relying on social media algorithms.
        </p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Author</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Aryan Pandey</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Format</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Essays and Book</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Drafting & Writing</span>
          </div>
        </div>
      </div>

      {/* Book Mockup */}
      <div className="py-4 max-w-xs mx-auto">
        <BookMockupDistribution />
      </div>

      {/* Core Thesis */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">The Core Idea</h2>
        <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-gray-50 space-y-4">
          <Quote className="w-6 h-6 text-gray-400" />
          <p className="font-serif italic text-xl text-gray-900 leading-snug">
            “Having an audience is not the same as having distribution.”
          </p>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Broadcasting posts on social media feels like distribution, but the reach is rented from algorithmic platforms. When algorithms change, your reach drops. Real distribution is built directly into product mechanics, user workflows, and direct relationships that you control.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Working Structure</h2>
        <div className="space-y-3">
          {tableOfContents.map((section) => (
            <div
              key={section.part}
              className="p-4 rounded-xl border border-gray-200 bg-white space-y-1"
            >
              <span className="text-[11px] font-mono font-medium text-gray-500 uppercase">
                {section.part}
              </span>
              <h3 className="text-base font-semibold text-gray-900">{section.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {section.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Drafts */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">Follow the writing</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Sign up to receive draft chapters and essays as they are completed.
          </p>
        </div>

        {subscribed ? (
          <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-neutral-700" />
            <span>You're subscribed! Draft chapters will be sent to your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleFollow} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address"
              className="px-3.5 py-2 rounded-lg border border-gray-300 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors"
            >
              Follow updates
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

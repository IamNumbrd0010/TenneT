import React from 'react';
import { personalInfo } from '../data/personal.js';

export default function WhyTennet() {
  const { principles } = personalInfo;

  return (
    <section className="py-24 sm:py-32 bg-[#0d0e15] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
              <span>Core Principles</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Work With Tennet
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
            Grounded standards governing how code is structured, how interfaces are shaped, and how projects are delivered.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-[#12141c] p-6 sm:p-7 rounded-xl border border-white/8 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-neutral-400 tabular-nums block mb-4">
                  {principle.number}
                </span>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-[#ff5a1f]">
                Guaranteed Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';
import { services } from '../data/services.js';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
              <span>Studio Capabilities</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            From initial wireframe concepts to fully deployed, high-speed production applications. No bloat, no generic templates.
          </p>
        </div>

        {/* Interactive Editorial Services List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.title}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full py-8 sm:py-10 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base text-neutral-400 group-hover:text-[#ff5a1f] transition-colors tabular-nums">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1 block">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline text-xs text-neutral-400 max-w-xs text-right line-clamp-1">
                      {service.summary}
                    </span>
                    <div className="p-2 rounded-full border border-white/10 text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-all shrink-0">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="pb-8 pt-2 pl-0 sm:pl-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/5">
                    <div className="md:col-span-7">
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#ff5a1f] hover:text-[#ff7a45] uppercase tracking-wider transition-colors"
                        >
                          <span>Commission this service</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-[#12141c] p-5 rounded-xl border border-white/5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                        Included Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-[#ff5a1f] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#12141c] to-[#0d0e14] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-bold text-white">Need a custom scope or specific tech integration?</h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              From bespoke API connections to niche interactive features, let's explore your idea.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-white/10 hover:bg-[#ff5a1f] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Discuss Custom Scope ↗
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck, Code, Eye } from 'lucide-react';
import BrowserMockup from './BrowserMockup.jsx';
import { projects } from '../data/projects.js';

export default function Hero({ onSelectProject }) {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const activeProject = projects[activePreviewIndex] || projects[0];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5a1f]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#2563eb]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Top availability & domain metadata kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for New Projects</span>
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Web Developer &amp; Creative Studio</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>React / JavaScript / Clean Systems</span>
        </div>

        {/* Main Grid: Headline & Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Websites that make ideas feel real.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
              Tennet creates modern websites and digital experiences for businesses, brands, and ideas. Led by a developer combining intentional design with rock-solid frontend code.
            </p>

            {/* Primary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('work')}
                className="px-6 py-3.5 bg-[#ff5a1f] hover:bg-[#ff7a45] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-lg shadow-[#ff5a1f]/20 flex items-center gap-2 cursor-pointer group"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider rounded-md border border-white/15 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick metrics / factual credibility markers */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">100%</span>
                <span className="text-xs text-neutral-400 mt-0.5 block">Custom Crafted</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">Mobile</span>
                <span className="text-xs text-neutral-400 mt-0.5 block">First Priority</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">0%</span>
                <span className="text-xs text-neutral-400 mt-0.5 block">Generic Templates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Browser Showcase & Interactive Switcher */}
          <div className="lg:col-span-6 relative">
            {/* Background decoration frame */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff5a1f]/15 to-transparent rounded-2xl blur-lg pointer-events-none" />

            {/* Active Browser Window Mockup */}
            <div className="relative">
              <BrowserMockup
                src={activeProject.image}
                alt={activeProject.title}
                url={`https://${activeProject.id}.tennet.studio`}
                title={activeProject.title}
                category={activeProject.category}
                onOpenDetails={() => onSelectProject(activeProject)}
                liveUrl={activeProject.liveUrl}
                className="w-full"
              />

              {/* Overlay Project Title Card in the corner */}
              <div className="absolute -bottom-5 right-4 sm:right-6 bg-[#171a24]/95 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-lg shadow-xl max-w-xs flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff5a1f]">
                    Featured Preview {activeProject.number}
                  </div>
                  <div className="font-semibold text-white text-sm truncate">{activeProject.title}</div>
                  <div className="text-xs text-neutral-400 truncate">{activeProject.category}</div>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProject(activeProject)}
                  className="p-2 rounded bg-white/5 hover:bg-[#ff5a1f] text-white transition-colors cursor-pointer shrink-0"
                  title="Inspect case study"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Project Switcher Ribbon */}
            <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs text-neutral-400 font-mono mr-2 shrink-0">Switch Preview:</span>
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActivePreviewIndex(idx)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activePreviewIndex === idx
                      ? 'bg-white/15 text-white border border-white/30'
                      : 'bg-white/5 text-neutral-400 hover:text-white border border-transparent'
                  }`}
                >
                  {proj.number} · {proj.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

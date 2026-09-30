import React from 'react';
import { Compass, Sparkles, Terminal } from 'lucide-react';

export default function BrandIntro() {
  return (
    <section className="py-24 sm:py-32 border-y border-white/5 relative overflow-hidden bg-[#0d0e14]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl">
          {/* Subtle section label */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
            <span>The Tennet Stance</span>
          </div>

          {/* Large Editorial Statement */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Design. Development. <br />
            Digital experiences.
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            Tennet brings design thinking and modern frontend engineering together to craft websites that are visually compelling, responsive across every device, and built to drive results. No bloated frameworks or generic templates—just thoughtful code and intentional interfaces.
          </p>

          {/* Editorial triad */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">01 / Aesthetics</span>
              <h3 className="text-base font-semibold text-white">Visual Distinction</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Clean editorial layouts, disciplined typography, and tailored art direction that elevate your brand.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">02 / Engineering</span>
              <h3 className="text-base font-semibold text-white">Performant Code</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Built strictly with modern React, semantic structure, and snappy micro-interactions that never stutter.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">03 / Utility</span>
              <h3 className="text-base font-semibold text-white">Real Outcomes</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Streamlined client booking, WhatsApp order workflows, and clear information flow that converts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

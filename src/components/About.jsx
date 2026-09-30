import React from 'react';
import { ArrowUpRight, Compass, Code2, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0d0e15] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Lockup & Editorial Headline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
              <span>About Tennet</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Built by a developer.<br />
              Growing into a studio.
            </h2>

            <div className="mt-8 p-6 rounded-xl bg-[#12141c] border border-white/8 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Positioning</div>
              <p className="text-sm text-neutral-300 italic leading-relaxed">
                "{personalInfo.brandSubtext}"
              </p>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              <p>
                Tennet operates at the intersection of aesthetic discipline and technical execution. Too many businesses are forced to choose between design agencies that produce unmaintainable code, or developers who disregard typography, spacing, and brand identity.
              </p>
              <p>
                Tennet exists to eliminate that divide. By combining creative direction with clean, modern React architecture, every website delivered is fast, responsive, and crafted to represent your business with distinction.
              </p>
            </div>

            {/* Philosophy Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[#12141c] border border-white/5">
                <span className="text-xs font-mono text-[#ff5a1f] block mb-2">01 / Independence</span>
                <h3 className="text-base font-semibold text-white mb-1.5">Direct Collaboration</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  You work directly with the developer building your site. No agency account managers, no distorted game of telephone.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#12141c] border border-white/5">
                <span className="text-xs font-mono text-[#ff5a1f] block mb-2">02 / Modern Stack</span>
                <h3 className="text-base font-semibold text-white mb-1.5">No Generic Templates</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Every interface is built cleanly with modular React and responsive styling, giving you complete ownership and freedom to scale.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#12141c] border border-white/5">
                <span className="text-xs font-mono text-[#ff5a1f] block mb-2">03 / Dual Purpose</span>
                <h3 className="text-base font-semibold text-white mb-1.5">Hire or Commission</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Whether you are a company seeking a skilled frontend developer for your engineering team, or a business commissioning a new web platform.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#12141c] border border-white/5">
                <span className="text-xs font-mono text-[#ff5a1f] block mb-2">04 / Growth Ready</span>
                <h3 className="text-base font-semibold text-white mb-1.5">Studio Architecture</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Built to scale from a focused personal practice into a multidisciplinary creative digital studio with specialized collaborators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Code, Layout, Wrench, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function Skills() {
  const { skills } = personalInfo;

  // Group skills by category
  const categories = ['Core Frontend', 'Design & UI', 'Tools & Workflow'];

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Core Frontend':
        return <Code className="w-4 h-4 text-[#ff5a1f]" />;
      case 'Design & UI':
        return <Layout className="w-4 h-4 text-[#ff5a1f]" />;
      case 'Tools & Workflow':
        return <Wrench className="w-4 h-4 text-[#ff5a1f]" />;
      default:
        return <Code className="w-4 h-4 text-[#ff5a1f]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0d0e15] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
              <span>Technical Foundations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
            Technologies and workflows used in daily production. No inflated lists—strictly tools with real project application.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <div
                key={category}
                className="bg-[#12141c] p-6 sm:p-8 rounded-xl border border-white/8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-white/5">
                    {getCategoryIcon(category)}
                    <h3 className="font-display text-lg font-bold text-white">{category}</h3>
                  </div>

                  <ul className="space-y-3">
                    {categorySkills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between text-xs sm:text-sm text-neutral-300">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-[11px] font-mono text-neutral-400">Production</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Applied across all showcase projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import BrowserMockup from './BrowserMockup.jsx';
import { projects } from '../data/projects.js';

export default function SelectedWork({ onSelectProject }) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            A showcase of client-facing platforms, e-commerce ordering systems, and modern digital spaces built with React.
          </p>
        </div>

        {/* Projects Gallery */}
        <div className="space-y-28 sm:space-y-36">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Preview Column */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <BrowserMockup
                    src={project.image}
                    alt={project.title}
                    url={`https://${project.id}.tennet.studio`}
                    title={project.title}
                    category={project.category}
                    onOpenDetails={() => onSelectProject(project)}
                    liveUrl={project.liveUrl}
                    className="w-full"
                  />
                </div>

                {/* Information Column */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                  {/* Project Number & Category */}
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                    <span className="text-2xl font-bold text-white tracking-tighter">{project.number}</span>
                    <span aria-hidden="true" className="text-neutral-600">/</span>
                    <span className="uppercase tracking-widest text-[#ff5a1f] font-semibold">{project.category}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-sm font-medium text-neutral-400 mt-1">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Used (Zero-Pill Discipline: unboxed clean text) */}
                  <div className="mt-5 pt-5 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-neutral-300 font-mono">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="hover:text-white transition-colors">{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span className="text-neutral-600 select-none">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-5 space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Key Highlights
                    </span>
                    {project.features.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a1f] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="px-5 py-2.5 bg-white text-[#0a0b0e] hover:bg-[#ff5a1f] hover:text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Live Site</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-md border border-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

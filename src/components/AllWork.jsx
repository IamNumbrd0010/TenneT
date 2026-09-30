import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Filter, ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '../data/projects.js';

export default function AllWork({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    if (selectedCategory === 'Web Development') {
      // Matches all web engineering projects
      return projects;
    }
    return projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  return (
    <section className="py-20 sm:py-28 bg-[#0d0e15] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Full Archive</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              All Projects &amp; Explorations
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            Showing <strong className="text-white">{filteredProjects.length}</strong> of {projects.length} Works
          </span>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0a0b0e] font-semibold shadow-sm'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#12141c] rounded-xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-[#ff5a1f]/5"
            >
              {/* Preview image */}
              <div className="relative aspect-16/10 bg-[#0e1017] overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Floating badge */}
                <div className="absolute top-3 left-3 bg-[#0a0b0e]/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-neutral-300 border border-white/10">
                  {project.number} · {project.category}
                </div>

                <div className="absolute top-3 right-3 bg-[#0a0b0e]/80 backdrop-blur-md px-2 py-1 rounded text-[11px] font-mono text-neutral-400 border border-white/10">
                  {project.year}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ff5a1f] transition-colors">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#ff5a1f] text-neutral-400 group-hover:text-white transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-medium mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 mt-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech row */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={tech}>
                        {tech}
                        {i < Math.min(project.technologies.length, 3) - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-white flex items-center gap-1">
                    Case Study ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

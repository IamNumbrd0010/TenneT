import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowUpRight, ArrowRight, Grid, List, CheckCircle2, ExternalLink } from 'lucide-react';
import BrowserMockup from '../components/BrowserMockup.jsx';
import { projects, projectCategories } from '../data/projects.js';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('detailed'); // 'detailed' | 'grid'

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-32 pb-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Digital Archive</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Work &amp; Case Studies
              </h1>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl">
                A complete record of custom-designed web applications, responsive e-commerce storefronts, and architectural platforms crafted with React.
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-400 flex items-center gap-4">
              <span>
                Showing <strong className="text-white">{filteredProjects.length}</strong> of {projects.length} Works
              </span>
              <div className="hidden sm:flex items-center gap-1 bg-[#12141c] p-1 rounded-md border border-white/10">
                <button
                  type="button"
                  onClick={() => setViewMode('detailed')}
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    viewMode === 'detailed' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Detailed View"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Compact Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Interactive Search Box */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-9 pr-4 py-2 bg-[#12141c] border border-white/10 rounded-md text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects View */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center bg-[#12141c] rounded-2xl border border-white/5 p-8">
            <p className="text-neutral-400 text-sm">No projects matched your criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'detailed' ? (
          /* Detailed View */
          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0d0f17] p-6 sm:p-10 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Link to={`/work/${project.id}`} className="block group">
                      <BrowserMockup
                        src={project.image}
                        alt={project.title}
                        url={`https://${project.id}.tennet.studio`}
                        title={project.title}
                        category={project.category}
                        liveUrl={project.liveUrl}
                        className="w-full"
                      />
                    </Link>
                  </div>

                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-2">
                      <span className="text-xl font-bold text-white">{project.number}</span>
                      <span>/</span>
                      <span className="uppercase text-blue-400 font-semibold">{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      <Link to={`/work/${project.id}`} className="hover:text-blue-400 transition-colors">
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-xs font-medium text-neutral-400 mt-1">{project.tagline}</p>

                    <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech list */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-blue-950/40 border border-blue-500/20 text-[11px] font-mono text-blue-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/work/${project.id}`}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/20"
                      >
                        <span>Inspect Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 transition-colors flex items-center gap-1.5"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Compact Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-[#12141c] rounded-xl overflow-hidden border border-white/8 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <Link to={`/work/${project.id}`} className="block">
                  <div className="relative aspect-16/10 bg-[#0e1017] overflow-hidden border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a0b0e]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-blue-300 border border-blue-500/20">
                      {project.number} · {project.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#0a0b0e]/85 backdrop-blur-md px-2 py-1 rounded text-[11px] font-mono text-neutral-400 border border-white/10">
                      {project.year}
                    </div>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        <Link to={`/work/${project.id}`}>{project.title}</Link>
                      </h3>
                      <Link
                        to={`/work/${project.id}`}
                        className="p-2 rounded-full bg-white/5 group-hover:bg-blue-600 text-neutral-400 group-hover:text-white transition-all shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <p className="text-xs text-neutral-400 font-medium mt-1">{project.tagline}</p>
                    <p className="text-sm text-neutral-300 mt-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={tech}>
                          {tech}
                          {i < Math.min(project.technologies.length, 3) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.id}`}
                      className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1"
                    >
                      Case Study ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-blue-950/20 via-[#12141c] to-[#0a0b0e] border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Have a project you want built?</h3>
            <p className="text-sm text-neutral-300 mt-1 max-w-lg">
              Let's create something modern, responsive, and tailored specifically to your audience.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shadow-lg shadow-blue-600/25"
          >
            Start a Conversation ↗
          </Link>
        </div>
      </div>
    </div>
  );
}

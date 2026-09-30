import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, Github, Linkedin, Mail, ArrowUpRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { team } from '../data/team.js';

export default function TeamPage() {
  const founder = team[0];

  return (
    <div className="pt-32 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Studio Collective</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            The Team
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Tennet is currently led by founder and frontend developer Jamiu Abdulsalam, structured to assemble specialized collaborators as project visions scale.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Active Founder Card */}
          <div className="md:col-span-6 bg-[#12141c] rounded-2xl border border-blue-500/20 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="aspect-square max-w-sm mx-auto sm:mx-0 rounded-xl overflow-hidden bg-[#0d0e15] mb-6 border border-white/5 relative">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0a0b0e]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-blue-300 border border-blue-500/20">
                  Studio Founder
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl font-bold text-white">{founder.name}</h2>
                <span className="text-xs font-mono uppercase text-blue-400 font-semibold">Lead Developer</span>
              </div>
              <p className="text-xs font-mono text-neutral-400 mt-1">{founder.role}</p>

              <p className="text-sm text-neutral-300 mt-4 leading-relaxed font-light">
                {founder.bio}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">Direct Channels:</span>
              <div className="flex items-center gap-3 text-neutral-400">
                {founder.links.github && (
                  <a
                    href={founder.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {founder.links.linkedin && (
                  <a
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${founder.links.email}`}
                  className="p-1.5 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Studio Collective & Future Expansion Card */}
          <div className="md:col-span-6 bg-[#0e1017] rounded-2xl border border-dashed border-blue-500/30 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-4">
                <UserPlus className="w-4 h-4" />
                <span>The Collective Model</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Growing into a Full Creative Digital Studio
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4 font-light">
                Tennet operates on an agile studio model. Rather than carrying bloated agency overhead that gets passed along to clients, every project is personally led and engineered by me.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                When large-scale client initiatives require dedicated brand strategy, editorial photography, 3D assets, or technical copywriting, Tennet taps into a curated roster of trusted creative collaborators.
              </p>

              <div className="space-y-3 p-4 rounded-xl bg-[#12141c] border border-white/5 text-xs text-neutral-300">
                <div className="font-semibold text-white font-mono uppercase text-[11px] text-blue-400">
                  Network Disciplines
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                  <span>· Brand Identity Designers</span>
                  <span>· Commercial Photographers</span>
                  <span>· Technical Copywriters</span>
                  <span>· 3D / Motion Specialists</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-400">Want to join the collaborator roster?</span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 font-semibold"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

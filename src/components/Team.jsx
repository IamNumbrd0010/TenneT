import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Users, UserPlus } from 'lucide-react';
import { team } from '../data/team.js';

/**
 * Reusable Team Member Card Component
 */
function TeamMemberCard({ member }) {
  return (
    <div className="bg-[#12141c] rounded-xl border border-white/8 p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20">
      <div>
        {/* Photo */}
        <div className="aspect-square rounded-lg overflow-hidden bg-[#0d0e15] mb-5 border border-white/5">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Role */}
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
          {member.isFounder && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff5a1f] px-2 py-0.5 rounded bg-[#ff5a1f]/10 border border-[#ff5a1f]/20">
              Founder
            </span>
          )}
        </div>
        <p className="text-xs font-mono text-neutral-400 mt-1">{member.role}</p>

        {member.specialty && (
          <p className="text-xs text-[#ff5a1f] font-medium mt-1">{member.specialty}</p>
        )}

        <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Member Links */}
      {member.links && (
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-neutral-400">
          {member.links.github && (
            <a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.links.email && (
            <a
              href={`mailto:${member.links.email}`}
              className="p-1.5 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Team() {
  const isSoloFounder = team.length === 1;

  return (
    <section id="team" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Studio Structure</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              The Team
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            Currently led by founder &amp; developer Jamiu Abdulsalam, structured to assemble specialized collaborators as client visions grow.
          </p>
        </div>

        {/* Team Grid */}
        <div
          className={`grid gap-8 ${
            isSoloFounder
              ? 'grid-cols-1 md:grid-cols-12 items-stretch'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {/* Active Team Members */}
          {team.map((member) => (
            <div key={member.id || member.name} className={isSoloFounder ? 'md:col-span-6' : ''}>
              <TeamMemberCard member={member} />
            </div>
          ))}

          {/* Architectural Extension Card: Studio Expansion & Collaborators */}
          {isSoloFounder && (
            <div className="md:col-span-6 bg-[#0e1017] rounded-xl border border-dashed border-white/15 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                  <UserPlus className="w-4 h-4 text-[#ff5a1f]" />
                  <span>Studio Evolution</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Growing into a Multidisciplinary Studio
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  While every line of code is currently authored and vetted by me, Tennet collaborates with specialized creative partners—including brand identity designers, technical copywriters, and motion specialists—when larger scopes call for it.
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  As the studio scales, new team members and technical specialists will be integrated seamlessly into this roster.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-neutral-400">Interested in collaborating?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ff5a1f] hover:text-[#ff7a45] font-semibold"
                >
                  <span>Connect with Tennet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

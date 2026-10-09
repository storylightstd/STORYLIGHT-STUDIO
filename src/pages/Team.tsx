import React, { useState } from 'react';
import { PageId, TeamMember } from '../types';
import { TEAM_MEMBERS } from '../data/content';
import { Users, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Linkedin, ExternalLink } from 'lucide-react';

interface TeamProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const Team: React.FC<TeamProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'leadership' | 'specialists'>('all');

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (activeFilter === 'leadership') return member.isLeadership;
    if (activeFilter === 'specialists') return !member.isLeadership;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          The 13-Person In-House Team
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          Dedicated Platform Specialists. Zero Anonymous Outsourcing.
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          Storylight Studios is powered by thirteen dedicated professionals with deep, platform-specific expertise.
          From forensic Amazon category dominance to cinematic video production, your book is guided by named leaders.
        </p>
      </div>

      {/* Filter Segmented Control */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          All 13 Team Members
        </button>
        <button
          onClick={() => setActiveFilter('leadership')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            activeFilter === 'leadership'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Studio Leadership & Directors
        </button>
        <button
          onClick={() => setActiveFilter('specialists')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            activeFilter === 'specialists'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Production & Growth Specialists
        </button>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className={`bg-[#0B1220] border rounded-xl p-7 flex flex-col justify-between transition-all duration-300 space-y-6 ${
              member.isLeadership
                ? 'border-[#D4AF37]/35 shadow-lg shadow-[#D4AF37]/5'
                : 'border-white/10 hover:border-[#D4AF37]/30'
            }`}
          >
            <div className="space-y-4">
              {member.image && (
                <div className="w-full h-80 sm:h-96 rounded-lg border border-[#D4AF37]/25 bg-[#111B2E] overflow-hidden flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Storylight Studios`}
                    className="w-full h-full object-contain object-top"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              {/* Card Top Pill/Status */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                    {member.specialty}
                  </span>
                  <h3 className="text-xl font-editorial font-bold text-white mt-1">
                    {member.name}
                  </h3>
                  <div className="text-xs text-[#CBD5E1] font-medium mt-0.5">
                    {member.role}
                  </div>
                </div>

                {member.isLeadership && (
                  <span className="text-[10px] uppercase tracking-widest text-[#E6CA85] bg-[#14213B] px-2 py-0.5 rounded border border-[#D4AF37]/30 font-semibold">
                    Director
                  </span>
                )}
              </div>

              {/* Bio */}
              <p className="text-xs text-[#CBD5E1] leading-relaxed border-t border-white/5 pt-3">
                {member.bio}
              </p>
            </div>

            {/* Platforms Footer */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8] block">
                Platform Focus:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {member.platforms.map((plat, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-[11px] text-[#E2E8F0] bg-[#0E172A] px-2 py-0.5 rounded border border-white/10"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Transparency Box */}
      <div className="bg-[#0B1220] border border-[#D4AF37]/25 rounded-xl p-8 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verifiable Professional Profiles</span>
            </div>
            <h2 className="text-2xl font-editorial font-bold text-white">
              Transparent Experience You Can Verify on LinkedIn
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Our leadership credentials, publishing background, and production pedigree are fully verifiable.
              We believe authors deserve to know exactly who is responsible for their keywords, their manuscript edits, and their trailer reels.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all whitespace-nowrap cursor-pointer"
            >
              Consult with Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

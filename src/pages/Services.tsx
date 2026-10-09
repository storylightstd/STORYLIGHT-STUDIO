import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/content';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  BookOpen,
  Film,
  Compass,
  Calendar,
  Feather,
  Share2,
  Headphones,
  ShieldCheck,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onNavigate,
  onOpenDiagnostic,
  onSelectServiceForContact,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'strategy' | 'creative' | 'publishing'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-[#D4AF37]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#D4AF37]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#D4AF37]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#D4AF37]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const filteredServices = SERVICES.filter((srv) => {
    if (selectedFilter === 'strategy') {
      return ['visibility-strategy', 'amazon-goodreads', 'launch-planning'].includes(srv.id);
    }
    if (selectedFilter === 'creative') {
      return ['book-trailers', 'author-branding', 'social-booktok'].includes(srv.id);
    }
    if (selectedFilter === 'publishing') {
      return ['writing-editing', 'audiobook-production'].includes(srv.id);
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          Studio Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          Eight Specialist Services. One Unified Book Growth Engine.
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          From forensic keyword architecture and algorithmic category repair to cinematic book trailers and complete launch operations,
          every capability is executed in-house by our 13-person specialist team.
        </p>
      </div>

      {/* Filter Segmented Control (Interactive button element with working handler as permitted) */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/10">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            selectedFilter === 'all'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          All 8 Capabilities
        </button>
        <button
          onClick={() => setSelectedFilter('strategy')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            selectedFilter === 'strategy'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Search & Platform Strategy
        </button>
        <button
          onClick={() => setSelectedFilter('creative')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            selectedFilter === 'creative'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Creative Production & Trailers
        </button>
        <button
          onClick={() => setSelectedFilter('publishing')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            selectedFilter === 'publishing'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Editorial & Audio Production
        </button>
      </div>

      {/* Detailed Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-[#0B1220] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 space-y-6 group"
          >
            <div className="space-y-5">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#132039] rounded border border-[#D4AF37]/25 text-[#D4AF37]">
                  {getIcon(service.iconName)}
                </div>
                <span className="font-editorial text-2xl font-bold text-[#64748B] group-hover:text-[#D4AF37] transition-colors">
                  {service.number}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-editorial font-bold text-white group-hover:text-[#F5F2EB] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2.5 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  Included Specialist Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {service.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="text-xs text-[#E2E8F0] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For Note */}
              <div className="p-3 bg-[#080E1B] rounded border border-white/5 text-xs text-[#94A3B8]">
                <strong className="text-white font-medium">Ideal For: </strong>
                <span>{service.bestFor}</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">
                In-House Execution
              </span>
              <button
                onClick={() => onSelectServiceForContact(service.title)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Diagnostic Guidance Banner */}
      <div className="p-8 sm:p-10 bg-[#0E172A] border border-[#D4AF37]/30 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Unsure which service matches your current stage?</span>
          </div>
          <h3 className="text-2xl font-editorial font-bold text-white">
            Begin With Our Diagnostic Audit
          </h3>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Rather than purchasing services blindly, our diagnostic audit assesses your book’s 24 key data indicators
            to identify whether your immediate bottleneck is category architecture, visual creative hooks, or review velocity.
          </p>
        </div>
        <button
          onClick={onOpenDiagnostic}
          className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          Run Author Diagnostic
        </button>
      </div>
    </div>
  );
};

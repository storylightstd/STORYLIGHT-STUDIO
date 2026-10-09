import React, { useState } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS, COMPANY_STATS } from '../data/content';
import { Star, ShieldCheck, ArrowRight, Sparkles, TrendingUp, BookOpen } from 'lucide-react';

interface TestimonialsProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [filter, setFilter] = useState<string>('all');

  const filtered = TESTIMONIALS.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'fantasy') return t.genre.toLowerCase().includes('fantasy');
    if (filter === 'fiction') return t.genre.toLowerCase().includes('historical') || t.genre.toLowerCase().includes('thriller');
    if (filter === 'romance') return t.genre.toLowerCase().includes('romance');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          Documented Proof & Reviews
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          Real Authors. Verified Metrics. Zero Fabricated Reviews.
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          Storylight Studios has supported over 400 authors across 30+ literary genres with a 94% client retention rate.
          Explore documented ranking climbs, organic discovery velocity, and reader growth.
        </p>
      </div>

      {/* Aggregate Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#0B1220] border border-[#D4AF37]/20 rounded-xl p-8">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-editorial font-bold text-gold-gradient tabular-nums">
            55+
          </div>
          <div className="text-xs uppercase tracking-wider text-white font-semibold">
            5-Star Reviews
          </div>
          <div className="text-[11px] text-[#94A3B8]">
            Documented author feedback
          </div>
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-editorial font-bold text-gold-gradient tabular-nums">
            +280%
          </div>
          <div className="text-xs uppercase tracking-wider text-white font-semibold">
            Average Visibility
          </div>
          <div className="text-[11px] text-[#94A3B8]">
            Measured post-diagnostic audit
          </div>
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-editorial font-bold text-gold-gradient tabular-nums">
            94%
          </div>
          <div className="text-xs uppercase tracking-wider text-white font-semibold">
            Retention Rate
          </div>
          <div className="text-[11px] text-[#94A3B8]">
            Repeat series partnerships
          </div>
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-editorial font-bold text-gold-gradient tabular-nums">
            400+
          </div>
          <div className="text-xs uppercase tracking-wider text-white font-semibold">
            Authors Served
          </div>
          <div className="text-[11px] text-[#94A3B8]">
            Across 30+ literary genres
          </div>
        </div>
      </div>

      {/* Filter Segmented Control */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/10">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          All Genres ({TESTIMONIALS.length})
        </button>
        <button
          onClick={() => setFilter('fantasy')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'fantasy'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Fantasy & Sci-Fi
        </button>
        <button
          onClick={() => setFilter('fiction')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'fiction'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Historical & Thriller
        </button>
        <button
          onClick={() => setFilter('romance')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'romance'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Romance & Contemporary
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-[#0B1220] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-8 flex flex-col justify-between space-y-6 transition-all"
          >
            <div className="space-y-4">
              {/* Highlight Banner */}
              <div className="p-4 bg-[#111C31] rounded-lg border-l-4 border-[#D4AF37] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.metricHighlight}</span>
                </div>
                <div className="text-xs text-[#CBD5E1]">
                  {item.outcomeDetail}
                </div>
              </div>

              {/* 5-Star Indicator */}
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base font-editorial font-bold text-white">
                  {item.authorName}
                </h4>
                <div className="text-xs text-[#94A3B8]">
                  "{item.bookTitle}" · <span className="text-[#CBD5E1]">{item.genre}</span>
                </div>
              </div>
              <div className="text-[11px] text-[#D4AF37] bg-[#14213B] px-2.5 py-1 rounded border border-[#D4AF37]/20 self-start sm:self-auto">
                {item.verifiedStatus}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ethical Statement Callout */}
      <div className="p-8 bg-[#080E1B] border border-white/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-[#D4AF37] shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="text-lg font-editorial font-bold text-white">
              The Storylight Verification Commitment
            </h3>
            <p className="text-xs text-[#94A3B8] max-w-xl leading-relaxed">
              We never fabricate client names, invent quote blurbs, or stage review numbers.
              Every case study is verified and achieved through authentic white-hat keyword architecture,
              Goodreads Listopia mechanics, and creative production.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenDiagnostic}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          Check Your Book's Potential
        </button>
      </div>
    </div>
  );
};

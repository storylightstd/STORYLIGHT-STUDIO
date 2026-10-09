import React from 'react';
import { PageId } from '../types';
import { COMPANY_STATS, IMAGES } from '../data/content';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, BookOpen, Users, Compass } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenDiagnostic }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          About Storylight Studios
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          Founded on Editorial Integrity, Data Rigor, and Cinematic Craft.
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          Storylight Studios is a specialist book-growth and creative production company supported by a
          13-person in-house team. We help authors navigate modern publishing algorithms without compromising their artistic dignity.
        </p>
      </div>

      {/* The Genesis / Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-sm text-[#CBD5E1] leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            Born from a Decade Inside Traditional Publishing
          </h2>
          <p>
            Hannah Cooper founded Storylight Studios after spending ten years inside traditional publishing houses.
            During that decade, she witnessed an undeniable shift: brilliant manuscripts were being written by independent
            and hybrid authors every day, yet the marketing tools available to them were broken.
          </p>
          <p>
            Authors were caught between two extremes: predatory "bestseller guarantees" peddling toxic review rings,
            and generic advice telling authors to post twenty TikTok videos a day without any strategic direction.
          </p>
          <p>
            Storylight Studios was built to provide the missing third path: a high-touch, platform-specialized agency
            combining forensic data science on Amazon and Goodreads with cinematic creative production and traditional editorial excellence.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-[#D4AF37] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Strictly White-Hat · Zero Paid Review Rings · Verifiable Real Audiences</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-5">
          <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0F172A]">
            <img
              src={IMAGES.workspace}
              alt="Storylight Studios Editorial Desk"
              className="w-full h-96 object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#080D1A]/90 backdrop-blur-md rounded border border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                The Storylight Standard
              </span>
              <p className="text-xs text-[#E2E8F0] mt-1 font-editorial italic">
                "Every author deserves access to the exact diagnostic rigor and visual prestige previously reserved for Big Five flagship titles."
              </p>
              <span className="text-[11px] text-[#94A3B8] block mt-1">
                — Hannah Cooper, CEO & Founder
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[8rem_1fr] gap-4 items-center rounded-lg border border-[#D4AF37]/25 bg-[#0B1220] p-4">
            <img
              src={IMAGES.founder}
              alt="Hannah Cooper, founder of Storylight Studios"
              className="w-32 h-40 rounded-md object-contain object-top bg-[#111B2E] border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Founder profile</div>
              <h3 className="text-xl font-editorial font-bold text-white mt-1">Hannah Cooper</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed mt-2">Founder and CEO of Storylight Studios, leading the studio’s diagnostic-first approach to author visibility and creative production.</p>
            </div>
          </div>
        </div>
      </div>

      {/* The 13-Person Specialist Model */}
      <div className="bg-[#0B1220] border border-[#D4AF37]/20 rounded-xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Our Structural Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            Why a 13-Person In-House Team Matters
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Publishing discoverability is too nuanced for a single generalist or a revolving door of outsourced freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#CBD5E1]">
          <div className="p-6 bg-[#0E172A] rounded-lg border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-editorial font-bold text-white">
              Platform-Specific Depth
            </h3>
            <p className="leading-relaxed text-[#94A3B8]">
              Amazon KDP algorithms are governed by different search indexes than Goodreads Listopia or TikTok recommendation nodes.
              Our directors specialize in a single domain, mastering its mechanics rather than skimming surfaces.
            </p>
          </div>

          <div className="p-6 bg-[#0E172A] rounded-lg border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-editorial font-bold text-white">
              No Freelance Pass-Offs
            </h3>
            <p className="leading-relaxed text-[#94A3B8]">
              When you work with Storylight Studios, your book is handled directly by named, verifiable experts.
              Emma oversees your Amazon strategy; Marcus writes and directs your trailer; Lily orchestrates audio.
            </p>
          </div>

          <div className="p-6 bg-[#0E172A] rounded-lg border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-editorial font-bold text-white">
              Integrated Synchrony
            </h3>
            <p className="leading-relaxed text-[#94A3B8]">
              Because our team collaborates under one unified methodology, your book trailer, author brand website,
              and Amazon A+ content speak with one singular aesthetic voice, maximizing brand trust.
            </p>
          </div>
        </div>
      </div>

      {/* Quantitative Impact */}
      <div className="space-y-6">
        <h2 className="text-2xl font-editorial font-bold text-white text-center">
          Our Cumulative Author Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="p-6 bg-[#0B1220] rounded-lg border border-white/5 space-y-1">
              <div className="text-3xl font-editorial font-bold text-gold-gradient tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Our Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            The Principles That Guide Every Book
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#0B1220] rounded-lg border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Diagnostic-First Truth</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              If a book has pacing problems or a cover that mismatches genre reader expectations, no amount of ads will save it.
              We diagnose the root friction honestly and address core weaknesses before spending a dollar on promotional momentum.
            </p>
          </div>

          <div className="p-6 bg-[#0B1220] rounded-lg border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Artistic Respect</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Your voice is sacred. We never impose cookie-cutter trends or ask authors to compromise their storytelling
              for cheap viral clicks. We build systems that elevate who you are as a literary creator.
            </p>
          </div>

          <div className="p-6 bg-[#0B1220] rounded-lg border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Radical Compliance</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Amazon and Goodreads take a zero-tolerance stance toward manipulated rankings and paid review schemes.
              Every strategy we deploy is 100% white-hat and durable, ensuring your account and books remain permanently safe.
            </p>
          </div>

          <div className="p-6 bg-[#0B1220] rounded-lg border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Backlist Longevity</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              A book launch is not a 24-hour flash in the pan. We build organic keyword architectures and reader communities
              designed to sell your book this month, next year, and across future backlist releases.
            </p>
          </div>
        </div>
      </div>

      {/* Action Strip */}
      <div className="p-8 sm:p-10 bg-gradient-to-r from-[#0F1A2E] to-[#0A101D] rounded-xl border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-editorial font-bold text-white">
            Discover the Difference a Dedicated Team Makes.
          </h3>
          <p className="text-xs text-[#94A3B8] mt-1">
            Explore our 13-person specialist team roster or submit your book for a preliminary diagnostic audit.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('team')}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#080D1A] hover:bg-[#15233E] border border-white/20 rounded-sm cursor-pointer"
          >
            Meet the Team
          </button>
          <button
            onClick={onOpenDiagnostic}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm cursor-pointer"
          >
            Request Diagnostic
          </button>
        </div>
      </div>
    </div>
  );
};

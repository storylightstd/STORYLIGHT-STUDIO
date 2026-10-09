import React from 'react';
import { PageId, PortfolioItem } from '../types';
import { COMPANY_STATS, SERVICES, TESTIMONIALS, PORTFOLIO_ITEMS, IMAGES } from '../data/content';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Play,
  CheckCircle2,
  BookOpen,
  Film,
  Search,
  Compass,
  Calendar,
  Feather,
  Share2,
  Headphones,
  Award,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
  onSelectTrailer: (item: PortfolioItem) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenDiagnostic,
  onSelectTrailer,
}) => {
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

  const trailers = PORTFOLIO_ITEMS.filter((item) => item.category === 'trailers');

  return (
    <div className="w-full space-y-24 md:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-20 overflow-hidden">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Storylight Studios Literary Production Studio"
            className="w-full h-full object-cover object-center brightness-[0.32] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/60 to-[#080D1A]/80" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#080D1A]/40 to-[#080D1A]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Unboxed Metadata Subtitle */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            <span>Specialist Book Growth</span>
            <span aria-hidden="true">·</span>
            <span>Creative Production</span>
            <span aria-hidden="true">·</span>
            <span>13-Person Specialist Team</span>
          </div>

          {/* Primary Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-bold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
            We Turn Buried Books into Enduring Literary Success.
          </h1>

          {/* Core Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto font-light leading-relaxed">
            Storylight Studios is a specialist book-growth and creative production consultancy.
            We guide authors with forensic visibility audits, Amazon & Goodreads dominance,
            cinematic book trailers, and launch execution backed by a 13-person specialist team.
          </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all shadow-lg shadow-[#D4AF37]/15 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Diagnostic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#F5F2EB] bg-[#0E172A]/80 hover:bg-[#1E293B] border border-[#D4AF37]/30 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore All 8 Services</span>
            </button>
          </div>

          {/* Trust Statement */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8] pt-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>100% Ethical & White-Hat · Strict Amazon KDP & Goodreads TOS Compliance</span>
          </div>
        </div>
      </section>

      {/* 2. Quantitative Rigor / Proof Metrics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1222] border border-[#D4AF37]/20 rounded-lg p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} space-y-1`}>
                <div className="text-3xl sm:text-4xl font-editorial font-bold text-gold-gradient tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white tracking-wide uppercase">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#94A3B8]">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Diagnostic-First Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              01. The Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white leading-tight">
              We Never Guess. We Begin With a Forensic Diagnosis.
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Most book marketing fails because it relies on generic promotional blasts into the void.
              At Storylight Studios, we treat every book as an intricate mechanical system.
              Founded by Hannah Cooper after a decade in traditional publishing, our framework pinpoints
              the precise failure points suppressing your organic reach.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong>Category Mismatch Identification:</strong> Fixing sub-category classifications that choke recommendation engines.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong>Forensic Keyword Architecture:</strong> Overhauling backend KDP 7-box queries using hard reader search volume data.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong>Listing Conversion Optimization:</strong> Aligning blurb hooks, editorial reviews, and A+ graphics to close sales.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] transition-colors cursor-pointer"
              >
                <span>Run your free author diagnostic assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/25 shadow-2xl bg-[#0F172A]">
              <img
                src={IMAGES.workspace}
                alt="Editorial Author Workspace"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#080D1A]/90 backdrop-blur-md rounded border border-white/10">
                <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Diagnostic Case Study
                </div>
                <div className="text-sm font-editorial text-white mt-0.5">
                  "Climbed from #94,000 to consistent Top 280 Amazon Sub-Category ranking in 8 weeks."
                </div>
                <div className="text-xs text-[#94A3B8] mt-1">
                  — E. R. Thorne · Debut Epic Fantasy Author
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities (Responsive Bento Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              02. Studio Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white mt-1">
              End-to-End Book Growth & Creative Production
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>View Full Service Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((srv) => (
            <div
              key={srv.id}
              className="bg-[#0B1220] border border-white/10 hover:border-[#D4AF37]/40 rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#14213B] rounded border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="font-editorial text-xl font-bold text-[#64748B] group-hover:text-[#D4AF37] transition-colors">
                    {srv.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-editorial font-bold text-white group-hover:text-[#F5F2EB] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-wider text-[#CBD5E1] font-semibold block">
                    Core Deliverables:
                  </span>
                  {srv.deliverables.slice(0, 2).map((del, dIdx) => (
                    <div key={dIdx} className="text-xs text-[#CBD5E1] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#64748B] italic truncate max-w-[200px]">
                  {srv.bestFor}
                </span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#D4AF37] group-hover:translate-x-1 transition-transform cursor-pointer"
                  aria-label={`Learn more about ${srv.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Highlighted Book-Trailer Portfolio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              03. Book Trailers & Creative Production
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white mt-1">
              Cinematic Teasers Built to Arrest Attention
            </h2>
            <p className="text-xs text-[#94A3B8] mt-1">
              Scripted, paced, and scored to drive pre-orders across BookTok, Instagram, and author landing hubs.
            </p>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Explore All Portfolio Works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trailers.map((trailer) => (
            <div
              key={trailer.id}
              className="bg-[#0B1220] border border-white/10 hover:border-[#D4AF37]/50 rounded-lg overflow-hidden group shadow-xl transition-all"
            >
              {/* Media Thumbnail Container with Play Overlay */}
              <div
                className="relative aspect-video overflow-hidden cursor-pointer"
                onClick={() => onSelectTrailer(trailer)}
              >
                <img
                  src={trailer.image}
                  alt={trailer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#080D1A]/80 border border-[#D4AF37] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#080D1A] transition-all shadow-lg backdrop-blur-sm">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-white border border-white/10">
                  {trailer.duration}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {trailer.genre}
                  </span>
                  <h3 className="text-xl font-editorial font-bold text-white mt-0.5">
                    {trailer.title}
                  </h3>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-[#CBD5E1] leading-relaxed italic">
                  "{trailer.logline}"
                </p>

                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2">
                  {trailer.achievements?.map((ach, aIdx) => (
                    <span
                      key={aIdx}
                      className="text-[11px] text-[#D4AF37] bg-[#142036] px-2.5 py-1 rounded border border-[#D4AF37]/20 flex items-center gap-1"
                    >
                      <Award className="w-3 h-3" />
                      <span>{ach}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">Author: {trailer.author}</span>
                  <button
                    onClick={() => onSelectTrailer(trailer)}
                    className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Watch Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Social Proof / Verified Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            04. Proven Author Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
            55+ Five-Star Reviews & Documented Ranking Surges
          </h2>
          <p className="text-xs text-[#94A3B8]">
            We do not invent testimonials. Every result below reflects real authors and verified book campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#0B1220] border border-white/10 rounded-lg p-6 flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="p-3 bg-[#131F36] rounded border-l-2 border-[#D4AF37]">
                  <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    {item.metricHighlight}
                  </div>
                  <div className="text-xs text-[#CBD5E1] mt-0.5 font-medium">
                    {item.outcomeDetail}
                  </div>
                </div>

                <p className="text-xs text-[#CBD5E1] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="text-sm font-semibold text-white font-editorial">
                  {item.authorName}
                </div>
                <div className="text-xs text-[#94A3B8]">
                  "{item.bookTitle}" · {item.genre}
                </div>
                <div className="text-[11px] text-[#D4AF37] pt-1">
                  {item.verifiedStatus}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('testimonials')}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F2EB] bg-[#0E172A] hover:bg-[#1E293B] border border-[#D4AF37]/30 rounded-sm transition-all cursor-pointer"
          >
            Read All Author Testimonials
          </button>
        </div>
      </section>

      {/* 7. The 13-Person Specialist Team Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#090F1E] border border-[#D4AF37]/20 rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                05. In-House Specialists
              </div>
              <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
                A Dedicated 13-Person Publishing Engine in Your Corner.
              </h2>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Led by Founder Hannah Cooper, our team features dedicated platform directors for Amazon,
                Goodreads, audiobook lifecycle, developmental editing, and cinematic trailers.
                You are never pawned off to automated algorithms or unaccountable gig freelancers.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#E2E8F0]">
                <span>· Hannah Cooper (Founder & CEO)</span>
                <span>· Lily John (Audiobook Director)</span>
                <span>· Emma Hoffmann (Amazon Director)</span>
                <span>· Lina Bauer (Goodreads Lead)</span>
                <span>· Natalie Foster (Intelligence Lead)</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={() => onNavigate('team')}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Meet All 13 Specialists
              </button>
              <button
                onClick={() => onNavigate('trust-ethics')}
                className="text-xs text-[#CBD5E1] hover:text-white underline-offset-4 hover:underline"
              >
                Read our 100% White-Hat Trust & Ethics Charter →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Conversion Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pb-12">
        <div className="p-10 md:p-14 bg-gradient-to-b from-[#111C31] to-[#0A101E] border border-[#D4AF37]/30 rounded-xl space-y-6 shadow-2xl">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white">
            Ready to Give Your Book the Audience It Deserves?
          </h2>

          <p className="text-sm text-[#CBD5E1] max-w-xl mx-auto leading-relaxed">
            Take the 2-minute diagnostic assessment or schedule a direct consultation with Hannah Cooper’s team.
            We will review your book's metadata, category placement, and reader traction with complete transparency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all shadow-md cursor-pointer"
            >
              Start Diagnostic Audit
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#080D1A] hover:bg-[#15233E] border border-white/20 rounded-sm transition-all cursor-pointer"
            >
              Contact Storylight Studios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

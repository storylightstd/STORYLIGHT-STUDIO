import React, { useState } from 'react';
import { PageId, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../data/content';
import { LEGACY_BOOKS } from '../data/oldPortfolio';
import { Play, Sparkles, Film, ArrowRight, Award, Compass, Music, CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
  onSelectTrailer: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onNavigate,
  onOpenDiagnostic,
  onSelectTrailer,
}) => {
  const [filter, setFilter] = useState<'all' | 'trailers' | 'branding'>('all');
  const [bookFilter, setBookFilter] = useState('All');

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });
  const bookFilters = ['All', ...Array.from(new Set(LEGACY_BOOKS.map((book) => book.genre))).slice(0, 12)];
  const filteredBooks = bookFilter === 'All' ? LEGACY_BOOKS : LEGACY_BOOKS.filter((book) => book.genre === bookFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          Selected Author Works
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          Cinematic Production & Author Brand Showcase
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          Explore our portfolio of high-impact book trailers, editorial author platforms, and visual assets
          engineered to arrest attention in saturated book markets.
        </p>
      </div>

      {/* Filter Tabs (Functional segmented buttons) */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          All Showcases
        </button>
        <button
          onClick={() => setFilter('trailers')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'trailers'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Cinematic Book Trailers
        </button>
        <button
          onClick={() => setFilter('branding')}
          className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
            filter === 'branding'
              ? 'bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/50'
              : 'bg-[#0B1220] text-[#94A3B8] border border-white/5 hover:text-white'
          }`}
        >
          Author Branding & Websites
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0B1220] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl overflow-hidden group transition-all flex flex-col justify-between shadow-xl"
          >
            {/* Visual Media Container */}
            <div
              className="relative aspect-video overflow-hidden cursor-pointer bg-black"
              onClick={() => {
                if (item.category === 'trailers') {
                  onSelectTrailer(item);
                }
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              {/* Play overlay for trailers */}
              {item.category === 'trailers' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#080D1A]/85 border border-[#D4AF37] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#080D1A] transition-all shadow-xl backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] bg-[#080D1A]/80 px-2.5 py-1 rounded border border-[#D4AF37]/30 font-semibold backdrop-blur-sm">
                  {item.category === 'trailers' ? 'Book Trailer' : 'Author Brand Platform'}
                </span>
                {item.duration && (
                  <span className="text-[11px] font-mono text-white bg-black/70 px-2 py-0.5 rounded border border-white/10">
                    {item.duration}
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-[#CBD5E1]">By {item.author}</div>
                <h3 className="text-2xl font-editorial font-bold text-white mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <span className="text-white font-medium">{item.genre}</span>
                  <span aria-hidden="true">·</span>
                  <span>Produced by Storylight Studios</span>
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed italic">
                  "{item.logline}"
                </p>

                {item.synopsis && (
                  <p className="text-xs text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">
                    {item.synopsis}
                  </p>
                )}

                {item.soundscape && (
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] bg-[#0E172A] p-2.5 rounded border border-[#D4AF37]/20">
                    <Music className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] leading-tight">{item.soundscape}</span>
                  </div>
                )}
              </div>

              {/* Achievements & Action */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                {item.achievements && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.achievements.map((ach, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[11px] text-[#CBD5E1] bg-[#121E36] px-2.5 py-1 rounded border border-white/10 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                        <span>{ach}</span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  {item.category === 'trailers' ? (
                    <button
                      onClick={() => onSelectTrailer(item)}
                      className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open Full Trailer Player</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire About Author Web Platform</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Imported former-site selected work catalog */}
      <section className="space-y-8" aria-labelledby="former-selected-work">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Former Selected Work Catalog</div>
          <h2 id="former-selected-work" className="text-3xl sm:text-4xl font-editorial font-bold text-white">Books, covers, and reader links from the original site.</h2>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">This catalogue preserves the 65 titles displayed on the former Storylight Studios site. These covers are illustrative examples of genres and markets served; they are not presented as client engagements unless a separate case study says so. Where the former site did not provide a direct retailer URL, the buttons open a clearly labelled search.</p>
        </div>
        <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
          {bookFilters.map((label) => (
            <button key={label} onClick={() => setBookFilter(label)} className={`px-3 py-2 text-[11px] font-semibold rounded-sm border transition-all cursor-pointer ${bookFilter === label ? 'bg-[#182642] text-[#D4AF37] border-[#D4AF37]/50' : 'bg-[#0B1220] text-[#94A3B8] border-white/10 hover:text-white'}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredBooks.map((book) => (
            <article key={book.id} className="bg-[#0B1220] border border-white/10 rounded-lg overflow-hidden hover:border-[#D4AF37]/50 transition-colors">
              <img src={book.coverUrl} alt={`${book.title} by ${book.author}`} loading="lazy" referrerPolicy="no-referrer" className="w-full aspect-[2/3] object-cover bg-[#1A1A1A]" />
              <div className="p-3 space-y-2">
                <div className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-semibold">{book.service}</div>
                <h3 className="text-sm font-editorial font-bold text-white leading-tight">{book.title}</h3>
                <p className="text-[11px] text-[#CBD5E1]">{book.author}</p>
                <p className="text-[10px] text-[#94A3B8]">{book.genre}</p>
                <div className="flex gap-2 pt-1">
                  <a href={book.amazonUrl} target="_blank" rel="noreferrer" className="text-[10px] text-[#E6CA85] hover:text-white underline">Amazon</a>
                  <a href={book.goodreadsUrl} target="_blank" rel="noreferrer" className="text-[10px] text-[#E6CA85] hover:text-white underline">Goodreads</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Production Architecture Section */}
      <div className="bg-[#0B1220] border border-[#D4AF37]/20 rounded-xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Our Production Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            How Storylight Crafts a Book Trailer
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            We do not use cookie-cutter Canva stock slides. Every trailer is treated as a narrative cinematic short.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#CBD5E1]">
          <div className="p-5 bg-[#0E172A] rounded-lg border border-white/5 space-y-2">
            <span className="font-editorial text-lg text-[#D4AF37] font-bold block">01. Narrative Scripting</span>
            <p className="text-[#94A3B8] leading-relaxed">
              We dissect your manuscript's high-tension narrative premise, drafting script beats specifically optimized to hook casual viewers in the first 3 seconds.
            </p>
          </div>
          <div className="p-5 bg-[#0E172A] rounded-lg border border-white/5 space-y-2">
            <span className="font-editorial text-lg text-[#D4AF37] font-bold block">02. Cinematic Pacing & Motion</span>
            <p className="text-[#94A3B8] leading-relaxed">
              Led by Marcus Vance, our video production arm cuts both 16:9 widescreen formats for author websites and YouTube, plus 9:16 vertical edits for BookTok and Reels.
            </p>
          </div>
          <div className="p-5 bg-[#0E172A] rounded-lg border border-white/5 space-y-2">
            <span className="font-editorial text-lg text-[#D4AF37] font-bold block">03. Bespoke Sound Design</span>
            <p className="text-[#94A3B8] leading-relaxed">
              Tyler Brooks engineers tailored orchestral themes, subtle tension builds, and atmospheric sound effects that elevate emotional resonance.
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all cursor-pointer"
          >
            Commission a Book Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

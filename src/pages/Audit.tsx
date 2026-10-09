import React, { useMemo, useState } from 'react';
import { ArrowRight, BarChart3, CheckCircle2, Link2, ShieldCheck, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface AuditProps { onNavigate: (page: PageId) => void; }

const score = (value: number) => Math.max(0, Math.min(100, value));

export const Audit: React.FC<AuditProps> = ({ onNavigate }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [stage, setStage] = useState('');
  const [retailer, setRetailer] = useState('');
  const [authorSite, setAuthorSite] = useState('');
  const [hasDescription, setHasDescription] = useState(false);
  const [hasNewsletter, setHasNewsletter] = useState(false);
  const [hasReviews, setHasReviews] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const report = useMemo(() => {
    const completeness = [title, genre, stage, retailer, authorSite].filter(Boolean).length * 12;
    return {
      discoverability: score(24 + (genre ? 22 : 0) + (retailer ? 24 : 0) + (hasReviews ? 18 : 0)),
      conversion: score(20 + (title ? 15 : 0) + (hasDescription ? 28 : 0) + (authorSite ? 20 : 0)),
      launch: score(24 + (stage ? 20 : 0) + (hasNewsletter ? 25 : 0) + (retailer ? 18 : 0)),
      trust: score(30 + (authorSite ? 25 : 0) + (hasReviews ? 20 : 0) + (hasNewsletter ? 15 : 0)),
      completeness: score(completeness),
    };
  }, [title, genre, stage, retailer, authorSite, hasDescription, hasNewsletter, hasReviews]);

  const overall = Math.round((report.discoverability + report.conversion + report.launch + report.trust) / 4);
  const recommendations = [
    !retailer && 'Add the primary retailer or book page so search and conversion friction can be reviewed.',
    !hasDescription && 'Review the book description for a clear promise, audience signal, and strong opening hook.',
    !authorSite && 'Create an owned author home with a reader magnet and one clear next action.',
    !hasNewsletter && 'Add a permission-based reader newsletter rather than relying only on rented social reach.',
    !hasReviews && 'Build a genuine review request process; never buy reviews or use incentivized review rings.',
  ].filter(Boolean) as string[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl space-y-4 mb-12">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Sage Marketing Intelligence</div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white leading-[1.05]">A calm, practical audit of your book’s discoverability.</h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">Use this private browser-based pre-audit to identify missing signals across discovery, conversion, launch readiness, and reader trust. It is a planning tool—not a guaranteed result or a substitute for platform data.</p>
      </div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
        <section className="bg-[#0B1220] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3"><BarChart3 className="text-[#D4AF37]" /><div><h2 className="text-xl font-editorial font-bold text-white">Build your pre-audit</h2><p className="text-xs text-[#94A3B8]">No account or payment required.</p></div></div>
          <label className="block text-xs text-[#CBD5E1]">Book title<input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. The Glass Orchard" className="mt-2 w-full rounded border border-white/10 bg-[#080D1A] p-3 text-sm text-white outline-none focus:border-[#D4AF37]" /></label>
          <label className="block text-xs text-[#CBD5E1]">Genre<select value={genre} onChange={e => setGenre(e.target.value)} className="mt-2 w-full rounded border border-white/10 bg-[#080D1A] p-3 text-sm text-white outline-none focus:border-[#D4AF37]"><option value="">Choose one</option><option>Fantasy / Sci-Fi</option><option>Mystery & Thriller</option><option>Historical Fiction</option><option>Literary Fiction</option><option>Non-Fiction & Memoir</option><option>Young Adult</option></select></label>
          <label className="block text-xs text-[#CBD5E1]">Lifecycle stage<select value={stage} onChange={e => setStage(e.target.value)} className="mt-2 w-full rounded border border-white/10 bg-[#080D1A] p-3 text-sm text-white outline-none focus:border-[#D4AF37]"><option value="">Choose one</option><option>Polishing manuscript</option><option>Pre-launch</option><option>Fresh release</option><option>Backlist title</option></select></label>
          <label className="block text-xs text-[#CBD5E1]">Primary book or retailer link<input value={retailer} onChange={e => setRetailer(e.target.value)} placeholder="https://..." className="mt-2 w-full rounded border border-white/10 bg-[#080D1A] p-3 text-sm text-white outline-none focus:border-[#D4AF37]" /></label>
          <label className="block text-xs text-[#CBD5E1]">Author website, if available<input value={authorSite} onChange={e => setAuthorSite(e.target.value)} placeholder="https://..." className="mt-2 w-full rounded border border-white/10 bg-[#080D1A] p-3 text-sm text-white outline-none focus:border-[#D4AF37]" /></label>
          <div className="space-y-2 text-sm text-[#CBD5E1]">
            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">Current signals</p>
            {[[hasDescription, setHasDescription, 'The book description clearly states the promise and audience'], [hasNewsletter, setHasNewsletter, 'There is a permission-based reader newsletter'], [hasReviews, setHasReviews, 'The book has genuine reader reviews']].map(([checked, setChecked, label]) => <label key={label as string} className="flex gap-3 items-start"><input type="checkbox" checked={checked as boolean} onChange={e => (setChecked as React.Dispatch<React.SetStateAction<boolean>>)(e.target.checked)} className="mt-1 accent-[#D4AF37]" /><span>{label as string}</span></label>)}
          </div>
          <button onClick={() => setSubmitted(true)} className="w-full px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm flex items-center justify-center gap-2">Generate preliminary report <ArrowRight className="w-4 h-4" /></button>
          <p className="text-[11px] text-[#64748B]">Your entries are used locally in this preview and are not presented as verified market data.</p>
        </section>

        <section className="bg-[#0B1220] border border-[#D4AF37]/25 rounded-xl p-6 sm:p-8 space-y-7">
          <div className="flex items-start justify-between gap-4"><div><div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Preliminary signal report</div><h2 className="text-3xl font-editorial font-bold text-white mt-2">{submitted && title ? title : 'Your book'}</h2></div><div className="text-right"><div className="text-4xl font-editorial text-[#D4AF37]">{overall}</div><div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">signal / 100</div></div></div>
          <div className="grid sm:grid-cols-2 gap-3">{[['Discoverability', report.discoverability], ['Listing conversion', report.conversion], ['Launch readiness', report.launch], ['Reader trust', report.trust]].map(([label, value]) => <div key={label as string} className="bg-[#0E172A] border border-white/5 rounded-lg p-4"><div className="flex justify-between text-xs text-[#CBD5E1]"><span>{label as string}</span><span className="text-[#D4AF37]">{value as number}</span></div><div className="h-2 bg-black/30 rounded-full mt-3 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#C5A059] to-[#F3E5AB]" style={{ width: `${value}%` }} /></div></div>)}</div>
          <div className="border-t border-white/10 pt-6"><h3 className="text-xs uppercase tracking-wider text-[#CBD5E1] mb-3">Recommended next checks</h3>{recommendations.length ? <ul className="space-y-3">{recommendations.map(item => <li key={item} className="flex gap-2 text-sm text-[#CBD5E1]"><Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />{item}</li>)}</ul> : <div className="flex gap-2 text-sm text-[#CBD5E1]"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />The basic signals are present. A human review should now examine the actual listing, comparable titles, and platform data.</div>}</div>
          <div className="p-4 bg-[#080D1A] border-l-2 border-[#D4AF37] text-xs text-[#94A3B8] flex gap-3"><ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" /><span>Storylight’s approach is white-hat: no fake reviews, bots, click farms, or guaranteed rankings. This report highlights questions to investigate, not promises.</span></div>
          <div className="flex flex-wrap gap-3"><button onClick={() => onNavigate('contact')} className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-[#D4AF37] rounded-sm">Request human review <ArrowRight className="inline w-4 h-4 ml-1" /></button>{retailer && <a href={retailer} target="_blank" rel="noreferrer" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] border border-white/15 rounded-sm">Open book link <Link2 className="inline w-4 h-4 ml-1" /></a>}</div>
        </section>
      </div>
    </div>
  );
};

import React from 'react';
import { PageId } from '../types';
import { TRUST_ETHICS_CHARTER } from '../data/content';
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Lock, Eye, Award } from 'lucide-react';

interface TrustAndEthicsProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const TrustAndEthics: React.FC<TrustAndEthicsProps> = ({
  onNavigate,
  onOpenDiagnostic,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Trust, Ethics & Compliance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          100% White-Hat. 100% Compliant with Amazon & Goodreads TOS.
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          The book growth market is rife with predatory agencies selling dangerous black-hat shortcuts that jeopardize author accounts.
          Here is our absolute, legally compliant ethical charter.
        </p>
      </div>

      {/* Warning / Comparison Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Danger of Black-Hat Practices */}
        <div className="bg-[#120B0E] border border-rose-500/20 rounded-xl p-8 space-y-5">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>What We Strictly Refuse to Do (Black-Hat Tactics)</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-white">
            Techniques That Put Your Book at Risk
          </h3>
          <ul className="space-y-3 text-xs text-[#CBD5E1]">
            <li className="flex items-start gap-2.5">
              <span className="text-rose-400 font-bold shrink-0">✕</span>
              <span>
                <strong>Paid or Incentivized Reviews:</strong> Paying individuals or services to leave customer reviews violates Amazon Anti-Manipulation policies and can trigger account termination.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-rose-400 font-bold shrink-0">✕</span>
              <span>
                <strong>Goodreads Rating Rings & Bots:</strong> Swapping ratings through automated dummy profiles degrades book reputation and triggers Goodreads spam sweeps.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-rose-400 font-bold shrink-0">✕</span>
              <span>
                <strong>Click Farms & Page-Flip Manipulation:</strong> Artificial KENP page reads violate KDP Select terms and lead to withheld royalties.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-rose-400 font-bold shrink-0">✕</span>
              <span>
                <strong>Vague "Guaranteed Best Seller" Promises:</strong> Manipulating a $0.99 category for 15 minutes in a dead sub-category is vanity spam, not sustainable readership.
              </span>
            </li>
          </ul>
        </div>

        {/* The Storylight Standard */}
        <div className="bg-[#0B1526] border border-[#D4AF37]/30 rounded-xl p-8 space-y-5">
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>The Storylight Standard (White-Hat Methodology)</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-white">
            Ethical, Permanent Organic Mechanics
          </h3>
          <ul className="space-y-3 text-xs text-[#CBD5E1]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                <strong>Forensic Metadata Architecture:</strong> Structuring legitimate KDP search queries and accurate BISAC/Amazon categories so real readers naturally discover your listing.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                <strong>Ethical Listopia & Shelf Dynamics:</strong> Positioning your book within relevant, reader-curated thematic lists based on authentic genre affinity.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                <strong>Advance Reader Copy (ARC) Management:</strong> Compliant distribution of review copies to vetted reader communities with zero review mandates.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                <strong>Cinematic Production Value:</strong> Arresting reader curiosity through high-production trailers, refined websites, and organic BookTok interest.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* The 4 Core Ethical Pillars */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Our 4 Ethical Guarantees
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            How We Protect Your Literary Career
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRUST_ETHICS_CHARTER.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0B1220] border border-white/10 rounded-xl p-8 space-y-4 hover:border-[#D4AF37]/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-editorial text-2xl font-bold text-[#D4AF37]">
                  0{idx + 1}.
                </span>
                <h3 className="text-xl font-editorial font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {item.desc}
              </p>

              <div className="pt-3 border-t border-white/5 space-y-2">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Author Rights & Account Independence Notice */}
      <div className="p-8 sm:p-10 bg-[#080E1B] border border-white/10 rounded-xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
          <Lock className="w-4 h-4" />
          <span>100% Author Ownership Guarantee</span>
        </div>
        <h3 className="text-xl font-editorial font-bold text-white">
          You Retain All Intellectual Property & Account Access
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
          Unlike vanity presses or restrictive marketing aggregators, Storylight Studios never asks for ownership of your copyright,
          never takes a percentage of your book royalties, and never locks you into proprietary distributor accounts.
          All websites, trailers, and metadata implementations are delivered directly to your control.
        </p>
      </div>

      {/* Call to action */}
      <div className="text-center space-y-4 pt-4">
        <h3 className="text-2xl font-editorial font-bold text-white">
          Experience Ethical, Data-Backed Book Growth
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={onOpenDiagnostic}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all cursor-pointer"
          >
            Start Free Diagnostic Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

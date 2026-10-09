import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, BookOpen, Layers, BarChart3 } from 'lucide-react';
import { PageId } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: (prefill: {
    genre: string;
    stage: string;
    challenge: string;
    recommendedServices: string[];
  }) => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [genre, setGenre] = useState('');
  const [stage, setStage] = useState('');
  const [challenge, setChallenge] = useState('');

  if (!isOpen) return null;

  const genres = [
    'Fantasy / Sci-Fi',
    'Mystery & Thriller',
    'Historical Fiction',
    'Contemporary / Romance',
    'Literary Fiction',
    'Non-Fiction & Memoir',
    'Young Adult',
  ];

  const stages = [
    { id: 'editing', label: 'Polishing Manuscript', sub: 'Editing & pre-formatting phase' },
    { id: 'prelaunch', label: 'Pre-Launch (1–3 Months Away)', sub: 'Setting up pre-orders & ARCs' },
    { id: 'just-launched', label: 'Fresh Release (0–60 Days)', sub: 'Active launch momentum window' },
    { id: 'backlist', label: 'Existing Backlist Title', sub: 'Needs organic algorithmic revitalization' },
  ];

  const challenges = [
    {
      id: 'amazon',
      title: 'Buried on Amazon Algorithms',
      desc: 'Lost past ranking 50,000; poor category indexing or high cost-per-click ads.',
    },
    {
      id: 'goodreads',
      title: 'Stalled Goodreads & Reviews',
      desc: 'Struggling to reach 50+ genuine reader reviews or Listopia momentum.',
    },
    {
      id: 'creative',
      title: 'Need High-Impact Book Trailer & Assets',
      desc: 'Lacking visual media, BookTok hooks, or high-conversion video assets.',
    },
    {
      id: 'full-growth',
      title: 'Comprehensive 13-Person Launch Support',
      desc: 'End-to-end guidance spanning strategy, audio, web, and release scheduling.',
    },
  ];

  const getRecommendations = () => {
    const list: string[] = ['Book Visibility Strategy (Diagnostic-First Audit)'];
    if (challenge === 'amazon') {
      list.push('Amazon & Goodreads Support', 'Metadata & Keyword Architecture');
    } else if (challenge === 'goodreads') {
      list.push('Goodreads Growth Strategy & Listopia Mapping', 'ARC Velocity Coordination');
    } else if (challenge === 'creative') {
      list.push('Cinematic Book Trailers & Production', 'Social Media & BookTok Growth');
    } else {
      list.push('Launch Countdown Planning', 'Author Branding & Websites', 'Audiobook Strategy');
    }
    return list;
  };

  const handleComplete = () => {
    const recs = getRecommendations();
    onNavigateToContact({
      genre: genre || 'Fiction',
      stage: stage || 'Pre-Launch',
      challenge: challenge || 'Visibility Optimization',
      recommendedServices: recs,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0C1322] border border-[#D4AF37]/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#080D1A]/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-lg font-editorial font-semibold text-white">
              Author Book-Growth Diagnostic Audit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-white rounded-full cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="px-6 pt-4 pb-2 bg-[#0A101D] border-b border-white/5 flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-1.5 font-medium">
            <span className={step >= 1 ? 'text-[#D4AF37]' : ''}>1. Genre</span>
            <span>·</span>
            <span className={step >= 2 ? 'text-[#D4AF37]' : ''}>2. Stage</span>
            <span>·</span>
            <span className={step >= 3 ? 'text-[#D4AF37]' : ''}>3. Friction</span>
            <span>·</span>
            <span className={step >= 4 ? 'text-[#D4AF37]' : ''}>4. Diagnosis</span>
          </div>
          <span className="text-xs text-[#CBD5E1]">Step {step} of 4</span>
        </div>

        {/* Step Body */}
        <div className="p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-editorial text-white">What genre does your book inhabit?</h4>
                <p className="text-sm text-[#94A3B8] mt-1">
                  Genre taxonomy dictates specific sub-category algorithms and reader discovery channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`p-3 text-left rounded-md text-sm transition-all border cursor-pointer ${
                      genre === g
                        ? 'bg-[#15233E] border-[#D4AF37] text-white font-medium shadow-sm'
                        : 'bg-[#0F172A]/70 border-white/10 text-[#C5D0E0] hover:border-white/30'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  disabled={!genre}
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:from-[#F4E0A6] hover:to-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-editorial text-white">Where is this book in its lifecycle?</h4>
                <p className="text-sm text-[#94A3B8] mt-1">
                  Launch timing determines whether we focus on advance reader copy (ARC) velocity or backlist revitalization.
                </p>
              </div>

              <div className="space-y-2.5">
                {stages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStage(s.label)}
                    className={`w-full p-3.5 text-left rounded-md transition-all border cursor-pointer ${
                      stage === s.label
                        ? 'bg-[#15233E] border-[#D4AF37] text-white shadow-sm'
                        : 'bg-[#0F172A]/70 border-white/10 text-[#C5D0E0] hover:border-white/30'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white">{s.label}</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5">{s.sub}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-[#94A3B8] hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  disabled={!stage}
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:from-[#F4E0A6] hover:to-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-editorial text-white">What is your primary visibility friction?</h4>
                <p className="text-sm text-[#94A3B8] mt-1">
                  Select the greatest bottleneck standing between your book and genuine readers.
                </p>
              </div>

              <div className="space-y-2.5">
                {challenges.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setChallenge(c.id)}
                    className={`w-full p-3.5 text-left rounded-md transition-all border cursor-pointer ${
                      challenge === c.id
                        ? 'bg-[#15233E] border-[#D4AF37] text-white shadow-sm'
                        : 'bg-[#0F172A]/70 border-white/10 text-[#C5D0E0] hover:border-white/30'
                    }`}
                  >
                    <div className="text-sm font-semibold text-white">{c.title}</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5">{c.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs text-[#94A3B8] hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  disabled={!challenge}
                  onClick={() => setStep(4)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:from-[#F4E0A6] hover:to-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Generate Diagnostic Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="p-4 bg-[#101B2E] border border-[#D4AF37]/30 rounded-md">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Preliminary Studio Assessment Ready</span>
                </div>
                <h4 className="text-lg font-editorial text-white">
                  Targeted Blueprint for {genre} · {stage}
                </h4>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Based on our diagnostic framework, our 13-person specialist team recommends initiating
                  a forensic keyword and category audit before deploying production assets.
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2.5">
                  Recommended Specialist Protocols:
                </h5>
                <ul className="space-y-2">
                  {getRecommendations().map((rec) => (
                    <li
                      key={rec}
                      className="flex items-start gap-2.5 text-xs text-[#E2E8F0] p-2 rounded bg-[#090E1A] border border-white/5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[#080D1A] border-l-2 border-[#D4AF37] text-xs text-[#94A3B8]">
                <span>
                  All services are 100% white-hat and compliant with Amazon KDP & Goodreads terms of service.
                  No artificial bots, no paid review farms.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setStep(3)}
                  className="w-full sm:w-auto px-4 py-2 text-xs text-[#94A3B8] hover:text-white cursor-pointer"
                >
                  Adjust Answers
                </button>
                <button
                  onClick={handleComplete}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm hover:from-[#F4E0A6] hover:to-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Submit Diagnostic to Hannah Cooper</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

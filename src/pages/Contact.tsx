import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Mail, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Send, Clock, BookOpen } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
  initialService?: string;
  diagnosticPrefill?: {
    genre: string;
    stage: string;
    challenge: string;
    recommendedServices: string[];
  } | null;
}

export const Contact: React.FC<ContactProps> = ({
  onNavigate,
  initialService,
  diagnosticPrefill,
}) => {
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [stage, setStage] = useState('Pre-Launch (1–3 Months Away)');
  const [serviceFocus, setServiceFocus] = useState('');
  const [bookLink, setBookLink] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceFocus(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (diagnosticPrefill) {
      if (diagnosticPrefill.genre) setGenre(diagnosticPrefill.genre);
      if (diagnosticPrefill.stage) setStage(diagnosticPrefill.stage);
      if (diagnosticPrefill.recommendedServices.length > 0) {
        setServiceFocus(diagnosticPrefill.recommendedServices[0]);
      }
      setMessage(
        `Diagnostic Assessment Summary:\n- Genre: ${diagnosticPrefill.genre}\n- Lifecycle Stage: ${diagnosticPrefill.stage}\n- Friction Point: ${diagnosticPrefill.challenge}\n- Recommended Focus: ${diagnosticPrefill.recommendedServices.join(', ')}\n\nHello Hannah,\nI would like to discuss next steps for my book.`
      );
    }
  }, [diagnosticPrefill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !email) return;

    const subject = `Storylight inquiry from ${authorName}${bookTitle ? ` — ${bookTitle}` : ''}`;
    const body = [
      `Author: ${authorName}`,
      `Email: ${email}`,
      `Book / series: ${bookTitle || 'Not provided'}`,
      `Genre: ${genre || 'Not provided'}`,
      `Release stage: ${stage}`,
      `Service focus: ${serviceFocus || 'Not provided'}`,
      `Book link or ASIN: ${bookLink || 'Not provided'}`,
      '',
      message || 'No additional message provided.',
    ].join('\n');

    setSubmitting(true);
    window.location.href = `mailto:info@storylightstd.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          Initiate Contact & Diagnostic Review
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white tracking-tight leading-[1.1]">
          Let’s Diagnose Your Book’s Growth Architecture.
        </h1>
        <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
          Whether you are preparing an advance reader copy launch, seeking a cinematic book trailer,
          or diagnosing stalled Amazon sub-category rankings, our 13-person team will review your book with complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#0B1220] border border-[#D4AF37]/25 rounded-xl p-8 sm:p-10 shadow-xl">
            {isSubmitted ? (
              <div className="space-y-6 text-center py-10 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-editorial font-bold text-white">
                  Your email draft is ready
                </h3>
                <p className="text-sm text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{authorName}</strong>. Your email app should now contain a draft addressed to{' '}
                  <a className="text-[#D4AF37] underline" href="mailto:info@storylightstd.org">info@storylightstd.org</a>.
                  Please send it to complete the inquiry.
                </p>

                <div className="p-4 bg-[#080D1A] rounded-lg border border-white/5 text-xs text-[#94A3B8] max-w-md mx-auto text-left space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>What happens next:</span>
                  </div>
                  <ul className="space-y-1 pl-6 list-disc text-[11px]">
                    <li>Check that your email draft opened correctly.</li>
                    <li>Send the message to <span className="text-white">info@storylightstd.org</span>.</li>
                    <li>The team can reply to <span className="text-white">{email}</span> after receiving it.</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setAuthorName('');
                      setEmail('');
                      setBookTitle('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs text-[#94A3B8] hover:text-white border border-white/10 rounded-sm cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-editorial font-bold text-white">
                    Book & Author Profile
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Provide the essentials so we can analyze your title before we speak.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                      Author Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Hannah Cooper"
                      className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="author@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Book Title & Genre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                      Book Title / Series Name
                    </label>
                    <input
                      type="text"
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      placeholder="e.g. The Sovereign Tide"
                      className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                      Primary Genre
                    </label>
                    <input
                      type="text"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      placeholder="e.g. Dark Fantasy, Historical, Thriller"
                      className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Stage & Service Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                      Current Release Stage
                    </label>
                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="Manuscript / In Editing">Manuscript / In Editing</option>
                      <option value="Pre-Launch (1–3 Months Away)">Pre-Launch (1–3 Months Away)</option>
                      <option value="Fresh Release (0–60 Days)">Fresh Release (0–60 Days)</option>
                      <option value="Published Backlist Revitalization">Published Backlist Revitalization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                      Primary Service Focus
                    </label>
                    <input
                      type="text"
                      value={serviceFocus}
                      onChange={(e) => setServiceFocus(e.target.value)}
                      placeholder="e.g. Book Trailers, Amazon Strategy"
                      className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Optional Amazon / Goodreads / Website link */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                    Amazon / Goodreads Link or ASIN <span className="text-[#94A3B8] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={bookLink}
                    onChange={(e) => setBookLink(e.target.value)}
                    placeholder="https://amazon.com/dp/... or ASIN"
                    className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                  />
                </div>

                {/* Message / Friction */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                    What challenges is your book currently experiencing?
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your target readers, what you've tried so far, and your timeline..."
                    className="w-full px-3.5 py-2.5 bg-[#080E1B] border border-white/10 rounded focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Analyzing Book Architecture...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Book for Diagnostic Review</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#94A3B8] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Strict Confidentiality · Your manuscript and ideas are 100% protected</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right: Studio Direct Contact & Transparency */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#0B1220] border border-white/10 rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-editorial font-bold text-white">
              Studio Communication Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#94A3B8] block">Direct Executive Email:</span>
                  <a
                    href="mailto:info@storylightstd.org"
                    className="text-white hover:text-[#D4AF37] font-medium transition-colors"
                  >
                    info@storylightstd.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#94A3B8] block">Response Turnaround:</span>
                  <span className="text-white font-medium">Within 24–48 Business Hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#94A3B8] block">Compliance Standard:</span>
                  <span className="text-[#D4AF37] font-medium">100% White-Hat · Verified Methodology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic Process Box */}
          <div className="bg-[#080E1B] border border-[#D4AF37]/20 rounded-xl p-8 space-y-4">
            <h4 className="text-base font-editorial font-bold text-white">
              How the Diagnostic Review Works
            </h4>
            <div className="space-y-3 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#D4AF37] font-bold">1.</span>
                <span>
                  <strong>Data Ingestion:</strong> We assess your Amazon listing, Goodreads presence, and metadata indexing using forensic tools.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#D4AF37] font-bold">2.</span>
                <span>
                  <strong>Friction Audit:</strong> We identify whether reader drop-off is driven by category misalignment, hook deficiency, or lack of visual trailers.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#D4AF37] font-bold">3.</span>
                <span>
                  <strong>Bespoke Roadmap:</strong> Hannah Cooper and our platform leads present actionable recommendations without generic sales pressure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

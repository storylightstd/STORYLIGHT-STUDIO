import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid author email address.');
      return;
    }

    setErrorMessage('');
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <div className="glass-card rounded-xl p-8 sm:p-10 mb-14 border border-[#D4AF37]/25 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#1E2E4A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Copy & Value Proposition */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weekly Author Growth Dispatches</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight leading-tight">
            Forensic Amazon, Goodreads & Launch Insights in Your Inbox.
          </h3>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl">
            Join over 1,800 authors receiving our private weekly breakdown: algorithm indexing shifts,
            converting A+ layout structures, BookTok video pacing hooks, and ethical visibility case studies.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-[#94A3B8] pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Strictly zero spam · 100% actionable author strategy · Unsubscribe anytime</span>
          </div>
        </div>

        {/* Right: Signup Form & States */}
        <div className="lg:col-span-5">
          {status === 'success' ? (
            <div className="bg-[#080E1B]/90 border border-[#D4AF37]/40 rounded-lg p-6 text-center space-y-3 animate-in fade-in duration-300">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-editorial font-bold text-white">
                Welcome to Storylight Dispatches
              </h4>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                We’ve sent your welcome dispatch and our complimentary <strong className="text-white">Author Visibility Checklist</strong> to <span className="text-[#D4AF37]">{email}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setEmail('');
                }}
                className="text-[11px] text-[#94A3B8] hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Register another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Enter your author email..."
                      className="w-full pl-10 pr-4 py-3 bg-[#080E1B]/90 border border-white/15 rounded text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-all shadow-inner"
                      aria-label="Author email address"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded transition-all shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    {status === 'loading' ? (
                      <span>Joining...</span>
                    ) : (
                      <>
                        <span>Get Insights</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-400 mt-1.5 pl-1 animate-in fade-in">
                    {errorMessage}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#64748B] px-1">
                <span>Delivered every Tuesday morning</span>
                <span>Curated by Hannah Cooper</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

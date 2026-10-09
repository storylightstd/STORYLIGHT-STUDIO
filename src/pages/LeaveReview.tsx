import React, { useState } from 'react';
import { PageId } from '../types';
import { Star, ShieldCheck } from 'lucide-react';

interface LeaveReviewProps { onNavigate: (page: PageId) => void; }

export const LeaveReview: React.FC<LeaveReviewProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-10">
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Author feedback</div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-white">Share your Storylight experience.</h1>
        <p className="text-base text-[#CBD5E1] leading-relaxed">Authors may submit a review after working with Storylight Studios. Every submission is checked manually before it can appear publicly.</p>
      </div>
      <div className="p-5 bg-[#0B1220] border border-[#D4AF37]/25 rounded-xl flex gap-3 text-sm text-[#CBD5E1]">
        <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
        <span>Reviews are not published instantly. We verify the author relationship and permission to publish first. A “Verified Client” label is added only after manual confirmation.</span>
      </div>
      {submitted ? (
        <div className="p-8 bg-[#0B1220] border border-[#D4AF37]/30 rounded-xl space-y-3">
          <h2 className="text-2xl font-editorial font-bold text-white">Thank you — your review was received.</h2>
          <p className="text-sm text-[#CBD5E1]">Your submission is pending manual verification. We will contact you if we need clarification.</p>
          <button onClick={() => onNavigate('home')} className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-[#D4AF37] rounded-sm">Return home</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-[#0B1220] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="text-xs text-[#CBD5E1]">Author name<input required className="mt-2 w-full bg-[#080D1A] border border-white/10 rounded px-3 py-3 text-white" /></label>
            <label className="text-xs text-[#CBD5E1]">Email<input required type="email" className="mt-2 w-full bg-[#080D1A] border border-white/10 rounded px-3 py-3 text-white" /></label>
            <label className="text-xs text-[#CBD5E1]">Book title<input required className="mt-2 w-full bg-[#080D1A] border border-white/10 rounded px-3 py-3 text-white" /></label>
            <label className="text-xs text-[#CBD5E1]">Amazon or Goodreads link<input type="url" className="mt-2 w-full bg-[#080D1A] border border-white/10 rounded px-3 py-3 text-white" /></label>
          </div>
          <label className="block text-xs text-[#CBD5E1]">Service received<select required className="mt-2 w-full bg-[#080D1A] border border-white/10 rounded px-3 py-3 text-white"><option value="">Select a service</option><option>Book visibility strategy</option><option>Amazon & Goodreads support</option><option>Book trailer production</option><option>Author branding & website</option><option>Launch planning</option><option>Writing, editing & publishing support</option><option>Other</option></select></label>
          <fieldset><legend className="text-xs text-[#CBD5E1] mb-2">Rating</legend><div className="flex gap-2">{[1,2,3,4,5].map(n => <label key={n} className="cursor-pointer"><input required type="radio" name="rating" value={n} className="sr-only peer" /><Star className="w-7 h-7 text-[#D4AF37] peer-checked:fill-current" /></label>)}</div></fieldset>
          <label className="block text-xs text-[#CBD5E1]">Your review<textarea required rows={6} className="mt-2 w-full bg-[#080D1A] border border-white/10 rounded px-3 py-3 text-white" /></label>
          <label className="flex gap-3 items-start text-xs text-[#CBD5E1]"><input required type="checkbox" className="mt-0.5" />I give permission for Storylight Studios to publish this review after verification.</label>
          <button type="submit" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm">Submit for verification</button>
        </form>
      )}
    </div>
  );
};

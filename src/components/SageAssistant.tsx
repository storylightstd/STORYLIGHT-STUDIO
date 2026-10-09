import React, { useMemo, useState } from 'react';
import { Bot, ChevronDown, Send, ShieldCheck, Sparkles, X } from 'lucide-react';

interface Message { role: 'sage' | 'user'; text: string; }

const answers: Array<[string[], string]> = [
  [['audit', 'research', 'analy'], 'Start with the Marketing Audit from the navigation. It checks discoverability, listing conversion, launch readiness, and reader-trust signals. The score is a planning signal, not a promise; Hannah or the relevant specialist should review real platform data before decisions are made.'],
  [['service', 'help', 'what do'], 'Storylight supports book visibility strategy, Amazon and Goodreads support, trailers and creative production, author branding and websites, launch planning, writing/editing/publishing support, social/BookTok strategy, and audiobook production.'],
  [['review', 'testimonial'], 'Author reviews are intended to be submitted through the Leave a Review page and manually checked before publication. A Verified Client label should only be used when the studio has confirmed the engagement; Sage cannot award that label.'],
  [['team', 'hannah', 'who'], 'Hannah Cooper is identified on this site as Storylight Studios’ Founder and CEO. The Team page lists the 13 named roles and their areas of responsibility.'],
  [['trust', 'safe', 'scam', 'white hat'], 'The trust standard is evidence before promises: no fake reviews, paid review rings, bots, click farms, or guaranteed rankings. Ask for a written scope, deliverables, data sources, and human point of contact before commissioning work.'],
  [['amazon', 'goodreads', 'kdp'], 'Sage can explain the studio’s stated approach, but it cannot access private Amazon or Goodreads dashboards here. Platform terms change, so a human specialist must confirm any live recommendation.'],
];

function reply(text: string) {
  const lower = text.toLowerCase();
  const found = answers.find(([keys]) => keys.some(key => lower.includes(key)));
  return found?.[1] ?? 'I can help with Storylight’s services, ethical process, team, reviews, or the Marketing Audit. I do not invent client results, credentials, rankings, or private platform data. Please ask one of those questions or request a human review.';
}

export const SageAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([{ role: 'sage', text: 'I’m Sage, Storylight’s grounded studio guide. Ask me about the audit, services, process, trust standards, or the team.' }]);
  const suggestions = useMemo(() => ['How does the audit work?', 'What services do you offer?', 'How are reviews verified?'], []);
  const send = (text = input) => { const clean = text.trim(); if (!clean) return; setMessages(m => [...m, { role: 'user', text: clean }, { role: 'sage', text: reply(clean) }]); setInput(''); };

  return <>
    <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#0B1220] px-4 py-3 text-xs font-semibold text-white shadow-2xl hover:border-[#D4AF37]" aria-label="Open Sage assistant"><Sparkles className="w-4 h-4 text-[#D4AF37]" /> Ask Sage</button>
    {open && <div className="fixed bottom-5 right-5 z-50 w-[min(380px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0B1220] shadow-2xl"><div className="flex items-center justify-between border-b border-white/10 bg-[#080D1A] p-4"><div className="flex items-center gap-2"><Bot className="w-4 h-4 text-[#D4AF37]" /><div><div className="text-sm font-semibold text-white">Sage</div><div className="text-[10px] text-[#94A3B8]">Grounded Storylight guide</div></div></div><button onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-white" aria-label="Close Sage"><X className="w-4 h-4" /></button></div><div className="max-h-80 space-y-3 overflow-y-auto p-4">{messages.map((m, i) => <div key={i} className={`flex gap-2 text-xs leading-relaxed ${m.role === 'user' ? 'justify-end' : ''}`}><div className={`max-w-[88%] rounded-lg px-3 py-2 ${m.role === 'user' ? 'bg-[#182642] text-white' : 'bg-[#0E172A] text-[#CBD5E1]'}`}>{m.text}</div></div>)}</div><div className="border-t border-white/10 p-3"><div className="flex flex-wrap gap-1.5 mb-3">{suggestions.map(s => <button key={s} onClick={() => send(s)} className="rounded border border-white/10 px-2 py-1 text-[10px] text-[#CBD5E1] hover:border-[#D4AF37]/50">{s}</button>)}</div><div className="flex gap-2"><input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask Sage…" className="min-w-0 flex-1 rounded border border-white/10 bg-[#080D1A] px-3 py-2 text-xs text-white outline-none focus:border-[#D4AF37]" /><button onClick={() => send()} className="rounded bg-[#D4AF37] p-2 text-[#080D1A]" aria-label="Send question"><Send className="w-4 h-4" /></button></div><div className="mt-2 flex gap-1.5 text-[10px] text-[#64748B]"><ShieldCheck className="w-3 h-3" />Sage does not invent claims or replace human review.</div></div></div>}
  </>;
};

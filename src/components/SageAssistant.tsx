import React, { useMemo, useState } from 'react';
import { Bot, Loader2, Send, ShieldCheck, Sparkles, X } from 'lucide-react';

interface Message { role: 'sage' | 'user'; text: string; }

const welcome: Message = {
  role: 'sage',
  text: 'I’m Sage—the sharp, practical guide for Storylight and beyond. Ask me to explain, brainstorm, write, compare, or solve. I’ll give you a useful answer first and be honest about uncertainty.',
};

export const SageAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const suggestions = useMemo(() => [
    'What does Storylight do?',
    'How can I improve my book launch?',
    'Explain something complicated simply',
  ], []);

  const send = async (text = input) => {
    const clean = text.trim();
    if (!clean || loading || clean.length > 4000) return;
    const nextMessages = [...messages, { role: 'user' as const, text: clean }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/sage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || typeof data.text !== 'string') {
        throw new Error(data.error || 'Sage is temporarily unavailable.');
      }
      setMessages(current => [...current, { role: 'sage', text: data.text }]);
    } catch (error) {
      setMessages(current => [...current, {
        role: 'sage',
        text: error instanceof Error ? error.message : 'Sage is temporarily unavailable. Please try again shortly.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  return <>
    <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#0B1220] px-4 py-3 text-xs font-semibold text-white shadow-2xl hover:border-[#D4AF37]" aria-label="Open Sage assistant">
      <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Ask Sage
    </button>
    {open && <div className="fixed bottom-5 right-5 z-50 flex max-h-[min(680px,calc(100vh-2.5rem))] w-[min(410px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0B1220] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#080D1A] p-4">
        <div className="flex items-center gap-2"><Bot className="w-4 h-4 text-[#D4AF37]" /><div><div className="text-sm font-semibold text-white">Sage</div><div className="text-[10px] text-[#94A3B8]">General-purpose Storylight assistant</div></div></div>
        <button onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-white" aria-label="Close Sage"><X className="w-4 h-4" /></button>
      </div>
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
        {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex gap-2 text-xs leading-relaxed ${message.role === 'user' ? 'justify-end' : ''}`}><div className={`max-w-[90%] whitespace-pre-wrap rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-[#182642] text-white' : 'bg-[#0E172A] text-[#CBD5E1]'}`}>{message.text}</div></div>)}
        {loading && <div className="flex items-center gap-2 text-xs text-[#94A3B8]"><Loader2 className="h-3.5 w-3.5 animate-spin text-[#D4AF37]" /> Sage is thinking…</div>}
      </div>
      <div className="border-t border-white/10 p-3">
        <div className="mb-3 flex flex-wrap gap-1.5">{suggestions.map(suggestion => <button key={suggestion} onClick={() => send(suggestion)} disabled={loading} className="rounded border border-white/10 px-2 py-1 text-left text-[10px] text-[#CBD5E1] hover:border-[#D4AF37]/50 disabled:opacity-50">{suggestion}</button>)}</div>
        <div className="flex gap-2"><label htmlFor="sage-input" className="sr-only">Ask Sage a question</label><input id="sage-input" value={input} maxLength={4000} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') void send(); }} placeholder="Ask anything…" disabled={loading} className="min-w-0 flex-1 rounded border border-white/10 bg-[#080D1A] px-3 py-2 text-xs text-white outline-none focus:border-[#D4AF37] disabled:opacity-60" /><button onClick={() => void send()} disabled={loading || !input.trim()} className="rounded bg-[#D4AF37] p-2 text-[#080D1A] disabled:cursor-not-allowed disabled:opacity-50" aria-label="Send question"><Send className="w-4 h-4" /></button></div>
        <div className="mt-2 flex gap-1.5 text-[10px] text-[#64748B]"><ShieldCheck className="w-3 h-3 shrink-0" />Clear thinking, honest limits. Verify time-sensitive or high-stakes advice.</div>
      </div>
    </div>}
  </>;
};

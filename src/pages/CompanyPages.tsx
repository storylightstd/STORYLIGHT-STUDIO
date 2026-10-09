import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface CompanyPagesProps { page: PageId; onNavigate: (page: PageId) => void; onOpenDiagnostic: () => void; }

const pages: Record<string, {eyebrow:string; title:string; intro:string; sections:{title:string; body:string; bullets?:string[]}[]}> = {
  process: { eyebrow:'How We Work', title:'A clear process from diagnosis to delivery.', intro:'Authors deserve to understand what happens next. Storylight Studios uses a documented, collaborative workflow rather than vague promises or hidden handoffs.', sections:[
    {title:'01 · Diagnose', body:'We review the book, metadata, positioning, reader journey, platform presence, and current creative assets before recommending work.', bullets:['Book and platform intake','Visibility and conversion friction review','Written findings and priority actions']},
    {title:'02 · Prioritise', body:'We agree the smallest set of actions most likely to improve clarity and discoverability for the author’s current stage.', bullets:['Scope and success measures','Transparent dependencies','Author approval before production']},
    {title:'03 · Produce', body:'Named specialists complete the agreed strategy, copy, design, website, launch, or trailer work with regular checkpoints.', bullets:['Named team responsibility','Review rounds built into delivery','Author owns the final assets']},
    {title:'04 · Learn', body:'We document what changed, what was learned, and what should happen next. Results vary and no ranking or sales outcome is guaranteed.', bullets:['Plain-language handover','Evidence-led recommendations','Ethical, sustainable follow-up']},
  ]},
  resources: { eyebrow:'Author Resources', title:'Practical guidance for clearer book growth decisions.', intro:'A growing library of plain-language guidance about visibility, platforms, launches, creative production, and author-owned audiences.', sections:[
    {title:'Visibility checklist', body:'Review your title, description, categories, keywords, retailer links, author site, and reader journey before investing in promotion.', bullets:['Is the promise clear in five seconds?','Can a reader find the next step?','Are your platform claims accurate?']},
    {title:'Trailer brief template', body:'A strong trailer starts with the book’s emotional promise, audience, format requirements, usage rights, and a clear call to action.', bullets:['Confirm rights for every supplied asset','Plan both horizontal and vertical use','Label client and promotional work honestly']},
    {title:'Ethical platform use', body:'We do not recommend fake reviews, incentivised review schemes, bots, click farms, or misleading claims. Sustainable visibility is built through clarity and genuine reader fit.', bullets:['No guaranteed rankings','No fabricated testimonials','No hidden outsourcing']},
  ]},
  'case-studies': { eyebrow:'Case Studies', title:'Selected client work, presented honestly.', intro:'The case studies below represent genuine engagements and references from the former Storylight Studios Results page. Each entry is labelled according to its confirmed status. Results are individual experiences, not promises for another book.', sections:[
    {title:'Barbara M. · Confirmed Client Work', body:'Historical Fiction · Goodreads Strategy. Goodreads Listopia strategy and shelf optimisation for a historical fiction title. Work included category positioning, review-velocity guidance, and reader-engagement strategy.', bullets:['Service delivered: Goodreads platform strategy','Listopia positioning','Reader engagement guidance','Individual client experience; not guaranteed for other authors']},
    {title:'L. Dawn M. · Confirmed Client Work', body:'Memoir · Amazon & Goodreads Strategy. Amazon listing optimisation and Goodreads platform strategy for a memoir. Work included keyword architecture, listing-copy revision, and Goodreads category positioning.', bullets:['Service delivered: Amazon listing optimisation','Goodreads strategy','Keyword architecture','Individual client experience; not guaranteed for other authors']},
    {title:'Cal Newport · Reference — Not a Client Engagement', body:'Industry Example. Cal Newport is referenced in the context of book marketing and author-platform strategy discussions only. This reference does not represent a client engagement or endorsement.', bullets:['Industry reference only','No client relationship claimed','No results attributed']},
    {title:'A note on results and verification', body:'Every book, author, and platform situation is different. Sales, rankings, reviews, followers, and revenue are not guaranteed. Confirmed client work is distinguished from illustrative portfolio examples and industry references.', bullets:['No guaranteed rankings or sales','No fabricated testimonials','Author approval required for public case-study claims']},
  ]},
  faq: { eyebrow:'Frequently Asked Questions', title:'Straight answers before you start.', intro:'If you need a question answered for your specific book, contact Hannah and the team with the relevant links.', sections:[
    {title:'Do you guarantee sales or rankings?', body:'No. We can provide strategy and production work, but platform rankings, sales, reviews, and revenue are influenced by many factors and are never guaranteed.'},
    {title:'Who works on my project?', body:'The named Storylight Studios team is presented on the Team page. Scope determines which specialists participate, and we do not hide material outsourcing behind the studio name.'},
    {title:'Can I review work before it goes live?', body:'Yes. Author-facing copy, testimonials, case-study claims, and public portfolio labels should be reviewed and approved. Reviews submitted through the website are moderated before publication.'},
    {title:'Do you use ethical methods?', body:'Yes. The studio’s policy is white-hat and platform-compliant. We do not create fake reviews, manipulate platforms, or make unsupported claims.'},
  ]},
};

export const CompanyPages: React.FC<CompanyPagesProps> = ({ page, onNavigate, onOpenDiagnostic }) => {
  const content = pages[page];
  if (!content) return null;
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-14">
    <header className="max-w-4xl space-y-5"><div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">{content.eyebrow}</div><h1 className="text-4xl sm:text-6xl font-editorial font-bold text-white leading-tight">{content.title}</h1><p className="text-lg text-[#CBD5E1] leading-relaxed max-w-3xl">{content.intro}</p></header>
    <div className="grid md:grid-cols-2 gap-6">{content.sections.map((section) => <article key={section.title} className="bg-[#0B1220] border border-white/10 rounded-xl p-7 space-y-4"><h2 className="text-2xl font-editorial font-bold text-white">{section.title}</h2><p className="text-sm text-[#CBD5E1] leading-relaxed">{section.body}</p>{section.bullets && <ul className="space-y-2">{section.bullets.map((item)=><li key={item} className="flex gap-2 text-sm text-[#94A3B8]"><CheckCircle2 className="w-4 h-4 shrink-0 text-[#D4AF37] mt-0.5" />{item}</li>)}</ul>}</article>)}</div>
    <section className="bg-[#0B1220] border border-[#D4AF37]/25 rounded-xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"><div><div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold"><ShieldCheck className="w-4 h-4" /> Clear, ethical, author-owned work</div><p className="text-white font-editorial text-2xl mt-2">Want to discuss your book?</p></div><button onClick={onOpenDiagnostic} className="inline-flex items-center gap-2 px-5 py-3 bg-[#D4AF37] text-[#080D1A] text-xs font-semibold uppercase tracking-wider rounded-sm">Start with a diagnostic <ArrowRight className="w-4 h-4" /></button></section>
  </div>;
};

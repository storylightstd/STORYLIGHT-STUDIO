import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lock,
  Film,
  Compass,
  Users,
  Video,
  TrendingUp,
  Layers,
  Award,
} from 'lucide-react';
import { PageId } from '../types';

export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
  badge?: string;
}

export interface FaqCategoryGroup {
  id: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: FaqQuestion[];
}

interface FaqAccordionProps {
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const FAQ_CATEGORY_GROUPS: FaqCategoryGroup[] = [
  {
    id: 'visibility-strategy',
    title: 'Visibility Strategy',
    shortTitle: 'Visibility Strategy',
    eyebrow: 'Audits & Algorithmic Discovery',
    description:
      'Forensic metadata analysis, Amazon KDP & Goodreads discoverability, launch countdown planning, and category positioning.',
    icon: Compass,
    questions: [
      {
        id: 'diagnostic-audit',
        question: 'What is a Diagnostic Visibility Audit and why do you start with it?',
        answer:
          'The Diagnostic Visibility Audit is our proprietary 24-point forensic review of your title. Rather than selling generic marketing packages, we first inspect how Amazon and Goodreads recommendation engines currently index your book. We look for category misclassifications, dead-end search queries, blurb friction, and reader drop-off points so we only propose solutions your book genuinely needs.',
        bullets: [
          '24-point forensic inspection of book metadata and ranking friction',
          'Target reader persona & comparative title benchmarking (comps)',
          'Clear, written strategic roadmap with prioritized milestones',
        ],
        badge: 'Core Diagnostic',
      },
      {
        id: 'author-stages',
        question: 'Do you work with debut authors, published backlists, or hybrid publishers?',
        answer:
          'We work across all three author stages. For debut authors, our focus is building advance reader copy (ARC) momentum, launch flight scheduling, and baseline brand authority. For authors with existing backlist catalogs, we perform forensic turnarounds—re-architecting stale keywords and sub-categories to reignite algorithmic recommendations and passive royalties. Hybrid and indie authors benefit from unified cross-platform positioning.',
        bullets: [
          'Debut launch flights with 8-week structured countdowns',
          'Backlist algorithmic revitalization & category restructuring',
          'Cross-genre experience across 30+ fiction and non-fiction categories',
        ],
      },
      {
        id: 'amazon-keywords',
        question: 'How do you optimize Amazon KDP keywords and categories without triggering penalties?',
        answer:
          'We conduct forensic search volume and indexing analysis using verified Amazon customer query trends. We identify high-intent, low-competition BISAC nodes and long-tail search strings rather than generic keyword stuffing. Everything strictly complies with Amazon KDP metadata guidelines, ensuring your book is indexed by the A10 recommendation algorithm cleanly and safely.',
        bullets: [
          'Forensic search-intent modeling based on real reader discovery behavior',
          'Strict compliance with BISAC standards and Amazon publishing rules',
          'Zero keyword stuffing or misleading category placements',
        ],
      },
      {
        id: 'launch-planning',
        question: 'What is the timeline and methodology for a book launch countdown campaign?',
        answer:
          'Our launch campaigns run on a structured 8-to-12-week timeline divided into three phases: Foundation (ARC management, metadata lock, and editorial pre-orders), Momentum (trailer releases, media outreach, and early reader activation), and Sustained Lift (post-launch algorithmic retargeting and review momentum maintenance). We provide step-by-step milestones with weekly specialist checkpoints.',
        bullets: [
          'Phase 1: Foundation & Pre-Order Architecture (Weeks 1–4)',
          'Phase 2: Momentum & Creative Production Flight (Weeks 5–8)',
          'Phase 3: Launch Week Surge & Sustained Algorithmic Lift',
        ],
      },
      {
        id: 'goodreads-support',
        question: 'How does your Goodreads growth strategy differ from typical promotion?',
        answer:
          'Led by Lina Bauer (Head of Goodreads Growth Strategy), we focus on organic reader shelfing, genre-targeted giveaway campaigns, reader community engagement, and author profile optimization. We never use bots, review swaps, or artificial rating groups. Instead, we cultivate authentic social proof from passionate genre readers.',
        bullets: [
          'Targeted Goodreads giveaway architecture for maximum Want-to-Read adds',
          'Author program verification and profile optimization',
          'Organic shelfing momentum with genuine genre readers',
        ],
      },
    ],
  },
  {
    id: 'production-services',
    title: 'Production Services',
    shortTitle: 'Production Services',
    eyebrow: 'Cinematic Media & Creative Assets',
    description:
      'Narrative book trailers, audiobook production, bespoke author branding, custom website architecture, and BookTok video cuts.',
    icon: Film,
    questions: [
      {
        id: 'trailer-production',
        question: 'How does book trailer production work, and who owns the video rights?',
        answer:
          'Our creative production arm treats trailers like cinematic narrative shorts rather than slideshow templates. We extract the core emotional hook of your manuscript, write an original script, edit high-definition footage, and compose custom atmospheric soundscapes. We deliver both 16:9 widescreen formats for author hubs and YouTube, and 9:16 vertical cuts tailored for BookTok and Instagram Reels. You retain 100% full commercial rights to all final video masters.',
        bullets: [
          'Original narrative script beats tailored to hook viewers in 3 seconds',
          'Multi-format delivery: 16:9 cinematic cut & 9:16 vertical reels',
          'Author retains complete copyright and asset ownership for life',
        ],
        badge: 'Cinematic Media',
      },
      {
        id: 'audiobook-strategy',
        question: 'What is included in Audiobook Production and Strategy?',
        answer:
          'Led by Lily John (Audiobook Strategy Director), our audiobook division guides you through narrator casting curation, ACX and Findaway distribution architectures, audio sample quality control, mastering compliance, and atmospheric promotional audiograms designed to drive pre-orders and audible credits.',
        bullets: [
          'Curated voice auditions matching character tone and accents',
          'ACX, Findaway & wide audio distribution roadmap',
          'Promotional audiograms with dynamic wave styling for social media',
        ],
      },
      {
        id: 'author-branding-web',
        question: 'How do custom author websites and branding packages integrate with book sales funnels?',
        answer:
          'We design author websites and brand systems as reader conversion engines, not static brochures. Every website includes direct 1-click retailer buy links (Amazon, Barnes & Noble, Apple Books, Kobo), newsletter lead magnets with direct reader onboarding sequences, responsive mobile design, and press kit pages ready for media inquiries.',
        bullets: [
          'Reader-first mobile layout optimized for 1-click book purchasing',
          'Automated newsletter capture architecture to build your direct reader list',
          'Bespoke typography, color palette, and author press kit',
        ],
      },
      {
        id: 'social-formats',
        question: 'What video formats do you produce for BookTok, Instagram Reels, and YouTube?',
        answer:
          'Every trailer package includes platform-optimized variations: a 16:9 cinematic master (up to 4K resolution) for websites, YouTube, and Amazon Author Central, plus punchy 9:16 vertical cuts (15s, 30s, and 60s) with burned-in cinematic captions formatted specifically for TikTok and Reels algorithms.',
        bullets: [
          '16:9 Widescreen 4K Master with custom audio mixing',
          '9:16 Vertical cuts with high-retention text hooks for BookTok',
          'Square 1:1 and audiogram clips for newsletter and Instagram feed',
        ],
      },
      {
        id: 'sound-design',
        question: 'Do you create original music and sound design for trailers?',
        answer:
          'Yes. Audio is 50% of the emotional impact of a book trailer. Our in-house sound designers compose atmospheric scores, master spatial sound effects (whispers, footsteps, blade clashes, orchestral swells), and license broadcast-cleared audio tracks so you never face copyright strikes on social platforms.',
        bullets: [
          'Commercial broadcast licensing included with zero recurring fees',
          'Multi-track mixing, foley sound effects, and voiceover mastering',
          'Zero copyright claim risk across YouTube, Meta, and TikTok',
        ],
      },
    ],
  },
  {
    id: 'trust-ethics',
    title: 'Trust, Ethics & Compliance',
    shortTitle: 'Trust & Ethics',
    eyebrow: 'White-Hat Standards & Integrity',
    description:
      'Rigorous adherence to Amazon KDP, Goodreads, and BISAC policies. Zero paid reviews, zero artificial bots, 100% transparent reporting.',
    icon: ShieldCheck,
    questions: [
      {
        id: 'guarantee-sales',
        question: 'Do you guarantee book sales or Amazon best-seller rankings?',
        answer:
          'No. In strict adherence to our Trust & Ethics policy, we never make false "bestseller guarantees" or promise predetermined royalty figures. Book sales, algorithm rank, and review velocities depend on numerous factors, including genre competition, book pricing, cover appeal, and reader sentiment. What we guarantee is rigorous, forensic strategy: pinpointing metadata friction, eliminating category misalignments, and crafting high-conversion creative assets built on real reader psychology.',
        bullets: [
          'No artificial or vanity ranking promises',
          'Forensic data-driven keyword architecture',
          'Transparent reporting with zero inflated claims',
        ],
        badge: 'Zero Hype',
      },
      {
        id: 'kdp-compliance',
        question: 'How do you ensure 100% compliance with Amazon KDP and Goodreads terms?',
        answer:
          'We operate with strict white-hat methodology. We firmly refuse paid customer reviews, incentivized review rings, Goodreads rating bots, click-farm manipulation, and artificial page-read schemes. All keyword structures and category selections conform strictly to Amazon KDP and BISAC publisher standards, ensuring your author account and royalties remain completely safe from suspensions or penalties.',
        bullets: [
          'Zero paid review schemes or incentivized reciprocal circles',
          'Strict compliance with Amazon Anti-Manipulation policies',
          'Durable organic growth over short-lived exploit loops',
        ],
      },
      {
        id: 'review-verification',
        question: 'How are author reviews and testimonials verified on your website?',
        answer:
          'Every testimonial published by Storylight Studios is from a genuine author with a verifiable published title. We do not invent client stories, falsify reviewer names, or use anonymous stock photos. Case studies clearly state whether the project was a full client engagement, an authorized promotional campaign, or a creative production sample.',
        bullets: [
          'Manual verification of all submitted client reviews',
          'Verifiable book titles, author names, and published links',
          'Clear separation between client work and production demos',
        ],
      },
      {
        id: 'asset-ownership',
        question: 'Do you claim any royalties, publishing rights, or ongoing licensing fees?',
        answer:
          'Never. You retain 100% of your book royalties, copyright, and publishing rights. Storylight Studios is a creative production and strategy service provider, not a publisher or agent. Once deliverables are handed over and paid for, you own all masters, copy, and assets outright.',
        bullets: [
          'Zero ongoing royalty splits or revenue share',
          '100% author ownership of all generated visual & written assets',
          'No locked proprietary formats or restrictive licensing contracts',
        ],
      },
    ],
  },
  {
    id: 'team-onboarding',
    title: 'Team, Process & Onboarding',
    shortTitle: 'Team & Process',
    eyebrow: 'Specialists & Collaboration',
    description:
      'Direct collaboration with our 13-person specialist team, clear milestone approvals, and responsive project intake.',
    icon: Users,
    questions: [
      {
        id: 'team-specialists',
        question: 'Who actually works on my book project?',
        answer:
          'Your book is handled directly by our named 13-person specialist team. Led by CEO Hannah Cooper (with a decade inside traditional publishing), your campaign involves dedicated directors such as Lily John (Audiobook Strategy), Emma Hoffmann (Director of Amazon Strategy), Lina Bauer (Head of Goodreads Strategy), and Natalie Foster (Data Intelligence). We do not hide behind anonymous offshore freelancers or generic ticket queues.',
        bullets: [
          'Direct oversight from named platform directors',
          'Specialist-to-author transparency on every deliverable',
          'Credentials fully verifiable on professional platforms',
        ],
        badge: '13-Person Team',
      },
      {
        id: 'author-approvals',
        question: 'Can I review and approve all copy, metadata, and assets before they go live?',
        answer:
          'Yes. Storylight Studios operates on collaborative checkpoints. You have full review and approval power over every keyword recommendation, blurb revision, A+ graphic proof, trailer storyboard, and website design element before anything is published or implemented. Reviews submitted through our site are also manually verified before publication.',
        bullets: [
          'Author approval built into every production milestone',
          'Iterative revision rounds included in every service scope',
          'Transparent documentation provided at every step',
        ],
      },
      {
        id: 'onboarding-flow',
        question: 'What happens after I submit a diagnostic or contact inquiry?',
        answer:
          'Within 1 business day, Hannah Cooper and our intake specialist review your submission and examine your current book links. We then schedule a 30-minute discovery consultation (or provide a written diagnostic brief) outlining your top 3 friction points, recommended milestones, and an exact transparent quote with zero hidden fees.',
        bullets: [
          'Initial diagnostic response within 24 business hours',
          'Personalized review of your book links and current ranking context',
          'Clear fixed-scope proposal with agreed milestones',
        ],
      },
      {
        id: 'pricing-structure',
        question: 'How are projects scoped and priced?',
        answer:
          'We provide clear, fixed-scope project agreements based on your title needs rather than open-ended hourly billing. Whether you need a standalone Diagnostic Audit, a complete Book Trailer package, or a comprehensive 12-week Launch Campaign, you receive an itemized proposal with confirmed deliverables and no unexpected surprises.',
        bullets: [
          'Clear fixed-fee project scopes with agreed milestone dates',
          'No hidden fees, recurring subscriptions, or surprise retainers',
          'Flexible milestone payment schedules for larger productions',
        ],
      },
    ],
  },
];

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  onNavigate,
  onOpenDiagnostic,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'diagnostic-audit': true, // First Visibility Strategy item open by default
    'trailer-production': true, // First Production Services item open by default
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_CATEGORY_GROUPS.forEach((group) => {
      group.questions.forEach((q) => {
        allOpen[q.id] = true;
      });
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  // Filter groups and questions based on category filter & search query
  const filteredGroups = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return FAQ_CATEGORY_GROUPS.map((group) => {
      const matchesCategory =
        selectedCategory === 'all' || group.id === selectedCategory;

      if (!matchesCategory) {
        return null;
      }

      const matchingQuestions = group.questions.filter((q) => {
        if (!query) return true;
        return (
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          (q.bullets && q.bullets.some((b) => b.toLowerCase().includes(query))) ||
          group.title.toLowerCase().includes(query) ||
          group.eyebrow.toLowerCase().includes(query)
        );
      });

      if (matchingQuestions.length === 0) {
        return null;
      }

      return {
        ...group,
        questions: matchingQuestions,
      };
    }).filter(Boolean) as FaqCategoryGroup[];
  }, [selectedCategory, searchQuery]);

  const totalMatchingQuestions = useMemo(() => {
    return filteredGroups.reduce((acc, group) => acc + group.questions.length, 0);
  }, [filteredGroups]);

  const totalAllQuestions = useMemo(() => {
    return FAQ_CATEGORY_GROUPS.reduce((acc, g) => acc + g.questions.length, 0);
  }, []);

  const handleJumpToCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (catId !== 'all') {
      const el = document.getElementById(`faq-section-${catId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Navigation Bar */}
      <div className="glass-card rounded-xl p-5 sm:p-6 border border-white/10 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, e.g. trailers, keywords, Amazon KDP, pricing..."
              className="w-full pl-10 pr-10 py-2.5 bg-[#080D1A]/90 border border-white/10 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Controls: Counts & Expand / Collapse */}
          <div className="flex items-center gap-4 text-xs text-[#94A3B8] self-end md:self-auto shrink-0">
            <span className="hidden sm:inline text-slate-400">
              Showing <span className="text-[#D4AF37] font-semibold">{totalMatchingQuestions}</span> of {totalAllQuestions} questions
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <button
              onClick={expandAll}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer font-medium"
            >
              Expand All
            </button>
            <span>·</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer font-medium"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Categorized Navigation Tabs */}
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
              Browse by Category:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#E6CA85]/20 text-[#D4AF37] border border-[#D4AF37] shadow-sm'
                  : 'bg-[#0B1220] text-[#94A3B8] border border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              <span>All Questions</span>
              <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-white/10 text-slate-300">
                {totalAllQuestions}
              </span>
            </button>

            {FAQ_CATEGORY_GROUPS.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleJumpToCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#E6CA85]/20 text-[#D4AF37] border border-[#D4AF37] shadow-sm'
                      : 'bg-[#0B1220] text-[#94A3B8] border border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.shortTitle}</span>
                  <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-white/10 text-slate-300">
                    {cat.questions.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grouped Categorized Sections */}
      {filteredGroups.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center space-y-4 border border-white/10">
          <HelpCircle className="w-10 h-10 text-[#94A3B8] mx-auto" />
          <h3 className="text-xl font-editorial font-bold text-white">
            No questions found matching your search
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
            We couldn't find an answer matching "{searchQuery}". You can clear the search or submit a direct inquiry to Hannah Cooper and our platform leads.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-sm transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#080D1A] bg-[#D4AF37] hover:bg-[#E6CA85] rounded-sm transition-colors cursor-pointer"
            >
              <span>Ask Hannah directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-14">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <section
                key={group.id}
                id={`faq-section-${group.id}`}
                className="scroll-mt-28 space-y-6"
              >
                {/* Categorized Section Header */}
                <div className="glass-card rounded-xl p-6 sm:p-7 border border-[#D4AF37]/20 bg-gradient-to-r from-[#0D1527] to-[#0B1220] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#142038] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                        <span>{group.eyebrow}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-wide">
                        {group.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 self-start md:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#182642] text-[#D4AF37] border border-[#D4AF37]/30">
                      <span>{group.questions.length}</span>
                      <span>Questions</span>
                    </span>
                  </div>
                </div>

                {/* Question Accordion Items */}
                <div className="space-y-3.5">
                  {group.questions.map((item) => {
                    const isOpen = !!openIds[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-[#D4AF37]/45 shadow-lg shadow-[#D4AF37]/5 bg-[#0D1527]/95'
                            : 'border-white/10 hover:border-[#D4AF37]/25 hover:bg-[#0B1220]/90'
                        }`}
                      >
                        {/* Trigger Button */}
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                        >
                          <div className="space-y-1.5 flex-1 pr-2">
                            {item.badge && (
                              <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold border border-[#D4AF37]/30 bg-[#D4AF37]/10 rounded-sm mb-1">
                                {item.badge}
                              </span>
                            )}
                            <h3 className="text-base sm:text-lg font-editorial font-bold text-white leading-snug">
                              {item.question}
                            </h3>
                          </div>

                          {/* Accordion Arrow Indicator */}
                          <div
                            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isOpen
                                ? 'bg-[#D4AF37] border-[#D4AF37] text-[#080D1A] rotate-180'
                                : 'bg-[#10192C] border-white/10 text-[#94A3B8] hover:text-white'
                            }`}
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </button>

                        {/* Collapsible Body */}
                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                              {item.answer}
                            </p>

                            {item.bullets && item.bullets.length > 0 && (
                              <div className="pt-3 border-t border-white/5 space-y-2.5">
                                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold block">
                                  Key Highlights & Deliverables:
                                </span>
                                <ul className="grid sm:grid-cols-1 gap-2">
                                  {item.bullets.map((bullet, bIdx) => (
                                    <li
                                      key={bIdx}
                                      className="flex items-start gap-2.5 text-xs text-[#E2E8F0]"
                                    >
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* Direct Author Inquiry Card with glass-card design */}
      <div className="glass-card rounded-xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Have a Specific Question About Your Title?</span>
          </div>
          <h3 className="text-2xl font-editorial font-bold text-white">
            We Analyze Every Book Individually.
          </h3>
          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            Every genre algorithm and author launch plan is unique. Submit your book details for an initial diagnostic review or speak directly with Hannah Cooper and our platform leads.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#080D1A] hover:bg-[#15233E] border border-white/20 rounded-sm transition-all cursor-pointer text-center"
          >
            Direct Inquiry
          </button>
          <button
            onClick={onOpenDiagnostic}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Free Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

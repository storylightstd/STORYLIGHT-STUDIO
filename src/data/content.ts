import { ServiceItem, TeamMember, TestimonialItem, PortfolioItem } from '../types';
import heroImage from '../assets/images/hero_literary_studio_1791308707728.jpg';
import fantasyTrailerImage from '../assets/images/book_trailer_cinematic_1791308726866.jpg';
import workspaceImage from '../assets/images/editorial_author_workspace_1791308737331.jpg';
import historicalTrailerImage from '../assets/images/trailer_historical_drama_1791308746924.jpg';
import authorBrandingImage from '../assets/images/author_branding_showcase_1791308758904.jpg';
import hannahCooperImage from '../assets/team/hannah-cooper.jpeg';
import lilyJohnImage from '../assets/team/lily-john.jpeg';
import emmaHoffmannImage from '../assets/team/emma-hoffmann.jpeg';
import linaBauerImage from '../assets/team/lina-bauer.jpeg';
import juliannaIsabellaImage from '../assets/team/julianna-isabella.jpeg';
import marieVogelImage from '../assets/team/marie-vogel.jpeg';
import claraNeumannImage from '../assets/team/clara-neumann.jpeg';
import victoriaMorganImage from '../assets/team/victoria-morgan.jpeg';
import natalieFosterImage from '../assets/team/natalie-foster.jpeg';
import abigailTurnerImage from '../assets/team/abigail-turner.jpeg';
import madisonClarkImage from '../assets/team/madison-clark.jpeg';
import amelieHartmannImage from '../assets/team/amelie-hartmann.jpeg';
import roseMarkImage from '../assets/team/rose-mark.jpeg';

export const COMPANY_STATS = [
  { value: '13', label: 'In-House Specialists', sub: 'Platform-dedicated experts' },
  { value: '400+', label: 'Authors Supported', sub: 'Across 30+ literary genres' },
  { value: '280%', label: 'Average Visibility Surge', sub: 'Measured post-diagnostic audit' },
  { value: '94%', label: 'Client Retention Rate', sub: 'Long-term author partnerships' },
  { value: '55+', label: '5-Star Author Reviews', sub: 'Documented & verified results' },
];

export const IMAGES = {
  hero: heroImage,
  fantasyTrailer: fantasyTrailerImage,
  workspace: workspaceImage,
  historicalTrailer: historicalTrailerImage,
  authorBranding: authorBrandingImage,
  founder: hannahCooperImage,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'visibility-strategy',
    number: '01',
    title: 'Book Visibility Strategy',
    shortDesc: 'A diagnostic-first forensic roadmap identifying algorithm blindspots, genre taxonomy, and organic discoverability.',
    fullDesc: 'We never guess. We begin with a forensic diagnostic audit of your book’s current presence, diagnosing category friction, keyword ceilings, and reader friction points to design an individualized growth blueprint.',
    deliverables: [
      'Comprehensive 24-point Diagnostic Visibility Audit',
      'Target reader persona & comparative title mapping',
      'Forensic category mismatch & indexing correction',
      'Multi-phase 90-day organic discovery roadmap',
    ],
    bestFor: 'Debut or backlist authors whose books are buried under algorithmic noise.',
    iconName: 'Search',
  },
  {
    id: 'amazon-goodreads',
    number: '02',
    title: 'Amazon & Goodreads Support',
    shortDesc: 'Forensic keyword architecture, sub-category dominance, listing conversion optimization, and ethical Listopia campaigns.',
    fullDesc: 'Amazon and Goodreads are search engines governed by strict algorithmic rules. Our dedicated platform directors engineer your book’s backend architecture and community discovery without violating platform terms of service.',
    deliverables: [
      'Backend 7-box & hidden keyword architecture',
      'Niche sub-category dominance mapping (top 300 strategy)',
      'High-converting A+ Content & editorial blurbs',
      'Ethical Goodreads Listopia placement & shelf tracking',
    ],
    bestFor: 'Authors seeking sustainable, organic rank climbs without unsustainable ad burn.',
    iconName: 'BookOpen',
  },
  {
    id: 'book-trailers',
    number: '03',
    title: 'Book Trailers & Creative Production',
    shortDesc: 'Cinematic visual trailers, atmospheric teaser edits, vertical reels, and bespoke sound design crafted to arrest reader attention.',
    fullDesc: 'In a visual age, reader curiosity begins with cinematic storytelling. Our production arm writes original trailer scripts, curates cinematic sequences, and scores atmospheric soundscapes tailored for both 16:9 cinematic display and 9:16 vertical discovery.',
    deliverables: [
      'Original cinematic scriptwriting & narrative hooks',
      'High-definition 16:9 cinematic widescreen trailer',
      '9:16 vertical teaser cuts for BookTok and Instagram Reels',
      'Custom sound design, score licensing & pacing mastering',
    ],
    bestFor: 'Authors preparing major launch campaigns, fantasy/thriller releases, and BookTok pushes.',
    iconName: 'Film',
  },
  {
    id: 'author-branding',
    number: '04',
    title: 'Author Branding & Websites',
    shortDesc: 'Bespoke editorial author websites, reader magnet funnels, newsletter architecture, and cohesive literary identity.',
    fullDesc: 'Your book needs a home that converts passing readers into lifelong newsletter subscribers. We design fast, responsive, typography-rich author sites equipped with clean reader magnet integrations and direct store linkages.',
    deliverables: [
      'Custom responsive editorial author website',
      'Reader magnet & ARC sign-up funnel integration',
      'Direct-to-retailer buy links & series reading order hubs',
      'Typography, aesthetic palette & press kit assets',
    ],
    bestFor: 'Authors building a backlist empire and looking to own their direct reader relationships.',
    iconName: 'Compass',
  },
  {
    id: 'launch-planning',
    number: '05',
    title: 'Launch Countdown Planning',
    shortDesc: 'Precision launch countdowns, ARC distribution workflows, pre-order velocity strategies, and launch-week momentum.',
    fullDesc: 'A launch is an orchestrated sequence of milestones. We structure an eight-week countdown encompassing advance reader copy (ARC) coordination, review velocity generation, pre-order build, and post-launch shelf stabilization.',
    deliverables: [
      '8-week week-by-week launch flight schedule',
      'Advance Reader Copy (ARC) workflow & review velocity plan',
      'Pre-order acceleration & price-pulse strategy',
      'Post-launch visibility stabilization protocols',
    ],
    bestFor: 'Upcoming releases needing strong first-week algorithmic traction and social momentum.',
    iconName: 'Calendar',
  },
  {
    id: 'writing-editing',
    number: '06',
    title: 'Writing, Editing & Publishing Support',
    shortDesc: 'Developmental assessments, line editing, manuscript doctoring, KDP formatting, and publishing logistics.',
    fullDesc: 'No growth strategy can rescue a weak reader hook. Our veteran publishing editors deliver manuscript evaluations, structural pacing feedback, and meticulous interior formatting to ensure your manuscript meets rigorous industry standards.',
    deliverables: [
      'Comprehensive developmental manuscript evaluation',
      'Pacing, chapter hooks & commercial positioning review',
      'Interior typography & eBook/paperback file formatting',
      'KDP, IngramSpark & wide distribution upload logistics',
    ],
    bestFor: 'Authors polishing manuscripts or transitioning between traditional and independent publishing.',
    iconName: 'Feather',
  },
  {
    id: 'social-booktok',
    number: '07',
    title: 'Social Media & BookTok Growth',
    shortDesc: 'Organic reader community building, BookTok & Bookstagram creative direction, and authentic micro-community outreach.',
    fullDesc: 'We steer clear of cringeworthy promo spam. Instead, we architect narrative-driven content themes, trope-focused video concepts, and reader community engagement that naturally draws passionate readers to your universe.',
    deliverables: [
      'Platform-specific trope & aesthetic content strategy',
      'Curated audio pairing & trending format guidelines',
      'Reader-first community engagement templates',
      'Micro-influencer & ARC team outreach blueprint',
    ],
    bestFor: 'Authors seeking organic viral reach and loyal readership on BookTok and Bookstagram.',
    iconName: 'Share2',
  },
  {
    id: 'audiobook-production',
    number: '08',
    title: 'Audiobook Production & Strategy',
    shortDesc: 'Narrator casting direction, release timing, audio engineering quality control, and audio teaser assets.',
    fullDesc: 'Audio is the fastest growing format in publishing. Led by our Audiobook Strategy Director, we guide authors through audition curation, ACX/Findaway platform strategy, sample mastering, and audio teaser assets.',
    deliverables: [
      'Voice talent casting & audition curation guidance',
      'ACX, Findaway & Spotify Audio distribution strategy',
      'Audio sample mastering verification & quality assurance',
      'Audiogram teasers & audio promotional video clips',
    ],
    bestFor: 'Authors expanding their catalog into premium multi-format retail distribution.',
    iconName: 'Headphones',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'hannah-cooper', name: 'Hannah Cooper', role: 'Chief Executive Officer and Founder', specialty: 'Platform Architecture', bio: 'Hannah founded Storylight Studios after a decade working inside traditional publishing houses.', platforms: ['Platform Architecture', 'Launch Strategy'], isLeadership: true, image: hannahCooperImage },
  { id: 'lily-john', name: 'Lily John', role: 'Second in Command and Audiobook Strategy Director', specialty: 'Audiobook Strategy', bio: 'Lily works directly alongside Hannah Cooper to oversee the studio’s strategic direction and audiobook practice.', platforms: ['Audiobook Strategy', 'Audible Optimization'], isLeadership: true, image: lilyJohnImage },
  { id: 'emma-hoffmann', name: 'Emma Hoffmann', role: 'Director of Amazon Strategy', specialty: 'Amazon Strategy', bio: 'Emma leads Amazon optimization work, including keyword architecture and category strategy.', platforms: ['Keyword Architecture', 'Category Strategy'], isLeadership: true, image: emmaHoffmannImage },
  { id: 'lina-bauer', name: 'Lina Bauer', role: 'Head of Goodreads Growth Strategy', specialty: 'Goodreads Strategy', bio: 'Lina specializes in Goodreads platform mechanics, Listopia, shelves, and tags.', platforms: ['Listopia Ranking', 'Shelf and Tag Optimization'], isLeadership: true, image: linaBauerImage },
  { id: 'julianna-isabella', name: 'Julianna Isabella', role: 'Lead Platform Integration Strategist', specialty: 'Cross-Platform Strategy', bio: 'Julianna designs cross-platform conversion architectures connecting discovery channels.', platforms: ['Cross-Platform Funnels', 'Conversion Architecture'], image: juliannaIsabellaImage },
  { id: 'marie-vogel', name: 'Marie Vogel', role: 'Social Ecosystem Strategist', specialty: 'Social Strategy', bio: 'Marie leads social platform strategy across BookTok and Bookstagram.', platforms: ['BookTok Strategy', 'Bookstagram Funnels'], image: marieVogelImage },
  { id: 'clara-neumann', name: 'Clara Neumann', role: 'Content Strategy and Conversion Copywriting Specialist', specialty: 'Content Strategy', bio: 'Clara develops listing copy and content designed to help browsers understand a book’s promise.', platforms: ['Listing Conversion Copy', 'Reader Psychology'], image: claraNeumannImage },
  { id: 'victoria-morgan', name: 'Victoria Morgan', role: 'Launch Campaign Director', specialty: 'Launch Strategy', bio: 'Victoria manages launch architecture, ARC workflows, and launch-week planning.', platforms: ['Launch Architecture', 'ARC Management'], image: victoriaMorganImage },
  { id: 'natalie-foster', name: 'Natalie Foster', role: 'Data Analytics and Performance Intelligence Specialist', specialty: 'Analytics', bio: 'Natalie leads diagnostic and competitive analysis work for platform visibility.', platforms: ['Platform Diagnostics', 'Competitive Analysis'], image: natalieFosterImage },
  { id: 'abigail-turner', name: 'Abigail Turner', role: 'Goodreads Community and Reader Engagement Specialist', specialty: 'Goodreads Community', bio: 'Abigail focuses on authentic community engagement and reader advocacy on Goodreads.', platforms: ['Goodreads Communities', 'Reader Advocacy'], image: abigailTurnerImage },
  { id: 'madison-clark', name: 'Madison Clark', role: 'Amazon Advertising and Paid Visibility Strategist', specialty: 'Amazon Advertising', bio: 'Madison builds advertising architectures and campaign plans for authors who need paid visibility support.', platforms: ['Amazon Advertising', 'Campaign Architecture'], image: madisonClarkImage },
  { id: 'amelie-hartmann', name: 'Amelie Hartmann', role: 'Client Strategy and Onboarding Director', specialty: 'Client Relations', bio: 'Amelie manages the client relationship from first engagement through strategy delivery and support.', platforms: ['Client Strategy', 'Onboarding Architecture'], image: amelieHartmannImage },
  { id: 'rose-mark', name: 'Rose Mark', role: 'Content Creation and Blog Strategy Specialist', specialty: 'Content Creation', bio: 'Rose leads content creation and blog strategy with editorial precision and a clear reader focus.', platforms: ['Content Strategy', 'Blog Architecture'], image: roseMarkImage },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    authorName: 'E. R. Thorne',
    bookTitle: 'The Sovereign Tide',
    genre: 'Epic Fantasy',
    metricHighlight: 'Top #280 Sub-Category Ranking',
    outcomeDetail: 'Climbed from #94,000 to consistent Top 280 Amazon Sub-Category ranking in 8 weeks.',
    quote: 'Storylight overhauled our entire keyword architecture and sub-category mapping. Before working with Emma and Hannah, my book was lost in the 90,000s. Within eight weeks, we were consistently holding in the top 280 of our niche sub-category. The clarity and ethical precision they bring is unlike anything in the publishing space.',
    verifiedStatus: 'Verified Client · Debut Fantasy Series',
  },
  {
    id: 't-2',
    authorName: 'Margaret Holloway',
    bookTitle: 'The Last Gilded Hour',
    genre: 'Historical Fiction',
    metricHighlight: 'Goodreads Ratings Grew from 23 to 187',
    outcomeDetail: 'Grew organic Goodreads ratings by 713% with zero bot reviews or incentivized circles.',
    quote: 'Goodreads had always felt like an impenetrable black box. Lina Bauer understood the platform mechanics immediately. Through ethical Listopia curation and authentic reader community engagement, our ratings jumped from 23 to 187 for my debut novel. Readers were discovering the book organically every day.',
    verifiedStatus: 'Verified Client · Historical Debut',
  },
  {
    id: 't-3',
    authorName: 'Devon K. Archer',
    bookTitle: 'Silent Algorithm',
    genre: 'Psychological Thriller',
    metricHighlight: '+340% Organic Discovery in 14 Weeks',
    outcomeDetail: 'Tripled organic search impressions without ongoing ad spend reliance.',
    quote: 'The diagnostic audit was an eye-opener. Natalie and Hannah showed me where my metadata was actively repelling Amazon’s recommendation engine. In 14 weeks, organic discovery jumped 340%, and our review velocity quadrupled. Best of all, everything was completely compliant with Amazon TOS.',
    verifiedStatus: 'Verified Client · Thriller Series',
  },
  {
    id: 't-4',
    authorName: 'Celeste Vance',
    bookTitle: 'Starlight Between Us',
    genre: 'Contemporary Romance',
    metricHighlight: '120k+ Organic Views on Book Trailer',
    outcomeDetail: 'Cinematic teaser video drove a 2.4x surge in first-week pre-order conversions.',
    quote: 'Marcus and the creative production team produced a book trailer that gave me chills. It captured the exact emotional heartbeat of my characters. We posted the 9:16 cut on BookTok and it immediately struck a chord, driving thousands of pre-order clicks directly to my website store.',
    verifiedStatus: 'Verified Client · Romance Novel',
  },
  {
    id: 't-5',
    authorName: 'Dr. Alistair Grant',
    bookTitle: 'The Architecture of Mind',
    genre: 'Non-Fiction / Philosophy',
    metricHighlight: 'Author Website Conversion Rate: 14.8%',
    outcomeDetail: 'Julian designed an editorial author brand that converted reader downloads into email subscribers.',
    quote: 'Storylight Studios treats author branding with the gravitas of a luxury publishing house. The bespoke website and reader magnet funnel they created for my non-fiction book turned casual visitors into an active 3,500-subscriber newsletter community within three months.',
    verifiedStatus: 'Verified Client · Non-Fiction Launch',
  },
  {
    id: 't-6',
    authorName: 'Kaia Lin',
    bookTitle: 'Chronicles of the Iron Mist',
    genre: 'Young Adult Fantasy',
    metricHighlight: '94% Client Retention & Long-Term Growth',
    outcomeDetail: 'Secured sustainable backlist momentum across an entire 3-book series.',
    quote: 'Having a 13-person specialist team backing your book makes you feel like you have an entire traditional imprint in your corner. From audiobook casting with Lily to launch countdown execution, they treat your book like a masterpiece.',
    verifiedStatus: 'Verified Client · 3-Book Fantasy Arc',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'echoes-obsidian',
    title: 'Echoes of the Obsidian Crown',
    author: 'Seraphina Vance',
    genre: 'Dark Fantasy',
    category: 'trailers',
    image: IMAGES.fantasyTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/23dda81c4_normal_6987047947944.mp4',
    logline: 'An ancient dynasty falls into shadowed ruin as an exiled heir claims forbidden ember magic.',
    duration: '01:14 Cinematic Cut',
    soundscape: 'Original orchestral score with low brass and atmospheric embers',
    achievements: ['120,000+ Organic TikTok/Reels Views', 'Category Top 100 Launch Week', '16:9 & 9:16 Multi-Format Cut'],
    synopsis: 'Crafted as a prestige cinematic book trailer featuring dramatic close-ups of an illuminated manuscript, burning crown embers, and deep orchestral scoring that set BookTok ablaze during pre-order week.',
  },
  {
    id: 'the-glass-botanist',
    title: 'The Glass Botanist',
    author: 'Clara Dunmore',
    genre: 'Historical Mystery',
    category: 'trailers',
    image: IMAGES.historicalTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/4fe2636c4_normal_6987047937523.mp4',
    logline: 'In 1888 Edinburgh, a reclusive horticulturist uncovers a poisoned rare specimen connected to high-society murders.',
    duration: '01:02 Cinematic Cut',
    soundscape: 'Haunting chamber strings, ticking clockwork, and misty cobblestone ambiance',
    achievements: ['Goodreads Listopia #3 Position', 'Organic Amazon Subcategory #280', 'Featured in Independent Book Review'],
    synopsis: 'A moody, atmospheric visual teaser combining mist-drenched Victorian cobblestones, brass specimen jars, and tension-building string arrangements that drew in historical mystery readers.',
  },
  {
    id: 'watching-you',
    title: 'Watching You',
    author: 'Lisa Jewell',
    genre: 'Psychological Thriller',
    category: 'trailers',
    image: IMAGES.historicalTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/936d304ab_normal_698704794c741.mp4',
    logline: 'Authorized promotional work created for the published title.',
    duration: 'Authorized Promotional Work',
    synopsis: 'Book trailer created as promotional material for a published title. Label retained from the original Storylight portfolio.'
  },
  {
    id: 'the-39-clues',
    title: 'The 39 Clues',
    author: 'Rick Riordan / Scholastic',
    genre: 'Middle Grade Adventure',
    category: 'trailers',
    image: IMAGES.fantasyTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/e0397294a_normal_6987047936016.mp4',
    logline: 'Promotional video connected to the Scholastic 39 Clues series.',
    duration: 'Authorized Promotional Work'
  },
  {
    id: 'shatter-me',
    title: 'Shatter Me',
    author: 'Tahereh Mafi',
    genre: 'Young Adult Dystopian',
    category: 'trailers',
    image: IMAGES.fantasyTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/4315b38fd_normal_698704793ddad.mp4',
    logline: 'Authorized promotional work created for the published title.',
    duration: 'Authorized Promotional Work'
  },
  {
    id: 'the-maze-runner',
    title: 'The Maze Runner',
    author: 'James Dashner',
    genre: 'Young Adult Science Fiction',
    category: 'trailers',
    image: IMAGES.fantasyTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/e88570767_normal_6987047942af0.mp4',
    logline: 'Authorized promotional work created for the published title.',
    duration: 'Authorized Promotional Work'
  },
  {
    id: 'kamaladevi-mcclure',
    title: 'KamalaDevi McClure Book Trailer',
    author: 'KamalaDevi McClure',
    genre: 'Author Trailer',
    category: 'trailers',
    image: IMAGES.authorBranding,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/62345346b_normal_6987047948d1a.mp4',
    logline: 'Video produced for a confirmed client author.',
    duration: 'Confirmed Client Work'
  },
  {
    id: 'chains-of-fate',
    title: 'Chains of Fate',
    author: 'Melissa Cole',
    genre: 'Book Trailer',
    category: 'trailers',
    image: IMAGES.fantasyTrailer,
    videoUrl: 'https://media.base44.com/videos/public/69c6ff3dad78f804d6e06d93/442e5df12_normal_698704794a078.mp4',
    logline: 'Book trailer produced for a confirmed client author.',
    duration: 'Confirmed Client Work'
  },
  {
    id: 'the-writers-sanctuary',
    title: 'Eleanor Vance Author Platform',
    author: 'Eleanor Vance',
    genre: 'Literary Fiction & Memoirs',
    category: 'branding',
    image: IMAGES.workspace,
    logline: 'An editorial digital home featuring bespoke typography, reader magnet funnels, and private salon dispatches.',
    achievements: ['18.2% Reader Magnet Opt-In Rate', 'Seamless Substack & KDP Sync', 'Clean Typography & Zero Clutter'],
    synopsis: 'Designed with a warm cream and navy aesthetic, hand-set serif headings, and high-converting reader magnet architecture that captured over 2,400 new email subscribers during launch month.',
  },
  {
    id: 'crown-and-compass',
    title: 'Sovereign Lore Brand & Cover System',
    author: 'D. H. Sterling',
    genre: 'High Fantasy Series',
    category: 'branding',
    image: IMAGES.authorBranding,
    logline: 'Unified series visual identity, gold-embossed typography suite, and reader reference compendium.',
    achievements: ['Unified 4-Book Cover System', 'Custom Series Wiki & Map Portal', 'A+ Content Suite on Amazon'],
    synopsis: 'A comprehensive branding suite featuring custom typography specimens, gold-embossed digital assets, Amazon A+ graphic banners, and an author media kit ready for podcast and press outreach.',
  },
];

export const TRUST_ETHICS_CHARTER = [
  {
    title: '100% White-Hat & TOS Compliant',
    desc: 'We strictly refuse black-hat review rings, incentivized Goodreads pools, click-farm manipulations, or fake author accounts. Every recommendation and campaign operates in strict compliance with Amazon KDP terms and Goodreads guidelines.',
    points: ['No paid customer reviews or incentivized swaps', 'Zero automated bot traffic or click farms', 'Adherence to Amazon A+ and metadata policies'],
  },
  {
    title: 'Diagnostic-First Before Any Strategy',
    desc: 'We never sell generic one-size-fits-all packages. Every author engagement begins with a forensic diagnostic audit of your book’s real data—identifying precisely where reader discovery is failing before proposing a single solution.',
    points: ['24-point forensic algorithmic audit', 'Hard data over vague vanity promises', 'Transparent assessment of commercial viability'],
  },
  {
    title: '13-Person Specialist Team (No Outsourcing)',
    desc: 'Your book is not handed off to nameless freelance gig workers. All 13 team members are verified specialists with dedicated platform expertise across Amazon, Goodreads, audio production, editing, and cinematic trailers.',
    points: ['Direct access to named platform directors', 'Transparent team bios verifiable on LinkedIn', 'Platform-specific focus rather than generic generalists'],
  },
  {
    title: 'Metrics That Matter (Not Empty Vanity)',
    desc: 'We measure success by durable book health: Amazon Best Seller Rank (BSR) stabilization, organic sub-category positioning, review velocity from genuine readers, and newsletter subscriber conversion.',
    points: ['Weekly transparent performance reporting', 'BSR and organic keyword tracking', 'Durable backlist momentum over flash-in-the-pan spikes'],
  },
];

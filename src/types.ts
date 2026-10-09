export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'testimonials'
  | 'team'
  | 'trust-ethics'
  | 'process'
  | 'resources'
  | 'case-studies'
  | 'faq'
  | 'audit'
  | 'leave-a-review'
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  bestFor: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  platforms: string[];
  isLeadership?: boolean;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  bookTitle: string;
  genre: string;
  metricHighlight: string;
  quote: string;
  outcomeDetail: string;
  verifiedStatus: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  author: string;
  genre: string;
  category: 'trailers' | 'branding' | 'launches';
  image: string;
  videoUrl?: string;
  logline: string;
  duration?: string;
  soundscape?: string;
  achievements?: string[];
  synopsis?: string;
}

export interface LegacyBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  service: string;
  coverUrl: string;
  amazonUrl: string;
  goodreadsUrl: string;
}

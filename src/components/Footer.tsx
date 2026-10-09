import React from 'react';
import { PageId } from '../types';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050811] border-t border-[#D4AF37]/15 text-[#94A3B8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Lead Capture Component with glass-card design */}
        <NewsletterSignup />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-2xl font-editorial font-semibold text-white tracking-wide block">
              Storylight Studios
            </span>
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Specialist book-growth and creative production company supported by a 13-person team.
              We partner with authors across 30+ genres to architect enduring visibility, algorithmic clarity,
              and cinematic reader discovery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>100% White-Hat · Amazon & Goodreads TOS Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <a
                href="mailto:info@storylightstd.org"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                info@storylightstd.org
              </a>
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E2E8F0] font-semibold">
              Studio
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Storylight
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('team')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The 13-Person Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('trust-ethics')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trust & Ethics Charter
                </button>
              </li>
              <li><button onClick={() => handleNav('process')} className="hover:text-white transition-colors cursor-pointer">Our Process</button></li>
              <li><button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button></li>
              <li><button onClick={() => handleNav('audit')} className="hover:text-white transition-colors cursor-pointer">Marketing Audit</button></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E2E8F0] font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Visibility Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Amazon & Goodreads Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Book Trailers & Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Author Branding & Web
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Launch Countdown Planning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Evidence & Direct Action */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E2E8F0] font-semibold">
              Author Proof
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Book Trailer Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Author Testimonials (55+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Diagnostic Inquiry
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('audit')} className="hover:text-white transition-colors cursor-pointer">
                  Run a Marketing Audit
                </button>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] transition-colors"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {new Date().getFullYear()} Storylight Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('trust-ethics')}
              className="hover:text-[#94A3B8] transition-colors"
            >
              Ethical Standards Policy
            </button>
            <span aria-hidden="true">·</span>
            <span>Founder & CEO: Hannah Cooper</span>
            <span aria-hidden="true">·</span>
            <span>400+ Authors Supported</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

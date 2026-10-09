import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenDiagnostic,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'audit', label: 'Marketing Audit' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'team', label: 'Team' },
    { id: 'trust-ethics', label: 'Trust & Ethics' },
    { id: 'process', label: 'Process' },
    { id: 'resources', label: 'Resources' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'faq', label: 'FAQ' },
    { id: 'leave-a-review', label: 'Leave a Review' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080D1A]/90 backdrop-blur-md border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element as required) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl font-editorial font-semibold tracking-wide text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer text-left"
        >
          Storylight Studios
        </button>

        {/* Zone 2: Navigation Links (Text with subtle active/hover state, no pill wrappers) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer pb-1 border-b-2 ${
                  isActive
                    ? 'text-[#F5F2EB] border-[#D4AF37] font-semibold'
                    : 'text-[#A0AEC0] border-transparent hover:text-white hover:border-[#D4AF37]/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDiagnostic}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all shadow-sm hover:shadow-[#D4AF37]/20 whitespace-nowrap cursor-pointer"
          >
            <span>Request Diagnostic</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A0AEC0] hover:text-white cursor-pointer focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1120] border-b border-[#D4AF37]/20 px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-[#D4AF37] font-semibold pl-2 border-l-2 border-[#D4AF37]'
                    : 'text-[#C5D0E0] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenDiagnostic();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] rounded-sm"
              >
                Request Diagnostic
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

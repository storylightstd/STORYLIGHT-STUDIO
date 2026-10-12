import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenDiagnostic }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    { id: 'contact', label: 'Contact Us' },
  ];
  const primaryItems = navItems.filter(item => ['home', 'services', 'portfolio', 'contact'].includes(item.id));

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080D1A]/95 backdrop-blur-md border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <button onClick={() => handleNavClick('home')} className="text-xl sm:text-2xl font-editorial font-semibold tracking-wide text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer text-left">
          Storylight Studios
        </button>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium tracking-wide" aria-label="Primary navigation">
          {primaryItems.map(item => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className={`transition-colors whitespace-nowrap cursor-pointer pb-1 border-b-2 ${currentPage === item.id ? 'text-[#F5F2EB] border-[#D4AF37] font-semibold' : 'text-[#A0AEC0] border-transparent hover:text-white hover:border-[#D4AF37]/40'}`}>
              {item.label}
            </button>
          ))}
          <button onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-controls="site-menu" className="inline-flex items-center gap-2 rounded border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] hover:border-[#D4AF37] hover:text-white transition-colors">
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />} All Pages
          </button>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <button onClick={onOpenDiagnostic} className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all shadow-sm whitespace-nowrap cursor-pointer">
            <span>Request Diagnostic</span><ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-controls="site-menu" className="inline-flex lg:hidden items-center gap-2 p-2 text-[#A0AEC0] hover:text-white cursor-pointer" aria-label="Open all website pages">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <span className="hidden sm:inline text-xs uppercase tracking-wider">Menu</span>
        </button>
      </div>

      {menuOpen && (
        <div id="site-menu" className="absolute right-4 top-[calc(100%-0.5rem)] z-50 w-[min(420px,calc(100vw-2rem))] rounded-xl border border-[#D4AF37]/25 bg-[#0A1120] p-5 shadow-2xl">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div><p className="text-xs uppercase tracking-widest text-[#D4AF37]">Explore Storylight</p><p className="mt-1 text-sm text-[#CBD5E1]">Every page, in one place.</p></div>
            <button onClick={() => setMenuOpen(false)} className="text-[#94A3B8] hover:text-white" aria-label="Close all pages menu"><X className="h-4 w-4" /></button>
          </div>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5" aria-label="All website pages">
            {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`rounded px-3 py-2 text-left text-sm transition-colors ${currentPage === item.id ? 'bg-[#D4AF37]/15 text-[#F3E5AB]' : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'}`}>{item.label}</button>)}
          </nav>
          <div className="mt-4 border-t border-white/10 pt-4"><button onClick={() => { setMenuOpen(false); onOpenDiagnostic(); }} className="w-full rounded-sm bg-[#D4AF37] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D1A]">Request Diagnostic</button></div>
        </div>
      )}
    </header>
  );
};

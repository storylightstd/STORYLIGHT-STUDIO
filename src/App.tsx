/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { PageId, PortfolioItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { TrailerModal } from './components/TrailerModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Testimonials } from './pages/Testimonials';
import { Team } from './pages/Team';
import { TrustAndEthics } from './pages/TrustAndEthics';
import { Contact } from './pages/Contact';
import { LeaveReview } from './pages/LeaveReview';
import { CompanyPages } from './pages/CompanyPages';
import { Audit } from './pages/Audit';
import { SageAssistant } from './components/SageAssistant';

export default function App() {
  const pageIds: PageId[] = ['home', 'about', 'services', 'portfolio', 'testimonials', 'team', 'trust-ethics', 'process', 'resources', 'case-studies', 'faq', 'audit', 'leave-a-review', 'contact'];
  const pageFromHash = (): PageId => {
    const candidate = window.location.hash.replace(/^#\/?/, '') as PageId;
    return pageIds.includes(candidate) ? candidate : 'home';
  };
  const [currentPage, setCurrentPage] = useState<PageId>(pageFromHash);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState<PortfolioItem | null>(null);
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [diagnosticPrefill, setDiagnosticPrefill] = useState<{
    genre: string;
    stage: string;
    challenge: string;
    recommendedServices: string[];
  } | null>(null);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.history.pushState(null, '', page === 'home' ? window.location.pathname : `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncPage = () => setCurrentPage(pageFromHash());
    window.addEventListener('hashchange', syncPage);
    window.addEventListener('popstate', syncPage);
    return () => {
      window.removeEventListener('hashchange', syncPage);
      window.removeEventListener('popstate', syncPage);
    };
  }, []);

  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Storylight Studios | Specialist Book Growth & Creative Production for Authors',
      about: 'About Storylight Studios | Hannah Cooper', services: 'Author Services | Storylight Studios',
      portfolio: 'Book Trailers & Author Branding Portfolio | Storylight Studios', testimonials: 'Author Testimonials | Storylight Studios',
      team: 'The 13-Person Team | Storylight Studios', 'trust-ethics': 'Trust & Ethics | Storylight Studios',
      process: 'Our Process | Storylight Studios', resources: 'Author Resources | Storylight Studios',
      'case-studies': 'Case Studies | Storylight Studios', faq: 'FAQ | Storylight Studios',
      audit: 'Author Marketing Audit | Storylight Studios',
      'leave-a-review': 'Leave an Author Review | Storylight Studios', contact: 'Contact Storylight Studios',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiagnosticComplete = (prefill: {
    genre: string;
    stage: string;
    challenge: string;
    recommendedServices: string[];
  }) => {
    setDiagnosticPrefill(prefill);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080D1A] text-[#F5F2EB] selection:bg-[#C5A059]/30 selection:text-white">
      {/* Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
            onSelectTrailer={setSelectedTrailer}
          />
        )}

        {currentPage === 'about' && (
          <About
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'services' && (
          <Services
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
            onSelectServiceForContact={handleSelectServiceForContact}
          />
        )}

        {currentPage === 'portfolio' && (
          <Portfolio
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
            onSelectTrailer={setSelectedTrailer}
          />
        )}

        {currentPage === 'testimonials' && (
          <Testimonials
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'team' && (
          <Team
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'trust-ethics' && (
          <TrustAndEthics
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {(['process', 'resources', 'case-studies', 'faq'] as PageId[]).includes(currentPage) && (
          <CompanyPages page={currentPage} onNavigate={handleNavigate} onOpenDiagnostic={handleOpenDiagnostic} />
        )}

        {currentPage === 'audit' && <Audit onNavigate={handleNavigate} />}

        {currentPage === 'contact' && (
          <Contact
            onNavigate={handleNavigate}
            initialService={contactInitialService}
            diagnosticPrefill={diagnosticPrefill}
          />
        )}

        {currentPage === 'leave-a-review' && (
          <LeaveReview onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Diagnostic Assessment Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onNavigateToContact={handleDiagnosticComplete}
      />

      {/* Book Trailer Playback Modal */}
      <TrailerModal
        item={selectedTrailer}
        onClose={() => setSelectedTrailer(null)}
        onRequestQuote={() => {
          setSelectedTrailer(null);
          setContactInitialService('Book Trailers & Creative Production');
          setCurrentPage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <SageAssistant />
    </div>
  );
}

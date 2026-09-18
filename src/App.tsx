import React, { useState, useEffect } from 'react';
import { PageId, PortfolioProject } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { TestimonialsView } from './components/TestimonialsView';
import { PricingView } from './components/PricingView';
import { BlogsView } from './components/BlogsView';
import { FaqsView } from './components/FaqsView';
import { ContactView } from './components/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  // Scroll to top when page changes
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col selection:bg-[#f84900] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenProject={(proj) => setSelectedProject(proj)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {(activePage === 'about' || (activePage as string) === 'team') && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'portfolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onOpenProject={(proj) => setSelectedProject(proj)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'testimonials' && (
          <TestimonialsView
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'pricing' && (
          <PricingView
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'blogs' && (
          <BlogsView
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'faqs' && (
          <FaqsView
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {activePage === 'contact' && <ContactView />}
      </main>

      {/* Global Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Global Consultation / "Let's Talk" Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Global Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />
    </div>
  );
};

export default App;

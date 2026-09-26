import React, { Suspense, lazy, useState, useEffect } from 'react';
import { PageId, PortfolioProject } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { getPageFromPathname, getPagePath } from './utils/routes';

const AboutView = lazy(() => import('./components/AboutView').then((module) => ({ default: module.AboutView })));
const ServicesView = lazy(() => import('./components/ServicesView').then((module) => ({ default: module.ServicesView })));
const PortfolioView = lazy(() => import('./components/PortfolioView').then((module) => ({ default: module.PortfolioView })));
const PricingView = lazy(() => import('./components/PricingView').then((module) => ({ default: module.PricingView })));
const BlogsView = lazy(() => import('./components/BlogsView').then((module) => ({ default: module.BlogsView })));
const ContactView = lazy(() => import('./components/ContactView').then((module) => ({ default: module.ContactView })));
const ProjectModal = lazy(() => import('./components/ProjectModal').then((module) => ({ default: module.ProjectModal })));
const QuoteModal = lazy(() => import('./components/QuoteModal').then((module) => ({ default: module.QuoteModal })));

const AppContent: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>(() =>
    typeof window === 'undefined' ? 'home' : getPageFromPathname(window.location.pathname),
  );
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const { isDark } = useTheme();

  // Scroll to top when page changes
  const handleNavigate = (page: PageId) => {
    if (page === 'testimonials' || page === 'faqs') {
      const sectionId = page;
      window.history.pushState({ page: 'home', sectionId }, '', `/#${sectionId}`);
      setActivePage('home');
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }

    const nextPath = getPagePath(page);
    if (window.location.pathname !== nextPath || window.location.search) {
      window.history.pushState({ page }, '', nextPath);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keep the rendered page in sync with browser Back/Forward navigation.
  useEffect(() => {
    const handlePopState = () => {
      setSelectedProject(null);
      setActivePage(getPageFromPathname(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div
      className={`min-h-screen flex flex-col selection:bg-[#f84900] selection:text-white transition-colors duration-300 ${
        isDark ? 'bg-[#070709] text-neutral-100' : 'bg-[#f8f9fa] text-neutral-900'
      }`}
    >
      {/* Top Viewport Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Sticky Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh] bg-[#070709]" aria-hidden="true" />}>
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
            activeProject={selectedProject}
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
        {activePage === 'contact' && <ContactView />}
        </Suspense>
      </main>

      {/* Global Project Case Study Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setSelectedProject(null);
              if (typeof window !== 'undefined' && window.history) {
                const url = new URL(window.location.href);
                if (url.searchParams.has('project')) {
                  url.searchParams.delete('project');
                  window.history.replaceState({}, '', url.toString());
                }
              }
            }}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        </Suspense>
      )}

      {/* Global Consultation / "Let's Talk" Modal */}
      {isQuoteOpen && (
        <Suspense fallback={null}>
          <QuoteModal
            isOpen
            onClose={() => setIsQuoteOpen(false)}
          />
        </Suspense>
      )}

      {/* Global Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection, ServiceItem } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GrowthSection } from './components/GrowthSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ServiceModal } from './components/ServiceModal';
import { ProjectsModal } from './components/ProjectsModal';
import { Language, translations } from './translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState(
    'Web Development & Landing Pages'
  );

  const [selectedServiceDetail, setSelectedServiceDetail] =
    useState<ServiceItem | null>(null);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);

  const t = translations[currentLang];

  const handleOpenContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForQuote(serviceTitle);
    }
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar with Language Switcher */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        t={t}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Page Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection t={t} onOpenContact={() => handleOpenContact()} />

        {/* Section 2: Our Services */}
        <ServicesSection
          t={t}
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onExploreWork={() => setProjectsModalOpen(true)}
        />

        {/* Section 3: Our Portfolio */}
        <PortfolioSection
          t={t}
          onOpenProjectsModal={() => setProjectsModalOpen(true)}
        />

        {/* Section 4: Why Choose Vanessa Iris? */}
        <WhyChooseUsSection t={t} />

        {/* Section 5: Turn Ideas Into Real Growth */}
        <GrowthSection t={t} onOpenContact={() => handleOpenContact()} />

        {/* Section 6: Let's Build Something Great Together */}
        <FooterSection t={t} onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={selectedServiceForQuote}
        t={t}
      />

      <ServiceModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onSelectForQuote={(serviceTitle) => handleOpenContact(serviceTitle)}
        t={t}
      />

      <ProjectsModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        onSelectProjectForQuote={(title) => handleOpenContact(title)}
        t={t}
      />
    </div>
  );
}

import React from 'react';

// Layout
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

// Sections
import HeroSection from './components/sections/HeroSection';
import OverviewSection from './components/sections/IdeaSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TechSection from './components/sections/TechSection';
import ArchitectureSection from './components/sections/ArchitectureSection';
import CloudSection from './components/sections/CloudSection';
import ProcessSection from './components/sections/ProcessSection';
import WorkflowSection from './components/sections/WorkflowSection';
import MonetizationSection from './components/sections/MonetizationSection';
import TeamSection from './components/sections/TeamSection';
import { FooterSection, Footer } from './components/sections/FooterSection';

const App = () => (
  <div className="min-h-screen antialiased" style={{ background: '#05050f', color: '#f1f5f9' }}>
    {/* Navigation */}
    <Navbar />

    {/* Back to Top */}
    <BackToTop />

    {/* Main Content */}
    <main>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Project Overview */}
      <OverviewSection />

      {/* 3. Core Features */}
      <FeaturesSection />

      {/* 4. Technology Stack */}
      <TechSection />

      {/* 5. Software Architecture */}
      <ArchitectureSection />

      {/* 6. Azure Cloud Strategy */}
      <CloudSection />

      {/* 7. CI/CD & DevOps */}
      <ProcessSection />

      {/* 8. Agile Timeline */}
      <WorkflowSection />

      {/* 9. Monetization & Roadmap */}
      <MonetizationSection />

      {/* 10. Team */}
      <TeamSection />

      {/* 11. GitHub CTAs + Footer content */}
      <FooterSection />
    </main>

    {/* Global Footer Bar */}
    <Footer />
  </div>
);

export default App;

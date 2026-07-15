import React from 'react';

// Layout
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';
import SectionDivider from './components/SectionDivider';

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

const App = () => {
  return (
    <div className="min-h-screen antialiased" style={{ background: '#05050f', color: '#f1f5f9' }}>
      {/* Global Cursor Glow Effect */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Back to Top */}
      <BackToTop />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <HeroSection />

        <SectionDivider variant="coral" />

        {/* 2. Project Overview */}
        <OverviewSection />

        <SectionDivider variant="blue" flip />

        {/* 3. Core Features */}
        <FeaturesSection />

        <SectionDivider variant="coral" />

        {/* 4. Technology Stack */}
        <TechSection />

        <SectionDivider variant="blue" flip />

        {/* 5. Software Architecture */}
        <ArchitectureSection />

        <SectionDivider variant="coral" />

        {/* 6. Azure Cloud Strategy */}
        <CloudSection />

        <SectionDivider variant="blue" flip />

        {/* 7. CI/CD & DevOps */}
        <ProcessSection />

        <SectionDivider variant="coral" />

        {/* 8. Agile Timeline */}
        <WorkflowSection />

        <SectionDivider variant="blue" flip />

        {/* 9. Monetization & Roadmap */}
        <MonetizationSection />

        <SectionDivider variant="coral" />

        {/* 10. Team */}
        <TeamSection />

        {/* 11. GitHub CTAs + Footer content */}
        <FooterSection />
      </main>

      {/* Global Footer Bar */}
      <Footer />
    </div>
  );
};

export default App;


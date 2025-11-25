import React, { useState, useEffect } from 'react';
import { Rocket, Shield, Code, Cloud, Terminal, DollarSign, Calendar, Users } from 'lucide-react';

// Components
import Card from './components/Card';
import PlaceholderImage from './components/PlaceholderImage';
import ImageModal from './components/ImageModal';
import BackToTop from './components/BackToTop';

// Sections
import IdeaSection from './components/sections/IdeaSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TechSection from './components/sections/TechSection';
import CloudSection from './components/sections/CloudSection';
import ProcessSection from './components/sections/ProcessSection';
import WorkflowSection from './components/sections/WorkflowSection';
import MonetizationSection from './components/sections/MonetizationSection';

// --- PROJECT IMAGE URLS ---
const LOGO_IMAGE_URL = "https://github.com/thimira20011/nearuportfolio-images/blob/main/NearU%20logo.png?raw=true";

// --- TEAM MEMBER PHOTO URLS (Static, not for click-to-view) ---
const THIMIRA_PHOTO_URL = "https://placehold.co/600x600/8B5CF6/ffffff?text=TN";
const MANJARI_PHOTO_URL = "https://placehold.co/600x400/34D399/ffffff?text=MB";
const PAMAL_PHOTO_URL = "https://placehold.co/400x600/FCD34D/1F2937?text=PP";
const UVINDU_PHOTO_URL = "https://placehold.co/600x600/FB7185/ffffff?text=UH";

// === Data Structure for Navigation ===
const portfolioSections = [
  { id: 'idea', title: 'Project Overview', icon: Rocket, component: 'IdeaSection' },
  { id: 'features', title: 'Core Features & Safety', icon: Shield, component: 'FeaturesSection' },
  { id: 'tech', title: 'Software Architecture', icon: Code, component: 'TechSection' },
  { id: 'cloud', title: 'Azure Cloud Strategy', icon: Cloud, component: 'CloudSection' },
  { id: 'process', title: 'Agile & DevOps (CI/CD)', icon: Terminal, component: 'ProcessSection' },
  { id: 'workflow', title: 'Workflow & Timeline', icon: Calendar, component: 'WorkflowSection' },
  { id: 'monetization', title: 'Monetization & Roadmap', icon: DollarSign, component: 'MonetizationSection' },
];

// Map of component names to actual components
const componentMap = {
  IdeaSection,
  FeaturesSection,
  TechSection,
  CloudSection,
  ProcessSection,
  WorkflowSection,
  MonetizationSection,
};

// Function to map team member names to their respective photo URL constants
const getTeamPhotoUrl = (name) => {
  switch (name) {
    case 'Thimira Niranjaya': return THIMIRA_PHOTO_URL;
    case 'Manjari Bhagya': return MANJARI_PHOTO_URL;
    case 'Pamal Pahasara': return PAMAL_PHOTO_URL;
    case 'Uvindu Heshan': return UVINDU_PHOTO_URL;
    default: return ''; // Fallback to placeholder if name is not found
  }
};

// === Main App Component ===
const App = () => {
  const [activeSection, setActiveSection] = useState('idea');
  // State for the Image Modal (Lightbox)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  // Function to open the lightbox
  const openImageModal = (url) => {
    if (url) {
      setModalImageUrl(url);
      setIsModalOpen(true);
    }
  };

  // Function to close the lightbox
  const closeImageModal = () => {
    setIsModalOpen(false);
    setModalImageUrl('');
  };

  // Hook to handle closing the modal on ESC key press
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isModalOpen]);


  // Find the component to render based on activeSection state
  // Components that display clickable images get the openImageModal function passed as a prop
  const ActiveComponent = componentMap[portfolioSections.find(s => s.id === activeSection)?.component];

  // Team Data updated from PDF
  const teamMembers = [
    { name: 'Thimira Niranjaya', role: 'Backend / Database Engineer' },
    { name: 'Manjari Bhagya', role: 'Frontend Lead / UI/UX' },
    { name: 'Pamal Pahasara', role: 'CI/CD & Cloud Specialist' },
    { name: 'Uvindu Heshan', role: 'Full Stack Developer / Tester' },
  ];
  const supervisor = { name: 'Mr S. Nishankar', title: 'Project Supervisor' };


  return (
    <div className="min-h-screen bg-gray-900 antialiased text-gray-100">

      {/* 1. RENDER MODAL outside the main content flow */}
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        onClose={closeImageModal}
      />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Header */}
      <header className="bg-gray-800 p-6 shadow-xl sticky top-0 z-20 border-b border-indigo-600/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* LOGO AND PROJECT TITLE */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center">
            <div className="w-10 h-10 mr-3 flex-shrink-0">
              <PlaceholderImage
                width="100%"
                height="100%"
                text="LOGO"
                shape="square"
                className="!border-gray-500/50 text-xs"
                imageUrl={LOGO_IMAGE_URL}
              />
            </div>
            <span className="text-indigo-400">Near</span>
            <span className="text-indigo-600">U</span>
          </h1>
          <p className="mt-2 md:mt-0 text-indigo-300 text-xl font-medium">Local Business Marketplace (2025)</p>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid lg:grid-cols-4 gap-8 mt-6">

        {/* Navigation Sidebar */}
        <nav className="lg:col-span-1">
          <Card className="p-0 sticky top-24 bg-gray-800/80 backdrop-blur-sm">
            <h2 className="p-4 text-2xl font-bold text-indigo-400 border-b border-gray-700">Portfolio Sections</h2>
            <ul className="space-y-1 p-3">
              {portfolioSections.map((section) => {
                const isActive = activeSection === section.id;
                const Icon = section.icon;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left flex items-center p-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-1
                        ${isActive
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                      }
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {section.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Card>
        </nav>

        {/* Dynamic Content Area */}
        <section className="lg:col-span-3 min-h-[60vh]">
          <h2 className="text-4xl font-extrabold text-white mb-6 border-b-4 border-indigo-500 pb-2">
            {portfolioSections.find(s => s.id === activeSection)?.title}
          </h2>
          <div className="transition-opacity duration-500 ease-in-out">
            {/* Pass the modal function to the Idea, Cloud, and Workflow sections */}
            {ActiveComponent && <ActiveComponent openImageModal={openImageModal} />}
          </div>
        </section>
      </div>

      {/* Team and Supervisor Footer Section */}
      <div className="bg-gray-800 border-t border-indigo-600/50 mt-12 p-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center"><Users className="w-6 h-6 mr-3" /> Our Development Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700 transition-all hover:border-indigo-500">
                {/* Team member photos are static, no onClick or cursor-zoom-in applied */}
                <div
                  className="flex-shrink-0 mr-4 focus:outline-none rounded-full"
                >
                  <PlaceholderImage
                    shape="circle"
                    width="60px"
                    height="60px"
                    objectFitClass="object-contain"
                    text={member.name.split(' ')[0][0] + member.name.split(' ')[1][0]}
                    className="text-xs"
                    imageUrl={getTeamPhotoUrl(member.name)}
                  // IMPORTANT: The onClick prop is intentionally OMITTED here
                  />
                </div>
                <div>
                  <p className="font-extrabold text-xl text-white">{member.name}</p>
                  <p className="text-sm text-indigo-400 font-medium mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Supervisor */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Project Supervisor</h3>
            <div className="p-4 bg-gray-700 rounded-xl shadow-md max-w-md border-l-4 border-indigo-500">
              <p className="font-extrabold text-xl text-white">{supervisor.name}</p>
              <p className="text-md text-indigo-300">{supervisor.title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <footer className="bg-black text-gray-500 p-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>&copy; 2025 NearU Capstone Project. Built using ASP.NET Core, React.js, and Azure Free Tier.</p>
          <a href="https://github.com/pamal29/NearU.git" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition-colors mt-1 inline-block">View GitHub Repository & Documentation</a>
        </div>
      </footer>
    </div>
  );
};

export default App;

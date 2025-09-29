import React, { useState, useEffect } from 'react';

// === Icon Components (Simulated Lucide Icons for aesthetic appeal) ===

const RocketIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.75-1.99.04-2.67l.08.07c-2.45-2.45-3.26-3.76-3.8-5.32c-.17-.49-.13-1.01.12-1.39l4.5-4.5c.38-.25.9-.28 1.39-.12c1.56.54 2.87 1.35 5.32 3.8l-.07-.08c.68-.7.73-1.85.04-2.58l.08.07c-1.26-1.5-5-2-5-2s-.5-3.74-2-5c-.84-.71-1.99-.75-2.67-.04l.07.08c-2.45 2.45-3.76 3.26-5.32 3.8c-.49.17-1.01.13-1.39-.12L2.09 9.39c-.25-.38-.28-.9-.12-1.39c.54-1.56 1.35-2.87 3.8-5.32l-.07-.08c.7-.68 1.85-.73 2.58-.04l-.08.07c1.5 1.26 2 5 2 5s3.74.5 5 2c.71.84.75-1.99.04-2.67l.08.07c2.45 2.45 3.26 3.76 3.8 5.32c.17.49.13 1.01-.12 1.39l-4.5 4.5c-.38.25-.9.28-1.39.12c-1.56-.54-2.87-1.35-5.32-3.8l.07.08c-.68.7-.73 1.85-.04 2.58z"/></svg>);
const ShieldIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const CodeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const CloudIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H17a5 5 0 0 0-4.5-5h-1a5 5 0 0 0-4.5 5H4a4 4 0 0 1-.5-8.5 4 4 0 0 1 7-3.5 6 6 0 0 1 10 2.5 5.5 5.5 0 0 1-.5 10z"/></svg>);
const TerminalIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>);
const DollarSignIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
const UsersIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 14v-1a4 4 0 0 0-4-4h-2"/></svg>);
const XIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>);


// === Reusable Image Component (Handles Image URL and Placeholder) ===
const PlaceholderImage = ({ 
    width = '100%', 
    height = '100%', 
    className = '', 
    shape = 'square', 
    text = 'Image Placeholder', 
    imageUrl = '',
    objectFitClass = 'object-cover',
    onClick
}) => {
  const baseClasses = "flex items-center justify-center border-2 border-dashed border-gray-600 text-gray-400 font-semibold";
  const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded-xl';
  // Add conditional styling for clickable images
  // The 'onClick' prop existence determines if cursor/hover effects are applied.
  const cursorClass = onClick ? 'cursor-zoom-in hover:shadow-lg hover:shadow-indigo-500/30 transition-shadow' : '';

  if (imageUrl) {
    // If a valid image URL is provided, render the image
    return (
      <img
        src={imageUrl}
        alt={text}
        className={`${shapeClasses} w-full h-full ${objectFitClass} ${className} ${cursorClass}`}
        style={{ width, height, minHeight: height, minWidth: width }}
        loading="lazy"
        onClick={onClick} // Attach click handler here (only if provided)
        // Optional: Add onerror to handle broken links
        onError={(e) => { 
            e.currentTarget.onerror = null; 
            e.currentTarget.style.display = 'none'; // Hide broken image
            e.currentTarget.parentElement.innerHTML = `<div class="${baseClasses} ${shapeClasses} w-full h-full bg-red-900/50">Error Loading Image</div>`;
        }}
      />
    );
  }

  // Otherwise, render the placeholder box
  return (
    <div
      className={`${baseClasses} ${shapeClasses} ${className} bg-gray-700/50 ${cursorClass}`}
      style={{ width, height, minHeight: height, minWidth: width }}
      onClick={onClick} // Attach click handler here (only if provided)
    >
      {/* Lucide Photo Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      <span className="text-xs sm:text-sm">{text}</span>
    </div>
  );
};


// --- IMAGE MODAL COMPONENT (Lightbox) ---
const ImageModal = ({ imageUrl, isOpen, onClose }) => {
    // Added transition classes for a smooth fade-in/out effect
    const modalClasses = isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none';

    if (!imageUrl) return null; // Only render if there's a URL to show

    return (
        // Modal Overlay - Uses fixed position and z-index 50 to cover everything
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${modalClasses}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }} // High opacity background for full focus
            onClick={onClose} // Clicking the background closes the modal
        >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-white hover:text-indigo-400 transition-colors z-[51] p-2 rounded-full bg-gray-800/50"
                onClick={onClose}
                aria-label="Close image modal"
            >
                <XIcon className="w-8 h-8" />
            </button>

            {/* Modal Content - Click handler stops click events from propagating to the backdrop */}
            <div 
                className="max-w-full max-h-full overflow-hidden p-4" 
            >
                <img 
                    src={imageUrl} 
                    alt="Full View" 
                    // Tailwind classes for responsive image display
                    className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl border border-indigo-400/50"
                    loading="lazy"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
            </div>
        </div>
    );
};
// ------------------------------------------


// --- PROJECT IMAGE URLS ---
const LOGO_IMAGE_URL = "https://github.com/thimira20011/nearuportfolio-images/blob/main/NearU%20logo.png?raw=true"; 
const PRODUCT_SCREENSHOT_URL = "https://placehold.co/1280x720/1F2937/F3F4F6?text=Product+Screenshot"; 
const AWS_DIAGRAM_URL = "https://raw.githubusercontent.com/thimira20011/nearuportfolio-images/refs/heads/main/Cloud.png"; 

// --- TEAM MEMBER PHOTO URLS (Static, not for click-to-view) ---
// Using mock URLs from the previous implementation
const THIMIRA_PHOTO_URL = "https://placehold.co/600x600/8B5CF6/ffffff?text=TN"; 
const MANJARI_PHOTO_URL = "https://placehold.co/600x400/34D399/ffffff?text=MB"; 
const PAMAL_PHOTO_URL = "https://placehold.co/400x600/FCD34D/1F2937?text=PP"; 
const UVINDU_PHOTO_URL = "https://placehold.co/600x600/FB7185/ffffff?text=UH"; 
// ------------------------------


// === Data Structure for Navigation ===
const portfolioSections = [
  { id: 'idea', title: 'Project Overview', icon: RocketIcon, component: 'IdeaSection' },
  { id: 'features', title: 'Core Features & Safety', icon: ShieldIcon, component: 'FeaturesSection' },
  { id: 'tech', title: 'Software Architecture', icon: CodeIcon, component: 'TechSection' },
  { id: 'cloud', title: 'AWS Cloud Strategy', icon: CloudIcon, component: 'CloudSection' },
  { id: 'process', title: 'Agile & DevOps (CI/CD)', icon: TerminalIcon, component: 'ProcessSection' },
  { id: 'monetization', title: 'Monetization & Roadmap', icon: DollarSignIcon, component: 'MonetizationSection' },
];

// === Reusable Card Component ===
const Card = ({ title, icon: Icon, className, children }) => (
  <div className={`p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-300 transform hover:scale-[1.01] ${className}`}>
    {title && (
      <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center border-b border-gray-700 pb-2">
        {Icon && <Icon className="w-6 h-6 mr-3 text-indigo-500" />}
        {title}
      </h3>
    )}
    {children}
  </div>
);

// --- Project Sections (Passed openImageModal prop) ---

const IdeaSection = ({ openImageModal }) => (
  <div className="space-y-6">
    
    {/* Product Screenshot - CLICKABLE */}
    <Card title="Product Screenshot" className="p-0 bg-gray-700/30 overflow-hidden">
      <div className="aspect-video"> {/* Maintain 16:9 ratio for screenshot */}
          <PlaceholderImage 
            height="100%" 
            width="100%" 
            text="Website / Mobile App UI Screenshot" 
            imageUrl={PRODUCT_SCREENSHOT_URL} 
            onClick={() => openImageModal(PRODUCT_SCREENSHOT_URL)} // Click handler IS applied
          />
      </div>
      <p className="text-center text-gray-400 text-sm py-2">Click to view full image.</p>
    </Card>

    <Card title="Project Name: NearU" className="bg-gray-700/50">
      <p className="text-gray-200 leading-relaxed text-lg">
        <b>NearU</b> is a fully functional web platform and mobile app designed to be the go-to <b>Local Business Marketplace for the University Area</b>. It directly connects students and community users with essential local services (food, taxis, cakes, etc.). The platform allows users to <b>discover, order, book, review, and rate</b> businesses, solving a critical local community problem.
      </p>
    </Card>

    <Card title="Core User Features">
      <ul className="space-y-3 text-gray-300 list-disc list-inside ml-2">
        <li><b>User Registration/Login:</b> Via email or social login.</li>
        <li><b>Discovery:</b> Browse businesses by category and location.</li>
        <li><b>Interaction:</b> Place orders, make bookings, or contact businesses directly.</li>
        <li><b>Social Proof:</b> Add detailed reviews and star ratings.</li>
        <li><b>Personalization:</b> Save favorite businesses for quick access.</li>
      </ul>
    </Card>
    <Card title="Core Business Features">
      <ul className="space-y-3 text-gray-300 list-disc list-inside ml-2">
        <li><b>Profile Management:</b> Register and manage professional business profiles.</li>
        <li><b>Content Upload:</b> Upload photos, menus, service details, and pricing.</li>
        <li><b>Operations:</b> Manage incoming orders and appointments efficiently.</li>
        <li><b>Analytics:</b> Access a dashboard for views, ratings, and sales overview.</li>
        <li><b>Premium Options:</b> Manage boosted listings, ads, and featured placement.</li>
      </ul>
    </Card>
  </div>
);

const FeaturesSection = () => (
  <div className="space-y-6">
    <Card title="Platform Safety & Moderation (High Priority)">
      <p className="text-gray-300 mb-4">
        Trust and security are paramount. We implement strict moderation and clear transparency mechanisms.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-800/20 border border-red-700 rounded-lg">
          <p className="font-bold text-red-400">Moderation Logic</p>
          <ul className="text-sm text-gray-300 list-disc list-inside ml-2 mt-1">
            <li>All business registrations require <b>Admin Approval</b> before going live.</li>
            <li>Admin can <b>remove a service</b> if it receives many bad reviews/ratings.</li>
          </ul>
        </div>
        <div className="p-4 bg-indigo-800/20 border border-indigo-700 rounded-lg">
          <p className="font-bold text-indigo-400">User Transparency</p>
          <ul className="text-sm text-gray-300 list-disc list-inside ml-2 mt-1">
            <li><b>Disclaimer Banner:</b> Must clearly state: "This only provides contact details. We do not take responsibility for service quality or external agreements."</li>
            <li><b>About/Info Page:</b> Clearly states: "<b>we list contacts only</b>."</li>
            <li><b>Legal:</b> Mandatory Terms & Conditions checkbox on registration.</li>
          </ul>
        </div>
      </div>
    </Card>
    <Card title="Admin & Unique Features">
      <ul className="space-y-3 text-gray-300 list-disc list-inside ml-2">
        <li><b>Bulk Orders:</b> Unique feature allowing students to submit bulk inquiries to multiple verified contacts.</li>
        <li><b>Contact Verification:</b> Systemic checks to ensure all contact details are accurate and current.</li>
        <li><b>Admin Panel:</b> Approve/reject registrations, manage monetization, and handle reported users/reviews.</li>
      </ul>
    </Card>
  </div>
);

const TechSection = () => (
  <div className="space-y-6">
    <Card title="Core Technology Stack">
      <h4 className="text-xl font-semibold text-gray-200 mb-3">Backend & Data</h4>
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-4 py-1 bg-green-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-green-400">ASP.NET Core Web API (C#)</span>
        <span className="px-4 py-1 bg-gray-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-gray-400">Entity Framework Core (ORM)</span>
        <span className="px-4 py-1 bg-blue-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-blue-400">ASP.NET Identity + JWT (Auth)</span>
      </div>

      <h4 className="text-xl font-semibold text-gray-200 mb-3">Frontend & UI/UX</h4>
      <div className="flex flex-wrap gap-3">
        <span className="px-4 py-1 bg-indigo-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-indigo-400">React.js / Angular (Framework)</span>
        <span className="px-4 py-1 bg-cyan-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-cyan-400">TailwindCSS (Responsive UI)</span>
        <span className="px-4 py-1 bg-pink-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-pink-400">Figma (UI/UX Diagrams)</span>
      </div>
    </Card>
  </div>
);

const CloudSection = ({ openImageModal }) => (
  <div className="space-y-6">
    <Card title="Professional AWS Cloud Architecture">
      {/* AWS Diagram - CLICKABLE */}
      <div className="mt-4 mb-2 h-64 border-2 border-dashed border-indigo-500/50 rounded-xl">
          <PlaceholderImage 
            height="100%" 
            width="100%" 
            text="High-Level AWS Architecture Diagram" 
            imageUrl={AWS_DIAGRAM_URL} 
            onClick={() => openImageModal(AWS_DIAGRAM_URL)} // Click handler IS applied
          />
      </div>
      <p className="text-center text-gray-400 text-sm mb-4">Click to view full diagram.</p>

      <p className="text-gray-300 mb-4">
        Our infrastructure is designed for scalability and reliability, utilizing <strong>AWS</strong> as the industry-standard platform.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="font-bold text-indigo-300">Application Layer</p>
          <ul className="text-sm text-gray-400 list-disc list-inside ml-2 mt-1">
            <li><b>Compute:</b> Elastic Beanstalk (or EC2 + Docker)</li>
            <li><b>Traffic:</b> Application Load Balancer (ALB)</li>
            <li><b>Delivery:</b> CloudFront (CDN for static caching)</li>
          </ul>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="font-bold text-yellow-300">Data & Storage</p>
          <ul className="text-sm text-gray-400 list-disc list-inside ml-2 mt-1">
            <li><b>Relational DB:</b> Amazon RDS (SQL Server)</li>
            <li><b>File Assets:</b> Amazon S3 (Images, menus, docs)</li>
            <li><b>Security:</b> ACM (SSL/TLS) and IAM (Role Mgmt)</li>
          </ul>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-red-500 col-span-full">
          <p className="font-bold text-red-300">Event-Driven Serverless Layer (AWS Lambda)</p>
          <ul className="text-sm text-gray-400 list-disc list-inside ml-2 mt-1">
            <li><b>Triggers:</b> Image processing (resize/compress before S3 storage).</li>
            <li><b>Notifications:</b> Email/SMS for order confirmations via <b>SES</b> and <b>SNS</b>.</li>
            <li><b>Maintenance:</b> Scheduled tasks (cleanup expired subscriptions).</li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
);

const ProcessSection = () => (
  <div className="space-y-6">
    <Card title="Agile Methodology: Scrum">
      <p className="text-gray-300 mb-4">
        We managed the project using <strong>Scrum</strong>, breaking the development into focused <strong>Sprints</strong>.
      </p>
      <div className="grid md:grid-cols-3 gap-3 text-center">
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-bold text-lg text-indigo-300">Roles</p>
          <p className="text-sm text-gray-400">Product Owners, Scrum Master, Dev Team</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-bold text-lg text-indigo-300">Tooling</p>
          <p className="text-sm text-gray-400"><strong>Jira / Trello</strong> (Backlog & Sprint Planning)</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-bold text-lg text-indigo-300">Artifacts</p>
          <p className="text-sm text-gray-400">Product Backlog, Sprint Backlogs</p>
        </div>
      </div>
    </Card>
    <Card title="CI/CD Pipeline (AWS CodePipeline)">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border border-indigo-600 bg-indigo-900/50 rounded-lg transition-all hover:bg-indigo-900">
          <p className="font-bold text-indigo-300 flex items-center"><TerminalIcon className="w-5 h-5 mr-2"/> CI (Continuous Integration)</p>
          <p className="text-sm text-gray-300 mt-1">Code is version controlled on <strong>GitHub</strong>. <strong>xUnit/NUnit</strong> tests are automatically run via <strong>AWS CodeBuild</strong> on every push.</p>
        </div>
        <div className="p-4 border border-green-600 bg-green-900/50 rounded-lg transition-all hover:bg-green-900">
          <p className="font-bold text-green-300 flex items-center"><RocketIcon className="w-5 h-5 mr-2"/> CD (Continuous Deployment)</p>
          <p className="text-sm text-gray-300 mt-1">On successful test pass, <strong>AWS CodePipeline</strong> automatically deploys the build (potentially Dockerized via <strong>ECR</strong>) to Elastic Beanstalk, maintaining a perpetually live environment.</p>
        </div>
      </div>
    </Card>
    <Card title="Testing Strategy">
      <ul className="space-y-2 text-gray-300 list-disc list-inside ml-2">
        <li><strong>Unit Testing:</strong> (xUnit/NUnit) for core ASP.NET business logic.</li>
        <li><strong>API Testing:</strong> (Postman) for validating all REST endpoints.</li>
        <li><strong>End-to-End (E2E) Testing:</strong> (Selenium / Playwright) for automated UI verification.</li>
      </ul>
    </Card>
  </div>
);

const MonetizationSection = () => (
  <div className="space-y-6">
    <Card title="Multi-Tiered Monetization Plan">
      <p className="text-gray-300 mb-4 font-medium">
        The platform has built-in revenue streams designed for scalability and business growth.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-900/50 border border-yellow-600 rounded-lg">
          <p className="font-bold text-lg text-yellow-300">Tier 1: Premium Listings</p>
          <p className="text-sm text-gray-300 mt-1">Businesses pay for boosted visibility, showing their ads and listings on top of search results (maximum exposure).</p>
        </div>
        <div className="p-4 bg-purple-900/50 border border-purple-600 rounded-lg">
          <p className="font-bold text-lg text-purple-300">Tier 2: Premium Features</p>
          <p className="text-sm text-gray-300 mt-1">Subscription access to advanced analytics and promotion tools.</p>
        </div>
        <div className="p-4 bg-red-900/50 border border-red-600 rounded-lg">
          <p className="font-bold text-lg text-red-300">Tier 3: Ad Placement</p>
          <p className="text-sm text-gray-300 mt-1">Standard advertising revenue generated via <strong>AdSense</strong> or direct ad network integration.</p>
        </div>
      </div>
    </Card>

    <Card title="Future Roadmap">
      <ul className="space-y-2 text-gray-300 list-disc list-inside ml-2">
        <li>Implement optional future revenue: a small transaction fee per order/booking.</li>
        <li>Expand beyond the university area to city-wide (scalable business model).</li>
        <li>Focus on traffic enhancement through promotional gifts/incentives to drive user adoption.</li>
      </ul>
    </Card>
  </div>
);

// Map of component names to actual components
const componentMap = {
  IdeaSection,
  FeaturesSection,
  TechSection,
  CloudSection,
  ProcessSection,
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
                      <Icon className="w-5 h-5 mr-3"/>
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
                {/* Pass the modal function to the Idea and Cloud sections */}
                {ActiveComponent && <ActiveComponent openImageModal={openImageModal} />} 
            </div>
        </section>
      </div>

      {/* Team and Supervisor Footer Section */}
      <div className="bg-gray-800 border-t border-indigo-600/50 mt-12 p-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center"><UsersIcon className="w-6 h-6 mr-3"/> Our Development Team</h3>
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
          <p>&copy; 2025 NearU Capstone Project. Built using ASP.NET Core, React.js, and AWS Free Tier.</p>
          <a href="https://github.com/YourGitHubUsername/NearU-Capstone" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition-colors mt-1 inline-block">View GitHub Repository & Documentation</a>
        </div>
      </footer>
    </div>
  );
};

export default App;

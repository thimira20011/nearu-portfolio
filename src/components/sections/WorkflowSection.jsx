import React from 'react';
import Card from '../Card';
import PlaceholderImage from '../PlaceholderImage';
import { Calendar } from 'lucide-react';

const WORK_PHOTO_1_URL = "https://placehold.co/600x400/3B82F6/ffffff?text=Team+Planning+Session";
const WORK_PHOTO_2_URL = "https://placehold.co/600x400/10B981/ffffff?text=Code+Review+or+Testing";

const WorkflowSection = ({ openImageModal }) => (
    <div className="space-y-6">
        <Card title="Project Timeline and Key Milestones" icon={Calendar}>
            <p className="text-gray-300 mb-6">
                The project was executed over several months following the **Scrum** framework, with clearly defined stages and outcomes.
            </p>

            {/* Timeline Structure */}
            <div className="relative border-l-4 border-indigo-600 space-y-12 ml-4 pl-6">

                {/* Milestone 1: Ideation & Planning (e.g., Sprint 1) */}
                <div className="relative">
                    <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1 -left-10 border-4 border-gray-900"></div>
                    <h4 className="text-xl font-bold text-indigo-300">Phase 1: Discovery & Foundation (e.g., Sep - Oct)</h4>
                    <p className="text-gray-400 mt-1">Defined **Product Backlog**, created **UI/UX Diagrams** (Figma), set up **Entra ID** and initial **GitHub repository**. Established core tech stack and database schema.</p>

                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <Card title="Team Planning" className="p-3 bg-gray-700/50">
                            <PlaceholderImage
                                height="200px"
                                text="Team Meeting Photo"
                                imageUrl={WORK_PHOTO_1_URL}
                                onClick={() => openImageModal(WORK_PHOTO_1_URL)}
                                className="w-full rounded-lg"
                            />
                        </Card>
                    </div>
                </div>

                {/* Milestone 2: Core Development & CI (e.g., Nov - Dec) */}
                <div className="relative">
                    <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1 -left-10 border-4 border-gray-900"></div>
                    <h4 className="text-xl font-bold text-indigo-300">Phase 2: Core API and Frontend Prototype (Sprints 2-4)</h4>
                    <p className="text-gray-400 mt-1">Built **ASP.NET Core API** endpoints for business registration and user search. Deployed the initial **React/Angular frontend** and implemented user authentication (JWT).</p>
                </div>

                {/* Milestone 3: Feature Implementation & Testing (e.g., Jan - Feb) */}
                <div className="relative">
                    <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1 -left-10 border-4 border-gray-900"></div>
                    <h4 className="text-xl font-bold text-indigo-300">Phase 3: Integration & Testing</h4>
                    <p className="text-gray-400 mt-1">Integrated **Azure Functions** for image processing. Finalized the **CI/CD pipeline** (Azure Pipelines). Executed **xUnit** (Unit) and **Playwright** (E2E) testing cycles to ensure stability.</p>

                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <Card title="Testing Session" className="p-3 bg-gray-700/50">
                            <PlaceholderImage
                                height="200px"
                                text="Debugging / Code Review"
                                imageUrl={WORK_PHOTO_2_URL}
                                onClick={() => openImageModal(WORK_PHOTO_2_URL)}
                                className="w-full rounded-lg"
                            />
                        </Card>
                    </div>
                </div>

                {/* Milestone 4: Finalization & Deployment (e.g., March) */}
                <div className="relative">
                    <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1 -left-10 border-4 border-gray-900"></div>
                    <h4 className="text-xl font-bold text-indigo-300">Phase 4: Final Deployment & Documentation</h4>
                    <p className="text-gray-400 mt-1">Finalized monetization logic and safety features. Deployed the application to **Azure App Service** and created this **Project Portfolio** submission.</p>
                </div>

            </div>
        </Card>
    </div>
);

export default WorkflowSection;

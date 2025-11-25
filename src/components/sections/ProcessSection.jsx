import React from 'react';
import Card from '../Card';
import { Terminal, Rocket } from 'lucide-react';

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
        <Card title="CI/CD Pipeline (Azure Pipelines)">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-indigo-600 bg-indigo-900/50 rounded-lg transition-all hover:bg-indigo-900">
                    <p className="font-bold text-indigo-300 flex items-center"><Terminal className="w-5 h-5 mr-2" /> CI (Continuous Integration)</p>
                    <p className="text-sm text-gray-300 mt-1">Code is version controlled on <strong>GitHub</strong>. <strong>xUnit/NUnit</strong> tests are automatically run via <strong>Azure Pipelines</strong> on every push.</p>
                </div>
                <div className="p-4 border border-green-600 bg-green-900/50 rounded-lg transition-all hover:bg-green-900">
                    <p className="font-bold text-green-300 flex items-center"><Rocket className="w-5 h-5 mr-2" /> CD (Continuous Deployment)</p>
                    <p className="text-sm text-gray-300 mt-1">On successful test pass, <strong>Azure Pipelines</strong> automatically deploys the build (potentially Dockerized via <strong>Azure Container Registry</strong>) to Azure App Service, maintaining a perpetually live environment.</p>
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

export default ProcessSection;

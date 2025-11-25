import React from 'react';
import Card from '../Card';
import PlaceholderImage from '../PlaceholderImage';

const AZURE_DIAGRAM_URL = "https://github.com/thimira20011/nearuportfolio-images/blob/main/Untitled%20Diagram.drawio%20(2).png?raw=true";

const CloudSection = ({ openImageModal }) => (
    <div className="space-y-6">
        <Card title="Professional Azure Cloud Architecture">
            {/* Azure Diagram - CLICKABLE */}
            <div className="mt-4 mb-2 h-64 border-2 border-dashed border-indigo-500/50 rounded-xl">
                <PlaceholderImage
                    height="100%"
                    width="100%"
                    text="High-Level Azure Architecture Diagram"
                    imageUrl={AZURE_DIAGRAM_URL}
                    onClick={() => openImageModal(AZURE_DIAGRAM_URL)} // Click handler IS applied
                />
            </div>
            <p className="text-center text-gray-400 text-sm mb-4">Click to view full diagram.</p>

            <p className="text-gray-300 mb-4">
                Our infrastructure is designed for scalability and reliability, utilizing <strong>Azure</strong> as the industry-standard platform.
            </p>
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500">
                    <p className="font-bold text-indigo-300">Application Layer</p>
                    <ul className="text-sm text-gray-400 list-disc list-inside ml-2 mt-1">
                        <li><b>Compute:</b> Azure App Service (or VM + Docker)</li>
                        <li><b>Traffic:</b> Azure Application Gateway</li>
                        <li><b>Delivery:</b> Azure CDN (for static caching)</li>
                    </ul>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="font-bold text-yellow-300">Data & Storage</p>
                    <ul className="text-sm text-gray-400 list-disc list-inside ml-2 mt-1">
                        <li><b>Relational DB:</b> Azure SQL Database</li>
                        <li><b>File Assets:</b> Azure Blob Storage (Images, menus, docs)</li>
                        <li><b>Security:</b> App Service Certificates and Entra ID (Role Mgmt)</li>
                    </ul>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-red-500 col-span-full">
                    <p className="font-bold text-red-300">Event-Driven Serverless Layer (Azure Functions)</p>
                    <ul className="text-sm text-gray-400 list-disc list-inside ml-2 mt-1">
                        <li><b>Triggers:</b> Image processing (resize/compress before Blob storage).</li>
                        <li><b>Notifications:</b> Email/SMS for order confirmations via <b>Azure Communication Services</b>.</li>
                        <li><b>Maintenance:</b> Scheduled tasks (cleanup expired subscriptions).</li>
                    </ul>
                </div>
            </div>
        </Card>
    </div>
);

export default CloudSection;

import React from 'react';
import Card from '../Card';

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

export default FeaturesSection;

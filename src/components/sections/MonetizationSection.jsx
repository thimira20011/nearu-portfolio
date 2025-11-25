import React from 'react';
import Card from '../Card';

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

export default MonetizationSection;

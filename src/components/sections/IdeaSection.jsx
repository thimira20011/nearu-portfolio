import React from 'react';
import Card from '../Card';
import PlaceholderImage from '../PlaceholderImage';

const PRODUCT_SCREENSHOT_URL = "https://github.com/thimira20011/nearuportfolio-images/blob/main/Product%20image.png?raw=true";

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

export default IdeaSection;

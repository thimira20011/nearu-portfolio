import React from 'react';
import Card from '../Card';

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
                <span className="px-4 py-1 bg-indigo-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-indigo-400">ASP.NET Razor pages (Framework)</span>
                <span className="px-4 py-1 bg-cyan-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-cyan-400">TailwindCSS (Responsive UI)</span>
                <span className="px-4 py-1 bg-pink-600 text-white rounded-full font-medium transition-all hover:ring-2 ring-pink-400">Figma (UI/UX Diagrams)</span>
            </div>
        </Card>
    </div>
);

export default TechSection;

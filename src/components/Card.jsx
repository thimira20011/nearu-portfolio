import React from 'react';

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

export default Card;

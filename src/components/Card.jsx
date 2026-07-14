import React from 'react';

const Card = ({ title, icon: Icon, className, children }) => (
    <div className={`p-6 bg-[#0b0e17] rounded-2xl shadow-2xl border border-brand-coral/15 transition-all duration-300 transform hover:scale-[1.01] ${className}`}>
        {title && (
            <h3 className="text-2xl font-bold text-brand-coral-light mb-4 flex items-center border-b border-white/5 pb-2">
                {Icon && <Icon className="w-6 h-6 mr-3 text-brand-coral" />}
                {title}
            </h3>
        )}
        {children}
    </div>
);

export default Card;

import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-4 ${className}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {title}
            </h2>
            {subtitle && (
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;


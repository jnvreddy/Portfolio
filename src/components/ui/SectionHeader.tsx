import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-4 ${className}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {title}
            </h2>
            {subtitle && (
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;


import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    const baseStyles = 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg';
    const hoverStyles = hover ? 'hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-400/20' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};

export default Card;


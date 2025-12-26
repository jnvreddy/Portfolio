import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    const baseStyles = 'bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg';
    const hoverStyles = hover ? 'hover:border-white/20 transition-all duration-300 hover:shadow-white/10 hover:bg-white/10' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};

export default Card;


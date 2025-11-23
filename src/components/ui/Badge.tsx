import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'status';
    status?: 'merged' | 'open' | 'closed';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', status, className = '' }) => {
    const baseStyles = 'px-3 py-1 rounded-full text-xs font-medium border';
    
    const variants = {
        primary: 'bg-cyan-400/20 text-cyan-400 border-cyan-400/30',
        secondary: 'bg-gray-700/50 text-gray-300 border-gray-600',
        status: ''
    };

    const statusStyles = {
        merged: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        open: 'bg-green-500/20 text-green-400 border-green-500/30',
        closed: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    };

    const styles = variant === 'status' && status
        ? `${baseStyles} ${statusStyles[status]}`
        : `${baseStyles} ${variants[variant]}`;

    return (
        <span className={`${styles} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;


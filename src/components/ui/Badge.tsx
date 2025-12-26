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
        primary: 'bg-white/10 backdrop-blur-sm text-white border-white/20',
        secondary: 'bg-white/5 backdrop-blur-sm text-gray-300 border-white/10',
        status: ''
    };

    const statusStyles = {
        merged: 'bg-white/10 backdrop-blur-sm text-gray-300 border-white/20',
        open: 'bg-white/10 backdrop-blur-sm text-gray-200 border-white/20',
        closed: 'bg-white/5 backdrop-blur-sm text-gray-400 border-white/10'
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


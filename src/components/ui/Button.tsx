import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
    
    const variants = {
        primary: 'bg-white text-black shadow-lg shadow-white/20 hover:bg-gray-100',
        secondary: 'bg-white/5 backdrop-blur-md text-white border border-white/20 hover:border-white/40 hover:text-white hover:bg-white/10',
        outline: 'bg-white/5 backdrop-blur-md border border-white/20 text-white hover:border-white/40 hover:text-white hover:bg-white/10'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;


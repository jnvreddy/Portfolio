import React from 'react';

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'text-gray-300 hover:text-white bg-white/5 backdrop-blur-sm'
            }`}
        >
            {label}
        </button>
    );
};

export default TabButton;


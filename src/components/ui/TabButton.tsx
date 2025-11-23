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
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-400/25'
                    : 'text-gray-300 hover:text-cyan-400'
            }`}
        >
            {label}
        </button>
    );
};

export default TabButton;


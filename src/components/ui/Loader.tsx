import React from 'react';
import { SiAndroid } from 'react-icons/si';

const Loader: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="relative">
                <SiAndroid 
                    className="text-6xl md:text-7xl text-white animate-pulse"
                    style={{
                        animation: 'androidPulse 2s ease-in-out infinite',
                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                    }}
                />
                <div 
                    className="absolute inset-0 border-4 border-white rounded-full animate-spin"
                    style={{
                        animation: 'androidRotate 3s linear infinite',
                        borderRadius: '50%',
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        width: '120%',
                        height: '120%',
                        top: '-10%',
                        left: '-10%',
                    }}
                />
            </div>
            <style>{`
                @keyframes androidPulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.8;
                    }
                }
                @keyframes androidRotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Loader;


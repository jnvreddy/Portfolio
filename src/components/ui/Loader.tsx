import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="shape-morph"></div>
            <style>{`
                .shape-morph {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #ffffff, #a0a0a0);
                    animation: morphShape 3s ease-in-out infinite;
                    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                }

                @keyframes morphShape {
                    0%, 100% {
                        border-radius: 0%;
                        transform: rotate(0deg);
                    }
                    33% {
                        border-radius: 50% 50% 50% 0%;
                        transform: rotate(180deg);
                    }
                    66% {
                        border-radius: 50%;
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Loader;


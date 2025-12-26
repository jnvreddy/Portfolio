import React from 'react';

const Hero: React.FC = () => {
    const name = "JNV REDDY";
    const letters = name.split('');

    return (
        <section id="home" className="h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
            {/* Content with Professional Animations */}
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h1 className="text-8xl md:text-[14rem] font-bold flex items-center justify-center gap-2 md:gap-4">
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block"
                            style={{
                                color: '#ffffff',
                                background: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 30%, #808080 60%, #000000 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)',
                                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                                animation: `slideFadeIn 0.8s ease-out ${index * 0.1}s both`,
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </h1>
            </div>
            <style>{`
                @keyframes slideFadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(50px) scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;

import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { SectionAnimationState } from '../types/sectionSnap';
import { getAnimationClass } from '../utils/animations';

interface HomeProps {
  animationState?: SectionAnimationState;
  direction?: 'up' | 'down';
}

const Home = forwardRef<HTMLElement, HomeProps>(({ animationState = 'active', direction }, ref) => {
    const name = "JNV REDDY";
    const letters = name.split('');
    const description = "Android-first Mobile Engineer building native apps with Kotlin and Jetpack Compose, with experience in cross-platform and backend development.";
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Calculate when name animation finishes: last letter delay (8 * 0.1) + animation duration (0.8) = 1.6s
    const nameAnimationDuration = 1.6;

    useEffect(() => {
        // Start typing animation after name animation finishes
        const typingTimeout = setTimeout(() => {
            setIsTyping(true);
        }, nameAnimationDuration * 1000);

        return () => clearTimeout(typingTimeout);
    }, []);

    useEffect(() => {
        if (!isTyping) return;

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < description.length) {
                setDisplayedText(description.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Typing speed: 50ms per character

        return () => clearInterval(typingInterval);
    }, [isTyping, description]);

    const sectionRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => sectionRef.current as HTMLElement);

    return (
        <section 
            ref={sectionRef}
            id="home" 
            className="h-screen flex items-center bg-transparent relative overflow-hidden"
        >
            {/* Two-column layout: Left for text, Right for future animation */}
            <div className="w-full h-full flex px-8 lg:px-16 relative z-10">
                {/* Left side - Name and Description */}
                <div className={`flex-1 flex flex-col justify-center ${getAnimationClass(animationState, direction)}`}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center gap-1 sm:gap-2 md:gap-2">
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
                    
                    {/* Typing Animation Description */}
                    <div className="mt-6 sm:mt-8">
                        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                            {displayedText}
                        </p>
                    </div>
                </div>
                
                {/* Right side - Future animation space */}
                <div className="hidden lg:flex flex-1 items-center justify-center">
                    {/* Animation placeholder - PC with mobile emulators will go here */}
                </div>
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
});

Home.displayName = 'Home';

export default Home;

import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { SectionAnimationState } from '../types/sectionSnap';

interface HeroProps {
  animationState?: SectionAnimationState;
  direction?: 'up' | 'down';
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ animationState = 'active', direction }, ref) => {
    const name = "JNV REDDY";
    const letters = name.split('');
    const description = "Android-focused Software Engineer building native apps with Kotlin and Java, using XML and Jetpack Compose, with working experience in Spring Boot and React-based web applications.";
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

    const getAnimationClass = () => {
        switch (animationState) {
            case 'entering':
                return direction === 'down' ? 'animate-slide-in-up' : 'animate-slide-in-down';
            case 'exiting':
                return direction === 'down' ? 'animate-slide-out-up' : 'animate-slide-out-down';
            case 'active':
                return '';
            case 'hidden':
                return 'opacity-0';
            default:
                return '';
        }
    };

    return (
        <section 
            ref={sectionRef}
            id="home" 
            className="h-screen flex items-center justify-center bg-transparent relative overflow-hidden"
        >
            {/* Content with Professional Animations */}
            <div className={`max-w-4xl mx-auto px-6 text-center relative z-10 ${getAnimationClass()}`}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[12rem] font-bold flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
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
                <div className="mt-8 sm:mt-12 md:mt-16">
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
                        {displayedText}
                    </p>
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

Hero.displayName = 'Hero';

export default Hero;

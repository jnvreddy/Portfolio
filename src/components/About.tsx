import { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { primarySkills, secondarySkills, profileInfo } from '../constants/data';
import { useContactModal } from '../contexts/ContactModalContext';
import type { SectionAnimationState } from '../types/sectionSnap';

interface AboutProps {
  animationState?: SectionAnimationState;
  direction?: 'up' | 'down';
}

const About = forwardRef<HTMLElement, AboutProps>(({ animationState = 'active', direction }, ref) => {
    const { openModal } = useContactModal();
    const primaryContainerRef = useRef<HTMLDivElement>(null);
    const primaryContentRef = useRef<HTMLDivElement>(null);
    const secondaryContainerRef = useRef<HTMLDivElement>(null);
    const secondaryContentRef = useRef<HTMLDivElement>(null);
    const [primaryNeedsMarquee, setPrimaryNeedsMarquee] = useState(false);
    const [secondaryNeedsMarquee, setSecondaryNeedsMarquee] = useState(false);
    
    // Paragraph carousel state
    const paragraphs = [
        "I'm a Software Engineer focused on native Android development, building and maintaining production applications with an emphasis on correctness, performance, and long-term maintainability. I work close to the Android platform, using Kotlin and Java across both XML-based UI systems and modern Jetpack Compose.",
        "In my current role, I contribute to a large production Android codebase, handling regular maintenance, bug fixes, and feature development. Alongside this, I refactor and migrate legacy components to Kotlin within active release cycles, shipping new features while progressively introducing Jetpack Compose–based UI and state-driven patterns to improve stability and long-term maintainability.",
        "Beyond development, I've mentored interns, supported onboarding for new team members, and evaluated candidates through technical interviews, strengthening my approach to code reviews, technical communication, and trade-off driven decision-making.",
        "While I have experience with backend and full-stack development (Spring Boot, React, TypeScript, Node.js), my core strength and long-term focus remain Android-native development. I'm currently deepening my expertise in Jetpack Compose and exploring Kotlin Multiplatform (KMP) to share business logic across platforms while maintaining platform-native UI for Android and iOS, without compromising user experience or performance."
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerHeight, setContainerHeight] = useState<number | 'auto'>('auto');
    const carouselRef = useRef<HTMLDivElement>(null);
    const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Update container height based on current paragraph
    useEffect(() => {
        if (paragraphRefs.current[currentIndex]) {
            const currentParagraph = paragraphRefs.current[currentIndex];
            if (currentParagraph) {
                setContainerHeight(currentParagraph.offsetHeight);
            }
        }
    }, [currentIndex]);

    // Auto-slide every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [paragraphs.length]);

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            // Swipe left - next paragraph
            setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
        } else if (distance < -minSwipeDistance) {
            // Swipe right - previous paragraph
            setCurrentIndex((prev) => (prev - 1 + paragraphs.length) % paragraphs.length);
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    useEffect(() => {
        const checkOverflow = () => {
            // Use requestAnimationFrame to ensure DOM is fully rendered
            requestAnimationFrame(() => {
                // Check primary skills - calculate width of first set only (without duplicates)
                if (primaryContainerRef.current && primaryContentRef.current) {
                    const containerWidth = primaryContainerRef.current.offsetWidth;
                    // Get all child elements
                    const children = Array.from(primaryContentRef.current.children) as HTMLElement[];
                    // Calculate width of first set only (first N items where N = primarySkills.length)
                    const firstSetItems = children.slice(0, primarySkills.length);
                    if (firstSetItems.length > 0) {
                        // Get computed gap from CSS (approximate or calculate from first two items)
                        let gap = 0;
                        if (firstSetItems.length > 1) {
                            const firstRect = firstSetItems[0].getBoundingClientRect();
                            const secondRect = firstSetItems[1].getBoundingClientRect();
                            gap = secondRect.left - firstRect.right;
                        }
                        const firstSetWidth = firstSetItems.reduce((sum, child) => {
                            return sum + child.offsetWidth;
                        }, 0);
                        const totalGapWidth = gap * (firstSetItems.length - 1);
                        const totalContentWidth = firstSetWidth + totalGapWidth;
                        setPrimaryNeedsMarquee(totalContentWidth > containerWidth);
                    }
                }

                // Check secondary skills
                if (secondaryContainerRef.current && secondaryContentRef.current) {
                    const containerWidth = secondaryContainerRef.current.offsetWidth;
                    const children = Array.from(secondaryContentRef.current.children) as HTMLElement[];
                    const firstSetItems = children.slice(0, secondarySkills.length);
                    if (firstSetItems.length > 0) {
                        let gap = 0;
                        if (firstSetItems.length > 1) {
                            const firstRect = firstSetItems[0].getBoundingClientRect();
                            const secondRect = firstSetItems[1].getBoundingClientRect();
                            gap = secondRect.left - firstRect.right;
                        }
                        const firstSetWidth = firstSetItems.reduce((sum, child) => {
                            return sum + child.offsetWidth;
                        }, 0);
                        const totalGapWidth = gap * (firstSetItems.length - 1);
                        const totalContentWidth = firstSetWidth + totalGapWidth;
                        setSecondaryNeedsMarquee(totalContentWidth > containerWidth);
                    }
                }
            });
        };

        // Initial check with a small delay to ensure rendering is complete
        const timeoutId = setTimeout(checkOverflow, 100);

        // Use debounced resize handler for better performance
        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkOverflow, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            id="about" 
            className="h-screen bg-transparent relative overflow-hidden flex flex-col"
            style={{ height: '100vh' }}
        >
            <div 
                className={`w-full h-full p-6 sm:p-8 md:p-12 relative z-10 overflow-y-auto hide-scrollbar flex flex-col md:flex-row gap-6 md:gap-8 md:justify-center md:items-start ${getAnimationClass()}`}
                style={{ maxHeight: '100vh', height: '100vh', boxSizing: 'border-box' }}
            >
                {/* Left Sidebar - 25% with Border */}
                <div className="w-full md:w-1/4 h-full md:h-full flex flex-col items-center md:items-center justify-start gap-6 md:gap-8 rounded-2xl border border-gray-600/50 shadow-lg shadow-blue-500/10 bg-gray-900/30 backdrop-blur-sm p-6 sm:p-8 md:p-10 overflow-y-auto hide-scrollbar">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <img 
                            src={profileInfo.profileImage} 
                            alt={profileInfo.name}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-blue-400/50 shadow-lg shadow-blue-500/20 object-cover"
                        />
                    </div>

                    {/* Name */}
                    <div className="text-center px-2 mb-0">
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-white whitespace-nowrap">
                            {profileInfo.name}
                        </h2>
                    </div>

                    {/* Designation */}
                    <div className="text-center -mt-2">
                        <p className="text-sm md:text-base text-gray-400 font-medium">
                            {profileInfo.designation}
                        </p>
                    </div>

                    {/* Social Icons and Contact Button Container */}
                    <div className="flex flex-col items-center gap-4 md:gap-5">
                        {/* Social Icons Row */}
                        <div className="flex gap-4 md:gap-5 justify-center">
                            {profileInfo.socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                                    aria-label={link.label}
                                >
                                    {link.icon === 'twitter' && (
                                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    )}
                                    {link.icon === 'linkedin' && (
                                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    )}
                                    {link.icon === 'github' && (
                                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <button
                            onClick={openModal}
                            className="px-6 py-2 md:px-7 md:py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-sm md:text-base whitespace-nowrap"
                            aria-label="Contact"
                        >
                            Contact
                        </button>
                    </div>
                </div>

                {/* Main Content Section - 50% with Border, Rounded, and Elevation */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-start rounded-2xl border border-gray-600/50 shadow-lg shadow-blue-500/10 bg-gray-900/30 backdrop-blur-sm p-6 sm:p-8 md:p-10 overflow-y-auto hide-scrollbar">
                    {/* Paragraph Carousel */}
                    <div className="mb-8 md:mb-10">
                        <div 
                            className="relative overflow-hidden"
                            style={{ height: containerHeight === 'auto' ? 'auto' : `${containerHeight}px`, transition: 'height 0.3s ease-in-out' }}
                        >
                            <div
                                ref={carouselRef}
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {paragraphs.map((paragraph, index) => (
                                    <div
                                        key={index}
                                        ref={(el) => { paragraphRefs.current[index] = el; }}
                                        className="w-full flex-shrink-0 px-2"
                                    >
                                        <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                                            {paragraph}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
                            {paragraphs.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex
                                            ? 'w-3 h-3 bg-white'
                                            : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                                    }`}
                                    aria-label={`Go to paragraph ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills Section */}
                    <div className="w-full">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-3 sm:mb-4 md:mb-6">
                            Technical Skills
                        </h3>

                        {/* Primary Skills Section */}
                        <div className="mb-6 md:mb-8">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center mb-2 sm:mb-3 md:mb-4">
                                Primary Skills
                            </h4>
                            <div
                                ref={primaryContainerRef}
                                className={`relative overflow-hidden w-full py-2 sm:py-3 md:py-4 ${primaryNeedsMarquee ? '' : 'flex flex-wrap items-center justify-center'}`}
                            >
                                <div
                                    ref={primaryContentRef}
                                    className={primaryNeedsMarquee
                                        ? "flex items-center"
                                        : "flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
                                    }
                                    style={primaryNeedsMarquee ? {
                                        animation: 'marquee 35s linear infinite',
                                        display: 'flex',
                                        width: 'max-content',
                                        gap: '4rem',
                                        willChange: 'transform'
                                    } : {}}
                                >
                                    {primarySkills.map((skill, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-3 hover:scale-110 transition-transform duration-300 ${primaryNeedsMarquee ? 'flex-shrink-0' : ''}`}
                                            >
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 transition-all duration-300 group-hover:scale-110"
                                                />
                                                <span className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold whitespace-nowrap">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                    {primaryNeedsMarquee && primarySkills.map((skill, index) => {
                                        return (
                                            <div
                                                key={`duplicate-${index}`}
                                                className="flex-shrink-0 flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-3 hover:scale-110 transition-transform duration-300"
                                            >
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 transition-all duration-300 group-hover:scale-110"
                                                />
                                                <span className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold whitespace-nowrap">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Secondary Skills Section */}
                        <div>
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400 text-center mb-2 sm:mb-3 flex items-center justify-center gap-2">
                                Secondary Skills
                            </h4>
                            <div
                                ref={secondaryContainerRef}
                                className={`relative overflow-hidden w-full pt-2 sm:pt-3 md:pt-4 pb-2 sm:pb-4 ${secondaryNeedsMarquee ? '' : 'flex flex-wrap items-center justify-center'}`}
                            >
                                <div
                                    ref={secondaryContentRef}
                                    className={secondaryNeedsMarquee
                                        ? "flex items-center"
                                        : "flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8"
                                    }
                                    style={secondaryNeedsMarquee ? {
                                        animation: 'marquee 30s linear infinite',
                                        display: 'flex',
                                        width: 'max-content',
                                        gap: '3.5rem',
                                        willChange: 'transform'
                                    } : {}}
                                >
                                    {secondarySkills.map((skill, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`flex flex-col items-center justify-center gap-1 sm:gap-2 hover:scale-110 transition-transform duration-300 ${secondaryNeedsMarquee ? 'flex-shrink-0' : ''}`}
                                            >
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 opacity-80"
                                                />
                                                <span className="text-gray-400 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium whitespace-nowrap">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                    {secondaryNeedsMarquee && secondarySkills.map((skill, index) => {
                                        return (
                                            <div
                                                key={`duplicate-${index}`}
                                                className="flex-shrink-0 flex flex-col items-center justify-center gap-1 sm:gap-2 hover:scale-110 transition-transform duration-300"
                                            >
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 opacity-80"
                                                />
                                                <span className="text-gray-400 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium whitespace-nowrap">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;

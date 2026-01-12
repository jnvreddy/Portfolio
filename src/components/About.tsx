import { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { primarySkills, secondarySkills } from '../constants/data';
import type { SectionAnimationState } from '../types/sectionSnap';

interface AboutProps {
  animationState?: SectionAnimationState;
  direction?: 'up' | 'down';
}

const About = forwardRef<HTMLElement, AboutProps>(({ animationState = 'active', direction }, ref) => {
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
                className={`w-full px-4 sm:px-6 pt-6 sm:pt-8 md:pt-12 pb-4 sm:pb-6 relative z-10 flex-1 overflow-y-auto ${getAnimationClass()}`}
                style={{ maxHeight: '100vh' }}
            >
                <div className="w-full mb-3 sm:mb-4">
                    <SectionHeader
                        title="About Me"
                        subtitle="Get to know more about my background and expertise"
                    />
                </div>

                {/* About Content */}
                <div className="max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8">
                    <Card className="p-3 sm:p-4 md:p-6 lg:p-8">
                        {/* Paragraph Carousel */}
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
                        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
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
                    </Card>
                </div>

                {/* Skills Section - Full Width */}
                <div className="w-full mb-4 sm:mb-6 relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-3 sm:mb-4 md:mb-6">
                        Technical Skills
                    </h3>

                    {/* Primary Skills Section */}
                    <div className="mb-3 sm:mb-4">
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
        </section>
    );
});

About.displayName = 'About';

export default About;

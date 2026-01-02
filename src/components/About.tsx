import React, { useRef, useEffect, useState } from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { primarySkills, secondarySkills } from '../constants/data';

const About: React.FC = () => {
    const primaryContainerRef = useRef<HTMLDivElement>(null);
    const primaryContentRef = useRef<HTMLDivElement>(null);
    const secondaryContainerRef = useRef<HTMLDivElement>(null);
    const secondaryContentRef = useRef<HTMLDivElement>(null);
    const [primaryNeedsMarquee, setPrimaryNeedsMarquee] = useState(false);
    const [secondaryNeedsMarquee, setSecondaryNeedsMarquee] = useState(false);

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
    return (
        <section id="about" className="h-[200vh] bg-transparent relative overflow-hidden py-12">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="About Me"
                    subtitle="Get to know more about my background and expertise"
                />

                {/* About Content */}
                <div className="max-w-3xl mx-auto mb-16">
                    <Card className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="text-3xl">👋</span>
                            Who I Am
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I am a Junior Software Engineer specializing in Android native application development, with strong expertise in Kotlin, Java, and Spring Boot–based backend systems. I also have hands-on experience building full-stack web applications using React, Next.js, and Tailwind CSS, allowing me to work comfortably across mobile and web platforms.
                        </p>
                    </Card>
                </div>
            </div>

            {/* Skills Section - Full Width */}
            <div className="w-full mb-16 relative z-10">
                <h3 className="text-3xl font-bold text-white text-center mb-12">
                    Technical Skills
                </h3>

                {/* Primary Skills Section */}
                <div className="mb-12">
                    <h4 className="text-xl font-semibold text-white text-center mb-6">
                        Primary Skills
                    </h4>
                    <div
                        ref={primaryContainerRef}
                        className={`relative overflow-hidden w-full py-6 ${primaryNeedsMarquee ? '' : 'flex flex-wrap items-center justify-center'}`}
                    >
                        <div
                            ref={primaryContentRef}
                            className={primaryNeedsMarquee
                                ? "flex items-center"
                                : "flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
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
                                        className={`flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300 ${primaryNeedsMarquee ? 'flex-shrink-0' : ''}`}
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300 group-hover:scale-110"
                                        />
                                        <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {primaryNeedsMarquee && primarySkills.map((skill, index) => {
                                return (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300 group-hover:scale-110"
                                        />
                                        <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
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
                    <h4 className="text-xl font-semibold text-gray-400 text-center mb-6 flex items-center justify-center gap-2">
                        Secondary Skills
                    </h4>
                    <div
                        ref={secondaryContainerRef}
                        className={`relative overflow-hidden w-full py-6 ${secondaryNeedsMarquee ? '' : 'flex flex-wrap items-center justify-center'}`}
                    >
                        <div
                            ref={secondaryContentRef}
                            className={secondaryNeedsMarquee
                                ? "flex items-center"
                                : "flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
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
                                        className={`flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300 ${secondaryNeedsMarquee ? 'flex-shrink-0' : ''}`}
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80"
                                        />
                                        <span className="text-gray-400 text-[10px] sm:text-xs font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {secondaryNeedsMarquee && secondarySkills.map((skill, index) => {
                                return (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80"
                                        />
                                        <span className="text-gray-400 text-[10px] sm:text-xs font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


import React, { useState, useEffect, useRef } from 'react';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    type: string;
}

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [progressHeight, setProgressHeight] = useState<number>(0);
    const sectionRef = useRef<HTMLElement>(null);
    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

    const experiences: ExperienceItem[] = [
        {
            title: "Frontend Developer",
            company: "Tech Company",
            period: "2022 - Present",
            description: "Building responsive web applications using React, TypeScript, and modern CSS frameworks. Creating user-friendly interfaces and optimizing performance for better user experience.",
            type: "Full-time"
        },
        {
            title: "Full Stack Developer",
            company: "Startup Inc",
            period: "2020 - 2022",
            description: "Developed end-to-end solutions with Node.js, React, and various databases. Collaborated with cross-functional teams to deliver scalable applications.",
            type: "Full-time"
        },
        {
            title: "Junior Developer",
            company: "Digital Agency",
            period: "2019 - 2020",
            description: "Worked on various client projects, learning modern web development practices and contributing to team projects.",
            type: "Full-time"
        },
        {
            title: "Web Development Intern",
            company: "Local Tech Firm",
            period: "2018 - 2019",
            description: "Gained hands-on experience with HTML, CSS, JavaScript, and basic backend development. Assisted senior developers with project tasks.",
            type: "Internship"
        }
    ];

    /**
     * Scrolls to a specific experience item when its dot is clicked
     * @param index - The index of the experience to scroll to
     */
    const scrollToExperience = (index: number): void => {
        const dotElement = dotRefs.current[index];
        if (!dotElement) return;

        const dotRect = dotElement.getBoundingClientRect();

        const scrollOffset = dotRect.top + window.scrollY - (window.innerHeight / 2);

        window.scrollTo({
            top: scrollOffset,
            behavior: 'smooth'
        });
    };

    /**
     * Handles clicking on a timeline dot
     * @param index - The index of the clicked experience
     */
    const handleDotClick = (index: number): void => {
        setActiveIndex(index);
        scrollToExperience(index);
    };

    useEffect(() => {
        const handleScroll = (): void => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionRect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = sectionRect.top;
            const sectionHeight = sectionRect.height;
            const sectionBottom = sectionTop + sectionHeight;

            // Simplified scroll progress calculation
            // Progress is 0 when section is above viewport, 1 when below, and interpolated in between
            let scrollProgress = 0;

            if (sectionTop > 0) {
                // Section hasn't entered viewport yet
                scrollProgress = 0;
            } else if (sectionBottom < windowHeight) {
                // Section has completely passed viewport
                scrollProgress = 1;
            } else {
                // Section is in viewport - calculate progress based on how much has scrolled
                const scrolledDistance = Math.abs(sectionTop);
                const totalScrollableDistance = sectionHeight - windowHeight;
                scrollProgress = Math.min(1, Math.max(0, scrolledDistance / totalScrollableDistance));
            }

            setProgressHeight(scrollProgress * 100);

            // Improved active index calculation
            // Each experience gets an equal portion of the scroll progress
            const totalExperiences = experiences.length;
            let currentActiveIndex = -1;

            // Calculate which experience should be active based on scroll progress
            // First item activates when section enters viewport (progress > 0)
            // Each subsequent item activates at its threshold
            for (let i = 0; i < totalExperiences; i++) {
                // Use a more reliable threshold calculation
                // First item activates at 0%, others at their proportional thresholds
                const threshold = i === 0 ? 0 : i / totalExperiences;

                if (scrollProgress >= threshold) {
                    currentActiveIndex = i;
                }
            }

            setActiveIndex(currentActiveIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call to set correct state on mount
        handleScroll();

        // Cleanup: remove event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [experiences.length]);

    return (
        <section ref={sectionRef} id="experience" className="min-h-screen bg-transparent relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                    Experience
                </h2>

                {/* Timeline */}
                <div className="relative flex justify-center">
                    {/* Progress Line - Centered with scroll animation */}
                    <div className="absolute top-0 bottom-0 w-1 bg-gray-600">
                        <div
                            className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-400/50"
                            style={{ height: `${progressHeight}%` }}
                        ></div>
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-12 w-full max-w-5xl">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex items-center justify-center">
                                    {/* Timeline Dot */}
                                    <div
                                        ref={(el) => { dotRefs.current[index] = el; }}
                                        className={`absolute w-6 h-6 rounded-full border-4 border-black shadow-lg z-10 cursor-pointer transition-all duration-300 ${activeIndex === index
                                            ? 'bg-cyan-400 scale-125 shadow-cyan-400/50'
                                            : 'bg-gray-500 hover:bg-cyan-300 hover:scale-110'
                                            }`}
                                        onClick={() => handleDotClick(index)}
                                        aria-label={`Scroll to ${exp.title} at ${exp.company}`}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleDotClick(index);
                                            }
                                        }}
                                    ></div>

                                    {/* Content Card - Alternating sides */}
                                    <div className={`experience-card w-5/12 bg-gray-800/50 backdrop-blur-sm border p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 ${activeIndex === index
                                        ? 'border-cyan-400 shadow-cyan-400/20'
                                        : 'border-gray-700'
                                        } ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                                                {exp.type}
                                            </span>
                                            <span className="text-gray-400 text-sm">{exp.period}</span>
                                        </div>

                                        <h3 className="text-2xl font-semibold text-white mb-2">
                                            {exp.title}
                                        </h3>

                                        <p className="text-cyan-400 text-lg font-medium mb-4">
                                            {exp.company}
                                        </p>

                                        <p className="text-gray-200 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

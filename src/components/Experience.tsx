import React, { useState, useEffect, useRef } from 'react';

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [progressHeight, setProgressHeight] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

    const experiences = [
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

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionRect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on scroll position within the section
            const sectionTop = sectionRect.top;
            const sectionHeight = sectionRect.height;

            // Calculate how much of the section is visible and scrolled through
            const sectionBottom = sectionTop + sectionHeight;
            const viewportTop = 0;
            const viewportBottom = windowHeight;

            // Calculate the visible portion of the section
            const visibleTop = Math.max(sectionTop, viewportTop);
            const visibleBottom = Math.min(sectionBottom, viewportBottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // Calculate progress based on how much has been scrolled through
            let scrollProgress = 0;
            if (sectionTop <= viewportTop && sectionBottom >= viewportBottom) {
                // Section is fully in viewport
                scrollProgress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
            } else if (sectionTop > viewportTop) {
                // Section is entering from bottom
                scrollProgress = 0;
            } else if (sectionBottom < viewportBottom) {
                // Section is exiting from top
                scrollProgress = 1;
            } else {
                // Section is partially visible
                const scrolledThrough = Math.abs(sectionTop);
                const totalScrollDistance = sectionHeight - windowHeight;
                scrollProgress = Math.min(1, scrolledThrough / totalScrollDistance);
            }

            // Clamp progress between 0 and 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            // Set smooth progress height - directly connected to scroll
            setProgressHeight(scrollProgress * 100);

            // Calculate which dot should be active based on progress
            let currentActiveIndex = -1;
            const totalDots = experiences.length;

            // Each dot becomes active when progress reaches its threshold
            for (let i = 0; i < totalDots; i++) {
                const dotThreshold = (i + 1) / totalDots;
                if (scrollProgress >= dotThreshold - 0.05) { // Smaller buffer for more precise activation
                    currentActiveIndex = i;
                }
            }

            setActiveIndex(currentActiveIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, [experiences.length]);

    return (
        <section ref={sectionRef} id="experience" className="min-h-screen bg-black relative overflow-hidden">
            {/* Simple Box Dot Pattern */}
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)
          `,
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0'
                }}
            />

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
                                        onClick={() => setActiveIndex(index)}
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

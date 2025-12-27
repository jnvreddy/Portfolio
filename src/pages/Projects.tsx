import React, { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/layouts/PageLayout';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projects } from '../constants/data';

const Projects: React.FC = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY + windowHeight / 2; // Center of viewport

            // Find which project is closest to the center of the viewport
            let closestIndex = 0;
            let closestDistance = Infinity;

            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const elementCenter = rect.top + window.scrollY + rect.height / 2;
                    const distance = Math.abs(scrollPosition - elementCenter);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            setActiveProjectIndex(closestIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <PageLayout showFooter={false}>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center bg-transparent relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                        My Projects
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up-delay">
                        A showcase of my work in Android development, full-stack applications, and AI integration.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="bg-transparent relative overflow-hidden py-20">
                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col">
                    {projects.map((project, index) => {
                        const isActive = activeProjectIndex === index;
                        const height = isActive ? '90vh' : '350px';
                        const opacity = isActive ? 1 : 0.5;

                        return (
                            <div
                                key={project.id}
                                ref={(el) => {
                                    projectRefs.current[index] = el;
                                }}
                                className="w-full mb-20 transition-all duration-700 ease-out"
                                style={{
                                    height: height,
                                    opacity: opacity,
                                }}
                            >
                                <Card className="p-0 overflow-hidden h-full">
                                    <div className="flex flex-row h-full">
                                        {/* Image - 40% */}
                                        <div className="w-[40%] h-full">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Information - 60% */}
                                        <div className="w-[60%] p-6 md:p-8 flex flex-col justify-center">
                                            <Badge className="mb-3 w-fit">
                                                {project.category}
                                            </Badge>
                                            <h4 className={`font-semibold text-white mb-3 transition-all duration-700 ${
                                                isActive ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                                            }`}>
                                                {project.title}
                                            </h4>
                                            <p className={`text-gray-300 mb-4 leading-relaxed transition-all duration-700 ${
                                                isActive ? 'text-base md:text-lg' : 'text-sm md:text-base'
                                            }`}>
                                                {project.longDescription || project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-3">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button variant="primary" className="text-sm">
                                                            Live Demo
                                                        </Button>
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button variant="outline" className="text-sm">
                                                            GitHub
                                                        </Button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </section>
        </PageLayout>
    );
};

export default Projects;

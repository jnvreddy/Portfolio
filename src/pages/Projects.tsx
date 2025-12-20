import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projects } from '../constants/data';

const Projects: React.FC = () => {
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
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Project 1 */}
                    <div className="mb-12">
                        <Card className="p-0 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* Image - 40% */}
                                <div className="w-full md:w-[40%] h-64 md:h-auto">
                                    <img
                                        src={projects[0].image}
                                        alt={projects[0].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Information - 60% */}
                                <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                                    <Badge className="mb-3 w-fit">
                                        {projects[0].category}
                                    </Badge>
                                    <h4 className="text-2xl font-semibold text-white mb-3">
                                        {projects[0].title}
                                    </h4>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {projects[0].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects[0].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {projects[0].liveUrl && (
                                            <a
                                                href={projects[0].liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="primary" className="text-sm">
                                                    Live Demo
                                                </Button>
                                            </a>
                                        )}
                                        {projects[0].githubUrl && (
                                            <a
                                                href={projects[0].githubUrl}
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

                    {/* Project 2 */}
                    <div>
                        <Card className="p-0 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* Image - 40% */}
                                <div className="w-full md:w-[40%] h-64 md:h-auto">
                                    <img
                                        src={projects[1].image}
                                        alt={projects[1].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Information - 60% */}
                                <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                                    <Badge className="mb-3 w-fit">
                                        {projects[1].category}
                                    </Badge>
                                    <h4 className="text-2xl font-semibold text-white mb-3">
                                        {projects[1].title}
                                    </h4>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {projects[1].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects[1].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {projects[1].liveUrl && (
                                            <a
                                                href={projects[1].liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="primary" className="text-sm">
                                                    Live Demo
                                                </Button>
                                            </a>
                                        )}
                                        {projects[1].githubUrl && (
                                            <a
                                                href={projects[1].githubUrl}
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
                </div>
            </section>
        </PageLayout>
    );
};

export default Projects;


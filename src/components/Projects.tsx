import React, { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
}

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
            longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment processing, and an admin dashboard. Implemented secure payment gateway integration and real-time inventory management.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
            category: "Full Stack",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates and team features.",
            longDescription: "Developed a real-time collaborative task management application with drag-and-drop functionality, team collaboration features, notifications, and progress tracking. Built with modern web technologies for optimal performance.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
            technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
            category: "Frontend",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Beautiful weather application with location-based forecasts and interactive maps.",
            longDescription: "Created an intuitive weather dashboard that provides detailed forecasts, interactive maps, and location-based weather data. Features include 7-day forecasts, hourly updates, and weather alerts.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
            technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
            category: "Frontend",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example"
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Analytics dashboard for social media metrics with data visualization and insights.",
            longDescription: "Built a comprehensive social media analytics platform that aggregates data from multiple platforms, provides detailed insights, and generates visual reports. Features include trend analysis and engagement metrics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            technologies: ["React", "Python", "PostgreSQL", "D3.js", "Express"],
            category: "Full Stack",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example"
        },
        {
            id: 5,
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website with smooth animations and dark theme.",
            longDescription: "Designed and developed a personal portfolio website featuring smooth scroll animations, interactive sections, and a modern dark theme. Built with React and TypeScript for optimal performance and maintainability.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            category: "Frontend",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example"
        },
        {
            id: 6,
            title: "REST API Backend",
            description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
            longDescription: "Developed a robust REST API backend with JWT authentication, rate limiting, comprehensive error handling, and API documentation. Implemented database optimization and caching strategies for improved performance.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
            technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
            category: "Backend",
            liveUrl: undefined,
            githubUrl: "https://github.com/example"
        }
    ];

    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="min-h-screen bg-black relative overflow-hidden py-20">
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

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A collection of projects showcasing my skills and experience in web development
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-400/25'
                                    : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-400/20 hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <span className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                                    {project.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2 rounded-lg text-center hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 text-sm"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gray-700/50 border border-gray-600 text-gray-300 font-semibold px-4 py-2 rounded-lg text-center hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 text-sm"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-400 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;


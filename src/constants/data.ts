import type { Project, ExperienceItem, SkillCategory, Organization, Contribution } from '../types';

export const projects: Project[] = [
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

export const experiences: ExperienceItem[] = [
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

export const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        icon: '💻',
        skills: [
            { name: 'JavaScript', category: 'language' },
            { name: 'TypeScript', category: 'language' },
            { name: 'Python', category: 'language' },
            { name: 'Java', category: 'language' },
            { name: 'HTML/CSS', category: 'language' },
            { name: 'SQL', category: 'language' }
        ]
    },
    {
        title: 'Frameworks & Libraries',
        icon: '⚛️',
        skills: [
            { name: 'React', category: 'framework' },
            { name: 'Node.js', category: 'framework' },
            { name: 'Express', category: 'framework' },
            { name: 'Next.js', category: 'framework' },
            { name: 'Vue.js', category: 'framework' },
            { name: 'Tailwind CSS', category: 'framework' }
        ]
    },
    {
        title: 'Tools & Technologies',
        icon: '🛠️',
        skills: [
            { name: 'Git', category: 'tool' },
            { name: 'Docker', category: 'tool' },
            { name: 'AWS', category: 'tool' },
            { name: 'MongoDB', category: 'tool' },
            { name: 'PostgreSQL', category: 'tool' },
            { name: 'Firebase', category: 'tool' }
        ]
    },
    {
        title: 'Other Skills',
        icon: '🌟',
        skills: [
            { name: 'Agile/Scrum', category: 'other' },
            { name: 'UI/UX Design', category: 'other' },
            { name: 'RESTful APIs', category: 'other' },
            { name: 'GraphQL', category: 'other' },
            { name: 'Testing', category: 'other' },
            { name: 'CI/CD', category: 'other' }
        ]
    }
];

export const organizations: Organization[] = [
    {
        id: 1,
        name: 'React',
        avatar: 'https://github.com/facebook.png',
        description: 'A JavaScript library for building user interfaces',
        url: 'https://github.com/facebook/react',
        contributions: 12
    },
    {
        id: 2,
        name: 'Vite',
        avatar: 'https://github.com/vitejs.png',
        description: 'Next generation frontend tooling',
        url: 'https://github.com/vitejs/vite',
        contributions: 8
    },
    {
        id: 3,
        name: 'TypeScript',
        avatar: 'https://github.com/microsoft.png',
        description: 'JavaScript with syntax for types',
        url: 'https://github.com/microsoft/TypeScript',
        contributions: 5
    },
    {
        id: 4,
        name: 'Tailwind CSS',
        avatar: 'https://github.com/tailwindlabs.png',
        description: 'A utility-first CSS framework',
        url: 'https://github.com/tailwindlabs/tailwindcss',
        contributions: 15
    }
];

export const contributions: Contribution[] = [
    {
        id: 1,
        type: 'PR',
        title: 'Fix: Resolve memory leak in component unmount',
        repository: 'react',
        organization: 'React',
        url: 'https://github.com/facebook/react/pull/12345',
        status: 'merged',
        date: '2024-01-15',
        description: 'Fixed a memory leak issue that occurred when components were unmounted without proper cleanup.'
    },
    {
        id: 2,
        type: 'PR',
        title: 'Feature: Add dark mode support to configuration',
        repository: 'vite',
        organization: 'Vite',
        url: 'https://github.com/vitejs/vite/pull/6789',
        status: 'merged',
        date: '2024-02-20',
        description: 'Added comprehensive dark mode support with automatic theme detection and manual override options.'
    },
    {
        id: 3,
        type: 'Issue',
        title: 'Bug: Type inference fails with nested generics',
        repository: 'TypeScript',
        organization: 'TypeScript',
        url: 'https://github.com/microsoft/TypeScript/issues/10123',
        status: 'closed',
        date: '2024-03-10',
        description: 'Reported and helped resolve type inference issues with deeply nested generic types.'
    },
    {
        id: 4,
        type: 'PR',
        title: 'Enhancement: Improve build performance',
        repository: 'tailwindcss',
        organization: 'Tailwind CSS',
        url: 'https://github.com/tailwindlabs/tailwindcss/pull/4567',
        status: 'open',
        date: '2024-04-05',
        description: 'Optimized build process to reduce compilation time by 30% for large projects.'
    },
    {
        id: 5,
        type: 'Issue',
        title: 'Documentation: Update migration guide',
        repository: 'react',
        organization: 'React',
        url: 'https://github.com/facebook/react/issues/8901',
        status: 'closed',
        date: '2024-01-28',
        description: 'Improved migration guide documentation with clearer examples and common pitfalls.'
    },
    {
        id: 6,
        type: 'PR',
        title: 'Fix: Resolve CSS purging issue in production',
        repository: 'tailwindcss',
        organization: 'Tailwind CSS',
        url: 'https://github.com/tailwindlabs/tailwindcss/pull/3210',
        status: 'merged',
        date: '2024-03-22',
        description: 'Fixed an issue where critical CSS classes were being purged incorrectly in production builds.'
    }
];


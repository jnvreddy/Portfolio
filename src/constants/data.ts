import type { Project, ExperienceItem, SkillCategory, Organization, Contribution } from '../types';
import {
    SiReact,
    SiAngular,
    SiVuedotjs,
    SiNodedotjs,
    SiExpress,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiAndroid,
    SiKotlin,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiTailwindcss,
    SiBootstrap,
    SiFastapi,
    SiJira,
    SiGit,
    SiDocker,
    SiAmazonwebservices,
    SiFirebase,
    SiGraphql,
    SiJetpackcompose,
    SiKtor
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';

export const projects: Project[] = [
    {
        id: 1,
        title: "Chat & Shop - AI E-Commerce",
        description: "AI-powered e-commerce platform with intelligent chat features. Led AI feature development and built core functionality.",
        longDescription: "Developed an innovative e-commerce platform with integrated AI chat capabilities. Led the AI feature development team, built intelligent shopping assistants, and implemented natural language processing for product recommendations. The platform combines modern web technologies with cutting-edge AI to enhance user shopping experience.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "AI/ML", "Python", "TypeScript", "MongoDB"],
        category: "Full Stack",
        liveUrl: undefined,
        githubUrl: undefined
    },
    {
        id: 2,
        title: "Android Native App",
        description: "Native Android application built with Kotlin, featuring modern UI and robust architecture.",
        longDescription: "Developed a native Android application using Kotlin and Jetpack Compose. Implemented clean architecture patterns, Room database for local storage, and integrated RESTful APIs. The app features modern Material Design UI and follows Android best practices.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        technologies: ["Kotlin", "Android", "Jetpack Compose", "Room Database", "RESTful API"],
        category: "Mobile",
        liveUrl: undefined,
        githubUrl: undefined
    },
    {
        id: 3,
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
        id: 4,
        title: "Backend API Development",
        description: "RESTful API development with authentication, database integration, and comprehensive documentation.",
        longDescription: "Developed backend APIs with partial full-stack integration. Implemented authentication systems, database connections, and API endpoints. Worked on optimizing API performance and ensuring secure data handling.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful API"],
        category: "Backend",
        liveUrl: undefined,
        githubUrl: undefined
    },
    {
        id: 5,
        title: "Full-Stack Web Application",
        description: "End-to-end web application with modern frontend and robust backend integration.",
        longDescription: "Built a complete full-stack application from frontend to backend. Implemented responsive UI, integrated APIs, managed database operations, and ensured seamless communication between client and server components.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express"],
        category: "Full Stack",
        liveUrl: undefined,
        githubUrl: undefined
    }
];

export const experiences: ExperienceItem[] = [
    {
        title: "Junior Software Engineer",
        company: "Technology Company",
        period: "2023 - 2024",
        description: "Worked on multi-stack projects including Android native development with Kotlin, full-stack applications, and backend API development. Led AI feature development for Chat & Shop project, mentored 10+ interns, and conducted technical interviews for hiring. Managed tasks using Jira and coordinated with cross-functional teams.",
        type: "Full-time"
    },
    {
        title: "Software Developer",
        company: "Technology Company",
        period: "2023",
        description: "Part-time role working on full-stack projects with exposure to both frontend and backend technologies. Gained experience in project ownership and team collaboration.",
        type: "Part-time"
    },
    {
        title: "Software Development Intern",
        company: "Technology Company",
        period: "2023",
        description: "Internship focused on learning modern software development practices, contributing to team projects, and gaining hands-on experience with various technologies.",
        type: "Internship"
    },
    {
        title: "Computer Vision Intern",
        company: "Technology Company",
        period: "2022 - 2023",
        description: "6-month internship specializing in computer vision technologies. Worked on image processing, machine learning models, and AI applications.",
        type: "Internship"
    },
    {
        title: "Freelance Developer",
        company: "Freelance",
        period: "2022",
        description: "Successfully delivered a freelance project, managing the entire development lifecycle from requirements gathering to deployment. Demonstrated project ownership and client communication skills.",
        type: "Freelance"
    }
];

// Brand colors for icons
const brandColors: Record<string, string> = {
    'Android': '#3DDC84',
    'Android Kotlin': '#7F52FF',
    'Jetpack Compose': '#4285F4',
    'Ktor': '#0095D5',
    'Node.js': '#339933',
    'React': '#61DAFB',
    'Angular': '#DD0031',
    'MongoDB': '#47A248',
    'Prisma': '#2D3748',
    'PostgreSQL': '#336791',
    'Room Database': '#4285F4',
    'Vue.js': '#4FC08D',
    'Express': '#000000',
    'Tailwind CSS': '#06B6D4',
    'Bootstrap': '#7952B3',
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'Python': '#3776AB',
    'Fast API': '#009688',
    'Java': '#ED8B00',
    'Jira': '#0052CC',
    'Git': '#F05032',
    'Docker': '#2496ED',
    'AWS': '#FF9900',
    'Firebase': '#FFCA28',
    'Agile/Scrum': '#0052CC',
    'RESTful API': '#000000',
    'GraphQL API': '#E10098'
};

// Technical skills with icons
export const technicalSkills = [
    { name: 'Android', icon: SiAndroid, color: brandColors['Android'] },
    { name: 'Android Kotlin', icon: SiKotlin, color: brandColors['Android Kotlin'] },
    { name: 'Jetpack Compose', icon: SiJetpackcompose, color: brandColors['Jetpack Compose'] },
    { name: 'Ktor', icon: SiKtor, color: brandColors['Ktor'] },
    { name: 'Node.js', icon: SiNodedotjs, color: brandColors['Node.js'] },
    { name: 'React', icon: SiReact, color: brandColors['React'] },
    { name: 'Angular', icon: SiAngular, color: brandColors['Angular'] },
    { name: 'MongoDB', icon: SiMongodb, color: brandColors['MongoDB'] },
    { name: 'Prisma', icon: SiPrisma, color: brandColors['Prisma'] },
    { name: 'PostgreSQL', icon: SiPostgresql, color: brandColors['PostgreSQL'] },
    { name: 'Room Database', icon: FaDatabase, color: brandColors['Room Database'] },
    { name: 'Vue.js', icon: SiVuedotjs, color: brandColors['Vue.js'] },
    { name: 'Express', icon: SiExpress, color: brandColors['Express'] },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: brandColors['Tailwind CSS'] },
    { name: 'Bootstrap', icon: SiBootstrap, color: brandColors['Bootstrap'] },
    { name: 'JavaScript', icon: SiJavascript, color: brandColors['JavaScript'] },
    { name: 'TypeScript', icon: SiTypescript, color: brandColors['TypeScript'] },
    { name: 'Python', icon: SiPython, color: brandColors['Python'] },
    { name: 'Fast API', icon: SiFastapi, color: brandColors['Fast API'] },
    { name: 'Java', icon: DiJava, color: brandColors['Java'] },
    { name: 'Jira', icon: SiJira, color: brandColors['Jira'] },
    { name: 'Git', icon: SiGit, color: brandColors['Git'] },
    { name: 'Docker', icon: SiDocker, color: brandColors['Docker'] },
    { name: 'AWS', icon: SiAmazonwebservices, color: brandColors['AWS'] },
    { name: 'Firebase', icon: SiFirebase, color: brandColors['Firebase'] },
    { name: 'Agile/Scrum', icon: SiJira, color: brandColors['Agile/Scrum'] },
    { name: 'RESTful API', icon: SiExpress, color: brandColors['RESTful API'] },
    { name: 'GraphQL API', icon: SiGraphql, color: brandColors['GraphQL API'] }
];

export const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        icon: '💻',
        skills: [
            { name: 'Kotlin', category: 'language' },
            { name: 'JavaScript', category: 'language' },
            { name: 'TypeScript', category: 'language' },
            { name: 'Python', category: 'language' },
            { name: 'Java', category: 'language' },
            { name: 'HTML/CSS', category: 'language' },
            { name: 'SQL', category: 'language' }
        ]
    },
    {
        title: 'Mobile & Frameworks',
        icon: '📱',
        skills: [
            { name: 'Android', category: 'framework' },
            { name: 'Jetpack Compose', category: 'framework' },
            { name: 'Ktor', category: 'framework' },
            { name: 'React', category: 'framework' },
            { name: 'Node.js', category: 'framework' },
            { name: 'Express', category: 'framework' },
            { name: 'Tailwind CSS', category: 'framework' }
        ]
    },
    {
        title: 'Tools & Technologies',
        icon: '🛠️',
        skills: [
            { name: 'Git', category: 'tool' },
            { name: 'Jira', category: 'tool' },
            { name: 'MongoDB', category: 'tool' },
            { name: 'PostgreSQL', category: 'tool' },
            { name: 'Room Database', category: 'tool' },
            { name: 'Firebase', category: 'tool' },
            { name: 'Docker', category: 'tool' }
        ]
    },
    {
        title: 'Professional Skills',
        icon: '🌟',
        skills: [
            { name: 'AI/ML Integration', category: 'other' },
            { name: 'Mentoring', category: 'other' },
            { name: 'Technical Interviewing', category: 'other' },
            { name: 'Project Ownership', category: 'other' },
            { name: 'Team Coordination', category: 'other' },
            { name: 'Agile/Scrum', category: 'other' },
            { name: 'RESTful APIs', category: 'other' }
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


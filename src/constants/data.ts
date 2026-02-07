import type { Project, ExperienceItem, SkillCategory, Organization, Contribution } from '../types';

// Profile Information
export const profileInfo = {
    name: 'J Nagavardhan Reddy',
    designation: 'Software Engineer',
    profileImage: 'https://media.licdn.com/dms/image/v2/D5603AQEiFb3iMTFV_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720691856534?e=1772064000&v=beta&t=LnAPPU8bexx8tl4F9XvkFJ-y_RYLz67mXPsiNnTi9S4',
    socialLinks: [
        {
            name: 'Twitter',
            url: 'https://x.com/jnv_reddy',
            icon: 'twitter',
            label: 'X (Twitter)'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jnvreddy',
            icon: 'linkedin',
            label: 'LinkedIn'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/jnvreddy',
            icon: 'github',
            label: 'GitHub'
        }
    ]
};

export const projects: Project[] = [
    {
        id: 1,
        title: "College Management System (CMS)",
        description: "Comprehensive college management system for managing students, faculty, courses, and administrative tasks. Led development and built core functionality.",
        longDescription: "Developed a comprehensive College Management System (CMS) to streamline academic and administrative operations. The system includes student enrollment, faculty management, course scheduling, attendance tracking, grade management, and administrative dashboards. Built with modern web technologies to provide an efficient and user-friendly platform for educational institutions.",
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
];

export const experiences: ExperienceItem[] = [
    {
        title: "Software Engineer",
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
    'Kotlin': '#7F52FF',
    'Jetpack Compose': '#4285F4',
    'Node': '#339933',
    'React': '#61DAFB',
    'Postgres': '#336791',
    'SQLite': '#0b7fcc',
    'Java': '#ED8B00',
    'Docker': '#2496ED',
    'Gradle': '#02303A',
    'Tailwind CSS': '#38bdf8',
    'Git': '#DE4C36',
    'Firebase': '#FFCA28',
    'Spring Boot': '#6DB33F',
    'Redis': '#DC382D',
    'Figma': '#F24E1E',
    'Angular': '#DD0031',
    'Python': '#3776AB',
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E'
};

// Primary technical skills (core expertise)
export const primarySkills = [
    { name: 'Android', icon: '/T-icons/android-original.svg', color: brandColors['Android'] },
    { name: 'Jetpack Compose', icon: '/T-icons/jetpackcompose-original.svg', color: brandColors['Jetpack Compose'] },
    { name: 'Kotlin', icon: '/T-icons/kotlin-original.svg', color: brandColors['Kotlin'] },
    { name: 'Java', icon: '/T-icons/java-original.svg', color: brandColors['Java'] },
    { name: 'SQLite', icon: '/T-icons/sqlite-original.svg', color: brandColors['SQLite'] },
    { name: 'Gradle', icon: '/T-icons/gradle-original.svg', color: brandColors['Gradle'] },
    { name: 'Git', icon: '/T-icons/git-icon.svg', color: brandColors['Git'] },
    { name: 'Firebase', icon: '/T-icons/firebase-2.svg', color: brandColors['Firebase'] }
];

// Secondary technical skills
export const secondarySkills = [
    { name: 'React', icon: '/T-icons/react-original.svg', color: brandColors['React'] },
    { name: 'Node', icon: '/T-icons/nodejs-icon.svg', color: brandColors['Node'] },
    { name: 'Postgres', icon: '/T-icons/postgresql-original.svg', color: brandColors['Postgres'] },
    { name: 'Docker', icon: '/T-icons/docker-original.svg', color: brandColors['Docker'] },
    { name: 'Tailwind CSS', icon: '/T-icons/tailwindcss-original.svg', color: brandColors['Tailwind CSS'] },
    { name: 'Spring Boot', icon: '/T-icons/spring-boot-1.svg', color: brandColors['Spring Boot'] },
    { name: 'Redis', icon: '/T-icons/redis.svg', color: brandColors['Redis'] },
    { name: 'Figma', icon: '/T-icons/figma-icon.svg', color: brandColors['Figma'] },
    { name: 'Angular', icon: '/T-icons/angular_gradient.png', color: brandColors['Angular'] },
    { name: 'Python', icon: '/T-icons/python-5.svg', color: brandColors['Python'] },
    { name: 'TypeScript', icon: '/T-icons/typescript.svg', color: brandColors['TypeScript'] },
    { name: 'JavaScript', icon: '/T-icons/javascript-1.svg', color: brandColors['JavaScript'] }
];

// All technical skills (for backward compatibility)
export const technicalSkills = [...primarySkills, ...secondarySkills];

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


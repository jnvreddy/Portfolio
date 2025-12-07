// Shared types and interfaces

export interface Project {
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

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    type: string;
}

export interface Skill {
    name: string;
    category: 'language' | 'framework' | 'tool' | 'other';
}

export interface TechnicalSkill {
    name: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
    icon: string;
}

export interface Organization {
    id: number;
    name: string;
    avatar: string;
    description: string;
    url: string;
    contributions: number;
}

export interface Contribution {
    id: number;
    type: 'PR' | 'Issue';
    title: string;
    repository: string;
    organization: string;
    url: string;
    status: 'merged' | 'open' | 'closed';
    date: string;
    description: string;
}

export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}


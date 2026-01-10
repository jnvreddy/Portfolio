import { useRef, useImperativeHandle, forwardRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import type { SectionAnimationState } from '../types/sectionSnap';

interface ProjectsProps {
  animationState?: SectionAnimationState;
  direction?: 'up' | 'down';
}

const Projects = forwardRef<HTMLElement, ProjectsProps>(({ animationState = 'active', direction }, ref) => {
    const sectionRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => sectionRef.current as HTMLElement);

    const getAnimationClass = () => {
        switch (animationState) {
            case 'entering':
                return direction === 'down' ? 'animate-slide-in-up' : 'animate-slide-in-down';
            case 'exiting':
                return direction === 'down' ? 'animate-slide-out-up' : 'animate-slide-out-down';
            case 'active':
                return '';
            case 'hidden':
                return 'opacity-0';
            default:
                return '';
        }
    };

    return (
        <section 
            ref={sectionRef}
            id="projects" 
            className="h-screen bg-transparent relative overflow-hidden"
        >
            <div className={`max-w-7xl mx-auto px-6 py-12 relative z-10 h-full overflow-y-auto ${getAnimationClass()}`}>
                <SectionHeader
                    title="My Projects"
                    subtitle="A collection of projects showcasing my skills in Android development, full-stack applications, and AI integration"
                />
                <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">Needs to be implemented</p>
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;


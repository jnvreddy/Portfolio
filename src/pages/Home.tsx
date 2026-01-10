import React, { useRef, useEffect } from 'react';
import FloatingContactButton from '../components/FloatingContactButton';
import HomeSection from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { useSectionSnap } from '../hooks/useSectionSnap';

const Home: React.FC = () => {
    const sectionIds = ['home', 'about', 'projects'];
    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);

    const { registerSection, getSectionAnimationState, getSectionDirection } = useSectionSnap({
        sectionIds,
        animationDuration: 800,
        debounceDelay: 200,
    });

    // Register section refs
    useEffect(() => {
        if (heroRef.current) {
            registerSection('home', heroRef.current);
        }
        if (aboutRef.current) {
            registerSection('about', aboutRef.current);
        }
        if (projectsRef.current) {
            registerSection('projects', projectsRef.current);
        }
    }, [registerSection]);

    return (
        <div className="flex flex-col">
            <FloatingContactButton />
            <HomeSection 
                ref={heroRef}
                animationState={getSectionAnimationState('home')}
                direction={getSectionDirection('home')}
            />
            <About 
                ref={aboutRef}
                animationState={getSectionAnimationState('about')}
                direction={getSectionDirection('about')}
            />
            <Projects 
                ref={projectsRef}
                animationState={getSectionAnimationState('projects')}
                direction={getSectionDirection('projects')}
            />
            <Footer />
        </div>
    );
};

export default Home;


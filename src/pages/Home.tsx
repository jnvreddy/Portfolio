import React, { useRef, useEffect } from 'react';
import HomeSection from '../components/Home';
import About from '../components/About';
import Footer from '../components/Footer';
import { useSectionSnap } from '../hooks/useSectionSnap';

const Home: React.FC = () => {
    const sectionIds = ['home', 'about'];
    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    // const projectsRef = useRef<HTMLElement>(null);

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
        // if (projectsRef.current) {
        //     registerSection('projects', projectsRef.current);
        // }
    }, [registerSection]);

    return (
        <div className="flex flex-col">
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
            {/* <Projects 
                ref={projectsRef}
                animationState={getSectionAnimationState('projects')}
                direction={getSectionDirection('projects')}
            /> */}
            <Footer />
        </div>
    );
};

export default Home;


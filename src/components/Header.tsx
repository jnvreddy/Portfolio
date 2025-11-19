import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isOpenSourcePage = location.pathname === '/opensource';
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle section navigation from other pages
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Track active section on home page
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Handle hash navigation on page load
    if (location.hash) {
      const hash = location.hash.substring(1);
      if (['home', 'about', 'experience', 'projects', 'contact'].includes(hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(hash);
          }
        }, 100);
      }
    } else {
      setActiveSection('home');
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.hash]);

  const getLinkClassName = (path: string, section?: string) => {
    let isActive = false;
    
    if (path === '/') {
      if (section) {
        // For section links, check if this section is active
        isActive = isHomePage && activeSection === section;
      } else {
        // For Home link, check if we're on home page and at top or home section
        isActive = isHomePage && (activeSection === 'home' || activeSection === '');
      }
    } else if (path === '/opensource') {
      isActive = isOpenSourcePage;
    }
    
    return `transition-all duration-300 hover:scale-105 relative group ${
      isActive 
        ? 'text-cyan-400' 
        : 'text-gray-700 hover:text-white'
    }`;
  };

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-gray-200 rounded-full px-8 py-4 shadow-sm">
      <nav className="flex space-x-8">
        <Link 
          to="/" 
          className={getLinkClassName('/')}
        >
          Home
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            (isHomePage && (activeSection === 'home' || activeSection === '')) ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
        <a 
          href="#about" 
          onClick={(e) => handleSectionClick(e, 'about')}
          className={getLinkClassName('/', 'about')}
        >
          About
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </a>
        <a 
          href="#experience" 
          onClick={(e) => handleSectionClick(e, 'experience')}
          className={getLinkClassName('/', 'experience')}
        >
          Experience
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            activeSection === 'experience' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleSectionClick(e, 'projects')}
          className={getLinkClassName('/', 'projects')}
        >
          Projects
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleSectionClick(e, 'contact')}
          className={getLinkClassName('/', 'contact')}
        >
          Contact
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </a>
        <Link 
          to="/opensource" 
          className={getLinkClassName('/opensource')}
        >
          Open Source
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            isOpenSourcePage ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
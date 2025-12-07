import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isOpenSourcePage = location.pathname === '/opensource';
  const [activeSection, setActiveSection] = useState<string>('');

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.hash]);

  const getLinkClassName = (path: string, section?: string) => {
    let isActive = false;

    if (path === '/') {
      if (section) {
        isActive = isHomePage && activeSection === section;
      } else {
        isActive = isHomePage && (activeSection === 'home' || activeSection === '');
      }
    } else if (path === '/opensource') {
      isActive = isOpenSourcePage;
    }

    return `text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 relative group whitespace-nowrap flex-shrink-0 ${isActive
      ? 'text-cyan-400'
      : 'text-gray-700 hover:text-white'
      }`;
  };

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 shadow-sm">
      <nav className="flex space-x-3 sm:space-x-5 md:space-x-8">
        <Link
          to="/"
          className={getLinkClassName('/')}
        >
          Home
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${(isHomePage && (activeSection === 'home' || activeSection === '')) ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </Link>
        <a
          href="#about"
          onClick={(e) => handleSectionClick(e, 'about')}
          className={getLinkClassName('/', 'about')}
        >
          About
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </a>
        <a
          href="#experience"
          onClick={(e) => handleSectionClick(e, 'experience')}
          className={getLinkClassName('/', 'experience')}
        >
          Experience
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === 'experience' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </a>
        <a
          href="#projects"
          onClick={(e) => handleSectionClick(e, 'projects')}
          className={getLinkClassName('/', 'projects')}
        >
          Projects
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSectionClick(e, 'contact')}
          className={getLinkClassName('/', 'contact')}
        >
          Contact
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </a>
        <Link
          to="/opensource"
          className={getLinkClassName('/opensource')}
        >
          Open Source
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpenSourcePage ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
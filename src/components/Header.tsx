import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import resumePdf from '../assets/Nagavardhan(jnvreddy)-Resume.pdf';
import { useContactModal } from '../contexts/ContactModalContext';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isOpenSourcePage = location.pathname === '/opensource';
  const isProjectsPage = location.pathname === '/projects';
  const [activeSection, setActiveSection] = useState<string>('');
  const { openModal } = useContactModal();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    const locationState = location.state as { scrollTo?: string } | null;
    if (locationState?.scrollTo && isHomePage) {
      // Use requestAnimationFrame for more reliable timing
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(locationState.scrollTo!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }, [isHomePage, location.state]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
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
      if (['home', 'about', 'projects'].includes(hash)) {
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
    } else if (path === '/projects') {
      isActive = isProjectsPage;
    }

    return `text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 relative group whitespace-nowrap flex-shrink-0 ${isActive
      ? 'text-white'
      : 'text-gray-400 hover:text-white'
      }`;
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Nagavardhan(jnvreddy)-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 shadow-lg">
      <nav className="flex items-center space-x-3 sm:space-x-5 md:space-x-8">
        <Link
          to="/"
          className={getLinkClassName('/')}
        >
          Home
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${(isHomePage && (activeSection === 'home' || activeSection === '')) ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </Link>
        <a
          href="#about"
          onClick={(e) => handleSectionClick(e, 'about')}
          className={getLinkClassName('/', 'about')}
        >
          About
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </a>
        {isHomePage ? (
          <a
            href="#projects"
            onClick={(e) => handleSectionClick(e, 'projects')}
            className={getLinkClassName('/', 'projects')}
          >
            Projects
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
          </a>
        ) : (
          <Link
            to="/projects"
            className={getLinkClassName('/projects')}
          >
            Projects
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isProjectsPage ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
          </Link>
        )}
        {/* <Link
          to="/opensource"
          className={getLinkClassName('/opensource')}
        >
          Open Source
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpenSourcePage ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </Link> */}
        <button
          onClick={handleDownloadCV}
          className="text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 relative group whitespace-nowrap flex-shrink-0 text-gray-400 hover:text-white"
        >
          CV
          <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
        </button>
        <button
          onClick={openModal}
          className="text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 relative group whitespace-nowrap flex-shrink-0 text-gray-400 hover:text-white"
        >
          Contact
          <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
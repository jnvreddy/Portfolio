import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import resumePdf from '../assets/Nagavardhan(jnvreddy)-Resume.pdf';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isOpenSourcePage = location.pathname === '/opensource';
  const isProjectsPage = location.pathname === '/projects';
  const [activeSection, setActiveSection] = useState<string>('');
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactDropdownOpen(false);
      }
    };

    if (isContactDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isContactDropdownOpen]);

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
        <div className="relative flex items-center" ref={dropdownRef}>
          <button
            onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
            className="text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 relative group whitespace-nowrap flex-shrink-0 text-gray-400 hover:text-white"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
          </button>

          {isContactDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl py-2 min-w-[200px] z-50">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">jnvreddy.dev@gmail.com</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
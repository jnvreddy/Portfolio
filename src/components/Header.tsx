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
              <a
                href="https://www.linkedin.com/in/jnvreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsContactDropdownOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/jnvreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsContactDropdownOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/jnv_reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsContactDropdownOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X (Twitter)</span>
              </a>
              <div className="border-t border-white/10 my-1"></div>
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
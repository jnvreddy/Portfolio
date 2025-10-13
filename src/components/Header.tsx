import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (

      {/* Header Bar */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 h-12 md:h-16 px-4 sm:px-6">
        {/* Logo */}
       

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              variants={itemVariants}
              className={`group flex items-center gap-2 transition-all duration-300 ${scrolled
                ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                : "text-white hover:text-blue-400"
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-transparent group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <item.icon className="h-4 w-4" />
              </motion.div>
              <span className="font-medium">{item.name}</span>

              
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ml-auto ${scrolled
            ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            : "text-white hover:bg-white/10"
            }`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
         
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`md:hidden border-t rounded-b-2xl overflow-hidden ${scrolled
              ? "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              : "border-gray-800 bg-gray-900"
              }`}
          >
            <nav className="flex flex-col space-y-2 px-6 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  variants={mobileItemVariants}
                  className={`group flex items-center gap-3 transition-all duration-300 py-3 px-4 rounded-lg ${scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                >
                  <motion.div
                    className="p-2 rounded-lg bg-transparent group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className="h-4 w-4" />
                  </motion.div>
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

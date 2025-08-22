import { useState } from "react";
import { Menu, X, User, Briefcase, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: User },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  return (
    <header
      className={`sticky top-4 z-50 mx-auto bg-gray-950 backdrop-blur-md border-4 border-gray-900 shadow-sm rounded-full transition-all duration-300
        w-4/5 md:w-fit`}
    >
      {/* Header Bar */}
      <div className="flex items-center gap-6 h-12 md:h-16 px-6">
        {/* Logo */}
        <div className="flex items-center pr-8">
          <span className="md:text-xl font-bold text-white">Jnv Reddy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-white hover:text-blue-600 transition-colors duration-200"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ml-auto"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation (separate block, doesn’t change header height) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white rounded-b-2xl">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

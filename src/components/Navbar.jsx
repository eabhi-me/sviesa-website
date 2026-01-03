import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCircle } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Activities', href: '#activities' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Events', href: '#events', isLive: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-pure-black/95 backdrop-blur-sm border-b border-deep-crimson/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-display font-bold text-soft-white hover:text-brand-red transition-colors duration-300"
            >
              sviesa
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-soft-white hover:text-brand-red transition-colors duration-300 text-sm font-medium relative group"
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                    {item.isLive && (
                      <FiCircle className="text-brand-red animate-pulse" size={8} fill="currentColor" />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-soft-white hover:text-brand-red transition-colors duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-pure-black border-t border-deep-crimson/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-soft-white hover:text-brand-red hover:bg-deep-crimson/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  {item.isLive && (
                    <FiCircle className="text-brand-red animate-pulse" size={8} fill="currentColor" />
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

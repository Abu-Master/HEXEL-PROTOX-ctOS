
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import GlitchText from '../ui/GlitchText.tsx';

interface NavbarProps {
  username?: string;
}

const Navbar = ({ username = "ABU UBAIDAH" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'PROFILE', path: '/about' },
    { label: 'KNOWLEDGE', path: '/experience' },
    { label: 'SKILLS', path: '/skills' },
    { label: 'SERVICES', path: '/services' }, 
    { label: 'CONTACT', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ctos-bg-dark/80 backdrop-blur-md border-b border-ctos-cyan/30">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-ctos-cyan font-orbitron mr-2">
              <GlitchText text="HEXEL PROTOX" intensity="low" />
              <span className="text-xs ml-1 text-gray-400">[v2.0]</span>
            </div>
            <div className="hidden md:flex items-center ml-4">
              <span className="text-xs text-gray-400 mr-2">USER:</span>
              <span className="text-ctos-green text-sm">{username}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-xs tracking-wider transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'text-ctos-cyan border-b border-ctos-cyan/50' 
                    : 'text-gray-400 hover:text-ctos-cyan'
                }`}
              >
                {location.pathname === item.path ? (
                  <GlitchText text={item.label} intensity="low" />
                ) : item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-400 hover:text-ctos-cyan focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-ctos-bg-light/90 backdrop-blur-md border-b border-ctos-cyan/20 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-sm ${
                  location.pathname === item.path 
                    ? 'text-ctos-cyan bg-ctos-cyan/10' 
                    : 'text-gray-400 hover:text-ctos-cyan hover:bg-black/20'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

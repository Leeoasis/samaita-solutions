// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-gray-900 bg-opacity-90 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="G&G Construction Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-yellow-400">Samaita Construction Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 ml-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-white hover:text-yellow-400 transition duration-300 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
              onClick={() => setNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

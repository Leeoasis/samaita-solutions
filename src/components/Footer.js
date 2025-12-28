// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-6 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Logo + Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Samaita Construction Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-yellow-400">Samaita Construction Solutions</span>
          </div>
          <p className="text-sm text-gray-400">
            Reliable construction and maintenance services including welding, carports, tiling, 
            painting, crack repairs, razor wire installation, decking, and ceilings. Quality work, delivered with integrity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>Whatsapp: +27843301816
              <br />Calls : +27844435959</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>info@samaitaconstruction.co.za</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>
               84 Main Rd<br />
                  Parklands<br />
                  Cape Town
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Samaita Construction Solutions. All rights reserved. <br />
        <span className="text-gray-400">Designed by Leslie Gudo</span>
      </div>
    </footer>
  );
};

export default Footer;

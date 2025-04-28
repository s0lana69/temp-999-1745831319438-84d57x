import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <Zap className="h-8 w-8 text-neonTeal-500 mr-2" />
            <span className="text-xl font-bold">TrueViral</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white hover:text-neonTeal-500 transition-colors duration-200">
              Home
            </Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white hover:text-neonTeal-500 transition-colors duration-200">
              Solutions
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-white hover:text-neonTeal-500 transition-colors duration-200">
              FAQ
            </Link>
            <Link to="/prices" className="text-gray-300 hover:text-white hover:text-neonTeal-500 transition-colors duration-200">
              Pricing
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#login" className="text-gray-300 hover:text-white transition-colors duration-200 hidden md:inline-block">
            Log In
          </a>
          <a 
            href="#demo" 
            className="hidden md:inline-block border border-gray-600 text-white px-4 py-2 rounded-md hover:border-neonTeal-500 hover:text-neonTeal-500 transition-all duration-200"
          >
            Get a Demo
          </a>
          <a 
            href="#signup" 
            className="border-glow border-glow-teal bg-transparent border-2 border-white text-white px-4 py-2 rounded-md hover:border-neonTeal-500 hover:text-neonTeal-500 transition-all duration-200"
          >
            Sign Up Free
          </a>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
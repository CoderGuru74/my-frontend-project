import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-[#F5DF4D] font-bold text-2xl mr-2">AI</div>
          <div className="text-white font-bold text-2xl">Helmet</div>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-[#F5DF4D] transition-colors">About</a>
          <a href="#features" className="text-white hover:text-[#F5DF4D] transition-colors">Features</a>
          <a href="#stats" className="text-white hover:text-[#F5DF4D] transition-colors">Statistics</a>
          <a href="#contact" className="text-white hover:text-[#F5DF4D] transition-colors">Contact</a>
          <button className="bg-[#F5DF4D] text-black px-4 py-2 rounded-md font-medium hover:bg-[#F5DF4D]/80 transition-colors">
            Try Demo

          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"/>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-white hover:text-[#F5DF4D] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-white hover:text-[#F5DF4D] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#stats" 
            className="text-white hover:text-[#F5DF4D] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Statistics
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-[#F5DF4D] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button 
            className="bg-[#F5DF4D] text-black px-4 py-2 rounded-md font-medium hover:bg-[#F5DF4D]/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Try Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
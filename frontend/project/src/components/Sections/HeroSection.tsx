import React, { useState, useEffect } from 'react';
import HelmetVisualization from '../Helmet/HelmetVisualization';
import CameraView from '../Camera/CameraView';

const HeroSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cameraActive, setCameraActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Calculate progress as percentage of viewport height (not full document)
      // This makes the helmet animation complete within the first viewport
      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleHelmetScreenClick = () => {
    if (scrollProgress > 0.7) {
      setCameraActive(true);
    }
  };
  
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#050A30] to-[#000814] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxQTFBMUEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMUExQTFBIiBmaWxsLW9wYWNpdHk9Ii44NSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0A1128]/0 to-[#0A1128]/70"></div>
        
        {/* Animated particles */}
        <div className="particle absolute top-1/4 left-1/4 w-1 h-1 bg-[#F5DF4D] rounded-full"></div>
        <div className="particle particle-delay-1 absolute top-3/4 left-1/2 w-2 h-2 bg-[#F5DF4D] rounded-full"></div>
        <div className="particle particle-delay-2 absolute top-1/2 left-3/4 w-1 h-1 bg-[#F5DF4D] rounded-full"></div>
        <div className="particle particle-delay-3 absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#F5DF4D] rounded-full"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 pt-32 relative z-10">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#F5DF4D]">AI</span> Helmet
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing road safety in India with advanced AI technology
          </p>
          <div 
            className="mt-8 flex justify-center space-x-4 transition-opacity duration-500"
            style={{ opacity: 1 - scrollProgress * 2 }}
          >
            <button
             className="bg-[#F5DF4D] text-black px-6 py-3 rounded-md font-medium hover:bg-[#F5DF4D]/80 transition-colors"
             onClick={handleHelmetScreenClick}>
            Try Demo
            </button>
          </div>
        </div>
        
        {/* Helmet Visualization */}
       <div className="flex justify-center flex-col items-center">
         <div
          className=" text-2xl font-semibold text-[#F5DF4D] transition-opacity transition-transform duration-500"
          style={{
            opacity: Math.max(0, (scrollProgress - 0.3) / 0.4), // starts to appear after 30% scroll
            transform: `translateY(${30 - Math.max(0, (scrollProgress - 0.3) / 0.4) * 30}px)`,
          }}
        >
          Camera Demo – Click the helmet to activate!
        </div>
        <img
          src="/helmet.png" // Make sure helmet.png is in your public folder
          alt="AI Helmet"
          className="w-[32rem] h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{
            // Fade in, move up, and zoom in as you scroll (fully visible after 30% scroll)
            opacity: Math.min(scrollProgress / 0.3, 1),
            transform: `
              translateY(${40 - Math.min(scrollProgress / 0.3, 1) * 40}px)
              scale(${0.8 + Math.min(scrollProgress / 0.3, 1) * 0.2})
            `,
            pointerEvents: scrollProgress > 0.7 ? 'auto' : 'none',
          }}
          onClick={handleHelmetScreenClick}
        />
       
      </div>
      </div>
      
      {/* Camera View (when activated) */}
      <CameraView 
        isActive={cameraActive} 
        onClose={() => setCameraActive(false)}
      />
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { useScrollAnimation } from '../../utils/animations';

const AboutSection: React.FC = () => {
  const [containerRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <section id="about" className="py-20 bg-white">
      <div 
        ref={containerRef}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About AI Helmet</h2>
          <div className="w-20 h-1 bg-[#F5DF4D] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Revolutionizing Road Safety</h3>
            <p className="text-gray-700 mb-6">
              The AI Helmet project aims to address the critical issue of road accidents in India, 
              where thousands of lives are lost annually due to preventable incidents. 
              By combining cutting-edge AI technology with practical safety features, 
              we're creating a solution that can dramatically reduce accident rates.
            </p>
            <p className="text-gray-700 mb-6">
              Our smart helmet utilizes real-time computer vision to detect potential hazards, 
              monitor driver attention levels, and identify road conditions that may lead to accidents. 
              Combined with precise location tracking, it offers a comprehensive safety system.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-[#FF304F]">150K+</div>
                <p className="text-gray-600">Annual Road Fatalities</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-[#F5DF4D]">70%</div>
                <p className="text-gray-600">Preventable with AI</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-6 relative z-10">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To drastically reduce road accidents in India through accessible, innovative technology 
                that combines artificial intelligence, real-time monitoring, and emergency response systems.
              </p>
              
              <h3 className="text-xl font-bold mb-4 mt-8">Key Challenges We Address</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="text-[#F5DF4D] w-6 h-6 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">Lack of driver attention and focus</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-[#F5DF4D] w-6 h-6 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">Poor road conditions and unexpected obstacles</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-[#F5DF4D] w-6 h-6 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">Delayed emergency response after accidents</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-[#F5DF4D] w-6 h-6 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">Animal crossings and unexpected intrusions</span>
                </li>
              </ul>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-[#F5DF4D]/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FF304F]/10 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
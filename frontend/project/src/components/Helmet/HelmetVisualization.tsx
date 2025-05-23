import React, { useRef, useEffect, useState } from 'react';
import { useParallax } from '../../utils/animations';

interface HelmetVisualizationProps {
  progress: number; // 0 to 1 value representing scroll progress
  onScreenClick: () => void;
}

const HelmetVisualization: React.FC<HelmetVisualizationProps> = ({ 
  progress, 
  onScreenClick 
}) => {
  const [ref, offset] = useParallax(0.3);
  const screenRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate zoom and opacity based on scroll progress
  const scale = 1 + progress * 5; // Scale from 1x to 6x
  const screenOpacity = Math.min(progress * 2, 1);
  const helmetOpacity = 1 - (progress * 1.5);
  
  useEffect(() => {
    if (progress > 0.8 && screenRef.current) {
      screenRef.current.classList.add('screen-active');
    } else if (screenRef.current) {
      screenRef.current.classList.remove('screen-active');
    }
  }, [progress]);

  return (
    <div 
      ref={ref} 
      className="helmet-container relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${offset * 0.05}px)`,
      }}
    >
      <div 
        className="helmet-wrapper transition-all duration-700"
        style={{
          transform: `scale(${scale})`,
          opacity: helmetOpacity > 0 ? helmetOpacity : 0,
        }}
      >
        {/* Helmet Body */}
        <div className="helmet-body relative w-64 h-56 bg-gradient-to-b from-[#292929] to-[#151515] rounded-t-[120px] shadow-lg">
          {/* Helmet Visor/Screen */}
          <div 
            ref={screenRef}
            className={`helmet-screen absolute top-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-[#1a237e] to-[#3949ab] rounded-t-lg overflow-hidden cursor-pointer transition-all duration-500 ${isHovered ? 'glow' : ''}`}
            style={{ opacity: screenOpacity }}
            onClick={onScreenClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="screen-content flex flex-col items-center justify-center h-full p-2">
              <div className="screen-interface w-full h-full flex flex-col">
                <div className="interface-header flex justify-between items-center mb-1 px-1">
                  <div className="text-xs text-white/80">AI HELMET</div>
                  <div className="text-xs text-white/80">SCANNING</div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="bg-black/20 rounded flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                  <div className="bg-black/20 rounded flex items-center justify-center text-[6px] text-white">ROAD MAP</div>
                  <div className="bg-black/20 rounded flex items-center justify-center text-[6px] text-white">DETECTION</div>
                  <div className="bg-black/20 rounded flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border border-green-500 animate-ping opacity-75"></div>
                  </div>
                </div>
                <div className="interface-footer mt-1 bg-black/30 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Helmet Details */}
          <div className="helmet-stripe absolute top-20 left-0 w-full h-2 bg-[#F5DF4D]"></div>
          <div className="helmet-vent absolute bottom-10 right-8 w-8 h-2 bg-[#111] rounded-full"></div>
          <div className="helmet-vent absolute bottom-10 left-8 w-8 h-2 bg-[#111] rounded-full"></div>
          <div className="helmet-chin absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#1D1D1D] rounded-b-xl"></div>
        </div>
      </div>
      
      {/* Call to action text - only visible at low progress */}
      <div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center transition-all duration-700"
        style={{ opacity: 1 - progress * 3 }}
      >
        <p className="text-white font-bold text-xl mb-2">Scroll to activate</p>
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      {/* Screen zoom instruction - only visible at high progress */}
      <div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center transition-all duration-700"
        style={{ opacity: progress > 0.7 ? (progress - 0.7) * 3 : 0 }}
      >
        <p className="text-white font-bold text-xl mb-2">Click to activate camera</p>
        <div className="animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v8M8 12h8"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HelmetVisualization;
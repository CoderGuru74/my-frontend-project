import React from 'react';
import { useScrollAnimation } from '../../utils/animations';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const [cardRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-1000 delay-${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-[#F5DF4D]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <div className="text-[#F5DF4D]">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.1);
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Cutting-Edge Features</h2>
          <div className="w-20 h-1 bg-[#F5DF4D] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The AI Helmet combines advanced technologies to create a comprehensive 
            safety system for riders across India's diverse roads
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-time Hazard Detection"
            description="Advanced computer vision algorithms identify potential hazards, obstacles, and dangerous road conditions in real-time."
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            }
            delay={100}
          />
          
          <FeatureCard
            title="Driver Attention Monitoring"
            description="Internal sensors track head position and eye movements to detect drowsiness and distraction, alerting riders before accidents occur."
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            }
            delay={200}
          />
          
          <FeatureCard
            title="Precise Location Tracking"
            description="GPS integration provides accurate positioning for emergency services in case of accidents, reducing response times."
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            }
            delay={300}
          />
          
          <FeatureCard
            title="Animal Detection System"
            description="Specialized AI models identify animals on or near roadways, a common cause of accidents in rural India."
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 11L7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13 20 11z"></path>
              </svg>
            }
            delay={400}
          />
          
          <FeatureCard
            title="Automatic Emergency Response"
            description="In case of detected accidents, the system automatically contacts emergency services with location and severity information."
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                <line x1="12" y1="18" x2="12" y2="18"></line>
              </svg>
            }
            delay={500}
          />
          
          <FeatureCard
            title="Road Quality Analysis"
            description="Continuous monitoring of road surfaces to identify potholes, cracks, and other hazards, contributing to a community road quality database."
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            }
            delay={600}
          />
        </div>
        
        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <button className="bg-[#F5DF4D] text-black px-6 py-3 rounded-md font-medium hover:bg-[#F5DF4D]/80 transition-colors">
            Try the Demo Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
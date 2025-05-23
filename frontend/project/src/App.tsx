import React from 'react';
import NavBar from './components/UI/NavBar';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import FeaturesSection from './components/Sections/FeaturesSection';
import StatsSection from './components/Sections/StatsSection';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/UI/Footer';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'AI Helmet - Road Safety Project';
    
    // Find and update the favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🪖</text></svg>');
    }
  }, []);

  return (
    <div className="app min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
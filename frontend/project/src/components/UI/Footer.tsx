import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-[#F5DF4D] font-bold text-2xl mr-2">AI</div>
              <div className="text-white font-bold text-2xl">Helmet</div>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing road safety in India with cutting-edge AI technology 
              to prevent accidents and save lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">About</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">Features</a>
              </li>
              <li>
                <a href="#stats" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">Statistics</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F5DF4D] transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on the AI Helmet project.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-[#F5DF4D] text-black px-4 py-2 rounded-r-md font-medium hover:bg-[#F5DF4D]/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Helmet Project. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            Designed with ❤️ for safer roads in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
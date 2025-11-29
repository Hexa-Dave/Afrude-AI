import React from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-black">OWN</span>
            <span className="text-black relative inline-block">
              <span className="relative z-10">AI</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-black opacity-20 rounded-full"></div>
              </div>
            </span>
            <br />
            <span className="text-black">YOUR</span>
            <span className="text-black relative inline-block">
              <span className="relative z-10">AI</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-black opacity-20 rounded-full"></div>
              </div>
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-black hover:text-gray-600 transition-colors border-b-2 border-black pb-1">We Build AI</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Success Stories</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Our Services</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Recent Projects</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">FAQ's</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Get Started</a>
        </nav>
        
        <button 
          onClick={scrollToCalendar}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-medium flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
        >
          <Zap size={18} />
          <span>Lets Build Your AI</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

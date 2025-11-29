import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Big Competitive<br />Advantage With Ai
            </h2>
            <button 
              onClick={scrollToCalendar}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg mt-4"
            >
              Get Your Ai
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">Our Demos</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center space-x-1">
                    <span>Research Center</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+18889853025" className="hover:text-orange-500 transition-colors">1 888 985 3025</a>
                </li>
                <li>
                  <a href="mailto:Solutions@OwnYourAi.com" className="hover:text-orange-500 transition-colors">Solutions@OwnYourAi.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              Own You Ai – All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms Of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

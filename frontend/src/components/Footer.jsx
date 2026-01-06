import React from 'react';
import { BookOpen, Globe, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Research Message */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Advancing AI Education<br />Through African Contexts
            </h2>
            <p className="text-gray-400 max-w-lg mb-6">
              Afrude AI is a PhD research project exploring how culturally grounded,
              gamified, and collaborative learning enables African high school students
              to understand, build, and apply Artificial Intelligence to real problems
              in their communities.
            </p>

            {/* Game CTA */}
            <a
              href="#play-afrude-game" // replace with actual game URL later
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Gamepad2 size={20} />
              <span>Play Afrude Game</span>
            </a>
          </div>
          
          {/* Right: Links */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-4">Research</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center space-x-2">
                    <BookOpen size={16} />
                    <span>Case Studies & Experiments</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center space-x-2">
                    <Globe size={16} />
                    <span>Dataset Sharing Hub</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:research@afrude.ai"
                    className="hover:text-orange-500 transition-colors"
                  >
                    research@afrude.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  Academic & Research Inquiries
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Afrude AI — A PhD Research Project. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Ethics & Responsible AI
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

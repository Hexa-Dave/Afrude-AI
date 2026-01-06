{/*}

import React from 'react';
import { Zap } from 'lucide-react';
import Afrude_logo from "../assets/Afrude_AI_Logo_003.png";
import UEF_Logo from "../assets/UEF_logo.png";


const Header = () => {
  const scrollToHeader = () => {
    const HeroSection = document.getElementById('hero');
    if (HeroSection) {
      HeroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const scrollToDeepAnalysis = () => {
    const DeepAnalysisSection = document.getElementById('deep-analysis');
    if (DeepAnalysisSection) {
      DeepAnalysisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const scrollToDrivingImpact = () => {
    const MetricsSection = document.getElementById('driving-impact');
    if (MetricsSection) {
      MetricsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const scrollToRoadMap = () => {
    const RoadmapSection = document.getElementById('roadmap');
    if (RoadmapSection) {
      RoadmapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const scrollToTeams = () => {
    const TeamSection = document.getElementById('our-team');
    if (TeamSection) {
      TeamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const scrollToFAQ = () => {
    const FAQSection = document.getElementById('faqs');
    if (FAQSection) {
      FAQSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <img src={Afrude_logo} alt="Afrude AI Logo" className="h-[2em] w-auto" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-black hover:text-gray-600 transition-colors border-b-2 border-black pb-1">Home</a>
          <a href="#driving-impact" className="text-gray-600 hover:text-black transition-colors">Driving Impact</a>
          <a href="#deep-analysis" className="text-gray-600 hover:text-black transition-colors">Deep Analysis</a>
          <a href="#roadmap" className="text-gray-600 hover:text-black transition-colors">Roadmap</a>
          <a href="#our-team" className="text-gray-600 hover:text-black transition-colors">Our Team</a>
          <a href="#faqs" className="text-gray-600 hover:text-black transition-colors">FAQ's</a>

        </nav>

        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <img src={UEF_Logo} alt="UEF Logo" className="h-[2em] w-auto" />
          </div>
        </div>



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

*/}



import React, { useEffect, useState } from 'react';
import Afrude_logo from "../assets/Afrude_AI_Logo_003.png";
import UEF_Logo from "../assets/UEF_logo.png";

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'driving-impact', label: 'Driving Impact' },
  { id: 'deep-analysis', label: 'Deep Analysis' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'our-team', label: 'Our Team' },
  { id: 'faqs', label: "FAQ's" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  /* Detect scroll direction + active section */
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${hidden ? '-translate-y-full blur-sm' : 'translate-y-0 backdrop-blur-md'}
        bg-white/80 border-b border-gray-200
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Afrude Logo */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center">
          <img src={Afrude_logo} alt="Afrude AI Logo" className="h-12 w-auto" />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                relative text-sm font-medium transition-colors
                ${activeSection === id ? 'text-black' : 'text-gray-600 hover:text-black'}
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full after:origin-left
                after:scale-x-0 after:bg-orange-500 after:transition-transform
                ${activeSection === id ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
              `}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* UEF Logo */}
        <a
          href="https://www.uef.fi/en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src={UEF_Logo} alt="UEF Logo" className="h-12 w-auto" />
        </a>

      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Gamepad2 } from 'lucide-react';


const HeroSection = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gray-50">
      <div className="bg-white max-w-7xl mx-auto px-20 text-center py-24">
        <h1 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-6">
          WELCOME TO AFRUDE AI
        </h1>
        
        <h2 className="text-5xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Learning AI through a Culturally-Infused, Gamified and Collaborative Platform
        </h2>
        
        <p className="text-gray-700 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
          This research introduces Afrude AI, a gamified platform that explores how African high school students
          can learn Artificial Intelligence through a culturally grounded, gamified, and collaborative learning platform.
          Building on the insight AfriML project, it brings together cultural context, gamification, federated learning 
          for privacy-preserving collaboration, and a participatory dataset-sharing hub to foster inclusive and equitable
          AI education in underrepresented regions.
        </p>
        
        <button 
          onClick={scrollToCalendar}
          className="inline-flex items-center gap-2 justify-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        ><Gamepad2 size={20} /><span>Play Afrude Game</span>          
        </button>
      </div>
    </section>
  );
};


export default HeroSection;

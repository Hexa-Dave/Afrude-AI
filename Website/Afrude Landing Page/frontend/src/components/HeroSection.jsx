import React from 'react';

const HeroSection = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-6">
          ENTERPRISE AI ANALYSIS
        </p>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Learning AI through a Culturally-Infused, Gamified and Collaborative Platform
        </h1>
        
        <p className="text-gray-700 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
          This research introduces Afrude AI, an innovative platform designed to teach Artificial Intelligence to African high school students. Building on the successful AfriML project, Afrude AI integrates cultural context, gamification, federated learning for privacy-preserving collaboration, and a participatory dataset-sharing hub to foster inclusive and equitable AI education in underrepresented regions.
        </p>
        
        <button 
          onClick={scrollToCalendar}
          className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Schedule Your AI Strategy Session
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

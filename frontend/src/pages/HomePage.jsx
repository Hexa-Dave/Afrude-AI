import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MetricsSection from '../components/MetricsSection';
import DeepAnalysisSection from '../components/DeepAnalysisSection';
import TeamSection from '../components/TeamSection';
import RoadmapSection from '../components/RoadmapSection';
import FAQSection from '../components/FAQSection';
import CalendarSection from '../components/CalendarSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MetricsSection />
      <DeepAnalysisSection />
      <RoadmapSection />
      <TeamSection />
      <FAQSection />
      {/*<CalendarSection />*/}
      <Footer />
    </div>
  );
};

export default HomePage;

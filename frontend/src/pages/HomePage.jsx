import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MetricsSection from '../components/MetricsSection';
import DeepAnalysisSection from '../components/DeepAnalysisSection';
import CalculatorSection from '../components/CalculatorSection';
import RoadmapSection from '../components/RoadmapSection';
import CTASection from '../components/CTASection';
import CalendarSection from '../components/CalendarSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MetricsSection />
      <DeepAnalysisSection />
      <CalculatorSection />
      <RoadmapSection />
      <CTASection />
      <CalendarSection />
      <Footer />
    </div>
  );
};

export default HomePage;

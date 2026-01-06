import React, { useState, useEffect } from 'react';

const MetricsSection = () => {
  const [counts, setCounts] = useState({
    engagement: 0,
    collaboration: 0,
    cultural: 0,
    schools: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      engagement: 21,
      collaboration: 3,
      cultural: 90,
      schools: 12
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        engagement: Math.floor((targets.engagement / steps) * step),
        collaboration: step >= steps ? 1 : 0,
        cultural: Math.floor((targets.cultural / steps) * step),
        schools: Math.floor((targets.schools / steps) * step)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="driving-impact" className="bg-gray-50">
      <div className="bg-black max-w-7xl mx-auto px-20 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Driving Impact: Key AI Education Metrics
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Afrude AI is poised to significantly transform AI literacy in African schools, addressing critical gaps in engagement, access, and collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition-all transform hover:scale-105">
            <div className="text-5xl font-bold text-orange-500 mb-3">
              {counts.engagement}%
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              ENGAGEMENT LIFT
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition-all transform hover:scale-105">
            <div className="text-5xl font-bold text-orange-500 mb-3">
              {counts.collaboration}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              COLLABORATION PILLARS
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition-all transform hover:scale-105">
            <div className="text-5xl font-bold text-orange-500 mb-3">
              {counts.cultural}%
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              CULTURAL RELEVANCE
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition-all transform hover:scale-105">
            <div className="text-5xl font-bold text-orange-500 mb-3">
              {counts.schools}+
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              SCHOOLS IMPACTED (EST.)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

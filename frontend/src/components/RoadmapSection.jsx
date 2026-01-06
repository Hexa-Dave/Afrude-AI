import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const RoadmapSection = () => {
  // Change this number as you progress (1 to 5)
  const [currentStep, setCurrentStep] = useState(1);

  const phases = [
    {
      number: 1,
      title: 'Research & Conceptual Design',
      description: 'Refining the research problem, conducting extensive literature review, and designing the conceptual framework for Afrude AI. Engaging educators, students, and cultural experts in co-design workshops to define requirements and culturally relevant elements.'
    },
    {
      number: 2,
      title: 'Prototype Development & Pilot Testing',
      description: "Developing the first prototypes of Afrude AI's gamified learning interfaces, federated learning component, and dataset-sharing hub. Conducting small-scale pilot tests in selected African high schools to evaluate cultural infusion strategy and technical feasibility in low-bandwidth environments."
    },
    {
      number: 3,
      title: 'Feedback Integration & Refinement',
      description: "Integrating constructive feedback from doctoral consortiums and initial pilot tests. Iteratively refining the platform's design, pedagogical approach, and technical implementation based on empirical findings."
    },
    {
      number: 4,
      title: 'Large-Scale Implementation & Evaluation',
      description: 'Implementing Afrude AI across a wider network of African high schools. Conducting comprehensive evaluation to assess learning outcomes, engagement, collaborative behaviors, and the sustainability of the dataset hub and federated learning model.'
    },
    {
      number: 5,
      title: 'Dissemination & Future Scaling',
      description: 'Synthesizing findings to produce a final, refined version of Afrude AI and empirically grounded design principles. Disseminating research outcomes and planning for broader adoption and impact across Sub-Saharan Africa.'
    }
  ];

  return (
    <section id="roadmap" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Afrude AI Development Roadmap
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our strategic phased approach ensures robust development, rigorous testing, and continuous refinement of the Afrude AI platform.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => {
            // Check if the current phase in the loop is completed
            const isCompleted = phase.number <= currentStep;

            return (
              <div 
                key={phase.number}
                className={`bg-white rounded-xl p-8 border-l-4 transition-all transform hover:scale-[1.02] hover:shadow-lg ${
                  isCompleted ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                      isCompleted ? 'bg-orange-500' : 'bg-gray-300'
                    }`}>
                      {phase.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      isCompleted ? 'text-black' : 'text-gray-400'
                    }`}>
                      Phase {phase.number}: {phase.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      isCompleted ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {phase.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <CheckCircle2 
                      // Logic: Green if completed, Grey if not
                      className={isCompleted ? "text-green-500" : "text-gray-200"} 
                      size={32} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

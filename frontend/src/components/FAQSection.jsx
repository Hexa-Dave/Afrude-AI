{/* import React from 'react';

const CTASection = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">
          Ready to Transform Your Enterprise AI Strategy?
        </h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Leverage the insights from cutting-edge research to develop AI solutions that are not only advanced but also culturally sensitive and ethically robust. Book a consultation with our experts to discuss how these principles can be applied to your organization's AI initiatives.
        </p>
        <button 
          onClick={scrollToCalendar}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Book Your Consultation Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;


*/}


import React from "react";

const faqs = [
  {
    icon: "1",
    question: "What is Afrude AI and who is it for?",
    answer:
      "Afrude AI is a PhD research project designed to explore how African high school students can learn, and teachers teach Artificial Intelligence through culturally grounded, gamified, and collaborative learning. It is intended for students, teachers, schools, researchers, and institutions interested in inclusive AI education.",
  },
  {
    icon: "2",
    question: "How is Afrude AI different from other AI learning platforms?",
    answer:
      "Unlike generic AI platforms, Afrude AI is built around African contexts, languages, and real-life experiences. Students learn AI using local problems, scenarios, datasets, and technologies simulated into a game, enabling them to train models that are relevant, accurate, and meaningful within their immediate environments.",
  },
  {
    icon: "3",
    question: "What role do teachers and schools play in the research?",
    answer:
      "Teachers and schools act as learning facilitators and research partners. They support classroom integration, contextual guidance, and ethical participation, while the research investigates how students engage with AI concepts and apply them to real-world challenges.",
  },
  {
    icon: "4",
    question: "Is student data protected and used ethically?",
    answer:
      "Yes. Afrude AI is designed with privacy and ethics at its core. The platform uses privacy-aware and federated learning approaches, ensuring sensitive data remains local and is not centralized. All research activities follow ethical research guidelines appropriate for work with minors.",
  },
  {
    icon: "5",
    question: "What will students actually learn and build?",
    answer:
      "Students learn foundational AI concepts and apply them by training and testing models on locally relevant problems such as agriculture, mobility, border trade, safety, and community health. The focus is on understanding AI through practice, not abstract theory.",
  },
  {
    icon: "6",
    question: "How can researchers, institutions, or foundations get involved?",
    answer:
      "Researchers, schools, policymakers, and funding organizations can engage by supporting deployments, contributing expertise, collaborating on datasets, or funding research activities aimed at advancing equitable AI education in underrepresented regions.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="bg-gray-50 relative justify-center">
      <div className="bg-orange-50 max-w-7xl mx-auto py-20">
        <div className="max-w-4xl mx-auto px-6 text-black">
          
          {/* Header */}
          <header className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-orange-500">
              Answers for students, educators, parents, school leaders, researchers,
              and organizations interested in inclusive and locally grounded AI
              education.
            </p>
          </header>

          {/* FAQ grid */}
          <div className="grid gap-12 md:grid-cols-3">
            {faqs.map((item) => (
              <article key={item.question} className="flex flex-col gap-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-orange-500/40 text-xl font-semibold">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-orange-500">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-16 bg-orange-700/80 rounded-3xl px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-base font-semibold mb-1 text-white">
                Have feedback or more questions?
              </p>
              <p className="text-sm text-white">
                We welcome questions, insights, and feedback from students, educators,
                parents, researchers, and organizations interested in this research.
              </p>
            </div>
            <a
              href="mailto:davidoka@uef.fi"
              className="inline-flex items-center justify-center rounded-xl bg-white text-orange-700 font-semibold text-sm px-12 py-3 shadow-sm hover:bg-orange-50 transition"
            >
              Feedback
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;

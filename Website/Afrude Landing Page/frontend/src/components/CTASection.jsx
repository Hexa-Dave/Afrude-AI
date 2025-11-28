import React from 'react';

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

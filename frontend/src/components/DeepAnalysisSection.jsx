import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowRight } from 'lucide-react';


const caseStudies = [
  {
    title: "Learning and Building AI from Local Realities in Ghana",
    text: (
      <>
        In a public high school in Accra, students are introduced to Artificial
        Intelligence using examples drawn directly from their daily lives—local
        markets, traffic congestion, sanitation systems, and small-scale farming.
        Through <span className="text-orange-500 font-semibold">Afrude AI</span>,
        learners collect and curate datasets from their communities, communicate
        AI concepts using familiar language and cultural references, and train
        models collaboratively. Students build simple prediction systems for crop
        yield and waste management, learning not only what AI is, but how locally
        trained models—grounded in Ghanaian data—can outperform generic solutions
        when applied in nearby contexts.
      </>
    ),
  },
  {
    title: "Smart Agriculture and Local Model Training in Northern Nigeria",
    text: (
      <>
        In Northern Nigeria, where farming is central to daily life, students use
        <span className="text-orange-500 font-semibold"> Afrude AI</span> to learn AI
        through real agricultural challenges faced by their families and
        communities. Learners gather rainfall data, soil conditions, and crop
        disease observations from local farms, then collaboratively train machine
        learning models to predict planting outcomes and disease risks. By working
        with data they understand and trust, students gain the skills to build AI
        systems that are locally accurate, interpretable, and immediately useful
        to nearby farmers.
      </>
    ),
  },
  {
    title: "Border Trade and Fraud Detection Education in East Africa",
    text: (
      <>
        Students in border-region schools explore AI through real-world scenarios
        such as shipment verification, customs fraud, and informal trade routes.
        Using <span className="text-orange-500 font-semibold">Afrude AI</span>,
        learners simulate how AI models can analyze transaction patterns, cargo
        descriptions, and movement data to flag suspicious exchanges. By training
        models on locally sourced and anonymized datasets, students understand how
        AI can support border control and trade transparency while respecting
        privacy. The experience shows how AI can be applied directly to security
        and economic challenges in their immediate environment.
      </>
    ),
  },
  {
    title: "Urban Safety and Crime Pattern Analysis in Nairobi",
    text: (
      <>
        In Nairobi, high school students learn AI by examining urban safety
        challenges they recognize—such as theft hotspots, transport-related crime,
        and emergency response delays. Through <span className="text-orange-500 font-semibold">Afrude AI</span>,
        learners work with localized incident reports and mobility data to train
        models that identify risk patterns and suggest preventive measures.
        Students see how AI, when trained on local data and informed by lived
        experience, can support safer cities and more responsive public services.
      </>
    ),
  },
  {
    title: "Community Health and Privacy-Aware AI in Rural Kenya",
    text: (
      <>
        In rural Kenyan schools, students explore AI through community health and
        sanitation challenges they encounter daily. Using <span className="text-orange-500 font-semibold">Afrude AI</span>,
        learners analyze locally relevant health indicators—such as water access
        and disease occurrence—while applying federated learning to keep sensitive
        data within communities. This approach helps students understand how AI can
        generate meaningful insights without centralizing or exposing personal
        information, reinforcing trust and ethical awareness alongside technical
        skills.
      </>
    ),
  },
  {
    title: "Climate Adaptation and Local Intelligence in Senegal",
    text: (
      <>
        In Senegal, students learn AI by working with climate data that reflects
        droughts, flooding, and seasonal shifts affecting their regions. Through
        <span className="text-orange-500 font-semibold"> Afrude AI</span>, learners
        train predictive models that support local decision-making for farming and
        resource management. By grounding AI education in environmental realities
        they experience firsthand, students understand how locally trained models
        can support climate resilience more effectively than imported, generic
        systems.
      </>
    ),
  },
];


const DeepAnalysisSection = () => {

    const [caseIndex, setCaseIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);
                
  return (
    <section id="deep-analysis" className="bg-gray-50">
      <div className="bg-white max-w-7xl mx-auto px-20 py-20">
        <div className="text-center mb-12">


          <h2 className="text-5xl font-bold text-black mb-4">
            Deep Analysis & Research Pillars
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Select a topic to dive deeper, then explore the specific objectives for the research, rebuilt as 
            interactive, inclusive and participatory AI Education centered modules.
          </p>
        </div>

        <Tabs defaultValue="cultural" className="w-full">
          <TabsList className="flex justify-center bg-transparent space-x-4">
            <TabsTrigger 
              value="cultural" 
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 data-[state=active]:bg-orange-500 data-[state=active]:border-orange-500 data-[state=active]:text-white transition-all"
            >
              Culturally-Infused AI Learning
            </TabsTrigger>
            <TabsTrigger 
              value="gamified"
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 data-[state=active]:bg-orange-500 data-[state=active]:border-orange-500 data-[state=active]:text-white transition-all"
            >
              Gamified Engagement
            </TabsTrigger>
            <TabsTrigger 
              value="collaborative"
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 data-[state=active]:bg-orange-500 data-[state=active]:border-orange-500 data-[state=active]:text-white transition-all"
            >
              Collaborative AI Development
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cultural" className="space-y-12">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-black mb-6">
                Contextualized AI for African Learners
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The research emphasizes the critical need for AI education that reflects the unique cultural, 
                linguistic, and infrastructural realities of learners in underrepresented regions. 
                Building on AfriML's insights, Afrude AI extends this approach, ensuring AI concepts are 
                presented in a familiar and relevant context, significantly boosting engagement and comprehension.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="font-semibold text-black mb-2">Key Takeaway:</p>
                <p className="text-gray-700">
                  Culturally-grounded AI platforms like AfriML and Afrude AI can dramatically 
                  improve learning outcomes by making abstract concepts relatable and relevant to students' 
                  lived experiences.
                </p>
              </div>
            </div>

            <div className="bg-white px-20">
              <h3 className="text-4xl font-bold text-black mb-8 text-center">
                Research Process Flow
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center">
                  <h4 className="text-sm font-semibold text-black mb-2">Exploration & Design Phase</h4>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-gray-400" size={32} />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center">
                  <h4 className="text-sm font-semibold text-black mb-2">Development & Iterative Testing Phase</h4>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-gray-400" size={32} />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center">
                  <h4 className="text-sm font-semibold text-black mb-2">Evaluation & Refinement Phase</h4>
                </div>
              </div>
            </div>

            <div className="px-20">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 md:p-12 border-l-4 border-orange-500">
                <h3 className="text-6xl font-bold text-black mb-4">AfriML's Legacy</h3>
                <p className="text-gray-700 text-lg">
                    Validated previous research on enhanced learner engagement by demonstrating the impact of culturally contextualized 
                    AI education. Its insights serve as a definitive case study, proving that when AI curricula are
                    adapted to the African context, both student participation and academic comprehension significantly
                    increase.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold border-b-2 border-gray-300">Feature</th>
                    <th className="text-left p-4 font-semibold border-b-2 border-gray-300">AfriML (Previous)</th>
                    <th className="text-left p-4 font-semibold border-b-2 border-gray-300">Afrude AI (Proposed)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Core Focus</td>
                    <td className="p-4 text-gray-700">ML-only, no-code platform</td>
                    <td className="p-4 text-gray-700">Expansive AI learning environment (ML, data science, ethics)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Cultural Integration</td>
                    <td className="p-4 text-gray-700">African accents, artifacts, languages</td>
                    <td className="p-4 text-gray-700">Deeper cultural infusion, participatory design</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Engagement Mechanism</td>
                    <td className="p-4 text-gray-700">Contextualization</td>
                    <td className="p-4 text-gray-700">Contextualization + Gamification</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Collaboration</td>
                    <td className="p-4 text-gray-700">No direct features</td>
                    <td className="p-4 text-gray-700">Federated Learning for privacy-preserving collaboration</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Data Management</td>
                    <td className="p-4 text-gray-700">Centralized, constrained scalability</td>
                    <td className="p-4 text-gray-700">Participatory Dataset Sharing Hub, equitable access</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Privacy</td>
                    <td className="p-4 text-gray-700">Implicit (no sensitive data focus)</td>
                    <td className="p-4 text-gray-700">Federated learning ensures sensitive student data remains local</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
              <h3 className="text-3xl font-bold mb-6 transition-opacity duration-500">
                Case Study: {caseStudies[caseIndex].title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed transition-opacity duration-500">
                {caseStudies[caseIndex].text}
              </p>

              {/* Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCaseIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === caseIndex
                        ? "bg-orange-500 scale-125"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to case study ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </TabsContent>

          <TabsContent value="gamified" className="space-y-8">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-black mb-6">
                Boosting Motivation through Play
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Gamification is a core innovation in Afrude AI, designed to enhance learner motivation and sustained engagement. By integrating game-like elements, challenges, and rewards into the learning process, students are encouraged to actively participate and explore complex AI topics without feeling overwhelmed. This approach transforms AI learning into an interactive and enjoyable experience.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="font-semibold text-black mb-2">Key Takeaway:</p>
                <p className="text-gray-700">
                  Gamified learning environments can significantly increase student motivation, making complex subjects like AI more accessible and enjoyable, leading to deeper understanding and retention.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="collaborative" className="space-y-8">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-black mb-6">
                Federated Learning & Data Sharing for Equity
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Afrude AI tackles the challenges of data scarcity and privacy in African contexts through federated learning and a participatory dataset-sharing hub. Federated learning enables collaborative AI model training across institutions without centralizing sensitive data, ensuring privacy and scalability. The sharing hub addresses the lack of African-centric datasets, fostering a sustainable ecosystem for AI development.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="font-semibold text-black mb-2">Key Takeaway:</p>
                <p className="text-gray-700">
                  Federated learning and shared data infrastructure are crucial for equitable AI development, enabling collaboration while protecting privacy and building contextually relevant datasets in data-scarce regions.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DeepAnalysisSection;

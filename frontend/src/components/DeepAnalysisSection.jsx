import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowRight } from 'lucide-react';

const DeepAnalysisSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Deep Analysis & Enterprise Applications
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Select a topic to dive deeper, then explore the specific findings from the research, rebuilt as interactive, enterprise-focused modules.
          </p>
        </div>

        <Tabs defaultValue="cultural" className="w-full">
          <TabsList className="flex justify-center mb-12 bg-transparent space-x-4">
            <TabsTrigger 
              value="cultural" 
              className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-500 data-[state=active]:bg-orange-500 data-[state=active]:text-white hover:bg-orange-50 transition-all"
            >
              Culturally-Infused AI Learning
            </TabsTrigger>
            <TabsTrigger 
              value="gamified"
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-600 data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:border-orange-500 hover:bg-gray-100 transition-all"
            >
              Gamified Engagement
            </TabsTrigger>
            <TabsTrigger 
              value="collaborative"
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-600 data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:border-orange-500 hover:bg-gray-100 transition-all"
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
                The research emphasizes the critical need for AI education that reflects the unique cultural, linguistic, and infrastructural realities of learners in underrepresented regions. Building on AfriML's success, Afrude AI extends this approach, ensuring AI concepts are presented in a familiar and relevant context, significantly boosting engagement and comprehension.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="font-semibold text-black mb-2">Key Takeaway:</p>
                <p className="text-gray-700">
                  Culturally-grounded AI platforms like AfriML and Afrude AI dramatically improve learning outcomes by making abstract concepts relatable and relevant to students' lived experiences.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-black mb-8 text-center">
                Enterprise Process Flow: Research Methodology
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-black mb-2">Exploration & Design Phase</h4>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-gray-400" size={32} />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-black mb-2">Development & Iterative Testing Phase</h4>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-gray-400" size={32} />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-black mb-2">Evaluation & Refinement Phase</h4>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 md:p-12 border-l-4 border-orange-500">
              <h3 className="text-3xl font-bold text-black mb-4">AfriML's Legacy</h3>
              <p className="text-gray-700 text-lg">
                Proven success in enhanced learner engagement and comprehension through culturally contextualized AI education, validating the core approach.
              </p>
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

            <div className="bg-black rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Case Study: Empowering Tomorrow's Innovators in Ghana
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Imagine a high school in Accra, Ghana, where students learn AI not just from abstract Western examples, but from datasets reflecting local agriculture, traffic patterns, and community health challenges. With <span className="text-orange-500 font-semibold">Afrude AI</span>, students collaboratively train models using federated learning to predict crop yields based on local weather data, or analyze sanitation needs in their community, all while protecting sensitive data. Gamified challenges encourage participation, turning complex problem-solving into an exciting competition. The school contributes its anonymized, culturally-relevant data to a sharing hub, fostering a virtuous cycle of learning and innovation across the continent. This is the future <span className="text-orange-500 font-semibold">Afrude AI</span> aims to create: an ecosystem where African students are not just consumers of AI, but empowered creators shaping solutions for their own communities.
              </p>
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

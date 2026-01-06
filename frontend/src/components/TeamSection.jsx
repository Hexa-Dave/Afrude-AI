{/* 

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';

const CalculatorSection = () => {
  const [industry, setIndustry] = useState('Education/Research');
  const [staff, setStaff] = useState(10);
  const [hours, setHours] = useState(5);
  const [rate, setRate] = useState(40);
  const [savings, setSavings] = useState(0);
  const [hoursReclaimed, setHoursReclaimed] = useState(0);

  useEffect(() => {
    const annualHours = staff * hours * 52;
    const annualSavings = annualHours * rate;
    setHoursReclaimed(annualHours);
    setSavings(annualSavings);
  }, [staff, hours, rate]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Calculate Your Potential AI Impact
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Estimate the hours reclaimed and cost savings your organization could achieve by integrating culturally-aware and collaborative AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Your Industry Sector</label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Education/Research">Education/Research</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Number of Staff Involved in Data Tasks</label>
              <Input 
                type="number" 
                value={staff} 
                onChange={(e) => setStaff(Number(e.target.value))}
                className="w-full bg-white text-center text-lg font-semibold"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Average Hours Spent Per Staff on Repetitive Data Tasks Weekly</label>
              <Input 
                type="number" 
                value={hours} 
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full bg-white text-center text-lg font-semibold"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Average Hourly Rate of Staff ($)</label>
              <Input 
                type="number" 
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full bg-white text-center text-lg font-semibold"
              />
            </div>
          </div>

          <div className="bg-black rounded-xl p-8 flex flex-col justify-center items-center text-white">
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">ESTIMATED ANNUAL SAVINGS</p>
              <p className="text-5xl font-bold text-orange-500">
                ${savings.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">HOURS RECLAIMED ANNUALLY</p>
              <p className="text-3xl font-bold text-white">
                {hoursReclaimed.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;

*/}



import React from "react";
import LinkedinIcon from "../assets/Linkedin_Icon.png";
import ORCIDicon from "../assets/ORCID_iD.png";
import OutlookIcon from "../assets/Microsoft_Office_Outlook_(2018–2024).png";

const teamMembers = [
  {
    name: "Okafor David Odafe",
    role: "Primary Researcher & Developer",
    bio: "PhD researcher and developer leading the design and implementation of Afrude-AI, with a focus on gamified, collaborative, and culturally grounded AI learning systems.",
  },
  {
    name: "Sanusi Ismaila Temitayo",
    role: "Research Supervisor",
    bio: "Academic researcher providing conceptual guidance and supervision in culturally responsive computing and AI education.",
  },
  {
    name: "Solomon Sunday Oyelere",
    role: "Academic Research Supervisor",
    bio: "Professor and researcher specializing in technology-enhanced learning, contributing foundational ideas and academic oversight to the project.",
  },
];

const TeamSection = () => {
  return (
    <section id="our-team" className="bg-gray-50">
      <div className="bg-white max-w-7xl mx-auto py-20 px-20">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            Our Team
          </h2>
          {/*<p className="text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>*/}
        </div>

        {/* Team Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index}>
              {/* Image Placeholder */}
              <div className="bg-gray-200 aspect-square mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25V16.5M3 16.5l4.72-4.72a2.25 2.25 0 013.18 0l2.22 2.22a2.25 2.25 0 003.18 0L21 9.75M3 16.5V18.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5"
                  />
                </svg>
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-black">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 text-black">
                <img src={LinkedinIcon} alt="Linkedin Logo"  className="w-5 h-5 cursor-pointer hover:opacity-70" />
                <img src={ORCIDicon} alt="ORCID Logo" className="w-5 h-5 cursor-pointer hover:opacity-70" />
                <img src={OutlookIcon} alt="Outlook Logo" className="w-5 h-5 cursor-pointer hover:opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

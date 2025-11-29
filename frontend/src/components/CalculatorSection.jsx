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

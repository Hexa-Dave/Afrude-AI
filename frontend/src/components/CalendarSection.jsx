import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const CalendarSection = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState('');
  const [timezone, setTimezone] = useState('Eastern Time (ET)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const { toast } = useToast();

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleContinue = () => {
    if (step === 1 && date) {
      setStep(2);
    } else if (step === 2 && timeSlot) {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.notes) {
      toast({
        title: "Meeting Booked Successfully!",
        description: `Your consultation is scheduled for ${date?.toLocaleDateString()} at ${timeSlot}.`,
      });
      // Reset form
      setStep(1);
      setDate(null);
      setTimeSlot('');
      setFormData({ name: '', email: '', phone: '', notes: '' });
    }
  };

  return (
    <section id="calendar" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-2">
            Ready to Get Started?
          </h2>
          <h3 className="text-3xl font-bold text-black mb-2">
            Book Your Free Consultation.
          </h3>
          <h4 className="text-2xl font-semibold text-gray-600">
            Let's Discuss Your AI Strategy!
          </h4>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-black mb-8">Lets Discuss Your Needs</h3>
          <p className="text-lg text-gray-600 mb-8">AI Consultation Booking</p>

          {step === 1 && (
            <div>
              <h4 className="text-xl font-semibold text-black mb-6">Select a Date</h4>
              <div className="flex justify-center mb-8">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow"
                  disabled={(date) => date < new Date()}
                />
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={handleContinue}
                  disabled={!date}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 className="text-xl font-semibold text-black mb-6">Select a Time Slot</h4>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Zone</label>
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Eastern Time (ET)">Eastern Time (ET)</SelectItem>
                    <SelectItem value="Pacific Time (PT)">Pacific Time (PT)</SelectItem>
                    <SelectItem value="Central Time (CT)">Central Time (CT)</SelectItem>
                    <SelectItem value="Mountain Time (MT)">Mountain Time (MT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      timeSlot === slot
                        ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="px-8 py-3"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleContinue}
                  disabled={!timeSlot}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 className="text-xl font-semibold text-black mb-6">Enter Your Details</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <Input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Please enter your name."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Please enter a valid email address."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <Input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Please enter a valid phone number."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can we help? *</label>
                  <Textarea 
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Please enter your notes."
                    rows={4}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <Button 
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="px-8 py-3"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                  >
                    Book A Meeting
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;


import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SurveyContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    surveyType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "We'll contact you shortly to discuss your survey needs.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyAddress: '',
        surveyType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-coffee-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Request a Survey</h2>
          <p className="text-coffee-cream max-w-2xl mx-auto">
            Get in touch with our team to discuss your land surveying needs. We'll provide a customized quote based on your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-coffee-cream">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-coffee-cream text-coffee-dark p-3 rounded-full mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-coffee-cream">123 Survey Street, Mapville, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-coffee-cream text-coffee-dark p-3 rounded-full mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-coffee-cream">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-coffee-cream text-coffee-dark p-3 rounded-full mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-coffee-cream">info@landsurveyservices.com</p>
                </div>
              </div>
            </div>
            <div className="bg-coffee-medium/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Service Areas</h3>
              <p className="mb-4">We provide professional land surveying services throughout the following counties:</p>
              <ul className="grid grid-cols-2 gap-2 list-disc pl-5">
                <li>County Name</li>
                <li>County Name</li>
                <li>County Name</li>
                <li>County Name</li>
                <li>County Name</li>
                <li>County Name</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white text-coffee-dark p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium mb-1">Property Address</label>
                <Input
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="surveyType" className="block text-sm font-medium mb-1">Survey Type</label>
                <select
                  id="surveyType"
                  name="surveyType"
                  value={formData.surveyType}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Survey Type</option>
                  <option value="boundary">Boundary Survey</option>
                  <option value="topographic">Topographic Survey</option>
                  <option value="alta">ALTA/NSPS Land Title Survey</option>
                  <option value="construction">Construction Survey</option>
                  <option value="subdivision">Subdivision Survey</option>
                  <option value="other">Other (Specify in Message)</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full"
                  placeholder="Please provide any additional details about your survey needs."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-coffee-dark hover:bg-coffee-espresso"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyContact;

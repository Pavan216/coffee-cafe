
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[field].parse(value);
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0]?.message || `Invalid ${field}`;
        setErrors(prev => ({ ...prev, [field]: message }));
        return false;
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    Object.entries(formData).forEach(([field, value]) => {
      const fieldIsValid = validateField(field as keyof ContactFormData, value);
      if (!fieldIsValid) isValid = false;
    });
    
    if (!isValid) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to Google Sheets
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">Contact Us</h1>
            <p className="text-coffee-medium max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              Have a question or feedback? We'd love to hear from you. Reach out using the form below or visit our café.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8 opacity-0 animate-fade-in animate-delay-200">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-400" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-400" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-red-400" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-coffee-dark hover:bg-coffee-espresso text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2" size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8 opacity-0 animate-fade-in animate-delay-300">
                <h2 className="text-2xl font-semibold text-coffee-dark mb-6">Visit Our Café</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-coffee-dark shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-coffee-dark">Address</h3>
                      <p className="text-coffee-medium">123 Coffee Street, Brewtown,<br />CA 90210, United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-coffee-dark shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-coffee-dark">Phone</h3>
                      <p className="text-coffee-medium">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-coffee-dark shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-coffee-dark">Email</h3>
                      <p className="text-coffee-medium">info@aromacoffee.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-coffee-dark shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-coffee-dark">Opening Hours</h3>
                      <p className="text-coffee-medium">
                        Monday - Friday: 7:00 AM - 8:00 PM<br />
                        Saturday - Sunday: 8:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-md h-80 opacity-0 animate-fade-in animate-delay-400">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130390376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1634930145620!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="AROMA Coffee location map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

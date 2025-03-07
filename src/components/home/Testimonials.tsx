
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The attention to detail in every cup is remarkable. Their commitment to quality is evident in every sip of their signature espresso.",
      author: "Alicia Chen",
      location: "Coffee Enthusiast",
      delay: 100
    },
    {
      quote: "AROMA has transformed my morning routine. Their seasonal single-origin offerings introduce me to flavors I never knew existed in coffee.",
      author: "Michael Torres",
      location: "Regular Customer",
      delay: 200
    },
    {
      quote: "The atmosphere combined with their exceptional beverages creates an unparalleled café experience. It's my favorite place to work remotely.",
      author: "Sarah Johnson",
      location: "Local Designer",
      delay: 300
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-coffee-beige/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-coffee-medium opacity-0 animate-fade-in animate-delay-100">
            The experiences of our community reflect our dedication to crafting exceptional coffee and creating memorable moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

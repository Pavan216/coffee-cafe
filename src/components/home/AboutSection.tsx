
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">Our Passion for Coffee</h2>
            <p className="text-coffee-medium mb-6 opacity-0 animate-fade-in animate-delay-100">
              At AROMA, we believe that exceptional coffee is an art form. Our journey began with a simple passion: to create coffee experiences that elevate everyday moments into extraordinary ones.
            </p>
            <p className="text-coffee-medium mb-6 opacity-0 animate-fade-in animate-delay-200">
              We meticulously source our beans from sustainable farms around the world, carefully roast them to highlight their unique characteristics, and craft beverages that honor the entire journey from seed to cup.
            </p>
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <Link 
                to="/about"
                className="inline-flex items-center bg-coffee-dark text-white px-6 py-3 rounded font-medium hover:bg-coffee-espresso transition-all hover:translate-y-[-2px]"
              >
                Our Story
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-md transform translate-y-4 opacity-0 animate-fade-in-slide animate-delay-100">
                <img 
                  src="https://images.unsplash.com/photo-1497935586047-9397d4dc844a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww" 
                  alt="Coffee beans" 
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md transform translate-y-4 opacity-0 animate-fade-in-slide animate-delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyaXN0YXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Barista crafting coffee" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="overflow-hidden rounded-lg shadow-md transform translate-y-4 opacity-0 animate-fade-in-slide animate-delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D" 
                  alt="Coffee shop atmosphere" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md transform translate-y-4 opacity-0 animate-fade-in-slide animate-delay-400">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww" 
                  alt="Coffee cup" 
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SurveyServices = () => {
  const services = [
    {
      title: "Boundary Surveys",
      description: "Establish property lines and corners, identifying encroachments and easements that may affect your property.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1974&auto=format&fit=crop",
      price: "Starting at $800"
    },
    {
      title: "Topographic Surveys",
      description: "Map the contours and features of your land, including elevations, structures, and natural elements for planning and development.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1974&auto=format&fit=crop",
      price: "Starting at $1,200"
    },
    {
      title: "ALTA/NSPS Land Title Surveys",
      description: "Comprehensive surveys meeting the standards set by the American Land Title Association for real estate transactions.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1974&auto=format&fit=crop",
      price: "Starting at $2,500"
    },
    {
      title: "Construction Surveys",
      description: "Set precise markers for construction projects, ensuring buildings and infrastructure are placed according to plans.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1974&auto=format&fit=crop",
      price: "Starting at $1,500"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-coffee-dark mb-4">Our Survey Services</h2>
          <p className="text-coffee-medium max-w-2xl mx-auto">
            Comprehensive land surveying solutions tailored to your specific needs, from basic property boundaries to complex topographic mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-coffee-cream rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">{service.title}</h3>
                <p className="text-coffee-medium mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-coffee-dark font-medium">{service.price}</span>
                  <Link to="/contact">
                    <Button variant="default" className="bg-coffee-dark hover:bg-coffee-espresso">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveyServices;

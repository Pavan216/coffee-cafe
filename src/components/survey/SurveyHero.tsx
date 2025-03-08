
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Flag, Search } from 'lucide-react';

const SurveyHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1974&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl leading-tight mb-4 opacity-0 animate-fade-in-slide">
            Professional Land <br/> <span className="text-coffee-cream">Survey Services</span>
          </h1>
          <p className="md:text-lg max-w-xl mb-8 opacity-0 animate-fade-in-slide animate-delay-200">
            Accurate, reliable, and comprehensive land surveying for residential, commercial, and industrial properties with cutting-edge technology and decades of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-slide animate-delay-300">
            <Link 
              to="/contact" 
              className="bg-coffee-dark text-white px-8 py-3 rounded text-center font-medium hover:bg-coffee-espresso transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
            >
              Request Survey
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded text-center font-medium hover:bg-white/10 transition-all hover:translate-y-[-2px]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Services Quick Links */}
      <div className="absolute bottom-0 left-0 right-0 bg-coffee-espresso/80 backdrop-blur-sm py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-white">
            <MapPin className="h-8 w-8 text-coffee-cream" />
            <div>
              <h3 className="font-medium">Boundary Surveys</h3>
              <p className="text-sm text-coffee-cream">Precise property line marking</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Flag className="h-8 w-8 text-coffee-cream" />
            <div>
              <h3 className="font-medium">Topographic Surveys</h3>
              <p className="text-sm text-coffee-cream">Detailed elevation mapping</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Search className="h-8 w-8 text-coffee-cream" />
            <div>
              <h3 className="font-medium">Title Surveys</h3>
              <p className="text-sm text-coffee-cream">ALTA/NSPS standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyHero;

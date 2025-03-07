
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop")',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl leading-tight mb-4 opacity-0 animate-fade-in-slide">
            Experience Coffee <br/> <span className="text-coffee-cream">At Its Finest</span>
          </h1>
          <p className="md:text-lg max-w-xl mb-8 opacity-0 animate-fade-in-slide animate-delay-200">
            Every cup tells a story of meticulous sourcing, expert roasting, and passionate brewing. Discover the perfect balance of flavor, aroma, and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-slide animate-delay-300">
            <Link 
              to="/menu" 
              className="bg-coffee-dark text-white px-8 py-3 rounded text-center font-medium hover:bg-coffee-espresso transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
            >
              Order Now
            </Link>
            <Link 
              to="/products" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded text-center font-medium hover:bg-white/10 transition-all hover:translate-y-[-2px]"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

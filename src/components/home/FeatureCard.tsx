
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  path: string;
  delay?: number;
}

const FeatureCard = ({ image, title, description, path, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
        "opacity-0 animate-fade-in animate-delay-" + delay
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2 text-coffee-dark">{title}</h3>
        <p className="text-coffee-medium mb-4 text-sm">{description}</p>
        <Link 
          to={path}
          className="inline-flex items-center text-coffee-dark font-medium text-sm"
        >
          Discover
          <svg 
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
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
  );
};

export default FeatureCard;

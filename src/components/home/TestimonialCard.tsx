
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, location, delay = 0 }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-8 rounded-lg shadow-md opacity-0 animate-scale-in",
        "animate-delay-" + delay
      )}
    >
      <svg 
        className="w-10 h-10 text-coffee-medium opacity-20 mb-4" 
        fill="currentColor" 
        viewBox="0 0 32 32" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM22 8v8c0 4.418 3.582 8 8 8V8h-8z" />
      </svg>
      <p className="text-coffee-medium mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-coffee-dark">{author}</p>
        <p className="text-sm text-coffee-medium">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

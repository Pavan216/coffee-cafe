
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-coffee-dark mb-4">About Us</h1>
            <p className="text-coffee-medium max-w-2xl mx-auto">
              The story of our passion for exceptional coffee and the journey that brought us here.
            </p>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1974&auto=format&fit=crop" 
                  alt="Our café" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Our Story</h2>
              <p className="text-coffee-medium mb-4">
                AROMA Coffee began in 2010 with a simple mission: to create a space where the art of coffee could be celebrated and shared. What started as a small corner café has evolved into a beloved destination for coffee enthusiasts and casual visitors alike.
              </p>
              <p className="text-coffee-medium mb-4">
                Our founder, Elena Rodriguez, developed a passion for coffee during her travels throughout the world's premier coffee-growing regions. Inspired by the dedication of farmers and the rich traditions surrounding coffee cultivation, she returned home determined to create a café that honored the entire journey from seed to cup.
              </p>
              <p className="text-coffee-medium">
                Today, AROMA stands as a testament to that vision—a place where exceptional coffee, thoughtful hospitality, and community connection converge to create memorable experiences.
              </p>
            </div>
          </div>
          
          {/* Mission & Values */}
          <div className="bg-coffee-cream rounded-lg p-8 md:p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Our Mission & Values</h2>
              <p className="text-coffee-medium max-w-2xl mx-auto">
                The principles that guide everything we do at AROMA Coffee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-coffee-dark rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-coffee-dark mb-2">Quality Above All</h3>
                <p className="text-coffee-medium text-sm">
                  We never compromise on quality. From sourcing to brewing, excellence is our standard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-coffee-dark rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-coffee-dark mb-2">Community Connection</h3>
                <p className="text-coffee-medium text-sm">
                  We believe coffee brings people together. Our café is a space for conversation, creativity, and connection.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-coffee-dark rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-coffee-dark mb-2">Environmental Stewardship</h3>
                <p className="text-coffee-medium text-sm">
                  We partner with sustainable farms and implement eco-friendly practices in our operations.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Our Team</h2>
              <p className="text-coffee-medium max-w-2xl mx-auto">
                Meet the passionate individuals who bring AROMA to life every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                    alt="Elena Rodriguez" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-coffee-dark">Elena Rodriguez</h3>
                <p className="text-coffee-medium text-sm">Founder & Head Roaster</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
                    alt="David Chen" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-coffee-dark">David Chen</h3>
                <p className="text-coffee-medium text-sm">Master Barista</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                    alt="Sophia Martinez" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-coffee-dark">Sophia Martinez</h3>
                <p className="text-coffee-medium text-sm">Café Manager</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" 
                    alt="James Wilson" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-coffee-dark">James Wilson</h3>
                <p className="text-coffee-medium text-sm">Head of Quality Control</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

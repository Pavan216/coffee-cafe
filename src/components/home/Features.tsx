
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const featuredItems = [
    {
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Signature Espresso",
      description: "Our signature blend offers a perfect balance of chocolate notes and bright acidity, creating a memorable cup.",
      path: "/products",
      delay: 100
    },
    {
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Seasonal Single Origins",
      description: "Experience unique flavors from around the world with our carefully selected single-origin offerings.",
      path: "/products",
      delay: 200
    },
    {
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Artisan Café Experience",
      description: "Visit our café for an immersive experience in the world of specialty coffee and handcrafted beverages.",
      path: "/about",
      delay: 300
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-coffee-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-coffee-dark mb-4 opacity-0 animate-fade-in">Discover Our Offerings</h2>
          <p className="max-w-2xl mx-auto text-coffee-medium opacity-0 animate-fade-in animate-delay-100">
            From single-origin beans to signature blends, we curate exceptional coffee experiences that captivate the senses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <FeatureCard 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              path={item.path}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

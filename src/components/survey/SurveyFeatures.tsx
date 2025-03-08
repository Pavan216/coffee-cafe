
import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Shield } from 'lucide-react';

const SurveyFeatures = () => {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-coffee-dark" />,
      title: "Accuracy Guaranteed",
      description: "Our surveys meet or exceed industry standards with precision you can trust."
    },
    {
      icon: <Clock className="h-10 w-10 text-coffee-dark" />,
      title: "Quick Turnaround",
      description: "Efficient service without sacrificing quality or attention to detail."
    },
    {
      icon: <Users className="h-10 w-10 text-coffee-dark" />,
      title: "Expert Surveyors",
      description: "Licensed professionals with decades of combined experience."
    },
    {
      icon: <Award className="h-10 w-10 text-coffee-dark" />,
      title: "Certified Results",
      description: "All surveys are certified and legally recognized documentation."
    },
    {
      icon: <MapPin className="h-10 w-10 text-coffee-dark" />,
      title: "Advanced Technology",
      description: "Using the latest GPS and drone technology for precise measurements."
    },
    {
      icon: <Shield className="h-10 w-10 text-coffee-dark" />,
      title: "Fully Insured",
      description: "Professional liability and comprehensive insurance coverage."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-coffee-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-coffee-dark mb-4">Why Choose Our Survey Services</h2>
          <p className="text-coffee-medium max-w-2xl mx-auto">
            With our commitment to precision and customer satisfaction, we deliver reliable land survey services that help you make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">{feature.title}</h3>
              <p className="text-coffee-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveyFeatures;

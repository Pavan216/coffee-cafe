
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SurveyHero from '@/components/survey/SurveyHero';
import SurveyFeatures from '@/components/survey/SurveyFeatures';
import SurveyServices from '@/components/survey/SurveyServices';
import SurveyContact from '@/components/survey/SurveyContact';

const Survey = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <SurveyHero />
        <SurveyFeatures />
        <SurveyServices />
        <SurveyContact />
      </main>
      <Footer />
    </div>
  );
};

export default Survey;

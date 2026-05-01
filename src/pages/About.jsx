import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-jd-black leading-tight">
          About <span className="text-jd-burgundy italic">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
          JD. Music Academy is dedicated to providing world-class music instruction. 
          Our mission is to amplify your talent and refine your craft through authentic, comprehensive training.
        </p>
        <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
          <p className="text-gray-600 leading-relaxed">
            More content about the academy's history, mission, and instructors will be added here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

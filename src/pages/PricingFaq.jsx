import React from 'react';

const PricingFaq = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-jd-black leading-tight">
          Pricing & <span className="text-jd-burgundy italic">FAQ</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
          Find the right plan for your musical journey and get answers to common questions about our academy.
        </p>
        
        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-8 text-jd-black">Tuition & Packages</h2>
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
            <p className="text-gray-600 leading-relaxed">Pricing details for private lessons, group classes, and specialized programs will be listed here.</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-serif mb-8 text-jd-black">Frequently Asked Questions</h2>
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
            <p className="text-gray-600 leading-relaxed">Common questions about enrollment, scheduling, and policies will go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFaq;

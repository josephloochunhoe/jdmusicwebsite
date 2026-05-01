import React from 'react';

const StudentLife = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-jd-black leading-tight">
          Student <span className="text-jd-burgundy italic">Life</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
          Experience the vibrant community at JD. Music Academy. From performances and recitals to our dedicated students and their inspiring stories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
            <h2 className="text-3xl font-serif mb-4 text-jd-black">Events</h2>
            <p className="text-gray-600 leading-relaxed">Upcoming recitals, masterclasses, and community performances.</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
            <h2 className="text-3xl font-serif mb-4 text-jd-black">Our Students</h2>
            <p className="text-gray-600 leading-relaxed">Meet the talented individuals who make up our academy.</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-serif mb-8 italic text-jd-black">More Testimonials</h2>
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
            <p className="text-gray-600 leading-relaxed">Additional student testimonials and success stories will be featured here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;

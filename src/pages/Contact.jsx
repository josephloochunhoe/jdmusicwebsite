import React from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-jd-black leading-tight">
          Contact <span className="text-jd-burgundy italic">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
          Ready to start your musical journey? Reach out to us today and let's make music together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
            <h2 className="text-3xl font-serif mb-6 text-jd-black">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-jd-black focus:outline-none focus:border-jd-burgundy transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-jd-black focus:outline-none focus:border-jd-burgundy transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea rows="4" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-jd-black focus:outline-none focus:border-jd-burgundy transition-colors"></textarea>
              </div>
              <button type="button" className="px-8 py-3 rounded-full bg-jd-burgundy text-white font-semibold hover:bg-red-900 transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-2 text-jd-burgundy">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">123 Music Ave.<br/>Creative District, CD 12345</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2 text-jd-burgundy">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2 text-jd-burgundy">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">hello@jdmusicacademy.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

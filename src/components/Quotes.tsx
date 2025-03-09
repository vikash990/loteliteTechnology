import React from 'react';

const Quotes = () => {
  return (
    <div className="bg-[#0077B5] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our industry-leading programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-[#0077B5] text-5xl font-bold mb-2">94%</div>
            <p className="text-gray-700 font-medium">of our learners report career benefits including promotion, salary increase, or new job</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-[#0077B5] text-5xl font-bold mb-2">500+</div>
            <p className="text-gray-700 font-medium">industry partners including Fortune 500 companies actively hire our graduates</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-[#0077B5] text-5xl font-bold mb-2">45%</div>
            <p className="text-gray-700 font-medium">average salary increase reported by our graduates after program completion</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-light italic text-white mb-6">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </blockquote>
          <p className="text-white font-medium">- Malcolm X</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
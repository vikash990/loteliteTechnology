import React from 'react';

const MainSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0077B5] to-[#005d8f] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Transform Your Career with Industry-Leading Education
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Join over 500,000 professionals who have accelerated their careers with our industry-recognized programs and certifications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-[#0077B5] font-bold rounded-md hover:bg-gray-100 transition-colors">
                Explore Programs
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors">
                Talk to an Advisor
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://source.unsplash.com/random/100x100?face=${i}`} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">Join 500,000+ learners</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-white">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <img 
                src="https://source.unsplash.com/random/600x400?education" 
                alt="Students learning" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center">
                <div className="bg-[#0077B5] rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">93% Success Rate</p>
                  <p className="text-sm text-gray-600">Career transitions</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <p className="font-bold text-gray-800">45% Average</p>
                <p className="text-sm text-gray-600">Salary hike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
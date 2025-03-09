import React from 'react';

const CorporatePrograms = () => (
  <div className="min-h-screen">
    {/* Banner Section */}
    <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute transform -rotate-45 bg-white/10 w-96 h-96 rounded-full -top-20 -left-20"></div>
        <div className="absolute transform rotate-45 bg-white/10 w-96 h-96 rounded-full -bottom-20 -right-20"></div>
      </div>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 transform hover:scale-105 transition-transform">
            Transform Your Business with Our Corporate Programs
          </h1>
          <p className="text-xl mb-8">
            Empower your workforce with cutting-edge training solutions tailored for modern business needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>

    {/* Training Programs Section */}
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Training Solutions</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Corporate Training Card */}
        <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all p-6 border border-gray-100">
          <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-6 flex items-center justify-center">
            <svg className="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Corporate Training</h3>
          <p className="text-gray-600 mb-6">
            Customized training programs designed to enhance leadership, management, and professional skills across your organization.
          </p>
          <button className="text-blue-600 font-semibold flex items-center group">
            Learn More 
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>

        {/* Product Training Card */}
        <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all p-6 border border-gray-100">
          <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-6 flex items-center justify-center">
            <svg className="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Product-Based Training</h3>
          <p className="text-gray-600 mb-6">
            Comprehensive training solutions focused on product knowledge, technical skills, and implementation strategies.
          </p>
          <button className="text-blue-600 font-semibold flex items-center group">
            Learn More 
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CorporatePrograms; 
import React from 'react';

const ForeignExchange = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Hero Section */}
    <div className="bg-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Foreign Exchange Program</h1>
        <p className="text-xl text-indigo-100 max-w-3xl">
          Experience global education and cultural immersion through our comprehensive student exchange programs
        </p>
      </div>
    </div>

    {/* What is Foreign Exchange Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            What is a Foreign Exchange Program?
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            A Foreign Exchange Program is an enriching educational experience that allows students to study at partner institutions abroad while gaining invaluable international exposure. This program combines academic excellence with cultural immersion, providing a transformative learning experience that goes beyond traditional classroom education.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Cultural Immersion Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cultural Immersion</h3>
              <p className="text-gray-600">
                Experience authentic cultural exchange through direct interaction with international students and communities. Participate in local customs, traditions, and daily life, gaining deep insights into different cultures. Our program ensures complete cultural immersion through organized cultural activities, local community engagement, and guided cultural experiences.
              </p>
            </div>

            {/* Academic Excellence Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Academic Excellence</h3>
              <p className="text-gray-600">
                Study at prestigious international institutions with world-class faculty and cutting-edge facilities. Access diverse courses and unique academic perspectives not available at home. Benefit from different teaching methodologies and educational approaches while earning transferable credits towards your degree.
              </p>
            </div>

            {/* Global Connections Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Connections</h3>
              <p className="text-gray-600">
                Build an international network of friends, peers, and professionals. Engage with students from diverse backgrounds and cultures, creating lifelong connections. Develop global perspectives and cross-cultural communication skills essential for today's interconnected world. Our program facilitates meaningful interactions through organized social events and collaborative projects.
              </p>
            </div>

            {/* Seamless Integration Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Seamless Integration</h3>
              <p className="text-gray-600">
                Experience smooth transition with comprehensive pre-departure orientation and on-arrival support. Receive guidance on accommodation, local transportation, and essential services. Benefit from dedicated local support staff and mentors throughout your stay. Our program ensures you have all the resources needed for a successful academic and cultural experience abroad.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Begin Your Global Journey?</h3>
            <p className="text-gray-600 mb-8">
              Join our Foreign Exchange Program and embark on a life-changing educational adventure
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:-translate-y-1 transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ForeignExchange; 
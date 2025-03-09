import React from 'react';

const Career = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Career Opportunities</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Join our team at Lotelite Technology and be part of an innovative organization that's shaping the future of technology education.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Innovative work environment</li>
            <li>Professional growth opportunities</li>
            <li>Competitive compensation packages</li>
            <li>Work-life balance</li>
            <li>Global exposure</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals to join our team. Check back regularly for new opportunities.
          </p>
          <button className="bg-[#0077B5] text-white px-6 py-2 rounded-md hover:bg-[#005d8f] transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career; 
import React from 'react';
import { CheckCircle, Users, Award, Briefcase, Clock, Globe } from 'lucide-react';

const Differentiators = () => {
  const features = [
    {
      id: 1,
      title: 'Industry-Relevant Curriculum',
      description: 'Our programs are designed in collaboration with industry leaders to ensure you learn skills that employers are actively seeking.',
      icon: <Briefcase className="h-12 w-12 text-[#0077B5]" />
    },
    {
      id: 2,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience who bring real-world insights into the classroom.',
      icon: <Users className="h-12 w-12 text-[#0077B5]" />
    },
    {
      id: 3,
      title: 'Recognized Certifications',
      description: 'Earn credentials that are recognized and valued by employers worldwide, giving you a competitive edge in the job market.',
      icon: <Award className="h-12 w-12 text-[#0077B5]" />
    },
    {
      id: 4,
      title: 'Flexible Learning Options',
      description: 'Choose from online, hybrid, or in-person formats with schedules that fit your busy life and learning preferences.',
      icon: <Clock className="h-12 w-12 text-[#0077B5]" />
    },
    {
      id: 5,
      title: 'Global Network',
      description: 'Join a community of learners and professionals from around the world, expanding your connections and opportunities.',
      icon: <Globe className="h-12 w-12 text-[#0077B5]" />
    }
  ];

  return (
    <div className="py-16 bg-gray-50 relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077B5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How We're Different</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique approach to education combines industry expertise, cutting-edge curriculum, and personalized support to ensure your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)'
            }}
          />
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Your Success</h3>
              <p className="text-gray-600 mb-6">
                We're not just an education provider – we're your partner in career growth. Our comprehensive approach ensures you have everything you need to succeed.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Personalized career coaching and mentorship',
                  'Job placement assistance and employer connections',
                  'Lifetime access to course materials and updates',
                  'Networking opportunities with industry professionals',
                  'Continuous learning resources and alumni benefits'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0077B5] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="1.jpg" 
                alt="Students in classroom" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
import React from 'react';
import { CheckCircle, Users, Award, Briefcase, Clock, Globe } from 'lucide-react';

const Differentiators = () => {
  const features = [
    {
      id: 1,
      title: 'Industry-Relevant Curriculum',
      description: 'Our programs are designed in collaboration with industry leaders to ensure you learn skills that employers are actively seeking.',
      icon: <Briefcase className="h-12 w-12 text-white" />,
      bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience who bring real-world insights into the classroom.',
      icon: <Users className="h-12 w-12 text-white" />,
      bgImage: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Recognized Certifications',
      description: 'Earn credentials that are recognized and valued by employers worldwide, giving you a competitive edge in the job market.',
      icon: <Award className="h-12 w-12 text-white" />,
      bgImage: 'https://images.unsplash.com/photo-1546675615-1d4e8be89f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      title: 'Flexible Learning Options',
      description: 'Choose from online, hybrid, or in-person formats with schedules that fit your busy life and learning preferences.',
      icon: <Clock className="h-12 w-12 text-white" />,
      bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      title: 'Global Network',
      description: 'Join a community of learners and professionals from around the world, expanding your connections and opportunities.',
      icon: <Globe className="h-12 w-12 text-white" />,
      bgImage: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How We're Different</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique approach to education combines industry expertise, cutting-edge curriculum, and personalized support to ensure your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="relative group overflow-hidden rounded-lg h-[400px] shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077B5]/90 to-[#0077B5]/60 group-hover:from-[#0077B5]/95 group-hover:to-[#0077B5]/70 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center">
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
                src="./src/images/1741581292597.jpg" 
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
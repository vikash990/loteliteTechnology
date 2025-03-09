import React, { useState } from 'react';
import { Briefcase, GraduationCap, Globe, Award, Users, BookOpen, Laptop, Zap } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const services = [
    {
      id: 1,
      title: 'Professional Certifications',
      description: 'Industry-recognized certifications to validate your skills and boost your resume.',
      icon: <Award className="h-10 w-10 text-[#0077B5]" />,
      category: 'certifications'
    },
    {
      id: 2,
      title: 'Degree Programs',
      description: "Bachelor's and Master's degrees from prestigious universities around the world.",
      icon: <GraduationCap className="h-10 w-10 text-[#0077B5]" />,
      category: 'degrees'
    },
    {
      id: 3,
      title: 'Corporate Training',
      description: 'Customized training solutions for businesses to upskill their workforce.',
      icon: <Briefcase className="h-10 w-10 text-[#0077B5]" />,
      category: 'corporate'
    },
    {
      id: 4,
      title: 'Study Abroad',
      description: 'Opportunities to study at international universities and gain global exposure.',
      icon: <Globe className="h-10 w-10 text-[#0077B5]" />,
      category: 'international'
    },
    {
      id: 5,
      title: 'Bootcamps',
      description: 'Intensive, short-term programs focused on in-demand skills and job placement.',
      icon: <Zap className="h-10 w-10 text-[#0077B5]" />,
      category: 'bootcamps'
    },
    {
      id: 6,
      title: 'Career Services',
      description: 'Resume building, interview preparation, and job placement assistance.',
      icon: <Users className="h-10 w-10 text-[#0077B5]" />,
      category: 'career'
    },
    {
      id: 7,
      title: 'Online Courses',
      description: 'Self-paced learning with flexible schedules and expert instruction.',
      icon: <Laptop className="h-10 w-10 text-[#0077B5]" />,
      category: 'courses'
    },
    {
      id: 8,
      title: 'Mentorship Programs',
      description: 'One-on-one guidance from industry experts to accelerate your learning.',
      icon: <BookOpen className="h-10 w-10 text-[#0077B5]" />,
      category: 'mentorship'
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'degrees', label: 'Degrees' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'international', label: 'International' },
    { id: 'career', label: 'Career' }
  ];
  
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive education solutions designed to help you achieve your career goals and stay ahead in today's competitive job market.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10">
          <div className="flex overflow-x-auto pb-2 space-x-2 w-full justify-center">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#0077B5] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-[#0077B5] font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
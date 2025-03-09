import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';

const MainSection = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      key: 1,
      content: (
        <img
          src="1.jpg"
          alt="Tech Education"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    },
    {
      key: 2,
      content: (
        <img
          src="2.jpg"
          alt="Coding"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    },
    {
      key: 3,
      content: (
        <img
          src="3.jpg"
          alt="Business"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    }
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index)
  }));

  return (
    <div className="relative bg-gradient-to-r from-[#0077B5] to-[#005d8f] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Minimal content */}
          <div className="md:w-5/12">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Learn. Grow. <br />
              <span className="text-yellow-400">Succeed.</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our community of learners and transform your career with industry-leading certification programs.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-[#0077B5] font-bold rounded-full hover:bg-gray-100 transition-colors text-lg">
                Get Started
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-2xl">4.9</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">Student rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced 3D Carousel */}
          <div className="md:w-7/12">
            <div className="relative h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"></div>
              <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={2}
                showNavigation={false}
                animationConfig={{ tension: 120, friction: 14 }}
              />
              
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      goToSlide === index 
                        ? 'w-8 bg-white' 
                        : 'bg-white/50'
                    }`}
                    onClick={() => setGoToSlide(index)}
                  />
                ))}
              </div>

              {/* Stats badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 backdrop-blur-sm bg-white/90">
                <p className="font-bold text-gray-800 text-2xl">500K+</p>
                <p className="text-sm text-gray-600">Active learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
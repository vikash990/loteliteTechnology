import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0077B5] font-medium">
                Corporate Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Executive Programs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Leadership Training</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Custom Solutions</a>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0077B5] font-medium">
                MAANG Certificates <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Meta Certification</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Apple Development</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Amazon AWS</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Netflix Technology</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Google Cloud</a>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0077B5] font-medium">
                Foreign Exchange <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Study Abroad</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Exchange Programs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Global Internships</a>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0077B5] font-medium">
                Foreign Degree Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Bachelor's Programs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Master's Programs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0077B5] hover:text-white">Doctoral Programs</a>
              </div>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-[#0077B5] font-medium border border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors">
              Sign Up
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="space-y-3">
              <div>
                <button className="flex items-center justify-between w-full py-2 text-gray-700 font-medium">
                  Corporate Programs <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div>
                <button className="flex items-center justify-between w-full py-2 text-gray-700 font-medium">
                  MAANG Certificates <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div>
                <button className="flex items-center justify-between w-full py-2 text-gray-700 font-medium">
                  Foreign Exchange <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div>
                <button className="flex items-center justify-between w-full py-2 text-gray-700 font-medium">
                  Foreign Degree Programs <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col space-y-2 pt-3">
                <button className="w-full px-4 py-2 text-[#0077B5] font-medium border border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-colors">
                  Log In
                </button>
                <button className="w-full px-4 py-2 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
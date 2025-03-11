import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    // Reset form here if needed
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0077B5] text-white px-6 py-2 rounded-md hover:bg-[#005d8f] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-[#0077B5]" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@lotelitetechnology.com" className="text-[#0077B5] hover:underline">
                    contact@lotelitetechnology.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-[#0077B5]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-[#0077B5] hover:underline">
                    +91 9876543210
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#0077B5]" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                  Lotlite Technology Pvt Ltd. Office - 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Success!</h3>
            <p className="text-gray-600 mb-4">Your message has been submitted successfully.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-[#005d8f] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs; 
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
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
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#0077B5]" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Technology Street<br />
                    Silicon Valley, CA 94025<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 
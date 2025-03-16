import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { sendContactForm, ContactFormData } from '../services/api';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('Your message has been submitted successfully.');
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setModalMessage('Please fill out all required fields.');
      setIsError(true);
      setShowModal(true);
      return;
    }
    
    // Ensure message meets minimum length
    if (!formData.message || formData.message.trim().length < 10) {
      setModalMessage('Please provide a message with at least 10 characters.');
      setIsError(true);
      setShowModal(true);
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log('Form data being submitted:', formData);
      const result = await sendContactForm(formData);
      setModalMessage(result.message);
      setIsError(false);
      setShowModal(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit the form. Please try again.';
      setModalMessage(errorMessage);
      setIsError(true);
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-xs text-gray-500">(min. 10 characters)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5]"
                placeholder="Your message (minimum 10 characters)"
                value={formData.message}
                onChange={handleChange}
                minLength={10}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#0077B5] text-white px-6 py-2 rounded-md hover:bg-[#005d8f] transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
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

      {/* Response Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{isError ? 'Error' : 'Success!'}</h3>
            <p className={`${isError ? 'text-red-600' : 'text-gray-600'} mb-4`}>{modalMessage}</p>
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
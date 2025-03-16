// API service for connecting to the backend
import { API_BASE_URL } from './config';

// Interface for contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// Function to send a contact/reservation form to the backend
export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Make sure we have a message (required by the backend)
    if (!formData.message || formData.message.trim() === '') {
      formData.message = `Contact request from ${formData.firstName} ${formData.lastName}`;
    }
    
    // Make sure the message is at least 10 characters (schema requirement)
    if (formData.message.length < 10) {
      formData.message = formData.message.padEnd(10, ' ');
    }
    
    console.log('Sending data to backend:', formData);
    console.log('API URL:', API_BASE_URL);
    
    // Add timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch(`${API_BASE_URL}/reservation/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      const data = await response.json();
      console.log('Response from backend:', data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return data;
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timed out. The server may be down or unreachable.');
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Error sending contact form:', error);
    
    // Provide more specific error messages
    if (error.message === 'Failed to fetch') {
      throw new Error('Cannot connect to the server. Please check your internet connection and try again, or contact support if the problem persists.');
    }
    
    throw error;
  }
};

// Add more API functions as needed 
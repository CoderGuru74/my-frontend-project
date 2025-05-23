import React, { useState } from 'react';
import { useScrollAnimation } from '../../utils/animations';
import { EmergencyContact } from '../../types';

const emergencyContacts: EmergencyContact[] = [
  { id: 1, name: 'National Emergency Number', number: '112', category: 'Emergency' },
  { id: 2, name: 'Police', number: '100', category: 'Emergency' },
  { id: 3, name: 'Ambulance', number: '108', category: 'Emergency' },
  { id: 4, name: 'Fire', number: '101', category: 'Emergency' },
  { id: 5, name: 'Road Accident Emergency', number: '1073', category: 'Road Specific' },
  { id: 6, name: 'Highway Patrol', number: '1033', category: 'Road Specific' },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[#F5DF4D] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about the AI Helmet project or want to collaborate? 
            Reach out to our team using the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5DF4D] focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5DF4D] focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5DF4D] focus:border-transparent"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5DF4D] focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#F5DF4D] text-black px-6 py-3 rounded-md font-medium hover:bg-[#F5DF4D]/80 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information & Emergency Numbers */}
          <div className="flex flex-col gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#F5DF4D]/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <svg className="text-[#F5DF4D] w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F5DF4D]/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <svg className="text-[#F5DF4D] w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@aihelmet.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F5DF4D]/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <svg className="text-[#F5DF4D] w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      123 Innovation Hub, Tech Park<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 hover:bg-[#F5DF4D] text-gray-700 hover:text-black p-2 rounded-full transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 hover:bg-[#F5DF4D] text-gray-700 hover:text-black p-2 rounded-full transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 hover:bg-[#F5DF4D] text-gray-700 hover:text-black p-2 rounded-full transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 hover:bg-[#F5DF4D] text-gray-700 hover:text-black p-2 rounded-full transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Emergency Numbers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Emergency Contacts</h3>
              
              <div className="space-y-4">
                {emergencyContacts.map(contact => (
                  <div key={contact.id} className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{contact.name}</h4>
                      <p className="text-sm text-gray-500">{contact.category}</p>
                    </div>
                    <div className="font-bold text-lg text-[#FF304F]">{contact.number}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  In case of emergency, always call the appropriate emergency number first.
                  The AI Helmet system is designed to automatically contact emergency services
                  when an accident is detected, but manual calls are always recommended as a backup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
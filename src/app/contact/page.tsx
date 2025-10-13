// src/app/contact/page.tsx - FINAL FIX
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-extrabold text-primary-color mb-4 border-b-2 border-secondary-color inline-block pb-1">
        Get in Touch
      </h1>
      <p className="text-lg text-text-color mb-8">
        We&apos;d love to hear from you! Please reach out to us with any questions or feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Phone Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-color flex items-start space-x-4">
          <Phone size={24} className="text-primary-color flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-text-color mb-1">Call Us</h2>
            <p className="text-gray-600">Place an order or inquire:</p>
            <a 
                href="tel:+917059068366" 
                className="text-secondary-color font-bold hover:text-accent-color transition-colors"
            >
                +91 7059068366
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-color flex items-start space-x-4">
          <Mail size={24} className="text-primary-color flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-text-color mb-1">Email</h2>
            <p className="text-gray-600">General inquiries:</p>
            <a 
                href="mailto:example@books.shyamnagar.com" 
                className="text-secondary-color font-bold hover:text-accent-color transition-colors"
            >
                example@books.shyamnagar.com
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-color flex items-start space-x-4">
          <MapPin size={24} className="text-primary-color flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-text-color mb-1">Location</h2>
            <p className="text-gray-600">Serving the Shyamnagar area.</p>
            <p className="text-secondary-color font-bold">West Bengal, India</p>
          </div>
        </div>
      </div>
      
      {/* Basic Map Placeholder/Form Placeholder */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-text-color mb-4">Send Us a Message</h2>
        <p className="text-gray-600">
            For complex inquiries, please email us directly, or call the number above.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

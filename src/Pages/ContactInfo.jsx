import React from 'react';

const ContactInfo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Contact Information</h1>
      <p className="text-center text-gray-600 mt-2">
        Get in touch with us for support, inquiries, or feedback.
      </p>

      <div className="mt-8 space-y-6">
        <div className="bg-white p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>Phone:</strong> +880 123 456 7890
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> support@appgallery.com
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Street, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-6 justify-center">
            <a
              href="https://facebook.com/appgallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/appgallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/appgallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

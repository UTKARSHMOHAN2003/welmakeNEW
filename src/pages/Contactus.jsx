import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 text-white bg-[#005486] rounded-md hover:bg-blue-700 transition"
              >
                <FaPaperPlane className="mr-2" /> Send
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <span className="text-gray-800">
                  9 Vivekanand Puram, Indore, M.P.
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9+Vivekanand+Puram+Bangarda,+Indore,+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 ml-2 underline"
                  >
                    Get Directions
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-2" />
                <span className="text-gray-800">+91 7773003300</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-2" />
                <span className="text-gray-800">
                  guptasprochemhouse@gmail.com
                </span>
              </div>
              <div className="flex items-start">
                <FaClock className="text-blue-600 mt-1" />
                <div className="ml-3">
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h2>
          <div className="w-full h-72 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.576138273017!2d75.857727!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfc70f3b4a5%3A0x5f0b4a2a4b0f5e2!2s9%20Vivekanand%20Puram%20Bangarda%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1711900000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contactus;

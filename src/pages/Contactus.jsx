import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
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
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError, setMapError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
          version: "weekly",
        });
        await loader.load();
        const google = window.google;
        const { Map, Marker } = google.maps;
        const location = { lat: 40.7128, lng: -74.006 };

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, {
          center: location,
          zoom: 15,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });

        new Marker({ position: location, map, title: "TechCorp Headquarters" });
        setMapLoading(false);
      } catch (error) {
        setMapError("Failed to load the map. Please check your API key.");
        setMapLoading(false);
      }
    };
    initMap();
  }, []);

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
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
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
          <div className="w-full h-72 rounded-lg overflow-hidden relative">
            {mapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
            {mapError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p className="text-red-600">{mapError}</p>
              </div>
            )}
            <div
              ref={mapRef}
              className="w-full h-full rounded-lg"
              style={{ opacity: mapLoading ? 0 : 1 }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contactus;

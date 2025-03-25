import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    { id: 1, name: "Sarah Johnson", role: "CEO" },
    { id: 2, name: "Michael Chen", role: "CTO" },
    { id: 3, name: "Olivia Rodriguez", role: "CFO" },
    { id: 4, name: "David Wilson", role: "COO" },
    { id: 5, name: "Emily Taylor", role: "CMO" },
  ];

  // Partner companies data
  const partners = [
    "Microsoft",
    "Google",
    "Amazon",
    "Apple",
    "Tesla",
    "IBM",
    "Oracle",
  ];

  // States for carousels
  const [teamIndex, setTeamIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  // Function to handle team carousel navigation
  const navigateTeam = (direction) => {
    if (direction === "next") {
      setTeamIndex((prev) => (prev + 1) % (teamMembers.length - 2));
    } else {
      setTeamIndex((prev) => (prev === 0 ? teamMembers.length - 3 : prev - 1));
    }
  };

  // Function to handle partner carousel navigation
  const navigatePartners = (direction) => {
    if (direction === "next") {
      setPartnerIndex((prev) => (prev + 1) % (partners.length - 3));
    } else {
      setPartnerIndex((prev) => (prev === 0 ? partners.length - 4 : prev - 1));
    }
  };

  // Auto advance carousels
  useEffect(() => {
    const teamInterval = setInterval(() => {
      navigateTeam("next");
    }, 5000);

    const partnerInterval = setInterval(() => {
      navigatePartners("next");
    }, 4000);

    return () => {
      clearInterval(teamInterval);
      clearInterval(partnerInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Logo and Header Section */}
      <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">
          Video of Company Management
        </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
      </div>

      {/* Yellow Description Section */}
      <div className="bg-Byellow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-baloo leading-relaxed text-center space-y-4">
            <span className="block mb-4">
              Our company's management team consists of industry leaders with
              decades of combined experience. We believe in transparent
              leadership, innovative solutions, and putting our clients first.
            </span>
            <span className="block mb-4">
              Watch our video to learn more about our management philosophy and
              how we drive results for our partners and clients. Each member of
              our leadership team brings unique perspectives and expertise to
              help guide our organization.
            </span>
            <span className="block">
              Through strategic vision and collaborative efforts, we've
              established ourselves as a leader in the industry, consistently
              delivering value and exceptional results to our clients worldwide.
            </span>
          </p>
        </div>
      </div>

      {/* Team Section with Carousel */}
      <div className="bg-[#005486] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold font-baloo text-center uppercase mb-12">
          Meet Our Team
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Team Carousel Navigation */}
          <button
            onClick={() => navigateTeam("prev")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-blue-700 p-2 rounded-full z-10 text-white hover:bg-blue-600 transition-colors"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Show 3 team members at a time */}
            {[0, 1, 2].map((offset) => {
              const member =
                teamMembers[(teamIndex + offset) % teamMembers.length];
              return (
                <div key={member.id} className="flex flex-col items-center">
                  <div className="bg-yellow-400 w-full aspect-square mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"></div>
                  <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => navigateTeam("next")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-blue-700 p-2 rounded-full z-10 text-white hover:bg-blue-600 transition-colors"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: teamMembers.length - 2 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTeamIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === teamIndex ? "bg-yellow-400" : "bg-blue-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section with Carousel */}
      <div className="bg-Byellow py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl font-medium font-baloo mb-10 text-blue-900">
          Trusted by the best companies worldwide
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Partners Carousel Navigation */}
          <button
            onClick={() => navigatePartners("prev")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-yellow-300 p-2 rounded-full z-10 text-blue-800 hover:bg-yellow-400 transition-colors"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            {/* Show partners at a time */}
            {[0, 1, 2].map((offset) => {
              const partner =
                partners[(partnerIndex + offset) % partners.length];
              return (
                <div
                  key={offset}
                  className="bg-yellow-300 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center w-full sm:w-1/2 lg:w-1/4"
                >
                  <span className="font-medium text-blue-900">{partner}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => navigatePartners("next")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-yellow-300 p-2 rounded-full z-10 text-blue-800 hover:bg-yellow-400 transition-colors"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: partners.length - 3 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPartnerIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === partnerIndex ? "bg-yellow-400" : "bg-yellow-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
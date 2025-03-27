import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, User, Building2 } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Separate component for carousel navigation
const CarouselNavigation = ({ 
  onPrev, 
  onNext, 
  indicators, 
  currentIndex, 
  onIndicatorClick,
  indicatorActiveClass,
  indicatorInactiveClass 
}) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-blue-700 p-2 rounded-full z-10 text-white hover:bg-blue-600 transition-colors"
      aria-label="Previous"
    >
      <ChevronLeft size={24} />
    </button>

    <button
      onClick={onNext}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-blue-700 p-2 rounded-full z-10 text-white hover:bg-blue-600 transition-colors"
      aria-label="Next"
    >
      <ChevronRight size={24} />
    </button>

    <div className="flex justify-center mt-8 space-x-2">
      {indicators.map((_, idx) => (
        <button
          key={idx}
          onClick={() => onIndicatorClick(idx)}
          className={`w-3 h-3 rounded-full transition-colors ${
            idx === currentIndex ? indicatorActiveClass : indicatorInactiveClass
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  </>
);

const AboutUs = () => {
  // Team members data with additional information
  const teamMembers = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      role: "CEO", 
      bio: "Visionary leader with 20+ years of strategic management experience.",
      specialties: ["Strategic Planning", "Innovation", "Global Business"]
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      role: "CTO", 
      bio: "Tech innovator driving digital transformation and cutting-edge solutions.",
      specialties: ["Technology Strategy", "AI", "Product Development"]
    },
    { 
      id: 3, 
      name: "Olivia Rodriguez", 
      role: "CFO", 
      bio: "Financial expert ensuring sustainable growth and fiscal responsibility.",
      specialties: ["Financial Strategy", "Risk Management", "Investment"]
    },
    { 
      id: 4, 
      name: "David Wilson", 
      role: "COO", 
      bio: "Operations mastermind optimizing efficiency and operational excellence.",
      specialties: ["Process Optimization", "Supply Chain", "Organizational Development"]
    },
    { 
      id: 5, 
      name: "Emily Taylor", 
      role: "CMO", 
      bio: "Marketing strategist building powerful brand narratives and customer connections.",
      specialties: ["Brand Strategy", "Digital Marketing", "Customer Experience"]
    }
  ];

  // Partner companies data
  const partners = [
    "Microsoft",
    "Google", 
    "Amazon", 
    "Apple", 
    "Tesla", 
    "IBM", 
    "Oracle"
  ];

  // States for carousels
  const [teamIndex, setTeamIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  // Memoized navigation functions with improved logic
  const navigateTeam = useMemo(() => (direction) => {
    setTeamIndex((prev) => {
      const maxIndex = teamMembers.length - 3;
      if (direction === "next") {
        return (prev + 1) % maxIndex;
      }
      return prev === 0 ? maxIndex - 1 : prev - 1;
    });
  }, [teamMembers.length]);

  const navigatePartners = useMemo(() => (direction) => {
    setPartnerIndex((prev) => {
      const maxIndex = partners.length - 3;
      if (direction === "next") {
        return (prev + 1) % maxIndex;
      }
      return prev === 0 ? maxIndex - 1 : prev - 1;
    });
  }, [partners.length]);

  // Auto-advance carousels with cleanup
  useEffect(() => {
    const teamInterval = setInterval(() => navigateTeam("next"), 5000);
    const partnerInterval = setInterval(() => navigatePartners("next"), 4000);

    return () => {
      clearInterval(teamInterval);
      clearInterval(partnerInterval);
    };
  }, [navigateTeam, navigatePartners]);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[0, 1, 2].map((offset) => {
              const member = teamMembers[(teamIndex + offset) % teamMembers.length];
              return (
                <div key={member.id} className="flex flex-col items-center">
                  <div className="bg-yellow-400 w-full aspect-square mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"></div>
                  <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              );
            })}
          </div>

          <CarouselNavigation
            onPrev={() => navigateTeam("prev")}
            onNext={() => navigateTeam("next")}
            indicators={Array.from({ length: teamMembers.length - 2 })}
            currentIndex={teamIndex}
            onIndicatorClick={setTeamIndex}
            indicatorActiveClass="bg-yellow-400"
            indicatorInactiveClass="bg-blue-600"
          />
        </div>
      </div>

      {/* Partners Section with Carousel */}
      <div className="bg-Byellow py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl font-medium font-baloo mb-10 text-blue-900">
          Trusted by the best companies worldwide
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {[0, 1, 2].map((offset) => {
              const partner = partners[(partnerIndex + offset) % partners.length];
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

          <CarouselNavigation
            onPrev={() => navigatePartners("prev")}
            onNext={() => navigatePartners("next")}
            indicators={Array.from({ length: partners.length - 3 })}
            currentIndex={partnerIndex}
            onIndicatorClick={setPartnerIndex}
            indicatorActiveClass="bg-yellow-400"
            indicatorInactiveClass="bg-yellow-200"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
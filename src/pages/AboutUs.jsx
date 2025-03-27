import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
  // Team members data
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

  // Slick Carousel settings for team members
  const teamSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Slick Carousel settings for partners
  const partnerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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

      {/* Team Section with Slick Carousel */}
      <div className="bg-[#005486] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold font-baloo text-center uppercase mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto ">
          <Slider {...teamSliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="px-4">
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 w-full aspect-square mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"></div>
                  <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Partners Section with Slick Carousel */}
      <div className="bg-Byellow py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl font-medium font-baloo mb-10 text-blue-900">
          Trusted by the best companies worldwide
        </p>

        <div className="max-w-6xl mx-auto">
          <Slider {...partnerSliderSettings}>
            {partners.map((partner) => (
              <div key={partner} className="px-4">
                <div className="bg-yellow-300 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                  <span className="font-medium text-blue-900">{partner}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
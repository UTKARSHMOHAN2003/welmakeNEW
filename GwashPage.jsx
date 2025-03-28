import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection2Gwash from '../Components/gwash/Herosection2Gwash';
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa';
import AutocarouselGwash from '../Components/gwash/AutocarouselGwah';

function GwashPage() {
  return (
    <div>
       {/* navbar  */}
       <Navbar/>
       {/* main gwash section */}
       
      <HeroSection2Gwash/>
      <AutocarouselGwash/>
      {/* buy section  */}
      <div className="min-h-screen bg-[#00527A] flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-fade-in">
        <h1 className="text-white text-2xl font-bold text-center mb-8 animate-slide-down">
          BUY THIS PRODUCT THROUGH WHATSAPP
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-48 h-64 bg-white rounded-lg p-4 shadow-lg animate-float">
            <img 
              src="https://images.unsplash.com/photo-1585441695325-21557ef66366?auto=format&fit=crop&q=80&w=1000"
              alt="G-Wash Liquid"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="text-white animate-slide-right">
            <h2 className="text-2xl font-semibold mb-4">G-Wash Liquid</h2>
            <div className="space-y-2">
              <p className="text-xl">₹95.00</p>
              <p className="text-lg">₹95.00 / Per Box</p>
            </div>
          </div>
        </div>
        
        <a 
          href="https://wa.me/+917773003300?text=I'm%20interested%20in%20buying%20G-Wash%20Liquid"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 w-full max-w-xs mx-auto animate-bounce-subtle hover:scale-105 hover:shadow-lg"
        >
          <WhatsappIcon size={24} />
          ORDER NOW
        </a>
      </div>
    </div>



































       {/* footer */}
       <Footer/>
    </div>
  )
}

export default GwashPage

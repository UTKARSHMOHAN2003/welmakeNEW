import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection3dr7 from '../Components/dr7/HeroSection3dr7'
import Autocaroseldr7 from '../Components/dr7/Autocaroseldr7';
function Dr7Page() {
  return (
    <div>
        {/* navbar  */}
        <Navbar/>
       {/* main dr7 section */}
       <HeroSection3dr7/>
       <Autocaroseldr7/>
       {/* footer */}
       <Footer/>
    </div>
  )
}

export default Dr7Page

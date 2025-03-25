import React, { useEffect } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import hero from "../assets/hero.mp4";

export default function ShareMoments() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col bg-gray-100 min-h-[70vh] w-full p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left content section */}
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0 lg:ml-12 xl:ml-24">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-baloo text-blue-800 mb-6 lg:mb-10 mx-4 md:mx-8 lg:mx-12">
            SHARE YOUR
            <br />
            MOMENTS
          </h1>

          {/* Follow Us Section */}
          <div>
            <p className="text-xl font-bold font-baloo text-blue-800 mb-2 mx-4 md:mx-8 lg:mx-12">
              FOLLOW US
            </p>
            <div className="flex space-x-2 bg-white p-2 shadow-md rounded-lg w-fit mx-4 md:mx-8 lg:mx-12">
              <div className="bg-black rounded-full p-2 md:p-3">
                <Instagram className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="bg-black rounded-full p-2 md:p-3">
                <Facebook className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="bg-black rounded-full p-2 md:p-3">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Phone-style video container */}
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <div className="relative w-64 sm:w-72 md:w-80 h-[360px] sm:h-[420px] md:h-[480px] bg-black rounded-3xl shadow-xl flex flex-col items-center p-2 md:p-3">
            {/* Phone notch */}
            <div className="w-20 sm:w-24 md:w-28 h-5 md:h-7 bg-black rounded-b-xl absolute top-0"></div>

            {/* Phone screen with actual video */}
            <div className="bg-gray-200 w-full h-full rounded-xl md:rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={hero}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Phone home button */}
            <div className="w-24 sm:w-28 md:w-36 h-1 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-4xl md:text-5xl lg:text-8xl font-bold font-baloo mt-6 text-blue-800 mb-2 mx-4 md:mx-8 lg:mx-12">
        @WELMAKE
      </div>

      {/* Instagram EmbedSocial Feed Below the Section */}
      <div className="w-full mt-10 ">
        <div
          className="embedsocial-hashtag "
          data-ref="5e2b3614feef10d2f4a99ffee6c869be3268f68f"
        ></div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.instagram.com/welmake_india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#C2803D] text-white font-baloo font-semibold rounded-md px-4 py-2 m-6 text-2xl hover:bg-amber-600 transition-all">
              FOLLOW US
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

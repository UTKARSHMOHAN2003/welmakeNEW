import React from "react";
import { motion } from "framer-motion";
import detergent from "../assets/detergent.png";
import ModelViewer from "./ModelViewer";


const features = [
  { title: "AFFORDABLE"  , position: "top-left" },
  { title: "MADE IN INDIA" , position: "top-right" },
  { title: "TRUST-QUALITY" , position: "bottom-left" },
  { title: "ECO-FRIENDLY" , position: "bottom-right" },
];

function FeaturesSection() {
  return (
    <div className="bg-Byellow py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-5xl font-baloo md:text-8xl  font-extrabold text-[#005486] ">
            WHY WELMAKE
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <button className="mr-4 bg-[#C2803D]  text-white font-baloo font-semibold rounded-md px-4 py-2 text-lg hover:bg-amber-600 transition-all">
              DETERGENT
            </button>
            <button className="mr-4 bg-[#C2803D]  text-white font-semibold rounded-md text-xl font-baloo px-6 py-2 hover:bg-amber-600 transition-all">
              CAKE
            </button>
          </div>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:flex font-baloo font-bold relative h-[400px] items-center justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`absolute flex flex-col items-center text-[#005486] font-extrabold text-2xl sm:text-3xl md:text-4xl 
              ${feature.position.includes("top") ? "top-[10%]" : "bottom-[10%]"} 
              ${feature.position.includes("left") ? "left-[15%]" : "right-[15%]"}`}
              initial={{ opacity: 0, x: index < 2 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="text-center">{feature.title}</span>
              
            </motion.div>
          ))}
          {/* Central Product Display */}
          <ModelViewer />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center space-y-6 mt-10">
          {/* Animated Product Image */}
          <motion.img
            src={detergent}
            alt="Welmake Detergent"
            className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 w-full px-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center text-[#005486] font-baloo font-extrabold text-xl sm:text-2xl bg-yellow-300 px-6 py-3 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span>{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;

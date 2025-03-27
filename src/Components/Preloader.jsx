import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function BubblePreloader() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#FFFBF2] flex items-center justify-center z-[1000] overflow-hidden">
      {/* Multiple gradient bubbles */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-blue-500/40 to-yellow-500/40"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)",
          }}
          initial={{ 
            y: "100vh",
            x: 0,
            opacity: 0.4 
          }}
          animate={{ 
            y: "-20vh",
            x: Math.random() * 100 - 50,
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.01, // Much shorter delays between bubbles
            ease: "easeOut"
          }}
        >
          <motion.div 
            className="absolute inset-1 rounded-full bg-gradient-to-tr from-yellow-400/30 to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default BubblePreloader;
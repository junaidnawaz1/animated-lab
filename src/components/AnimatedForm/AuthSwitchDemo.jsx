// "use client";
// import React from "react";
// import AuthSwitch from "./AuthSwitch";

// export default function AuthSwitchDemo() {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      
//       {/* Animated Background Circles */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-20 dark:opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full">
//         <AuthSwitch />
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import AuthSwitch from "./AuthSwitch";
import { motion } from "framer-motion";

export default function AuthSwitchDemo() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-[1000px]">
        {/* Animated Grid with 3D Rotation */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'rotateX(60deg) translateY(-200px)',
            transformOrigin: 'top',
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* Floating 3D "Cards" in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: -1000,
              x: Math.random() * 1000 - 500
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute bottom-0 left-1/2 w-20 h-20 bg-white/5 border border-white/10 rounded-xl"
          />
        ))}
      </div>

      {/* Content */}
<div className="relative z-10 w-full flex flex-col items-center">
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="w-full max-w-5xl" // Added max-w-5xl here
  >
    <AuthSwitch />
  </motion.div>
  
  <p className="mt-8 text-gray-500 text-xl font-bold tracking-[0.3em] uppercase opacity-50">
    Happy Coding by Junaid Nawaz
  </p>
</div>
    </div>
  );
}
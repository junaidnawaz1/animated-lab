// "use client";
// import React, { useState, useRef } from "react";
// import { Star, MessageCircle, UserPlus } from "lucide-react";

// /**
//  * ProfileCard Component with Spotlight Effect
//  * 
//  * @param {Object} props
//  * @param {string} props.name - User's name
//  * @param {string} props.role - User's role/title
//  * @param {string} props.status - online/offline/away
//  * @param {string} props.avatar - Avatar image URL
//  * @param {string[]} props.tags - Tags like ["Premium"]
//  * @param {boolean} props.isVerified - Show verified badge
//  * @param {number} props.followers - Follower count
//  * @param {string} props.accentColor - Card accent color (blue/purple/pink)
//  */
// function ProfileCard({
//   name,
//   role,
//   status = "offline",
//   avatar,
//   tags = [],
//   isVerified = false,
//   followers,
//   accentColor = "blue",
// }) {
//   const cardRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Handle mouse move for spotlight effect
//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   // Get colors based on accent
//   const getAccentColors = () => {
//     switch (accentColor) {
//       case "purple":
//         return {
//           spotlight: "rgba(168, 85, 247, 0.2)",
//           border: "border-purple-200 dark:border-purple-700",
//           tagBg: "group-hover:bg-purple-50 dark:group-hover:bg-purple-900/30",
//           tagText: "text-purple-600 dark:text-purple-400",
//           buttonBg: "group-hover:bg-purple-50 dark:group-hover:bg-purple-900/30",
//           buttonText: "text-purple-600 dark:text-purple-400",
//           glow: "group-hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]",
//           ringGlow: "border-purple-400 dark:border-purple-500",
//         };
//       case "pink":
//         return {
//           spotlight: "rgba(236, 72, 153, 0.2)",
//           border: "border-pink-200 dark:border-pink-700",
//           tagBg: "group-hover:bg-pink-50 dark:group-hover:bg-pink-900/30",
//           tagText: "text-pink-600 dark:text-pink-400",
//           buttonBg: "group-hover:bg-pink-50 dark:group-hover:bg-pink-900/30",
//           buttonText: "text-pink-600 dark:text-pink-400",
//           glow: "group-hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]",
//           ringGlow: "border-pink-400 dark:border-pink-500",
//         };
//       case "green":
//         return {
//           spotlight: "rgba(34, 197, 94, 0.2)",
//           border: "border-green-200 dark:border-green-700",
//           tagBg: "group-hover:bg-green-50 dark:group-hover:bg-green-900/30",
//           tagText: "text-green-600 dark:text-green-400",
//           buttonBg: "group-hover:bg-green-50 dark:group-hover:bg-green-900/30",
//           buttonText: "text-green-600 dark:text-green-400",
//           glow: "group-hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]",
//           ringGlow: "border-green-400 dark:border-green-500",
//         };
//       default: // blue
//         return {
//           spotlight: "rgba(59, 130, 246, 0.2)",
//           border: "border-blue-200 dark:border-blue-700",
//           tagBg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30",
//           tagText: "text-blue-600 dark:text-blue-400",
//           buttonBg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30",
//           buttonText: "text-blue-600 dark:text-blue-400",
//           glow: "group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]",
//           ringGlow: "border-blue-400 dark:border-blue-500",
//         };
//     }
//   };

//   const colors = getAccentColors();

//   // Status color helper
//   const getStatusColor = () => {
//     if (status === "online") return "bg-green-500";
//     if (status === "away") return "bg-amber-500";
//     return "bg-gray-400";
//   };

//   const getStatusGlow = () => {
//     if (status === "online")
//       return "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]";
//     return "";
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-6 w-80 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] dark:shadow-[12px_12px_24px_rgba(0,0,0,0.3),-12px_-12px_24px_rgba(255,255,255,0.1)] transition-all duration-500 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.2),-20px_-20px_40px_rgba(255,255,255,1)] dark:hover:shadow-[20px_20px_40px_rgba(0,0,0,0.4),-20px_-20px_40px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-2"
//     >
//       {/* Spotlight Effect - Enhanced */}
//       {isHovering && (
//         <div
//           className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
//           style={{
//             background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors.spotlight}, transparent 50%)`,
//           }}
//         />
//       )}

//       {/* Status Indicator */}
//       <div className="absolute right-4 top-4 z-10">
//         <div className="relative">
//           <div
//             className={`h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 transition-all duration-300 group-hover:scale-125 ${getStatusColor()} ${getStatusGlow()}`}
//           ></div>
//           {status === "online" && (
//             <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-30"></div>
//           )}
//         </div>
//       </div>

//       {/* Verified Badge */}
//       {isVerified && (
//         <div className="absolute right-4 top-10 z-10">
//           <div className="rounded-full bg-blue-500 dark:bg-blue-600 p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
//             <Star className="h-3 w-3 fill-white text-white" />
//           </div>
//         </div>
//       )}

//       {/* Profile Photo */}
//       <div className="mb-4 flex justify-center relative z-10">
//         <div className="relative group-hover:animate-pulse">
//           <div className="h-28 w-28 overflow-hidden rounded-full bg-white dark:bg-gray-700 p-1 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,1)] dark:group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.4),inset_-8px_-8px_16px_rgba(255,255,255,0.15)] group-hover:scale-110">
//             <img
//               src={avatar}
//               alt={name}
//               className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//           </div>
//           {/* Glowing ring on hover */}
//           <div
//             className={`absolute inset-0 rounded-full border-2 ${colors.ringGlow} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
//           ></div>
//         </div>
//       </div>

//       {/* Profile Info */}
//       <div className="text-center relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
//         <h3
//           className={`text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 ${colors.buttonText}`}
//         >
//           {name}
//         </h3>
//         <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
//           {role}
//         </p>

//         {followers && (
//           <p
//             className={`mt-2 text-xs text-gray-400 dark:text-gray-500 transition-all duration-300 ${colors.buttonText} group-hover:font-medium`}
//           >
//             {followers.toLocaleString()} followers
//           </p>
//         )}
//       </div>

//       {/* Tags */}
//       {tags.length > 0 && (
//         <div className="mt-4 flex justify-center gap-2 relative z-10">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className={`inline-block rounded-full bg-white dark:bg-gray-700 px-3 py-1 text-xs font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.1)] transition-all duration-300 ${colors.tagText} ${colors.tagBg} ${colors.glow} group-hover:scale-105`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Action Buttons */}
//       <div className="mt-6 flex gap-2 relative z-10">
//         <button
//           className={`flex-1 rounded-full bg-white dark:bg-gray-700 py-4 text-sm font-medium ${colors.buttonText} shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.05)] hover:scale-95 active:scale-90 ${colors.buttonBg}`}
//         >
//           <UserPlus className="mx-auto h-4 w-4 transition-transform duration-300 hover:scale-110" />
//         </button>
//         <button className="flex-1 rounded-full bg-white dark:bg-gray-700 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.05)] hover:scale-95 active:scale-90 group-hover:bg-gray-50 dark:group-hover:bg-gray-600">
//           <MessageCircle className="mx-auto h-4 w-4 transition-transform duration-300 hover:scale-110" />
//         </button>
//       </div>

//       {/* Animated border on hover */}
//       <div
//         className={`absolute inset-0 rounded-3xl border ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
//       ></div>
//     </div>
//   );
// }

// export default ProfileCard;

"use client"

import React, { useState, useRef } from "react"
import { Star, MessageCircle, UserPlus, Zap, Frown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AnimatedProfileDemo() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center w-full p-8 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {/* Previous Cards (Simplified list for space) */}
        <ProfileCard name="Alex Thompson" role="UI/UX Designer" status="online" avatar="https://ik.imagekit.io/fpxbgsota/memoji-alex.png?updatedAt=1752933824067" variant="blue" />
        <ProfileCard name="Sarah Jenkins" role="Frontend Engineer" status="online" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" variant="purple" followers={246} hasSpotlight={true} />
        <ProfileCard name="Marcus Chen" role="Product Designer" status="away" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" variant="emerald" followers={346} hasSimpleTilt={true} />
        <ProfileCard name="Jordan Wells" role="Creative Director" status="online" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan" variant="amber" followers={646} isMagnetic={true} />

        {/* CARD 5: The "Moody Pixel" - Top Center Avatar + Mouse Follow + Spotlight */}
        <ProfileCard 
          name="Moody Pixel"
          role="Ghost Architect"
          status="online"
          // Sad/Moody Pixel Avatar
          avatar="https://thumbs.dreamstime.com/b/happy-little-boy-smile-his-face-avatar-portrait-cute-kid-good-mood-positive-emotions-joyful-child-satisfied-facial-412424330.jpg"
          tags={["Shadow", "Silent"]}
          isVerified={true}
          followers={666}
          variant="slate"
          isMagnetic={true} // Makes it follow the mouse
          hasSpotlight={true} // Adds the moving light
          designType="topCenter"
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </div>
  )
}

function ProfileCard({ 
  name, role, status, avatar, tags = [], isVerified, followers = 0, 
  variant = "blue", hasSpotlight = false, hasSimpleTilt = false, isMagnetic = false,
  designType = "classic" 
}) {
  const cardRef = useRef(null);
  const [mouseData, setMouseData] = useState({ x: 0, y: 0, opacity: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isMagnetic) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 12; // Smooth tilt
      const rotateY = (centerX - x) / 12;
      setMouseData({ x, y, opacity: 1, rotateX, rotateY });
    } else {
      setMouseData(prev => ({ ...prev, x, y, opacity: 1 }));
    }
  };

  const colors = {
    blue: { text: "text-blue-500", bg: "bg-blue-500", glow: "rgba(59, 130, 246, 0.1)" },
    purple: { text: "text-purple-500", bg: "bg-purple-500", glow: "rgba(168, 85, 247, 0.1)" },
    emerald: { text: "text-emerald-500", bg: "bg-emerald-500", glow: "rgba(16, 185, 129, 0.1)" },
    amber: { text: "text-amber-500", bg: "bg-amber-500", glow: "rgba(245, 158, 11, 0.15)" },
    slate: { text: "text-gray-400", bg: "bg-gray-600", glow: "rgba(255, 255, 255, 0.1)" }
  }[variant];

  const isTopCenter = designType === "topCenter";

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseData({ x: 0, y: 0, opacity: 0, rotateX: 0, rotateY: 0 })}
      style={{
        transform: isMagnetic ? `perspective(1000px) rotateX(${mouseData.rotateX}deg) rotateY(${mouseData.rotateY}deg)` : undefined,
        transition: mouseData.opacity === 0 ? "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.1s ease-out"
      }}
      className={cn(
        "group relative rounded-[2rem] bg-white dark:bg-gray-900/80 backdrop-blur-xl p-6 w-72 transition-all duration-500 shadow-2xl border border-white/10",
        isTopCenter ? "mt-10 overflow-visible" : "overflow-hidden",
        !isMagnetic && (hasSimpleTilt ? "hover:rotate-2 hover:-translate-y-3" : "hover:scale-105 hover:-translate-y-2")
      )}
    >
      {/* Moving Spotlight */}
      {hasSpotlight && (
        <div 
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 140px at ${mouseData.x}px ${mouseData.y}px, ${colors.glow.replace('0.1', '0.3')}, transparent)`,
            opacity: mouseData.opacity
          }}
        />
      )}

      {/* Top Center Floating Avatar */}
      <div className={cn("relative z-10 flex justify-center", isTopCenter ? "-mt-16 mb-4" : "mb-4")}>
        <div className={cn(
          "rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2",
          isTopCenter ? "h-28 w-28 rotate-3 group-hover:rotate-0" : "h-24 w-24 rounded-full"
        )}>
          <img src={avatar} alt={name} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="text-center relative z-10">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tighter flex items-center justify-center gap-2">
          {name}
          {isVerified && <Frown className="h-4 w-4 text-gray-500" />}
        </h3>
        <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-4">{role}</p>
        
        <div className="flex justify-center gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 rounded-md text-[9px] font-bold bg-black/5 dark:bg-white/5 text-gray-500 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 relative z-10">
        <button className="flex-1 py-3 rounded-xl bg-gray-900 dark:bg-white dark:text-black text-white text-xs font-black transition-all hover:scale-105 active:scale-95 shadow-xl">
          CONNECT
        </button>
        <button className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
          <MessageCircle size={18} />
        </button>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span>Followers</span>
        <span className="text-gray-900 dark:text-white">{followers.toLocaleString()}</span>
      </div>
    </div>
  )
}
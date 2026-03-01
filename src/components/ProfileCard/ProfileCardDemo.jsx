"use client";
import React from "react";
import ProfileCard from "./ProfileCard";

export default function ProfileCardDemo() {
  const profiles = [
    {
      name: "Alex Thompson",
      role: "UI/UX Designer",
      status: "online",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
      tags: ["Premium"],
      isVerified: true,
      followers: 1240,
      accentColor: "blue",
    },
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      status: "online",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf",
      tags: ["Pro"],
      isVerified: true,
      followers: 2840,
      accentColor: "purple",
    },
    {
      name: "Mike Rodriguez",
      role: "Product Manager",
      status: "away",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike&backgroundColor=ffd5dc",
      tags: ["Team Lead"],
      isVerified: false,
      followers: 3520,
      accentColor: "pink",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 25s linear infinite",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Live Preview
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            Profile Cards
          </h1>
          <div className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              with Spotlight Effect
            </span>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hover over the cards to see the magic ✨
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            Interactive spotlight follows your mouse
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mb-12">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="w-full max-w-sm flex justify-center"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
              }}
            >
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>

        {/* Bottom Hint */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Move your mouse over the cards to see the spotlight effect
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
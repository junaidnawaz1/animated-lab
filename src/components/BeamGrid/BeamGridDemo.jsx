"use client";
import React from "react";
import BeamGridBackground from "./BeamGridBackground";

/**
 * BeamGridDemo - Example showcase of BeamGridBackground component
 * 
 * Shows three different usage patterns:
 * 1. As a full-page background
 * 2. As a section background
 * 3. With custom colors and settings
 */

export function BeamGridDemo() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════════════════════════════════
          DEMO 1: Full Page Background
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-black">
        {/* Beam grid as background */}
        <BeamGridBackground
          asBackground={true}
          interactive={true}
          beamCount={12}
          extraBeamCount={5}
          showFade={true}
          fadeIntensity={15}
        />

        {/* Content on top */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
              Beam Grid
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Background
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              An animated grid background with glowing light beams. Move your
              mouse to interact with the grid. Fully customizable and dark mode
              compatible.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-all">
                Get Started
              </button>
              <button className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-cyan-500 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          DEMO 2: Section Background with Custom Colors
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        {/* Custom colored beam grid */}
        <BeamGridBackground
          asBackground={true}
          beamColor="rgba(168, 85, 247, 0.6)"
          darkBeamColor="rgba(217, 70, 239, 0.8)"
          gridColor="#e9d5ff"
          darkGridColor="#4a1d6b"
          beamCount={10}
          extraBeamCount={4}
          beamSpeed={0.08}
          glowIntensity={60}
          fadeIntensity={25}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-300 ring-1 ring-inset ring-purple-600/20 dark:ring-purple-400/20">
              <span className="h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
              Custom Colors
            </div>
            <h2 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fully Customizable
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Change colors, beam count, speed, glow intensity, and more.
              Perfect for any design system.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          DEMO 3: Feature Cards on Beam Grid
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-950">
        <BeamGridBackground
          asBackground={true}
          beamColor="rgba(34, 211, 238, 0.7)"
          darkBeamColor="rgba(34, 211, 238, 0.9)"
          gridColor="#1e293b"
          darkGridColor="#1e293b"
          beamCount={8}
          beamSpeed={0.12}
          showFade={true}
          fadeIntensity={10}
        />

        {/* Feature grid */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 py-20">
          <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Interactive",
                desc: "Responds to mouse movement with beautiful highlights",
                icon: "🎨",
              },
              {
                title: "Performant",
                desc: "Canvas-based rendering for smooth 60fps animations",
                icon: "⚡",
              },
              {
                title: "Dark Mode",
                desc: "Automatic dark mode support with custom colors",
                icon: "🌙",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
                
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 opacity-0 group-hover:opacity-100 group-hover:from-cyan-400/10 group-hover:via-cyan-400/5 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeamGridDemo;
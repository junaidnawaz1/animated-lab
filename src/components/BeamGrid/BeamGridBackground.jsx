"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * BeamGridBackground - Animated grid with moving light beams
 * 
 * Features:
 * - Animated grid background with glowing beams
 * - Interactive mouse tracking
 * - Dark mode support
 * - Highly customizable
 * - Canvas-based for performance
 * 
 * @param {Object} props - Component props
 * @param {number} gridSize - Size of each grid cell (default: 40)
 * @param {string} gridColor - Grid line color in light mode
 * @param {string} darkGridColor - Grid line color in dark mode
 * @param {string} beamColor - Beam color in light mode
 * @param {string} darkBeamColor - Beam color in dark mode
 * @param {number} beamSpeed - Speed of beam movement (default: 0.1)
 * @param {number} beamThickness - Thickness of beams (default: 3)
 * @param {boolean} beamGlow - Enable glow effect (default: true)
 * @param {number} glowIntensity - Glow blur intensity (default: 50)
 * @param {number} beamCount - Number of primary beams (default: 8)
 * @param {number} extraBeamCount - Number of extra slower beams (default: 3)
 * @param {number} idleSpeed - Speed multiplier when mouse idle (default: 1.15)
 * @param {boolean} interactive - Enable mouse interaction (default: true)
 * @param {boolean} asBackground - Position as absolute background (default: true)
 * @param {boolean} showFade - Show radial fade effect (default: true)
 * @param {number} fadeIntensity - Fade transparency percentage (default: 20)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements (only shown if asBackground=false)
 */
const BeamGridBackground = ({
  gridSize = 40,
  gridColor = "#e5e7eb",
  darkGridColor = "#27272a",
  beamColor = "rgba(0, 180, 255, 0.8)",
  darkBeamColor = "rgba(0, 255, 255, 0.8)",
  beamSpeed = 0.1,
  beamThickness = 3,
  beamGlow = true,
  glowIntensity = 50,
  beamCount = 8,
  extraBeamCount = 3,
  idleSpeed = 1.15,
  interactive = true,
  asBackground = true,
  showFade = true,
  fadeIntensity = 20,
  className,
  children,
  ...props
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseMoveRef = useRef(Date.now());

  // Dark mode detection
  useEffect(() => {
    const updateDarkMode = () => {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(
        document.documentElement.classList.contains("dark") || prefersDark
      );
    };
    updateDarkMode();
    const observer = new MutationObserver(() => updateDarkMode());
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Canvas drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const cols = Math.floor(rect.width / gridSize);
    const rows = Math.floor(rect.height / gridSize);

    // Initialize primary beams
    const primaryBeams = Array.from({ length: beamCount }).map(() => ({
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
      dir: Math.random() > 0.5 ? "x" : "y",
      offset: Math.random() * gridSize,
      speed: beamSpeed + Math.random() * 0.3,
      type: "primary",
    }));

    // Initialize extra beams
    const extraBeams = Array.from({ length: extraBeamCount }).map(() => ({
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
      dir: Math.random() > 0.5 ? "x" : "y",
      offset: Math.random() * gridSize,
      speed: beamSpeed * 0.5 + Math.random() * 0.1,
      type: "extra",
    }));

    const allBeams = [...primaryBeams, ...extraBeams];

    const updateMouse = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      lastMouseMoveRef.current = Date.now();
    };

    if (interactive) window.addEventListener("mousemove", updateMouse);

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      const lineColor = isDarkMode ? darkGridColor : gridColor;
      const activeBeamColor = isDarkMode ? darkBeamColor : beamColor;

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= rect.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      for (let y = 0; y <= rect.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      const now = Date.now();
      const idle = now - lastMouseMoveRef.current > 2000;

      // Draw moving beams
      allBeams.forEach((beam) => {
        ctx.strokeStyle = activeBeamColor;
        ctx.lineWidth =
          beam.type === "extra" ? beamThickness * 0.75 : beamThickness;

        if (beamGlow) {
          ctx.shadowBlur = glowIntensity;
          ctx.shadowColor = activeBeamColor;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        if (beam.dir === "x") {
          const y = beam.y * gridSize;
          const beamLength = gridSize * 1.5;
          const start =
            -beamLength + (beam.offset % (rect.width + beamLength));

          ctx.moveTo(start, y);
          ctx.lineTo(start + beamLength, y);
          ctx.stroke();

          beam.offset += idle ? beam.speed * idleSpeed * 60 : beam.speed * 60;
          if (beam.offset > rect.width + beamLength) beam.offset = -beamLength;
        } else {
          const x = beam.x * gridSize;
          const beamLength = gridSize * 1.5;
          const start =
            -beamLength + (beam.offset % (rect.height + beamLength));

          ctx.moveTo(x, start);
          ctx.lineTo(x, start + beamLength);
          ctx.stroke();

          beam.offset += idle ? beam.speed * idleSpeed * 60 : beam.speed * 60;
          if (beam.offset > rect.height + beamLength) beam.offset = -beamLength;
        }
      });

      ctx.shadowBlur = 0;

      // Interactive mouse highlight
      if (interactive && !idle) {
        const targetX = mouseRef.current.x;
        const targetY = mouseRef.current.y;
        const centerGx = Math.floor(targetX / gridSize) * gridSize;
        const centerGy = Math.floor(targetY / gridSize) * gridSize;

        const highlights = [
          {
            x: centerGx,
            y: centerGy,
            radius: 0,
            lineWidth: beamThickness * 3,
            glowFactor: 3,
          },
          {
            x: centerGx,
            y: centerGy,
            radius: 1,
            lineWidth: beamThickness * 1.5,
            glowFactor: 1.5,
          },
          {
            x: centerGx,
            y: centerGy,
            radius: 2,
            lineWidth: beamThickness * 0.75,
            glowFactor: 0.75,
          },
        ];

        highlights.forEach(({ x, y, radius, lineWidth, glowFactor }) => {
          ctx.strokeStyle = activeBeamColor;
          ctx.lineWidth = lineWidth;
          ctx.shadowBlur = glowIntensity * glowFactor;
          ctx.shadowColor = activeBeamColor;

          for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
              if (radius === 1 && Math.abs(dx) <= 0 && Math.abs(dy) <= 0)
                continue;
              if (radius === 2 && Math.abs(dx) <= 1 && Math.abs(dy) <= 1)
                continue;

              const cellX = x + dx * gridSize;
              const cellY = y + dy * gridSize;

              if (
                cellX >= 0 &&
                cellX < rect.width &&
                cellY >= 0 &&
                cellY < rect.height
              ) {
                ctx.beginPath();
                ctx.rect(cellX, cellY, gridSize, gridSize);
                ctx.stroke();
              }
            }
          }
        });
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (interactive) window.removeEventListener("mousemove", updateMouse);
    };
  }, [
    gridSize,
    beamColor,
    darkBeamColor,
    gridColor,
    darkGridColor,
    beamSpeed,
    beamCount,
    extraBeamCount,
    beamThickness,
    glowIntensity,
    beamGlow,
    isDarkMode,
    idleSpeed,
    interactive,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className || ""}`}
      {...props}
      style={{
        position: asBackground ? "absolute" : "relative",
        top: asBackground ? 0 : undefined,
        left: asBackground ? 0 : undefined,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...(props.style || {}),
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 bg-white dark:bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      {!asBackground && (
        <div className="relative z-0 w-full h-full">{children}</div>
      )}
    </div>
  );
};

export default BeamGridBackground;
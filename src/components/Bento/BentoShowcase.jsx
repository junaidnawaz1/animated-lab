
"use client";
import React from "react";
import BentoGrid from "./BentoGrid";
import {
  SlidingCardsDemo,
  GlassFolderDemo,
  GlowingCardsDemo,
  StackListDemo,
} from "../Bento/Previews"; 
import {
  FileTextIcon,
  FolderArchiveIcon,
  Share2Icon,
  CalendarIcon,
} from "lucide-react";

const cards = [
  {
    icon: FileTextIcon,
    title: "Slide your files",
    description: "We automatically save your files as you type.",
    className: "col-span-3 lg:col-span-1",
    background: <SlidingCardsDemo />,
  },
  {
    icon: FolderArchiveIcon,
    title: "Folder Animation",
    description: "Get notified when something happens.",
    className: "col-span-3 lg:col-span-2",
    background: <GlassFolderDemo />,
  },
  {
    icon: Share2Icon,
    title: "Glow your Cards",
    description: "Supports 100+ integrations and counting.",
    className: "col-span-3 lg:col-span-2 lg:min-h-[20rem]",
    background: <GlowingCardsDemo />,
  },
  {
    icon: CalendarIcon,
    title: "Stack List Effect",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    background: <StackListDemo />,
  },
];

export function BentoShowcase() {
  return (
    /* ── Full-viewport dark page ──────────────────────────────────────────── */
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: "#050810" }}
    >
      {/* ── Animated gradient orbs ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* violet — top-left */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-160px",
            left: "-160px",
            width: "560px",
            height: "560px",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.38) 0%, rgba(109,40,217,0.09) 55%, transparent 100%)",
            filter: "blur(88px)",
            animation: "orb1 9s ease-in-out infinite",
          }}
        />
        {/* indigo — top-right */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-80px",
            right: "-80px",
            width: "440px",
            height: "440px",
            background:
              "radial-gradient(circle, rgba(79,70,229,0.30) 0%, rgba(67,56,202,0.07) 55%, transparent 100%)",
            filter: "blur(72px)",
            animation: "orb2 11s ease-in-out infinite",
          }}
        />
        {/* cyan — bottom-centre */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "640px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.20) 0%, rgba(20,184,166,0.06) 55%, transparent 100%)",
            filter: "blur(96px)",
            animation: "orb3 13s ease-in-out infinite",
          }}
        />
        {/* rose — mid-right */}
        <div
          className="absolute rounded-full"
          style={{
            top: "50%",
            right: "-60px",
            transform: "translateY(-50%)",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(244,63,94,0.20) 0%, rgba(217,70,239,0.06) 55%, transparent 100%)",
            filter: "blur(64px)",
            animation: "orb4 10s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Dot-grid texture ───────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-3 py-1 rounded-full"
            style={{
              color: "#a78bfa",
              border: "1px solid rgba(167,139,250,0.3)",
              background: "rgba(167,139,250,0.08)",
            }}
          >
         Componnet By Design With JN
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Bento Grid
          </h2>
          <p
            className="mt-3 text-sm max-w-xs mx-auto leading-relaxed text-white"
            // style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Premium animated Bento Grid, ready to drop into your Next.js project.
          </p>
        </div>

        <BentoGrid cards={cards} columns={3} />
      </section>

      {/* ── Keyframe animations ────────────────────────────────────────────── */}
      <style>{`
        @keyframes orb1 {
          0%,100% { transform: translate(0,0)           scale(1);    opacity: 1;    }
          50%      { transform: translate(45px,35px)     scale(1.10); opacity: 0.65; }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0,0)            scale(1);    opacity: 1;    }
          50%      { transform: translate(-35px,28px)    scale(1.07); opacity: 0.60; }
        }
        @keyframes orb3 {
          0%,100% { transform: translateX(-50%)          scale(1);    opacity: 1;    }
          50%      { transform: translateX(calc(-50% + 25px)) scale(1.08); opacity: 0.55; }
        }
        @keyframes orb4 {
          0%,100% { transform: translateY(-50%)          scale(1);    opacity: 1;    }
          50%      { transform: translateY(calc(-50% - 22px)) scale(1.05); opacity: 0.60; }
        }
      `}</style>
    </div>
  );
}

export default BentoShowcase;
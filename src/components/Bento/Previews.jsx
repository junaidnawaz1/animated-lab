
"use client";
import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SlidingCardsDemo
   Card 1 (narrow) – pink/orange gradient bg, small document cards that
   auto-slide up continuously like a ticker.
───────────────────────────────────────────────────────────────────────────── */
export function SlidingCardsDemo() {
  const items = [
    { label: "Q3_Report.pdf", color: "bg-white/90" },
    { label: "Design_v2.fig", color: "bg-rose-100" },
    { label: "Invoice_44.pdf", color: "bg-orange-100" },
    { label: "Notes_final.md", color: "bg-white/90" },
    { label: "Roadmap.pptx", color: "bg-pink-100" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {/* warm gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-pink-300 to-orange-300" />

      {/* sliding card stack */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-5 pb-2 animate-slide-up-loop">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 shadow-sm backdrop-blur-sm ${item.color} border border-white/60`}
          >
            <svg
              className="h-4 w-4 shrink-0 text-rose-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-xs font-medium text-gray-700 truncate">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slide-up-loop {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slide-up-loop {
          animation: slide-up-loop 6s linear infinite;
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   GlassFolderDemo
   Card 2 (wide) – two 3-D blue folders side by side that bob gently and
   open their lids on hover of the parent card.
───────────────────────────────────────────────────────────────────────────── */
export function GlassFolderDemo() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {/* sky-blue gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-300" />

      {/* folder pair — centred */}
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        <Folder icon={<TriangleIcon />} delay="0s" />
        <Folder icon={<GridIcon />}     delay="0.12s" />
      </div>
    </div>
  );
}

/* SVG icons matching the screenshot */
function TriangleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20L12 4l9 16H3z" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

function Folder({ icon, delay }) {
  return (
    /*
      Each folder is a self-contained column:
        [tab]
        [body]
      The tab sits flush on the top-left of the body.
      We use `group/folder` so the body lifts on hover of the whole folder.
    */
    <div
      className="group/folder flex flex-col"
      style={{ animationDelay: delay }}
    >
      {/* ── Tab: left-aligned, shorter than body width ── */}
      <div
        className="
          w-16 h-[14px] self-start
          rounded-tl-lg rounded-tr-xl
          bg-gradient-to-r from-blue-400/80 to-blue-500/70
          border-t border-l border-r border-white/30
        "
      />

      {/* ── Body ── */}
      <div
        className="
          relative w-40 h-28
          rounded-b-2xl rounded-tr-2xl
          bg-gradient-to-br from-blue-400/65 via-blue-500/55 to-indigo-500/65
          backdrop-blur-md
          border border-white/30
          shadow-[0_8px_32px_rgba(99,102,241,0.3)]
          flex items-center justify-center
          transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover/folder:-translate-y-2
        "
      >
        {/* inner top-sheen */}
        <div className="absolute inset-0 rounded-b-2xl rounded-tr-2xl bg-gradient-to-t from-white/0 to-white/25 pointer-events-none" />
        <span className="relative drop-shadow-md">{icon}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   GlowingCardsDemo
   Card 3 (wide) – light card with a "Performance" section,
   list items that have a subtle left-border glow, always visible.
───────────────────────────────────────────────────────────────────────────── */
export function GlowingCardsDemo() {
  const features = [
    {
      icon: "⚡",
      label: "Performance",
      desc: "Lightning-fast components built for modern web applications with optimal performance.",
      sub: ["Optimized rendering", "Minimal bundle size"],
      glow: "from-yellow-400/30 to-orange-400/20",
      border: "border-yellow-400/50",
      iconBg: "bg-yellow-400/10 text-yellow-600",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className={`relative rounded-xl border ${f.border} bg-gradient-to-br ${f.glow} p-4`}
          >
            {/* glow pulse */}
            <div
              className={`absolute -inset-px rounded-xl bg-gradient-to-br ${f.glow} opacity-0
                animate-glow-pulse`}
            />
            <div className="relative flex items-start gap-3">
              <span className={`rounded-lg p-2 text-lg ${f.iconBg}`}>{f.icon}</span>
              <div>
                <p className="font-semibold text-sm text-gray-800 dark:text-white">
                  {f.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  {f.sub.map((s, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-yellow-500">☆</span> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0; }
          50%       { opacity: 1; }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   StackListDemo
   Card 4 (narrow) – calendar event items that auto-scroll/stack upward,
   with icon + title + date + location rows.
───────────────────────────────────────────────────────────────────────────── */
export function StackListDemo() {
  const events = [
    { title: "Camping", sub: "Yosemite Park", date: "5 August", icon: "📄" },
    { title: "Boating", sub: "Lake Tahoe", date: "2 August", icon: "📍" },
    { title: "Barbecue", sub: "Central Park", date: "28 July", icon: "📄" },
    { title: "Hiking", sub: "Mount Shasta", date: "20 July", icon: "📍" },
  ];

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((prev) => (prev + 1) % events.length);
    }, 1800);
    return () => clearInterval(id);
  }, [events.length]);

  // rotate array so current offset is first
  const rotated = [...events.slice(offset), ...events.slice(0, offset)];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {/* neutral light backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-800 dark:to-zinc-900" />

      <div className="absolute inset-x-0 top-4 bottom-0 flex flex-col gap-2 px-4">
        {rotated.slice(0, 3).map((ev, i) => (
          <div
            key={`${ev.title}-${i}`}
            className="flex items-center gap-3 rounded-xl bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 px-3 py-2.5 shadow-sm backdrop-blur-sm"
            style={{
              opacity: 1 - i * 0.2,
              transform: `translateY(${i * 2}px) scale(${1 - i * 0.02})`,
              transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <span className="text-base">{ev.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 dark:text-white truncate">
                {ev.title}
              </p>
              <p className="text-[10px] text-gray-500 dark:text-white/50 truncate">
                {ev.sub}
              </p>
            </div>
            <span className="text-[10px] text-gray-400 dark:text-white/40 shrink-0">
              {ev.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
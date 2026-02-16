
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({ cards, columns = 3, className, ...props }) {
  return (
    <div
      className={cn("grid w-full gap-4 grid-cols-3", className)}
      {...props}
    >
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={cn(
              // ── Layout ────────────────────────────────────────────────────
              "relative overflow-hidden rounded-2xl",
              "min-h-[15rem]",

              // ── Surface ───────────────────────────────────────────────────
              "bg-white/40 dark:bg-white/5 backdrop-blur-lg",

              // ── Border ────────────────────────────────────────────────────
              "border border-black/10 dark:border-white/10",

              // ── Shadow ────────────────────────────────────────────────────
              "shadow-sm",

              // ── Hover group ───────────────────────────────────────────────
              "group cursor-pointer",
              "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
              "hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40",
              "hover:-translate-y-0.5",

              // ── Per-card overrides ─────────────────────────────────────────
              card.className
            )}
          >
            {/* ── Animated background fills the full card ───────────────── */}
            {card.background && (
              <div className="absolute inset-0 z-0">
                {card.background}
              </div>
            )}

            {/* ── Dark scrim: hidden by default, slides in on hover ─────── */}
            {/*    This creates the "reveal" effect – fades the bg and shows text */}
            <div
              className={cn(
                "absolute inset-0 z-[1]",
                // from-black/0 → from-black/60 on hover
                "bg-gradient-to-t from-black/0 via-black/0 to-black/0",
                "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                "group-hover:from-black/55 group-hover:via-black/20 group-hover:to-black/0"
              )}
            />

            {/* ── Content: icon + title + desc (hidden → visible on hover) ─ */}
            <div
              className={cn(
                "absolute inset-x-0 bottom-0 z-[2] p-5",
                "flex flex-col gap-1",
              )}
            >
              {/* Icon pill */}
              <div
                className={cn(
                  "w-fit rounded-xl p-1.5",
                  "bg-white/20 backdrop-blur-sm",
                  "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  // starts below + invisible
                  "translate-y-8 opacity-0",
                  "group-hover:translate-y-0 group-hover:opacity-100"
                )}
              >
                <Icon className="h-4 w-4 text-white drop-shadow" />
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "text-sm font-semibold text-white drop-shadow-sm leading-snug",
                  "transition-all duration-500 delay-[40ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
                  "translate-y-6 opacity-0",
                  "group-hover:translate-y-0 group-hover:opacity-100"
                )}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={cn(
                  "text-xs text-white/75 leading-relaxed",
                  "transition-all duration-500 delay-[80ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
                  "translate-y-4 opacity-0",
                  "group-hover:translate-y-0 group-hover:opacity-100"
                )}
              >
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BentoGrid;
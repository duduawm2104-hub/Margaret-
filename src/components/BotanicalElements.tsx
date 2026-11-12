import React from "react";

export function OliveBranchIcon({ className = "w-6 h-6 text-[#69724C]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M6 42C12 36 22 26 38 10M38 10C35 18 30 24 24 28M38 10C42 16 43 23 41 27M18 30C14 26 13 20 15 16C17 21 21 24 26 25M27 21C27 15 30 11 34 8C33 13 32 18 30 20M12 36C8 33 7 28 8 24C10 28 14 31 18 31"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BotanicalDivider({ className = "my-6 text-[#A6AD8B]/60" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 bg-current opacity-40"></div>
      <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-2 4-2 7 0 10 2-3 2-6 0-10z" fill="currentColor" fillOpacity="0.15" />
        <path d="M7 10c3 1 5 4 5 7-1-3-3-6-5-7z" fill="currentColor" fillOpacity="0.15" />
        <path d="M17 10c-3 1-5 4-5 7 1-3 3-6 5-7z" fill="currentColor" fillOpacity="0.15" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
      <div className="h-[1px] w-12 bg-current opacity-40"></div>
    </div>
  );
}

export function PaperEdgeTorn({ flip = false, className = "text-[#353D22]" }: { flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 36"
        preserveAspectRatio="none"
        className="w-full h-5 md:h-8 block"
        fill="currentColor"
      >
        <path d="M0,0 L0,18 Q30,12 60,20 Q120,6 180,18 Q240,28 300,16 Q360,8 420,22 Q480,14 540,24 Q600,10 660,20 Q720,26 780,14 Q840,8 900,22 Q960,16 1020,24 Q1080,10 1140,20 Q1170,14 1200,18 L1200,0 Z" />
      </svg>
    </div>
  );
}

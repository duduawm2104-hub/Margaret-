import React, { useState, useEffect } from "react";
import { Clock, Sparkles } from "lucide-react";
import { SITE_CONFIG, isLaunchActive } from "../config/siteConfig";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownOffer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!SITE_CONFIG.launchEndDate) {
      return;
    }

    const calculateTimeLeft = () => {
      const difference = +new Date(SITE_CONFIG.launchEndDate!) - Date.now();
      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Strict compliance: Never render countdown if launchEndDate is null or expired
  if (!SITE_CONFIG.launchEndDate || isExpired || !timeLeft) {
    return null;
  }

  return (
    <div className="mb-6 inline-flex flex-col sm:flex-row items-center gap-3.5 bg-[#FFF9EF]/90 border border-[#A6AD8B]/80 px-6 py-3 rounded-xl shadow-xs text-xs text-[#353D22]">
      <div className="flex items-center gap-2 font-medium uppercase tracking-wider text-[11px] text-[#69724C]">
        <Clock className="w-3.5 h-3.5 text-[#353D22]" />
        <span>Special 7-Day Launch Window Closes In:</span>
      </div>
      <div className="flex items-center gap-2 font-mono font-bold text-sm tabular-nums text-[#353D22]">
        <div className="flex flex-col items-center">
          <span className="bg-[#F7F1E5] px-2.5 py-1 rounded border border-[#E9DCC7] shadow-2xs">
            {timeLeft.days}
          </span>
          <span className="text-[9px] uppercase tracking-tighter text-[#80624A] mt-0.5">Days</span>
        </div>
        <span className="text-base text-[#69724C] font-light -mt-3">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-[#F7F1E5] px-2.5 py-1 rounded border border-[#E9DCC7] shadow-2xs">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-tighter text-[#80624A] mt-0.5">Hours</span>
        </div>
        <span className="text-base text-[#69724C] font-light -mt-3">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-[#F7F1E5] px-2.5 py-1 rounded border border-[#E9DCC7] shadow-2xs">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-tighter text-[#80624A] mt-0.5">Mins</span>
        </div>
        <span className="text-base text-[#69724C] font-light -mt-3">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-[#F7F1E5] px-2.5 py-1 rounded border border-[#E9DCC7] shadow-2xs">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-tighter text-[#80624A] mt-0.5">Secs</span>
        </div>
      </div>
    </div>
  );
}


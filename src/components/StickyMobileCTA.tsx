import React, { useState, useEffect } from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getEffectivePrice, trackEvent } from "../config/siteConfig";

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export function StickyMobileCTA({ onOpenCheckout }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const effectivePrice = getEffectivePrice();

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 450px (beyond hero header)
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    trackEvent("sticky_mobile_cta_click", { price: effectivePrice });
    onOpenCheckout();
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9EF]/95 backdrop-blur-md border-t border-[#E9DCC7] px-4 py-2.5 shadow-lg max-h-[58px]">
      <div className="flex items-center justify-between gap-3">
        <div className="text-left">
          <p className="font-serif font-bold text-sm text-[#353D22] leading-tight">
            Margaret's Little Guide
          </p>
          <p className="text-[11px] text-[#80624A] font-semibold flex items-center gap-1.5">
            <span className="line-through text-[#80624A]/70 text-[10px]">${SITE_CONFIG.plannedRegularPrice.toFixed(2)}</span>
            <span className="text-[#353D22] font-bold">${effectivePrice.toFixed(2)}</span>
            <span className="text-[9px] bg-[#E9DCC7] text-[#353D22] px-1 rounded font-bold">50% OFF</span>
          </p>
        </div>

        <a
          href={SITE_CONFIG.stripePaymentLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] active:scale-95 rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-xs focus:outline-hidden no-underline"
        >
          <span>GET MY GUIDE →</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}


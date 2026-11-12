import React from "react";
import { OliveBranchIcon } from "./BotanicalElements";
import { LegalDocType } from "./LegalModal";
import { SITE_CONFIG } from "../config/siteConfig";

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E351E] text-[#E9DCC7] border-t border-[#48532C] py-8 sm:py-10 text-center text-xs">
      <div className="max-w-xl mx-auto px-4">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <OliveBranchIcon className="w-4 h-4 text-[#A6AD8B]" />
          <span className="font-serif font-bold text-base text-[#FFF9EF]">
            Margaret's Little Guide
          </span>
        </div>

        <p className="text-[#A6AD8B] text-[11px] mb-4">
          Instant Digital Access • 80-Page E-Book Edition • {SITE_CONFIG.supportEmail}
        </p>

        {/* Minimal Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-[#E9DCC7]/80 mb-4">
          <button
            type="button"
            onClick={() => onOpenLegal("delivery")}
            className="hover:text-[#FFF9EF] transition-colors cursor-pointer underline underline-offset-2"
          >
            Digital Delivery
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal("refund")}
            className="hover:text-[#FFF9EF] transition-colors cursor-pointer underline underline-offset-2"
          >
            Refund Policy
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal("privacy")}
            className="hover:text-[#FFF9EF] transition-colors cursor-pointer underline underline-offset-2"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal("terms")}
            className="hover:text-[#FFF9EF] transition-colors cursor-pointer underline underline-offset-2"
          >
            Terms
          </button>
        </div>

        <p className="text-[#A6AD8B]/70 text-[10px]">
          © {currentYear} Margaret's Little Guide to Everyday Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Gift, Lock, Check } from "lucide-react";
import { BookMockup } from "./BookMockup";
import { OliveBranchIcon } from "./BotanicalElements";
import { SITE_CONFIG, getEffectivePrice, trackEvent } from "../config/siteConfig";

interface FinalCTAProps {
  onOpenCheckout: () => void;
}

export function FinalCTA({ onOpenCheckout }: FinalCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const price = getEffectivePrice();

  const handleCtaClick = () => {
    trackEvent("final_cta_click", { price });
    onOpenCheckout();
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F7F1E5] paper-texture relative">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#69724C] mb-2">
          <OliveBranchIcon className="w-4 h-4 text-[#69724C]" />
          <span>Launch Special Closing Soon</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#353D22] tracking-tight leading-tight mb-2">
          Bring Home Margaret's Little Guide
        </h2>

        <p className="text-sm sm:text-base text-[#302D25]/85 font-serif italic mb-6 max-w-md leading-relaxed">
          For less than the price of a single drugstore pill bottle, invite a lifetime of natural calm, deep sleep, and comforting remedies into your home.
        </p>

        {/* E-book Mockup */}
        <div className="w-full flex justify-center my-1 sm:my-2">
          <BookMockup size="md" />
        </div>

        {/* Big High-Contrast Price Box */}
        <div className="w-full max-w-sm mt-4 mb-5 p-4 sm:p-5 rounded-2xl bg-[#FFF9EF] border-2 border-[#353D22]/20 shadow-md flex flex-col items-center justify-center text-center">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#80624A] mb-1">
            SPECIAL LAUNCH OFFER • 50% OFF
          </span>

          {/* Stacked Centered Price Display: ~~$19.99~~ cut cleanly in the middle directly above $9.99 */}
          <div className="flex flex-col items-center justify-center my-1.5">
            <div
              className="relative inline-flex items-center justify-center select-none mb-1"
              aria-label={`Regular reference price $${SITE_CONFIG.plannedRegularPrice.toFixed(2)}`}
            >
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#78716C] tracking-tight tabular-nums leading-none">
                ${SITE_CONFIG.plannedRegularPrice.toFixed(2)}
              </span>
              {/* Exact horizontal strike cutting right through the middle of the numerals */}
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -right-1.5 top-[64%] -translate-y-1/2 h-[2.5px] sm:h-[3px] bg-[#78716C] rounded-full pointer-events-none"
              />
            </div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.88, y: 3 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-flex items-baseline"
            >
              <span className="text-5xl sm:text-6xl font-serif font-bold tracking-tight tabular-nums text-[#353D22] leading-none">
                ${price.toFixed(2)}
              </span>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-1.5 mt-2 bg-[#E9DCC7]/80 text-[#353D22] font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full border border-[#A6AD8B]/70 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-[#69724C]" />
            <span>+ 3 Free Printable Gifts Included ($27 Value)</span>
          </div>
        </div>

        {/* Purchase Button */}
        <div className="w-full max-w-sm space-y-2.5">
          <a
            href={SITE_CONFIG.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="group w-full flex items-center justify-center gap-2.5 py-4 px-6 text-base sm:text-lg font-semibold text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#69724C] focus:ring-offset-2 no-underline"
          >
            <span>GET MY GUIDE + FREE GIFTS →</span>
            <ArrowRight className="w-5 h-5 text-[#FFF9EF] group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs text-[#69724C] font-serif italic flex items-center justify-center gap-1.5 pt-0.5">
            <span>Instant Digital Access • One-Time Payment • No Subscription</span>
          </p>
        </div>
      </div>
    </section>
  );
}

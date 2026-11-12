import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Gift, Lock, Sparkles } from "lucide-react";
import { BookMockup } from "./BookMockup";
import { OliveBranchIcon } from "./BotanicalElements";
import { SITE_CONFIG, getEffectivePrice, trackEvent } from "../config/siteConfig";

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export function HeroSection({ onOpenCheckout }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const price = getEffectivePrice();

  const handleCtaClick = () => {
    trackEvent("hero_primary_cta_click", { price });
    onOpenCheckout();
  };

  const handleScrollToGifts = () => {
    const el = document.getElementById("free-gifts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#F7F1E5] paper-texture">
      {/* Soft warm ambient lighting */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#E9DCC7]/30 via-[#FFF9EF]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* 1. Discreet Margaret Logo & Social Proof */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold tracking-wide text-[#69724C] uppercase mb-3"
        >
          <OliveBranchIcon className="w-4 h-4 text-[#69724C]" />
          <span>Margaret's Little Guide • Trusted by 2,400+ Women</span>
        </motion.div>

        {/* 2. Main Headline with Deep Emotional Hook */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#353D22] tracking-tight leading-[1.15] mb-2.5"
          style={{ textWrap: "balance" }}
        >
          A Little More Comfort in Your Everyday Life.
        </motion.h1>

        {/* 3. Subtitle with Persuasive Value */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg text-[#302D25]/90 font-serif italic mb-6 max-w-md leading-relaxed"
        >
          80 pages of forgotten ancestral remedies, soothing herbal teas & simple morning rhythms to help you rest deeply, ease everyday aches, and live unhurried.
        </motion.p>

        {/* 4. Large 3D E-book Mockup */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full flex justify-center my-1 sm:my-3"
        >
          <BookMockup size="lg" />
        </motion.div>

        {/* 5. BIG, HIGH-CONTRAST PRICE AREA WITH 3 FREE GIFTS HIGHLIGHT */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-sm mt-4 mb-5 p-4 sm:p-5 rounded-2xl bg-[#FFF9EF] border-2 border-[#353D22]/20 shadow-md flex flex-col items-center justify-center text-center"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#80624A]">
              SPECIAL LAUNCH OFFER • 50% OFF TODAY
            </span>
          </div>

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
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-flex items-baseline"
            >
              <span className="text-5xl sm:text-6xl font-serif font-bold tracking-tight tabular-nums text-[#353D22] leading-none">
                ${price.toFixed(2)}
              </span>
            </motion.div>
          </div>

          {/* 3 Free Gifts Badge with Value Anchor */}
          <button
            type="button"
            onClick={handleScrollToGifts}
            className="inline-flex items-center gap-1.5 mt-2 bg-[#E9DCC7]/80 hover:bg-[#E9DCC7] text-[#353D22] font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full border border-[#A6AD8B]/70 transition-colors cursor-pointer shadow-2xs"
          >
            <Gift className="w-3.5 h-3.5 text-[#69724C]" />
            <span>+ 3 Free Printable Gifts Included ($27 Value)</span>
          </button>
        </motion.div>

        {/* 6. Full-Width Purchase Button */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full max-w-sm space-y-2.5"
        >
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
            <span>Instant Digital Access • One-Time Payment</span>
          </p>

          {/* Micro trust-bullets to maximize conversion confidence */}
          <div className="pt-2 text-left space-y-1.5 text-xs text-[#302D25]/85 font-sans border-t border-[#E9DCC7]/80">
            <div className="flex items-center gap-2">
              <span className="text-[#69724C] font-bold">✓</span>
              <span>Read immediately on phone, tablet, or print at home</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#69724C] font-bold">✓</span>
              <span>30 gentle kitchen remedies using common, affordable herbs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#69724C] font-bold">✓</span>
              <span>All 3 printable companion sheets sent straight to your inbox</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

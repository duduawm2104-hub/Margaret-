import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, ShieldCheck, Mail, Sparkles, BookOpen, Download, Lock, ArrowRight, Heart } from "lucide-react";
import { CountdownOffer } from "./CountdownOffer";
import { BookMockup } from "./BookMockup";
import { OliveBranchIcon, BotanicalDivider } from "./BotanicalElements";
import { SITE_CONFIG, getEffectivePrice, trackEvent } from "../config/siteConfig";

interface PurchaseOfferProps {
  onOpenCheckout: () => void;
}

export function PurchaseOffer({ onOpenCheckout }: PurchaseOfferProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectivePrice = getEffectivePrice();

  const handleCtaClick = () => {
    trackEvent("purchase_offer_cta_click", { price: effectivePrice });
    onOpenCheckout();
  };

  const verifiedDetails = [
    { title: "80 Beautifully Designed Pages", desc: "Full-color, high-resolution digital PDF for phone, tablet, or desktop" },
    { title: "30 Comforting Homemade Recipes", desc: "Approachable breakfasts, slow-simmered soups, family dinners, and nostalgic desserts" },
    { title: "Timeless Life Lessons", desc: "Things My Mother Taught Me & 10 Things I Wish I Knew at 40" },
    { title: "Simple Everyday Routines", desc: "Gentle morning anchors, midday resets, and peaceful evening transitions" },
    { title: "Old-Fashioned Kitchen Wisdom", desc: "Unfussy pantry staples, fresh herb preservation, and low-waste home cooking" },
    { title: "3 Printable Planning Worksheets", desc: "Weekly Meal Planner, Reusable Grocery Checklist & Simple Habit Tracker" },
  ];

  return (
    <section id="offer" className="relative py-24 sm:py-32 bg-[#F7F1E5] paper-texture overflow-hidden">
      {/* Subtle golden sunlight effect & botanical ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#E9DCC7]/40 via-[#FFF9EF]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -top-12 -right-12 w-80 h-80 bg-[#A6AD8B]/15 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-12 -left-12 w-80 h-80 bg-[#69724C]/10 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#69724C] mb-3"
          >
            <OliveBranchIcon className="w-4 h-4 text-[#69724C]" />
            <span>Special Introductory Launch Offer</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#353D22] tracking-tight leading-[1.14] mb-4"
            style={{ textWrap: "balance" }}
          >
            A Little More Comfort, for Less.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#302D25]/85 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Bring home 80 pages of comforting recipes, timeless wisdom, and simple everyday routines.
          </motion.p>
        </div>

        {/* 7-Day Countdown (renders only when configured) */}
        <div className="flex justify-center">
          <CountdownOffer />
        </div>

        {/* Main Offer Card Container */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#FFF9EF] rounded-2xl border-2 border-[#E9DCC7] shadow-xl overflow-hidden p-8 sm:p-12 lg:p-14 relative"
        >
          {/* Subtle golden corner sunlight aura */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#F4EDE0] to-transparent pointer-events-none opacity-60"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: 3D E-Book Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <BookMockup size="md" />
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-serif italic text-[#80624A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#A6AD8B]" />
                  Digital E-Book Edition · 80 Illustrated Pages
                </span>
                <p className="text-[11px] text-[#69724C] mt-0.5">
                  Instant Access Worldwide · Printable at Home
                </p>
              </div>
            </div>

            {/* Right Column: Pricing & Conversion Block */}
            <div className="lg:col-span-7 flex flex-col text-left">
              {/* Launch Price Badge & Value Block */}
              <div className="mb-6 pb-6 border-b border-[#E9DCC7]">
                <div className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#80624A] bg-[#F7F1E5] px-3 py-1 rounded border border-[#E9DCC7] mb-3">
                  Special Launch Price
                </div>

                <div className="flex items-baseline gap-3">
                  <div className="flex items-baseline text-[#353D22]">
                    <span className="text-2xl font-serif font-bold">$</span>
                    <motion.span
                      initial={shouldReduceMotion ? {} : { scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-5xl sm:text-6xl font-serif font-bold tracking-tight tabular-nums"
                    >
                      {effectivePrice.toFixed(2)}
                    </motion.span>
                  </div>

                  {/* Legal strikethrough only if legitimate prior selling history exists */}
                  {SITE_CONFIG.hasPriorSellingHistory && (
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl text-[#80624A] line-through font-serif tabular-nums">
                        ${SITE_CONFIG.plannedRegularPrice.toFixed(2)}
                      </span>
                      <span className="text-xs font-bold text-[#353D22] bg-[#A6AD8B]/30 px-2 py-0.5 rounded">
                        50% OFF
                      </span>
                    </div>
                  )}

                  <span className="text-xs text-[#69724C] font-medium uppercase tracking-wider">
                    USD · One-Time Payment
                  </span>
                </div>

                <p className="mt-2 text-xs text-[#80624A] font-medium">
                  Introductory offer for a limited time · Planned regular price: ${SITE_CONFIG.plannedRegularPrice.toFixed(2)} USD
                </p>

                <p className="mt-3 text-sm text-[#302D25]/85 italic font-serif">
                  One beautiful digital guide. One simple payment. A little more comfort in your everyday life.
                </p>
              </div>

              {/* Verified Product Inclusions */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#69724C] mb-3.5">
                  Everything Included in Your Guide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#302D25]/85">
                  {verifiedDetails.map((item) => (
                    <div key={item.title} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#353D22] text-[#FFF9EF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <div>
                        <strong className="text-[#353D22] block font-semibold">{item.title}</strong>
                        <span className="text-[11px] text-[#302D25]/75 leading-tight">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] active:scale-[0.98] rounded-md transition-all shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#69724C] focus:ring-offset-2 cursor-pointer"
                >
                  <span className="tracking-wide">GET INSTANT ACCESS — ${effectivePrice.toFixed(2)}</span>
                  <span className="w-6 h-6 rounded-full bg-[#FFF9EF]/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#FFF9EF]" />
                  </span>
                </button>

                {/* Secondary CTA */}
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="w-full text-center text-xs font-semibold uppercase tracking-wider text-[#69724C] hover:text-[#353D22] transition-colors py-1 cursor-pointer underline decoration-[#A6AD8B] underline-offset-4"
                >
                  YES, I WANT MY LITTLE GUIDE
                </button>
              </div>

              {/* Purchase Confidence & Micro-Proof */}
              <div className="mt-5 pt-4 border-t border-[#E9DCC7]/80 text-center sm:text-left">
                <p className="text-xs text-[#353D22] font-semibold tracking-wide">
                  One-Time Payment • Secure Checkout • Digital PDF Delivery
                </p>
                <div className="mt-2.5 flex items-center justify-center sm:justify-start gap-5 text-[11px] text-[#69724C]">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#353D22]" />
                    256-Bit SSL Protection
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#353D22]" />
                    Instant Email Delivery
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#353D22]" />
                    Lifetime Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


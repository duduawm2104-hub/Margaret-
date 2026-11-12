import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { PaperEdgeTorn, OliveBranchIcon, BotanicalDivider } from "./BotanicalElements";
import { ASSETS } from "../assets/assets";

export function StorytellingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="storytelling" className="relative bg-[#353D22] text-[#FFF9EF] overflow-hidden">
      {/* Top Torn-Paper Transition from Ivory */}
      <div className="absolute top-0 left-0 right-0 z-10 text-[#F7F1E5]">
        <PaperEdgeTorn />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Editorial Lifestyle Image */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Image Frame with Double Border Accent */}
            <div className="relative p-2 sm:p-3 bg-[#424C2B] rounded-lg border border-[#69724C]/40 shadow-2xl">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <img
                  src={ASSETS.storytellingKitchen}
                  alt="Sunlit cottage dining table with warm homemade vegetable soup, crusty bread, and wild chamomile flowers"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-serif italic text-[#FFF9EF]/90">
                  "Ordinary moments made with a little intention."
                </div>
              </div>
            </div>

            {/* Subtle vintage stamp or leaf accent */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#69724C]/40 rounded-full blur-xl -z-10"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A6AD8B] mb-4">
              <OliveBranchIcon className="w-4 h-4 text-[#A6AD8B]" />
              <span>A Gentle Invitation</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#FFF9EF] tracking-tight leading-[1.18] mb-6"
              style={{ textWrap: "balance" }}
            >
              Sometimes, the Best Things in Life Are the Simplest.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#E9DCC7]/90 leading-relaxed font-normal">
              <p>
                Some of life's most comforting moments happen in ordinary ways.
              </p>
              <p>
                A homemade meal shared at the table. A quiet morning with a warm cup of tea. A welcoming home. A little wisdom passed down through the years.
              </p>
              <p>
                Margaret's Little Guide brings those moments together, reminding us that everyday life doesn't have to be perfect to be meaningful.
              </p>
            </div>

            {/* Pull Quote Callout */}
            <div className="mt-8 pt-6 border-t border-[#69724C]/40">
              <p className="font-serif italic text-lg sm:text-xl text-[#FFF9EF]/95 leading-snug">
                "We don't need a complicated routine to live well. Just a warm table, a calm hour, and a few small things done with care."
              </p>
              <p className="mt-2 text-xs font-medium text-[#A6AD8B] tracking-wide">
                — MARGARET'S LITTLE GUIDE
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Torn-Paper Transition to Ivory */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-[#F7F1E5]">
        <PaperEdgeTorn flip={true} />
      </div>
    </section>
  );
}

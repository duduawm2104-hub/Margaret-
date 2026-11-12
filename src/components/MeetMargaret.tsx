import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { OliveBranchIcon } from "./BotanicalElements";
import { ASSETS } from "../assets/assets";

export function MeetMargaret() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="meet-margaret" className="py-14 sm:py-20 bg-[#F7F1E5] paper-texture relative">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#FFF9EF] rounded-2xl border border-[#E9DCC7] p-6 sm:p-8 shadow-xs">
          {/* Framed Exact Portrait of Margaret from Supplied Asset */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <div className="relative w-36 sm:w-44 aspect-[3/4] rounded-t-full rounded-b-xl overflow-hidden border-3 border-[#E9DCC7] shadow-md bg-[#F4EDE0]">
              <img
                src={ASSETS.ebookCover}
                alt="Portrait of Margaret from Margaret's Little Guide"
                className="absolute w-[240%] h-[240%] max-w-none -translate-x-[48%] -translate-y-[41%] object-cover pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#69724C] mb-2">
            <OliveBranchIcon className="w-3.5 h-3.5 text-[#69724C]" />
            <span>Meet Margaret</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#353D22] mb-3">
            A Note from Margaret
          </h2>

          {/* Two deeply persuasive, heartfelt sentences */}
          <div className="space-y-3 text-sm sm:text-base text-[#302D25]/90 font-serif leading-relaxed max-w-md mx-auto">
            <p>
              "I spent over 40 years watching the world trade timeless kitchen wisdom for expensive synthetic pill bottles that leave you exhausted. But our grandmothers already knew: a handful of honest herbs, a simmering kettle, and nourishing routines can heal almost everything."
            </p>
            <p>
              "I gathered these 80 pages so you don't have to guess. May this guide bring deep sleep, calm mornings, and real comfort into your home."
            </p>
          </div>

          <p className="font-script text-3xl sm:text-4xl text-[#353D22] mt-4 transform -rotate-2 select-none">
            Margaret
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Utensils, Heart, Calendar } from "lucide-react";
import { OliveBranchIcon, BotanicalDivider } from "./BotanicalElements";
import { ASSETS } from "../assets/assets";

export function ContentShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    {
      title: "30 Comforting Recipes",
      subtitle: "Slow mornings, wholesome soups & nostalgic treats",
      desc: "Nourishing, approachable meals made with simple pantry staples meant to be shared at a warm family table.",
      image: ASSETS.recipesSpread,
      icon: Utensils,
    },
    {
      title: "Gentle Routines & Wisdom",
      subtitle: "Daily rhythms and lessons passed down through the years",
      desc: "Quiet morning rituals, evening kitchen resets, and comforting perspectives on living with unhurried grace.",
      image: ASSETS.morningRoutine,
      icon: Heart,
    },
    {
      title: "3 Printable Worksheets",
      subtitle: "Weekly Meal Planner, Grocery List & Habit Tracker",
      desc: "Included right inside your 80-page guide, ready to print at home to organize your meals and peaceful habits.",
      image: ASSETS.printablePlanner,
      icon: Calendar,
    },
  ];

  return (
    <section id="whats-inside" className="py-14 sm:py-20 bg-[#FFF9EF] relative">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#69724C] mb-2">
          <OliveBranchIcon className="w-4 h-4 text-[#69724C]" />
          <span>Inside the 80-Page Guide</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#353D22] tracking-tight mb-8">
          What's Inside Margaret's Guide
        </h2>

        {/* 3 Short Visual Highlights */}
        <div className="space-y-6 text-left">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-[#F7F1E5] rounded-xl border border-[#E9DCC7] p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 shadow-2xs"
            >
              <div className="w-full sm:w-28 sm:h-28 aspect-video sm:aspect-square rounded-lg overflow-hidden shrink-0 border border-[#E9DCC7]/80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#80624A]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#353D22] leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-serif italic text-[#69724C] mb-1">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#302D25]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

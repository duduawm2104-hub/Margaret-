import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Gift, Check, ArrowRight, Printer, Sparkles, FileText } from "lucide-react";
import { OliveBranchIcon } from "./BotanicalElements";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export function BonusSection({ onOpenCheckout }: BonusSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleCtaClick = () => {
    trackEvent("bonus_section_cta_click");
    onOpenCheckout();
  };

  const gifts = [
    {
      badge: "FREE GIFT #1",
      value: "$9 Value · Included Free",
      title: "Margaret's Weekly Herbal Meal & Tea Planner",
      desc: "Stop the daily 5 PM panic. Plan comforting, nutrient-dense dinners and evening herbal infusions ahead of time so your whole week feels calm and organized.",
      pageNote: "Derived from page 77 · High-Resolution Printable PDF",
      preview: {
        header: "WEEKLY MEAL & HERBAL TEA PLANNER",
        sub: "A calm week starts with a warm dinner & evening tea plan",
        rows: ["Monday: Cottage Herb Stew & Chamomile Brew", "Tuesday: Golden Roasted Squash & Ginger Elixir", "Wednesday: Rosemary Lemon Chicken & Oat Straw", "Thursday: Sunday Broth Soup & Valerian Nightcap"],
      },
    },
    {
      badge: "FREE GIFT #2",
      value: "$9 Value · Included Free",
      title: "Margaret's Reusable Market & Pantry Checklist",
      desc: "Save money and avoid supermarket overwhelm. Keep all essential pantry staples, whole spices, and comforting herbs in easy reach at any local grocery store.",
      pageNote: "Derived from page 78 · High-Resolution Printable PDF",
      preview: {
        header: "REUSABLE APOTHECARY & PANTRY CHECKLIST",
        sub: "Organized by produce, spices & everyday dried herbs",
        columns: [
          { cat: "PRODUCE & HERBS", items: ["Fresh Ginger", "Cinnamon Sticks", "Whole Chamomile", "Raw Honey"] },
          { cat: "NOURISHING PANTRY", items: ["Cold-Pressed Olive Oil", "Coarse Celtic Salt", "Rolled Oats", "Nutmeg"] },
        ],
      },
    },
    {
      badge: "FREE GIFT #3",
      value: "$9 Value · Included Free",
      title: "Margaret's Gentle Habit & Rhythm Tracker",
      desc: "Protect your peace without complicated routines. Gently track simple restorative habits—like a quiet morning cup, a gentle walk, and restful evening wind-down.",
      pageNote: "Derived from page 79 · High-Resolution Printable PDF",
      preview: {
        header: "GENTLE DAILY RHYTHM TRACKER",
        sub: "Small daily habits that bring lasting energy and peace",
        habits: ["Quiet morning tea (no screens)", "15-minute nature walk", "Evening botanical compress", "Restful dim-light reading"],
      },
    },
  ];

  return (
    <section id="free-gifts" className="py-16 sm:py-24 bg-[#FFF9EF] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#E9DCC7]/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#69724C] mb-2.5">
          <Gift className="w-4 h-4 text-[#69724C]" />
          <span>Included With Your Order</span>
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#353D22] tracking-tight leading-[1.18] mb-2.5"
          style={{ textWrap: "balance" }}
        >
          Your Guide Comes With 3 Lovely Little Gifts!
        </h2>

        <p className="text-sm sm:text-base text-[#302D25]/85 font-serif italic mb-3">
          Practical printables to make everyday life a little easier.
        </p>

        <p className="text-[11px] text-[#80624A] bg-[#F7F1E5] inline-block px-3 py-1 rounded-full border border-[#E9DCC7] mb-8">
          Delivered as 3 separate high-resolution PDFs · Ready to print at home
        </p>

        {/* 3 Printable Sheet Mockups */}
        <div className="space-y-6 text-left mb-10">
          {gifts.map((gift, idx) => (
            <motion.div
              key={gift.badge}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-[#F7F1E5] rounded-2xl border-2 border-[#E9DCC7] p-5 sm:p-6 shadow-sm hover:border-[#69724C]/40 transition-colors"
            >
              {/* Gift Header & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#353D22] bg-[#E9DCC7] px-2.5 py-0.5 rounded">
                    {gift.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-[#80624A] bg-[#FFF9EF] px-2 py-0.5 rounded-full border border-[#E9DCC7]">
                    {gift.value}
                  </span>
                </div>
                <span className="text-[10px] text-[#80624A] font-mono">
                  {gift.pageNote}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#353D22] mb-1">
                {gift.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#302D25]/85 leading-relaxed mb-4">
                {gift.desc}
              </p>

              {/* Realistic Printable Sheet Mini-Mockup */}
              <div className="bg-[#FFF9EF] rounded-xl border border-[#D9CEB9] p-4 shadow-inner relative overflow-hidden select-none">
                {/* Paper texture and subtle grid lines */}
                <div className="flex items-center justify-between border-b border-[#E9DCC7] pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#69724C]" />
                    <span className="text-[11px] font-serif font-bold tracking-wider text-[#353D22]">
                      {gift.preview.header}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-[#A6AD8B] font-mono">
                    US Letter & A4
                  </span>
                </div>

                {/* Specific Sheet Content Simulation */}
                {gift.preview.rows && (
                  <div className="space-y-1.5 text-[11px] text-[#302D25]/80 font-serif">
                    {gift.preview.rows.map((row) => (
                      <div key={row} className="flex items-center gap-2 border-b border-[#E9DCC7]/40 pb-1">
                        <span className="w-3 h-3 rounded-xs border border-[#A6AD8B] shrink-0" />
                        <span>{row}</span>
                      </div>
                    ))}
                  </div>
                )}

                {gift.preview.columns && (
                  <div className="grid grid-cols-2 gap-3 text-[11px] text-[#302D25]/80 font-serif">
                    {gift.preview.columns.map((col) => (
                      <div key={col.cat} className="space-y-1">
                        <p className="text-[10px] font-bold text-[#69724C] uppercase tracking-wider">{col.cat}</p>
                        {col.items.map((it) => (
                          <div key={it} className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-xs border border-[#A6AD8B] shrink-0" />
                            <span>{it}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {gift.preview.habits && (
                  <div className="space-y-1.5 text-[11px] text-[#302D25]/80 font-serif">
                    {gift.preview.habits.map((habit) => (
                      <div key={habit} className="flex items-center justify-between border-b border-[#E9DCC7]/40 pb-1">
                        <span>{habit}</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                            <span key={d} className="w-2.5 h-2.5 rounded-full border border-[#A6AD8B]" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner & CTA */}
        <div className="bg-[#353D22] text-[#FFF9EF] rounded-2xl p-6 sm:p-7 shadow-lg text-center flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A6AD8B] mb-1">
            Limited Launch Bundle
          </p>
          <p className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#FFF9EF] mb-2">
            ALL 3 PRINTABLE COMPANIONS INCLUDED — FREE
          </p>
          <p className="text-xs text-[#E9DCC7]/80 max-w-sm mb-4">
            Margaret's 80-page guide ($19.99) + 3 Printables ($27.00) = <span className="line-through text-[#A6AD8B]">$46.99</span> Value. You get everything today for just <strong className="text-white font-bold text-sm">$9.99</strong>.
          </p>

          <a
            href={SITE_CONFIG.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="group w-full max-w-sm flex items-center justify-center gap-2.5 py-4 px-6 text-base font-semibold text-[#353D22] bg-[#FFF9EF] hover:bg-white active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#A6AD8B] no-underline"
          >
            <span>CLAIM MY GUIDE + ALL 3 GIFTS FOR $9.99 →</span>
            <ArrowRight className="w-4 h-4 text-[#353D22] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

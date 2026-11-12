import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, ChevronLeft, ChevronRight, Maximize2, X, Eye } from "lucide-react";
import { OliveBranchIcon } from "./BotanicalElements";
import { trackEvent } from "../config/siteConfig";

interface SamplePage {
  pageNumber: string;
  category: string;
  title: string;
  body: string;
  recipeOrTip: string;
}

const SAMPLE_PAGES: SamplePage[] = [
  {
    pageNumber: "Page 18",
    category: "Restful Sleep & Calm Evenings",
    title: "The Golden Valerian & Nutmeg Nightcap",
    body: "When thoughts race and sleep won't come, our grandmothers never reached for chemical sleeping pills. A gentle 5-minute simmer of valerian root, chamomile blossoms, and freshly grated nutmeg in warm milk soothes an overstimulated nervous system, guiding you into deep, uninterrupted sleep.",
    recipeOrTip: "Margaret's Wisdom: Sip 30 minutes before bed in dim lighting. You'll awaken clear-headed with zero morning grogginess.",
  },
  {
    pageNumber: "Page 32",
    category: "Natural Joint Comfort & Mobility",
    title: "The Warm Turmeric & Ginger Hearth Salve",
    body: "A soothing kitchen remedy made by gently warming extra virgin olive oil with grated fresh ginger, turmeric root, and dried rosemary. Massaged into stiff morning fingers, aching knees, or a tense lower back, it eases stubborn inflammation without harsh creams or drugstore side effects.",
    recipeOrTip: "Margaret's Wisdom: Keep a small jar by your bed. Massage in slow circular motions right after your morning stretch.",
  },
  {
    pageNumber: "Page 47",
    category: "Digestive Ease & Calm Mind",
    title: "The 3-Herb Meadow Infusion for Bloating & Tension",
    body: "Digestive discomfort and anxious stomach flutter settle quickly when you brew garden peppermint, lemon balm, and crushed fennel seeds. This golden brew releases trapped gas, relieves abdominal tightness, and gently quiets the mind after a long or stressful day.",
    recipeOrTip: "Margaret's Wisdom: Inhale the warm botanical steam for 3 slow breaths before your first sip to instantly release tension.",
  },
];

export function PagePreviewGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const activePage = SAMPLE_PAGES[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SAMPLE_PAGES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SAMPLE_PAGES.length) % SAMPLE_PAGES.length);
  };

  return (
    <section id="look-inside" className="py-14 sm:py-20 bg-[#F7F1E5] paper-texture relative">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#69724C] mb-2">
          <BookOpen className="w-4 h-4 text-[#69724C]" />
          <span>Real Excerpts • Tested by Margaret</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#353D22] tracking-tight mb-2">
          A Little Peek Inside
        </h2>

        <p className="text-xs sm:text-sm text-[#302D25]/85 font-serif italic mb-6">
          Real, time-tested recipes and routines from Margaret's 80-page digital guide.
        </p>

        {/* Carousel selector tabs */}
        <div className="flex justify-center gap-2 mb-5">
          {SAMPLE_PAGES.map((p, idx) => (
            <button
              key={p.pageNumber}
              type="button"
              onClick={() => {
                setActiveIdx(idx);
                trackEvent("preview_page_selected", { page: p.pageNumber });
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                activeIdx === idx
                  ? "bg-[#353D22] text-[#FFF9EF] shadow-2xs"
                  : "bg-[#FFF9EF] text-[#69724C] border border-[#E9DCC7] hover:border-[#69724C]"
              }`}
            >
              {p.pageNumber}
            </button>
          ))}
        </div>

        {/* Spread Card Preview */}
        <div className="relative bg-[#FFF9EF] rounded-2xl border-2 border-[#E9DCC7] p-5 sm:p-7 shadow-sm text-left">
          <div className="flex items-center justify-between border-b border-[#E9DCC7] pb-2.5 mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#80624A]">
              {activePage.category}
            </span>
            <span className="text-[11px] font-mono text-[#69724C]">
              {activePage.pageNumber} of 80
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#353D22] mb-2.5 leading-snug">
            {activePage.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#302D25]/85 font-serif leading-relaxed mb-4">
            {activePage.body}
          </p>

          <div className="bg-[#F7F1E5] rounded-lg p-3 border border-[#E9DCC7] text-xs font-serif italic text-[#69724C]">
            {activePage.recipeOrTip}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E9DCC7]">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#69724C] hover:text-[#353D22] p-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <span className="text-[10px] text-[#A6AD8B] uppercase tracking-wider">
              {activeIdx + 1} / {SAMPLE_PAGES.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#69724C] hover:text-[#353D22] p-1 cursor-pointer"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

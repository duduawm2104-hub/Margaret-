import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { OliveBranchIcon } from "./BotanicalElements";
import { trackEvent } from "../config/siteConfig";

interface FAQItem {
  question: string;
  answer: string;
}

const ESSENTIAL_FAQS: FAQItem[] = [
  {
    question: "Is this a physical book or instant digital access?",
    answer: "Margaret's Little Guide is delivered instantly as a high-resolution digital PDF. You can read it immediately on any smartphone, tablet, e-reader, or computer right after checkout—and you can easily print all 80 pages and companion worksheets at home whenever you like.",
  },
  {
    question: "What if I'm a complete beginner with herbs and cooking?",
    answer: "Every single recipe and remedy was intentionally created for everyday beginners. You don't need expensive equipment, Latin names, or hard-to-find herbs. Everything uses affordable spices and pantry staples found at your local grocery store, with clear step-by-step instructions from Margaret.",
  },
  {
    question: "Is this a one-time purchase or a recurring subscription?",
    answer: "It is strictly a one-time payment of $9.99. There are no recurring fees, no surprise rebills, and no subscriptions ever. You receive permanent lifetime access to Margaret's complete 80-page guide plus all 3 printable companion gifts.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default for effortless scanning

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent("faq_question_expanded", { question: ESSENTIAL_FAQS[index].question });
    }
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FFF9EF] relative">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#69724C] mb-2">
            <HelpCircle className="w-4 h-4 text-[#69724C]" />
            <span>Common Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#353D22] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 3 Essential Questions */}
        <div className="space-y-3 text-left">
          {ESSENTIAL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F7F1E5] border-[#353D22]/30 shadow-2xs"
                    : "bg-[#FFF9EF] border-[#E9DCC7] hover:border-[#A6AD8B]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-3 text-left font-serif font-semibold text-base sm:text-lg text-[#353D22] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#353D22] text-[#FFF9EF]"
                        : "bg-[#E9DCC7]/50 text-[#353D22]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-4 pt-0 text-xs sm:text-sm text-[#302D25]/85 leading-relaxed border-t border-[#E9DCC7]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

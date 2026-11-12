import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight, Settings, Mail, FileText, Lock } from "lucide-react";
import { SITE_CONFIG, trackEvent } from "../config/siteConfig";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [testSuccess, setTestSuccess] = useState(false);
  const [testEmail, setTestEmail] = useState("");

  if (!isOpen) return null;

  const handleSimulateDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmail) return;
    setTestSuccess(true);
    trackEvent("simulated_delivery_test", { email: testEmail });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-xl bg-[#FFF9EF] border border-[#E9DCC7] rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#353D22] hover:bg-[#E9DCC7]/50 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!testSuccess ? (
            <div>
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#69724C] font-semibold mb-2">
                <Settings className="w-4 h-4 text-[#353D22]" />
                <span>Stripe Payment Integration Setup</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#353D22] mb-3">
                Checkout Configuration
              </h3>

              <div className="bg-[#F7F1E5] border border-[#E9DCC7] rounded-xl p-4 sm:p-5 mb-6 text-sm text-[#302D25]/90 space-y-3">
                <p>
                  <strong>Stripe Link Ready:</strong> In accordance with security standards, customer payments are processed via an official Stripe-hosted Payment Link.
                </p>
                <div className="bg-[#FFF9EF] p-3 rounded border border-[#E9DCC7] font-mono text-xs text-[#353D22] break-all">
                  // Set in src/config/siteConfig.ts:
                  <br />
                  STRIPE_PAYMENT_LINK: "{SITE_CONFIG.stripePaymentLink || "https://buy.stripe.com/your_link_here"}"
                  <br />
                  INTRODUCTORY_PRICE: ${SITE_CONFIG.introductoryPrice.toFixed(2)} USD
                  <br />
                  PLANNED_REGULAR_PRICE: ${SITE_CONFIG.plannedRegularPrice.toFixed(2)} USD
                </div>
                <p className="text-xs text-[#80624A]">
                  When a Stripe link is inserted, all purchase buttons on this site immediately redirect customers to your secure Stripe checkout.
                </p>
              </div>

              {/* Automation Architecture Overview */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#69724C] mb-2">
                  Order & Fulfillment Architecture (Make.com):
                </h4>
                <div className="space-y-2 text-xs text-[#302D25]/85">
                  <div className="flex items-center gap-2 p-2 rounded bg-[#F7F1E5]">
                    <span className="w-5 h-5 rounded-full bg-[#353D22] text-white flex items-center justify-center font-mono text-[10px]">1</span>
                    <span>Customer purchases Margaret's Little Guide at special launch price (${SITE_CONFIG.introductoryPrice.toFixed(2)} USD).</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#F7F1E5]">
                    <span className="w-5 h-5 rounded-full bg-[#353D22] text-white flex items-center justify-center font-mono text-[10px]">2</span>
                    <span>Stripe verifies payment & fires <code className="font-mono">checkout.session.completed</code> webhook.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#F7F1E5]">
                    <span className="w-5 h-5 rounded-full bg-[#353D22] text-white flex items-center justify-center font-mono text-[10px]">3</span>
                    <span>Make webhook receives event and generates a secure signed download link.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#F7F1E5]">
                    <span className="w-5 h-5 rounded-full bg-[#353D22] text-white flex items-center justify-center font-mono text-[10px]">4</span>
                    <span>Automated welcome email is dispatched to the buyer with the 80-page PDF.</span>
                  </div>
                </div>
              </div>

              {/* Simulator Preview */}
              <div className="pt-4 border-t border-[#E9DCC7]">
                <p className="text-xs font-semibold text-[#353D22] mb-2 uppercase tracking-wide">
                  Preview Post-Purchase Experience:
                </p>
                <form onSubmit={handleSimulateDelivery} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email to test fulfillment"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#A6AD8B] rounded focus:outline-hidden focus:ring-1 focus:ring-[#353D22]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs sm:text-sm font-semibold bg-[#353D22] text-[#FFF9EF] hover:bg-[#282E19] rounded transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Test Flow
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#353D22] text-[#FFF9EF] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#353D22] mb-2">
                Order Simulation Successful!
              </h3>

              <p className="text-sm text-[#302D25]/85 mb-6 max-w-md mx-auto">
                In live production, an email with a secure one-time download link to Margaret's 80-page digital guide has just been sent to <strong>{testEmail}</strong>.
              </p>

              <div className="bg-[#F7F1E5] p-5 rounded-xl border border-[#E9DCC7] text-left text-xs text-[#302D25]/90 space-y-2 mb-6">
                <div className="flex items-center gap-2 font-semibold text-[#353D22]">
                  <FileText className="w-4 h-4" />
                  <span>Package: Margaret's Little Guide + 3 Free Printable Gifts</span>
                </div>
                <p>• Margaret's Little Guide to Everyday Wellness (80-Page PDF)</p>
                <p>• FREE GIFT #1: Margaret's Weekly Meal Planner (Separate PDF)</p>
                <p>• FREE GIFT #2: Margaret's Reusable Grocery List (Separate PDF)</p>
                <p>• FREE GIFT #3: Margaret's Simple Habit Tracker (Separate PDF)</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setTestSuccess(false)}
                  className="px-4 py-2.5 text-xs font-medium text-[#353D22] bg-[#E9DCC7]/60 hover:bg-[#E9DCC7] rounded transition-colors"
                >
                  Back to Setup Notes
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] rounded transition-colors"
                >
                  Close & Return to Landing Page
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

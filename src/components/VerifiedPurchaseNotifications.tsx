import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, X } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export interface VerifiedPurchaseEvent {
  id: string;
  timestamp: number;
  message?: string;
}

export function VerifiedPurchaseNotifications() {
  const [notification, setNotification] = useState<VerifiedPurchaseEvent | null>(null);

  useEffect(() => {
    // Only listen and display if purchase notifications are explicitly enabled
    if (!SITE_CONFIG.enablePurchaseNotifications) {
      return;
    }

    // Prepared interface for real WebSocket / Server-Sent Events / Stripe webhook dispatch
    const handlePurchase = (event: Event) => {
      const customEvent = event as CustomEvent<VerifiedPurchaseEvent>;
      if (customEvent.detail) {
        setNotification(customEvent.detail);

        // Auto-dismiss after 6 seconds
        const timer = setTimeout(() => {
          setNotification(null);
        }, 6000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("verified_purchase_event", handlePurchase);
    return () => window.removeEventListener("verified_purchase_event", handlePurchase);
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-40 max-w-sm bg-[#FFF9EF] border border-[#69724C] rounded-lg p-3.5 shadow-xl flex items-center gap-3 select-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#353D22] text-[#FFF9EF] flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4" />
          </div>

          <div className="flex-1 text-left">
            <p className="text-xs font-medium text-[#302D25]">
              {notification.message || "A reader just purchased Margaret's Little Guide."}
            </p>
            <p className="text-[11px] text-[#69724C]">Verified digital order</p>
          </div>

          <button
            type="button"
            onClick={() => setNotification(null)}
            className="p-1 text-[#69724C] hover:text-[#353D22] rounded transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

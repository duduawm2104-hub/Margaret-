import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Shield, FileText, RefreshCw, Mail } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | "refund" | "delivery" | null;

interface LegalModalProps {
  activeDoc: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ activeDoc, onClose }: LegalModalProps) {
  if (!activeDoc) return null;

  const contentMap: Record<
    NonNullable<LegalDocType>,
    { title: string; icon: React.ComponentType<{ className?: string }>; body: React.ReactNode }
  > = {
    privacy: {
      title: "Privacy Policy",
      icon: Shield,
      body: (
        <div className="space-y-4 text-sm text-[#302D25]/85 leading-relaxed">
          <p>
            <em>Last updated: October 2026. This is an editable policy placeholder.</em>
          </p>
          <p>
            Margaret's Little Guide ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share when purchasing or visiting our website.
          </p>
          <h4 className="font-semibold text-[#353D22]">1. Information We Collect</h4>
          <p>
            When you purchase our digital guide, payment processing is handled securely by Stripe. We collect only your email address and payment confirmation data necessary to deliver your digital purchase and provide customer support. We do not store or process payment card numbers on our servers.
          </p>
          <h4 className="font-semibold text-[#353D22]">2. How We Use Information</h4>
          <p>
            Your information is used strictly to fulfill your order, transmit digital download links, and respond to support inquiries. We never sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
          <h4 className="font-semibold text-[#353D22]">3. Data Security</h4>
          <p>
            All transactions and communications use industry-standard SSL encryption.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Purchase",
      icon: FileText,
      body: (
        <div className="space-y-4 text-sm text-[#302D25]/85 leading-relaxed">
          <p>
            <em>Last updated: October 2026. Editable business terms placeholder.</em>
          </p>
          <h4 className="font-semibold text-[#353D22]">1. Digital Product License</h4>
          <p>
            Upon successful payment of $9.90 USD, you are granted a single, non-exclusive, non-transferable personal license to view and print Margaret's Little Guide to Everyday Wellness for your own household use.
          </p>
          <h4 className="font-semibold text-[#353D22]">2. Intellectual Property & Restrictions</h4>
          <p>
            All text, illustrations, layout designs, and bonus worksheets are protected under international copyright law. You may not resell, redistribute, upload to public file-sharing networks, or commercially exploit any portion of this e-book.
          </p>
          <h4 className="font-semibold text-[#353D22]">3. Disclaimer</h4>
          <p>
            The content provided in this e-book represents culinary recipes and lifestyle reflections. It is provided for personal enrichment and does not substitute for licensed medical or dietary advice.
          </p>
        </div>
      ),
    },
    refund: {
      title: "Refund & Satisfaction Policy",
      icon: RefreshCw,
      body: (
        <div className="space-y-4 text-sm text-[#302D25]/85 leading-relaxed">
          <p>
            <em>Editable refund policy placeholder.</em>
          </p>
          <h4 className="font-semibold text-[#353D22]">Our Commitment to Your Peace of Mind</h4>
          <p>
            Because Margaret's Little Guide is delivered instantly as a downloadable digital PDF, standard physical returns do not apply. However, our priority is your genuine comfort and happiness.
          </p>
          <p>
            If you encounter any difficulty downloading the file, if you receive a corrupted download link, or if you feel the guide did not meet your expectations, please contact us within 14 days of purchase. We will happily assist you with a replacement file or process a prompt refund.
          </p>
        </div>
      ),
    },
    delivery: {
      title: "Digital Product Delivery",
      icon: Mail,
      body: (
        <div className="space-y-4 text-sm text-[#302D25]/85 leading-relaxed">
          <h4 className="font-semibold text-[#353D22]">Instant Worldwide Email Delivery</h4>
          <p>
            Immediately upon successful completion of your $9.90 payment through Stripe, our automated delivery system sends a confirmation email containing your direct download link.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>File format: Digital PDF (approximately 45MB, high resolution).</li>
            <li>Compatibility: Any smartphone, iPad/tablet, e-reader, or computer.</li>
            <li>Printing: Optimized for home printing on US Letter (8.5x11") and A4 paper.</li>
          </ul>
          <p className="text-xs text-[#80624A]">
            If you do not see your delivery email within 5 minutes, please check your spam/promotions folder or reach out to our support team.
          </p>
        </div>
      ),
    },
  };

  const activeContent = contentMap[activeDoc];
  const Icon = activeContent.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#FFF9EF] border border-[#E9DCC7] rounded-2xl shadow-2xl p-6 sm:p-10 text-left max-h-[85vh] overflow-y-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#353D22] hover:bg-[#E9DCC7]/50 rounded-full transition-colors cursor-pointer"
            aria-label="Close legal terms"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E9DCC7]">
            <div className="w-10 h-10 rounded-lg bg-[#353D22] text-[#FFF9EF] flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#353D22]">
                {activeContent.title}
              </h3>
              <p className="text-xs text-[#69724C]">Margaret's Little Guide to Everyday Wellness</p>
            </div>
          </div>

          <div className="text-[#302D25]">{activeContent.body}</div>

          <div className="mt-8 pt-4 border-t border-[#E9DCC7] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] rounded transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

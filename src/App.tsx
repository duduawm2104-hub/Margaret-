import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PagePreviewGallery } from "./components/PagePreviewGallery";
import { BonusSection } from "./components/BonusSection";
import { MeetMargaret } from "./components/MeetMargaret";
import { FinalCTA } from "./components/FinalCTA";
import { FAQAccordion } from "./components/FAQAccordion";
import { Footer } from "./components/Footer";
import { CheckoutModal } from "./components/CheckoutModal";
import { LegalModal, LegalDocType } from "./components/LegalModal";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { SITE_CONFIG, getEffectivePrice, trackEvent } from "./config/siteConfig";

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  const handleOpenCheckout = () => {
    trackEvent("checkout_initiated", { price: getEffectivePrice() });

    // If a legitimate Stripe payment link is provided, open Stripe directly in a new tab
    if (SITE_CONFIG.stripePaymentLink && SITE_CONFIG.stripePaymentLink.trim() !== "") {
      window.open(SITE_CONFIG.stripePaymentLink, "_blank", "noopener,noreferrer");
      return;
    }

    // In setup mode, open the transparent configuration & setup modal
    setCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F1E5] text-[#302D25] selection:bg-[#A6AD8B]/30 selection:text-[#353D22] overflow-x-hidden">
      {/* Top Header */}
      <Header onOpenCheckout={handleOpenCheckout} />

      {/* Main Single-Column Mobile-First Flow */}
      <main className="flex-1">
        {/* 1. Hero with e-book, price and CTA */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 2. Visual preview of a few real e-book pages */}
        <PagePreviewGallery />

        {/* 3. The 3 Bonuses section ("Your Guide Comes With 3 Lovely Little Gifts!") */}
        <BonusSection onOpenCheckout={handleOpenCheckout} />

        {/* 4. Short presentation of Margaret with her official photo */}
        <MeetMargaret />

        {/* 5. Final offer with price and button */}
        <FinalCTA onOpenCheckout={handleOpenCheckout} />

        {/* 6. Compact FAQ (3 essential questions) */}
        <FAQAccordion />
      </main>

      {/* 7. Minimal footer */}
      <Footer onOpenLegal={(doc) => setActiveLegalDoc(doc)} />

      {/* Sticky Mobile Purchase Bar (Under 15% viewport height) */}
      <StickyMobileCTA onOpenCheckout={handleOpenCheckout} />

      {/* Checkout / Stripe Configuration Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />

      {/* Legal Policies Modal */}
      <LegalModal
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}

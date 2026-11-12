import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { SITE_CONFIG, getEffectivePrice, trackEvent } from "../config/siteConfig";

interface HeaderProps {
  onOpenCheckout: () => void;
}

export function Header({ onOpenCheckout }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Look Inside", href: "#look-inside" },
    { label: "3 Free Gifts", href: "#free-gifts" },
    { label: "Meet Margaret", href: "#meet-margaret" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    trackEvent("header_cta_click", { location: "desktop_header" });
    onOpenCheckout();
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#353D22] z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F1E5]/95 backdrop-blur-md shadow-xs border-b border-[#E9DCC7]/80"
            : "bg-[#F7F1E5]/90 backdrop-blur-sm"
        }`}
      >
        {/* Top Announcement Bar matching user screenshot image_faba7362.png */}
        <div className="bg-[#2D3A22] text-[#FFFDF8] py-2 px-3 text-center border-b border-[#3E4F2F] shadow-xs">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="text-base select-none leading-none" role="img" aria-label="leaf">🌿</span>
            <span className="font-sans">Limited Time Offer: Save 50% + Get 3 Free Printable Gifts</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-[#353D22] hover:text-[#4B552F] transition-colors whitespace-nowrap shrink-0"
            >
              Margaret's Little Guide
            </a>

            {/* Zone 2: 4-5 clean single-line nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#302D25]/85">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-[#353D22] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#353D22] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={SITE_CONFIG.stripePaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] active:scale-[0.98] rounded-md transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer no-underline"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Get the Guide — ${getEffectivePrice().toFixed(2)}</span>
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#353D22] hover:bg-[#E9DCC7]/40 rounded-md transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFF9EF] border-b border-[#E9DCC7] px-6 py-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-medium text-[#302D25] hover:text-[#353D22] py-2 border-b border-[#E9DCC7]/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.stripePaymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCtaClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#FFF9EF] bg-[#353D22] hover:bg-[#282E19] rounded-md shadow-sm transition-all no-underline"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Get the Guide — ${getEffectivePrice().toFixed(2)}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

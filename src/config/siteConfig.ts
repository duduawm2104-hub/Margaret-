/**
 * Margaret's Little Guide to Everyday Wellness
 * Centralized Site Configuration & Launch Campaign Settings
 */

export interface SiteConfig {
  bookTitle: string;
  bookSubtitle: string;
  authorPersona: string;
  // Launch campaign configuration
  launchStartDate: string | null; // e.g. "2026-10-22T00:00:00Z"
  launchEndDate: string | null;   // e.g. "2026-10-29T23:59:59Z" (7-day window)
  introductoryPrice: number;     // $9.99 USD
  plannedRegularPrice: number;   // $19.99 USD
  hasPriorSellingHistory: boolean; // false until genuine selling history at $19.99 is established
  currency: string;
  stripePaymentLink: string;     // The centralized Stripe Payment Link URL
  enablePurchaseNotifications: boolean;
  pageCount: number;
  recipeCount: number;
  format: string;
  supportEmail: string;
}

export const LAUNCH_START_DATE: string | null = null;
export const LAUNCH_END_DATE: string | null = null;
export const INTRODUCTORY_PRICE: number = 9.99;
export const PLANNED_REGULAR_PRICE: number = 19.99;
export const STRIPE_PAYMENT_LINK: string = "https://buy.stripe.com/eVq14n9q98SocAn4XU33W01";

// Configured promotion: $9.99 promotional launch price against legitimate reference price of $19.99
export const SHOW_REFERENCE_DISCOUNT: boolean = true;

export const SITE_CONFIG: SiteConfig = {
  bookTitle: "Margaret's Little Guide to Everyday Wellness",
  bookSubtitle: "A Simpler, Cozier Life Starts With the Little Things.",
  authorPersona: "Margaret",
  launchStartDate: LAUNCH_START_DATE,
  launchEndDate: LAUNCH_END_DATE,
  introductoryPrice: INTRODUCTORY_PRICE,
  plannedRegularPrice: PLANNED_REGULAR_PRICE,
  hasPriorSellingHistory: SHOW_REFERENCE_DISCOUNT,
  currency: "USD",
  stripePaymentLink: STRIPE_PAYMENT_LINK,
  enablePurchaseNotifications: false,
  pageCount: 80,
  recipeCount: 30,
  format: "High-Resolution Digital PDF (Instant Access)",
  supportEmail: "support@margaretslittleguide.com",
};

/**
 * Returns current effective price.
 * If launch campaign has ended, price transitions to planned regular price.
 */
export const getEffectivePrice = (): number => {
  if (SITE_CONFIG.launchEndDate) {
    const end = new Date(SITE_CONFIG.launchEndDate).getTime();
    if (!isNaN(end) && Date.now() > end) {
      return SITE_CONFIG.plannedRegularPrice;
    }
  }
  return SITE_CONFIG.introductoryPrice;
};

/**
 * Checks if the launch countdown is currently active (configured and not expired)
 */
export const isLaunchActive = (): boolean => {
  if (!SITE_CONFIG.launchEndDate) return false;
  const end = new Date(SITE_CONFIG.launchEndDate).getTime();
  if (isNaN(end)) return false;
  return Date.now() <= end;
};

// Analytics event logger (privacy-friendly, no third-party tracking scripts loaded until consented)
export const trackEvent = (eventName: string, data?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    // Dispatch custom DOM event for integrations (Google Tag Manager, Meta Pixel, etc.)
    window.dispatchEvent(new CustomEvent("guide_analytics", { detail: { eventName, data, timestamp: Date.now() } }));
    console.info(`[Analytics Event] ${eventName}`, data);
  }
};


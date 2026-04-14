import type { CountryCode } from "./countryStore"

export type PlanType = "accelerator" | "deep-dive"

export interface PlanPricing {
  price: number
  currency: string
  durationWeeks: number
  checkoutMode: "checkout" | "pricing"
}

// Single source of truth for all pricing
export const COURSE_PRICING_CONFIG: Record<string, Record<CountryCode, Record<PlanType, PlanPricing>>> = {
  "foundational-001": {
    IN: {
      accelerator: { price: 39000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 75000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 450, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 860, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 420, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 800, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "foundational-002": {
    IN: {
      accelerator: { price: 42000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 80000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 485, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 920, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 450, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 855, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "foundational-003": {
    IN: {
      accelerator: { price: 40000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 76000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 460, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 875, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 430, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 815, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "foundational-004": {
    IN: {
      accelerator: { price: 44000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 84000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 505, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 965, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 470, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 900, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "foundational-005": {
    IN: {
      accelerator: { price: 41000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 78000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 470, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 895, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 440, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 835, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "foundational-006": {
    IN: {
      accelerator: { price: 43000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 82000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 495, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 940, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 460, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 880, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "advanced-001": {
    IN: {
      accelerator: { price: 85000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 165000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 975, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 1895, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 910, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 1765, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
  "advanced-007": {
    IN: {
      accelerator: { price: 45000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 86000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
    },
    US: {
      accelerator: { price: 520, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 990, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
    },
    EU: {
      accelerator: { price: 480, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
      "deep-dive": { price: 920, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
    },
  },
}

// Helper to get pricing with fallback
export function getCoursePlanPricing(courseId: string, country: CountryCode, plan: PlanType): PlanPricing | null {
  const courseConfig = COURSE_PRICING_CONFIG[courseId]
  if (!courseConfig) {
    // Fallback pricing for courses not explicitly configured
    const fallback: Record<CountryCode, Record<PlanType, PlanPricing>> = {
      IN: {
        accelerator: { price: 45000, currency: "INR", durationWeeks: 12, checkoutMode: "checkout" },
        "deep-dive": { price: 85000, currency: "INR", durationWeeks: 24, checkoutMode: "pricing" },
      },
      US: {
        accelerator: { price: 500, currency: "USD", durationWeeks: 12, checkoutMode: "checkout" },
        "deep-dive": { price: 950, currency: "USD", durationWeeks: 24, checkoutMode: "pricing" },
      },
      EU: {
        accelerator: { price: 465, currency: "EUR", durationWeeks: 12, checkoutMode: "checkout" },
        "deep-dive": { price: 885, currency: "EUR", durationWeeks: 24, checkoutMode: "pricing" },
      },
    }
    return fallback[country][plan]
  }
  return courseConfig[country]?.[plan] ?? null
}

export function formatPrice(amount: number, currency: string): string {
  const symbols: Record<string, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  }
  return `${symbols[currency] || currency}${amount.toLocaleString()}`
}

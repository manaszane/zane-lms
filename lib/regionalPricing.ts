export type SupportedCurrency = "INR" | "USD" | "EUR" | "GBP" | "AUD"

export const REGIONAL_PRICING = {
  IN: {
    currency: "INR" as const,
    accelerator: 49990,
    deepDive: 75000,
  },
  US: {
    currency: "USD" as const,
    accelerator: 3500,
    deepDive: 5999,
  },
  EU: {
    currency: "EUR" as const,
    accelerator: 2500,
    deepDive: 4500,
  },
  GB: {
    currency: "GBP" as const,
    accelerator: 2600,
    deepDive: 4500,
  },
  AU: {
    currency: "AUD" as const,
    accelerator: 4900,
    deepDive: 8500,
  },
} as const

export type RegionCode = keyof typeof REGIONAL_PRICING

export function getRegionalPricing(region: RegionCode) {
  return REGIONAL_PRICING[region]
}

export function getCurrencySymbol(currency: SupportedCurrency): string {
  const symbols: Record<SupportedCurrency, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
    AUD: "A$",
  }
  return symbols[currency]
}

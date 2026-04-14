import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CountryCode = "IN" | "US" | "EU"

interface CountryState {
  country: CountryCode | null
  hasSelectedCountry: boolean
  setCountry: (country: CountryCode) => void
}

export const useCountryStore = create<CountryState>()(
  persist(
    (set) => ({
      country: null,
      hasSelectedCountry: false,
      setCountry: (country) => set({ country, hasSelectedCountry: true }),
    }),
    {
      name: "zane-country-selection",
    },
  ),
)

export const COUNTRY_CONFIG: Record<CountryCode, { name: string; flag: string; currency: string }> = {
  IN: { name: "India", flag: "🇮🇳", currency: "INR" },
  US: { name: "United States", flag: "🇺🇸", currency: "USD" },
  EU: { name: "Europe", flag: "🇪🇺", currency: "EUR" },
}

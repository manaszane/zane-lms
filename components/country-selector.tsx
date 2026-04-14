"use client"

import { useCountryStore, COUNTRY_CONFIG, type CountryCode } from "@/lib/countryStore"
import { Globe } from "lucide-react"

interface CountrySelectorProps {
  variant?: "default" | "compact"
}

export function CountrySelector({ variant = "default" }: CountrySelectorProps) {
  const { country, setCountry } = useCountryStore()

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-muted-foreground" />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value as CountryCode)}
          className="bg-transparent border border-border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {Object.entries(COUNTRY_CONFIG).map(([code, config]) => (
            <option key={code} value={code}>
              {config.flag} {config.name}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Select Your Country</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Choose your country to see localized pricing and benefits</p>
      <div className="grid grid-cols-3 gap-3">
        {Object.entries(COUNTRY_CONFIG).map(([code, config]) => (
          <button
            key={code}
            onClick={() => setCountry(code as CountryCode)}
            className={`glass-card rounded-lg p-3 text-center transition-all hover:scale-105 ${
              country === code ? "ring-2 ring-primary bg-primary/10" : ""
            }`}
          >
            <div className="text-2xl mb-1">{config.flag}</div>
            <div className="text-sm font-medium">{config.name}</div>
            <div className="text-xs text-muted-foreground">{config.currency}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

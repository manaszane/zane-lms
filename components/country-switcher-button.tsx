"use client"

import { useState } from "react"
import { useCountryStore, COUNTRY_CONFIG, type CountryCode } from "@/lib/countryStore"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function CountrySwitcherButton() {
  const { country, setCountry } = useCountryStore()
  const [open, setOpen] = useState(false)

  if (!country) return null

  const currentConfig = COUNTRY_CONFIG[country]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="glass-card gap-2 font-medium hover:scale-105 transition-transform bg-transparent"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentConfig.name}</span>
          <span className="sm:hidden">{currentConfig.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.entries(COUNTRY_CONFIG).map(([code, config]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => {
              setCountry(code as CountryCode)
              setOpen(false)
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-2xl">{config.flag}</span>
            <div className="flex-1">
              <div className="font-medium">{config.name}</div>
              <div className="text-xs text-muted-foreground">{config.currency}</div>
            </div>
            {country === code && <div className="h-2 w-2 rounded-full bg-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

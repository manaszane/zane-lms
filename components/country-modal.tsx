"use client"

import { useEffect, useState } from "react"
import { useCountryStore, COUNTRY_CONFIG, type CountryCode } from "@/lib/countryStore"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface CountryModalProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
}

export function CountryModal({ open, onOpenChange }: CountryModalProps) {
  const { setCountry } = useCountryStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleCountrySelect = (countryCode: CountryCode) => {
    setCountry(countryCode)
    onOpenChange?.(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex items-center gap-2 justify-center mb-2">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl">Select Your Country</DialogTitle>
          <DialogDescription className="text-center">
            Choose your country to see localized pricing and course information
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-3 mt-4">
          {Object.entries(COUNTRY_CONFIG).map(([code, config]) => (
            <Button
              key={code}
              onClick={() => handleCountrySelect(code as CountryCode)}
              variant="outline"
              size="lg"
              className="glass-card h-auto py-4 hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4 w-full">
                <span className="text-3xl">{config.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-base">{config.name}</div>
                  <div className="text-xs text-muted-foreground">Pricing in {config.currency}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

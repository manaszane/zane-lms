import { type NextRequest, NextResponse } from "next/server"
import { getFxToINR } from "@/lib/fx"
import { REGIONAL_PRICING, type SupportedCurrency, type RegionCode } from "@/lib/regionalPricing"

export async function POST(req: NextRequest) {
  try {
    const { currency, country }: { currency: SupportedCurrency; country: RegionCode } = await req.json()

    const fxRate = currency === "INR" ? 1 : await getFxToINR(currency)
    const pricing = REGIONAL_PRICING[country]

    // Match backend rounding logic exactly
    const accelerator = Math.ceil((pricing.accelerator * fxRate) / 10) * 10
    const deepDive = Math.ceil((pricing.deepDive * fxRate) / 10) * 10

    return NextResponse.json({
      accelerator,
      deepDive,
      fxRate,
    })
  } catch (error) {
    console.error("FX preview error:", error)
    return NextResponse.json({ error: "Failed to fetch FX preview" }, { status: 500 })
  }
}

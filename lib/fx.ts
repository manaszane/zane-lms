const FX_API = "https://api.frankfurter.app/latest?from={BASE}&to=INR"

const fxCache = new Map<string, { rate: number; timestamp: number }>()
const TTL = 1000 * 60 * 30 // 30 minutes

export async function getFxToINR(base: string): Promise<number> {
  console.log("[v0] FX: Fetching rate for", base)

  if (base === "INR") {
    console.log("[v0] FX: Base is already INR, returning 1.0")
    return 1.0
  }

  const cached = fxCache.get(base)
  if (cached && Date.now() - cached.timestamp < TTL) {
    console.log("[v0] FX: Using cached rate", cached.rate)
    return cached.rate
  }

  try {
    const res = await fetch(FX_API.replace("{BASE}", base), { cache: "no-store" })

    if (!res.ok) {
      throw new Error("FX fetch failed")
    }

    const data = await res.json()

    if (!data?.rates?.INR) {
      throw new Error("Invalid FX response")
    }

    const rate = data.rates.INR
    fxCache.set(base, { rate, timestamp: Date.now() })

    console.log("[v0] FX: Fetched fresh rate", rate)
    return rate
  } catch (error) {
    console.error("[v0] FX: Error fetching rate, using fallback", error)
    // Fallback rates if API fails
    const fallbackRates: Record<string, number> = {
      USD: 83.0,
      EUR: 90.0,
      GBP: 105.0,
      AUD: 54.0,
      INR: 1.0,
    }
    const fallbackRate = fallbackRates[base] || 83.0
    console.log("[v0] FX: Using fallback rate", fallbackRate)
    return fallbackRate
  }
}

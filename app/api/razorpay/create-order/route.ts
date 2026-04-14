import { type NextRequest, NextResponse } from "next/server"
import { getFxToINR } from "@/lib/fx"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      courseId,
      plan,
      currency,
      amount,
      country,
    }: {
      courseId: string
      plan: "accelerator" | "deep-dive"
      currency: string
      amount: number
      country: string
    } = body

    console.log("[v0] Razorpay request:", { courseId, plan, currency, amount, country })

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    console.log("[v0] Credentials check:", {
      keyIdExists: !!keyId,
      keySecretExists: !!keySecret,
    })

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          error:
            "Razorpay credentials not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.",
        },
        { status: 500 },
      )
    }

    const fxRate = currency === "INR" ? 1 : await getFxToINR(currency)
    const rawINR = amount * fxRate
    const finalINR = Math.ceil(rawINR / 10) * 10
    const amountPaise = finalINR * 100

    console.log("[v0] Amount conversion:", {
      amount,
      currency,
      fxRate,
      finalINR,
      amountPaise,
    })

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64")

    const orderOptions = {
      amount: amountPaise,
      currency: "INR",
      receipt: `c_${courseId.slice(-4)}_${plan}_${Date.now().toString().slice(-6)}`,
      notes: {
        courseId,
        plan,
        displayCurrency: currency,
        displayAmount: amount.toString(),
        fxRate: fxRate.toString(),
        finalINR: finalINR.toString(),
        country,
      },
    }

    console.log("[v0] Creating order with Razorpay API:", orderOptions)

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(orderOptions),
    })

    const responseData = await response.json()

    console.log("[v0] Razorpay API response:", {
      status: response.status,
      ok: response.ok,
      data: responseData,
    })

    if (!response.ok || responseData.error) {
      console.error("[v0] Razorpay API error:", responseData)
      return NextResponse.json(
        { error: `Razorpay error: ${responseData.error?.description || "Order creation failed"}` },
        { status: 500 },
      )
    }

    if (!responseData.id) {
      console.error("[v0] Order missing ID:", responseData)
      return NextResponse.json({ error: "Payment order missing ID" }, { status: 500 })
    }

    console.log("[v0] Order created successfully:", {
      id: responseData.id,
      amount: responseData.amount,
      currency: responseData.currency,
    })

    return NextResponse.json({
      orderId: responseData.id,
      keyId: keyId,
      amount: responseData.amount,
      currency: responseData.currency,
    })
  } catch (error: any) {
    console.error("[v0] Unexpected error:", error.message)
    return NextResponse.json({ error: `Failed to create order: ${error.message}` }, { status: 500 })
  }
}

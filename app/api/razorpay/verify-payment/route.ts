import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = await request.json()

    if (!process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Razorpay configuration missing" }, { status: 500 })
    }

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex")

    const isValid = expectedSignature === razorpay_signature

    if (isValid) {
      // Payment verified successfully
      // In production, you would:
      // 1. Store enrollment in database
      // 2. Send confirmation email
      // 3. Grant course access

      console.log("[v0] Payment verified successfully for course:", courseId)

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        courseId,
      })
    } else {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }
  } catch (error) {
    console.error("[v0] Error verifying payment:", error)
    return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 })
  }
}

"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import type { SupportedCurrency, RegionCode } from "@/lib/regionalPricing"
import { REGIONAL_PRICING, getCurrencySymbol } from "@/lib/regionalPricing"

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseId = params.courseId as string

  const plan = searchParams.get("plan") as "accelerator" | "deepDive"
  const currency = (searchParams.get("currency") as SupportedCurrency) || "INR"
  const country = (searchParams.get("country") as RegionCode) || "IN"

  const course = getCourseById(courseId)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle")
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Course not found</p>
      </div>
    )
  }

  const regionalPricing = REGIONAL_PRICING[country]
  const amount = regionalPricing[plan]

  const formatPrice = (amt: number, curr: SupportedCurrency) => {
    const symbol = getCurrencySymbol(curr)
    return `${symbol}${amt.toLocaleString()}`
  }

  const defaultFeatures = [
    `${course.sections.length} comprehensive modules`,
    "Expert-led live sessions",
    "Hands-on practical assignments",
    "Industry-standard tools and systems",
    "Certificate of completion",
    "Lifetime access to course materials",
  ]

  const planLabel = plan === "accelerator" ? "Accelerator Program (3 months)" : "Deep Dive Program (6 months)"

  const handlePayment = async () => {
    if (!scriptLoaded) {
      alert("Payment system is loading. Please try again in a moment.")
      return
    }

    setIsProcessing(true)

    try {
      console.log("[v0] Initiating payment with:", {
        courseId: course.id,
        plan,
        displayCurrency: currency,
        displayAmount: amount,
        country,
      })

      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course.id,
          plan,
          displayCurrency: currency,
          displayAmount: amount,
          country,
        }),
      })

      const orderData = await orderResponse.json()

      console.log("[v0] Order response:", orderData)

      if (!orderResponse.ok) {
        throw new Error(orderData.error || "Failed to create order")
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "ZANE ProEd",
        description: course.name,
        handler: async (response: any) => {
          console.log("[v0] Payment handler called:", response)

          // Verify payment
          const verifyResponse = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              courseId: course.id,
            }),
          })

          const verifyData = await verifyResponse.json()

          if (verifyResponse.ok && verifyData.success) {
            setPaymentStatus("success")
            setTimeout(() => {
              router.push(`/course/${course.id}`)
            }, 2000)
          } else {
            setPaymentStatus("error")
          }
        },
        modal: {
          ondismiss: () => {
            console.log("[v0] Payment modal dismissed")
            setIsProcessing(false)
          },
        },
        theme: {
          color: "#A855F7",
        },
      }

      console.log("[v0] Opening Razorpay with options:", options)

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("[v0] Payment error:", error)
      setPaymentStatus("error")
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {paymentStatus === "success" ? (
            <div className="glass-card rounded-xl p-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
              <p className="text-muted-foreground mb-6">You&apos;ve successfully enrolled in the course.</p>
              <p className="text-sm text-muted-foreground">Redirecting to course page...</p>
            </div>
          ) : paymentStatus === "error" ? (
            <div className="glass-card rounded-xl p-12 text-center">
              <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
              <p className="text-muted-foreground mb-6">
                There was an issue processing your payment. Please try again.
              </p>
              <Button onClick={() => setPaymentStatus("idle")}>Try Again</Button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Enrollment</h1>

              <div className="glass-card rounded-xl p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">Course Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Program</span>
                    <span className="font-medium text-right max-w-md">{course.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{course.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-medium">{planLabel}</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-primary">{formatPrice(amount, currency)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-right">
                      Final amount charged in INR at live exchange rate
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {defaultFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button onClick={handlePayment} disabled={isProcessing || !scriptLoaded} size="lg" className="w-full">
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay ${formatPrice(amount, currency)}`
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Secure payment powered by Razorpay. Your payment information is encrypted and secure.
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

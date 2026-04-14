"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter, useSearchParams, redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { getCoursePlanPricing, formatPrice, type PlanType } from "@/lib/pricingConfig"
import type { CountryCode } from "@/lib/countryStore"
import { Loader2, CheckCircle2, AlertCircle, Check } from "lucide-react"

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
  const country = params.country as CountryCode
  const plan = searchParams.get("plan") as PlanType

  useEffect(() => {
    if (!country || !["IN", "US", "EU"].includes(country)) {
      redirect("/courses")
    }
    if (!plan || !["accelerator", "deep-dive"].includes(plan)) {
      redirect("/courses")
    }
  }, [country, plan])

  const course = getCourseById(courseId)

  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle")
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  if (!course) {
    redirect("/courses")
  }

  const pricing = getCoursePlanPricing(courseId, country, plan)

  if (!pricing) {
    redirect("/courses")
  }

  const planLabel = plan === "accelerator" ? "Accelerator Program (3 months)" : "Deep Dive Program (6 months)"

  const defaultFeatures = [
    `${course.sections.length} comprehensive modules`,
    "Expert-led live sessions",
    "Hands-on practical assignments",
    "Industry-standard tools and systems",
    "Certificate of completion",
    "Lifetime access to course materials",
  ]

  const handlePayment = async () => {
    if (!scriptLoaded) {
      alert("Payment system is loading. Please try again in a moment.")
      return
    }

    setIsProcessing(true)

    try {
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course.id,
          plan,
          country,
          amount: pricing.price,
          currency: pricing.currency,
        }),
      })

      const orderData = await orderResponse.json()

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
              router.push(`/course/${course.id}/${country}`)
            }, 3000)
          } else {
            setPaymentStatus("error")
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
          },
        },
        theme: {
          color: "#000000",
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      setPaymentStatus("error")
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Increased pb-20 → pb-32 to make space for the fixed mobile button */}
      <main className="flex-1 pt-28 lg:pt-32 pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          {paymentStatus === "success" ? (
            <div className="text-center py-20">
              <CheckCircle2 className="h-16 w-16 text-foreground mx-auto mb-6" />
              <h1 className="text-3xl font-light mb-4">Payment successful</h1>
              <p className="text-muted-foreground">You’re all set. Redirecting to your course...</p>
            </div>
          ) : paymentStatus === "error" ? (
            <div className="text-center py-20">
              <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-6" />
              <h1 className="text-3xl font-light mb-4">Payment failed</h1>
              <p className="text-muted-foreground mb-8">Something went wrong. Please try again.</p>
              <Button onClick={() => setPaymentStatus("idle")} variant="outline">
                Try again
              </Button>
            </div>
          ) : (
            <>
              {/* Confident headline */}
              <div className="text-center mb-10">
                <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto">
                  Don’t think twice — the one you’re comparing wasn’t even close. <br />
                  <span className="font-normal">Trust us, we’ve got your back.</span>
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Main content */}
                <div className="lg:col-span-2">
                  <h1 className="text-2xl font-light mb-10 text-center lg:text-left">Complete your purchase</h1>

                  {/* Order Summary */}
                  <div className="border-t border-b py-6 space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-muted-foreground text-xs">Program</p>
                        <p className="text-lg font-medium">{course.name}</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-muted-foreground text-xs">Category</p>
                      <p className="font-medium text-sm">{course.category}</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-muted-foreground text-xs">Plan</p>
                      <p className="font-medium text-sm">{planLabel}</p>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="py-10 border-b">
                    <div className="flex justify-between items-baseline">
                      <p className="text-lg">Total</p>
                      <p className="text-3xl font-light">{formatPrice(pricing.price, pricing.currency)}</p>
                    </div>
                    {pricing.currency !== "INR" && (
                      <p className="text-xs text-muted-foreground text-right mt-3">
                        Final amount charged in INR at current exchange rate
                      </p>
                    )}
                  </div>

                  {/* Mobile fixed button - now visible thanks to extra pb-32 on main */}
                  <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg">
                    <Button
                      onClick={handlePayment}
                      disabled={isProcessing || !scriptLoaded}
                      className="w-full h-12 rounded-xl bg-foreground hover:bg-foreground/90 text-background"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `Pay ${formatPrice(pricing.price, pricing.currency)}`
                      )}
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-muted/30 rounded-3xl p-8 sticky top-24">
                    <h2 className="text-lg font-medium mb-6">What’s included</h2>
                    <ul className="space-y-4">
                      {defaultFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Desktop button */}
                    <div className="hidden lg:block mt-10">
                      <Button
                        onClick={handlePayment}
                        disabled={isProcessing || !scriptLoaded}
                        className="w-full h-14 rounded-2xl bg-foreground hover:bg-foreground/90 text-background font-medium"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          `Pay ${formatPrice(pricing.price, pricing.currency)}`
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-muted-foreground mt-10">
                Secure payment powered by Razorpay • Encrypted and protected
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

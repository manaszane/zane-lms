"use client"

import { useParams, useSearchParams } from "next/navigation"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { getCoursePlanPricing, formatPrice, type PlanType } from "@/lib/pricingConfig"
import type { CountryCode } from "@/lib/countryStore"
import { Check, ArrowRight, Sparkles, Info } from "lucide-react"

const WHATSAPP_ADVISOR_URL =
  "https://wa.me/919342205876?text=Hi%20Zane%20Omega%20team,%20I%20need%20help%20choosing%20the%20right%20program."

export default function PricingPage() {
  const params = useParams()
  const searchParams = useSearchParams()

  const courseId = params.courseId as string
  const country = params.country as CountryCode
  const plan = (searchParams.get("plan") as PlanType) || "deep-dive"

  const course = getCourseById(courseId)

  // Only Deep Dive should access this page
  if (!course || !["IN", "US", "EU"].includes(country) || plan !== "deep-dive") {
    notFound()
  }

  const pricing = getCoursePlanPricing(courseId, country, "deep-dive")

  if (!pricing) {
    notFound()
  }

  const DEEP_DIVE_BENEFITS = [
    {
      title: "Program Duration & Scope",
      items: [
        "24 weeks (6 months)",
        "~120 instructional hours",
        "Advanced mastery across multiple domains",
        "~40% higher assessment scores vs Accelerator",
      ],
    },
    {
      title: "Mentorship Support",
      items: [
        "Dedicated 1:1 mentorship via Omega",
        "Personalized feedback on critical workflows",
        "~50% faster skill development",
      ],
    },
    {
      title: "Simulations & Practical Experience",
      items: [
        "Collaborative real-world simulations",
        "Group trial projects",
        "Live QA audits",
        "2× practical exposure vs Accelerator",
      ],
    },
    {
      title: "Portfolio Development",
      items: ["3 professional-grade projects", "~45% higher placement rate"],
    },
    {
      title: "Advanced Resources & Features",
      items: [
        "Practice datasets",
        "Bi-monthly progress dashboards",
        "Monthly industry webinars",
        "Verified micro-credentials",
        "3-month extended placement support",
        "AI-powered job matching",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={course.hero.imageUrl || "/placeholder.svg"}
            alt={course.name}
            fill
            priority
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${course.theme.gradient}`} />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Deep Dive Program</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Invest in Your Future</h1>
          <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">{course.name}</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-8 border-2 border-primary/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Deep Dive Program</h2>
              <p className="text-muted-foreground">Master your domain with advanced training</p>

              <div className="mt-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">{formatPrice(pricing.price, pricing.currency)}</span>
                  <span className="text-muted-foreground">/ 6 months</span>
                </div>
                {pricing.currency !== "INR" && (
                  <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
                    <Info className="h-3 w-3" />
                    Final payment processed in INR at live exchange rate
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {DEEP_DIVE_BENEFITS.map((benefit, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-6">
              <Button asChild size="lg" className="w-full">
                <Link href={`/checkout/${courseId}/${country}?plan=deep-dive`}>
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Flexible payment options available. Secure checkout powered by Razorpay.
              </p>
            </div>
          </div>

          <div className="mt-8 glass-card rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-3">Need Help Deciding?</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Our advisors can help you choose the right program based on your goals and experience.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={WHATSAPP_ADVISOR_URL} target="_blank" rel="noopener noreferrer">
                Talk to Our Advisors on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-6 text-center">
            <Link
              href={`/course/${courseId}/${country}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Course Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

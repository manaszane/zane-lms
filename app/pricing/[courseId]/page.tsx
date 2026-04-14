"use client"

import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { Check, ArrowRight, Sparkles, Globe, Info } from "lucide-react"
import { useState } from "react"
import { getCoursePricing, getPlanPricing } from "@/lib/coursePricing"
import type { RegionCode, SupportedCurrency } from "@/lib/regionalPricing"
import { getCurrencySymbol } from "@/lib/regionalPricing"

const REGION_CONFIG: Record<RegionCode, { name: string; currency: SupportedCurrency; flag: string }> = {
  IN: { name: "India", currency: "INR", flag: "🇮🇳" },
  US: { name: "United States", currency: "USD", flag: "🇺🇸" },
  EU: { name: "Europe", currency: "EUR", flag: "🇪🇺" },
  GB: { name: "United Kingdom", currency: "GBP", flag: "🇬🇧" },
  AU: { name: "Australia", currency: "AUD", flag: "🇦🇺" },
}
const WHATSAPP_ADVISOR_URL =
  "https://wa.me/919342205876?text=Hi%20Zane%20Omega%20team,%20I%20need%20help%20choosing%20the%20right%20program.";

const ENABLE_INSTITUTIONAL = false

export default function PricingPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const course = getCourseById(courseId)
  const [selectedRegion, setSelectedRegion] = useState<RegionCode>("IN")

  if (!course) {
    notFound()
  }

  const coursePricingData = getCoursePricing(courseId)
  const acceleratorPricingData = getPlanPricing(courseId, "accelerator", selectedRegion)
  const deepDivePricingData = getPlanPricing(courseId, "deepDive", selectedRegion)

  // Fallback to course.plans if no pricing data
  const acceleratorPlan = course.plans.find((p) => p.plan === "accelerator")
  const deepDivePlan = course.plans.find((p) => p.plan === "deepDive")

  if (!acceleratorPlan || !deepDivePlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Pricing information not available for this course.</p>
      </div>
    )
  }

  const regionConfig = REGION_CONFIG[selectedRegion]

  const acceleratorPrice =
    acceleratorPricingData?.amount ?? acceleratorPlan.region[selectedRegion][regionConfig.currency]
  const deepDivePrice = deepDivePricingData?.amount ?? deepDivePlan.region[selectedRegion][regionConfig.currency]
  const acceleratorBenefits = acceleratorPricingData?.benefits ?? []
  const deepDiveBenefits = deepDivePricingData?.benefits ?? []

  const formatPrice = (amount: number) => {
    const symbol = getCurrencySymbol(regionConfig.currency)
    return `${symbol}${amount.toLocaleString()}`
  }

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
          <div className="glass-card inline-block rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">{course.category}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Choose Your Learning Path
          </h1>
         <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">{course.name}</p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-primary" />
             <h2 className="text-xl font-semibold">Choose your country to unlock local benefits & pricing</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Pricing, syllabus, and benefits may vary by country</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(REGION_CONFIG).map(([code, config]) => (
                <button
                  key={code}
                  onClick={() => setSelectedRegion(code as RegionCode)}
                  className={`glass-card rounded-xl p-3 text-center transition-all hover:scale-105 ${
                    selectedRegion === code ? "ring-2 ring-primary bg-primary/10" : ""
                  }`}
                >
                 <div className="text-2xl mb-1">{config.flag}</div>
                  <div className="text-sm font-semibold mb-1">{config.name}</div>
                  <div className="text-xs text-muted-foreground">{config.currency}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="glass-card rounded-xl p-6 flex flex-col">
              <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-1">Accelerator Program</h2>
                <p className="text-muted-foreground">Fast-track your career entry</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{formatPrice(acceleratorPrice)}</span>
                  <span className="text-muted-foreground">/ 3 months</span>
                </div>
                {regionConfig.currency !== "INR" && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    Final payment processed in INR at live exchange rate
                  </p>
                )}
              </div>

              <div className="space-y-4 flex-grow mb-6">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                    Program Highlights
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>12 weeks duration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>~60 instructional hours</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bi-weekly group mentorship</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>1 professional-grade project</span>
                    </li>
                  </ul>
                </div>

                {acceleratorBenefits.length > 0 ? (
                  acceleratorBenefits.map((benefit, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                        {benefit.title}
                      </h3>
                      <ul className="space-y-2">
                        {benefit.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {course.sections.slice(0, 3).map((section) => (
                        <li key={section.id} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{section.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button asChild size="lg" className="w-full">
                <Link
                  href={`/checkout/${course.id}?plan=accelerator&currency=${regionConfig.currency}&country=${selectedRegion}`}
                >
                  Enroll in Accelerator Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-8 flex flex-col relative border-2 border-primary/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="glass-card rounded-full px-3 py-0.5 border border-primary/50">
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span className="text-xs font-semibold text-primary">RECOMMENDED</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Deep Dive Program</h2>
                <p className="text-muted-foreground">Master your domain with advanced training</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">{formatPrice(deepDivePrice)}</span>
                  <span className="text-muted-foreground">/ 6 months</span>
                </div>
                {regionConfig.currency !== "INR" && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    Final payment processed in INR at live exchange rate
                  </p>
                )}
              </div>

              <div className="space-y-6 flex-grow mb-8">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                    Program Highlights
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>24 weeks duration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>~120 instructional hours</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dedicated 1:1 mentorship</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>3 professional-grade projects</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>~40% higher assessment scores</span>
                    </li>
                  </ul>
                </div>

                {deepDiveBenefits.length > 0 ? (
                  deepDiveBenefits.map((benefit, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                        {benefit.title}
                      </h3>
                      <ul className="space-y-2">
                        {benefit.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {course.sections.slice(0, 3).map((section) => (
                        <li key={section.id} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{section.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button asChild size="lg" className="w-full">
                <Link
                  href={`/checkout/${course.id}?plan=deepDive&currency=${regionConfig.currency}&country=${selectedRegion}`}
                >
                  Enroll in Deep Dive Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 glass-card rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-3">Not sure which plan is right for you?</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-2xl mx-auto">
              Both programs provide comprehensive training, but the Deep Dive Program offers more personalized
              mentorship, advanced simulations, and higher placement rates. Choose the Accelerator for quick entry or
              Deep Dive for mastery.
            </p>
           <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
             <a
             href={WHATSAPP_ADVISOR_URL}
             target="_blank"
             rel="noopener noreferrer"
              >
              Talk to Our Advisors on WhatsApp
             <ArrowRight className="ml-2 h-4 w-4" />
             </a>
           </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

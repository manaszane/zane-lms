"use client"

import { useEffect } from "react"
import { notFound, redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlanCard } from "@/components/plan-card"
import { PlanComparisonModal } from "@/components/plan-comparison-modal"
import { CourseSectionBlock } from "@/components/protraining/OverviewComponents/course-section-block"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import type { CountryCode } from "@/lib/countryStore"
import { getCoursePlanPricing } from "@/lib/pricingConfig"
import { getCourseAvailability, getWhatsAppInterestUrl } from "@/lib/courseAvailability"
import { Clock, Award, MessageCircle, ChevronLeft } from "lucide-react"

export default function CourseOverviewPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const urlCountry = params.country as CountryCode

  useEffect(() => {
    if (!urlCountry || !["IN", "US", "EU"].includes(urlCountry)) {
      redirect("/courses")
    }
  }, [urlCountry])

  const course = getCourseById(courseId)
  const country = urlCountry as CountryCode

  if (!course) {
    notFound()
  }

  const availabilityStatus = getCourseAvailability(courseId)
  const isAvailable = availabilityStatus === "available"

  const acceleratorPricing = isAvailable ? getCoursePlanPricing(courseId, country, "accelerator") : null
  const deepDivePricing = isAvailable ? getCoursePlanPricing(courseId, country, "deep-dive") : null

  const handleShowInterest = () => {
    const whatsappUrl = getWhatsAppInterestUrl(course.name, course.id)
    window.location.href = whatsappUrl
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 lg:px-8 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={course.hero.imageUrl || "/placeholder.svg"}
            alt={course.name}
            fill
            priority
            className="object-cover"
          />
          
          {/* Theme Overlay: 
              Subtle color tint to match the course branding 
          */}
          <div className={`absolute inset-0 bg-gradient-to-r ${course.theme.gradient} opacity-10 dark:opacity-30`} />
          
          {/* Main Overlay: 
              Reduced from 60 to 30 for light mode to make image pop.
              Kept darker for dark mode to ensure white text contrast.
          */}
          <div className="absolute inset-0 bg-background/30 dark:bg-background/80 backdrop-blur-[1px]" />
          
          {/* Bottom Fade: Smooth transition into the content section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-3 w-3" />
              Back to Catalog
            </Link>
          </div>

          <div className="relative">
            {/* Badge */}
           <div className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 dark:bg-background/40 px-4 py-1.5 mb-6 backdrop-blur-md">
           <span className="text-[10px] font-bold uppercase tracking-widest leading-none text-primary">
          {course.category}
          </span>
         </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mb-6 text-foreground drop-shadow-sm">
              {course.name}
            </h1>
            
            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8 font-medium">
              {course.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-8 border-t border-border/50 pt-8">
              {/* Duration */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-background/60 dark:bg-secondary/50 border border-border backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-muted-foreground tracking-tighter font-bold">Duration</p>
                  <p className="text-sm font-semibold tracking-tight text-foreground">{course.duration}</p>
                </div>
              </div>

              {/* Certification */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-background/60 dark:bg-secondary/50 border border-border backdrop-blur-sm">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-muted-foreground tracking-tighter font-bold">Certification</p>
                  <p className="text-sm font-semibold tracking-tight text-foreground">Industry Recognized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
            {/* Left Column: Dynamic Course Content */}
            <div className="space-y-6">
              {course.sections
                .sort((a, b) => a.order - b.order)
                .map((section) => (
                  <CourseSectionBlock
                    key={section.id}
                    title={section.title}
                    content={section.content}
                    type={section.type}
                  />
                ))}
            </div>

            {/* Right Column: Pricing Sidebar */}
            <div className="relative">
              <div className="sticky top-32 space-y-6">
                {isAvailable && acceleratorPricing && deepDivePricing ? (
                  <>
                    <PlanCard
                      courseId={courseId}
                      country={country}
                      plan="deep-dive"
                      price={deepDivePricing.price}
                      currency={deepDivePricing.currency}
                      isRecommended
                    />

                    <div className="flex items-center gap-4 py-2">
                      <div className="h-px flex-grow bg-border" />
                      <PlanComparisonModal />
                      <div className="h-px flex-grow bg-border" />
                    </div>

                    <PlanCard
                      courseId={courseId}
                      country={country}
                      plan="accelerator"
                      price={acceleratorPricing.price}
                      currency={acceleratorPricing.currency}
                    />
                  </>
                ) : (
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Limited Access</h3>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                      Enrollment for this cohort is currently closed. Secure your priority spot by expressing interest
                      below.
                    </p>
                    <Button onClick={handleShowInterest} className="w-full h-12 rounded-xl font-bold gap-2">
                      Notify Me on Opening
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

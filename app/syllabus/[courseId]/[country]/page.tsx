"use client"

import { useParams, useSearchParams } from "next/navigation"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { getCourseSyllabus } from "@/lib/courseSyllabus"
import { getCoursePlanPricing, formatPrice, type PlanType } from "@/lib/pricingConfig"
import type { CountryCode } from "@/lib/countryStore"
import { ArrowRight, Check, ChevronLeft } from "lucide-react"

export default function SyllabusPage() {
  const params = useParams()
  const searchParams = useSearchParams()

  const courseId = params.courseId as string
  const country = params.country as CountryCode
  const plan = (searchParams.get("plan") as PlanType) || "accelerator"

  const course = getCourseById(courseId)
  if (!course) notFound()

  const pricing = getCoursePlanPricing(courseId, country, plan)
  const syllabusData = getCourseSyllabus(courseId, country, plan)
  const syllabusUnits = syllabusData?.units || []

  const planLabel = plan === "accelerator" ? "Accelerator" : "Deep Dive"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* BACK BUTTON */}
        <Link 
          href={`/course/${courseId}/${country}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ChevronLeft className="h-3 w-3" />
          Back to Overview
        </Link>

        {/* HEADER */}
        <div className="border-b border-border pb-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-primary text-sm font-medium mb-2">{planLabel} Curriculum</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{course.name}</h1>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl font-mono font-medium">
                {pricing ? formatPrice(pricing.price, pricing.currency) : "---"}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Full Program Access</p>
            </div>
          </div>
        </div>

        {/* SYLLABUS LIST */}
        <div className="space-y-4">
          {syllabusUnits.map((unit, index) => (
            <div 
              key={index} 
              className="group border border-border bg-card/30 rounded-lg overflow-hidden transition-all hover:border-primary/50"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number */}
                  <div className="text-4xl font-mono font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-3">{unit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {unit.description || "Detailed technical breakdown of the module objectives and simulation requirements."}
                    </p>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                      {unit.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground/80">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 flex flex-col items-center text-center py-16 border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Start your transformation.</h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            Get instant access to all modules, source files, and the private community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="px-12 rounded-full h-14 text-base font-bold">
              <Link href={plan === "accelerator" ? `/checkout/${courseId}/${country}?plan=accelerator` : `/pricing/${courseId}/${country}?plan=deep-dive`}>
                Enroll in {planLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

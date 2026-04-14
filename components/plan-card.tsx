"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles, BookOpen } from "lucide-react"
import type { CountryCode } from "@/lib/countryStore"
import type { PlanType } from "@/lib/pricingConfig"
import { formatPrice } from "@/lib/pricingConfig"

interface PlanCardProps {
  courseId: string
  country: CountryCode
  plan: PlanType
  price: number
  currency: string
  isRecommended?: boolean
}

const PLAN_DETAILS: Record<
  PlanType,
  {
    name: string
    duration: string
    durationLabel: string
    highlights: string[]
  }
> = {
  accelerator: {
    name: "Accelerator Program",
    duration: "3 months",
    durationLabel: "12 weeks",
    highlights: [
      "~60 instructional hours",
      "Bi-weekly group mentorship",
      "1 portfolio project",
      "Certificate included",
    ],
  },
  "deep-dive": {
    name: "Deep Dive Program",
    duration: "6 months",
    durationLabel: "24 weeks",
    highlights: [
      "~120 instructional hours",
      "Dedicated 1:1 mentorship",
      "3 portfolio projects",
      "Certificate + Micro-credentials",
      "Extended placement support",
    ],
  },
}

export function PlanCard({ courseId, country, plan, price, currency, isRecommended = false }: PlanCardProps) {
  const details = PLAN_DETAILS[plan]

  const purchaseHref = `/checkout/${courseId}/${country}?plan=${plan}`
  const syllabusHref = `/syllabus/${courseId}/${country}?plan=${plan}`

  return (
    <div
      className={`glass-card rounded-xl p-6 flex flex-col relative ${
        isRecommended ? "border-2 border-primary/50" : ""
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="glass-card rounded-full px-3 py-1 border border-primary/50 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-xs font-semibold text-primary">RECOMMENDED</span>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-1">{details.name}</h3>
        <p className="text-sm text-muted-foreground">{details.durationLabel}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{formatPrice(price, currency)}</span>
          <span className="text-muted-foreground text-sm">/ {details.duration}</span>
        </div>
      </div>

      <ul className="space-y-2 mb-6 flex-grow">
        {details.highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <Button asChild variant="outline" size="sm" className="w-full bg-transparent gap-2">
          <Link href={syllabusHref}>
            <BookOpen className="h-4 w-4" />
            View Syllabus
          </Link>
        </Button>
        <Button asChild size="sm" className="w-full gap-2">
          <Link href={purchaseHref}>
            Enroll Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

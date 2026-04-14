"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Course } from "@/lib/courses"
import { getCourseAvailability, getWhatsAppInterestUrl } from "@/lib/courseAvailability"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const availabilityStatus = getCourseAvailability(course.id)
  const isAvailable = availabilityStatus === "available"
  const showPricing = isAvailable

  const handleInterestClick = (e: React.MouseEvent) => {
    if (!isAvailable) {
      e.preventDefault()
      const whatsappUrl = getWhatsAppInterestUrl(course.name, course.id)
      window.location.href = whatsappUrl
    }
  }

  const cardHref = isAvailable ? `/course/${course.id}` : "#"

  return (
    <div
      onClick={!isAvailable ? handleInterestClick : undefined}
      className={`group block ${!isAvailable ? "cursor-pointer" : ""}`}
    >
      <div className="relative overflow-hidden rounded-xl glass-card transition-transform duration-500 hover:scale-[1.02]">
        {/* IMAGE */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={course.hero.imageUrl || "/placeholder.svg"}
            alt={course.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />

          {/* subtle base gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />

          {/* TITLE – ALWAYS VISIBLE */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-2xl font-semibold text-foreground leading-tight">{course.name}</h3>
          </div>
        </div>

        {/* HOVER REVEAL OVERLAY */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-400
          "
        >
          {/* glass overlay */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

          <div className="relative z-20 h-full p-6 flex flex-col justify-end">
            {/* DESCRIPTION */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{course.tagline}</p>

            {/* DURATION */}
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Duration</p>
              <p className="text-sm font-medium text-foreground">{course.duration}</p>
            </div>

            {showPricing && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Starting From</p>
                <p className="text-sm font-medium text-foreground">{course.price}</p>
              </div>
            )}

            {isAvailable ? (
              <Link href={cardHref}>
                <Button variant="ghost" size="sm" className="w-fit gap-2 px-0 text-foreground hover:bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="w-fit gap-2 px-0 text-foreground hover:bg-transparent"
                onClick={handleInterestClick}
              >
                Show Interest
                <MessageCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

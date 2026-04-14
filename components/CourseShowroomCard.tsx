"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Course } from "@/lib/courses"

interface Props {
  course: Course
  country: string
}

export function CourseShowroomCard({ course, country }: Props) {
  return (
    // Reduced overall card max-width for a smaller footprint
    <Link href={`/course/${course.id}/${country}`} className="group block w-full h-full">
      <div className="relative overflow-hidden rounded-xl glass-card transition-transform duration-500 hover:scale-[1.02]">
        
        {/* IMAGE LAYER - Aspect ratio adjusted for smaller cards */}
        <div className="relative aspect-square w-full overflow-hidden">
          <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.08] will-change-transform">
            <Image
              src={course.hero.imageUrl || "/placeholder.svg"}
              alt={course.name}
              fill
              className="object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
            />
          </div>

          <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

          {/* DEFAULT TITLE (Smaller text) */}
          <div className="absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-lg font-semibold leading-tight text-foreground">{course.name}</h3>
          </div>
        </div>

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div
            className="absolute inset-0"
            style={{
              background: course.theme.gradient,
              opacity: 0.97,
            }}
          />

          {/* CONTENT - Reduced padding for smaller size */}
          <div className="relative h-full p-4 flex flex-col justify-end text-foreground">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold leading-tight">{course.name}</h3>
              <p className="text-xs leading-relaxed text-foreground/90 line-clamp-2">{course.tagline}</p>

              {/* BOTTOM ROW: DURATION AND BUTTON ON SAME LINE */}
              <div className="flex items-end justify-between border-t border-foreground/10 pt-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/70">Duration</p>
                  <p className="text-xs font-medium">{course.duration}</p>
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-auto p-0 text-xs gap-1 text-foreground hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

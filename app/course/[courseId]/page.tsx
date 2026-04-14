"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { Clock, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

function CourseSectionBlock({ title, content }: { title: string; content: string }) {
  return (
   <div className="glass-card rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none leading-relaxed">
        {content.split("\n\n").map((p, i) => (
          <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function CoursePage() {
  const params = useParams()
  const courseId = params.courseId as string
  const course = getCourseById(courseId)

  if (!course) {
    notFound()
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

        <div className="relative mx-auto max-w-7xl">
          <div className="glass-card inline-block rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">{course.category}</span>
          </div>
          <h1
  className="
    text-3xl font-bold tracking-tight
    sm:text-4xl lg:text-5xl
    max-w-full sm:max-w-4xl lg:max-w-6xl
  "
>
  {course.name}
</h1>
         <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed">{course.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
             <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{course.duration}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Industry Certified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {course.sections
                .sort((a, b) => a.order - b.order)
                .map((section) => (
                  <CourseSectionBlock key={section.id} title={section.title} content={section.content} />
                ))}
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card rounded-lg p-6 sticky top-24">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Program Investment</p>
                 <p className="text-3xl font-bold">{course.price}</p>
                  <p className="text-sm text-muted-foreground mt-2">Flexible payment plans available</p>
                </div>

               <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Certificate</span>
                    <span className="font-medium">Included</span>
                  </div>
                </div>

                <Button asChild className="w-full mb-3" size="lg">
                  <Link href={`/pricing/${course.id}`}>
                    View Pricing & Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent mb-3">
                  <Link href={`/syllabus/${course.id}`}>View Full Syllabus</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/courses">View All Programs</Link>
                </Button>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Pricing, syllabus, and benefits may vary by country
                </p>

                <div className="mt-6 pt-6 border-t border-border/50">
                 <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Course Sections</h3>
                 <ul className="space-y-1 text-sm text-muted-foreground">
                    {course.sections.slice(0, 6).map((s) => (
                      <li key={s.id}>• {s.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

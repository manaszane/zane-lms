"use client"

import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCourseById } from "@/lib/courses"
import { getCourseSyllabus } from "@/lib/courseSyllabus"
import { BookOpen, ArrowRight, CheckCircle } from "lucide-react"

export default function SyllabusPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const course = getCourseById(courseId)

  if (!course) {
    notFound()
  }

  const syllabusData = getCourseSyllabus(courseId)

  const syllabusUnits = syllabusData
    ? syllabusData.units
    : // Fallback: auto-generate from course.sections
      course.sections
        .sort((a, b) => a.order - b.order)
        .map((section) => ({
          title: section.title,
          description: undefined,
          topics: section.content
            .split("\n\n")
            .map((paragraph) => paragraph.trim())
            .filter((p) => p.length > 20)
            .slice(0, 5),
        }))

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
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Course Syllabus</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">{course.name}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{course.tagline}</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Complete Course Curriculum</h2>
            <p className="text-muted-foreground leading-relaxed">
              This comprehensive syllabus covers all modules included in the {course.name}. Each module is designed to
              build upon the previous one, ensuring a structured learning path from fundamentals to advanced concepts.
            </p>
          </div>

          <div className="space-y-6">
            {syllabusUnits.map((unit, index) => (
              <div key={index} className="glass-card rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{unit.title}</h3>
                    {unit.description && <p className="text-sm text-muted-foreground">{unit.description}</p>}
                  </div>
                </div>

                <div className="ml-16">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Key Topics</h4>
                  <ul className="space-y-2">
                    {unit.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Enroll now to access the complete curriculum, hands-on projects, and personalized mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={`/pricing/${course.id}`}>
                  View Pricing & Enroll
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <Link href={`/course/${course.id}`}>Back to Course Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

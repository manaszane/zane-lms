import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { courses } from "@/lib/courses"
import Link from "next/link"

export function FeaturedCoursesSection() {
  const featuredCourses = courses.slice(0, 6)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most popular training programs across healthcare domains
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/courses">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProgramCategoriesSection() {
  const categories = [
    {
      title: "Foundational Programs",
      description: "Build core competencies in clinical research and healthcare operations",
      count: "6 Programs",
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Advanced Intelligence Programs",
      description: "Master AI-driven analytics and strategic healthcare innovation",
      count: "6 Programs",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Elite R&D Programs",
      description: "Lead breakthrough research in precision medicine and biotechnology",
      count: "5 Programs",
      color: "from-cyan-600 to-emerald-600",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learning Pathways</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the right program level for your career goals</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <div key={index} className="glass-card rounded-xl p-8">
              <div
                className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${category.color} px-4 py-2 text-sm font-semibold text-white`}
              >
                {category.count}
              </div>
              <h3 className="mb-3 text-xl font-bold">{category.title}</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">{category.description}</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

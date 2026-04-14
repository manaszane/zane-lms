import { BookOpen, Clock, BarChart } from "lucide-react"

const categories = [
  { name: "Getting Started", count: 12 },
  { name: "Platform Features", count: 18 },
  { name: "Study Guides", count: 24 },
  { name: "Career Tips", count: 15 },
]

const tutorials = [
  {
    title: "How to Navigate Your Student Dashboard",
    level: "Beginner",
    duration: "10 min",
    category: "Getting Started",
  },
  {
    title: "Understanding Clinical Trial Phases",
    level: "Intermediate",
    duration: "25 min",
    category: "Study Guides",
  },
  {
    title: "Mastering Adverse Event Reporting",
    level: "Advanced",
    duration: "45 min",
    category: "Study Guides",
  },
  {
    title: "Building Your Professional Portfolio",
    level: "Beginner",
    duration: "15 min",
    category: "Career Tips",
  },
  {
    title: "Using Interactive Lab Simulations",
    level: "Intermediate",
    duration: "20 min",
    category: "Platform Features",
  },
  {
    title: "Preparing for Certification Exams",
    level: "Advanced",
    duration: "30 min",
    category: "Career Tips",
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/10 text-green-600 dark:text-green-400"
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
    case "Advanced":
      return "bg-red-500/10 text-red-600 dark:text-red-400"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function TutorialsContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex gap-3 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="whitespace-nowrap rounded-full border border-border bg-card px-6 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="glass-card group cursor-pointer rounded-2xl p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">{tutorial.category}</span>
              </div>
              <h3 className="mb-4 text-lg font-semibold group-hover:text-primary">{tutorial.title}</h3>
              <div className="flex items-center gap-4">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                  <BarChart className="mr-1 inline h-3 w-3" />
                  {tutorial.level}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {tutorial.duration}
                </span>
              </div>
              <button className="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Start Tutorial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

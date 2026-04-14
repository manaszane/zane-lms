import { Award, Users, BookOpen, TrendingUp } from "lucide-react"

export function StatsSection() {
  const stats = [
    { icon: Award, label: "Industry Certified", value: "21+ Programs" },
    { icon: Users, label: "Expert Instructors", value: "50+ Experts" },
    { icon: BookOpen, label: "Active Learners", value: "10,000+" },
    { icon: TrendingUp, label: "Career Growth", value: "98% Success" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-6 text-center">
              <stat.icon className="mx-auto h-8 w-8 text-primary mb-3" />
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

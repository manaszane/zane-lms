import { Users, Target, Lightbulb, TrendingUp, MapPin, Briefcase } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate educators and industry experts",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Make a real impact on healthcare professionals worldwide",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Push boundaries in educational technology and methodology",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement pathways",
  },
]

const openRoles = [
  {
    title: "Curriculum Designer - Clinical Research",
    location: "Remote",
    type: "Full-time",
    department: "Academics",
  },
  {
    title: "Student Success Manager",
    location: "Hybrid - Bangalore",
    type: "Full-time",
    department: "Operations",
  },
  {
    title: "Senior Instructor - Pharmacovigilance",
    location: "Remote",
    type: "Contract",
    department: "Teaching",
  },
  {
    title: "Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    department: "Marketing",
  },
]

export function CareersContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Work With Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-6 text-center">
                <value.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">Open Positions</h2>
          <div className="mx-auto max-w-4xl space-y-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="glass-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">{role.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {role.type}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {role.department}
                    </span>
                  </div>
                </div>
                <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

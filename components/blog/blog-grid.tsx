import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Clinical Research Operations",
    excerpt: "Exploring AI-powered methodologies transforming trial management and patient recruitment.",
    category: "Clinical Research",
    readTime: "5 min read",
    date: "Dec 20, 2024",
    image: "/clinical-research-lab.jpg",
  },
  {
    id: 2,
    title: "Navigating Drug Safety Regulations in 2025",
    excerpt: "Understanding evolving pharmacovigilance requirements and compliance frameworks.",
    category: "Regulatory Affairs",
    readTime: "7 min read",
    date: "Dec 18, 2024",
    image: "/pharmaceutical-safety.jpg",
  },
  {
    id: 3,
    title: "Career Paths in Healthcare Analytics",
    excerpt: "How data science is reshaping clinical decision-making and patient outcomes.",
    category: "Career Development",
    readTime: "6 min read",
    date: "Dec 15, 2024",
    image: "/healthcare-analytics-dashboard.png",
  },
  {
    id: 4,
    title: "Real-World Evidence in Drug Development",
    excerpt: "Leveraging RWE to accelerate regulatory approvals and market access strategies.",
    category: "Research Methods",
    readTime: "8 min read",
    date: "Dec 12, 2024",
    image: "/medical-research-data.jpg",
  },
  {
    id: 5,
    title: "Building a Career in Pharmacovigilance",
    excerpt: "Essential skills and certifications for aspiring drug safety professionals.",
    category: "Career Development",
    readTime: "5 min read",
    date: "Dec 10, 2024",
    image: "/pharmacovigilance-professional.jpg",
  },
  {
    id: 6,
    title: "Clinical Data Management Best Practices",
    excerpt: "Ensuring data quality and integrity throughout the clinical trial lifecycle.",
    category: "Data Management",
    readTime: "6 min read",
    date: "Dec 8, 2024",
    image: "/clinical-data-management.jpg",
  },
]

export function BlogGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href="#"
              className="glass-card group overflow-hidden rounded-2xl transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold group-hover:text-primary">{post.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-muted">
            Previous
          </button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">1</button>
          <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-muted">
            2
          </button>
          <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-muted">
            3
          </button>
          <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-muted">
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

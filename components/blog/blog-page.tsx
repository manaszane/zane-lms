import { BlogHero } from "./blog-hero"
import { BlogGrid } from "./blog-grid"

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}

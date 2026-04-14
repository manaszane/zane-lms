import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EcosystemHero } from "@/components/ecosystem/ecosystem-hero"
import { StorySection } from "@/components/ecosystem/story-section"
import { DivisionCard } from "@/components/ecosystem/division-card"
import { EngagementPaths } from "@/components/ecosystem/engagement-paths"
import { EcosystemStats } from "@/components/ecosystem/ecosystem-stats"
import { FinalPositioning } from "@/components/ecosystem/final-positioning"
import { ECOSYSTEM_STORY, ECOSYSTEM_DIVISIONS } from "@/lib/ecosystemContent"

export const metadata = {
  title: "The Zane ProEd Ecosystem | Global Professional Education Platform",
  description:
    "Discover how Zane ProEd integrates education, intelligence, and execution into a unified ecosystem for professional growth and leadership development.",
}

export default function EcosystemPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <EcosystemHero />

      {/* Story sections */}
      {ECOSYSTEM_STORY.map((section, index) => (
        <StorySection key={section.id} section={section} index={index} />
      ))}

      {/* Ecosystem architecture intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Zane ProEd Ecosystem Architecture</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three tightly integrated systems forming a closed-loop framework for professional development and
            institutional capability building
          </p>
        </div>
      </section>

      {/* Division cards */}
      {ECOSYSTEM_DIVISIONS.map((division, index) => (
        <DivisionCard key={division.id} division={division} index={index} />
      ))}

      <EcosystemStats />

      <EngagementPaths />

      <FinalPositioning />

      <Footer />
    </div>
  )
}

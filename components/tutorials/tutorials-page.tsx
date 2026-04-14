import { TutorialsHero } from "./tutorials-hero"
import { TutorialsContent } from "./tutorials-content"

export function TutorialsPage() {
  return (
    <div className="min-h-screen">
      <TutorialsHero />
      <TutorialsContent />
    </div>
  )
}

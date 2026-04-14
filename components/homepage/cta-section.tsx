import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="glass-card rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to Advance Your Healthcare Career?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of professionals transforming the future of healthcare
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/courses">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/ecosystem">View Ecosystem</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

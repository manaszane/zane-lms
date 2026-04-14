export function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-muted/30 to-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Insights & <span className="text-primary">Knowledge</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Expert perspectives on clinical research, healthcare innovation, and professional development
          </p>
        </div>
      </div>
    </section>
  )
}

export function GlobalCareerSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Transform Your Portfolio, Anywhere on Earth
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Zane ProEd is the world's leading learning platform for career transformation in health sciences, pharma,
              healthcare, and beyond. Available across global education hubs including the USA, UK, Ireland, Canada,
              Australia, Singapore, the UAE, India, and more.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our AI-powered, cloud-based ecosystem delivers job-ready skills aligned with global regulatory standards
              including FDA, MHRA, WHO, and EMA.
            </p>

            <p className="mt-6 text-xl font-semibold">
              Join 10,000+ professionals across 6+ countries and achieve career success.
            </p>
          </div>

          {/* Right highlights */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Learn Without Borders</h3>
              <p className="text-muted-foreground">
                Access cutting-edge programs 24/7 from any device, anywhere in the world.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Global Opportunities Await</h3>
              <p className="text-muted-foreground">
                Prepare for high-demand roles in clinical research, pharmacovigilance, regulatory affairs, and more.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Certified Excellence</h3>
              <p className="text-muted-foreground">
                Training aligned with ICH-GCP, GMP, and international compliance frameworks for global credibility.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Trusted Worldwide</h3>
              <p className="text-muted-foreground">
                Backed by learners, institutions, and recruiters across continents.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA line */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold">Launch Your Global Career Now</p>
          <p className="mt-2 text-muted-foreground">
            Upskill in as little as 3 weeks and unlock a world of possibilities.
          </p>
        </div>
      </div>
    </section>
  )
}

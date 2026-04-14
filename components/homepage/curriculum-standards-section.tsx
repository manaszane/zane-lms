export function CurriculumStandardsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Curriculum Built on Global Quality Frameworks
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our curriculum is inspired by leading national and international quality frameworks and standards,
            purpose-built for health science learners across pharmacy, nursing, life sciences, and research domains.
          </p>
        </div>

        {/* Audience cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Pharmacy</h3>
            <p className="text-sm text-muted-foreground">
              Clinical research, regulatory affairs, pharmacovigilance, quality systems.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Nursing</h3>
            <p className="text-sm text-muted-foreground">
              Clinical operations, patient safety, healthcare quality, research literacy.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Life Sciences</h3>
            <p className="text-sm text-muted-foreground">
              Biotechnology workflows, data integrity, lab-to-market translation.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Research</h3>
            <p className="text-sm text-muted-foreground">
              Study design, compliance, analytics, publication-ready execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function UpskillingPlatformSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card mx-auto max-w-3xl rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">#1 Up-skilling Platform</h2>

          {/* Flags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {["🇺🇸", "🇮🇳", "🇬🇧", "🇮🇪", "🇸🇬", "🇯🇵", "🇦🇺"].map((flag, index) => (
              <span key={index} className="text-4xl sm:text-5xl" aria-hidden>
                {flag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TestimonialsLoading() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="mx-auto h-12 w-64 rounded-lg bg-muted" />
          <div className="mx-auto h-6 w-96 rounded-lg bg-muted" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[9/16] rounded-2xl bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

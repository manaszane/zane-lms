export default function SyllabusLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card rounded-xl p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading syllabus...</p>
      </div>
    </div>
  )
}

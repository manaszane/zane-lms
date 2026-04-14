import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function PricingLoading() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-64 mx-auto" />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton className="h-[600px] rounded-2xl" />
            <Skeleton className="h-[600px] rounded-2xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

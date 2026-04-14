import { Building2, Users, Globe, ArrowRight } from "lucide-react"

const partnerTypes = [
  {
    icon: Building2,
    title: "Universities & Institutions",
    description: "Co-create specialized programs and expand your curriculum offerings",
    benefits: [
      "Joint certification programs",
      "Faculty exchange opportunities",
      "Research collaboration",
      "Student placement support",
    ],
  },
  {
    icon: Users,
    title: "Corporate Partners",
    description: "Upskill your workforce with customized enterprise training solutions",
    benefits: [
      "Tailored learning paths",
      "Bulk enrollment discounts",
      "Dedicated account management",
      "Performance analytics",
    ],
  },
  {
    icon: Globe,
    title: "Technology Platforms",
    description: "Integrate our content and expand your educational ecosystem",
    benefits: ["API integration support", "White-label options", "Content licensing", "Co-marketing opportunities"],
  },
]

export function PartnerContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {partnerTypes.map((partner) => (
            <div key={partner.title} className="glass-card rounded-2xl p-8">
              <partner.icon className="mb-6 h-12 w-12 text-primary" />
              <h3 className="mb-3 text-2xl font-bold">{partner.title}</h3>
              <p className="mb-6 text-muted-foreground">{partner.description}</p>
              <ul className="space-y-3">
                {partner.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card mx-auto max-w-4xl rounded-2xl p-8 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-bold">Ready to Partner?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Let's discuss how we can work together to advance professional education and create meaningful impact
          </p>
          <button className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Schedule a Partnership Call
          </button>
        </div>
      </div>
    </section>
  )
}

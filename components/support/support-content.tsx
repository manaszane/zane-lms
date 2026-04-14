import { HelpCircle, CreditCard, BookOpen, Award, ChevronDown } from "lucide-react"

const categories = [
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Platform access, account issues, and technical troubleshooting",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Payment methods, invoices, refunds, and pricing questions",
  },
  {
    icon: BookOpen,
    title: "Programs & Curriculum",
    description: "Course content, schedules, and learning materials",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Certificate issuance, verification, and credential support",
  },
]

const faqs = [
  {
    question: "How do I access my course materials?",
    answer: "Course materials are available in your student dashboard after enrollment confirmation.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and bank transfers for international students.",
  },
  {
    question: "Can I get a refund if I withdraw?",
    answer:
      "Refund eligibility depends on the timing of withdrawal. Please review our refund policy or contact support.",
  },
  {
    question: "How long does certificate processing take?",
    answer: "Certificates are typically issued within 7-10 business days after course completion.",
  },
]

export function SupportContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="glass-card group cursor-pointer rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <category.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </button>
                <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

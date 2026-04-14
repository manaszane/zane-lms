import { Mail, Phone, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@zaneproed.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Mon-Fri, 9 AM - 6 PM EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Bangalore, India",
    description: "By appointment only",
  },
]

export function ContactContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-8 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <div key={method.title} className="glass-card rounded-2xl p-6 text-center">
              <method.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{method.title}</h3>
              <p className="mb-1 font-medium text-foreground">{method.detail}</p>
              <p className="text-sm text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl glass-card rounded-2xl p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button
              type="button"
              disabled
              className="w-full rounded-lg bg-primary/50 px-6 py-3 font-medium text-primary-foreground cursor-not-allowed"
            >
              Submit Message (UI Only)
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

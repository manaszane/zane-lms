export function StandardsMarqueeSection() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Food_and_Drug_Administration_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/World_Health_Organization_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/European_Medicines_Agency_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/MHRA_logo.svg",
    "https://www.ich.org/fileadmin/Public_Web_Site/ICH_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/ISO_logo.svg",
  ]

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Inspired by Global Quality Frameworks & Standards
        </h3>

        <div className="relative">
          <div className="flex w-max animate-marquee gap-16 items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo || "/placeholder.svg"}
                alt="Global regulatory framework logo"
                className="h-14 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}

            {/* Duplicate for seamless loop */}
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo || "/placeholder.svg"}
                alt="Global regulatory framework logo"
                className="h-14 w-auto opacity-80 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

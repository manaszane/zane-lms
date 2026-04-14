export function TopCompaniesSection() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Patio-Aug-2014.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pfizer_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Novartis_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Roche_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Accenture_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Tata_Consultancy_Services_Logo.svg",
  ]

  return (
    <section className="py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            TRAIN WITH ZANE ProEd AND WORK FOR THE TOP COMPANIES
            <br className="hidden sm:block" />
            IN INDIA &amp; ABROAD.
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          <div className="flex w-max animate-marquee items-center gap-20">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo || "/placeholder.svg"}
                alt="Hiring partner logo"
                className="h-14 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}

            {/* Duplicate for seamless loop */}
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo || "/placeholder.svg"}
                alt="Hiring partner logo"
                className="h-14 w-auto opacity-70 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

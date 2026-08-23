const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    ref: "SVC-01",
    title: "Freight Forwarding",
    desc: "We handle all aspects of your cargo movement — from documentation, customs clearance, to delivery. Whether it's local or cross-border, we ensure your shipment moves smoothly.",
    tags: ["Domestic", "Cross-Border", "Documentation"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    ref: "SVC-02",
    title: "Land Transportation",
    desc: "Fast and reliable land transport throughout Peninsular Malaysia. Our fleet ensures timely pickups and deliveries, tailored to your cargo size and schedule.",
    tags: ["Peninsular Malaysia", "On-Time", "Flexible Scheduling"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    ref: "SVC-03",
    title: "Warehousing & Storage",
    desc: "Short and long-term storage solutions in our secure Klang facility. Inventory management, palletising, and order fulfilment handled professionally.",
    tags: ["Secure Facility", "Inventory Mgmt", "Short & Long Term"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    ref: "SVC-04",
    title: "Customs Clearance",
    desc: "Our experienced team handles all customs documentation and compliance requirements, reducing delays and ensuring your goods pass through border controls efficiently.",
    tags: ["Import & Export", "Compliance", "Paperwork Handled"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    ref: "SVC-05",
    title: "Sea Cargo",
    desc: "Access to competitive sea logistics through our network of shipping partners. We manage full container loads (FCL) and less-than-container loads (LCL).",
    tags: ["FCL & LCL", "Global Network"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    ref: "SVC-06",
    title: "Logistics Consulting",
    desc: "Not sure how to optimise your supply chain? Our team provides advisory services to help businesses streamline their logistics operations and reduce overhead.",
    tags: ["Supply Chain", "Cost Reduction", "Advisory"],
  },
];

export default function Services({ navigate }) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-navy-dark py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1720811559395-3ed8d1b16649?auto=format&fit=crop&w=2000&q=80"
          alt="Freight truck on the road"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/85 to-navy-dark/60" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-signal text-xs tracking-widest uppercase mb-4">// What We Offer</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-paper">Our Services</h1>
          <p className="text-steel text-lg max-w-xl mx-auto">
            Comprehensive shipping and logistics solutions designed for businesses of all sizes, operating out of Pelabuhan Klang, Selangor.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 bg-paper-raised border border-steel hover:border-signal/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-signal group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                <span className="font-mono text-[10px] text-ink-soft/50 tracking-widest">{s.ref}</span>
              </div>
              <h3 className="font-display text-ink font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-paper text-ink-soft font-mono text-[11px] border border-steel"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-signal text-xs tracking-widest uppercase mb-3">// How It Works</p>
            <h2 className="font-display text-4xl font-bold text-paper">Simple. Fast. Reliable.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enquiry", desc: "Contact us with your shipment details and requirements." },
              { step: "02", title: "Quotation", desc: "Receive a competitive, transparent quote within 24 hours." },
              { step: "03", title: "Collection", desc: "We arrange pickup from your location at a time that suits." },
              { step: "04", title: "Delivery", desc: "Your cargo is delivered safely and on time, every time." },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center px-4">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full route-rule" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 border border-signal/50 text-signal font-display font-bold text-xl mb-4 bg-navy-dark">
                  {item.step}
                </div>
                <h4 className="font-display text-paper font-semibold mb-2">{item.title}</h4>
                <p className="text-steel text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold mb-4 text-ink">Have a Specific Requirement?</h2>
        <p className="text-ink-soft" style={{marginBottom: '5px'}}>
          We're flexible. If you need something not listed above, give us a call — we'll find a solution.
        </p>

        <button
          onClick={() => navigate("about")}
          className="px-8 py-4 bg-signal hover:bg-signal-dark text-paper font-display font-bold rounded-sm tracking-wide transition-all"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
}
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "50+", label: "Destinations" },
  { value: "99%", label: "On-Time Delivery" },
];

const highlights = [
  {
    icon: (
      <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    title: "Freight Forwarding",
    desc: "Seamless domestic and international freight handling, managed end to end.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
      </svg>
    ),
    title: "Route Planning",
    desc: "Optimised logistics routes to reduce delivery time and costs.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Reliable & Insured",
    desc: "Every shipment handled with care and backed by full cargo insurance.",
  },
];

export default function Home({ navigate }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              Klang's Trusted Shipping Service
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Moving Cargo.
              <br />
              <span className="text-amber-500">Delivering</span> Trust.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Matrix Inter Trade Sdn Bhd provides end-to-end shipping and logistics solutions from Klang, Selangor — built on reliability, precision, and years of experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("services")}
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Our Services
              </button>
              <button
                onClick={() => navigate("about")}
                className="px-8 py-3.5 border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-500 font-medium rounded tracking-wide transition-all duration-200"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-slate-800">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="text-4xl font-bold text-amber-500 mb-1">{s.value}</p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-bold">Built for Businesses That Can't Afford Delays</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/40 transition-colors group">
              <div className="mb-5">{h.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3">{h.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image placeholder banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative h-72 md:h-96 flex items-center justify-center">
          <div className="text-center text-slate-600">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Add a company / warehouse photo here</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-950 mb-4">Ready to Ship?</h2>
          <p className="text-slate-800 mb-8 text-lg">Get in touch with our team today for a personalised shipping quote.</p>
          <a
            href="tel:+60333238581"
            className="inline-block px-10 py-4 bg-slate-950 text-amber-500 font-bold rounded tracking-wide hover:bg-slate-800 transition-colors text-lg"
          >
            📞 Hunting Lines: +(6) 03 3323 8581
          </a>
        </div>
      </section>
    </div>
  );
}

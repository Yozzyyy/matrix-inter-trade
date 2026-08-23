const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "1000+", label: "Clients Served" },
  { value: "50+", label: "Destinations" },
  { value: "99%", label: "On-Time Delivery" },
];

const highlights = [
  {
    icon: (
      <svg className="w-7 h-7 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    ref: "SVC-01",
    title: "Freight Forwarding",
    desc: "Seamless domestic and international freight handling, managed end to end.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
      </svg>
    ),
    ref: "SVC-02",
    title: "Route Planning",
    desc: "Optimised logistics routes to reduce delivery time and costs.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    ref: "SVC-03",
    title: "Reliable & Insured",
    desc: "Every shipment handled with care and backed by full cargo insurance.",
  },
];

// Small corner-casting mark, echoing the corner brackets on a shipping container
const CornerTicks = () => (
  <>
    <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-signal/60" />
    <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-signal/60" />
  </>
);

export default function Home({ navigate }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-navy-dark">
        <img
          src="https://images.unsplash.com/photo-1758146296671-0e46a91739a8?auto=format&fit=crop&w=2000&q=80"
          alt="Stacked shipping containers at a busy port"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-signal/50 text-signal font-mono text-xs tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse" />
              Ref// Pelabuhan Klang, Selangor
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight text-paper">
              Moving Cargo.
              <br />
              <span className="text-signal">Delivering</span> Trust.
            </h1>

            <p className="text-steel text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Matrix Inter Trade Sdn Bhd provides end-to-end shipping and logistics solutions from Pelabuhan Klang — built on reliability, precision, and years of experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("services")}
                className="px-8 py-3.5 bg-signal hover:bg-signal-dark text-paper font-display font-bold rounded-sm tracking-wide transition-all duration-200"
              >
                Our Services
              </button>
              <button
                onClick={() => navigate("about")}
                className="px-8 py-3.5 border border-steel/40 hover:border-paper text-paper font-display font-medium rounded-sm tracking-wide transition-all duration-200"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — manifest strip */}
      <section className="bg-navy border-b border-navy-dark">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-paper/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="font-display text-4xl font-bold text-signal mb-1">{s.value}</p>
              <p className="font-mono text-paper/60 text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-signal text-xs tracking-widest uppercase mb-3">// Why Choose Us</p>
          <h2 className="font-display text-4xl font-bold text-ink">Built for Businesses That Can't Afford Delays</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="relative p-8 bg-paper-raised border border-steel hover:border-signal/50 transition-colors group">
              <CornerTicks />
              <div className="flex items-start justify-between mb-5">
                {h.icon}
                <span className="font-mono text-[10px] text-white/50 tracking-widest">{h.ref}</span>
              </div>
              <h3 className="font-display text-white font-semibold text-lg mb-3">{h.title}</h3>
              <p className="text-white text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capability banner — real warehouse image */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-none overflow-hidden h-72 md:h-[28rem] border border-steel">
          <img
            src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?auto=format&fit=crop&w=1800&q=80"
            alt="Warehouse team managing inventory on shelving"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/30 to-transparent" />
          <div className="relative h-full flex items-center px-8 md:px-14">
            <div className="max-w-md">
              <p className="font-mono text-signal text-xs tracking-widest uppercase mb-3">// Facility Status: Operational</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-paper mb-4">
                A Warehouse Built for Precision
              </h3>
              <p className="text-steel leading-relaxed">
                Every pallet tracked, every shelf organised. Our Klang facility handles short and long-term storage with the same discipline we bring to every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-signal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-paper mb-4">Ready to Ship?</h2>
          <p className="text-paper/90 mb-8 text-lg">Get in touch with our team today for a personalised shipping quote.</p>
          <a
            href="tel:+60333238581"
            className="inline-block px-10 py-4 bg-navy-dark text-paper font-display font-bold rounded-sm tracking-wide hover:bg-navy transition-colors text-lg"
          >
            📞 Hunting Lines: +(6) 03 3323 8581
          </a>
        </div>
      </section>
    </div>
  );
}
const values = [
  { title: "Integrity", desc: "We are transparent with our clients at every step of the process." },
  { title: "Reliability", desc: "Consistent, on-time delivery is the standard we hold ourselves to." },
  { title: "Efficiency", desc: "Smart routing and experienced hands mean less waiting for you." },
  { title: "Partnership", desc: "We treat every client like a long-term partner, not just a transaction." },
];

export default function AboutUs() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-navy-dark py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-signal text-xs tracking-widest uppercase mb-4">// Who We Are</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-paper">About Us</h1>
          <p className="text-steel text-lg max-w-xl mx-auto">
            A family-built logistics company rooted in Pelabuhan Klang, dedicated to moving goods and building trust across Malaysia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-signal text-xs tracking-widest uppercase mb-4">// Our Story</p>
            <h2 className="font-display text-4xl font-bold mb-6 leading-snug text-white">
              From Klang, <br />to Everywhere.
            </h2>
            <p className="text-white leading-relaxed mb-4">
              Matrix Inter Trade Sdn Bhd was founded with a simple vision — to provide businesses in Malaysia with a logistics partner they could genuinely count on. Based in Taman Bayu Tinggi, Pelabuhan Klang, we've grown from a small shipping outfit into a full-service logistics provider.
            </p>
            <p className="text-white leading-relaxed mb-4">
              Our journey has been built on relationships — with our clients, our partners, and our team. Every shipment we handle carries the weight of someone's livelihood, and we take that responsibility seriously.
            </p>
            <p className="text-white leading-relaxed">
              Today, we serve hundreds of clients across a wide range of industries, offering freight forwarding, land transport, warehousing, and more — all managed from our Klang base.
            </p>
          </div>

          {/* Real port image */}
          <div className="relative h-72 md:h-96 border border-steel overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494412552100-42e4e7a74ec6?auto=format&fit=crop&w=1600&q=80"
              alt="Aerial view of shipping containers stacked at a port"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-signal text-xs tracking-widest uppercase mb-3">// What Drives Us</p>
            <h2 className="font-display text-4xl font-bold text-paper">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 border border-paper/15 bg-navy-dark hover:border-signal/50 transition-colors">
                <div className="font-mono text-signal font-bold text-2xl mb-3">0{i + 1}</div>
                <h3 className="font-display text-paper font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-mono text-signal text-xs tracking-widest uppercase mb-4">// Company Details</p>
            <h2 className="font-display text-4xl font-bold mb-8 text-ink">Find Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-signal/30 bg-paper-raised flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink font-display font-medium mb-1">Address</p>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    23-A, Jalan Bayu Tinggi 7,<br />
                    Taman Bayu Tinggi,<br />
                    41200 Pelabuhan Klang,<br />
                    Selangor Darul Ehsan, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-signal/30 bg-paper-raised flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink font-display font-medium mb-1">Hunting Lines</p>
                  <a href="tel:+60333238581" className="text-signal hover:text-signal-dark text-sm">
                    +(6) 03 3323 8581
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-signal/30 bg-paper-raised flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-display font-medium mb-1">Business Hours</p>
                  <p className="text-white text-sm">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="text-white/60 text-xs mt-0.5">Closed on weekends & public holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden border border-steel h-80">
            <iframe
              title="Matrix Inter Trade Sdn Bhd location"
              src="https://www.google.com/maps?q=23-A,+Jalan+Bayu+Tinggi+7,+Taman+Bayu+Tinggi,+41200+Pelabuhan+Klang,+Selangor,+Malaysia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
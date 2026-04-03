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
      <section className="relative bg-slate-900 border-b border-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b44_1px,transparent_1px),linear-gradient(to_bottom,#1e293b44_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute right-0 top-0 w-[500px] h-full bg-amber-500/3 skew-x-12 transform translate-x-40" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-4">Who We Are</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A family-built logistics company rooted in Klang, dedicated to moving goods and building trust across Malaysia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-500 text-xs tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="text-4xl font-bold mb-6 leading-snug">
              From Klang, <br />to Everywhere.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Matrix Inter Trade Sdn Bhd was founded with a simple vision — to provide businesses in Malaysia with a logistics partner they could genuinely count on. Based in Taman Bayu Perdana, Klang, we've grown from a small shipping outfit into a full-service logistics provider.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Our journey has been built on relationships — with our clients, our partners, and our team. Every shipment we handle carries the weight of someone's livelihood, and we take that responsibility seriously.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, we serve hundreds of clients across a wide range of industries, offering freight forwarding, land transport, warehousing, and more — all managed from our Klang base.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 h-72 md:h-96 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Add a team or office photo here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 border-y border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-500 text-xs tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 border border-slate-800 rounded-xl bg-slate-950 hover:border-amber-500/30 transition-colors">
                <div className="text-amber-500 font-bold text-3xl mb-3">0{i + 1}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-amber-500 text-xs tracking-widest uppercase mb-4">Company Details</p>
            <h2 className="text-4xl font-bold mb-8">Find Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Address</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    244A, Jalan Batu Unjur 7,<br />
                    Taman Bayu Perdana,<br />
                    41200 Klang, Selangor
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Phone</p>
                  <a href="tel:0333238581" className="text-amber-500 hover:text-amber-400 text-sm">
                    03-3323 8581
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Business Hours</p>
                  <p className="text-slate-400 text-sm">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="text-slate-500 text-xs mt-0.5">Closed on weekends & public holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 h-80 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
              </svg>
              <p className="text-sm">Embed a Google Maps iframe here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="bg-slate-900 border-t border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-3">The People Behind It</p>
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto">
            A dedicated team of logistics professionals committed to getting your cargo where it needs to go.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border border-slate-700 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm">Team Member {i}</p>
                <p className="text-slate-600 text-xs">Add name & title</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

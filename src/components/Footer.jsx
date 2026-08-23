export default function Footer({ navigate }) {
  return (
    <footer className="bg-navy-dark mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-signal rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-navy-dark">
                <path d="M8 30 L8 14 L20 8 L32 14 L32 30 L26 30 L26 20 L14 20 L14 30 Z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-paper font-bold text-sm leading-tight">MATRIX INTER TRADE</p>
              <p className="font-mono text-signal text-[10px] tracking-widest uppercase">Sdn Bhd</p>
            </div>
          </div>
          <p className="text-steel text-sm leading-relaxed">
            Your trusted logistics partner in Pelabuhan Klang, providing reliable shipping and freight services across Malaysia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-mono text-paper/60 mb-4 tracking-widest text-xs uppercase">// Quick Links</p>
          <div className="flex flex-col gap-2">
            {[["home", "Home"], ["services", "Services"], ["about", "About Us"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="text-steel hover:text-signal text-sm text-left transition-colors font-display"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono text-paper/60 mb-4 tracking-widest text-xs uppercase">// Contact</p>
          <div className="flex flex-col gap-3 text-sm text-steel">
            <p className="leading-relaxed">23-A, Jalan Bayu Tinggi 7,<br />Taman Bayu Tinggi,<br />41200 Pelabuhan Klang,<br />Selangor Darul Ehsan, Malaysia</p>
            <a href="tel:+60333238581" className="hover:text-signal transition-colors">📞 Hunting Lines: +(6) 03 3323 8581</a>
            <p className="text-paper/40">Mon – Fri: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="route-rule opacity-20" />
      <div className="max-w-7xl mx-auto px-6 py-5 text-center text-paper/40 text-xs font-mono">
        © {new Date().getFullYear()} MATRIX INTER TRADE SDN BHD — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
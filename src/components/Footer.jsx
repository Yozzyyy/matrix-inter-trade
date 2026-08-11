export default function Footer({ navigate }) {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-amber-500 rounded flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-slate-950">
                <path d="M8 30 L8 14 L20 8 L32 14 L32 30 L26 30 L26 20 L14 20 L14 30 Z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">MATRIX INTER TRADE</p>
              <p className="text-amber-500 text-xs tracking-widest uppercase">Sdn Bhd</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your trusted logistics partner in Klang, providing reliable shipping and freight services across Malaysia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold mb-4 tracking-wider text-sm uppercase">Quick Links</p>
          <div className="flex flex-col gap-2">
            {[["home", "Home"], ["services", "Services"], ["about", "About Us"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="text-slate-400 hover:text-amber-500 text-sm text-left transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-4 tracking-wider text-sm uppercase">Contact</p>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <p className="leading-relaxed">23-A, Jalan Bayu Tinggi 7,<br />Taman Bayu Tinggi,<br />41200 Pelabuhan Klang,<br />Selangor Darul Ehsan, Malaysia</p>
            <p>📞 Hunting Lines: +(6) 03 3323 8581</p>
            <p className="text-slate-500">Mon – Fri: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-5 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Matrix Inter Trade Sdn Bhd. All rights reserved.
      </div>
    </footer>
  );
}

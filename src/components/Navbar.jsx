import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-7 h-7 fill-slate-950">
        <path d="M8 30 L8 14 L20 8 L32 14 L32 30 L26 30 L26 20 L14 20 L14 30 Z" />
      </svg>
    </div>
    <div>
      <p className="text-white font-bold text-sm leading-tight tracking-wide">MATRIX INTER TRADE</p>
      <p className="text-amber-500 text-xs tracking-widest uppercase">Sdn Bhd</p>
    </div>
  </div>
);

export default function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("home")}>
          <Logo />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`text-sm tracking-wider uppercase transition-colors duration-200 ${
                currentPage === link.id
                  ? "text-amber-500"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate("about")}
            className="ml-2 px-5 py-2 bg-amber-500 text-slate-950 text-sm font-bold rounded tracking-wide hover:bg-amber-400 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { navigate(link.id); setMenuOpen(false); }}
              className={`text-left text-sm tracking-wider uppercase ${
                currentPage === link.id ? "text-amber-500" : "text-slate-300"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

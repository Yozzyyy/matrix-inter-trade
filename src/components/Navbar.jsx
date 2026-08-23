import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-7 h-7 fill-paper">
        <path d="M8 30 L8 14 L20 8 L32 14 L32 30 L26 30 L26 20 L14 20 L14 30 Z" />
      </svg>
    </div>
    <div>
      <p className="font-display text-ink font-bold text-sm leading-tight tracking-wide">MATRIX INTER TRADE</p>
      <p className="font-mono text-signal text-[10px] tracking-widest uppercase">Sdn Bhd</p>
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
    <header className="fixed top-0 w-full z-50 bg-paper/90 backdrop-blur-sm border-b border-steel">
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
              className={`font-display text-sm tracking-wide uppercase transition-colors duration-200 ${
                currentPage === link.id
                  ? "text-signal"
                  : "text-ink-soft hover:text-navy"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate("about")}
            className="ml-2 px-5 py-2 bg-navy text-paper text-sm font-display font-semibold rounded-sm tracking-wide hover:bg-navy-dark transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-ink"
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
        <div className="md:hidden bg-paper-raised border-t border-steel px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { navigate(link.id); setMenuOpen(false); }}
              className={`text-left font-display text-sm tracking-wide uppercase ${
                currentPage === link.id ? "text-signal" : "text-ink-soft"
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